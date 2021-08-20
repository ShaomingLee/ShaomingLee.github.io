var is_touch_device = 'ontouchstart' in document.documentElement;
    if (is_touch_device) {
    var elements = document.getElementById("hover");
    for (var i=0;i<elements.length;i++) {
        elements[i].onmouseover = null;
        elements[i].onmouseout = null;
    }
}