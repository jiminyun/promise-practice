for (var i = 1; i < 5; i++) {
  console.log(i);
}

//var는 원래 펑션 스코프인데 지금 함수가 없기때문에 글로벌 변수야.
console.log("the value of i is now: ", i);

for (var i = 1; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
} // 5 5 5 5
/*
자바스크립트는 싱글스레드인데, 이건 한번에 한 태스크만 수행한다는 거지
그럼 비동기 코드를 어떻게 사용할수 있을까?
자바스크립트는 브라우져 안에서 실행되고, 브라우져는 코드실행하는것보다 더 많은 일들을 해 
브라우져가 고려하는 4가지가 있어.
1.런타임 엔진
2.웹api, DOM, setTimeout, ajax
3.콜백큐이벤트 onclik, onload
4.이벤트 루프
*/
