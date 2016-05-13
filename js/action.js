function youtube() {
	if(body.classList.contains("youtube") && body.classList.contains("expand") {
		body.classList.remove("youtube");
		body.classList.remove("expand");
	} else {
		body.classList.add("youtube");
		body.classList.add("expand");
	}
}

if(document.URL.indexOf("://www.youtube.com/watch?" > -1) {
	youtube();
}
