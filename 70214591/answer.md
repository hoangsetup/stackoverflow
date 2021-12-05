You need to mock `middy` instead, to make it becomes a useless function. That function recipe a function as a parameter and return that parameter.

```js
import thirdPartyService from '../src/thirdPartyService'

jest.mock('@middy/core', () => {
  return (handler) => {
    return {
      use: jest.fn().mockReturnValue(handler), // ...use(ssm()) will return handler function
    }
  }
})

describe('thirdPartyService()', () => {
  beforeEach(() => {
    jest.spyOn(helpers, 'makeRequest') // spy on helpers unit
  })

  describe('makeThirdPartyServiceRequest', () => {
    it('should make a request with correct parameters', async () => {
      // Given
      const url = `https://someurltoathirdpartyservice`
      const params = 'any params'
      const apiResponse = 'any response'
      mocked(helpers.makeRequest).mockResolvedValue(apiResponse)

      // When
      const actual = await thirdPartyService.makeThirdPartyServiceRequest(params)

      // Then
      expect(actual).toBe(apiResponse)
      expect(helpers.makeRequest).toHaveBeenCalledWith(
        url,
        {
          method: 'POST',
          body: params
        }
      )
    })
  })
})
```
