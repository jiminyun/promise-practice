console.log("1.Create Promise");
// Create Promise
const promise = res => {
  return new Promise((resolve, reject) => {
    if (res) {
      resolve("succeed");
    } else {
      reject("something is wrong");
    }
  });
};

// Run Promise
promise(true).then(
  result => {
    console.log(result);
  },
  err => {
    console.log(err);
  }
);

// Get the result from Multiple promises
const param = true;
const promise1 = new Promise((resolve, reject) => {
  if (param) {
    resolve("succeed");
  } else {
    reject("fail");
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (param) {
    resolve("succeed1");
  } else {
    reject("fail2");
  }
});

Promise.all([promise1, promise2]).then(
  values => {
    console.log("all completed", values);
  },
  err => {
    console.log("err", err);
  }
);
