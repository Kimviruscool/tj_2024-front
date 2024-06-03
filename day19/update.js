/*
회원 비밀번호 수정 페이지
1. 현재 로그인된 회원의 비밀번호를 수정 처리

2. 기존 비밀번호를 입력받고 새로운 비밀번호를 2번 입력받기

3. 유효성 검사
 1. 입력받은 현재 비밀번호가 로그인된 회원의 비밀번호와 일치하는지 체크
 2. 새로운 비밀번호와 새로운 비밀번호확인이 일치 한지 체크
 3. 비밀번호는 5글자 이상만 가능 하도록 설정

4. 만일 수정 성공시 로그아웃처리
*/

let memberList = [];

//1. 수정함수 : 수정 버튼을 클릭했을때
function change() { 
    let pw = document.querySelector('#pw').value;
    let newpw = document.querySelector('#newpw').value;
    let newpwc = document.querySelector('#newpwc').value;

    //2. 유효성 검사
    //1. 현재로그인된 회원의 비밀번호가 입력한 현재비밀번호와 일치한지.
    //현재 로그인된 회원의 번호 가져오기
    let loginNo = sessionStorage.getItem('loginNo');
    // - 회원목록 호출
    memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList == null){memberList = []}
    // 회원목록내에서 로그인된 회원 객체를 찾기
    let findResult = false; //for문내에서 특정 조건의 충족여부를 저장하는 변수
    let findindex = 0; //현재 로그인된 회원의 회원목록 인덱스번호
    for(let i = 0; i < memberList.length; i++){
        if(memberList[i].pw == pw && memberList[i].no == loginNo) {
            findResult = true; //특정 조건을 찾았을때 변수에 값 수정/변화
            findindex = i;
            break; //for문 탈출
        }
    }
    //
    if(findResult = false){alert('회원의 비밀번호가 일치하지 않습니다.'); return;}

    //2. 새로운 비밀번호와 새로운 비밀번호 확인 일치한지 체크
    //3. 비밀번호는 5글자 이상만 가능
    if(newpw.length < 5 || newpwc.length < 5){
        alert('새로운 비밀번호는 5글자이상으로 해주세요.'); return;
    }
    if(newpw != newpwc){
        alert('입력한 비밀번호가 일치하지 않습니다.'); return;
    }

    //3. 수정처리
    // 누구를[findindex]
    memberList[findindex].pw = newpw;
    //회원목록내 변화가 있으므로 localstorage에 memberLIst 다시저장
    localStorage.setItem('memberList', JSON.stringify(memberList));

    //4. 안내후 로그아웃
    alert('비밀번호가 변경 되었습니다. 다시 로그인 해주세요');
    location.href="3_login.html"
}

