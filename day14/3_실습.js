/*
비회원제 게시판 day13 1_실습


- day 13
let boardList = [ 
    "제목입니다,내용입니다,1234,2024-05-24,3" , 
    "두번째제목이야,또내용입니다,4567,2024-05-25,0" ];

- day 14
게시판 정보 : 제목 , 내용, 비밀번호 , 날짜 , 조회수
게시판 객체 = {제목 , 내용 , 비밀번호 , 날짜 , 조회수:}
-만일 게시물객체가 여러개이면 배열을 사용하자
게시물목록 = [ 게시물객체 , 게시물객체, 게시물객체]
-여러 객체들을 식별할때 인덱스는 문제점이있다. 인덱스는 절대적인 식별자 역할 못함
-게시물번호 만들어보자. = 삭제/수정되도 고정 으로 사용하자.
*/

let boardList = [
    {번호 : 1, 제목 : '제목입니다.', 내용 : '내용입니다.', 비밀번호 : '1234', 작성일 : '2024-05-24', 조회수 : 3} ,
    {번호 : 2, 제목 : '두번째제목이야.', 내용 : '또내용입니다.', 비밀번호 : '4567', 작성일 : '2024-05-25', 조회수 : 0}
] //배열 선언 끝

_allRead();
function _allRead(){
    //어디에
    let tableBody = document.querySelector('#tableBody')

    //무엇을
    let html = '';

    for(let i=0;i<boardList.length;i++){
    let board = boardList[i];
    html += `<tr>
            <td> ${board.번호} </td>
            <td> ${board.제목} </td>
            <td> ${board.작성일} </td>
            <td> ${board.조회수} </td>
            </tr>`
    }
    
    //출력/대입
    tableBody.innerHTML = html;
}

function _create(){

    let title = document.querySelector('#titleInput').value;
    let content = document.querySelector('#contentInput').value;
    let password = document.querySelector('#passwordInput').value;
    // 2-1 입력받지 않은 데이터를 초기화 
    let date = new Date(); // new Date() : 현재 날짜/시간 를 반환해주는 클래스; 
    // 원하는 날짜 추출 해서 가공 
    let currentYear = date.getFullYear(); 
    let currentMonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1 ;
    let currentDay =  date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    date = `${ currentYear }-${ currentMonth }-${ currentDay }` // 날짜 구성 
  
    let view = 0; // 처음 등록시 조회수는 0부터 시작
  
    // 3. ,쉼표 구분이 아닌 객체형식으로 만들어보자
    let board = {번호 : 3 , 제목 : title , 내용 : content , 작성일 : date , 조회수 : view, 비밀번호 : password}

    // 4. 배열 등록 
    boardList.push( board ); 
    alert('등록성공') // 5. 등록 성공 
    _allRead(); // 등록성공시 전체출력 함수 호출 

}

