const formSearch = document.querySelector('.form-search'), //Получение элементов страницы
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'), //можно использовать отдельную форму, а не весь документ
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to');


//Данные:
const citiesDB = 'dataBase/cities.json';

const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json';

const calendar = 'http://min-prices.aviasales.ru/calendar_preload';

const API_KEY = '51f0779e2bf5c5bdc1e5ff31ab93927a';

const proxy = 'https://cors-anywhere.herokuapp.com/';

let cities = [];

//функции:
const getData = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;
        if (request.status === 200) {
            callback(request.response);
        } else {
            console.error(request.status);
        }
    });

    request.send();
};

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {
        const filterCity = cities.filter((item) => {
            const itemToLowerCase = item.name.toLowerCase();
            return itemToLowerCase.includes(input.value.toLowerCase());

        });

        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item.name;
            list.append(li);

        });

    }
};

const selectCity = (event, input, list) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        input.value = target.textContent;
        list.textContent = '';
    }
}

//Обработка событий и вызов функций
inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    selectCity(event, inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    selectCity(event, inputCitiesTo, dropdownCitiesTo);
});

//Вызовы функций
getData(proxy + citiesApi, (data) => {
    cities = JSON.parse(data).filter(item => item.name); //допускается такая запись, если подразумевается только возврат
});



//  Домашка:
//  
//  Усложненная домашка:
//  Сделать 1 запрос на сервер для получения билета на 25 мая
//  ЕКБ в КГД 
//  Вывести результат в консоль
//  http://min-prices.aviasales.ru/calendar_preload