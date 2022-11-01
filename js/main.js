window.addEventListener("DOMContentLoaded",function(){
    window.onscroll = function(){
        if(window.scrollY > 50){
            console.log(window.scrollY);
            document.getElementById("girl1").classList.add('active');
            document.getElementById("man1").classList.add('active');
            document.getElementById("senior1").classList.add('active');
        }else{
            
        }

        if(window.scrollY > 5244){
            document.getElementById("bus").classList.add('active');
        }

        if(window.scrollY > 5700){
            document.getElementById("bus").classList.remove('active');
            document.getElementById("bus").classList.add('active2');
            document.getElementById("waitBus").classList.add('active');
        }

        if(window.scrollY > 7000){
            document.getElementById("fail8").classList.add('active');
            document.getElementById("sizeUp").classList.add('active');
        }
    }

    
});

// $(document).ready(function(){
//     $(window).scroll({
        
//     });
// });
// $(function(){
//     $('body').scroll(function(){
//         console.log('hello');
//     });
// });