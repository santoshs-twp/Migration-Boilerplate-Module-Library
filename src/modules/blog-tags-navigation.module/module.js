// Setup slideUp Function
function slideUp(element, timing) {
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = timing + 'ms';
  element.style.boxSizing = 'border-box';
  element.style.height = element.offsetHeight + 'px';
  element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  window.setTimeout(function() {
    element.style.display = 'none';
    element.style.removeProperty('height');
    element.style.removeProperty('padding-top');
    element.style.removeProperty('padding-bottom');
    element.style.removeProperty('margin-top');
    element.style.removeProperty('margin-bottom');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
  }, timing);
}

// Setup slideDown Function
function slideDown(element, timing) {
  element.style.removeProperty('display');
  var display = window.getComputedStyle(element).display;
  if (display === 'none') {
    display = 'block';
  }
  element.style.display = display;
  var height = element.offsetHeight;
  element.style.overflow = 'hidden';
  element.style.height = 0;
  element.style.paddingTop = 0;
  element.style.paddingBottom = 0;
  element.style.marginTop = 0;
  element.style.marginBottom = 0;
  element.offsetHeight;
  element.style.transitionProperty = 'height, margin, padding';
  element.style.transitionDuration = timing + 'ms';
  element.style.height = height + 'px';
  element.style.removeProperty('padding-top');
  element.style.removeProperty('padding-bottom');
  element.style.removeProperty('margin-top');
  element.style.removeProperty('margin-bottom');
  window.setTimeout(function() {
    element.style.removeProperty('height');
    element.style.removeProperty('overflow');
    element.style.removeProperty('transition-duration');
    element.style.removeProperty('transition-property');
  }, timing);
}

// Setup slideToggle function
function toggleFunction(element, timing) {
  var _display = window.getComputedStyle(element, null).display;
  if (_display === 'none') {
    return slideDown(element, timing);
  } else {
    return slideUp(element, timing);
  }
}

// Menu Toggle Functionality
var slideTransition = 400;
var openMenuClass = 'menu-open';

var blog_tag_nagivations = document.querySelectorAll('.hamburger-menu');
Array.prototype.slice.call(blog_tag_nagivations).forEach(function(ele, index) {
  ele.addEventListener('click', function(e) {
    // filter siblings menu
    var _siblings = Array.prototype.filter.call(ele.parentNode.parentNode.children, function(sibling){
      return sibling !== ele;
    });

    // close siblings menu
    Array.prototype.slice.call(_siblings).forEach(function(el, index) {
      if (el.children.length >= 2) {
        el.classList.remove(openMenuClass);
        el.children[0].classList.remove(openMenuClass);
        var _display1 = window.getComputedStyle(el.children[1], null).display;
        _display1 !== 'none' ? slideUp(el.children[1], slideTransition) : null;          
      }
    });

    // open active menu
    var _display = window.getComputedStyle(ele.nextElementSibling, null).display;
    if (_display === 'none') {
      ele.classList.toggle(openMenuClass);
      ele.parentElement.classList.toggle(openMenuClass);
      slideDown(ele.nextElementSibling, slideTransition);        
    }
  });
});
