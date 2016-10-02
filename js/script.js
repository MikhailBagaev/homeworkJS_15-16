'use strict';
$(function(){ 

$('.buttonSearch').on('click', function(e){
	e.preventDefault();	
	$('.clear-area').remove();
	var inputValue = $('.searchForm').val();
	var typeSearch = $(this).val();
	getJson(inputValue, typeSearch);
});	

$('input[type="text"]').keypress(function (e) {
      if (e.which == 13) {
      	e.preventDefault();
      	$('.clear-area').remove();
	    var inputValue = $('.searchForm').val();
	    var typeSearch = 'all';
	    getJson(inputValue, typeSearch);
      }
});

function getJson(keyWord, type) {

var response = new XMLHttpRequest();

response.open('GET', 'https://pixabay.com/api/?key=3386150-3728a4222cc12bf99b52bbf09&q=' + keyWord + '&image_type=' + type + '', false);
response.send();

if (response.status != 200) {
  alert( response.status + ': ' + response.statusText ); 
} else {
  var resultResponse = JSON.parse( response.responseText ); 
}

var html = $('#parsed-resig').html();
var $body = $('body');
    var content = tmpl(html, {
        resultResponse}
        );
$body.append(content);
};
});
