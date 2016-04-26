'use strict';

window.onload = function () {
    var xhrPlaces = new XMLHttpRequest();
    xhrPlaces.open('GET', '/photographer/places/', true);
    xhrPlaces.onreadystatechange = function (data) {
        if (xhrPlaces.readyState === 4 && xhrPlaces.status === 200) {
            var places = data.currentTarget.response;
            places = JSON.parse(places);

            var placesContainer = document.getElementById('photographer-families');
            places.forEach(function (place) {
                var family = document.createElement('div');
                family.className = 'familyContent';

                family.innerHTML = '<div class="area"><div class="family-portrait"><img src="' + place.familyPhoto + '" /></div>' +
                    '<div>family <br>' + place.familyName + '</div>' +
                    '<div><img src="' + place.region + '"/> ' + place.country + '</div>' +
                    '<div>$' + place.income + '</div><div ><button>Visit family >></button></div></div>';

                placesContainer.appendChild(family);
            });
        }
    };
    xhrPlaces.send();

    var xhrProfile = new XMLHttpRequest();
    xhrProfile.open('GET', '/photographer/profile', true);
    xhrProfile.onreadystatechange = function (data) {
        if (xhrProfile.readyState === 4 && xhrProfile.status === 200) {
            var profileData = data.currentTarget.response;
            profileData = JSON.parse(profileData);

            var profileContainer = document.getElementById('photographer-profile');
            profileData.forEach(function (photographer) {
                var person = document.createElement('div');
                person.className = 'photographerData';
                person.innerHTML =
                    '<div><img  src="' + photographer.photo + '" /></div><br>' +
                    '<div>' + photographer.firstName + ' ' + photographer.lastName + '</div><br>' +
                    '<div><img src="assets/images/pin56-copy-8.png" /> ' + photographer.country + '</div><br>' +
                    '<div>' + photographer.description + '</div><br>';

                profileContainer.appendChild(person);
            });
        }
    };
    xhrProfile.send();
}