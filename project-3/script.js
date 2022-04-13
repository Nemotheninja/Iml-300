$(document).ready(function() {
  
//         $('.coolflower').click(function(){
//        $('p').toggle();
//     });
//    
        $(function () {
        $(".coolflower").draggable();
    });  
    
     $('#keyboard').click(function () {
//        $('.infopanel').toggle(2000);     
        $(this).toggleClass("smaller");
    });
  
});