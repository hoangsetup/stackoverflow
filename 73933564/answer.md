Just compile your go code to binary files then run the serverless offline command.

You can create a `Makefile` to create some alias command. ex

```
.PHONY: build clean deploy deploy-local

build: clean
    @env GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -ldflags="-s -w" -o bin/hello src/hello/main.go

clean:
    @rm -rf ./bin

deploy-local: build
    @sls offline

deploy: clean build
    @sls deploy --verbose
```

Then, you can run `make deploy-local` to start serverless offline server
