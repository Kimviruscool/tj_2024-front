/*

내정보 페이지
1. 현재 로그인된 회원의 번호, 아이디 , 이름 연락처를 출력하시오
2. 회원탈퇴 버튼을 클릭하면 confirm 함수를 활용해서 확인 선택시 탈퇴처리
로그인된 회원 번호가 세션 저장소 사용
탈퇴시 로그아웃 처리

*/

let memberList = [];

info();
function info() {

    //1. 세션 저장소에 현재 로그인된 회원번호를 가져오기
    let loginNo = sessionStorage.getItem('loginNo');
    //만약 해당 세션 저장소에 현재로그인된 회원번호가 없으면 로그인페이지로
    if(loginNo == null){alert('로그인후 가능한 페이지 입니다.');
        location.href="3_login.html"
    }
    //2. 현재 로그인된 회원번호를 가지고 회원목록에서 동일한 회원번호 객체 찾기
    //-로컬 저장소에 있는 회원목록 호출

    memberList = JSON.parse(localStorage.getItem('memberList'));
    //외부에 있는 localstorage 데이터 값을 내부로 받아오기
    if(memberList == null){memberList = [] }
    // 찾기 
    for(let i = 0; i < memberList.length; i++){
        //만약 i번째 회원의 번호와 로그인된번호와 같으면 
        if(memberList[i].no == loginNo){
            //특정 HTML 요소에 출력하기.innerHTML
            document.querySelector('#boxno').innerHTML = memberList[i].no;
            document.querySelector('#boxid').innerHTML = memberList[i].id;
            document.querySelector('#boxname').innerHTML = memberList[i].name;
            document.querySelector('#boxphone').innerHTML = memberList[i].phone;
            return;
        }
    }
}

//회원 탈퇴 함수 : 회원탈퇴 버튼 클릭했을때 출력
function remove() { console.log('remove()');
    //1. 정말 탈퇴 하는지 확인받기
    let msg = confirm('정말 회원 탈퇴 하실건가요?'); console.log(msg);
    //2 취소했으면 
    if(msg == false)return;
    //3 확인 했으면
    //1. 누구를 (현재 로그인된 회원)
    let loginNo = sessionStorage.getItem('loginNo');
    //2. 해당 loginNo의 회원객체 찾기
    //1. 회원목록내 에서 로그인된 회원번호와 동일한 회원 찾기
    for(let i = 0; i < memberList.length;i++){
        if(memberList[i].no == loginNo){
            //3. 찾은 i번째 인덱스의 회원객체를 회원목록에서 삭제
            memberList.splice(i, 1);
            //4. 회원목록/배열 의 변화가 있기 때문에 localstorage에 적용하기 위해 setItem 적용
            localStorage.setItem('memberList', JSON.stringify(memberList));
            //5. for문 탈출
            alert('회원탈퇴 했습니다.');
            break; // for문 탈출
        }
    }
    logout();
}

//3. 수정페이지 이동
function _update() {
    location.href="update.html";
}