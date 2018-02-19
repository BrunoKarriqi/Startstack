$(document).ready(function () {

    slide = $('.slide');
    move = 4500;
    bg = $('.bg-inner');
    width1 = $('html').width();
    width = width1;
    number = 2;
    number1 = 1;
    tl = new TimelineLite();
    values = [];

    $(".slide label").on("click", function () {

        $('.slide .submit button').fadeIn("slow");

    });

    if ($(window).width() < 769) {

        move = 1400;

        $(".slide .submit button").on("click", function () {

            title = $('.title .h1_' + number);

            titlePrev = $('.title .h1_' + number1);

            if ($('input[type=radio]').is(':checked')) {

                val = $('input[type=radio]:checked').val();

                $(".slide").each(function () {

                    tl
                        .to(bg, 1.5, {x: -move})
                        .to(slide, .5, {x: -width})
                        .to(titlePrev, .5, {opacity: 0})
                        .to(title, .2, {opacity: 1});

                });

                setTimeout(function () {
                    $('input[type=radio]:checked').prop('checked', false);
                    $('.slide .submit button').fadeOut("fast");
                }, 1500);

                values.push(val);

                move += 400;

                width += width1;

                number += 1;

                number1 += 1;

            } else {

                toastr["warning"]("Please select the correct answer!!!", "Answer is required!!!", {

                    "closeButton": true,
                    "positionClass": "toast-top-right"

                });

            }

        });

    } else {

        $(".slide .submit button").on("click", function () {

            title = $('.title .h1_' + number);

            titlePrev = $('.title .h1_' + number1);

            if ($('input[type=radio]').is(':checked')) {

                val = $('input[type=radio]:checked').val();

                $(".slide").each(function () {

                    tl
                        .to(bg, 1.5, {x: -move})
                        .to(slide, .5, {x: -width})
                        .to(titlePrev, .5, {opacity: 0})
                        .to(title, .2, {opacity: 1});

                });

                setTimeout(function () {
                    $('input[type=radio]:checked').prop('checked', false);
                }, 1500);


                values.push(val);

                move += 500;

                width += width1;

                number += 1;

                number1 += 1;

            } else {

                toastr["warning"]("Please select the correct answer!!!", "Answer is required!!!", {

                    "closeButton": true,
                    "positionClass": "toast-top-right"

                });

            }

        });

    }


    $(".slide .finish").on("click", function () {
        tl.pause();
    });

    $("#menu2").click(function () {
        $(this).toggleClass("active");
        $(".line2.middle").toggleClass("hide");
        $(".menu").slideToggle();
    });

});