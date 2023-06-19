window.addEventListener('load', windowLoad);
function windowLoad() {
    document.addEventListener('click', documentActions);
}
function documentActions(e) {
    const targetElement = e.target;
    // Scroll 
if(targetElement.hasAttribute('data-goto')) {
    const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
    const headerHeight = document.querySelector('.header').offsetHeight;
    if(gotoElement) {
        window.scrollTo({
            top: gotoElement.offsetTop - headerHeight,
            behavior: "smooth"
        });
    }

        e.preventDefault();    

    }

    // Works filter
    if (targetElement.classList.contains('items-workExamples__type') && !targetElement.classList.contains('active')) {
        const activeElement = document.querySelector('.items-workExamples__type.active');
        const elements = document.querySelectorAll('.items-workExamples__item');
        const elementType = targetElement.dataset.workexamplesType; 
           
        activeElement.classList.remove('active');
        targetElement.classList.add('active');
       

        elements.forEach(element => {
            !elementType || element.dataset.workexamplesType === elementType ?
          
            element.hidden = false : element.hidden = true;
        });
    }
    // Contacts scroll
  
}
