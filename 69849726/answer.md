As you can see, the `yum` command requires an action to install `python3` - `Is this ok [y/d/N]: Exiting on user command`. But you don't respond to its question, then it failed.

Let's accept to install `python3` and its dependencies:

```sh
yum install python3 -y
```
