'use strict';
var Theme = {
    init: function () {
        var that = this;
        that.initViews();
        that.initScript();
        that.searchScript();
        that.menuMobile();
        that.loadPage();
    },
    initViews: function () {
        var view = window.shop.template,
            that = this;
        switch (view) {
            case 'index':
                that.indexScript();
                break;
            default:
        }
    },
    loadPage: function () {
        $('.loader_overlay').addClass('loaded');
    },
    initScript: function () {
        /* Variant Product loop */
        $('.variant_product_loop').change(function () {
            var that = $(this);
            $(this).parents('.variant_product_item').find('.price_product_item').html(that.attr('data-price'));
        });
        $('.view_more_human').click(function () {
            $('.human_item_more').removeClass('hidden');
            $(this).hide();
        });
        $('#fixed-hotline-support').on('click', function () {
            $('#support_confirm').modal('show');
        })
        $('#support_confirm button.confirm_call').on('click', function () {
            $('#fixed-hotline-support + a').get(0).click();
            $('#support_confirm').modal('hide');
        });
        /* Slider top frame*/
        if ($(window).width() < 992) {
            $('.header-meta-list').owlCarousel({
                nav: false,
                dots: false,
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: "7" ? "7" * 1000 : 7000,
                autoplayHoverPause: true,
            });
        }

    },
    indexScript: function () {
        /* Slider index */
        var owlSliderIndex = $('#owl_slide');
        owlSliderIndex.owlCarousel({
            nav: false,
            dotsSpeed: 400,
            dots: true,
            mouseDrag: false,
            loop: true,
            items: 1,
            autoplayHoverPause: true,
            autoplay: true,
            autoplayTimeout: 6000
        });
        owlSliderIndex.on('changed.owl.carousel translated.owl.carousel initialized.owl.carousel', function (event) {
            $("#owl_slide .owl-item .hrv-banner-caption").css('display', 'none');
            $("#owl_slide .owl-item .hrv-banner-caption").removeClass('hrv-caption')
            $("#owl_slide .owl-item.active .hrv-banner-caption").css('display', 'block');

            var heading = $('#owl_slide .owl-item.active .hrv-banner-caption').clone().removeClass();
            $('#owl_slide .owl-item.active .hrv-banner-caption').remove();
            $('#owl_slide .owl-item.active>.item').append(heading);
            $('#owl_slide .owl-item.active>.item>div').addClass('hrv-banner-caption hrv-caption');
        });
        var owlSliderDot = $('#owl_slide .owl-dot');
        owlSliderDot.each(function () {
            var indexTemp = parseInt($(this).index());
            var index = 0;
            if (index < 10) {
                index = "0" + (indexTemp + 1);
            } else {
                index = (indexTemp + 1);
            }
            $(this).html("<span class='dot-border'></span><span class='dot-number'>" + index + "</span>");
        });
        $('#owl_slide .owl-dots').wrap('<div class="container wrap-dots"></div>');
        $('#owl_slide .item').click(function () {
            window.location = $(this).attr('data-href');
        })
        /* Slider view more scroll */
        $('.fixed-scroll-down').on('click', function (e) {
            var height = $(window).scrollTop() + $(window).height();
            $('html, body').animate({
                scrollTop: height
            }, 1000);
        });
        /* Get Blog top */
        /*
        var str_url = encodeURIComponent('((blogid:article>=0)&&(tag:article=top))');
        $.ajax({
            url: "/search?q=filter=("+str_url+")&view=blog_top",
            async: false,
            success:function(data){
                $(".top_blog_home").html(data);
            }
        });
        */

        /* Slider Store */

        var $storeSlider = $('.store_slider').owlCarousel({
            nav: true,
            dots: true,
            loop: false,
            items: 1,
            mouseDrag: true,
            autoplay: false,
            navText: ['<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.4375 14.6667H26.6668V17.3334H10.4375L17.5895 24.4854L15.7042 26.3707L5.3335 16.0001L15.7042 5.62939L17.5895 7.51473L10.4375 14.6667Z" fill="white"/> </svg>', '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.5616 14.6667L14.4096 7.51473L16.2949 5.62939L26.6656 16.0001L16.2949 26.3707L14.4096 24.4854L21.5616 17.3334H5.33228V14.6667H21.5616Z" fill="white"/> </svg>'],
        });
        $storeSlider.on('changed.owl.carousel', function (event) {
            $('.store_slider_nav .nav_prev').toggleClass('disabled', $(this).find('> .owl-nav .owl-prev').hasClass('disabled'));
            $('.store_slider_nav .nav_next').toggleClass('disabled', $(this).find('> .owl-nav .owl-next').hasClass('disabled'));
        });
        $('.store_slider_nav > a').on('click', function (e) {
            e.preventDefault();
            if ($(this).is('.nav_prev')) {
                $storeSlider.trigger('prev.owl.carousel');
            } else {
                $storeSlider.trigger('next.owl.carousel');
            }
        });

        var $imagesSlider = $('.store_slider_img .image_slider');
        $imagesSlider.on('initialized.owl.carousel', function () {
            var self = this;
            setTimeout(function () {
                var dotsWidth = $(self).find('.owl-dots').width();
                var owlItemWidth = $(self).find('.owl-item:eq(0)').width();
                $(self).find('.owl-dots').css('left', (owlItemWidth - dotsWidth) / 2);
                $(self).find('.owl-next').css('left', owlItemWidth - 60)
            }, 0);
        });
        $imagesSlider.owlCarousel({
            nav: true,
            dots: true,
            loop: true,
            items: 1,
            mouseDrag: false,
            touchDrag: false,
            autoplay: true,
            autoplayTimeout: 7000,
            navText: ['<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.0466 18.3333H33.3333V21.6666H13.0466L21.9866 30.6066L19.63 32.9633L6.66663 20L19.63 7.03662L21.9866 9.39329L13.0466 18.3333Z" fill="white"/> </svg>', '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26.9534 18.3333L18.0134 9.39329L20.3701 7.03662L33.3334 20L20.3701 32.9633L18.0134 30.6066L26.9534 21.6666H6.66675V18.3333H26.9534Z" fill="white"/> </svg>'],
        });

        //debugger;
        /* Slider index banner new*/
        $('.banner_home .owl-carousel').owlCarousel({
            nav: true,
            dots: true,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: ("5" * 1000) || 7000,
        });
    },
    searchScript: function () {
        /* search */
        $('.search a').click(function () {
            $(this).parents('.search').find('.search_input_wrap').toggle();
        });
    },
    menuMobile: function () {
        /* Menu mobile */
        $('#showmenu-mobile').click(function (e) {
            e.preventDefault();
            $(".header_menu").addClass("show");
            $('#opacity').addClass("opacity_body");
            $('body').addClass("overflow_hidden");
        });
        $('#opacity,.icon_close_menu, .closemenu-mobile').click(function (e) {
            e.preventDefault();
            $(".header_menu").removeClass("show");
            $('#opacity').removeClass("opacity_body");
            $('body').removeClass("overflow_hidden");
        });
        $(".more").on("click", function () {
            var icon_fa = $('.icon_more').attr('data-icon');
            if (icon_fa == 'plus') {
                $('.icon_more').attr('data-icon', 'minus');
            } else {
                $('.icon_more').attr('data-icon', 'plus');
            }
        });
        if ($(window).width() < 992) {
            $('.has_child > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.menu_child').slideToggle();
            });
        }
    },
    openModal: function (ele) {
        var name = $(ele).data("name"),
            fullAddress = $(ele).data("fulladdress"),
            image1 = $(ele).data("image1"),
            image2 = $(ele).data("image2"),
            image3 = $(ele).data("image3"),
            latlng = $(ele).data("latlng"),
            html_right = '<div class="swiper-container"><div class="swiper-wrapper">';
        if (image1 != '' || image2 != '' || image3 != '') {
            if (image1 != '') {
                html_right += '<div class="swiper-slide modal_map_image_item"><div class="modal_map_bg_image" style="background-image:url(' + image1.replace(/(^\w+:|^)/, '') + ')"></div></div>';
            }
            if (image2 != '') {
                html_right += '<div class="swiper-slide modal_map_image_item"><div class="modal_map_bg_image" style="background-image:url(' + image2.replace(/(^\w+:|^)/, '') + ')"></div></div>';
            }
            if (image3 != '') {
                html_right += '<div class="swiper-slide modal_map_image_item"><div class="modal_map_bg_image" style="background-image:url(' + image3.replace(/(^\w+:|^)/, '') + ')"></div></div>';
            }
        }
        html_right += '</div><div class="modal-button-prev swiper-button-prev"><i class="fas fa-caret-left fa-7x"></i></div><div class="modal-button-next swiper-button-next"><i class="fas fa-caret-right fa-7x"></i></div></div>';
        if (name != '') {
            $('.title_map_modal').html(name);
        }
        if (fullAddress != '') {
            $('.modal_map_address').html('<i class="fas fa-map-marker-alt"></i><span>' + fullAddress + '</span>');
        }
        if (latlng != '' || latlng != null) {
            $('.btn_open_map').attr('href', 'https://www.google.com/maps/search/?api=1&query=' + latlng);
        }

        $('.modal_map_image').html(html_right);

        $('#modalMap').modal('show');
        setTimeout(function () {
            var swiper = new Swiper('.modal_map_image .swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: false,
                },
                navigation: {
                    nextEl: '.modal-button-next',
                    prevEl: '.modal-button-prev',
                },
            });

        }, 300);
    },
    slug: function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
        str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1-
        str = str.replace(/^\-+|\-+$/g, "");
        return str;
    },
    parallax: function (e, target, layer) {
        var x = target.homePos.x + (e.pageX - target.homePos.x) / layer;
        var y = target.homePos.y + (e.pageY - target.homePos.y) / layer;
        $(target).css({
            top: y,
            left: x
        });
    },
    parallax2: function (e, target, layer) {
        var x = target.homePos.x + (e.pageX - target.homePos.x) / layer;
        var y = target.homePos.y + ((e.pageY - target.homePos.y) / layer) - 190;
        $(target).css({
            bottom: y,
            left: 0
        });
    },
    scrollBoat: function (elem) {
        var scrollPositionToAnimate = $(elem).offset().top - $(window).height();
        var positionToAnimateTo = $(elem).data('position');
        var postionDefault = $(elem).offset().left;
        $(window).scroll(function () {
            if ($(window).scrollTop() > scrollPositionToAnimate) {
                if ($(elem).position().left < positionToAnimateTo) {
                    $(elem).css({
                        'transform': 'translateX(' + positionToAnimateTo + ')'
                    });
                }
            } else {
                if ($(elem).position().left < 0) {
                    $(elem).css({
                        'transform': 'translateX(' + postionDefault + ')'
                    });
                }
            }
        });
    },
    setHeight: function () {
        var heightPromo = 0;
        var heightBody = 0;
        $('.rewards_new_promotion_item').each(function () {
            if ($(this).find('.rewards_new_promotion_item_content p').height() > heightBody) {
                heightBody = $(this).find('.rewards_new_promotion_item_content p').height();
            }
            if ($(this).height() > heightPromo) {
                heightPromo = $(this).height();
            }
        })
        $('.rewards_new_promotion_item .rewards_new_promotion_item_content p').height(heightBody);
        $('.rewards_new_promotion_item').height(heightPromo);
    },
    scrollGallery: function () {
        var scrollHandle = 0,
            scrollStep = 5,
            oldScroll = 0,
            parent = $(".txng__2020--btns");

        //Start the scrolling process
        $(".panner").on("mouseenter", function () {
            var data = $(this).data('scrollModifier'),
                direction = parseInt(data, 10);

            $(this).addClass('active');
            startScrolling($(this), direction, scrollStep);

        });

        //Kill the scrolling
        $(".panner").on("mouseleave", function () {
            stopScrolling();
            $(this).removeClass('active');
        });

        parent.scroll(function () {
            $(".panner#panRight").css('right', ((parent.scrollLeft() * -1) + 15));
            $(".panner#panLeft").css('left', (parent.scrollLeft() + 15));
        });


        //Actual handling of the scrolling
        function startScrolling(ele, modifier, step) {
            if (scrollHandle === 0) {
                scrollHandle = setInterval(function () {
                    var newOffset = parent.scrollLeft() + (step * modifier);
                    parent.scrollLeft(newOffset);
                }, 10);
            }
        }

        function stopScrolling() {
            clearInterval(scrollHandle);
            scrollHandle = 0;
        }
    }
};

