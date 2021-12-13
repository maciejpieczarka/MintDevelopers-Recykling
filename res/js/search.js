const searchBar = document.getElementById('searchBar');
const searchOptions = document.getElementById('searchOptions');
const searchBtn = document.getElementById('searchBtn');
const productTitle = document.getElementById('productTitle');
const productSubtitle = document.getElementById('productSubtitle');
const recyclingIcon = document.getElementById('recyclingIcon');

// Util function
const generateProductTitle = (prodName, typ) => {
    let subtitleText = '';
    let titleText = prodName;

    //If type, generate title, subtitle and icon connected with it
    if(typ.toString() == 'Papier') {
        subtitleText = 'pojemnik na papier';
        recyclingIcon.className = 'fas fa-scroll';
    }else if(typ.toString() == 'Bioodpady'){
        subtitleText = 'pojemnik na bioodpady';
        recyclingIcon.className = 'fas fa-seedling';
    } else if(typ.toString() == 'Metale i tworzywa sztuczne') {
        subtitleText = 'pojemnik na metale i tworzywa sztuczne';
        recyclingIcon.className = 'fas fa-lock';
    } else if(typ.toString() == 'Gabaryty') {
        subtitleText = 'pojemnik na gabaryty';
        recyclingIcon.className = 'fas fa-couch';
    } else if(typ.toString() == 'Szkło') {
        subtitleText = 'pojemnik na szkło';
        recyclingIcon.className = 'fas fa-wine-bottle';
    } else if(typ.toString() == 'Zielone') {
        subtitleText = 'pojemnik na zielone';
        recyclingIcon.className = 'fab fa-envira';
    } else if(typ.toString() == 'Odpady zmieszane') {
        subtitleText = 'pojemnik na odpady zmieszane';
        recyclingIcon.className = 'fas fa-trash';
    } else if(typ.toString() == 'Elektrośmieci') {
        subtitleText = 'pojemnik na elektrośmieci';
        recyclingIcon.className = 'fas fa-plug';
    } else if(typ.toString() == 'Leki') {
        subtitleText = 'pojemnik na leki';
        recyclingIcon.className = 'fas fa-pills';
    } else if(typ.toString() == 'Baterie i akumulatory') {
        subtitleText = 'pojemnik na baterie i akumulatory';
        recyclingIcon.className = 'fas fa-car-battery';
    } else {
        subtitleText = 'punkt selektywnej zbiórki odpadów komunalnych';
        recyclingIcon.className = 'fas fa-house-user';
    }
    productSubtitle.textContent = subtitleText;
    productTitle.textContent = titleText;
};

searchBar.addEventListener('input', (e) => {
    let txtValue = e.target.value;
    fetch(`https://api.um.warszawa.pl/api/action/datastore_search/?resource_id=64b9d66c-d134-4a87-9f24-258676e9e498&q=${txtValue}`)
    .then(res => res.json())
    .then(res => res.result.records.forEach(elem => {
        if(searchOptions.querySelector('[value="' + elem.Nazwa + '"]')) {

        } else {
            const opt = document.createElement('option');
            opt.value = elem.Nazwa;
            searchOptions.appendChild(opt);
        }
        
    }));
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let recycleElement = capitalizeFirstLetter(searchBar.value);
    fetch(`https://api.um.warszawa.pl/api/action/datastore_search/?resource_id=64b9d66c-d134-4a87-9f24-258676e9e498&q=${recycleElement}`)
    .then(res => res.json())
    .then(res => res.result.records.forEach(elem => {
        if(elem.Nazwa.toString() == recycleElement ) {
            let productName = elem.Nazwa.toString();
            generateProductTitle(productName, elem.Typ);
        }
    }));
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }