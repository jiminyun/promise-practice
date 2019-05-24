#Javascript Promises

##What is a promise?
-How do you write your own promise?
-How do you get the result of a promise (ex. from an API call)?
-How do you get the result from multiple promises in order (using Promise.all, etc.)?

// Do not care abt this now -콜백사용 : 비동기처리 중첩 -> 에러,예외처리가 어렵다. 중첩으로 인한 복잡도 증가

상기 문제 해결을 위해 프라미스가 라이브러리로 생겨났고, ES6에서 언어적 차원에서 지원.

-핵심은 : "비동기에서 성공/실패를 분리" 메세드 수행 한다.
