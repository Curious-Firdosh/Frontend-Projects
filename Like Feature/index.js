let container = document.querySelector('#container');
let icon = document.querySelector('#icon');

// ************** 1st Method ****************

// container.addEventListener('dblclick',function(){
//     icon.style.transform = "translate(-50%, -50%) scale(1)";
//     setTimeout(function(){
//         icon.style.transform = "translate(-50%, -50%) scale(0)";
//     },1000)
// })

// ************** 2nd Method ****************
function clicked(){
    icon.style.transform = "translate(-50%, -50%) scale(1)";
    setTimeout(function(){
        icon.style.transform = "translate(-50%, -50%) scale(0)";
    },1000)
}