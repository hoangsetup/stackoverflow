import newrelic from 'newrelic'
import controller from './index'

jest.mock('newrelic', () => {
  return {
    incrementMetric: jest.fn(),
  }
})

describe('Controller', () => {
  it('should call incrementMetric with correct', () => {
    controller.index()

    expect(newrelic.incrementMetric).toHaveBeenCalledWith('hello', 1)
  })
})
