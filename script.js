//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	const buttons=document.querySelectorAll(".btn");
	const stopButton=document.querySelector(".stop");

	let currentAudio=null;
	buttons.forEach(button=>{
		button.addEventListener("click",()=>{
			const soundFile=button.getAttribute("data-sound");

		 if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
			   currentAudio.remove();
      }
			   currentAudio = document.createElement("audio");
			  currentAudio.src = `sounds/${soundFile}`;
				      currentAudio.autoplay = true;

			 document.body.appendChild(currentAudio);
		});
	});

	 stopButton.addEventListener("click", () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.remove();
      currentAudio = null;
    }
  });
})