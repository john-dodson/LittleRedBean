$(document).ready(function(){
// executed after the page has finished loading

    $('#navigationMenu li .normalMenu').each(function(){	// for each menu item

        // create a duplicate hyperlink and position it above the current one
        $(this).before($(this).clone().removeClass().addClass('hoverMenu'));

    });

    $('#navigationMenu li').hover(function(){	// using the hover method..

        // we assign an action on mouse over
        $(this).find('.hoverMenu').stop().animate({marginTop:'0px'},200);
        // the animate method provides countless possibilities

    },

    function(){
        // and an action on mouse out
        $(this).find('.hoverMenu').stop().animate({marginTop:'-25px'},200);

    });

});