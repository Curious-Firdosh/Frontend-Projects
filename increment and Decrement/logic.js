
let num = document.querySelector('.number')

let increment = () =>
{
    let value = parseInt(num.innerText) ;
    value = value + 1 ;
    num.innerText = value;
}

let Decerement = () => {
    //  parseint converted the string into int
    let value =parseInt(num.innerText) ;
    value = value - 1 ;
    num.innerText = value;

}