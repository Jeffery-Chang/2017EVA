(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js		= d.createElement(s); 
    js.id	= id;
    js.src	= "//connect.facebook.net/zh_TW/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '355985614832912',
            xfbml      : true,
            version    : 'v2.10'
        });
    };
}(document, 'script', 'facebook-jssdk'));

$(function(){
    var indexCtrl = new Vue({
        el: '#indexPage',
        data:{
            slickData: pic,
            burger: false,
            albumFG: true,
            albumIN: true,
            wowFG: false,
            singleBox: false,
            singleBoxSrc: 'img/event/event_01.jpg',
            lightbox: true,
            lightWord: '1992-11-02 西雅圖波音公司 747-400 交機儀式暨晚宴',
            ieFG: false
        },
        mounted: function(){
            var $this = this;

            if(this.chkIE9() == 9){
                this.ieFG = true;
                location.href = 'index_ie.html';
                return;
            }

            this.menu();
            this.initObj();
            this.scroll();
            this.resize();
            this.slideBG();


            $(window).on('scroll', function(){
                $this.scroll();
            }).on('resize', function(){
                $this.resize();
            }).on('load', function(){
                $this.lightbox = false;
                TweenMax.to($('#splash'), .5, {
                    height: "0%",
                    opacity: 0,
                    display: "none",
                    delay: .5,
                    onComplete: function(){
                        $this.initTitle();
                    }
                });
            });
        },
        methods:{
            preventall: function(event){
                event.stopPropagation();
                event.preventDefault();
            },
            menu: function(){
                var $this = this;
                $('.menu .left li, #overlay li, header .logo').on('click', function(e){
                    $this.preventall(e);
                    var dir = $(this).find('a').attr('role');
                    var padding = 0;
                    if(dir){
                        if(dir == 'fb'){
                            var app_id = '355985614832912';
                            var fbBack_url = '?fb_back=1';
                            var url = location.href;
                            var redirect_uri = location.href;
                            var share_u;
                            share_u = encodeURIComponent(url + fbBack_url);
                            location.href = 'https://www.facebook.com/dialog/share?app_id=' + app_id + '&display=popup&href=' + share_u + '&redirect_uri=' + redirect_uri;
                            return;
                        }
                        if(dir == 'history') padding = 100;
                        if(dir == 'history' && $(window).width() < 450) padding = 50;
                        if(dir == 'story' && $(window).width() < 450) padding = -100;
                        if($this.burger) $this.burger = false;
                        $this.$nextTick(function(){
                            $('html, body').stop().animate({
                                scrollTop: $('.' + dir).offset().top - $('header').height() / 2 - padding
                            }, 500);
                        });
                    }else{
                        if($this.burger) $this.burger = false;
                        $this.$nextTick(function(){
                            $('html, body').stop().animate({ scrollTop: 0 }, 500);
                        });
                    }
                });
            },
            scroll: function(){
                if(this.burger) return;
                var scrollTop = $(window).scrollTop();
                var base = $('header').height() / 2;
                var width = $(window).width();
                var albumOffset = $('.album').offset().top;
                var fbboxOffset = $('.fbBox').offset().top;

                if(scrollTop > base){
                    $('header').addClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_g.svg');
                }else{
                    $('header').removeClass('scrolled');
                    $('header .logo img').attr('src', 'asset/svg/logo_w.svg');
                }

                if((scrollTop > (albumOffset * 0.6)) && this.albumIN) {
                    this.albumIN = false;
                    this.initAlbum();
                }
                
                if(scrollTop > fbboxOffset){
                    $('.top-slider').css('opacity', 0);
                }else{
                    $('.top-slider').css('opacity', 1);
                }
            },
            resize: function(){
                var winWidth = $(window).width();
                var imgName = '';
                var fileName = 'png';
                var position = 'center bottom';

                if(winWidth <= 1080){
                    imgName = 'm_';
                    fileName = 'jpg';
                    position = 'left 90%';
                }
                if(winWidth <= 700){
                    imgName = 'm_';
                    fileName = 'jpg';
                    position = 'left -100px';
                }

                $('.inner').css({ width: $(window).innerWidth() });
                $.each($('.cell .inner .slide-img'), function(key, obj){
                    $(obj).attr('style', 'background: url(img/'+imgName+'bg'+(key+1)+'.'+fileName+') '+position+'; background-size: cover;');
                });
            },
            burgerCtrl: function(){
                this.burger = !this.burger;
                $('header').removeClass('scrolled');
                $('header .logo img').attr('src', 'asset/svg/logo_w.svg');
                this.$nextTick(function(){
                    if(!this.burger) this.scroll();
                });
            },
            slideBG: function(){
                $('.inner').css({width: $(window).innerWidth()});
                $('.cell').eq(0).addClass('is-next');

                slide_show();
                setInterval(slide_show, 5000);

                function slide_show(){
                    var final = $('.is-next').next('.cell').length; //判斷是否做後一張
                    $('.is-next').addClass('is-active');
                    $('.current').addClass('is-out');
                    setTimeout(function(){
                        if(final == 0){
                            $('.is-next.is-active').addClass('current').removeClass('is-active is-next')
                            $('.cell').eq(0).addClass('is-next');
                        }else{
                            $('.is-next.is-active').addClass('current').removeClass('is-active is-next').next('.cell').addClass('is-next');
                        }
                        $('.current.is-out').removeClass('current is-out');
                    }, 1200);
                }
            },
            initObj: function(){
                var $this = this;

                // WOW
                if($(window).width() > 736){
                    $('.timeline section .event, .timeline section .tldots, .timeline section .pic').addClass('inStage').addClass('fadeInUp');
                    new WOW().init();
                    new WOW({ boxClass: 'inStage', offset: 200 }).init();
                    new WOW({ boxClass: 'timeline section', animateClass: 'long', offset: 200 }).init();
                    this.wowFG = true;
                }else{
                    if(!this.wowFG) $('.timeline section').addClass('long');
                }

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
                        if(nextSlide >= obj.action && nextSlide <= obj.action_end) $this.lightWord = obj.words;
                    });
                });

                // 雲視差
                $('.scrolling_cloud').parallax("50%", 1);

                // QA+號
                $('.QA .content li').on('click', function(e){
                    $this.preventall(e);
                    if($(this).hasClass('active')){
                        $(this).find('.plus-minus-toggle').addClass('collapsed');
                        $(this).removeClass('active');
                        $(this).find('.answer').slideUp();
                    }else{
                        $('.QA .content li .plus-minus-toggle').addClass('collapsed');
                        $('.QA .content li .answer').slideUp();
                        $('.QA .content li').removeClass('active');
                        $(this).find('.plus-minus-toggle').removeClass('collapsed');
                        $(this).addClass('active');
                        $(this).find('.answer').slideDown();
                    }
                });

                // 歷史回顧
                $('.slidebox').slick({
                    dots: true,
                    appendDots: $('.story .slider'),
                    infinite: false,
                    prevArrow: $('.story_arrowbox .left'),
                    nextArrow: $('.story_arrowbox .right'),
                    customPaging : function(slider, i) {
                        return '<a style="cursor: pointer;"></a>';
                    },
                    responsive: [
                        {
                            breakpoint: 736,
                            settings: {
                                adaptiveHeight: true,
                            }
                        }
                    ]
                }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    $('.indicator').css('margin-left', nextSlide * 25 + 'px');
                });
            },
            initAlbum: function(){
                var leftLine = $('.album .subject .left .line');
                var rightWord = $('.album .subject .right');
                var albumLi = $('.album .albumbox ul li');
                var TL = new TimelineMax({delay: 0});
                var lineTween = new TweenMax(leftLine, .5, {
                    width: '100%',
                    ease: Power0.easeIn
                });
                var wordTween = new TweenMax(rightWord, .4, {
                    opacity: 1,
                    y: -50,
                    ease: Power0.easeIn
                });
                var liTween = TweenMax.staggerTo(albumLi, .2, {scale: 1, delay: 0, ease: Power0.easeOut}, .1);
                TL.add(lineTween);
                TL.add(wordTween);
                TL.add(liTween);
            },
            initTitle: function(){
                var left = $('.tt1, .tt3');
                var right = $('.tt2');
                var line = $('.tt4');
                var plane = $('.tt5');
                var words = $('.index .sub:not(.m_sub)');
                var scroll = $('.index .scroll');
                var m_title = $('.index .base');
                var m_words = $('.index .sub.m_sub');
                var delaytime = 0;
                var sec = 1;

                TweenMax.to(right, .8, {width: "144px", delay: .75 + delaytime});
                TweenMax.staggerTo([left, words], .75, {y: -50, opacity: 1, delay: delaytime, ease: Power1.easeOut}, .33);

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

                TweenMax.staggerTo([m_title, m_words], .75, {y: -50, opacity: 1, delay: delaytime, ease: Power1.easeOut}, .33);

                TweenMax.to(scroll, .8, {opacity: 1, delay: 1 + delaytime});
            },
            openBox: function(e, key){
                this.preventall(e);
                var newWord = word[key].words;
                var newKey = word[key].action;
                this.lightWord = newWord;

                $('.lightbox .slickBox').slick('slickGoTo', newKey, true);
                $('.lightbox .slider ul').slick('slickGoTo', newKey, true);

                this.lightbox = true;
                this.$nextTick(function(){
                    $('.lightbox .slickBox').slick('setPosition');
                });
            },
            openSingle: function(e){
                this.preventall(e);
                this.singleBoxSrc = e.target.getAttribute('src');
                this.singleBox = true;
            },
            chkIE9: function(){
                var userAgent = navigator.userAgent;
                var fIEVersion = parseFloat(RegExp["$1"]); 

                if(userAgent.indexOf('MSIE 6.0')!=-1){
                    return "IE6";
                }else if(fIEVersion == 7){
                    return "IE7";
                }else if(fIEVersion == 8){
                    return "IE8";
                }else if(fIEVersion == 9){
                    return "IE9";
                }else if(fIEVersion == 10){
                    return "IE10";
                }else if(userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){ 
                    return "IE11";
                }else{
                    return "0"
                }
            }
        }
    });
});