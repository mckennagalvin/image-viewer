var thumbnailContainerClass = "thumbnail-container";
var thumbnailClass = "thumbnail";

// callback function for google image search
function hndlr(response) {
	var container = document.getElementById(thumbnailContainerClass);
	// create a thumbnail for each search result
	for (var i = 0; i < response.items.length; i++) {
		var item = response.items[i];
		var newImage = document.createElement("a");
		newImage.className = thumbnailClass;
		newImage.style.background = "url(" + item.link + ") 50% 50% no-repeat";
		newImage.href = item.link;
		newImage.dataset.imageId = i;
		container.appendChild(newImage);
	}
}