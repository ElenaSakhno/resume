const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
       
        for (let index = 0; index < animItems.length; index++) {
           const animItem = animItems[index];
           const animItemHeigth = animItem.offsetHeight;
           console.log(animItemHeigth);
           const animItemOffset = offset(animItem).top;
           console.log(animItemOffset);
           const animStart = 2;
          
        
           let animItemPoint = (window.innerHeight - animItemHeigth) / animStart;
           console.log(innerHeight,'высота браузера')
           console.log(animItemPoint);

           if (animItemHeigth > window.innerWidth) {
            animItemPoint = (window.innerHeight - window.innerHeight) / animStart;
        }
        if (window.pageYOffset > (animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeigth)) {
            animItem.classList.add('_active');
        } else {
           
            if (!animItem.classList.contains('_anim-no-hide')){
                animItem.classList.remove('_active');
            }                
        }
        // ------------------

        }
        
    }
    function animOnStart() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeigth = animItem.offsetHeight;
            console.log(animItemHeigth);
            const animItemOffset = offset(animItem).top;
            console.log(animItemOffset);
            const animStart = 1;
           
         
            let animItemPoint = (window.innerHeight - animItemHeigth) / animStart;
            console.log(innerHeight,'высота браузера')
            console.log(animItemPoint);
 
            if (animItemHeigth > window.innerWidth) {
             animItemPoint = (window.innerHeight - window.innerHeight) / animStart;
         }
         if (window.pageYOffset > (animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeigth)) {
             animItem.classList.add('_active');
         } else {
            
             if (!animItem.classList.contains('_anim-no-hide')){
                 animItem.classList.remove('_active');
             }                
         }
         // ------------------
 
         }
    }
    
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }

          setTimeout(() => {
            animOnStart();
      }, 300);
}
