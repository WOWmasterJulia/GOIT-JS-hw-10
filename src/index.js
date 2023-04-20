import debounce from 'lodash.debounce';
import './css/styles.css';
import {fetchCountries} from "./fetchCountries"
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const countryEl = document.querySelector('.country-info');
// inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));
// inputEl.addEventListener('input', onSearch);
let inpName = '';

function onSearch(evt) {
    evt.preventDefault(evt);
    inpName = evt.currentTarget.value.trim();
    if (inpName === '') {
        return
    }
    // console.log(evt.currentTarget.value);
    fetchCountries(evt.currentTarget.value).then(data => {
        console.log(data)
        
        if (data.length > 10 ) {
            Notiflix.Notify.failure("Too many matches found. Please enter a more specific name."); 
            return
        }
        const markup = data.map((elem) => `
        <li> 
        <img src="${elem.flags.svg}" alt="${elem.flags.alt}" width="25"> ${elem.name.official}     
        </li>`).join("");
        listEl.innerHTML = markup;

        listEl.style.listStyle = "none";
        listEl.style.fontSize = "25px";
        listEl.style.alignItems = "center";
        if (data.length === 1) {
            const markupcard = data.map((elem) => `
        <div> 
        <img src="${elem.flags.svg}" alt="${elem.flags.alt}" width="25"> ${elem.name.official} 
        <p style = "font-weight: 700">Capital: <span style = "font-weight: 400">${elem.capital} </span></p>
        <p>Population: ${elem.population}</p>
        <p>Languages: ${Object.values(elem.languages)}</p>   
        </div>`).join("");
        listEl.innerHTML = markupcard;
        }
    }).catch(err => {
        console.log(err)
        Notiflix.Notify.failure("Oops, there is no country with that name.");
    });
}
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов