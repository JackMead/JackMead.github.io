$(document).ready(function () {
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=cIjd21iM1leLJ1bW1ZAEcsEfVWnW6H5L")
        .then((response) => {
            console.log(response.status);
        });
});