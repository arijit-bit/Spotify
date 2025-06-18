let currentsong = new Audio();

document.querySelector(".menue").addEventListener("click", () => {
    document.querySelector(".libpartetion").style = "left: 0px; top: 72px;"
})

document.querySelector(".plus").addEventListener("click", () => {
    document.querySelector(".libpartetion").style = "left: -315px; top: 72px;"
})

homebutton.addEventListener("click", () => {
    window.location.href = "index.html";
})

function formatTime(seconds) {
    // Round the seconds to the nearest integer
    const totalSeconds = Math.round(seconds);

    // Calculate minutes and remaining seconds
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    // Format minutes and seconds as two digits
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    return `${formattedMinutes}:${formattedSeconds}`;
}

// async function getsongs() {
//     let s = await fetch("songs");
//     let response = await s.text();
//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a");
//     // console.log(as);



//     songlist = [];

//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songlist.push(element.href.split("/songs/")[1].replaceAll("%20", " "));
//         }
//     }
//     return songlist;
// }
async function getsongs() {
    return [
        "Montagem Toma.mp3",
        "Hit The Ground.mp3",
        "Loner.mp3",
        "Mortals (feat. Laura Brehm).mp3",
        "Mortals Funk Remix.mp3",
        "MUPP - X2.mp3",
        "Reason.mp3",
        "Royalty Funk.mp3",
        "Royalty.mp3",
        "Rush.mp3",
        "THE REDEEMER.mp3",
        "VEM LENTA!.mp3"
    ];
}

function playmusic(track, pause = false) {
    currentsong.src = "songs/" + track;
    if (!pause) {
        currentsong.play();
    }


    document.querySelector(".songbox").innerHTML = `
        <div class="libsub libs point" style="background-color: transparent; padding: 10px; border-radius: 5px; margin-top: 0px; margin-bottom: .5px; padding: 1px;">
            <ul class="listnone" style="display: flex; align-items: center; gap: 15px;">
                <li><img class="inv logosong" style="position: relative; top: 3px;" src="./assets/playsong.svg" alt="" width="31px"></li>
                <li class="inv">
                    <h5>${track}</h5>
                    <h6>playlist.Arijit</h6>
                </li>
            </ul>
        </div>`;

    // Remove glow from all songs
    const allTracks = document.querySelectorAll(".playlist .libsub");
    allTracks.forEach(trackDiv => trackDiv.classList.remove("glow"));

    // Add glow to the currently playing song
    Array.from(document.querySelectorAll(".playlist h5")).forEach(e => {
        if (e.innerText === track) {
            e.closest(".libsub").classList.add("glow");
        }
    });
}


