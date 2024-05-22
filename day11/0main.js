//복습예제 : 특정 html (star div)에 '★'을 5개 출력하시오.

/*

/// document.querySelector() : 특정 선택자의 html 요소를 JS객체로 반환해주는 함수 
// document.querySelector('#idName')
// document.querySelector('.CSSNAME')
// document.querySelector('tagname')
*

Dom객체.innerHTML = 마크업 사이에 넣을 HTML형식의 문자열
* <마크업> 여기 </마크업>
* <div></div> , <ol></ol>, <span></span> 등은 innerHTML사용가능
* <input/> , </img> 등은 innerHTML 사용불가능


*/

let html = ''; //1. html 변수 구성
for(let i = 1; i <= 5; i++){ //데이터를 1부터 5까지 1씩 증가하며 하나씩 출력
    html += '★' //html변수에 ★입력
    //누적합계 : 변수 += 값; 변수 + 값
}
//4. 특정 HTML 마크업의 innerHTML에 변수값을 대입하기.
document.querySelector('#star1').innerHTML = html;

//2. 복습예제 특정 HTML(star div)에 총점5점 만점에 고객평점 만큼
// 출력형식 : 만약에 고객평점이 3점이면 ★★★☆☆
let 고객평점 = '3';
let html2 = '';  //구성할 html변수 선언
for(let i =1; i <= 5; i++){ //2. 1부터 5까지 1씩증가하면서 ☆출력
    if( i <= 고객평점){html2 += '★'; continue;} //3. 만일 고객평점 만큼은 ★ 출력
    html += '☆'; //아니면 
}
document.querySelector('star2').innerHTML = html2;

//3. 복습예제 : 특정 HTML sheet div 에 좌석 배열 상태에 아래와 같이 출력하시오.
/*
빈좌석 : X, 예약된자석 : o
- ㅁ ㅁ
  ㅁ ㅁ
  ㅁ ㅁ
  빈좌석이면 gray 표시 , 예약된 자석이면 red표시
*/
let sheetArray = ['0','x','o','0','x','0','x']
