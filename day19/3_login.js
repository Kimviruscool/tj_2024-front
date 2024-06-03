/*
로그인 페이지 
1. 아이디와 비밀번호 입력받아 기존 회원 목록에 일치한 정보찾기

2. 로그인 성공시
 0. 결과 안내
 1 세션저장소 로그인 성공 여부(회원번호) 저장하기
 2.메인 INDEX.HTML 로 이동 하기

3. 로그인 실패시
 0. 결과 안내


* 단) 회원 목록은 localstorage 사용할 것
*/

//
let memberList = [];

function 로그인(){ console.log('로그인()');

    //기존 localstorage 저장된 회원목록 을 가져오기 
    memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList == null){memberList = []};

    //HTML에서 입력받은 데이터 가져온다
    let id = document.querySelector('#id1').value;
    let pw = document.querySelector('#pw1').value;
    // 기존 회원 목록에 있는 회원 정보와 입력받은 데이터 일치여부
    for(i = 0; i < memberList.length; i++){
        let member = memberList[i];
        if(member.id == id && member.pw ==pw){
            alert('로그인 성공');
            //만약에 로그인 성공시 로그인 성공한 회원의 번호를 세션저장소 부여
            sessionStorage.setItem('loginNo', member.no);

            location.href="1_index.html" //JS에서 페이지전환 해주는 속성
            return;
        }
    }
    alert('로그인 실패');
}

