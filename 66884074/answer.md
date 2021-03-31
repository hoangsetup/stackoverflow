It seems that, in python3, a [Header][1] object is needed to encode a `From` as `utf-8` (The same as you did for `Subject`):

```python
msg['From'] = email.header.Header(from_email, 'utf-8')
```


  [1]: http://docs.python.org/py3k/library/email.header.html#email.header.Header
