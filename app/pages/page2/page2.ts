import {Page} from 'ionic-framework/ionic';
import {Platform} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
  constructor(public platform: Platform) {
          this.platform.ready().then(() => {
            this.authGps = () => {
                    cordova.plugins.diagnostic.requestLocationAuthorization(function(){
                        console.log("Successfully requested location authorization always");
                    }, function(error){
                        console.error(error);
                    }, "always");  
            }
            this.checkGps = () => {
                    cordova.plugins.diagnostic.isLocationEnabled(function(enabled){
                        console.log("Location is " + (enabled ? "enabled" : "disabled"));
                    }, function(error){
                        console.error("The following error occurred: "+error);
                    });      
            }
            this.switchToLocationSettings = () => {
                    cordova.plugins.diagnostic.switchToLocationSettings();     
            }
            this.getLocation = () =>{
                console.log("entered get loaction")
                var onSuccess = function(position) {
                    console.log("entered get loaction success")
                        alert('Latitude: '          + position.coords.latitude          + '\n' +
                            'Longitude: '         + position.coords.longitude         + '\n' +
                            'Altitude: '          + position.coords.altitude          + '\n' +
                            'Accuracy: '          + position.coords.accuracy          + '\n' +
                            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                            'Heading: '           + position.coords.heading           + '\n' +
                            'Speed: '             + position.coords.speed             + '\n' +
                            'Timestamp: '         + position.timestamp                + '\n');
                    };

                    function onError(error) {
                        console.log("entered get loaction error")
                        alert('code: '    + error.code    + '\n' +
                            'message: ' + error.message + '\n');
                    }

                    navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout:10000});
            }
        }
  }

}
