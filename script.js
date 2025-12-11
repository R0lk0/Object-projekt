const ujauto = document.getElementById("ujauto");
const megnyiloablak = document.getElementById("megnyiloablak");
const model = document.getElementById("model");
const available = document.getElementById("available");
const price = document.getElementById("price");
const hozzaadas = document.getElementById("hozzaadas");
const masodiksor = document.getElementById("masodiksor");
const torles = document.getElementById("torles");

const osszesauto = [];

const bogarp = document.getElementById("bogarp");
const bogar = {model: "Volkswagen bogár", available: "elérhető", price: 10000}
bogarp.innerHTML = `${bogar.model}<br>${bogar.available}<br>${bogar.price} ft/nap`;

const ladap = document.getElementById("ladap");
const lada = {model: "Lada 2103", available: "nem elérhető", price: 8500}
ladap.innerHTML = `${lada.model}<br>${lada.available}<br>${lada.price} ft/nap`;

const yugop = document.getElementById("yugop");
const yugo = {model: "Zastava Yugo", available: "nem elérhető", price: 5700}
yugop.innerHTML = `${yugo.model}<br>${yugo.available}<br>${yugo.price} ft/nap`;

ujauto.addEventListener("click",()=>{
    megnyiloablak.style.visibility = "visible";
})

hozzaadas.addEventListener("click", ()=>{
    megnyiloablak.style.visibility = "collapse";
    const newcar = {model: model.value, available: available.value == "on" ? "elérhető": "nem elérhető", price: price.value}
    osszesauto.push(newcar);
    renderCars(osszesauto);
})

function renderCars(autok){
    const autoktag = document.getElementById("newcars");
    let content = "";
    osszesauto.forEach(auto => {
        content += `
        <div class="imgbox">
            <button id="torles">Törlés</button>
            <img src="images/empty.jpg" alt="car">
            <p>${auto.model}<br>${auto.available}<br>${auto.price}</p>
        </div>
        `
    });
    autoktag.innerHTML = content;
}

renderCars(osszesauto);