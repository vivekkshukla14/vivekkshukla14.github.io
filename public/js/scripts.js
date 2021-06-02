function script() {
  $(document).ready(function () {
    $(document).on("click", ".nav-item a", function (e) {
      $(this).parent().addClass("active").siblings().removeClass("active");
    });
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    function onScroll(event) {
      var scrollPos = $(document).scrollTop() + 50;
      event.preventDefault();
      $("#nav-main a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          $("#nav-main li a").removeClass("active");
          currLink.addClass("active");
        } else if (
          refElement.position().top <= scrollPos + 50 &&
          refElement.position().top + refElement.height() > scrollPos + 50
        ) {
          $("#nav-main li a").removeClass("active");
          currLink.addClass("active");
        } else {
          currLink.removeClass("active");
        }
      });
    }
  });
}

(document.onkeydown = function (e) {
  return (
    123 != e.keyCode &&
    (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
    (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
    (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
    (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
    void (
      1 != e.ctrlKey ||
      ("61" != e.which &&
        "107" != e.which &&
        "173" != e.which &&
        "109" != e.which &&
        "187" != e.which &&
        "189" != event.which) ||
      e.preventDefault()
    )
  );
}),
  (document.oncontextmenu = new Function("return false")),
  (document.onselectstart = new Function("return false")),
  window.sidebar &&
    ((document.onmousedown = new Function("return false")),
    (document.onclick = new Function("return true")),
    (document.oncut = new Function("return false")),
    (document.oncopy = new Function("return false")),
    (document.onpaste = new Function("return false")));
