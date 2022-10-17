window.addEventListener("DOMContentLoaded",function(){
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY > 100){
            // document.getElementsByClassName("text_box").classList.add("active");
        }else{
            // document.getElementsByClassName("text_box").classList.remove("active");
        }
    }
});