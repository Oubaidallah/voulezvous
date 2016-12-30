
        if (navigator.geolocation) {
            // L'API est disponible
            alert("API mawjouda");
        } else {
            // Pas de support, proposer une alternative ?
            alert("API mehich mawjouda");
        }

        if (location != null) {
            alert("activer le gps!");     
        }
        else {
            alert("gps déja activer!");
        }