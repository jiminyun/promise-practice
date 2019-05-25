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

/*
case#1. 기다리지 않는 (await)상황
만약 그냥 호출 한다면, let users = getFirstOrder()
자동으로 에러를 뿜지는 않겠지만,
data는 resloved된 값이 아니라 promise 객체를 받게 될꺼야.
내가 data변수로 무언가를 할때 까지 오류 안내다가,
내가 원하는 곳에서 쓸때 undefined 값을 줄거야.
반드시 await 하세요! promise 받는 것을 의도한 것이 아니라면
*/

const getFirstOrder = async () => {
  try {
    const data = await fetch(
      "https://www.hatchways.io/api/assessment/work_orders"
    ).then(res => res.json());
    //data.orders.map(order => console.log(order.name));
    //return data.orders[0].name;
    console.log(data); // Promise {<pending>} if there is no await
    return data.orders;
  } catch (err) {
    return {
      err: err
    };
  }
};

getFirstOrder().then(order => console.log("orders", order));
