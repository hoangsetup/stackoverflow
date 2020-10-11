function randomNum() {
  let timeToWait = 0; // here
  for (let i = 1; i <= 10; i++) {
    let time = Math.random() * 100;
    timeToWait += time; // here
    setTimeout(() => {
      console.log(i, time);
    }, timeToWait); // update here. Updated
  }
}
randomNum();
