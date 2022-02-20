As you can see, `return axiosInstance({` means `axiosInstance` is a function, then if you want to test `axiosInstanceCounter` function, just mock `axiosInstance` as a normal function(in your case the api call will not return anything):

**api.test.ts** // testing for `api.ts`

```ts
import { AxiosPromise } from "axios";
import { mocked } from "ts-jest/utils"; // a helper function from ts-jest
import { axiosInstanceCounter } from '../features/api/axiosTest'; // should be ../features/api ???
import { axiosInstance } from '../features/instancec/axios-instance';

jest.mock("../features/instancec/axios-instance");

describe("api", () => {
  describe("axiosInstanceCounter()", () => {
    it("should call api with correct parameters", async () => {
      // mock to resolve a Promise<void>
      mocked(axiosInstance).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

      await axiosInstanceCounter();

      expect(axiosInstance).toHaveBeenCalledWith({ method: "post" });
    });
  });
});

```
