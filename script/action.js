$(document).ready(function () {

    let height = $('header').css('height')

    $('#visual').css({ marginTop: height })
    $('#sub_visual').css({ marginTop: height })
    $('.line').css({ marginTop: height })

    $('.login_1').css({ marginTop: height })

    //gnb 를 mo_gnb_box에 삽입
    let gnbHtml = $(".gnb").html();
    $(".mo_gnb_box .mo_gnb").html(gnbHtml);
    //gnb li 클릭하면 body배경이 검은색으로 변경

    $('.mo_menu').click(function () {
        $(this).toggleClass('on');
        $('.mo_gnb_box').fadeToggle();
        $('.mo_gnb_box').toggleClass('on');
    })

    $(window).resize(function () {
        let winW = $(window).width();

        if (winW > 783) {
            $('.mo_gnb_box').hide();
            $('.mo_gnb_box').removeClass('on');
            $('.mo_menu').removeClass('on');
        }
    })
    $('header .gnb').mouseenter(function () {
        $('.lnb').stop().slideDown(500);
    })
    $('header .gnb').mouseleave(function () {
        $('.lnb').stop().slideUp(500);
    })
    //mobile menu
    $('.mo_gnb > li > a').click(function () {
        $('.mo_gnb .lnb').slideUp(300);
        $(this).siblings('.lnb').stop().slideToggle(300);
        return false;
    })

    //* login page*/
    $('.hide_pw').click(function () {
        $(this).hide();
        $('.view_pw').show();
        $(this).siblings('input').attr('type', 'text')

    })

    $('.view_pw').click(function () {
        $(this).hide();
        $('.hide_pw').show();
        $(this).siblings('input').attr('type', 'password')

    })
    /*  let boDer = border:"1px solid red" */
    $('.login_box li input').mouseenter(function () {
        $(this).css({ border: "5px solid red" })

    }).mouseleave(function () {
        $(this).css({ border: "1px solid #ccc" })


    })



    let circleW = $('.mouse_circle').width();
    let circleH = $('.mouse_circle').height();
    let y
    $(window).mousemove(function (e) {
        let x = e.clientX;
        y = e.clientY;
        $('.mouse_circle').css({ left: x - circleW / 2, top: y - circleH / 2 });
    })

    $(window).scroll(function () {
        $('.mouse_circle').css({ top: y - circleH / 2 });
    });


})


