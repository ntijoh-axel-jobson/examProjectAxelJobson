fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1.json')
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS")
        } else {
            console.log("FAILURE")
        }
    })
    .then(data => {console.log(data)})
    .catch(error => console.log("ERROR"))