import Chart from 'chart.js/auto'

  fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/53430/period/latest-months/data.json')
  .then(response => response.json())
  .then(data => {
    const temperatures = data.value.map(entry => entry.value);
    const dates = data.value.map(entry => new Date(entry.date));
    
    // Create the chart
    new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'bar',
          data: {
            labels: data.value.map(entry => new Date(entry.date)),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.value.map(entry => entry.value)
              }
            ]
          }
        }
      );


  });
  