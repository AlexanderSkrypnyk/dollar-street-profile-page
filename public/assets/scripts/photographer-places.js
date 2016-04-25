'use strict';

window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/photographer/places/', true);
    xhr.onreadystatechange = function (data) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var places = data.currentTarget.response;
            places = JSON.parse(places);
            var placesContainer = document.getElementById('photographer-families');

            places.forEach(function (place) {
                var family = document.createElement('div');
                family.className = 'familyContent';

                family.innerHTML = '<div class="area"><div class="family-portrait"><img src="' + place.familyPhoto + '" /></div>' +
                    '<div>family <br>' + place.familyName + '</div>' +
                    '<div><img src="' + place.region + '"/>' + place.country + '</div>' +
                    '<div>$' + place.income + '</div><div ><button>Visit family >></button></div></div>';

                placesContainer.appendChild(family);
            });
        }
    };
    xhr.send();


};