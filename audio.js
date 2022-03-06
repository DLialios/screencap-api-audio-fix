var original = navigator.mediaDevices["getDisplayMedia"];
navigator.mediaDevices["getDisplayMedia"] =
    function getDisplayMedia(displayMediaOptions) {
        displayMediaOptions.audio = {
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false
        };
        return original.call(this, displayMediaOptions);
    };
