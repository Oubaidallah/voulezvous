
        if (navigator.geolocation) {
            // L'API est disponible
        } else {
            // Pas de support, proposer une alternative ?
        }

        if (location != null) {
            var currentUserLS = localStorage.getItem('currentUserId');
            var getLatitude = localStorage.getItem('currentLatitude');
            var getLongitude = localStorage.getItem('currentLongitude');

            var userDataToSend = { "latitude": getLatitude, "longitude": getLongitude };
            //alert(JSON.stringify(userDataToSend));
            $.ajax({
                url: "http://voulezvous.io/api/updateProfile/" + 28,
                type: "POST",
                data: JSON.stringify(userDataToSend),
                contentType: "application/json",
                success: function (results) {
                    //alert("ok" + results);
                },
                error: function (data) {
                    //alert("erreur" + data)
                },
            });
            //alert("gps déja activer!");     
        }
        else {
            //alert("gactiver le gps!");
        }