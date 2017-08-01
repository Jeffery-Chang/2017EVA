(function(a){a.preload=function(){var c=[],b=arguments.length;for(;b--;){c.push(a("<img />").attr("src",arguments[b]));}};})(jQuery);
$(function(){
    var indexCtrl = new Vue({
        el: '#indexPage',
        data:{
            slickData: pic,
            bgData: [
                { 'bg': 'img/bg1.png', 'mbg': 'img/m_bg1.jpg', show: true },
                { 'bg': 'img/bg2.png', 'mbg': 'img/m_bg2.jpg', show: true },
                { 'bg': 'img/bg3.png', 'mbg': 'img/m_bg3.jpg', show: true },
                { 'bg': 'img/bg4.png', 'mbg': 'img/m_bg4.jpg', show: true },
                { 'bg': '', 'mbg': 'img/m_bg5.jpg', show: false }
            ],
            burger: false,
            albumFG: true,
            lightbox: true,
            lightWord: '1992-11-02 西雅圖波音公司 747-400 交機儀式暨晚宴'
        },
        beforeMount: function(){
            $.each(pic, function(key, obj){ $.preload('img/album/' + obj.src); });
        },
        mounted: function(){
            var $this = this;
            this.menu();
            this.scroll();
            this.initObj();

            $(window).on('scroll', function(){
                $this.scroll();
            }).on('load', function(){
                $this.initTitle();
                $this.lightbox = false;
            });
        },
        methods:{
            preventall: function(event){
                event.stopPropagation();
                event.preventDefault();
            },
            menu: function(){
                var $this = this;
                $('.menu .left li, #overlay li').on('click', function(e){
                    $this.preventall(e);
                    var dir = $(this).find('a').attr('role');
                    var padding = 0;
                    if(dir){
                        if(dir == 'history') padding = 70;
                        if($this.burger) $this.burger = false;
                        $this.$nextTick(function(){
                            $('html,body').stop().animate({
                                scrollTop: $('.' + dir).offset().top - $('header').height() / 2 - padding
                            }, 500);
                        });
                    }
                });
            },
            scroll: function(){
                if(this.burger) return;
                var scrollTop = $(window).scrollTop();
                var base = $('header').height() / 2;
                var width = $(window).width();
                if(scrollTop > base){
                    $('header').addClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_g.svg');
                }else{
                    $('header').removeClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_w.svg');
                }
            },
            burgerCtrl: function(){
                this.burger = !this.burger;
                $('header').removeClass('scrolled');
                $('header .logo img').attr('src', 'asset/svg/logo_w.svg');
                this.$nextTick(function(){
                    if(!this.burger) this.scroll();
                });
            },
            initObj: function(){
                var $this = this;
                
                // 兩飛機票進場
                new WOW().init();
                
                // 相簿slick
                $('.lightbox .slickBox').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    adaptiveHeight: true,
                    dots: false,
                    infinite: false,
                    prevArrow: $('.lightbox_arrow .left'),
                    nextArrow: $('.lightbox_arrow .right'),
                    asNavFor: '.lightbox .slider ul'
                });
                $('.lightbox .slider ul').slick({
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    asNavFor: '.lightbox .slickBox',
                    arrows: false,
                    dots: false,
                    infinite: false,
                    centerMode: false,
                    focusOnSelect: true
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    $('.lightbox .slider ul li').eq(currentSlide).find('a').removeClass('active');
                    $('.lightbox .slider ul li').eq(nextSlide).find('a').addClass('active');

                    $.each(word, function(key, obj){
                        if(nextSlide == obj.action) $this.lightWord = obj.words;
                    });
                });

                // 雲視差
                $('.scrolling_cloud').parallax("50%", 1);

                // QA+號
                $('.QA .content li').on('click', function(e){
                    $this.preventall(e);
                    $('.QA .content li .plus-minus-toggle').addClass('collapsed');
                    $('.QA .content li .answer').slideUp();
                    $('.QA .content li').removeClass('active');
                    $(this).find('.plus-minus-toggle').removeClass('collapsed');
                    $(this).addClass('active');
                    $(this).find('.answer').slideDown();
                });

                // 歷史回顧
                $('.slidebox').slick({
                    infinite: false,
                    prevArrow: $('.story_arrowbox .left'),
                    nextArrow: $('.story_arrowbox .right')
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    $('.indicator').css('margin-left', nextSlide * 25 + 'px');
                });
            },
            initTitle: function(){
                var left = $('.tt1, .tt3');
                var right = $('.tt2');
                var line = $('.tt4');
                var plane = $('.tt5');
                var delaytime = 0;
                var sec = 1;

                TweenMax.to(right, .8, {width: "144px", delay: .75 + delaytime});
                TweenMax.staggerTo(left, .75, {y: -50, opacity: 1, delay: delaytime, ease: Power1.easeOut}, .33);

                var tl = new TimelineMax({delay: .5 + delaytime});
                var bezTween = new TweenMax(plane, sec, {
                    bezier:{
                        type:"soft", 
                        values:[
                            {x: 179, y: 32, opacity: 1,  scale: 1.2, rotation: 35},
                            {x: 229, y: -15, opacity: 1,  scale: .9, rotation: 0}
                        ],
                        autoRotate: false
                    },
                    ease: Power2.easeIn});
                tl.add(bezTween);
                TweenMax.to(line, sec, {width: '231px', ease: Power2.easeIn, delay: .5 + delaytime});
            },
            openBox: function(e, key){
                this.preventall(e);
                var newWord = word[key].words;
                var newKey = word[key].action;
                this.lightWord = newWord;
                $('.lightbox .slickBox').on('reInit').slick('slickGoTo', newKey, true);
                $('.lightbox .slider ul').slick('slickGoTo', newKey, true);

                this.lightbox = true;
            }
        }
    });
});