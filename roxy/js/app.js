var backToTop = document.getElementById("backToTop");
  backToTop.addEventListener("click", function(event) {
    event.preventDefault();
    scrollToTop();
  });

  function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }
});