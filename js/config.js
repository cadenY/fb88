requirejs.config({
   packages: [
      {
        name: 'moment',
        location: 'bower_components/moment',
        main: 'moment'
      },
      {
         name: 'moment-timezone',
         location: 'bower_components/moment-timezone',
         main: 'moment-timezone'
      },
      {
         name: 'aos',
         location: 'bower_components/aos/dist',
         main: 'aos'
      },
      {
         name: 'fancybox',
         location: 'bower_components/fancybox/dist',
         main: 'jquery.fancybox'
      },
      {
         name: 'owlCarousel',
         location: 'bower_components/owl-carousel/dist',
         main: 'owl.carousel'
      }
   ],
   baseUrl: 'js',
   paths: {
      'jquery': 'lib/jquery.min',
      'fun': 'method/functions',
      'init': 'method/init'
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
