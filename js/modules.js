$(document).ready(loadSite);



function loadSite(e) {
    $('.brain-wm').unbind('click').click(showMenu);
	$('.menu-wm').toggle( "slide" );
	$('.brain-wm').eq(0).click();

	
	$('.btn-modal-01').click(function (e) {
		$('.modal-image-01').modal();

		return false;
	});
	
	$('.btn-modal-02').click(function (e) {
		$('.modal-image-02').modal();

		return false;
	});
	
	$('.btn-modal-03').click(function (e) {
		$('.modal-image-03').modal();

		return false;
	});
	
	$('.btn-modal-04').click(function (e) {
		$('.modal-image-04').modal();

		return false;
	});
	
	$('.btn-modal-05').click(function (e) {
		$('.modal-image-05').modal();

		return false;
	});
	
	$('.btn-modal-06').click(function (e) {
		$('.modal-image-06').modal();

		return false;
	});
	
	$('.btn-modal-07').click(function (e) {
		$('.modal-image-07').modal();

		return false;
	});
	
	$('.btn-modal-08').click(function (e) {
		$('.modal-image-08').modal();

		return false;
	});
	
	$('.btn-modal-09').click(function (e) {
		$('.modal-image-09').modal();

		return false;
	});
	
	$('.btn-modal-10').click(function (e) {
		$('.modal-image-10').modal();

		return false;
	});
	
	$('.btn-modal-11').click(function (e) {
		$('.modal-image-11').modal();

		return false;
	});
	
	$('.btn-modal-12').click(function (e) {
		$('.modal-image-12').modal();

		return false;
	});
	
	$('.btn-modal-13').click(function (e) {
		$('.modal-image-13').modal();

		return false;
	});
	
	$('.btn-modal-14').click(function (e) {
		$('.modal-image-14').modal();

		return false;
	});

		
}


/**************************************************************************/

showMenu = function()
{
	var boton = $(this);
	var texto = boton.next('.menu-wm');
	
	
	if(texto.is(':visible'))
	{
		texto.toggle("slide");
		boton.addClass('brain-close').removeClass('brain-open');
	}
	else
	{		
		texto.toggle("slide");
		boton.removeClass('brain-close').addClass('brain-open');
	}
}


/**************************************************************************/

