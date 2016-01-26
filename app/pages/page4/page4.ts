import {Page} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/page4/page4.html'
})
export class Page4 {
  constructor() {

  }
  deviceUuid = device? device.uuid:"device is undefined"

    checkBT = () => {
         console.log("entered checkBT")
            cordova.plugins.diagnostic.isBluetoothEnabled(function(enabled){
                console.log("Bluetooth is " + (enabled ? "enabled" : "disabled"));
            }, function(error){
                console.error("The following error occurred: "+error)
            });      
    }
    switchToBluetoothSettings = () => {
         console.log("entered switchToBluetoothSettings")
            cordova.plugins.diagnostic.switchToBluetoothSettings()    
    }
    list = () => {
         console.log("entered list")
        bluetoothSerial.list(
            function(results) {
                console.log(JSON.stringify(results));
            },
            function(error) {
                console.log(JSON.stringify(error));
            }
        );   
    }
    discoverUnpaired = () =>{
        console.log("entered discoverUnpaired")
            function success(retData) {
            console.log("entered initializeSuccess")
            debugger
                console.log("retData: " + retData)
            }

            function failure(error) {
                console.log("entered initializeError")
                console.log('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');
            }
            let params = {
                            "request": true,
                            "statusReceiver": false
                         }

           bluetoothSerial.discoverUnpaired(success, failure);
    }

}
