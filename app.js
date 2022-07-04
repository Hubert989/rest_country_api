const down = document.querySelector(".down");
const arrow_icon = document.querySelector(".arrow_icon");
const content = document.querySelector(".content");
const moon = document.querySelector(".fa-moon");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const input_search = document.querySelector(".search");
const select = document.querySelector(".select_header");
const item = document.querySelectorAll(".country");

arrow_icon.addEventListener("click", () => {
    down.classList.toggle("open");
})

async function getData(){
    const url = await fetch("https://restcountries.com/v2/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);
    });
}
getData();

function showCountry(data){
    const country_div = document.createElement("div");
    country_div.classList.add("country");
    country_div.innerHTML =
    `<div class="country_img">
        <img src="${data.flag}">
    </div>
    <div class="country_text">
        <h3>${data.name}</h3>
        <div class="country_info">
            <div class="pop">
                <p>Population:</p>
                <span class="population_result">${data.population}</span>
            </div>
            <div class="reg">
                <p>Region:</p>
                <span class="region_result">${data.region}</span>
            </div>
            <div class="cap">
                <p>Capital:</p>
                <span class="capital_result">${data.capital}</span>
            </div>
        </div>
    </div>`;
content.appendChild(country_div);
}

moon.addEventListener("click", ()=>{
    header.classList.toggle("dark_header");
    main.classList.toggle("dark_main");
    select.classList.toggle("dark_select");
    input_search.classList.toggle("dark_search");
    down.classList.toggle("dark_select");
    item.forEach(element =>{
        element.classList.toggle("dark_country");
    })
})

