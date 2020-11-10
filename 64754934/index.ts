export async function fetch() {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null, {name: 'hoangdv'}), 1000);
  });
}
export async function getPolicyStatsAPI(this: any) {
  console.log(fetch);
  const result = await fetch();
  return result;
}
