window.addEventListener("DOMContentLoaded",function(){
    window.onscroll = function(){
        if(window.scrollY > 50){
            console.log(window.scrollY);
            // document.getElementById("girl1").classList.add('active');
            // document.getElementById("man1").classList.add('active');
            // document.getElementById("senior1").classList.add('active');
        }

        if(window.scrollY > 1049){
            document.getElementById("hide1").style="opacity: 0; transition: all 3s; transition-delay: 2s;";
            document.getElementById("hide2").style="opacity: 0; transition: all 3s; transition-delay: 2s;";
            document.getElementById("hide3").style="opacity: 0; transition: all 3s; transition-delay: 2s;";
            document.getElementById("hide4").style="opacity: 0; transition: all 3s; transition-delay: 2s;";
        }
        if(window.scrollY > 3149){
            document.getElementById("point1").classList.add('Bounse');
            document.getElementById("point2").classList.add('Bounse');
            document.getElementById("point3").classList.add('Bounse');
            document.getElementById("point4").classList.add('Bounse');
            document.getElementById("point5").classList.add('Bounse');
            document.getElementById("point6").classList.add('Bounse');
            document.getElementById("point7").classList.add('Bounse');
            document.getElementById("point8").classList.add('Bounse');
            document.getElementById("point9").classList.add('Bounse');
            document.getElementById("point10").classList.add('Bounse');
            document.getElementById("point11").classList.add('Bounse');
        }

        if(window.scrollY > 4199){
            document.getElementById("busMove").classList.add('Move');
            document.getElementById("Men5").classList.add('hide5');
        }
        
        if(window.scrollY > 500){
            document.getElementById("fixed6").style="opacity: 0; ";
        }
        if(window.scrollY > 6290){
            document.getElementById("headerBundle").classList.add("headhide");
        }

        if(window.scrollY > 6290){
            document.getElementById("fixed6").style="opacity: 1; ";
        }

        if(window.scrollY > 7230){
            document.getElementById("fixed6").style="opacity: 0; ";
            // document.getElementById("fixed7").classList.remove('videoFadeIn');
        }
        if(window.scrollY > 5800){
            document.getElementById("fixed7").classList.remove('videoFadeIn');
        }
        if(window.scrollY > 6290){
            document.getElementById("mainTitle15").classList.add('hide15');
        }
        if(window.scrollY > 7320){
            document.getElementById("onBoardingBundle").classList.add('nickname');
        }
        
        if(window.scrollY > 8230){
            document.getElementById("fixed7").classList.add('videoFadeIn');
        }
        if(window.scrollY > 9440){
            document.getElementById("headerBundle").classList.remove('headhide');
        }
        if(window.scrollY > 8800){
            document.getElementById("fixed7").classList.remove('videoFadeIn');
        }

        if(window.scrollY > 11550){
            document.getElementById("PaperFly").classList.add('scaleUp');
            document.getElementById("PaperFly").style="right: 277px;";
        }
        if(window.scrollY > 14440){
            document.getElementById("sagwa13").classList.add('opne');
            document.getElementById("lever13").classList.add('leverAni');
            document.getElementById("lever13_1").classList.add('leverAni');
            document.getElementById("lever13_2").classList.add('leverAni');
            document.getElementById("lever13_3").classList.add('leverAni');
        }
        if(window.scrollY > 15550){
            document.getElementById("bluebox1").classList.add('scale-in-center');
            document.getElementById("bluebox2").classList.add('scale-in-center');
            document.getElementById("whitebox1").classList.add('scale-in-center');
            document.getElementById("whitebox2").classList.add('scale-in-center');
            document.getElementById("whitebox3").classList.add('scale-in-center');
            document.getElementById("blueBox14_2").classList.add('scale-in-hor-right');
            document.getElementById("whiteBox14_2").classList.add('scale-in-hor-right');
        }
        if(window.scrollY > 15732){

        }
        if(window.scrollY > 16780){
            
        }
        
        if(window.scrollY > 20310){
            document.getElementById("keyword1").classList.add('moveKW');
        }
        if(window.scrollY > 20450){
            document.getElementById("keyword2").classList.add('moveKW');
        }
        if(window.scrollY > 20610){
            document.getElementById("keyword3").classList.add('moveKW');
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