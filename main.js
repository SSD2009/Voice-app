var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHtML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
        console.log(event);

        var content = event.results[0][0].transcript;
        console.log(content);
        document.getElementById("textbox").innerHTML = content;
        if (content == "take my selfie") {
            console.log("taking your selfie");
            speak();
        
        }
}

        function speak() {
            var synth = window.speechSynthesis;
            speakdata = "Taking your selfie in 5 seconds";
            var utterthis = new SpeechSynthesisUtterance(speakdata);

            synth.speak(utterthis);
            Webcam.attach(camera);

            setTimeout(function(){
               take_snapshot();
               save();
            },5000);
        }

        Webcam.set({
            width: 360,
            height: 250,
            image_format: 'png',
            png_quality: 90
        });
        camera = document.getElementById("camera")

        function take_snapshot() {
            Webcam.snap(function (data_uri) {
                document.getElementById("selfie").innerHTML = '<img id="Image" src="' + data_uri + '">';
            })
        }

        function save(){
            link=document.getElementById("link");
            image=document.getElementById("Image").src;
            link.href=image;
            link.click();
        }