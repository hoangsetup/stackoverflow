const rewire = require('rewire')
require('./func')

describe('test', () => {
  let func;
  let getColorSpy;
  beforeEach(() => {
    getColorSpy = jest.fn()
    func = rewire(__dirname + '/func.js')
    func.__set__('getColor', getColorSpy)
  })
  test('should return Red-L when getColor returns Red', () => {
    getColorSpy.mockReturnValue('Red')

    const res = func.getInfo()

    expect(res).toEqual("Red-L")
  })
})
