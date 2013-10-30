$(document).ready(function(){

	init = function(){
		resizeBg();
		$(window).resize(function(){
			resizeBg();
		});
		contactForm();
		$('div.overlay').addClass('animate');
		setTimeout(function(){
			$('div.logo-mark img').addClass('animate');
			setTimeout(function(){
				$('div.logo-mark').addClass('move');
				setTimeout(function(){
					$('div.welcome-msg').addClass('animate');
					$('h1').addClass('animate');
					$('h2').addClass('animate');
					setTimeout(function(){
						$('input').eq(0).addClass('animate');

						setTimeout(function(){
							$('input').eq(1).addClass('animate');
							$('section.footer').addClass('animate');							
						}, 200);
					}, 200);
				}, 500);
			}, 500);
		}, 2500);
	}	
	

	resizeBg = function(){
		//Set Window Object
		var theWindow = $(window);
		//Set Default Aspect Ratio
		var aspectRatio = 2222/1228;

		//Set container height and width
		$('section.bg-container').css('width',theWindow.width());
		$('section.bg-container').css('height',theWindow.height());
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
			$('section.bg-container img').addClass('bgheight');
			$('section.bg-container img').removeClass('bgwidth');
		} else {
			$('section.bg-container img').addClass('bgwidth');
			$('section.bg-container img').removeClass('bgheight');
		}
	}


	contactForm = function() {
		$('#Email').blur(function() {

		});
		$("#contact-form").submit(function(e){
		  e.preventDefault();
		  var email = $("#Email").val();
		  
		  var dataString = '&Email=' + email;
		  function isValidEmail(emailAddress) {
		    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		    return pattern.test(emailAddress);
		  };

		  if (isValidEmail(email)) {
		    $.ajax({
			    type: "POST",
			    url: "contactengine.php" + '?fngsrkah=' + 'f' + 'djsy'. toUpperCase() + ((40-30) / 10 + 5).toString(),
			    data: dataString,
			    success: function() {
			    	$('div.form').addClass('animate');
			    	setTimeout(function(){
			    		$('div.form').addClass('resolve');
			    		setTimeout(function(){
			    			$('div.social').addClass('animate');
			    		},200);
			    	}, 200);
			    }
		    });
		  } else {
		    if(!isValidEmail(email))
		      $("#Email").addClass('error');
		  }
		  return false;
		});
	}


	init();

});