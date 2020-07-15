

class cpu {

    //  Calls the python function to get the cpu brand
    Brand = () => eel.getCpuBrand() ((dataValue) => {
        document.getElementById("cpuBrand").innerHTML=dataValue;
    });

    // Calls the python function to get the cpu core count
    Cores = () => eel.getCpuCores() ((dataValue) => {
        document.getElementById("cpuCores").innerHTML=dataValue;
    });

    // Calls the function to get the cpu thread count
    Threads = () => eel.getCpuThreads() ((dataValue) => {
        document.getElementById("cpuThreads").innerHTML=dataValue;
    });

    // Calls the function to get the cpu frequency
    Frequency = () => eel.getCpuFrequency() ((dataValue) => {
        document.getElementById("cpuFrequency").innerHTML=dataValue
    });

}

window.onload = function() {
    // Init the class
    Cpu = new cpu()

    // Cpu stuff
    Cpu.Brand()
    Cpu.Cores()
    Cpu.Threads()
    Cpu.Frequency()
}