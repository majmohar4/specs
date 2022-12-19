//create a function that return ip adress of the user
function getIp() {
    var ip = navigator.ip;
    document.getElementById("ip").innerHTML = ip;
    return ip;
    }
//create a function that return the user's browser
function getBrowser() {
    var browser = navigator.userAgent;
    document.getElementById("browser").innerHTML = browser;
    return browser;
    }
//create a function that return the user's operating system
function getOs() {
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    return OSName;
    }
//create a function that return the user's device
function getDevice() {
    var device = navigator.device;
    document.getElementById("device").innerHTML = device;
    return device;
    }
//create a function that return the user's device memory   
function getDeviceMemory() {
    var deviceMemory = navigator.deviceMemory;
    document.getElementById("deviceMemory").innerHTML = deviceMemory;
    return deviceMemory;
    }
//create a function that return the user's cpu class
function getCpuClass() {
    var cpuClass = navigator.cpuClass;
    document.getElementById("cpuClass").innerHTML
    return cpuClass;
    }
//create a function that return the user's cpu speed

function getCpuSpeed() {
    var cpuSpeed = navigator.cpuSpeed;
    document.getElementById("cpuSpeed").innerHTML = cpuSpeed;
    return cpuSpeed;
    }
//create a function that return the user's system memory    
function getSystemMemory() {
    var systemMemory = navigator.systemMemory;
    document.getElementById("systemMemory").innerHTML = systemMemory;
    return systemMemory;
    }
//create a function that return the user's gpu
function getGpu() {
    var gpu = navigator.gpu;
    document.getElementById("gpu").innerHTML = gpu;
    return gpu;
    }
//create a function that return the user's gpu speed
function getGpuSpeed() {
    var gpuSpeed = navigator.gpuSpeed;
    document.getElementById("gpuSpeed").innerHTML = gpuSpeed;
    return gpuSpeed;
    }
//create a function that return the user's gpu memory
function getGpuMemory() {
    var gpuMemory = navigator.gpuMemory;
    document.getElementById("gpuMemory").innerHTML = gpuMemory;
    return gpuMemory;
    }
//create a function that return the user's gpu voltage
function getGpuVoltage() {
    var gpuVoltage = navigator.gpuVoltage;
    document.getElementById("gpuVoltage").innerHTML = gpuVoltage;
    return gpuVoltage;
    }
//create a function that return the user's gpu driver
function getGpuDriver() {
    var gpuDriver = navigator.gpuDriver;
    document.getElementById("gpuDriver").innerHTML = gpuDriver;
    return gpuDriver;
    }
//create a function that return the user's screen time
function getScreenTime() {
    var screenTime = navigator.screenTime;
    document.getElementById("screenTime").innerHTML = screenTime;
    return screenTime;
    }
//create a function that return the user's screen resolution
function getScreenResolution() {
    var screenResolution = navigator.screenResolution;
    document.getElementById("screenResolution").innerHTML = screenResolution;
    return screenResolution;
    }
//create a function that return the user's screen color depth   
function getScreenColorDepth() {
    var screenColorDepth = navigator.screenColorDepth;
    document.getElementById("screenColorDepth").innerHTML = screenColorDepth;
    return screenColorDepth;
    }   