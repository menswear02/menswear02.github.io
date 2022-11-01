(function () {
    var showResults;

    $("#mw__search_input").keyup(function () {
        var searchText;
        searchText = $("#mw__search_input").val();
        return showResults(searchText);
    });

    showResults = function (searchText) {
        $(".mw--search-list-item").hide();
        return $(".mw--search-list-item:Contains(" + searchText + ")").show();
    };

    //# Override the Contains function to be case insensitive
    jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function (arg) {
        return function (elem) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
}.call(this));