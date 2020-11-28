const headers = { "X-API-Key": '6bd73360' }

fetch('https://my.api.mockaroo.com/table.json', { headers })
    .then(response => {
        response.json()
            .then(data => {
                console.log(data);
                if (data.length > 0) {
                    var temp = "";

                    data.forEach((u) => {
                        temp += "<tr>";
                        temp += "<td>" + u.name + "</td>";
                        temp += "<td>" + u.location + "</td>";
                        temp += "<td>" + u.email + "</td>";
                        temp += "<td>" + u.phone_number + "</td></tr>";
                    })
                    document.getElementById('data').innerHTML = temp;

                }
            })
    })