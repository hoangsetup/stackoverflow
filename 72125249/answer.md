Your production code just forward response from the service to outside, then just mock `getObject` to return anything, and expect the result should be `getObject` result and the service function will have called with correct parameter:

```ts
it("should return readable if file present", async () => {
  const readable = "readable-object" as unknown as Readable;
  jest.spyOn(s3service, "getObject").mockResolvedValue(readable);

  const actual = await someService.downloadFile(TestConstants.reportName);

  expect(actual).toBe(readable);
  expect(s3service.getObject).toHaveBeenCalledWith(TestConstants.reportName);
});
```
