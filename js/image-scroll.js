window.onload = function() {
      const parallax = document.querySelector('.parallax');
      
      
              if (parallax) {
        const chair = document.querySelector('.images-parallax__chair');
        console.log(chair);
        //Коеффициент 
        const forchair = 40;
        // скорость
        const spead = 0.05

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
        
        // function setMouseParallaxStyle() {
            
        //     const distX = coordXprocent - positionX;
        //     const distY = coordYprocent - positionY;
            
           
        //     positionX = positionX + (distX * spead);
        //     positionY = positionY + (distY * spead);

        //     chair.style.cssText = `transform: translate(${positionX / forchair}%, ${positionY / forchair});`;
        //     requestAnimationFrame(setMouseParallaxStyle);
        // }
        // setMouseParallaxStyle();
        // parallax.addEventListener('mousemove', function (e) {
        //     // Ширина и высота блока
        //     const parallaxWidth = parallax.offsetWidth;
        //     const parallaxHeight = parallax.offsetHeight;
        //     console.log(parallaxWidth);
        //     console.log(parallaxHeight);
        //     // Ноль по середине
        //     const coordX = e.pageX - parallaxWidth / 2;
        //     const coordY = e.pageY - parallaxHeight / 2;
        //     console.log(coordX,'cordX');
            

        //     // получаем проценты который преодолел относительно центра
        //     coordXprocent = coordX / parallaxWidth * 100;
        //     coordYprocent = coordY / parallaxHeight * 100;
        //     console.log(chair); 
        // });


        // Скролл
       
    //    Скролл
        
        let thresholdSets = [];
        for (let i = 0; i <= 1; i += 0.005) {
            thresholdSets.push(i);
        
        const callback = function (entries, observer) {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            console.log(scrollTopProcent, 'scrollTopProcent');
            setParallaxItemsStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSets
        });
        console.log(observer);
       
        observer.observe(document.querySelector('.parallax'));
        function setParallaxItemsStyle(scrollTopProcent) {
            console.log('lena');
            console.log(scrollTopProcent);
            console.log( chair)
            chair.parentElement.style.cssText = `transform: translate(${scrollTopProcent / 10}%, 0%);`;
        }
    }
}}