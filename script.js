const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = formSearch.querySelector('.input__cities-from'), //можно использовать отдельную форму, а не весь документ
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to');

const cities = ['Москва', 'Санкт-Петербург', 'Челябинск',
    'Минск', 'Самара', 'Вроцлав',
    'Одесса', 'Нижний Новгород', 'Калининград',
    'Ростов-на-Дону'
];

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {

        const filterCity = cities.filter((item) => {
            const itemToLowerCase = item.toLowerCase();
            return itemToLowerCase.includes(input.value.toLowerCase());
        });

        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);

        });

    }
};

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
    }
});

dropdownCitiesTo.addEventListener('click', () => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'li') {
        inputCitiesTo.toLowerCase() = target.textContent;
        dropdownCitiesTo.textContent = '';
    }
});