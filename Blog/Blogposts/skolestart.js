$(function(){
    $(".collapsed").click(function(){
        $(this).toggleClass("expanded");
        if(!$(this).hasClass("expanded"))
            this.scrollIntoView({behavior: "smooth", block: "center"});
    });
    $(".extension-indicator").html("<dot></dot><dot></dot><dot></dot>")
});