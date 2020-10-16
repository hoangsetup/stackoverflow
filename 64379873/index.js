const someCall = async () => {}
const myFunc = async () => {
  const myResult = someCall();
  return await myResult;
};


console.log(myFunc());
