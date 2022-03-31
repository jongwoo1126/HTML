$(function(){
    let menu = $('#gnb > li > a');
    menu.click(function(e){
        e.preventDefault();

        let isVisible = $(this).next().is(':visible');
        if(isVisible){
            // 메뉴 닫음
            $(this).next().slideUp(250);
        }else{
            // 메뉴 펼침
            $(this).next().slideDown(250);
        }
    })
});