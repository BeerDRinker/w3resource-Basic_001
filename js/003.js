(() => {

    let currentDate = new Date();
    console.log(currentDate);
    
    let month = currentDate.getMonth() +1;

    if (month < 10) {
        month = `0${month}`
    }

    console.log(month);
    
    let date = currentDate.getDate();
    
    if (date < 10) {
        date = `0${date}`
    }
    console.log(date);
    
    const year = currentDate.getFullYear();
    console.log(year);
    
    const mmddyyyy = document.getElementById('mmddyyyy').innerHTML = `${month}-${date}-${year}`;
    const mm_dd_yyyy = document.getElementById('mm_dd_yyyy').innerHTML = `${month}/${date}/${year}`;
    const ddmmyyyy = document.getElementById('ddmmyyyy').innerHTML = `${date}-${month}-${year}`;
    const dd_mm_yyyy = document.getElementById('dd_mm_yyyy').innerHTML = `${date}/${month}/${year}`;

})();