'use strict';

/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

(function () {
    "use strict";

    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentTime = currentDate.toLocaleString('uk-UA').split(' ')[1];

    function displayDay(currentDay, currentTime) {
        var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        document.getElementById('day').innerText = ' ' + daysOfWeek[currentDay - 1];
        document.getElementById('time').innerText = ' ' + currentTime;
    }

    displayDay(currentDay, currentTime);
})();