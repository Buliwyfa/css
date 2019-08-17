/********************************************************************************************/
$(document).ready(function(){

/********************************************************************************************

RESOLUTIONS
--------------------------
*/
$windowW = $(window).width();
$documentW = $(document).width();
$windowH = $(window).height();
$documentH = $(document).height();

$(window).on("orientationchange",function(){
	$windowW = $(window).width();
	$documentW = $(document).width();
	$windowH = $(window).height();
	$documentH = $(document).height();
});
$(window).on('resize', function(){
	$windowW = $(window).width();
	$documentW = $(document).width();
	$windowH = $(window).height();
	$documentH = $(document).height();
});
/********************************************************************************************/


/********************************************************************************************

 CSS helpers

*/
/********************************************************************************************/
function upadateTestBand($testBand) {

    $testBand.html(
                    '<span style="color:#fff;">'+
                    " W screen= "+ screen.width +" win= "+ $windowW +" doc= "+ $documentW +"<br>" +
	    			" H screen= "+ screen.height  +" win= "+ $windowH +" doc= "+ $documentH +"<br>" +
                    '</span>'
                  );
};
/********************************************************************************************/
upadateTestBand($("#testBand"));

$(window).on("orientationchange",   function(){ upadateTestBand($("#testBand")); });
$(window).on('resize',              function(){ upadateTestBand($("#testBand")); });
/********************************************************************************************/







});//$(document).ready(function(){
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/

