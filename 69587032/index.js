(async () => {
  const array = [];
  const result = [];

  for (const item of array) {
    const body = {
      parameter1: item,
      parameter2: result[result.length - 1] || '',
    };

    const res = await axios.post('', body);
    result.push(res.data.x);
  }

  console.log('Result: ', result);
})();

