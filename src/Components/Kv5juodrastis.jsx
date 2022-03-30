
console.log('-------mygtuko ir skaiciaus suradimas, paspaudimu kurimas-----------');
let counter = 0; // skaitiklis
const button = document.querySelector('button'); // surandam buton
const h1 = document.querySelector('h1'); // surandam skaiciu

h1.innerText = gameCounter; // paspaudeme 0 kartu

button.addEventListener('click', () => {
    gameCounter++; // gameCounter padideja per vieneta
    h1.innerText = gameCounter; // padidejas gameCounter o, 1, 2, ir t.t
console.log('-------mygtuko ir skaiciaus suradimas, paspaudimu kurimas-----------');   
console.log('2.-------rezultato fiksavimas SAVE-----------');
    localStorage.setItem('gameSave', gameCounter); // reikalingas duomenu issaugojimui
console.log('2.-------rezultato fiksavimas SAVE-----------');
});