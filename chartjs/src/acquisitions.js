import Chart from 'chart.js/auto'

  fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/72420/period/latest-months/data.json')
  .then(response => response.json())
  .then(data => {
    const temperatures = data.value.map(entry => entry.value);
    const dates = data.value.map(entry => new Date(entry.date));

    //72420 GÖTEBORG LANDVETTER
    //97400 ARLANDA FLYGPLATS
    console.log("t")

    new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'line',
          data: {
            labels: data.value.map(entry => new Date(entry.date)),
            datasets: [
              {
                label: 'Temperatur',
                data: data.value.map(entry => entry.value)
              }
            ]
          }
        }
      );


  });
  