// Gallery items data as JavaScript objects
const galleryItems = [
    { 
        title: "Pink Flowers",
        largeSrc: "images/flowers-pink-large.jpg", 
        thumbSrc: "images/flowers-pink-small.jpg",
        description: "Beautiful pink flowers in full bloom."
    },
    { 
        title: "Purple Flowers",
        largeSrc: "images/flowers-purple-large.jpg", 
        thumbSrc: "images/flowers-purple-small.jpg",
        description: "Gorgeous purple flowers with delicate petals."
    },
    { 
        title: "Red Flowers",
        largeSrc: "images/flowers-red-large.jpg", 
        thumbSrc: "images/flowers-red-small.jpg",
        description: "Vibrant red flowers adding color to the garden."
    },
    { 
        title: "White Flowers",
        largeSrc: "images/flowers-white-large.jpg", 
        thumbSrc: "images/flowers-white-small.jpg",
        description: "Elegant white flowers shining in the sunlight."
    },
    { 
        title: "Yellow Flowers",
        largeSrc: "images/flowers-yellow-large.jpg", 
        thumbSrc: "images/flowers-yellow-small.jpg",
        description: "Cheerful yellow flowers brightening up the day."
    }
];

// Function to populate thumbnails
function populateThumbnails() {
    const thumbnailsList = document.getElementById("thumbnails");

    galleryItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        const thumbnailImg = document.createElement("img");
        
        // Set thumbnail source and alt text
        thumbnailImg.src = item.thumbSrc;
        thumbnailImg.alt = item.title;
        thumbnailImg.dataset.index = index; // Store index in data attribute for easy retrieval
        
        // Add click event listener to thumbnail
        thumbnailImg.onclick = function() {
            displayImage(item); // Display clicked image
            updateActiveThumbnail(thumbnailsList, thumbnailImg); // Update active thumbnail
            updateImageInfo(item); // Update image information
        };

        // Append thumbnail to list item and list
        listItem.appendChild(thumbnailImg);
        thumbnailsList.appendChild(listItem);
    });

    // Display initial image and information
    displayImage(galleryItems[0]);
    updateImageInfo(galleryItems[0]);
}

// Function to display clicked image
function displayImage(item) {
    const featuredImage = document.getElementById("featured-image");
    const imageTitle = document.getElementById("image-title");

    // Set featured image source, alt text, and title
    featuredImage.src = item.largeSrc;
    featuredImage.alt = item.title;
    imageTitle.textContent = item.title;
}

// Function to update active thumbnail
function updateActiveThumbnail(thumbnailsList, selectedThumbnail) {
    const thumbnails = thumbnailsList.getElementsByTagName("img");

    // Remove active class from all thumbnails
    for (let thumbnail of thumbnails) {
        thumbnail.classList.remove("active");
    }

    // Add active class to selected thumbnail
    selectedThumbnail.classList.add("active");
}

// Function to update image information
function updateImageInfo(item) {
    const imageDescription = document.getElementById("image-description");
    // Set image description
    imageDescription.textContent = item.description;
}

// Populate thumbnails on page load
window.onload = function() {
    populateThumbnails();
};
