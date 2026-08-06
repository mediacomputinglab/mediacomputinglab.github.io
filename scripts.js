document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function () {
          links.classList.toggle('open');
          toggle.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(function (a) {
          a.addEventListener('click', function () {
                  links.classList.remove('open');
                  toggle.classList.remove('active');
          });
    });
});
