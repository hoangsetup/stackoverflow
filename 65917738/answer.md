Try this way, using jest.mock to modify import value of `activityConsumer`

```ts
import { Request, Response } from 'express';
// const activityConsumer = require('../../src/utils/activity.consumer');

const mockRequest = {
  params: {
    activityArn: 'activityArn'
  }
} as Request;

const mockedJsonFunction = jest.fn();

const mockResponse: any = {
  json: jest.fn(),
  status: jest.fn().mockReturnValue({ json: mockedJsonFunction }),
} as Response;

let stopConsumerMock;

describe('consumer handler', () => {
  beforeAll(() => {
    // stopConsumerMock = activityConsumer.stopConsumer = jest.fn().mockReturnValue(1);
    stopConsumerMock = jest.fn().mockReturnValue(1);
  });
  beforeEach(() => {
    jest.resetModules();
  });
  afterEach(() => {
    stopConsumerMock.mockClear();
    mockResponse.json.mockClear();
  });
  describe('stopConsumingHandler', () => {
    it('Should return success true and not call stopConsumer when no consumer exists', () => {
      // activityConsumer.consumer = undefined;

      // mock by this way
      jest.mock('../../src/utils/activity.consumer', () => ({
        consumer: undefined,
        stopConsumer: stopConsumerMock,
      }));


      const { stopConsumingHandler } = require('../../src/handlers/consumer.handlers');
      stopConsumingHandler(mockRequest, mockResponse);

      expect(stopConsumerMock.mock.calls.length).toEqual(0);
      expect(mockResponse.json.mock.calls.length).toEqual(1);
      expect(mockResponse.json).toHaveBeenCalledWith({ success: true });
    });
    it('Should return success true and call stopConsumer when consumer exists', () => {
      // activityConsumer.consumer = true;

      // mock by this way
      jest.mock('../../src/utils/activity.consumer', () => ({
        consumer: true, // mock value for consumer
        stopConsumer: stopConsumerMock,
      }));

      const { stopConsumingHandler } = require('../../src/handlers/consumer.handlers');

      stopConsumingHandler(mockRequest, mockResponse);

      expect(stopConsumerMock.mock.calls.length).toEqual(1);
      expect(mockResponse.json.mock.calls.length).toEqual(1);
      expect(mockResponse.json).toHaveBeenCalledWith({ success: true });
    });
  });
});
```
