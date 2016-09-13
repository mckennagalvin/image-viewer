var thumbnails;
var idToImageMap = new Object();
var image;
var overlay;
var prevButton;
var nextButton;


// set up event listeners for lightbox
window.onload = function() {

	thumbnails = document.getElementsByClassName("thumbnail");
	image = document.getElementById("lightbox-img");
	overlay = document.getElementById("overlay");
	prevButton = document.getElementById("prev");
	nextButton = document.getElementById("next");

	// set up event listeners for thumbnails and create mapping of thumbnail ID to image URL
	for (var i = 0; i < thumbnails.length; i++) {
		thumbnails[i].addEventListener("click", showLightBox);
		idToImageMap[i] = thumbnails[i].href;
	}

	// set up event listener for closing the lightbox
	overlay.addEventListener("click", hideLightBox);

	// set up event listeners for next/previous click
	prevButton.addEventListener("click", prev);
	nextButton.addEventListener("click", next);

};

// shows the lightbox overlay containing the image
showLightBox  = function(evt) {
	evt.preventDefault();
	overlay.style.display = "table";
	image.src = evt.target.href;
	var newImageId = evt.target.dataset.imageId;
	image.dataset.imageId = newImageId;
	checkForEdgeCases(newImageId);
};

// hides the lightbox overlay containing the image
hideLightBox = function(evt) {
	overlay.style.display = "none";
}

// show the previous image in the list if it exists
prev = function(evt) {
	var currentImageId = image.dataset.imageId;
	var newImageId = parseInt(currentImageId) - 1;
	checkForEdgeCases(newImageId);
	image.src = idToImageMap[newImageId];
	image.dataset.imageId = newImageId;
	evt.stopPropagation();
}

// show the next image in the list if it exists
next = function(evt) {
	var currentImageId = image.dataset.imageId;
	var newImageId = parseInt(currentImageId) + 1;
	checkForEdgeCases(newImageId);
	image.src = idToImageMap[newImageId];
	image.dataset.imageId = newImageId;
	evt.stopPropagation();
}

// given the index of the thumbnail to be shown,
// decide whether the "next" and "previous" arrows should be shown
checkForEdgeCases = function(index) {
	nextButton.style.display = (index >= thumbnails.length - 1) ? "none" : "block";
	prevButton.style.display = (index <= 0) ? "none" : "block";
}
