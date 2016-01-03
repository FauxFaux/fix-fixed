var allNodes = document.getElementsByTagName("*");

var toRemove = [];

for (var i = 0; i < allNodes.length; ++i) {
    var node = allNodes[i];
    var style = window.getComputedStyle(node);
    if (style.position && 'fixed' == style.position) {
        toRemove.push(node);
    }
}

toRemove.forEach(node => {
    node.parentNode.removeChild(node);
});
