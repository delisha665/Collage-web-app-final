Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
recognition = new window.webkitSpeechRecognition();

function change_layout() {
    document.getElementById("picture1").style.height = "300px";
    document.getElementById("picture3").style.width = "1000px";
    document.getElementById("picture3").style.marginLeft = "300px";
}
function listen() {
    recognition.start();
}
speak_data = " ";
function start() {
    listen();
}
recognition.onresult = function (e) {
    transcript = e.results[0][0].transcript;
    console.log(transcript);
    document.getElementById("text_area").innerHTML = transcript.toLowerCase();
    if (transcript == "selfie") {
        speak_data = "taking your selfie in 5 seconds";
        speak();

        Webcam.attach('#camera123');
        setTimeout(function () {
            takepicture1();
        }, 5000);
        speak_data = "taking your selfie in 5 seconds";
        speak();
        setTimeout(function () {
            takepicture2();
        }, 10000);
        speak_data = "taking your selfie in 5 seconds";
        speak();
        setTimeout(function () {
            takepicture3();
        }, 15000);

    }


}

function speak() {
    synth = window.speechSynthesis;
    console.log(speak_data);
    speak_object = new SpeechSynthesisUtterance(speak_data);
    speak_object.volume = 0.6;
    synth.speak(speak_object);
}
function takepicture1() {
    Webcam.snap(function (src) {
        document.getElementById("picture1").innerHTML = "<img src=" + src + " id='picture_1'>"
    });



}
function takepicture2() {
    Webcam.snap(function (src) {
        document.getElementById("picture2").innerHTML = "<img src=" + src + " id='picture_2'>"
    })
}
function takepicture3() {
    Webcam.snap(function (src) {
        document.getElementById("picture3").innerHTML = "<img src=" + src + " id='picture_3'>"
    })

}