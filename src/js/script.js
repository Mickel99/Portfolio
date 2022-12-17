document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        var target = document.querySelector(hash);
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      });
    }
  });
  