`aws-cli` auto access to vim edit mode by default.

You can avoid it by setting `AWS_PAGER` environment variable is `""` before execute `aws` command.

```shell
export AWS_PAGER=""
aws logs create-export-task...
```

Or, you can fix it in to aws's config file (`~/.aws/config`):

```conf
[default]
cli_pager=
```
