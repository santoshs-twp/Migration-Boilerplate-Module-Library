

var modalElement = document.querySelectorAll('.multipurpose-button-cm a.modal_btn');
Array.prototype.slice.call(modalElement).forEach(function(ele, index) {
  ele.addEventListener('click', function(e) {
    ele.parentElement.nextElementSibling.classList.toggle('modal-active');
    e.preventDefault();
  });
});

var closeelements = document.querySelectorAll('.multipurpose-button-cm .multibtn-popup-form .closepop');
Array.prototype.slice.call(closeelements).forEach(function(ele, index) {
  ele.addEventListener('click', function(e) {
    ele.parentElement.parentElement.classList.remove('modal-active');
    e.preventDefault();
  });
});



var closeBody = document.querySelector('body');
var removeClassBody = document.querySelectorAll('.multibtn-popup-form');
Array.from(removeClassBody).forEach(function(ei) {
  ei.addEventListener('click', function() {
    ei.classList.remove('modal-active');
  });
});

var btnInnerWrap = document.querySelectorAll('.multibtn-pop-cont');
Array.from(btnInnerWrap).forEach(function(ed) {
  ed.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});