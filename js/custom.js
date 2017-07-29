//NAV
function nav(){
    $("#menu").click(function(){
            $("#nav").toggle();
     });
     $(window).resize(function(){
        if(window.innerWidth > 900) {
            $("#nav").removeAttr("style");
       }
    });
}

//TPO MENU
function top_menu(){
    var full_path = location.href.split("#")[0];
    $("#nav li a").each(function(){
        var $this = $(this);
        if($this.prop("href").split("#")[0] == full_path) {
            $(this).children('div').addClass("active");
        }

    });

}

//SIDEBAR MENU
function sidebar_menu(){
        $(".sidebar li a").click(function () {
            //removing the previous selected menu state
            $(".sidebar").find("li.active").removeClass("active");
            //adding the state for this parent menu
            $(this).parents("li").addClass("active");
        });
}

// btn_up
function btn_up(){
    $('#btn_up').click(function() {
        $('html,body').animate({scrollTop:0},1000);
    });
    $(window).scroll(function(){
        var SCROLL = $(window).scrollTop(); //抓目前網頁捲軸的座標
        if( SCROLL>500 ){
          $("#btn_up").stop(true,false).animate({ bottom : 30}, 100, "easeOutBack");
        }else{
          $("#btn_up").stop(true,false).animate({ bottom : -1000}, 100, "easeOutBack");
        }
    });
}


$(document).ready(function(){
    nav();
    top_menu()
    sidebar_menu()
    btn_up()
});
