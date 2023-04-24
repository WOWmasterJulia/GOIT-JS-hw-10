import debounce from 'lodash.debounce';
import './css/styles.css';
import {fetchCountries} from "./fetchCountries"
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

const inputEl = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const countryEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

let inpName = '';

function onSearch(evt) {
    evt.preventDefault(evt);
    // inpName = evt.currentTarget.value.trim();
    inpName = evt.target.value.trim();
    if (inpName === '') {
        return
    }
    // console.log(evt.currentTarget.value);
    fetchCountries(inpName).then(data => {
        // console.log(data)
        
        if (data.length > 10) {
            countryEl.innerHTML = '';
            listEl.innerHTML = '';
            Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            
            return;
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
        <div style = "display: flex">
        <img src="${elem.flags.png}" alt="${elem.flags.alt}" width="160" height="105" > 
        <h1 style = "font-weight: 700"> ${elem.name.official}</h1>
        </div>
        <p style = "font-weight: 700">Capital: <span style = "font-weight: 400">${elem.capital} </span></p>
        <p style = "font-weight: 700">Population: <span style = "font-weight: 400">${elem.population} </span></p>
        <p style = "font-weight: 700">Languages: <span style = "font-weight: 400">${Object.values(elem.languages)} </span></p>   
        </div>`).join("");
        listEl.innerHTML = markupcard;
        }
//     }).catch(err => {
//         console.log(err)
//         Notiflix.Notify.failure("Oops, there is no country with that name.");
//     });
// }
    }).catch(err => {
        if(err.message === '404') {        
        Notiflix.Notify.failure("Oops, there is no country with that name.");
            countryEl.innerHTML = '';
            listEl.innerHTML = '';

            // inputEl.value = '';
        }
        console.log(err);
    });
}
