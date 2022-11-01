const url = "https://docs.google.com/spreadsheets/d/1M4jETMRGwwY8Bmigesk8Kg5shqQ5N1FQNQLV7kNuxeo/export?format=csv";
const main = document.querySelector("#main1");


fetch(url).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);
}).then(function(csv) {
    main.inner = csv.reverse();
    csv.forEach(function(row) {

        main.innerHTML += `




<div class="mw--display-index-products-container-${row.Display} mw--index-products-container-outline">
<div class="mw--index-product mw--img-loading">
    <a href="${row.Link1}">
        <img class="mw--index-product-img" src="${row.Image1}" alt="${row.ID} | ${row.Timestamp}">
    </a>
</div>
<div class="mw--index-product mw--img-loading">
    <a href="${row.Link2}">
        <img class="mw--index-product-img" src="${row.Image2}" alt="${row.ID} | ${row.Timestamp}">
    </a>
</div>
<div class="mw--index-product mw--img-loading">
    <a href="${row.Link3}">
        <img class="mw--index-product-img" src="${row.Image3}" alt="${row.ID} | ${row.Timestamp}">
    </a>
</div>
<div class="mw--index-product mw--img-loading">
    <a href="${row.Link4}">
        <img class="mw--index-product-img" src="${row.Image4}" alt="${row.ID} | ${row.Timestamp}">
    </a>
</div>
</div>




    `

    });


});