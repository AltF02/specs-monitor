
const cpuClass = (method, id) => eel.cpuClass(method) ((dataValue) => {
    document.getElementById(id).innerHTML=dataValue
})

document.addEventListener("DOMContentLoaded", function() {
    cpuClass("brand", "cpuBrand");
    cpuClass("cores", "cpuCores");
    cpuClass("threads", "cpuThreads")
    cpuClass("frequency", "cpuFrequency");
});