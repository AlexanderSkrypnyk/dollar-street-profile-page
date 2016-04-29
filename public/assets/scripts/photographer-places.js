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
          '<div>$' + place.income + '</div><div class="family-button"><button>Visit family >></button></div></div>';

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
          '<div class="wrapper-photo"><div class="profile-photo"><img  src="' + photographer.photo + '" class="photographer-image" /><div class="photographer-country"><img src="assets/images/pin56-copy-8.png" /> ' + photographer.country + '</div></div></div><br>' +
          '<div class=" description-profile">' + photographer.description + '</div><br><div class="line"></div><br>' +
          '<div class="total-info"><img src="assets/images/visited-families.png"> Visited Families: <span>' + photographer.visitedFamilies + '</span></div><br>' +
          '<div class="total-info"><img src="assets/images/total-photo.png"> Total Photos: <span> ' + photographer.totalPhotos + '</span></div><br>' +
          '<div class="total-info"><img src="assets/images/video.png"> Total Videos: <span>' + photographer.totalVideos + '</span></div><br><div class="line"></div><br>' +
          '<div class="organization-photographer">ORGANIZATION</div><div class="photographer-org">' + photographer.organization + '</div><br><div class="line"></div><br>' +
          '<div class="web-photographer">ON THE WEB</div><div>' + photographer.web + '</div>' +
          '<a href="' + photographer.facebook + '" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>' +
          '<a href="' + photographer.twitter + '" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>' +
          '<a href="' + photographer.google + '" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a>' +
          '<a href="' + photographer.linkedin + '" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>';

        profileContainer.appendChild(person);


        var nameContainer = document.getElementById('photographer-name');
        profileData.forEach(function (fullName) {
          var photographerName = document.createElement('div');
          photographerName.className = 'full-name-photographer';

          photographerName.innerHTML = '<div class="full-name">' + fullName.firstName + ' ' + fullName.lastName + '</div>';

          nameContainer.appendChild(photographerName);
        });
      })
    }
  };
  xhrProfile.send();

};