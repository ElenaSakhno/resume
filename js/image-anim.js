window.onload = function() {
    
const parallax = document.querySelector('.parallax');

if (parallax) {

    const chair = document.querySelector('.images-parallax__chair');
    let thresholdSets = [];
for (let i = 0; i <= 1; i += 0.015) {
    thresholdSets.push(i);
}    

const options = {
     rootMargin : '200px 0px -500px 0px',
     threshold : thresholdSets
}

const callback = function ( entries, observer ) {

    entries.forEach( entry => {
        const { isIntersecting, intersectionRatio} = entry;
        chair.parentElement.style.cssText = `transform: translate(${intersectionRatio * 100}%, 0%);`;
      
    });
}

const observer = new IntersectionObserver( callback, options);

observer.observe( parallax );
}
};






