


var closeelements = document.querySelectorAll('.contwithbg-popup-form .closepop');
Array.from(closeelements).forEach(function(i) {
  i.addEventListener('click', function() {
    i.parentElement.parentElement.classList.remove('pop-open');
  });
});


var modals = document.querySelectorAll(".cont-with-bg_module");
Array.from(modals).forEach(function(modal) {
  modal.addEventListener("click", function(e) {
    if (e.target.classList.contains("modalbtn")) {
      e.preventDefault();
      var tab = e.target;
      var panels = e.target.parentElement.parentElement.parentElement.querySelectorAll(
        ".contwithbg-popup-form"
      );
      Array.from(tab.parentElement.parentElement.children)
        .filter(function(tabF) {
        return tab !== tabF
      }).forEach(function(tab) {
        tab.classList.remove("pop-open")
      });
      tab.parentElement.classList.add("pop-open");
      panels.forEach(function(panel) {
        tab.href.split("#").pop() === panel.getAttribute("content-id")
          ? panel.classList.add("pop-open")
        : panel.classList.remove("pop-open")
      });
    }
    e.stopPropagation();
  });
});



var closeonBody = document.querySelector('body');
var removeOnClass = document.querySelectorAll('.contwithbg-popup-form');

Array.from(removeOnClass).forEach(function(ei) {
  ei.addEventListener('click', function() {
    ei.classList.remove('pop-open');
  });
});

var popupInnerWrap = document.querySelectorAll('.popup-outer');

Array.from(popupInnerWrap).forEach(function(ed) {
  ed.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});




