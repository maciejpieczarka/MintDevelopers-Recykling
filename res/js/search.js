const searchBar = document.getElementById('searchBar');
const searchOptions = document.getElementById('searchOptions');
const searchBtn = document.getElementById('searchBtn');
const productTitle = document.getElementById('productTitle');
const productSubtitle = document.getElementById('productSubtitle');
const recyclingIcon = document.getElementById('recyclingIcon');

// Util function
const generateProductTitle = (prodName, typ) => {
    let subtitleText = '';
    let titleText = '';
    if(typ.toString() == 'Papier') {
        subtitleText = 'pojemnik na papier';
        titleText = prodName;
        console.log(recyclingIcon)
        recyclingIcon.classList.add('fa-scroll');
    }
    productSubtitle.textContent = subtitleText;
    productTitle.textContent = titleText;
};

searchBar.addEventListener('input', (e) => {
    let options = document.querySelectorAll('option');
    let txtValue = e.target.value;

    fetch(`https://api.um.warszawa.pl/api/action/datastore_search/?resource_id=64b9d66c-d134-4a87-9f24-258676e9e498&q=${txtValue}`)
    .then(res => res.json())
    .then(res => res.result.records.forEach(elem => {
        // if(options.some())
        // console.log(options[1]);
        const opt = document.createElement('option');
        opt.value = elem.Nazwa;
        searchOptions.appendChild(opt);
    }));
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let recycleElement = searchBar.value;
    fetch(`https://api.um.warszawa.pl/api/action/datastore_search/?resource_id=64b9d66c-d134-4a87-9f24-258676e9e498&q=${recycleElement}`)
    .then(res => res.json())
    .then(res => res.result.records.forEach(elem => {
        if(elem.Nazwa.toString() == recycleElement ) {
            let productName = elem.Nazwa.toString();
            console.log(elem.Typ);
            generateProductTitle(productName, elem.Typ);
        }
    }));
});