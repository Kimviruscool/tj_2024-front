/*
회원가입 페이지 
1. 회원정보 
- 회원번호
- 아이디
- 비밀번호
- 이름
- 연락처

2. 입력사항
- 아이디
- 비밀번호
- 비밀번호 확인
- 이름 , 연락처

3. 유효성검사
- 아이디/ 비밀번호 5글자 이상
- 이름은 3글자 이상
- 연락처는 - 제외한 8자리 이상
- 비밀번호 와 비밀번호확인 일치 했을때만 가능
- 아이디 와 연락처는 유효성 검사 (중복허용 X)

회원번호는 자동 부여 됩니다.
회원목록은 localstorage에 저장할 것
*/

let memberList = [];

//회원가입 함수 : 회원가입 버튼을 클릭했을때
function signup() { console.log('signup()');

    //*localstorage 호출
    memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList == null){memberList = [];}

    //1. HTML에서 입력 받은 데이터 가져와서 
    let id = document.querySelector('#id').value;
    let pw = document.querySelector('#pw').value;
    let pwconfirm = document.querySelector('#pwconfirm').value;
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    //2. 유효성 검사

    //1. 아이디 와 비밀번호는 5글자 이상 만 가능
    if(id.length < 5){alert('회원가입 실패 : 아이디는 5글자 이상 입력가능합니다.'); return;}
    if(pw.length < 5){alert('회원가입 실패 : 비밀번호는 5글자 이상 입력가능합니다.'); return;}
    //2. 이름은 3글자 이상 만 가능
    if(name.length < 3){alert('회원가입 실패 : 이름은 3글자 이상 입력가능합니다.'); return;}
    //3. 연락처는 - 제외한 8자리 이상만 가능
    if(phone.length < 8 || isNaN(phone)){alert('회원가입 실패 : 연락처는 -제외한 8글자 이상 입력가능합니다.'); return;}
    //4. 비밀번호와 비밀번호 확인 일치 했을때만 가능
    if(pw != pwconfirm){alert('회원가입 실패 : 비밀번호가 일치하지 않습니다.'); return;}
    //5. 아이디 와 연락처는 중복 제외
    //아이디 중복검사 : 회원목록 내 i번째 회원 아이디와 입력받은 아이디가 같으면
    for(let i = 0 ; i < memberList.length; i++){
        if(memberList[i].id == id){alert('사용중인 아이디 입니다.'); return;}
    }
    for(let member of memberList){
        if(member.phone == phone){alert('회원가입 실패 : 사용중인 전화번호 입니다.'); return;}
    }

    //3. 데이터 가공 
        // 회원번호는 만약에 회원목록에 회원이 없으면 1 있으면 마지막회원의 번호 +1
    let no = memberList.length == 0 ? 1 : memberList[memberList.length-1].no +1
        //객체화 
    let member = {
        no : no, id : id, pw : pw , name : name, phone : phone
    }; console.log(member);
    //4. 저장
    memberList.push(member);

    //localstorage 저장
    localStorage.setItem('memberList' , JSON.stringify(memberList));

    //5. 결과 안내 후 페이지 전환 , location.href ="이동할경로"
    alert('회원가입성공'); location.href="3_login.html";
}
