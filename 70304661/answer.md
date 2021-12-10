No, you can't.

> Because the wildcard asterisk character (*) is a valid character that
> can be used in object key names, Amazon S3 literally interprets the
> asterisk as a prefix or suffix filter. You can't use the wildcard
> character to represent multiple characters for the prefix or suffix
> object key name filter.

You have to register all prefix value strings to the S3 event. For you case, it will look like this:

```yml
functions:
  profilePictureInput:
    handler: triggers/handler.profilePictureInput
    memorySize: 10240
    timeout: 25
    events:
      - s3:
          bucket: ${self:custom.mediaInputBucketName}
          existing: true
          event: s3:ObjectCreated:*
          rules:
            - prefix: private/foo/profile-pictures
            - prefix: private/bar/profile-pictures
```
