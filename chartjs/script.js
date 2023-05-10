fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/53430/period/latest-months/data.json')
  .then(response => response.json())
  .then(data => {
    const temperature = data.value[0].value;
    const temperatureElement = document.createElement('p');
    temperatureElement.textContent = temperature;
    document.body.appendChild(temperatureElement);
  })
  .catch(error => console.error(error));

  const labels = Utils.months({count: 7});
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };