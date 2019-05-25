// Callback func
function getFirstUser(callback) {
  return getUsers()
    .then(function(users) {
      return callback(null, users[0].name);
    })
    .catch(function(err) {
      return callback(err);
    });
}

// Callback to Promise
const callbackToPromise = (method, ...args) => {
  return new Promise(function(resolve, reject) {
    return method(...args, function(err, result) {
      return err ? reject(err) : resolve(result);
    });
  });
};

// Call getFirstUser
const getFirstUser = async () => {
  let users = await callbackToPromise(getUsers);
  return users[0].name;
};

/*
myApp.endpoint('GET', '/api/firstUser', function(req, res) {
    return getFirstUser().then(function(firstUser) {
        res.json(firstUser)
    });
});

myApp.registerEndpoint('GET', '/api/firstUser', async function(req, res) {
    try {
        let firstUser = await getFirstUser();
        res.json(firstUser)
    } catch (err) {
        console.error(err);
        res.status(500);
    }
});


// promises
function loadJson(url) {
  return fetch(url).then(response => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json").catch(alert); // error: 404

// async/await version
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
  throw new Error(response.status);
}

loadJson("no-such-user.json").catch(alert); // error: 404
*/
