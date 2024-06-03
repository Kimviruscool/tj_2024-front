let memberList = [];

function findid(){ console.log('findid()');

memberList = JSON.parse(localStorage.getItem('memberList')); 
    if(memberList == null){memberList = []}

    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;

    let findid = document.querySelector('#findID');

    let html = ``;

    for(let i = 0; i<memberList.length; i++){
        if(memberList[i].name == name && memberList[i].phone == phone){
            html += `${memberList[i].id}`
            findid.innerHTML = html;
            alert('아이디 찾기');
            return; 
        }
    }
    alert('일치하는 아이디를 찾을수 없습니다.');
}

function findpw(){ console.log('findpw()');

memberList = JSON.parse(localStorage.getItem('memberList')); 
    if(memberList == null){memberList = []}

    let id = document.querySelector('#id').value;
    let phone1 = document.querySelector('#phone1').value;

    let findPw = document.querySelector('#findPw');

    let html = ``;

    for(let i = 0; i<memberList.length; i++){
        if(memberList[i].id == id && memberList[i].phone == phone1){
            html += `${memberList[i].pw}`
            findPw.innerHTML = html;
            alert('비밀번호 찾기');
            return; 
        }
    }
    alert('일치하는 아이디를 찾을수 없습니다.');
}


/*
board.html : 모든 html 상 nav에 <li class="nav-item"> <aclass> 게시판 </a></li>

1. 모든 글 출력 페이지(board.html) 화면구성

글쓰기 버튼 [버튼]
번호 제목 작성자(아이디) 작성일 조회수 <--- table

=========================================================================

write.html : boardhtml에서 글쓰기 버튼 클릭시 이동 
[table로] 
1. 만일 비로그인 상태이면 글쓰기 페이지 접근 제한 하고 login.html 로 이동
2. 만일 로그인 상태이면 제목과 내용을 입력받아 글쓰기 처리


*/