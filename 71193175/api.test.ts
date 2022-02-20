import { AxiosPromise } from "axios";
import { mocked } from "ts-jest/utils";
import { axiosInstanceCounter } from "./api";
import { axiosInstance } from "./axios-instance";

jest.mock("./axios-instance");

describe("api", () => {
  describe("axiosInstanceCounter()", () => {
    it("should call api with correct parameters", async () => {
      mocked(axiosInstance).mockResolvedValue(Promise.resolve() as unknown as AxiosPromise<void>);

      await axiosInstanceCounter();

      expect(axiosInstance).toHaveBeenCalledWith({ method: "post" });
    });
  });
});
