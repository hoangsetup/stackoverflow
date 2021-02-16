describe("start.js", () => {
  let shelljs
  let exitSpy

  beforeEach(() => {
    jest.mock("shelljs", () => {
      return {
        exec: jest.fn(),
        which: jest.fn(),
        echo: jest.fn(),
      }
    })
    shelljs = require("shelljs")
    exitSpy = jest.spyOn(process, "exit").mockImplementation(() => {})
  });

  afterEach(() => {
    jest.resetModules()
    jest.resetAllMocks()
  })

  it("should execute process.exit with code is 1 when 'serve' is not existed", () => {
    shelljs.which.mockReturnValue(false)

    require("./start")

    expect(shelljs.which).toHaveBeenCalledWith("serve");
    expect(shelljs.echo).toHaveBeenCalledWith("'serve' is missing, please run 'npm ci'")
    expect(exitSpy).toHaveBeenCalledWith(1)
    // expect(shelljs.exec).toHaveBeenCalled() // can not check like that, exitSpy will not "break" your code, it will be work well if you use if/else syntax
  });

  it("should execute serve when 'serve' is existed", () => {
    shelljs.which.mockReturnValue(true)

    require("./start")

    expect(shelljs.which).toHaveBeenCalledWith("serve");
    expect(shelljs.echo).not.toHaveBeenCalled()
    expect(exitSpy).not.toHaveBeenCalled()
    expect(shelljs.exec).toHaveBeenCalledWith("serve -s build -l 3000")
  });
})
