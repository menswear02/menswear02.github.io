

document.write(`
<!-- search box iframe style -->
<link rel="stylesheet" href="assets/css/search-box.css">

<script src="assets/js/search-box.js" type="text/javascript"></script>

<!-- search box -->
<div class="mw--search-box-open" id="mw__open_close_searchbox">
    <span class="close mw--search-box-close" onclick="mw__click_to_close_searchbox()">
        <svg class="mw--search-box-svg-close" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
    </span>
    <!-- search box iframe -->
    <iframe src="assets/html/search.html" class="mw--search-box-iframe" name="Searchbox" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" allowfullscreen></iframe>
</div>


`)


