$(document).ready(function () {

        slide = $('.slide');
        move = 5000;
        bg = $('.bg-inner');
        width1 = $('body').width();
        width = width1;
        number = 2;
        number1 = 1;
        values = [];

    $(".slide label").on("click", function () {

        $('.slide .next button').fadeIn("slow");

    });

    $("#slide5 label").on("click", function () {

        $('.submit button').fadeIn("slow");

    });

    if ($(window).width() < 769) {
        move = 1400;

        $(".slide .next button").on("click", function () {

            title = $('.title .h1_' + number);

            titlePrev = $('.title .h1_' + number1);

            if ($('input[type=radio]').is(':checked')) {

                val = $('input[type=radio]:checked').val();

                $(".slide").each(function () {

                    TweenLite.to(bg, 1, {x: -move, ease: Sine.easeOut});
                    TweenLite.to(slide, 1, {x: -width, ease: Sine.easeOut});
                    TweenLite.to(titlePrev, 1, {opacity: 0});
                    TweenLite.to(title, 1, {opacity: 1, delay: 1});

                });

                $('.slide .next button').fadeOut("fast");
                setTimeout(function () {
                    $('input[type=radio]:checked').prop('checked', false);
                }, 700);

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

    } else {

        $(".slide .next button").on("click", function () {

            title = $('.title .h1_' + number);

            titlePrev = $('.title .h1_' + number1);

            if ($('input[type=radio]').is(':checked')) {

                val = $('input[type=radio]:checked').val();

                $(".slide").each(function () {

                    TweenLite.to(bg, 2, {x: -move, ease: SlowMo.ease.config(1, 0.1, false)});
                    TweenLite.to(slide, 1, {x: -width});
                    TweenLite.to(titlePrev, 1, {opacity: 0});
                    TweenLite.to(title, 1, {opacity: 1, delay: 1});

                });

                setTimeout(function () {
                    $('input[type=radio]:checked').prop('checked', false);
                }, 1500);


                values.push(val);

                move += 1700;

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

    $("#menu2").click(function () {
        $(this).toggleClass("active");
        $(".line2.middle").toggleClass("hide");
        $(".menu").slideToggle();
    });

    $(".finish").click(function () {

        $('#wrap-popup').fadeIn('fast');

        var pieces = 70,
            speed = 1,
            pieceW = 30,
            pieceH = 35;


        for (var i = pieces - 1; i >= 0; i--) {
            $('#popup').prepend('<div class="piece" style="width:' + pieceW + 'px; height:' + pieceH + 'px"></div>');
        }
        ;

        function breakGlass(from) {
            if (from === "reverse") {
                $('.piece').each(function () {
                    TweenLite.to($(this), speed, {x: 0, y: 0, rotationX: 0, rotationY: 0, opacity: 1, z: 0});
                    TweenLite.to($('#popup h1'), 0.2, {opacity: 1, delay: speed});
                });
                return;
            }

            if (!from) {
                TweenLite.to($('#popup h1'), 0.2, {opacity: 0});
            } else {
                TweenLite.from($('#popup h1'), 0.5, {opacity: 0, delay: speed});
            }

            $('.piece').each(function () {
                var distX = getRandomArbitrary(-250, 250),
                    distY = getRandomArbitrary(-250, 250),
                    rotY = getRandomArbitrary(-720, 720),
                    rotX = getRandomArbitrary(-720, 720),
                    z = getRandomArbitrary(-500, 500);

                if (!from) {
                    TweenLite.to($(this), speed, {
                        x: distX,
                        y: distY,
                        rotationX: rotX,
                        rotationY: rotY,
                        opacity: 0,
                        z: z
                    });
                } else {
                    TweenLite.from($(this), speed, {
                        x: distX,
                        y: distY,
                        rotationX: rotX,
                        rotationY: rotY,
                        opacity: 0,
                        z: z
                    });
                }
            });
        }

        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }


        // $('.piece, h1').click(function () {
        //     breakGlass();
        //     setTimeout(function(){
        //
        //         $('#wrap-popup').fadeOut('fast');
        //
        //     }, 500);
        //
        // });
        $('.finish').click(function () {
            breakGlass('reverse');
        });

        breakGlass(true);

    });


});