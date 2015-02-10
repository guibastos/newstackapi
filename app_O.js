$(document).ready( function() {


	$('.inspiration-getter').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		// get the value of the inspiration tags the user submitted
		var insptag = $(this).find("input[name='answerers']").val();
		//getTopAnswers(insptags);
		console.log(insptag);
		searchTag = insptag;
		console.log(searchTag);
		getResults(insptag);
		
	});

});



function getResults(tag) {
	var targeturl = 'http://api.stackexchange.com/2.2/tags/'+tag+'/top-answerers/all_time?site=stackoverflow'
  	$.getJSON(targeturl, function(data){
    showResults(tag, data.items);
	});
}

var showSearchResults = function(query, resultNum) {
	var results = resultNum + ' results for <strong>' + query;
	return results;
};


function showResults(tag, results) {
	console.log(tag);
	//console.log(results.length+" results for yadayaayada");
	var searchResults = showSearchResults(tag, results.length);
	$('.search-results').html(searchResults);
	var html = "";
	$.each(results, function(index,value){
		html += '<dl class="result answerer"><dt>Answerer</dt><dd class="answerer-displayname"><a href="'+value.user.link+'" target="_blank">'+value.user.display_name+'</a></dd><dt> </dt><dd class="answerer-displayimage"><img src="'+value.user.profile_image+'"></img></dd><dt>Reputation</dt><dd class="answerer-reputation">'+value.user.reputation+'</dd></dl>';
    	console.log(value.user.display_name);
    	console.log(value.user.profile_image);
    	console.log(value.user.reputation);
    	console.log(value.user.link);
	});
	$("#answerer-results").html(html);
}