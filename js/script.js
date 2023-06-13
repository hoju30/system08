
// 新增價格計算
// var t1 = document.getElementById('t1');
//const t1 = parseInt(document.getElementById('t1').value);
// var t2 = document.getElementById('t2');
// var t3 = document.getElementById('t3');
// var submit = document.getElementById('submit');
// var number = document.getElementById('number');

// t1.addEventListener('click',()=>{x=50});
// submit.addEventListener('click',function(){
//     alert('alert');
// });
// function abc() {
//     const cost=t1;
//     alert('總金額是'+ t1);
// }






let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// 按下按鈕後的變化
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// 回到上層按鈕

window.onscroll = () => {

    if (window.scrollY > 60) {
        document.querySelector('#scroll-up').classList.add('active');

    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }

}

// 音樂
setTimeout(function(){
    document.getElementById("my_audio").play();
    console.log('your audio is started just now');
},3000)


//顧客評論(review區)
const stars2 = document.querySelectorAll(".stars2 i");
//LOOP through the stars nodelist
stars2.forEach((star,index1)=>{
    star.addEventListener("click",() =>{
        stars2.forEach((star,index2)=>{
            index1 >= index2 ? star.classList.add("active"):star.classList.remove("active");
        })
    });
})

// BMI

let button = document.getElementById('btn8');
let button1 = document.getElementById('btn9');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status=false, weight_status=false;
    //先偵測身高體重數值
    if(height === ''||isNaN(height)||(height <= 0)){
        document.getElementById('height_error').innerHTML = '請輸入你的身高';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === ''||isNaN(weight)||(weight <= 0)){
        document.getElementById('weight_error').innerHTML = '請輸入你的體重';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }
    //tofixed:取到小數點後2位
    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'BMI過輕 : ' + bmi;
            alert('你太瘦了，吃多一點再來');
        }else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'BMI正常 : ' + bmi;
            alert('BMI蠻正常的，勉強讓你加入');
            document.getElementById("btn9").style.display = "block"
        }else{
            result.innerHTML = 'BMI超重 : ' + bmi;
            alert('你很有內涵 很適合加入我們');
            document.getElementById("btn9").style.display = "block"
        }
    }else{
        alert('如果你想加入我們的團隊，就請你填好表格，不然我們黃金12猛漢就會來找你');
        result.innerHTML = '';
    }
});
button1.addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
});


//*新增 評論區
var btn = document.getElementById('btn_c')
var content = document.getElementById('content')
var list = document.getElementById('list')
btn.addEventListener("click",function(){
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <p>${content.value}</p>
    </div>
    `;
    content.value="";
})
document.getElementById('review_c').style.color="red";






