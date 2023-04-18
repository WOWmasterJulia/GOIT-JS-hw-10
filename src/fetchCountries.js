// Напиши функцію fetchCountries(name), яка робить HTTP-запит на ресурс name і повертає проміс з масивом країн - результатом запиту. Винеси її в окремий файл fetchCountries.js і зроби іменований експорт.

// Тобі потрібні тільки наступні властивості:
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

import './css/styles.css';
function fetchCountries() {
    return fetch('https://restcountries.com/v3.1/name/deutschland')
    .then(response => {
    // console.log(response.json());
        return response.json();
        // дальнейшее убираем, т.к. перед fetch ставим ретерн:
    // })
    // .then(country => {
    // console.log(country);
    // })
    // .catch(error => {
    // console.log(error);
    });
}
fetchCountries()
    .then(newCountry)
    .catch(error => console.log(error));
    
    // .then(fetchCountries) - передаешь ссылку на функцию
    // .then(fetchCountries()) - передаешь вызов этой функции и увидишь результат


