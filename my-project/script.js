 <script>

        $(document).ready(function () {


            /* ==========================================
               HERO SLIDER
            ========================================== */

            $(".hero-carousel").owlCarousel({

                items: 1,

                loop: true,

                margin: 0,

                nav: true,

                dots: true,

                autoplay: true,

                autoplayTimeout: 5000,

                autoplayHoverPause: false,

                smartSpeed: 1000,

                animateOut: "fadeOut",

                navText: [

                    '<i class="fa-solid fa-arrow-left"></i>',

                    '<i class="fa-solid fa-arrow-right"></i>'

                ]

            });


            /* ==========================================
               CATEGORY SLIDER
            ========================================== */

            $(".category-carousel").owlCarousel({

                loop: true,

                margin: 20,

                nav: true,

                dots: false,

                autoplay: true,

                autoplayTimeout: 3500,

                autoplayHoverPause: false,

                smartSpeed: 700,

                navText: [

                    '<i class="fa-solid fa-arrow-left"></i>',

                    '<i class="fa-solid fa-arrow-right"></i>'

                ],

                responsive: {

                    0: {
                        items: 1
                    },

                    576: {
                        items: 2
                    },

                    992: {
                        items: 3
                    },

                    1200: {
                        items: 4
                    }

                }

            });


            /* ==========================================
               REVIEW SLIDER
            ========================================== */

            $(".review-carousel").owlCarousel({

                loop: true,

                margin: 25,

                nav: false,

                dots: true,

                autoplay: true,

                autoplayTimeout: 4500,

                autoplayHoverPause: false,

                smartSpeed: 800,

                responsive: {

                    0: {
                        items: 1
                    },

                    768: {
                        items: 1
                    },

                    1000: {
                        items: 1
                    }

                }

            });


        });

    </script>
