const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// Prompt user to select media stream -> pass to video element and play
async function selectVideoStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        console.log(mediaStream);
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log("error: ", error);
    }
}

button.addEventListener("click", async () => {
    // Disable button
    button.disabled = true;

    // Start picture in picture
    await videoElement.requestPictureInPicture();

    // Reset button
    button.disabled = false;
});

// On page load
selectVideoStream();