navigator.usb.requestDevice({ filters: [{ vendorId: 0x067B }] })
.then(device => {
  console.log(device.productName);      // "Arduino Micro"
  console.log(device.manufacturerName); // "Arduino LLC"
})
.catch(error => { console.log(error); });