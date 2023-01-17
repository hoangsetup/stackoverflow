`window` is an object and if it doesn’t contain `window` function, you can not spy on it.


For your production code, just mock `measureUserAgentSpecificMemory` function are enough:

```js
import { Memory } from './memory'


describe('Memory', () => {
  const data = {
    bytes: 1500,
    breakdown: [
      {
        bytes: 1000000,
        types: ['JavaScript'],
      },
      {
        bytes: 0,
        types: ['DOM'],
      },
    ],
  };

  let memory: Memory;
  let measureUserAgentSpecificMemory: jest.Mock;

  beforeEach(() => {
    measureUserAgentSpecificMemory = jest.fn().mockResolvedValue(data);
    (window as any).performance = {
      measureUserAgentSpecificMemory,
    };

    memory = new Memory();
  });

  it('should measure User Agent Specific Memory', async () => {
    memory.startMonitoring();

    expect(memory.memoryData).toEqual([1000000]);
    expect(measureUserAgentSpecificMemory).toHaveBeenCalled();
  });
});
```
