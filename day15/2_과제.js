/*
네이버 주식 게시판
실습과제 : 키오스크
 실행순서 : 1. 카테고리 > 2. 제품선택 > 3. 장바구니 > 4. 주문버튼(주문)
 1. 카테고리 : 카테고리명
 2. 제품 : 제품명,가격
 3. 장바구니 : 사이즈M,L 
 4. +주문현황 : 주문시간, 주문된제품
*/
let 카테고리목록 = [
    { cno : 1 , name : '삼성전자'},{ cno : 2 , name : 'LG전자'}
]

let 게시물목록 = [
    {bno : 1, btitle : '올랐다', bcontent : `좋아요`, bpassword : '1234', bdate : '2024-05-28' , cno:1},
    {bno : 2, btitle : '내렸다', bcontent : `싫어요`, bpassword : '4567', bdate : '2024-05-27' , cno:1},
]

let 댓글목록 = [
    {rno : 1, rcontent : '좋겠네', rdate : '2024-05-28' , bno:1},
    {rno : 2, rcontent : '싫겠네', rdate : '2024-05-28' , bno:2},
    {rno : 3, rcontent : '하하하', rdate : '2024-05-28' , bno:2}
]

//1. 1번 게시물의 댓글 출력해보자
let clickBno = 1;
for(let i = 0; i<댓글목록.length; i++){ //댓글목록 모두 순회
    //조건 1번 게시물만
    if(댓글목록[i].bno == 1){
        console.log(댓글목록[i]);
    }

}

//2. 삼성전자의 게시물과 댓글 출력해보자.
let clickCno = 1;
for(let i = 0; i<게시물목록.length; i++){ //게시물 목록 모두 순회
 //조건 : clickCno와 같은 경우만 출력
 if(게시물목록[i].cno == clickCno){
    console.log(게시물목록[i]);
    console.log('------------------------------------------------------')
    for(let j = 0; j<댓글목록.length; j++ ){
        //조건 2 위에있는 i번째 게시물번호와 댓글에 있는 게시물번호와 같으면
        if(게시물목록[i].bno == 댓글목록[j].bno){
            console.log(댓글목록[j])
        }
    } //for 2 end
    console.log('------------------------------------------------------')
 }
}