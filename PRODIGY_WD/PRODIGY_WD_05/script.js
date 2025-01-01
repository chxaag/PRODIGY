const input = document.querySelector('.input_text');
const main = document.querySelector('#name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const clouds = document.querySelector('.clouds');
const button = document.querySelector('.submit');

button.addEventListener('click', function () {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=50a7aa80fa492fa92e874d23ad061374&units=metric`)
    .then(response => response.json())
    .then(data => {
      const tempValue = data.main.temp;
      const nameValue = data.name;
      const descValue = data.weather[0].description;
      const cloudValue = data.clouds.all;

      main.innerHTML = nameValue;
      temp.innerHTML = `Temperature: ${tempValue}°C`;
      desc.innerHTML = `Description: ${descValue}`;
      clouds.innerHTML = `Clouds: ${cloudValue}%`;
      input.value = "";
    })
    .catch(err => {
      alert("City not found! Please try again.");
      input.value = "";
    });
});
