(() => {

    function greaterThan(side, id) {
        if (side < 1 ) {
            document.getElementById(id).innerHTML = "Must be greater than 0"
        }
        setTimeout(function() {
            document.getElementById(id).innerHTML = null;
        }, 2000);
    }

    document.getElementById('calc').addEventListener('click', () => {
        const sideA = Number(document.getElementById('sideA').value);
        greaterThan(sideA, 'messageA');
        
        const sideB = Number(document.getElementById('sideB').value);
        greaterThan(sideB, 'messageB');

        const sideC = Number(document.getElementById('sideC').value);
        greaterThan(sideC, 'messageC');

        const p = (sideA + sideB + sideC) / 2;
        const result = Math.sqrt(p * (p - sideA) * (p - sideB) * (p - sideC));
        
        document.getElementById('result').innerHTML = result;

    });

})();

// main.mainContentTriangle
// h1 Area of a triangle 
// p Enterfirst side A: 
//     input#sideA
// p Enterfirst side B: 
//     input#sideB
// p Enterfirst side C: 
//     input#sideC
// button#calc Calculate
// h2#result