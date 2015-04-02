$(document).ready(function () {
    console.log("ready!");

    $(".page-shortcut-link").each(function () {
        $(this).on('click', 'a', function (event) {
            $(this).parent().find(".page-shortcut-link").removeClass("selected");
            $(event.target).parent().addClass("selected");
            console.log("on click handler! this - " + this.text);
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