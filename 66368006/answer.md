`stripe` exported as a function, when you want to mock it you can use `jest.doMock helper.

Imagine that you have an index.js like this:

```js
const stripe = require('stripe')('key'); // You use require('stripe') as a function

exports.CreateSession = async (req) => {
  const session = await stripe.checkout.sessions.create({
    // information to create session
  });
  return session;
}

```

Then, testing file will be like this:

```js
describe('Create session', () => {
  beforeEach(() => {
    jest.resetModules(); // importance line
  });

  it('creates the session', async () => {
    const req = {
      unitAmount: 100,
      imageUrl: '',
      metadata: {
        userId: '1'
      }
    };

    jest.doMock('stripe', () => {
      // instead of mocking return an object, let’s return a function
      return jest.fn(() => ({ // when the function be called, it return an object like this
        checkout: {
          sessions: {
            create: jest.fn(() => Promise.resolve({
              sessionId: '123' // sessionId instead of id , right?
            })),
          },
        },
      }));
    });

    const { CreateSession } = require('./index'); // import function what you need to test
    const resp = await CreateSession(req); // execute with a parameter
    expect(resp.sessionId).toBe('123');
  });
});
```
