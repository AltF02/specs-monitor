const fanList = () => fans = eel.fansClass("fanList") ((dataValue) => {
    if (typeof dataValue === "string") {
        var para = document.createElement("p");
        para.innerHTML = dataValue;
        para.className = "fanRow";
        document.getElementById("fansDiv").appendChild(para);
        
    } else if (typeof dataValue === "object") {
        for (var key in dataValue){
            if (dataValue.hasOwnProperty(key)) {
                var para = document.createElement("P");
                para.innerHTML = key + ": " + dataValue[key] + " RPM"
                para.className = "fanRow";
                document.getElementById("fansDiv").appendChild(para);
            }
        }
    } else 
        console.log("Something went wrong please restart")
});

document.addEventListener("DOMContentLoaded", function() {
    fanList()
});