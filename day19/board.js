let 게시판 = [
    {번호 : 1, 제목 : '공부', 작성자 : '11111', 작성일 : '2024-06-03', 조회수 : '1'}
]

let memberList = [];
화면출력();
function 화면출력() {
    //어디에 
    let 글쓰기출력 = document.querySelector('#글쓰기출력');
    //무엇을
    let html = ``;

    for(let i = 0 ; i < 게시판.length; i++){
        html += `<tr>
                    <td>${게시판[i].번호}</td>
                    <td>${게시판[i].제목}</td>
                    <td>${게시판[i].작성자}</td>
                    <td>${게시판[i].작성일}</td>
                    <td>${게시판[i].조회수}</td>
                </tr>`
    }

    //출력
    글쓰기출력.innerHTML = html;
}

function tpclick() {
    location.href="write.html"
}