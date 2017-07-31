$(function(){
    var indexCtrl = new Vue({
        el: '#indexPage',
        data:{
            burger: false,
            albumFG: true
        },
        mounted: function(){
            var $this = this;
            this.menu();
            this.scroll();
            this.initObj();

            $(window).on('scroll', function(){
                $this.scroll();
            });
        },
        methods:{
            preventall: function(event){
                event.stopPropagation();
                event.preventDefault();
            },
            menu: function(){
                var $this = this;
                $('.menu .left li').on('click', function(e){
                    $this.preventall(e);
                    var dir = $(this).find('a').attr('role');
                    if(dir){
                        $('html,body').stop().animate({
                            scrollTop: $('.' + dir).offset().top - $('header').height() / 2
                        }, 500);
                    }
                });
            },
            scroll: function(){
                if($(window).scrollTop() > $('header').height() / 2){
                    $('header').addClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_g.svg');
                }else{
                    $('header').removeClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_w.svg');
                }
            },
            initObj: function(){
                var $this = this;
                // 雲視差
                $('.scrolling_cloud').parallax("50%", 1);

                // QA+號
                $('.content li').on('click', function(e){
                    $this.preventall(e);
                    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
                    $(this).find('.answer').slideToggle();
                });

                // 歷史回顧
                $('.slidebox').slick({
                    infinite: false,
                    prevArrow: $('.story_arrowbox .left'),
                    nextArrow: $('.story_arrowbox .right')
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    $('.indicator').css('margin-left', nextSlide * 25 + 'px');
                });
            }
        }
    });
});