var size = 0;
export function getScrollBarSize() {
    size = size || getSize();
    return size;
}
function getSize() {
    var outer = document.createElement("div");
    Object.assign(outer.style, {
        position: "absolute",
        top: "0px",
        left: "0px",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden",
        pointerEvents: "none",
    });
    var inner = document.createElement("p");
    Object.assign(inner.style, {
        width: "100%",
        height: "200px",
    });
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = "scroll";
    var w2 = inner.offsetWidth;
    if (w1 === w2)
        w2 = outer.clientWidth;
    document.body.removeChild(outer);
    return w1 - w2;
}
//# sourceMappingURL=get-scrollbar-size.js.map