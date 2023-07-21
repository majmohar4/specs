function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function getOS() {
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
    return OSName;
}
//set var to computer ip and outut as console log
var computerIP = "http://ip-api.com/json";
console.log(computerIP);
//set var to computer ip and outut as console log
var computerIP = "http://ip-api.com/json";
console.log(computerIP);
function getIP() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://ip-api.com/json");
    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log("Computer IP:", response.query);
            document.getElementById("connectiondownlinkmax") = navigator.connection.downlinkMax;
            document.getElementById("timezone").innerHTML = query.timezone;
            document.getElementById("mesto").innerHTML = query.city;
            document.getElementById("isp").innerHTML = query.isp;
            document.getElementById("coordinates").innerHTML = query.lat + ", " + query.lon;
        }
    };
    xhr.send();
    document.getElementById("ip_naslov").innerHTML = response.query;
}
var browser = navigator.userAgent;
document.getElementById("browser").innerHTML = browser;

var device = navigator.platform;
document.getElementById("device").innerHTML = device;

var language = navigator.language;
document.getElementById("language").innerHTML = language;

var screenSize = screen.width + " x " + screen.height;
document.getElementById("screenSize").innerHTML = screenSize;

var colorDepth = screen.colorDepth;
document.getElementById("colorDepth").innerHTML = colorDepth;

var pixelRatio = window.devicePixelRatio;
document.getElementById("pixelRatio").innerHTML = pixelRatio;

var connectionType = navigator.connection.effectiveType;
document.getElementById("connection").innerHTML = connectionType;

var connectionSpeed = navigator.connection.downlink;
document.getElementById("connectionSpeed").innerHTML = connectionSpeed;

var connectionRTT = navigator.connection.rtt;
document.getElementById("connectionRTT").innerHTML = connectionRTT;

var connectionSaveData = navigator.connection.saveData;
document.getElementById("connectionSaveData").innerHTML = connectionSaveData;

var connectionDownlinkMax = navigator.connection.downlinkMax;
document.getElementById("connectionDownlinkMax").innerHTML = connectionDownlinkMax;

var connectionOnChange = navigator.connection.onchange;
document.getElementById("connectionOnChange").innerHTML = connectionOnChange;

var batteryLevel = navigator.getBattery().then(function (battery) {
    document.getElementById("batteryLevel").innerHTML = battery.level;
});

var batteryCharging = navigator.getBattery().then(function (battery) {
    document.getElementById("batteryCharging").innerHTML = battery.charging;
});

var batteryChargingTime = navigator.getBattery().then(function (battery) {
    document.getElementById("batteryChargingTime").innerHTML = battery.chargingTime;
});

var batteryDischargingTime = navigator.getBattery().then(function (battery) {
    document.getElementById("batteryDischargingTime").innerHTML = battery.dischargingTime;
});

var cpuCores = navigator.hardwareConcurrency;
document.getElementById("cpuCores").innerHTML = cpuCores;

var deviceMemory = navigator.deviceMemory;
document.getElementById("deviceMemory").innerHTML = deviceMemory;
var platform = navigator.platform;
document.getElementById("platform").innerHTML = platform;

var userAgent = navigator.userAgent;
document.getElementById("userAgent").innerHTML = userAgent;

var cpuClass = navigator.cpuClass;
document.getElementById("cpuClass").innerHTML = cpuClass;

var cpuSpeed = navigator.cpuSpeed;
document.getElementById("cpuSpeed").innerHTML = cpuSpeed;

var systemMemory = navigator.systemMemory;
document.getElementById("systemMemory").innerHTML = systemMemory;

var gpu = navigator.gpu;
document.getElementById("gpu").innerHTML = gpu;

var gpuSpeed = navigator.gpuSpeed;
document.getElementById("gpuSpeed").innerHTML = gpuSpeed;

var gpuMemory = navigator.gpuMemory;
document.getElementById("gpuMemory").innerHTML = gpuMemory;

var gpuVoltage = navigator.gpuVoltage;
document.getElementById("gpuVoltage").innerHTML = gpuVoltage;

var gpuDriver = navigator.gpuDriver;
document.getElementById("gpuDriver").innerHTML = gpuDriver;

var screenTime = navigator.screenTime;
document.getElementById("screenTime").innerHTML = screenTime;

var openedWindows = navigator.openedWindows;
document.getElementById("openedWindows").innerHTML = openedWindows;

var openedTabs = navigator.openedTabs;
document.getElementById("openedTabs").innerHTML = openedTabs;

var searchHistory = navigator.searchHistory;
document.getElementById("searchHistory").innerHTML = searchHistory;

var mostViewedSites = navigator.mostViewedSites;
document.getElementById("mostViewedSites").innerHTML = mostViewedSites;

var mostVisitedSites = navigator.mostVisitedSites;
document.getElementById("mostVisitedSites").innerHTML = mostVisitedSites;
