var tabbers = document.querySelectorAll(".tabber-wrapper-module");

Array.from(tabbers).forEach(function(tabber) {
  tabber.addEventListener("click", function(e) {
    if (e.target.classList.contains("tab-trigger")) {
      e.preventDefault();
      var tab = e.target;
      var panels = e.target.parentElement.parentElement.parentElement.querySelectorAll(
        ".tab-item-content"
      );
      Array.from(tab.parentElement.parentElement.children)
        .filter(function(tabF) {
        return tab !== tabF
      }).forEach(function(tab) {
        tab.classList.remove("tab_active")
      });
      tab.parentElement.classList.add("tab_active");
      panels.forEach(function(panel) {
        tab.href.split("#").pop() === panel.getAttribute("content-id")
          ? panel.classList.add("tab_active")
        : panel.classList.remove("tab_active")
      });
    }
  });
});

