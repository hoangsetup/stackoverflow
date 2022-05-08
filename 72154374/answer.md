According to this [issue][1], whenever your Docker image is invoked, whether in Lambda or on your local machine, you need an entry script that will help your use the RIE proxy when necessary (e.g., on our local machine).

`entry.sh` in root project:

```sh
#!/bin/sh
# Check if the AWS_LAMBDA_RUNTIME_API is not set. This environment
# variable is set when the image is running on Lambda.
if [ -z "${AWS_LAMBDA_RUNTIME_API}" ]; then
  # We know the image is being run off of Lambda, so we need to use the RIE
  # to start the function.
  exec /usr/bin/aws-lambda-rie ./node_modules/.bin/aws-lambda-ric $1
else
  # We know the image is being run on Lambda so we don't need to use the RIE.
  exec ./node_modules/.bin/aws-lambda-ric $1
fi   
```

Your Dockerfile:

```Dockerfile
FROM node:16-alpine

# Bundle app source
COPY . .

RUN npm install

EXPOSE 8080

# Downloads the Lambda Runtime Interface Emulator (RIE)
ADD https://github.com/aws/aws-lambda-runtime-interface-emulator/releases/latest/download/aws-lambda-rie /usr/bin/aws-lambda-rie

RUN chmod +x /usr/bin/aws-lambda-rie
RUN chmod +x entry.sh

ENTRYPOINT ["entry.sh"]

CMD ["index.handler"]
```


  [1]: https://github.com/aws/aws-lambda-nodejs-runtime-interface-client/issues/15
