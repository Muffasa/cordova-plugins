import {Page} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/page3/page3.html'
})
export class Page3 {
  constructor() {

  }
  deviceUuid = device? device.uuid:"device is undefined"

    checkBT = () => {
         console.log("entered checkBT")
            cordova.plugins.diagnostic.isBluetoothEnabled(function(enabled){
                console.log("Location is " + (enabled ? "enabled" : "disabled"));
            }, function(error){
                console.error("The following error occurred: "+error)
            });      
    }
    switchToBluetoothSettings = () => {
         console.log("entered switchToBluetoothSettings")
            cordova.plugins.diagnostic.switchToBluetoothSettings()    
    }
    initialize = () =>{
        console.log("entered initialize")
            function initializeSuccess(status) {
            console.log("entered initializeSuccess")
                alert("status: " + status)
            }

            function initializeError(error) {
                console.log("entered initializeError")
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
            let params = {
                            "request": true,
                            "statusReceiver": false
                         }

           bluetoothle.initialize(initializeSuccess, initializeError,params)
    }
    startScan = () =>{
        console.log("entered startScan")
           function startScanSuccess(status) {
            console.log("entered startScanSuccess")
                alert("status: " + status)
           }

           function startScanError(error) {
                console.log("entered startScanError")
                alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n')
           }
           let params = {
                    "services": [
                        "180D",
                        "180F"
                    ],
                    "allowDuplicates": true,
                    "scanMode": bluetoothle.SCAN_MODE_BALANCED,
                    "matchMode": bluetoothle.MATCH_MODE_AGGRESSIVE,
                    "matchNum": bluetoothle.MATCH_NUM_MAX_ADVERTISEMENT,
                    "callbackType": bluetoothle.CALLBACK_TYPE_ALL_MATCHES
                    }  

           bluetoothle.startScan(startScanSuccess, startScanError, params)
    }
    stopScan = () => {
        function stopScanError(error) {
        console.log("entered stopScanError")
        alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n')
        }
        bluetoothle.stopScan((status)=> console.log("stopsacn success status:"+ status) , stopScanError);
    }
}
