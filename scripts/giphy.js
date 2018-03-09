$(document).ready(function () {
    fetch("http://api.giphy.com/v1/gifs/random?api_key=cIjd21iM1leLJ1bW1ZAEcsEfVWnW6H5L")
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new error("Problem loading gif");
            }
        })
        .then(response => {
            $("#img").attr("src", response.data.image_url);
        })
        .catch(e => {
            console.log(e);
        });
});