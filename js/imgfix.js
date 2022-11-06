window.addEventListener('DOMContentLoaded', function (event) {
    const imgs = document.querySelectorAll('img');
    
    if (imgs.length > 0) {
       imgs.forEach(function (img) {
          if (img.getAttribute('srcset') != null) {
             img.setAttribute('data-srcset', img.getAttribute('srcset')); // 원래 이미지를 잠시 data-변수에 저장
             img.setAttribute('srcset', '대체할 저용량 이미지 경로'); // 그리고 그자리를 저용량의 이미지로 대체시킨다
          }
          if (img.getAttribute('src') != null) {
             img.setAttribute('data-src', img.getAttribute('src'));
             img.setAttribute('src', '대체할 저용량 이미지 경로');
          }
          img.classList.add('lazyload');
                    
          
       })
    }
 })