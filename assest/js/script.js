$(document).ready(function(){
	
	$('#tabs div').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('#tabs div').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})


	$(window).resize(function(){
	var www = $(window).width()
	 if(www < 970){
		 $(".first").removeClass(".row");
		 $(".first").removeClass(".col-md-10");
	 } else{
		 $(".first").addClass(".col-md-10");
		 $(".first").addClass(".row");
	 }
	})

  $(input).click(function(){
	  this.css("color", "red");
  })
})