var main = document.querySelector('#main');
let crsr = document.querySelector('.cursor');

main.addEventListener("mousemove", function(e){
    crsr.style.left = e.pageX + 'px';
    crsr.style.top = e.pageY + 'px';
});