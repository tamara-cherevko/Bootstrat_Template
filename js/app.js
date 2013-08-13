$(function(){
	//init
	$(".review-more").click(function(){
		$(".review-section").animate({marginTop: "-" + $(".review-section .flag").height() + "px"}, 500, function(){
			$(".review-section .flag").eq(0).clone().appendTo(".review-section");
			$(".review-section .flag").eq(0).remove();
			$(".review-section").css({"marginTop":"0px"});
		});
	});

})
