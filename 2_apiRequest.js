console.log("\n\n\n2.Api Request");

const getData = () => {
  return new Promise((resolve, reject) => {
    //const data = fetch("http://hn.algolia.com/api/v1/search?query=react");
    const response = 100;
    if (response) {
      resolve(response);
    }
    reject(new Error("Request is failed"));
  });
};

getData()
  .then(resolvedData => console.log("resolvedData", resolvedData))
  .catch(err => console.log("err", err));
