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
                    '<div class="profile-photo"><img  src="' + photographer.photo + '" /></div><br>' +
                    '<div class="full-name">' + photographer.firstName + ' ' + photographer.lastName + '</div><br>' +
                    '<div class="photographer-country"><img src="assets/images/pin56-copy-8.png" /> ' + photographer.country + '</div><br>' +
                    '<div class=" description-profile">' + photographer.description + '</div><br><div class="line"></div><br>' +
                    '<div class="total-info"><img src="assets/images/visited-families.png"> Visited Families: <span>' + photographer.visitedFamilies + '</span></div><br>' +
                    '<div class="total-info"><img src="assets/images/total-photo.png"> Total Photos: <span> ' + photographer.totalPhotos + '</span></div><br>' +
                    '<div class="total-info"><img src="assets/images/video.png"> Total Videos: <span>' + photographer.totalVideos + '</span></div><br><div class="line"></div><br>' +
                    '<div class="organization-photographer">ORGANIZATION</div><div>' + photographer.organization + '</div><br><div class="line"></div><br>' +
                    '<div class="web-photographer">ON THE WEB</div><div>' + photographer.web + '</div>';

                profileContainer.appendChild(person);
            });
        }
    };
    xhrProfile.send();
};