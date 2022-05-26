// #picSet #pic1
let picWidth = 1440;

// document.getElementById("pic0").style.left = (picWidth * 0) + "px";
// document.getElementById("pic1").style.left = (picWidth * 1) + "px";
// document.getElementById("pic2").style.left = (picWidth * 2) + "px";

//문자 + 숫자 ---> + 연결연산자 0,1,2
for(var i=0; i<3; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i)+"px";
}

document.getElementById("prev_btn").onclick = function(){
   
}
let moveNum = 0;
document.getElementById("next_btn").onclick = function(){  
    if(moveNum < 2){
       moveNum++; 
    }else{
        moveNum = 0;
    }
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum))+"px";
    }
}
document.getElementById("prev_btn").onclick = function(){
    if(moveNum > 0){
        moveNum--;  
    } else {
        moveNum = 2;
    }
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (1440 * (i-moveNum)) + "px";
    }
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