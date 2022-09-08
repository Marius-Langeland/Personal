$(function()
{
    $(".collapsed").click(function(){
        $(this).addClass("expanded");
        this.scrollIntoView({behavior: "smooth", block: "center"});
    });
    $(".collapsed").focusout(function(){
        $(this.parent).removeClass("expanded");
        this.scrollIntoView({behavior: "smooth", block: "center"});
    });

    $(".extension-indicator").html("<dot></dot><dot></dot><dot></dot>");

    $("#embedded-cv-slider").on("input", (function(){
        var w = $("#embedded-cv-slider").val();
        $(".cv").css("width", `${100-w}%`);
        if($(""))
        this.scrollIntoView({behavior: "smooth"});
    }));
});