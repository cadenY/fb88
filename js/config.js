requirejs.config({
   packages: [
      {
        name: 'moment',
        location: 'js/bower_components/moment',
        main: 'moment'
      },
      {
         name: 'moment-timezone',
         location: 'js/bower_components/moment-timezone',
         main: 'moment-timezone'
      },
      {
         name: 'aos',
         location: 'js/bower_components/aos/dist',
         main: 'aos'
      },
      {
         name: 'fancybox',
         location: 'js/bower_components/fancybox/dist',
         main: 'jquery.fancybox'
      },
      {
         name: 'owlCarousel',
         location: 'js/bower_components/owl-carousel/dist',
         main: 'owl.carousel.min'
      }
   ],
   baseUrl: '.',
   paths: {
      'jquery': 'js/lib/jquery.min',
      'fun': 'js/method/functions',
      'init': 'js/method/init'
   },
   shim: {
      'fun': {
         deps: ["jquery"],
         exports: "fun"
      },
      'init': {
         deps: ["jquery","fun"],
         exports: "init"
      }
   }
})
