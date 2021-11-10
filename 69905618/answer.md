Your test is working well, what you need to update is your production code.

Current logic, when `firstPlayerScoreTimes` is 1, you set the score as `Fifteen love` and also append `Love all` string to the score. I guess this is not your requirement. Let's update the `getScore` function:

```js
  getScore() {
    if (this.firstPlayerScoreTimes === 1) {
      return this.totalScore += "Fifteen love"; // stop, that's enough 
    }
    this.totalScore += "Love all";
  }
```
