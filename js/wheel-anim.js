// const text = document.querySelectorAll('.text_anim');
// for (let item of text) {
//     const height = getComputedStyle(item, null).height;
//     item.style.lineHeight = height; 
// }

function rotateMain (value) {
    const wheelInner = document.querySelectorAll('.wheel__inner');

    deg = 0;
    for (let item of wheelInner) {
        item.style.transform = `rotate(${deg}deg)`
         deg += value;
    }
    return value
}
rotateMain (15);

function rotateOuther (value) {
    const wheelContent = document.querySelectorAll('.wheel__content');

    deg = 0;
    for (let item of wheelContent) {
        item.style.transform = `rotate(${deg}deg)`
         deg += value;
    }
    
}
rotateOuther (10);