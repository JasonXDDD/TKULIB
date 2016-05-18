/**
 * Created by 你好 on 2016/1/14.
 */


// IE does not know about the target attribute. It looks for srcElement
// This function will get the event target in a browser-compatible way
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function getRangeValue (e){
	var eventNode = getEventTarget(e);
	var show = eventNode.parentNode.parentNode.children[0];
    show.innerHTML = eventNode.value;
}

function getMenuValue(e){
    var target = getEventTarget(e);
    parent = findAncestor(target, 'XDD-menu');
    parent.children[0].innerHTML = target.innerHTML;
};