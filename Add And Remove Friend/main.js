let add = document.querySelector('h5')
let add_btn = document.querySelector('#add');
// let remove_btn = document.querySelector('#remove')
let cheak = 0;

add_btn.addEventListener('click' , function(){
    if(cheak == 0){
        add.innerHTML = 'Friend';
        add.style.color = "green";
        add_btn.style.backgroundColor = "#dadada"
        add_btn.innerHTML = "Remove Friend"
        cheak = 1;
    }
    else{
        // alert("You have already added a friend");
        add.innerHTML = 'Stranger';
        add.style.color = "Red";
        add_btn.style.backgroundColor = "cadetblue";
        add_btn.innerHTML = " + Add Freind"
        cheak = 0;
    }
    
   
});



// remove_btn.addEventListener('click' , function(){
//     add.innerHTML = 'Stranger';
//     add.style.color = "red"
    
// })

let a = add_btn.innerHTML;
console.log(a)