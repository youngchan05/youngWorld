var utils = init();

function init (){
    return {
        locationPop: function(){
            var $selector = $('.station-map .marker'),
                $pop = $('.station-pop'),
                $stationName = $pop.find('.station-name'),
                $close = $('.close-station');
            $selector.on('click',function(){
                if($(this).hasClass('disabled')) return;
                $(this).addClass('active').siblings().removeClass('active');
                $stationName.text($(this).find('span').text());
                $pop.addClass('active');
            })
            $close.on('click',function(){
                $selector.removeClass('active');
                $pop.removeClass('active');
            })
        },
        openPop : function(){
            $('.open-btn').on('click',function(){
                $('.bottom-pop').toggleClass('active');
            })
        },
        closePop : function(){
            $('.bottom-pop .close-btn').on('click',function(){
                $('.bottom-pop').toggleClass('active');
            })
        },
        accordion: function(){
            var $selector = $('.accordion-wrap dt');
            $selector.on('click',function(){
                $(this).toggleClass('active');
            })
        },
        dropList: function(){
            var $selector = $('.drop-list-box button');
            $selector.on('click',function(){
                $(this).parent().toggleClass('active');
            })
        },
    }
}

(function(){
    utils.locationPop();
    utils.openPop();
    utils.closePop();
    utils.accordion();
    utils.dropList();
})();
