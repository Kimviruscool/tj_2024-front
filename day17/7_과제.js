let orderAdd = [
    {제품 : '코카콜라',가격 : '1,000'},
    {제품 : '사이다',가격 : '2,500'},
    {제품 : '아메리카노',가격 : '1,800'}
]

function add () {
    let btn1 = document.querySelector('#btn1').value;
    let btn2 = document.querySelector('#btn2').value;

    let menuadd = {제품 : `${btn1}`, 가격 : `${btn2}`}

    orderAdd.push(menuadd);

    alert('제품등록이 완료되었습니다.')
}
console.log('orderAdd');

function print(){
    //무엇을
    let tbody = document.querySelector('#tbody');

    //어디에
    let html = ``;

    //출력
    tbody.innerHTML = html;
}