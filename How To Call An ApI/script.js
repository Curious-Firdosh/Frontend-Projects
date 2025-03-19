const API_key = "7ff28e02357a04c740be1b3db2b98ce1";
async function wetherInfo(){

    try {
            let city = "Bhopal";
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`) 
            let data = await response.json(); //extract the json data from the response
            console.log("weather info" , data) ;

            //  In Place Of THis We Can Use Function IN fUNCTION fOR rENDER In The  HTML Page

            let newPara = document.createElement('p')
            // newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;
            newPara.textContent  = (data.main.temp - 273.15).toFixed(2);
            document.body.appendChild(newPara);
    }
    catch(e){
        console.log("Error Found In THis Line" , e)
    }
};

//  using Black Box

// async  function getWeather() {
//     let city = "Bhopal";
//       let  response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
//        if(!response.ok) throw new Error (`HTTP-Error: ${response.status}`)
//      return wetherInfo(response);  
// }
// getWeather();


async function getWeather(){
    
    try{
        let lat = 15.6333;
        let lon = 45.3344;

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
        let data = await response.json();

        console.log(data);
        
    }catch(e){
        console.log("Error Occured" ,e)
    }
}




