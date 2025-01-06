You can provide `environment` value based on a condition (ex: `stage`). Then, when the stage is `dev` let provide an empty object, otherwise provide env value from SSM.

```yml
service: wbx-borrower-onboarding-service
frameworkVersion: '3'

plugins:
  - serverless-offline
  - serverless-dotenv-plugin

package: 
  individually: true

custom:
  stage: ${opt:stage}
  region: ${env:REGION, 'ap-south-1'}
  accountId: ${aws:accountId}
  prune:
    automatic: true
    number: 5
  logRetentionPeriod:
    dev: 14
    prod: 90
  environment: # Define env object for 2 stages
    prod:
      NODE_ENV: ${self:provider.stage}
      CLERK_API_KEY: ${ssm:/wbx/${self:provider.stage}/clerk/secret/key}
      WBX_BORROWER_ONBOARDING_DOCS_S3_BUCKET: wbx-borrower-onboarding-docs
      WBX_DB_PROXY: ${ssm:/wbx/${self:provider.stage}/db/proxy}
      WBX_DB_HOST: ${ssm:/wbx/${self:provider.stage}/db/host}
      WBX_DB_USER: ${ssm:/wbx/${self:provider.stage}/db/user}
      WBX_DB_PASSWORD: ${ssm:/wbx/${self:provider.stage}/db/password}
      WBX_DB_NAME: woodbox
    dev: {} # Empty
provider:
  name: aws
  runtime: nodejs18.x
  stage: ${opt:stage, 'dev'}
  region: ${opt:region, 'ap-south-1'}
  timeout: 30
  apiGateway:
    binaryMediaTypes:
      - "multipart/form-data"
  environment: ${self:custom.environment.${opt:stage}} # Select env object based on the stage
```