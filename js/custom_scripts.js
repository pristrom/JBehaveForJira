$(document).ready(function () {
    console.log("ready!");

    $(".page-shortcut-link").each(function () {
        $(this).on('click', 'a', function (event) {
            event.preventDefault();
            console.log("on click handler! this - " + this.text);

            $(".page-shortcut-link").removeClass("selected");
            $(".page-content").removeClass("selected");

            $(event.target).parent().addClass("selected");

            var hrefAttr = $($(this)[0]).attr("href");
            console.log("hrefAttr - " + hrefAttr);

            $(hrefAttr).addClass("selected");
        });

    });

//    $(".page-shortcut-link").each(function() {
//        $(this).find("a").onclick(function(event){
//                event.preventDefault();
//                console.log("on click handler!");
//        });
//
//    });
});