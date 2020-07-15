
//  Calls the python function to get the cpu brand
const getCpuBrand = () => eel.getCpuBrand() ((dataValue) => {
    document.getElementById("cpuBrand").innerHTML=dataValue;
});

// Calls the python function to get the cpu core count
const getCpuCores = () => eel.getCpuCores() ((dataValue) => {
    document.getElementById("cpuCores").innerHTML=dataValue;
});

// Calls the function to get the cpu thread count
const getCpuThreads = () => eel.getCpuThreads() ((dataValue) => {
    document.getElementById("cpuThreads").innerHTML=dataValue;
});

const getCpuFrequency = () => eel.getCpuFrequency() ((dataValue) => {
    document.getElementById("cpuFrequency").innerHTML=dataValue
});