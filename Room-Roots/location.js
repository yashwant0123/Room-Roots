const button = document.querySelector("button");
button.addEventListener("click", () =>{
    navigator.geolocation.getCurrentPosition(position => {
        const{ latitude, longitude } = position.coords;
    const url ='https://';
    fetch(url).then(res => res.json()).then(data => {
            console.table(data.address);
        }).catch(() => {
            console.log("Error fetching data from API");
        });    
    });
});