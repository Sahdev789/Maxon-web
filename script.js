
  
   $(document).ready(function(){

       // $('.container').slick(
       
       // {
       //   dots:true,
       //   arrows:true
       // }

       // );

                                             //3 slides show

//         $('.container').slick(

//             {
//              infinite: true,
//              slidesToShow: 3,
//              slidesToScroll: 3
//             }
// );




$('.slider').slick({
 dots: true,
 infinite: true,
 speed: 300,
 slidesToShow: 3,
 slidesToScroll: 3,
 responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       dots: true
     }
   },
   {
     breakpoint: 600,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});
       

   });

     
   


