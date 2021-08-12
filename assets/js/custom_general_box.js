
/************************************************************************************
		  		Index.htm Home TileBox Effect BoxFX
************************************************************************************/
jQuery(document).ready(function($){
"use strict";
new BoxesFx( document.getElementById( 'boxgallery' ) );

// Box Animation Auto Play
jQuery(document).ready(function($){
"use strict";	

      var el=4;
	  
      repeat(2000,function(){
	 // alert(el);
        if(el==4){
        $('#boxgallery nav span:nth-child(0)').click();
           el=2;
        }
        else{
          $('#boxgallery nav span:nth-child('+el+')').click();
		//  alert(el);
          el=el+1;
          }
        });
      });

 });


 $(function() {                       //run when the DOM is ready
  $(".nav-toggle").click(function() { 
     $('#home_nav').toggleClass("active");   
     $('#sub-nav').toggleClass("active");   
         //add the class to the clicked element
  });
  $("#home_nav li a").click(function() {  //use a class, since your ID gets mangled
     $('#home_nav').toggleClass("active");
      $('#sub-nav').removeClass("active");
         //add the class to the clicked element
  });
  $("#sub-nav li a").click(function() {  //use a class, since your ID gets mangled
     $('#sub-nav').toggleClass("active");
         //add the class to the clicked element
  });
  
});

