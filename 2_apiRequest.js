console.log("\n\n\n2.Api Request");

// make a network request to url and return a promise
// promise resolves with a response object
fetch("http://hn.algolia.com/api/v1/search?query=redux")
  .then(response => response.json()) //This is just an HTTP response of course, not the actual JSON. To extract the JSON body content from the response, we use the json() method
  .then(data => console.log("getFetch0", data.hits))
  .catch(err => console.log(err));

const getFetch1 = fetch("http://hn.algolia.com/api/v1/search?query=redux")
  .then(response => response.json())
  .then(data => data.hits)
  .catch(err => console.log(err));

console.log("getFetch1", getFetch1); //Promise pending

const getFetch2 = () => {
  fetch("http://hn.algolia.com/api/v1/search?query=redux")
    .then(response => response.json())
    .then(data => console.log("getFetch2", data.hits))
    .catch(err => console.log(err));
};

getFetch2();

const getData = () => {
  return new Promise((resolve, reject) => {
    const data = fetch(
      "https://www.hatchways.io/api/assessment/work_orders"
    ).then(response => response.json());
    if (data) {
      resolve(data);
    }
    reject(new Error("Request is failed"));
  });
};

getData()
  .then(resolvedData => console.log("resolvedData", resolvedData.orders))
  .catch(err => console.log("err", err));
