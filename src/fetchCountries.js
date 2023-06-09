// Напиши функцію fetchCountries(name), яка робить HTTP-запит на ресурс name і повертає проміс з масивом країн - результатом запиту. Винеси її в окремий файл fetchCountries.js і зроби іменований експорт.

// Тобі потрібні тільки наступні властивості:
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов



export function fetchCountries(name) {
    
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();  
    })
};


// fetchCountries().then(data => console.log(data)).catch(err => console.log(err));

    // response.json() = data
    // .then(fetchCountries) - передаешь ссылку на функцию
    // .then(fetchCountries()) - передаешь вызов этой функции и увидишь результат


