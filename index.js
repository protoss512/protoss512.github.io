$("#my-button").click(function () {
  navigator.usb.requestDevice({ filters: [] })//{ vendorId: 0x8086, productId: 0xA36D }
    .then(device => {
      console.log(device);      // "Arduino Micro"
      
    })
    .catch(error => { console.log(error); })
  /*navigator.usb.getDevices().then(devices => {
    devices.map(device => {
      console.log(device);      // "Arduino Micro"
    });
  }).catch(error => { console.log(error); })*/
});
