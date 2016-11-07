var uniqueClass = 'fix_fixed_c508296f6012bbff2ea27a7e090e457079c72b7974ca85f25cbf9b87e3e6b5cd';
var styleTagId = 'style_for_' + uniqueClass;

var allNodes = document.getElementsByTagName("*");

var toRemove = [];

var hatred = function (style) {
    return style.position && 'fixed' == style.position;
};

for (var i = 0; i < allNodes.length; ++i) {
    var node = allNodes[i];
    if (hatred(window.getComputedStyle(node))) {
        toRemove.push(node);
    }

    ['::before', '::after'].forEach(function(sub) {
        if (hatred(window.getComputedStyle(node, sub))) {
            node.classList.add(uniqueClass);
        }
    });
}

toRemove.forEach(node => {
    node.parentNode.removeChild(node);
});

if (!document.getElementById(styleTagId)) {
    var styleTag = document.head.appendChild(document.createElement("style"));
    styleTag.type = 'text/css';
    styleTag.id = styleTagId;
    var css =
        '.' + uniqueClass + ':before,' +
        '.' + uniqueClass + ':after { ' +
        '  position: initial !important' +
        '}';
    styleTag.appendChild(document.createTextNode(css));
}
