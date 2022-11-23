
(function() {

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

  function toggleFunction(element, timing) {
    var _display = window.getComputedStyle(element, null).display;
    if (_display === 'none') {
      return slideDown(element, timing);
    } else {
      return slideUp(element, timing);
    }
  }

  // Inserting Child Trigger into DOM


  var menuOuterWrap = document.querySelectorAll('.multipurose_nav ');
  var noMegaMenu = document.querySelectorAll('.mob_nav nav.navigation-primary.cmNav ');
  var childLinks = document.querySelectorAll('.mob_nav nav.navigation-primary.cmNav li.has-submenu > *:first-child');
  if(noMegaMenu){

    Array.prototype.slice.call(childLinks).forEach(function(el) {
      el.insertAdjacentHTML('afterend', '<div class="child-trigger new"/><i></i></div>');
    });

    // Menu Toggle Functionality
    var slideTransition = 500;
    var mobileMenuWrapper = document.querySelector('.mob_nav nav.navigation-primary.cmNav');
    var openMenuClass = 'child-open';

    var childTrigger = document.querySelectorAll('.child-trigger');
    Array.prototype.slice.call(childTrigger).forEach(function(ele, index) {
      ele.addEventListener('click', function(e) {
        // filter siblings menu
        var _siblings = Array.prototype.filter.call(ele.parentNode.parentNode.children, function(sibling){
          return sibling !== ele;
        });
        // close siblings menu
        Array.prototype.slice.call(_siblings).forEach(function(el, index) {
          if (el.children.length >= 3) {
            el.classList.remove(openMenuClass);
            el.children[1].classList.remove(openMenuClass);
            var _display1 = window.getComputedStyle(el.children[2], null).display;
            _display1 !== 'none' ? slideUp(el.children[2], slideTransition) : null;          
          }
        });

        // close child menu
        Array.prototype.filter.call(ele.nextElementSibling.children, function(child){
          if (child.children.length >= 3) {
            child.classList.remove(openMenuClass);
            child.children[1].classList.remove(openMenuClass);
            slideUp(child.children[2], slideTransition)
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

  }


  // Mobile Trigger Slide Functionality
  var body = document.querySelector('body');
  var parentSecWrap = document.querySelector('.multipurose_nav');
  var trigger = document.querySelectorAll('.mobile-trigger');
  if (!!trigger) {
    Array.prototype.slice.call(trigger).forEach(function(eleTrigger, index) {
      eleTrigger.addEventListener('click', function(e) {
        toggleFunction(eleTrigger.previousElementSibling, slideTransition);
        eleTrigger.parentElement.parentElement.classList.toggle('mobile-open');

        var menuOuterWrap = eleTrigger.parentElement.parentElement;
        var childTrigger2 = menuOuterWrap.querySelectorAll('.child-trigger');
        Array.prototype.slice.call(childTrigger2).forEach(function(ele3) {
          ele3.classList.remove(openMenuClass);
          ele3.parentElement.classList.remove(openMenuClass);
          slideUp(ele3.nextElementSibling, slideTransition);
        });
      });

    });
  }


})();
