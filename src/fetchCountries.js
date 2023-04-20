// Напиши функцію fetchCountries(name), яка робить HTTP-запит на ресурс name і повертає проміс з масивом країн - результатом запиту. Винеси її в окремий файл fetchCountries.js і зроби іменований експорт.

// Тобі потрібні тільки наступні властивості:
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов



export function fetchCountries(name) {
    // Для Германии:
    // return fetch('https://restcountries.com/v3.1/name/deutschland')
    // Не работает:
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    // return fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages')
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();  
    })
};

// Для Германии:
// fetchCountries('deutschland').then(data => console.log(data)).catch(err => console.log(err));
// fetchCountries().then(data => console.log(data)).catch(err => console.log(err));
// fetchCountries().then(data => console.log(data)).catch(err => console.log(err));

    // response.json() = data
    // .then(fetchCountries) - передаешь ссылку на функцию
    // .then(fetchCountries()) - передаешь вызов этой функции и увидишь результат


