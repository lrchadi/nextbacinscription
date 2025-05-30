let cards = document.querySelector('.cards');

const ecoles = [
    {
        id: 1,
        name: "Écoles supérieurs",
        image: "./images/ES1.png",
    },
    {
        id: 2,
        name: "Institus supérieurs",
        image: "./images/ES2.png",
    },
    {
        id: 3,
        name: "Universités",
        image: "./images/ES3.png",
    },
    {
        id: 4,
        name: "OFPPT",
        image: "./images/ES4.png",
    },
    {
        id: 5,
        name: "Écoles militaires",
        image: "./images/ES5.png",
    },
]


for(let i = 0; i < ecoles.length; i++){
    cards.innerHTML += `
        <a href="./es_infos.html">
            <div class="card" key=${ecoles[i].id}>
                <img src=${ecoles[i].image} alt=${ecoles[i].name} width="120px" height="120px">
                <p class="es_name">${ecoles[i].name}</p>
            </div>
        </a>
    `
}
