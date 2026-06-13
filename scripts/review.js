let reviewCount = localStorage.getItem("numReviews");

if (reviewCount === null) {
    reviewCount = 0;
} else {
    reviewCount = Number(reviewCount);
}

reviewCount += 1;

localStorage.setItem("numReviews", reviewCount);

document.getElementById("review-counter").textContent = reviewCount;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;