// lazy background
$(document).ready(function () {
    Theme.init();
});

const product_id = getProductQuery();

// loop through DB_products items to find the product with the same id as the product_id
const thisProduct = DB_products.reduce((acc, category) => {
    const product = category.items.find(item => item.id === product_id);
    if (product) {
        // create new object and overwrite templateProduct with the product object
        let newImages = [formatImageSrc(product.image)];
        if(product.images) newImages = [
            ...newImages,
            ...product.images
        ]
        return {
            category: category.id,
            price_sale: 0,
            percent_sale: 0,
            variant: [
                {
                    "id_buy": product.id + "1",
                    "name": "Nhỏ",
                    "price": product.price,
                    "reduce": 0,
                },
                {
                    "id_buy": product.id + "2",
                    "name": "Vừa",
                    "price": product.price + 14000,
                    "reduce": 0,
                },
                {
                    "id_buy": product.id + "3",
                    "name": "To",
                    "price": product.price + 21000,
                    "reduce": 0,
                }
            ],
            ...product,
            images: newImages,
        };
    }
    return acc;
}, null);

if (thisProduct) {
    let global_price = thisProduct.price;
    let global_size = undefined;
    let global_topping = undefined;
    let global_nationWide = false;
    let global_clickSize = false;
    let global_priceTop = 0;

    const format = {
        "code": "vi-VN",
        "thousands": ",",
        "decimal": ".",
        "numberdecimal": 0,
        "money_format": ""
    }


    AddProductInfo(thisProduct);

    $("#handleSlideRight").on("click", handleSlideRight);
    $("#handleSlideLeft").on("click", handleSlideLeft);

    $("#productCarousel").mouseover(function () {
        $("#productCarousel .carousel-control").show();
    });

    $("#productCarousel").mouseleave(function () {
        $("#productCarousel .carousel-control").hide();
    });

    $("#thumbCarousel .thumb").click(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    function floatToString(a, r) {
        var t = a.toFixed(r).toString();
        return t.replace(".", format.decimal), t.match("^[." + format.decimal + "]d+") ? "0" + t : t
    }

    function formatMoney(number) {
        let t = number,
            e = "{{amount}} đ";

        function a(t) {
            return t.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + format.thousands)
        }

        t /= 100, "string" == typeof t && (t = t.replace(format.thousands, ""));
        var r = "",
            n = /\{\{\s*(\w+)\s*\}\}/,
            o = e || this.money_format;
        switch (o.match(n)[1]) {
            case "amount":
                r = a(floatToString(t, format.numberdecimal));
                break;
            case "amount_no_decimals":
                r = a(floatToString(t, 0));
                break;
            case "amount_with_comma_separator":
                r = floatToString(t, format.numberdecimal).replace(/\./, ",");
                break;
            case "amount_no_decimals_with_comma_separator":
                r = a(floatToString(t, 0)).replace(/\./, ",")
        }
        return o.replace(n, r).replace(",", ".")
    }

    function handleSlideRight() {
        var indexs = $('#productCarousel').find('div.item.active').data('carousel');
        var bb = indexs + 1;
        var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="' + bb + '"]');
        thumbnailActive.addClass('active');
        $(thumbnailActive).siblings().removeClass("active");
        //console.log($(thumbnailActive).siblings());
        let maxSlide = document.querySelectorAll(`[data-target*="#productCarousel"]`).length;
        if (bb === maxSlide) {
            var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to= 0]');
            thumbnailActive.addClass('active');
            $(thumbnailActive).siblings().removeClass("active");
            console.log($(thumbnailActive).siblings());
        }
    }

    function handleSlideLeft() {
        var indexs = $('#productCarousel').find('div.item.active').data('carousel');
        var cc = indexs - 1;
        var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="' + cc + '"]');
        thumbnailActive.addClass('active');
        $(thumbnailActive).siblings().removeClass("active");
        //console.log($(thumbnailActive).siblings());
        let maxSlidex = document.querySelectorAll(`[data-target*="#productCarousel"]`).length;
        let ahn = maxSlidex - 1;
        if (cc === -1) {
            var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="' + ahn + '"]');
            thumbnailActive.addClass('active');
            $(thumbnailActive).siblings().removeClass("active");
            console.log($(thumbnailActive).siblings());
        }
    }

    function AddProductInfo(data) {
        const {
            title,
            price,
            product_description,
            price_sale,
            percent_sale,
            images
        } = data;

        $(".product-title, .info_product_title").text(title);
        $(".product-price").text(price);
        $(".product-description").text(product_description);

        let sum_money = global_clickSize == true ? global_price + global_priceTop : global_price;

        $(".info_product_price").html(`
    <span class="price">${formatMoney((global_priceTop === undefined ? global_price : sum_money)*100)}</span>
    <del class="price_original ${data.price_sale === 0 ? "hide" : ''}">${formatMoney(price_sale)}</del>
    <span class="sale_percent ${data.percent_sale === 0 ? "hide" :''}">Giảm ${percent_sale} %</span>
    `)

        if(data.variant?.length > 0) $(".option_sizes .product_options").html(addOptionSizes(data));

        const handleCheckPrice = (itemss) => {
            global_size = itemss;
            const format_money = itemss.price;
            global_price = format_money;
            global_clickSize = true;
        }

        $(".option_sizes .product_options").find('.product__info__item__list__item').off('click').on('click', function () {
            const itemss = data.variant.find(item => item.name === $(this).data('filter'));
            handleCheckPrice(itemss);
            updatePrice();

            $(".product__info__item__list__item").removeClass('active');
            $(".product__info__item__list__item").find('.shape').removeClass('active');

            $(".product__info__item__list__item.icons_" + $(this).attr('key')).addClass('active');
            $(".product__info__item__list__item.icons_" + $(this).attr('key')).find('.shape').addClass('active');
        });

        if (data.toppings?.length > 0) {
            $(".option_topping .product_options").html(addOptionToppings(data.toppings));

            const handleGroupCheckboxClick = () => {
                let input = document.getElementsByName("topping_tch");
                let total = 0;
                for (let i = 0; i < input.length; i++) {
                    if (input[i].checked) {
                        total += parseFloat(input[i].value);
                    }
                };
                global_priceTop = total;
            }

            // get all input with name topping_tch
            $("input[name='topping_tch']").off('click').on('click', function () {
                handleGroupCheckboxClick();
                updatePrice();
            });
        } else {
            $(".option_topping").hide();
        }

        $("#related_product_desc").text(product_description);

        AddImagesToproductCarousel(images);
        
        // find products with same category to add
        $(".list_product_related.buy_combo").html(AddRelatedProduct(DB_products.find(item => item.id === thisProduct.category).items));
    }

    function updatePrice() {
        let sum_money = global_price + global_priceTop;
        $(".info_product_price").html(`<span class="price">${formatMoney((global_priceTop === undefined ? global_price : sum_money)*100)}</span>`);
    }

    function AddRelatedProduct(data) {
        let return_html = data.map((item, i) => (
            `<div class="menu_item">
            <div class="menu_item_image">
            <a href="/tailieu/chitietsanpham/index.html?productId=${item.id}" title="${item.title}">
                <img class="lazyloaded" src="${formatImageSrc(item.image)}" alt="${item.title}" />
            </a>
            <ul class="labels"></ul>
            </div>
            <div class="menu_item_info">
            <h3>
                <a href="/tailieu/chitietsanpham/index.html?productId=${item.id}" title="${item.title}">${item.title}</a>
            </h3>
            <div class="price_product_item">${formatMoney(item.price*100)}</div>
            </div>
        </div>`
        )).join('');
        return return_html;
    }

    function AddImagesToproductCarousel(data) {
        data.map((imgfic, i) => {
            $(".carousel-inner").append(`<div key=${i} data-carousel=${i} class="${i === 0 ? "item active" : "item"}"><img src='${imgfic}' /></div>`);
            $("#thumbCarousel").append(`<div data-slide-to=${i} data-target='#productCarousel' class="${i === 0 ? "thumb active" : "thumb"}"><img src='${imgfic}' /></div>`);
        })
    }

    function addOptionSizes(data) {
        const { variant } = data;
        const size = variant[0];

        const categories = [...new Set(variant.map(bill => bill.price))];
        if (variant.length === 3) {
            const abc = [categories[0], categories[0], categories[0]];
            var stri_price = [];
            for (var i = 0; i <= abc.length - 1; i++) {
                stri_price.push(categories[i] - abc[i]);
            }
        } else if (variant.length === 2) {
            const abc = [categories[0], categories[0]];
            var stri_price = [];
            for (var i = 0; i <= abc.length - 1; i++) {
                stri_price.push(categories[i] - abc[i]);
            }

        } else if (variant.length === 1) {
            var nation_wide_tag = data.tags;

            if (nation_wide_tag.includes("nation-wide")) {
                const abc = [categories[0]];
                var stri_price = [];
                for (var i = 0; i <= abc.length; i++) {
                    stri_price.push(categories[i] - abc[i]);
                }
                $(".option_sizes").hide();
                $(".option_topping").hide();
                OnChangeNationWide(true);
                localStorage.setItem('isnation', 'ok');
            } else {
                const abc = [categories[0]];
                var stri_price = [];
                for (var i = 0; i <= abc.length; i++) {
                    stri_price.push(categories[i] - abc[i]);
                }
                $(".option_sizes").hide();
            }
        }


        const return_html = `
    <div id="ax_${data.id}" class="opt_size">
      ${stri_price ? variant.map((itemss, index) => (
      `<div key="${index}" data-filter="${itemss.name}" class="product__info__item__list__item icons_${index} ${size === itemss ? 'active' : ''}">
        <svg viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg">
          <path class="shape ${size === itemss ? 'active' : ''}" d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"></path>
        </svg>
        <div class="circle">${itemss.name} + ${stri_price ? formatMoney(stri_price[index]*100):""}</div>
      </div>`
      )).join('')
      :
      variant.map((itemss, index) => (
      `<div key="${index}" data-filter="${itemss.name}" class="product__info__item__list__item icons_${index} ${size === itemss ? 'active' : ''}">
        <svg viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg">
          <path class="shape ${size === itemss ? 'active' : ''}" d="M11.6511 1.68763H10.3529V0.421907C10.3529 0.194726 10.1582 0 9.93104 0H2.17444C1.94726 0 1.75254 0.194726 1.75254 0.421907V1.65517H0.454361C0.194726 1.68763 0 1.88235 0 2.10953V4.18661C0 4.41379 0.194726 4.60852 0.421907 4.60852H1.33063L1.72008 8.8925L1.78499 9.76876L2.30426 15.6105C2.33671 15.8377 2.49899 16 2.72617 16H9.28195C9.50913 16 9.70385 15.8377 9.70385 15.6105L10.2231 9.76876L10.288 8.8925L10.6775 4.60852H11.5862C11.8134 4.60852 12.0081 4.41379 12.0081 4.18661V2.10953C12.073 1.88235 11.8783 1.68763 11.6511 1.68763ZM2.56389 8.40568H3.50507C3.47262 8.56795 3.47262 8.73022 3.47262 8.8925C3.47262 9.02231 3.47262 9.15213 3.50507 9.28195H2.66126L2.6288 8.92495L2.56389 8.40568ZM9.47667 8.92495L9.44422 9.28195H8.56795C8.60041 9.15213 8.60041 9.02231 8.60041 8.8925C8.60041 8.73022 8.56795 8.56795 8.56795 8.40568H9.50913L9.47667 8.92495ZM7.72414 8.8925C7.72414 9.83367 6.97769 10.5801 6.03651 10.5801C5.09534 10.5801 4.34888 9.83367 4.34888 8.8925C4.34888 7.95132 5.09534 7.20487 6.03651 7.20487C6.97769 7.20487 7.72414 7.95132 7.72414 8.8925ZM8.92495 15.1562H3.18053L2.72617 10.1582H3.82961C4.28398 10.9371 5.09534 11.4564 6.03651 11.4564C6.97769 11.4564 7.8215 10.9371 8.24341 10.1582H9.34686L8.92495 15.1562ZM9.60649 7.52941H8.21095C7.75659 6.81542 6.94523 6.3286 6.03651 6.3286C5.12779 6.3286 4.31643 6.81542 3.86207 7.52941H2.49899L2.23935 4.60852H9.86613L9.60649 7.52941ZM11.1968 3.73225H10.3205H1.75254H0.876268V2.56389H2.17444H2.2069H2.23935H8.27586C8.50304 2.56389 8.69777 2.36917 8.69777 2.14199C8.69777 1.91481 8.50304 1.72008 8.27586 1.72008H2.6288V0.876268H9.47667V2.10953C9.47667 2.33671 9.6714 2.53144 9.89858 2.53144H11.1968V3.73225Z"></path>
        </svg>
        <div class="circle">${itemss.name}</div>
      </div>`
      )).join('')
      }
    </div>
    `;
        return return_html;
    }

    function addOptionToppings(toppings) {
        let return_html = `${
        toppings.map((itemss, index) => (
            `<label class="option_item">
                <input type="checkbox" class="checkbox" id="${itemss.id}" tid="prolang" name="topping_tch" title="${itemss.name}" alt="${itemss.id}" value="${itemss.price}" />
                <div class="option_inner tch_top">
                    <div class="name">${itemss.name} + ${formatMoney(itemss.price*100)}</div>
                </div>
            </label>`
        )).join('')
    }`;

        return return_html;
    }
} else {
    console.error('Product not found');
}

function getProductQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productId');
    return myParam;
}

function formatImageSrc(image) {
    return `/tailieu/${image}`;
};