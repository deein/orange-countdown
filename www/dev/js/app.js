// Require Config
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: 'js'
    }
});
requirejs.config({
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'countdown': {
            deps: ['jquery']
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },
    paths: {
        'jquery': 'jquery',
        'countdown': 'jquery.countdown',
        'bootstrap': 'bootstrap'
    }
});
// Require App
requirejs(['jquery', 'countdown', 'bootstrap'], function(jQuery) {
    jQuery(function() {
        // Ready
        jQuery(document).ready(function() {
            // console.log('It works !');
            GetDateInterval();
        });              
        // Get interval countdown
        function GetDateInterval(){            
            jQuery.get('date.php', function(data) {
                jQuery('.countdown').countdown(data, function(event) {
                    $('.day').html(event.strftime('%D'));
                    $('.hour').html(event.strftime('%H'));
                    $('.minute').html(event.strftime('%M'));
                    $('.second').html(event.strftime('%S'));
                }).on('finish.countdown', function(event){
                    jQuery.post('date.php', function(data){
                        window.location.replace(data);
                    })
                });
            });
        }
    });
});