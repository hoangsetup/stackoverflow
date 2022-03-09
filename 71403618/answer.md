Just merge it into one file with a clear expectation message.

```ts
import { getEnv } from './fn';

describe('fn', () => {
  describe('getEnv', () => {
    test('should return "Test" when window location is an IP address', () => {
      Object.defineProperty(window, 'location', {
        value: {
          href: 'http://192.168.2.3:9001'
        },
      });

      const actual = getEnv();

      expect(actual).toBe('Test');
    });

    test('should return "Product" when window location is a domain', () => {
      Object.defineProperty(window, 'location', {
        value: {
          href: 'https://xx.com'
        },
      });

      const actual = getEnv();

      expect(actual).toBe('Product');
    })
  });
});
```
