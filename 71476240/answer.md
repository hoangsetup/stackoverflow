'POST' means all done, there is no action after that(the data is already updated), you have to save it again after setting the status to update the status. 

`PRE` hook is correct for your case, just change the condition: Checking on update data instead of current data

```js
SaleSchema.pre('findOneAndUpdate', async function() {
  
    if (this_update.outstandingBalance < 1) {
      
      this._update.status = false;
    }
  })
```
