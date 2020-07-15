
const ramClass = (method, id) => eel.ramClass(method) ((dataValue) => {
    document.getElementById(id).innerHTML=dataValue;
});

document.addEventListener("DOMContentLoaded", function() {
    ramClass("size", 'ramSize')
    ramClass("usage", "ramUsage")
});