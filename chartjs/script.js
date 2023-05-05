fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/53430/period/latest-months/data.json')
  .then(response => response.json())
  .then(data => {
    const temperature = data.value[0].value;
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = `The temperature is ${temperature}°C.`;
    document.body.appendChild(temperatureElement);
  })
  .catch(error => console.error(error));