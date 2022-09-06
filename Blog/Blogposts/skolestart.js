$(function(){
    $("#søknader>span").click(function(){
        $(this).toggleClass("expanded");
        if(!$(this).hasClass("expanded"))
            this.scrollIntoView({behavior: "smooth", block: "center"});
    });
});