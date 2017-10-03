/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

( () => { 

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentTime = currentDate.toLocaleString('uk-UA').split(' ')[1];

    function displayDay(currentDay, currentTime) {
        const daysOfWeek = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ];
        document.getElementById('day').innerText = ` ${daysOfWeek[currentDay - 1]}`;
        document.getElementById('time').innerText = ` ${currentTime}`;
    }

     displayDay(currentDay, currentTime);

})();