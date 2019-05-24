console.log("\n\n\n3.Async await");
const asyncFun = sec => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toString());
    }, sec * 1000);
  });
};

const mySync = () => {
  return "func";
};

const myAsync = async () => {
  await asyncFun(3).then(time => console.log(1, time));
  return "2. async";
};

//console.log(mySync());
//console.log(myAsync()); // return promise
myAsync().then(res => console.log(res));
