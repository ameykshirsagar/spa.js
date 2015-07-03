var page = document.getElementsByClassName('page');
window.location.hash = "home";
document.querySelector('.page[data-target="'+location.hash.replace("#",'')+'"]').style.display="block";
window.addEventListener("hashchange", function(){
	for (var i = 0; i < page.length; i++) {
		page[i].style.display = "none";
	};
	document.querySelector('.page[data-target="'+location.hash.replace("#",'')+'"]').style.display="block";
});