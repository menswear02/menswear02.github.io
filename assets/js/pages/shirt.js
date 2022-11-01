const url = "https://docs.google.com/spreadsheets/d/1dhPqimCZRKwILS7LoCAcF88LMmoTEA7MKHXB1M5jJyo/export?format=csv";
const main = document.querySelector("main");


fetch(url).then(result=>result.text()).then(function(csvtext) {
    return csv().fromString(csvtext);
}).then(function(csv) {
    main.inner = csv.reverse();
    csv.forEach(function(row) {

        main.innerHTML += `

        
    <div id="${row.ID}" class="display-${row.Category} div1">

        <div class="div4">
            <!--
            <div class="share-box">
                <button class="share-btn" type="button"></button>
            </div>
            -->

            <div class="div2 mw--img-loading">
                <a class="a1" href="/s/#${row.ID}">
                    <img class="img1" src="${row.Img}" alt="">
                </a>
            </div>

            <div class="platform-icon-ol">
                <a href="${row.Link}">
                    <button class="platform-icon platform-${row.platform}"></button>
                </a>
            </div>

            <div class="div3">
                <span class="p1">${row.Name}</span>
                <span class="p22">
                    <n class="p3">₹${row.MRP}</n>
                    <b> | ₹${row.Price} | </b>
                    <b class="per"> ${row.percent}%</b>
                </span>
            </div>

        </div>

    </div>


    `

    });
});

