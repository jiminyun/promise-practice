console.log("\n\n\n4.Promise Chaining");

console.log(1);
const getData3 = () => {
  console.log(2);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 2000);
  });
};
console.log(3);
// then() 으로 여러 개의 프로미스를 연결한 형식
getData3()
  .then(data => {
    console.log(data);
    return data + 10;
  })
  .then(result => {
    console.log(result);
    return result + 10;
  })
  .then(result => {
    console.log(result);
    return result + 10;
  });
