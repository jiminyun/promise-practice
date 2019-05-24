#J avascript Promises

## What is a promise?

- How do you write your own promise?
- How do you get the result of a promise (ex. from an API call)?
- How do you get the result from multiple promises in order (using Promise.all, etc.)?

// Do not care abt this now -핵심은 : "비동기에서 성공/실패를 분리" 메서드 수행 한다. -예제 : async function getFirstUser() {
try {
let users = await getUsers();
return users[0].name;  
 } catch (err) {
return {
name: 'default user'
};
}
}

case#1. 기다리지 않는 (await)상황
만약 그냥 호출 한다면, let users = getFirstUser()
자동으로 에러를 뿜지는 않겠지만,
user는 resloved된 값이 아니라 promise 객체를 받게 될꺼야.
내가 user변수로 무언가를 할때 까지 오류 안내다가,
내가 원하는 곳에서 쓸때 null 값을 줄거야.
반드시 await 하세요! promise 받는 것을 의도한거라면 패스

case#2. 멀티값을 await 해야하는 상황
await - 한번에 1개만 기다릴수 있다.

const user = await getUser();
const school = await getSchool();

두개를 동시에 받아올수 있어야 하는데도,user와 school을 순차적으로
가져올것이다.
해결을 위해서 아래와 같이 가능

const [user, school] = await Promise.all([getUser(), getSchool()]);

- 기본적으로 Promise.all promise들의 배열을 받는다. 그것을 다 합쳐서 하나의 promise로 만든다.
- 하나의 promise는 배열안에 있는 모든 promise들이 resolve될때 최종적으로 resolve 한다.
- promise all이 하는 일은 배열들을 그룹화해서 하나의 새로운 promise로 만들고
  모두 종료할때 까지 "기다리는 것!" (async.parallel과는 다른것 : 얘는 전달한 메소드를 call한다.)
-