async function main() {
    songs = await getsongs();
    // console.log(songs);
    playmusic(songs[0], true)

    //show all the song in the playlist
    songul = document.querySelector(".playlist")
    for (var element of songs) {

        songul.innerHTML = songul.innerHTML +
            `<div class="libsub libs overflow point" style="background-color: transparent; padding: 10px; border-radius: 5px; margin-top: 0px; margin-bottom: .5px; padding :1px;">
                                                    <ul class="listcount" style="display: flex; align-items: center; gap: 15px; ">
                                                        <li><img class="inv logosong" style ="position: relative; top: 3px;" src="./assets/musiclogo.svg" alt="" width="31px"></li>
                                                        <li class="inv">
                                                            <h5>${element}</h5>
                                                            <h6>playlist.Arijit</h6>
                                                        </li>
                                                    </ul>
                                                </div>`
    }
    Array.from(document.querySelector(".playlist").getElementsByTagName("h5")).forEach(e => {
        e.parentElement.parentElement.addEventListener("click", () => {
            play.src = "./assets/pause1.svg"
            console.log(e.innerHTML);
            playmusic(e.innerText);
        })

    });

    //event listner to play and pause button
    let firstManualPlay = true;

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            // Fix glow on first manual play
            if (firstManualPlay) {
                let track = currentsong.src.split("/songs/")[1].replaceAll("%20", " ");
                playmusic(track, true); // use pause=true so it doesn't auto play again
                firstManualPlay = false;
            }
            currentsong.play();
            play.src = "./assets/pause1.svg";
        } else {
            currentsong.pause();
            play.src = "./play.svg";
        }
    });


    //time update event 
    currentsong.addEventListener("timeupdate", () => {
        // console.log(currentsong.currentTime, currentsong.duration)
        document.querySelector(".currentduration").innerHTML = `${formatTime(currentsong.currentTime)}`
        document.querySelector(".totalduration").innerHTML = `${formatTime(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%"

        document.querySelector(".whiteline").style.width = (currentsong.currentTime / currentsong.duration) * 100 + "%"


    })
    const slider = document.querySelector(".slider");
    const circle = document.querySelector(".circle");
    const whiteline = document.querySelector(".whiteline");
    const audio = currentsong; // Reference to your actual audio element

    let isDragging = false; // Track if the user is dragging the slider

    // Function to update the slider during playback
    function updateSlider() {
        if (audio && audio.duration) {
            const percentage = (audio.currentTime / audio.duration) * 100;
            circle.style.left = percentage + "%";
            whiteline.style.width = percentage + "%";
        }
    }

    // Add event listener to the slider for seeking
    slider.addEventListener("click", (e) => {
        const sliderRect = slider.getBoundingClientRect(); // Get slider boundaries
        const clickPosition = e.clientX - sliderRect.left; // Calculate click position relative to slider
        const sliderWidth = sliderRect.width; // Total slider width
        const percentage = (clickPosition / sliderWidth) * 100; // Calculate the percentage position

        // Move the circle and update the whiteline
        circle.style.left = percentage + "%";
        whiteline.style.width = percentage + "%";

        // Adjust the song's currentTime
        if (audio && audio.duration) {
            audio.currentTime = (audio.duration * percentage) / 100;
        }
    });

    // Add mouse events to allow drag functionality
    slider.addEventListener("mousedown", (e) => {
        isDragging = true;
        updateSliderPosition(e); // Update the position immediately when mouse is pressed
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            updateSliderPosition(e); // Continuously update while dragging
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false; // Stop dragging when mouse is released
    });

    // Function to update the slider position
    function updateSliderPosition(e) {
        const sliderRect = slider.getBoundingClientRect(); // Get slider boundaries
        const clickPosition = e.clientX - sliderRect.left; // Calculate position relative to slider
        const sliderWidth = sliderRect.width; // Total slider width
        const percentage = (clickPosition / sliderWidth) * 100; // Calculate percentage

        // Move the circle and update the whiteline
        circle.style.left = percentage + "%";
        whiteline.style.width = percentage + "%";

        // Adjust the song's currentTime
        if (audio && audio.duration) {
            audio.currentTime = (audio.duration * percentage) / 100;
        }
    }

    // Update the slider position during playback
    audio.addEventListener("timeupdate", updateSlider);


    //add eventlistner for next and previous button
    prev.addEventListener("click", () => {
        console.log('prev cliked');
        // console.log(currentsong);
        // console.log(currentsong.src.split("songs/")[1].replaceAll("%20", " "));
        let cname = currentsong.src.split("songs/")[1].replaceAll("%20", " ")
        index = songs.indexOf(cname);
        // console.log(songs[0])
        console.log(index - 1);
        if (index > 0) {
            playmusic(songs[index - 1])
            play.src = "./assets/pause1.svg"
        }

    })

    next.addEventListener("click", () => {
        console.log('nex clicked');
        // console.log(currentsong);
        // console.log(currentsong.src.split("songs/")[1].replaceAll("%20", " "));
        let cname = currentsong.src.split("songs/")[1].replaceAll("%20", " ")
        index = songs.indexOf(cname);
        // console.log(songs[0])
        console.log(index + 1);
        // console.log(songs.length);
        let limit = songs.length
        console.log(limit);

        if (index < limit - 1) {
            playmusic(songs[index + 1])
            play.src = "./assets/pause1.svg"
        }
    })

    const volumeSlider = document.getElementById('volume');

    // Set initial volume
    currentsong.volume = volumeSlider.value;

    // Function to update the logo based on volume
    function updateVolumeIcon() {
        const volumeValue = volumeSlider.value;

        if (volumeValue > 0.8) {
            document.querySelector(".volume img").src = "./assets/maxvol.svg";
        } else if (volumeValue < 0.2) {
            document.querySelector(".volume img").src = "./assets/lowvol.svg";
        } else if (Math.abs(volumeValue - 0.0) < 0.01) { // Tolerance for zero
            document.querySelector(".volume img").src = "./assets/novol.svg";
        } else {
            document.querySelector(".volume img").src = "./assets/midvol.svg";
        }
    }

    // Update the volume when the slider value changes
    volumeSlider.addEventListener('input', () => {
        currentsong.volume = volumeSlider.value;
        updateVolumeIcon();
    });


}
main();

