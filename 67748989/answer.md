User jest mock factory to mock `firebase` module.

```ts
jest.mock('firebase-admin', () => {
  return {
    auth: jest.fn(),
  }
});
```

Example for spec file:

```ts
import { auth } from 'firebase-admin';
import Test from './index';

jest.mock('firebase-admin', () => {
  return {
    auth: jest.fn(),
  }
});

describe("Test", () => {
  const email = 'mocked-email@example.com';
  const user = { email, username: 'mocked-username' };

  let mockedAuth: jest.Mock;
  let mockVerifyIdToken: jest.Mock;
  let mockUserService: { findByUsername: jest.Mock }; // mock userService
  let testInstance: Test;

  beforeEach(() => {
    mockedAuth = auth as jest.Mock;
    mockVerifyIdToken = jest.fn()
    mockedAuth.mockReturnValue({
      verifyIdToken: mockVerifyIdToken,
    });

    mockUserService = {
      findByUsername: jest.fn(),
    };

    testInstance = new Test(mockUserService);
  });

  test("should return user info when pass correct payload", async () => {
    const payload = 'mocked-payload';

    mockVerifyIdToken.mockResolvedValue({ email });
    mockUserService.findByUsername.mockResolvedValue(user);

    const result = await testInstance.validateUser(payload);

    expect(result).toBe(user);
    expect(mockVerifyIdToken).toHaveBeenCalledWith(payload, true);
    expect(mockUserService.findByUsername).toHaveBeenCalledWith(email);
  });
})

```
