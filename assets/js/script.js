const gap = 16;

  let carousel = document.querySelector("#banner .sliderr")
  let content = document.querySelector(".content")
  item=document.querySelector(".item")
  let right = document.querySelector("#banner .right")
  let left = document.querySelector("#banner .left")

right.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
});
left.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = item.offsetWidth;
window.addEventListener("resize", e => (width = item.offsetWidth + gap));
