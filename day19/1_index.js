//1. 로그인 상태에 따라 헤더메뉴 구성하기 : 실행조건 1. JS열렸을때
loginstate();
function loginstate() {

    let loginNo = sessionStorage.getItem('loginNo');
    //만약에 로그인 회원번호가 존재하지 않으면 0
    if(loginNo == null){loginNo = 0}

    let nav = document.querySelector('.navbar-nav')
    let html = ``;
    //만약에 로그인 회원번호가 존재하면
    if(loginNo != 0){

        html += `<li class="nav-item"><a class="nav-link" href="info.html"> 내정보 </a> </li>`;
        html += `<li class="nav-item"><a class="nav-link" href="#" onclick="logout()"> 로그아웃 </a> </li>`;

    }else{//만약에 로그인 회원번호가 존재하지 않으면 (비로그인 상태)
         html = `<li class="nav-item"><a class="nav-link" href="2_signup.html"> 회원가입 </a> </li>`;
        html += `<li class="nav-item"><a class="nav-link" href="3_login.html"> 로그인 </a> </li>`;

    }
    //출력
    nav.innerHTML += html;
}

//2. 로그아웃 함수 : 실행조건 1: 로그아웃 버튼을 클릭했을 때.

function logout() { console.log('logout()');
    // 1. 세션저장소의 로그인 회원 정보를 제거하기 
    sessionStorage.removeItem('loginNo'); //sessionstorage.removeitem('key') 해당 key의 메모리를 제거
    // 2. 안내후 메인페이지로 이동
    alert('로그아웃 되었습니다'); location.href="1_index.html";

}

