window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let locationTimezone = document.querySelector(".location-timezone");
    let iconImage = document.querySelector(".icon");
  //  let temperatureDegree = document.querySelector(".temperature-degree");

    if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(position =>{
                long = position.coords.longitude;
                lat = position.coords.latitude;
                console.log(long,lat);
               const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6d1b8978a3054435651dcf4e56d56fc3`;
               fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then( data =>{
                    console.log(data);
                    const {temp} = data.main;
                   
                    temperatureDegree.textContent = temp.toFixed()-273;
                    
                    locationTimezone.textContent = data.name;
                    const {description,icon} = data.weather[0];
                    temperatureDescription.textContent = description;
                    //setIcons(description, document.querySelector("icon"));
                    iconImage.innerHTML =`<img src=" http://openweathermap.org/img/wn//${icon}.png"/>`;
                });
           });

           
    }
    /*function setIcons(description, iconID){
        const skycons = new Skycons({"color": "white"});
        const currentIcon = description.replace(/ /g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, skycons[currentIcon]);
    }*/
});