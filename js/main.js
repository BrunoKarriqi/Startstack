$(document).ready(function () {

    slide = $('.slide');
    move = 4500;
    bg = $('.bg-inner');
    width1 = $('html').width();
    width = width1;
    tl = new TimelineLite();
    values = [];

    if ($(window).width() < 769) {
        move = 1500;
    }

    $(".slide label").on("click", function () {

        $('.slide .submit button').fadeIn("slow");

    })

    $(".slide .submit button").on("click", function () {

        if ($('input[type=radio]').is(':checked')) {

            val = $('input[type=radio]:checked').val();

            $(".slide").each(function () {

                tl
                    .to(bg, 1.5, {x: -move})
                    .to(slide, .5, {x: -width, autoAlpha: 1});

            });

            setTimeout(function () {
                $('input[type=radio]:checked').prop('checked', false);
                $('.slide .submit button').fadeOut("fast");
            }, 1500);


            values.push(val);

            move += 500;

            width += width1;

        } else {

            toastr["warning"]("Please select the correct answer!!!", "Answer is required!!!", {

                "closeButton": true,
                "positionClass": "toast-top-right"

            });

        }

    });

    $(".slide .finish").on("click", function () {
        tl.pause();
    });

    $("#menu2").click(function () {
        $(this).toggleClass("active");
        $(".line2.middle").toggleClass("hide");
        $(".menu").slideToggle();
    });

});