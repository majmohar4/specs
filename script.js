function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function getOS() {
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    return OSName;
  }
  //get ip address
    function getIP(json) {
      document.getElementById("ip").innerHTML = json.ip;
    }
    //get location
    function getLocation(json) {
        document.getElementById("location").innerHTML = json.city + ", " + json.region;
        }
    //get timezone
    function getTimezone(json) {
        document.getElementById("timezone").innerHTML = json.timezone;
        }
    //get isp
    function getISP(json) {
        document.getElementById("isp").innerHTML = json.isp;
        }
    //get coordinates
    function getCoordinates(json) {
        document.getElementById("coordinates").innerHTML = json.lat + ", " + json.lon;
        }
    //get browser
    function getBrowser() {
        var browser = navigator.userAgent;
        document.getElementById("browser").innerHTML = browser;
        }
    //get device    
    function getDevice() { 
        var device = navigator.platform;
        document.getElementById("device").innerHTML = device;
        }
    //get language
    function getLanguage() {
        var language = navigator.language;
        document.getElementById("language").innerHTML = language;
        }
    //get screen size
    function getScreenSize() {
        var screenSize = screen.width + " x " + screen.height;
        document.getElementById("screenSize").innerHTML = screenSize;
        }
    //get color depth
    function getColorDepth() {
        var colorDepth = screen.colorDepth;
        document.getElementById("colorDepth").innerHTML = colorDepth;
        }   
    //get pixel ratio
    function getPixelRatio() {
        var pixelRatio = window.devicePixelRatio;
        document.getElementById("pixelRatio").innerHTML = pixelRatio;
        }
    //get connection type
    function getConnectionType() {
        var connectionType = navigator.connection.effectiveType;
        document.getElementById("connection").innerHTML = connectionType;
        }
    //get connection speed
    function getConnectionSpeed() {
        var connectionSpeed = navigator.connection.downlink;
        document.getElementById("connectionSpeed").innerHTML = connectionSpeed;
        }
    //get connection rtt
    function getConnectionRTT() {
        var connectionRTT = navigator.connection.rtt;
        document.getElementById("connectionRTT").innerHTML = connectionRTT;
        }
    //get connection save data
    function getConnectionSaveData() {
        var connectionSaveData = navigator.connection.saveData;
        document.getElementById("connectionSaveData").innerHTML = connectionSaveData;
        }
    //get connection downlink max
    function getConnectionDownlinkMax() {
        var connectionDownlinkMax = navigator.connection.downlinkMax;
        document.getElementById("connectionDownlinkMax").innerHTML = connectionDownlinkMax;
        }
    //get connection onchange   
    function getConnectionOnChange() {
        var connectionOnChange = navigator.connection.onchange;
        document.getElementById("connectionOnChange").innerHTML = connectionOnChange;
        }
    //get battery level
    function getBatteryLevel() {
        var batteryLevel = navigator.getBattery().then(function(battery) {
            document.getElementById("batteryLevel").innerHTML = battery.level;
        });
        }
    //get battery charging
    function getBatteryCharging() {
        var batteryCharging = navigator.getBattery().then(function(battery) {
            document.getElementById("batteryCharging").innerHTML = battery.charging;
        });
        }
    //get battery charging time
    function getBatteryChargingTime() {
        var batteryChargingTime = navigator.getBattery().then(function(battery) {
            document.getElementById("batteryChargingTime").innerHTML = battery.chargingTime;
        });
        }
    //get battery discharging time
    function getBatteryDischargingTime() {
        var batteryDischargingTime = navigator.getBattery().then(function(battery) {
            document.getElementById("batteryDischargingTime").innerHTML = battery.dischargingTime;
        });
        }
    //get Cpu cores
    function getCpuCores() {
        var cpuCores = navigator.hardwareConcurrency;
        document.getElementById("cpuCores").innerHTML = cpuCores;
        }   
    //get device memory
    function getDeviceMemory() {
        var deviceMemory = navigator.deviceMemory;
        document.getElementById("deviceMemory").innerHTML = deviceMemory;
        }
    //get platform
    function getPlatform() {    
        var platform = navigator.platform;
        document.getElementById("platform").innerHTML = platform;
        }
    //get user agent
    function getUserAgent() {
        var userAgent = navigator.userAgent;
        document.getElementById("userAgent").innerHTML = userAgent;
        }
    //get cpu class
    function getCpuClass() {
        var cpuClass = navigator.cpuClass;
        document.getElementById("cpuClass").innerHTML = cpuClass;
        }
    //get cpu speed
    function getCpuSpeed() {
        var cpuSpeed = navigator.cpuSpeed;
        document.getElementById("cpuSpeed").innerHTML = cpuSpeed;
        }
    //get system memory
    function getSystemMemory() {
        var systemMemory = navigator.systemMemory;
        document.getElementById("systemMemory").innerHTML = systemMemory;
        }
    //get gpu
    function getGpu() {
        var gpu = navigator.gpu;
        document.getElementById("gpu").innerHTML = gpu;
        }
    //get gpu speed 
    function getGpuSpeed() {
        var gpuSpeed = navigator.gpuSpeed;
        document.getElementById("gpuSpeed").innerHTML = gpuSpeed;
        }
    //get gpu memory
    function getGpuMemory() {
        var gpuMemory = navigator.gpuMemory;
        document.getElementById("gpuMemory").innerHTML = gpuMemory;
        }
    //get gpu voltage  
    function getGpuVoltage() {
        var gpuVoltage = navigator.gpuVoltage;
        document.getElementById("gpuVoltage").innerHTML = gpuVoltage;
        }
    //get gpu driver
    function getGpuDriver() {
        var gpuDriver = navigator.gpuDriver;
        document.getElementById("gpuDriver").innerHTML = gpuDriver;
        }
    //get screen time
    function getScreenTime() {
        var screenTime = navigator.screenTime;
        document.getElementById("screenTime").innerHTML = screenTime;
        }
    //get opened windows
    function getOpenedWindows() {
        var openedWindows = navigator.openedWindows;
        document.getElementById("openedWindows").innerHTML = openedWindows;
        }
    //get opened tabs
    function getOpenedTabs() {
        var openedTabs = navigator.openedTabs;
        document.getElementById("openedTabs").innerHTML = openedTabs;
        }
    //get search history to 25 in the past
    function getSearchHistory() {
        var searchHistory = navigator.searchHistory;
        document.getElementById("searchHistory").innerHTML = searchHistory;
        }
    //get the most viewed sites
    function getMostViewedSites() {
        var mostViewedSites = navigator.mostViewedSites;
        document.getElementById("mostViewedSites").innerHTML = mostViewedSites;
        }
    //get the most visited sites
    function getMostVisitedSites() {
        var mostVisitedSites = navigator.mostVisitedSites;
        document.getElementById("mostVisitedSites").innerHTML = mostVisitedSites;
        }
    