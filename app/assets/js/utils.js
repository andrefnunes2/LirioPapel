$(window).resize(function(){
    footerBottom(); 
});

function footerBottom(){
    var heightScreen = $(document).height() - $("app-header").height() - $("app-footer").height();

    console.log(heightScreen);

    $("app-footer").removeClass("footerBottom");
    if($("main").height() < heightScreen)
        $("app-footer").addClass("footerBottom");
}