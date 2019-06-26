$(document).ready(function(){
    $("h1").click(function(){
                            //(like height,  speed  ,callback )
        $(".sample").animate({
            height: '+=100px',
            width : '+=100px'
        }, 1000);
    });
});