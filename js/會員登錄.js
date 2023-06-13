// 新增會員登入
var password = document.getElementById("psw");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var length = document.getElementById("length");
var number = document.getElementById("number");
let pvl =true;
let lowerLetter =true;
let upperLetter = true;
let num = true;


// onfocus and onblur

password.onfocus = function() {
    document.getElementById("rule").style.display = "block";
}
password.onblur = function() {
    document.getElementById("rule").style.display = "none";
}


// 當使用者輸入時(onkeyup)，透過if else 來確認是否 match

password.onkeyup = function() {

    // 確認是否小寫
    var lowerLetter = /[a-z]/g;
    if (password.value.match(lowerLetter)) {
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
        lowerLetter = true;
    } else {
        lowercase.classList.add("invalid");
        lowercase.classList.remove("valid");
        lowerLetter =false;
    }
    // 確認是否大寫
    var upperLetter = /[A-Z]/g;
    if (password.value.match(upperLetter)) {
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
        upperLetter = true;
    } else {
        uppercase.classList.add("invalid");
        uppercase.classList.remove("valid");
        upperLetter =false;
    }
    // 確認是否有數字
    var num = /[0-9]/g;
    if (password.value.match(num)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
        num = true;
    } else {
        number.classList.add("invalid");
        number.classList.remove("valid");
        num =false;
    }
    // 確認是否有大於8字母/數字

    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        pvl = true;
    } else {
        length.classList.add("invalid");
        length.classList.remove("valid");
       pvl =false;
    } 
}

function a(){
    
    if(lowerLetter==true&&upperLetter==true&&num==true&&pvl==true){
        window.location.href='會員登入之後.html';
    }
    else{
        alert('密碼輸入格式錯誤');
    }
}

