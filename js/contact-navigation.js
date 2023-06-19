const contacts = document.querySelector('.contacts');
const changeNav = (entries, observer) =>{
    // console.log(entries);
    entries.forEach((entry) => {
         
        if ((entry.isIntersecting && entry.intersectionRatio >= 0.55)){     
            console.log('нужен класс!');
            // document.querySelector('._active').classList.remove('active');
            // Получаю id текущей секции
            let id = entry.target.getAttribute('id');
            let classS = entry.target.getAttribute('class');
           
               
    
            console.log(id, 'id');
                      let newId = document.querySelector(`[id='${id}']`);
            console.log(newId, 'newId');
       
           
            
           
            

           
           
            
            
            // Обращаюсь к ссылке с href равным id
            let newLink = document.querySelector(`[href='#${id}']`);
            
            console.log(newLink, 'newLink');
           
        }
       
    });
}

const options = {
    // root : document.getElementById( 'contact-root' ),
    rootMargin : '0px 0px 0px 0px',
    threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);
// Передаю  обсервер
const itemsContacts = document.querySelectorAll('.items-contacts_ob');
itemsContacts.forEach((item) => {
    observer.observe(item);
});