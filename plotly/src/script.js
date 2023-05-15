fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/97400/period/latest-months/data.json')
    .then(response => response.json())
    .then(data => {
    const temperatures = data.value.map(entry => entry.value);
    const dates = data.value.map(entry => new Date(entry.date));

    const trace = {
        x: dates,
        y: temperatures,
        type: 'scatter',
        mode: 'lines',
        name: 'Data'
      };

    const layout = {
        title: 'Data Chart',
        xaxis: { title: 'Date' },
        yaxis: { title: 'Temperature'}
      };
    
      const chartData = [trace]  
      Plotly.newPlot('tester', chartData, layout);
      
    })