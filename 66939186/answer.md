First of all, make sure that your client successfully executes the request.

Then, use arrow function instead of an anonymous function definition to handle `then` result of the promise. Now `this` context will refer to your component.

```js
submitForm() {
  let formData = new FormData();
  formData.append("file", this.file);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  this.axios
    .post(
      "http://localhost/api.php",
      formData,
      config
    )
    .then((data) => { // like this
      this.$emit("serverReturnedData", data);
    })
    .catch(() => {
      console.log("FAILURE!!");
    });
}
```
