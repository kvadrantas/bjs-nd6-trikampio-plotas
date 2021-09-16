/*
parasyti funkcija, kuri paskaiciuoja trikampio plota
pagal nurodyus krastiniu ilgius
(Herono formule)
 
pradzioj reikia patikrinti ar susidaro trikampis
jei nesusidaro - atspausdinti 
"ne trikampis"
ir grazinti -1;
 
2, 4, 5
 
654, 15, 666
 
65, 48, 11
 
*/

function trikampioPlotas(a, b, c) {
    if (a >= b + c || b >= a + c || c >= a + b) {
        console.log('ne trikampis');
        return -1;
    }
    const p = (a + b + c) / 2; //pusperimetris
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

console.log('Trikampio 1 plotas: ', trikampioPlotas(2, 4, 5));
console.log('Trikampio 2 plotas: ', trikampioPlotas(654, 15, 666));
console.log('Trikampio 3 plotas: ', trikampioPlotas(65, 48, 11));
// console.log(trikampioPlotas(10, 10, 20));