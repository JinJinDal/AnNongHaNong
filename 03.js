// 초기 변수 선언
const picWidth = 1440;
let moveNum = 0;
const totalNum = 3;

// 이미지 위치 셋팅
for(var i=0; i<totalNum; i++){ // i: 0, 1 2
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}
document.getElementById("temp").innerText = moveNum;
document.getElementById("text" + moveNum).classList.add("active");

// 동적으로 점 인디케이터 생성 - ul, li
let dotList = document.createElement("ul");
dotList.setAttribute("id", "dotList");
document.getElementById("section1").appendChild(dotList);

for(var i=0; i<totalNum; i++){
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i);
    document.getElementById("dotList").appendChild(li);
    document.getElementById("li" + i).innerText = i;
    document.getElementById("li" + i).onclick = function(){
        // console.log(this.id);
        // console.log(this.id.substr(2,1));
        aniFunction();
        moveNum = this.id.substr(2,1);
        moveFunction();
    }
}
document.getElementById("li" + moveNum).classList.add("active");

// 좌우 버튼 셋팅 prev_btn, next_btn
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "prev";
document.getElementById("ImgSet").appendChild(prev_btn);

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = "next";
document.getElementById("ImgSet").appendChild(next_btn);

var aniFunction = function(){
    document.getElementById("text" + moveNum).classList.remove("active");
    document.getElementById("text" + moveNum).classList.add("activeOut");
}
var moveFunction = function(){
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
    } 
    document.getElementById("temp").innerText = moveNum;
    document.getElementById("text" + moveNum).classList.remove("activeOut");
    document.getElementById("text" + moveNum).classList.add("active");

    for(var i=0; i<totalNum; i++){
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.add("active");
}

// 좌우 버튼 제어
document.getElementById("prev_btn").onclick = function(){
    aniFunction();
    if(moveNum > 0){
        moveNum--;
    }
    moveFunction();
}

document.getElementById("next_btn").onclick = function(){
    aniFunction();
    if(moveNum < (totalNum-1)){
        moveNum++;
    }
    moveFunction();
}




//맨 위에 for문 빼니깐 둘다 작동!
// for(var i=0; i<3; i++){
//     document.getElementById("pic" + i).style.left = (picWidth * i)+"px";
// }

// document.getElementById("next_btn").onclick = function(){
   
// }
// let MoveNum = 0;
// document.getElementById("prev_btn").onclick = function(){  
//     if(MoveNum > 0){
//        MoveNum--; 
//     }else{
//         MoveNum = 2;
//     }
//     for(var i=0; i<3; i++){
//         document.getElementById("pic" + i).style.left = (picWidth * (i-MoveNum))+"px";
//     }
// }

//이전버튼은 되는데 왜 next가 안될까
//반대로하면 될줄알았는데 아니군요. 이름을 바꾸면 에러가 뜨는군

//for 반복문 for(초기값; 조건식; 증감식){}
// for(var i=0; i<10; i++){
//     console.log(i);
// }
// console.log("종류후: "+i);

// console.log(1);
// console.log(2);