let qr = document.getElementById(qr);

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qrText.value;
        qr.classList.add("displayQR");
    }   
}