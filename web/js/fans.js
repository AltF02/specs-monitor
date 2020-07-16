const fanList = () => fans = eel.fansClass("fanList") ((dataValue) => {
    for (var key in dataValue){
        if (dataValue.hasOwnProperty(key)) {
            var para = document.createElement("P");
            para.innerHTML = key + ": " + dataValue[key] + " RPM"
            para.className = "fanRow";
            document.getElementById("fansDiv").appendChild(para);
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    fanList()
});