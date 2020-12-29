window.onload=function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a669117c8404694e914ed1c7c1a08149')
.then(Response => Response.json())
.then(data => console.log(data))
.catch(err=>console.log("Error"))
}