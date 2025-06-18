
Array.from(document.querySelectorAll(".greenlogo")).forEach(e => {
    e.innerHTML = `<img src="play.svg" alt="logo">`;
});

document.getElementById('nextPageButton').addEventListener('click', function () {
    window.location.href = 'playlist.html'; // Replace 'nextpage.html' with the URL of the desired page.
});
// document.getElementsByClassName('arcard').addEventListener('click', function () {
//     window.location.href = 'playlist.html'; // Replace 'nextpage.html' with the URL of the desired page.
// });
let a = document.getElementsByClassName("arcard");
for (let index = 0; index < a.length; index++) {
    a[index].addEventListener("click", ()=>{
         window.location.href = 'playlist.html';
    })
    
}

//plus button on menue
document.querySelector(".menue").addEventListener("click", ()=>{
    document.querySelector(".libpartetion").style = "left: 0px; top: 72px;"
})
document.querySelector(".plus").addEventListener("click", ()=>{
    document.querySelector(".libpartetion").style = "left: -315px; top: 72px;"
})

//home button 
homebutton.addEventListener("click", ()=>{
    window.location.href = "index.html";
})


document.querySelector(".artistclick").addEventListener("click", () => {
    const artistTemplate = document.querySelector(".artisttemplate");
    const artistButton = document.querySelector(".artistclick");

    // Check if the current style is already applied
    if (artistTemplate.style.flexWrap === "wrap") {
        // Revert to the default state
        artistTemplate.style = "overflow:auto; flex-wrap: none;";
        artistButton.innerHTML = "Show all";
    } else {
        // Apply the new styles
        artistTemplate.style = "flex-wrap: wrap; overflow: none; justify-content: center;";
        artistButton.innerHTML = "Hide all";
    }
});

albumshow.addEventListener("click", ()=>{
    const artistTemplate = document.querySelector(".albumcont");
    const artistButton = document.querySelector("#albumshow");

    // Check if the current style is already applied
    if (artistTemplate.style.flexWrap === "wrap") {
        // Revert to the default state
        artistTemplate.style = "overflow:auto; flex-wrap: none;";
        artistButton.innerHTML = "Show all";
    } else {
        // Apply the new styles
        artistTemplate.style = "flex-wrap: wrap; overflow: none; justify-content: center;";
        artistButton.innerHTML = "Hide all";
    }
})


// // Create a MediaQueryList object for max-width: 600px
// const mediaQuery = window.matchMedia("(max-width: 1010px)");

// // Check if the media query matches
// function handleMediaQueryChange(event) {
//     if (mediaQuery.matches) {
//         //   console.log("The screen width is 600px or less");
//         document.querySelector(".headerul").innerHTML = `<li class="slogo menue point"><img class="menuebutton" src="menue.svg" alt="logo"></li>
//                     <li class="flex"><img src="home.svg" class="toplogo adjust home" alt="home">
//                         <div class="bar flex">

//                             <img src="search.svg" class="toplogo adjust" alt="search"> <label for="email"></label>
//                             <input type="email" id="email" name="email" placeholder="What do you want to play?" required> <img src="lib.svg" class="toplogo adjust" alt="library"></li>
//                             <li><button class ="signin topbutton">Sign up</button> <button class="login topbutton">Log in</button>
//                         </div>
//                     </li>`
//         document.querySelector(".main").innerHTML = `<div class="artist artisthome border">
//                     <div class="arheader">
//                         <ul class="inv allflex">
//                             <li><h2>Popular artists</h2></li>
//                             <li>Show all</li>
//                         </ul>
//                     </div>
//                     <div class="artisttemplate">
//                         <div class="arcard">
//                             <img src="ab67616100005174cb6926f44f620555ba444fca.jpeg" class="imgcircle" alt="photo">
//                             <h4 class="inv">Pritam</h4>
//                             <p class="inv">Artist</p>
//                         </div>
//                         <div class="arcard">
//                             <img src="ab67616100005174bd6fbc7d0973cc33940781ad.jpeg" class="imgcircle" alt="photo">
//                             <h4 class="inv">Sachin-Jigar</h4>
//                             <p class="inv">Artist</p>                </div>
//                         <div class="arcard">
//                             <img src="ab67616100005174b19af0ea736c6228d6eb539c.jpeg" class="imgcircle" alt="photo">
//                             <h4 class="inv">A.R. Rahaman</h4>
//                             <p class="inv">Artist</p>                </div>
//                         <div class="arcard">
//                             <img  src="ab676161000051745ba2d75eb08a2d672f9b69b7.jpeg" class=" ar imgcircle" alt="photo">
//                             <h4 class="inv">Arijit Singh</h4>
//                             <p class="inv">Artist</p>                </div>
//                         <div class="arcard">
//                             <img src="ab6761610000517490b6c3d093f9b02aad628eaf.jpeg" class="imgcircle" alt="photo">
//                             <h4 class="inv">Vishal-Shekhar</h4>
//                             <p class="inv">Artist</p>                </div>
//                         <div class="arcard">
//                             <img src="ab6761610000e5ebc40600e02356cc86f0debe84.jpeg" class="imgcircle" alt="photo">
//                             <h4 class="inv">Atif Aslam</h4>
//                             <p class="inv">Artist</p>                </div>
//                     </div>
//                     <div class="album">
//                         <div class="arheader">
//                             <ul class="inv allflex">
//                                 <li><h2>Popular album and singles</h2></li>
//                                 <li>Show all</li>
//                             </ul>
//                         </div>
//                         <div class="artisttemplate">
//                             <div class="arcard">
//                                 <img src="glory.jpeg" class="imgsqw" alt="photo">
//                                 <h4 class="inv">GLORY</h4>
//                                 <p class="inv">Yo Yo Honey Singh</p>
//                             </div>
//                             <div class="arcard">
//                                 <img src="patandar.jpg" class="imgsqw" alt="photo">
//                                 <h4 class="inv">Pathamdar</h4>
//                                 <p class="inv">Arjan Dhillon,Mxrci</p>
//                             </div>
//                             <div class="arcard">
//                                 <img src="ashiqui2.jpeg" class="imgsqw" alt="photo">
//                                 <h4 class="inv">Aashiqui 2</h4>
//                                 <p class="inv">Mithoor,Ankit Twiari,Jeet Gannguli</p>
//                             </div>
//                             <div class="arcard">
//                                 <img src="jo tum.jpg" class="imgsqw" alt="photo">
//                                 <h4 class="inv">Jo tum mere ho</h4>
//                                 <p class="inv">Anuv jain</p>
//                             </div>
//                             <div class="arcard">
//                                 <img src="MAKING MEMORIES.jpg" class="imgsqw" alt="photo">
//                                 <h4 class="inv">Making Memories</h4>
//                                 <p class="inv">Karan Aujla,lkky</p>
//                             </div>
//                             <div class="arcard">
//                                 <img src="ea jawani.jpeg" class="imgsqw" alt="photo">
//                                 <h4 class="inv">Yeh Jawaani Hai Deewani</h4>
//                                 <p class="inv">Pritam</p>
//                             </div>
//                     </div>
//                 </div>
//                 <div class="libpartetion libhome">
//             <div class="library">
//                 <ul class="allflex listnone libheader border">
//                     <li class="flex " id="libgap" ><img src="library.svg" class="toplogo inv " alt="logo"><p class="inv">Your library</p> </li>
//                     <li><img src="plus.svg" class="plus inv" alt="logo"></li>
//                 </ul>
//                 <div class="libcont">

//                     <div class="libsub">
//                         <p class="libsubheading inv">Create your first playlist</p>
//                         <p class="libsubbody inv">It's easy,we will help you</p>
//                         <button id="nextPageButton" class="whitebutton button">Create playlist</button>
//                     </div>
//                     <div class="libsub">
//                         <p class="libsubheading inv">Let's find some podcasts to follow</p>
//                         <p class="libsubbody inv">We'll keep you updated on new episodes</p>
//                         <button class="whitebutton button">Browse podcasts</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="policy inv border">
//                 <div class="psmalltext ">
//                     <div>Legal</div>
//                     <div>Safety&Privacy Center</div>
//                     <div>Privacy Policy</div>
//                     <div>Cookies</div>
//                     <div>About Ads</div>
//                     <div>Accessibility</div>
//                 </div>
//                 <h5>Cookies</h5>
//                 <div class="earthcont">
                    
//                 </div>
//                 <button class=" ebutton flex"><img src="earth.svg" alt="earth" class="earth"><h3>English</h3></button>
//             </div>
//         </div>`

//         //     let left = document.createElement("div");

//         //     left.classList.add("leftslide");

//         //     // Now, append it to the body (or any other container in your HTML)
//         //     document.body.appendChild(left);

//         //     // Once the div is appended, select it and set the innerHTML
//         //     left.innerHTML = `

        

//     }
//     else {
//         //   console.log("The screen width is more than 600px");
//         document.querySelector(".headerul").innerHTML = `<li class="slogo"><img src="logo.svg" alt="logo"></li>
//                                     <li class="flex"><img src="home.svg" class="toplogo adjust home" alt="home">
//                                         <div class="bar flex">
                
//                                             <img src="search.svg" class="toplogo adjust" alt="search"> <label for="email"></label>
//                                             <input type="email" id="email" name="email" placeholder="What do you want to play?" required> <img src="lib.svg" class="toplogo adjust" alt="library"></li>
//                                             <li><button class ="signin topbutton">Sign up</button> <button class="login topbutton">Log in</button>
//                                         </div>
//                                     </li>`

//         document.querySelector(".main").innerHTML = `<div class="libpartetion libhome">
//             <div class="library">
//                 <ul class="allflex listnone libheader border">
//                     <li class="flex " id="libgap" ><img src="library.svg" class="toplogo inv " alt="logo"><p class="inv">Your library</p> </li>
//                     <li><img src="plus.svg" class="plus inv" alt="logo"></li>
//                 </ul>
//                 <div class="libcont">

//                     <div class="libsub">
//                         <p class="libsubheading inv">Create your first playlist</p>
//                         <p class="libsubbody inv">It's easy,we will help you</p>
//                         <button id="nextPageButton" class="whitebutton button">Create playlist</button>
//                     </div>
//                     <div class="libsub">
//                         <p class="libsubheading inv">Let's find some podcasts to follow</p>
//                         <p class="libsubbody inv">We'll keep you updated on new episodes</p>
//                         <button class="whitebutton button">Browse podcasts</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="policy inv border">
//                 <div class="psmalltext ">
//                     <div>Legal</div>
//                     <div>Safety&Privacy Center</div>
//                     <div>Privacy Policy</div>
//                     <div>Cookies</div>
//                     <div>About Ads</div>
//                     <div>Accessibility</div>
//                 </div>
//                 <h5>Cookies</h5>
//                 <div class="earthcont">
                    
//                 </div>
//                 <button class=" ebutton flex"><img src="earth.svg" alt="earth" class="earth"><h3>English</h3></button>
//             </div>
//         </div>
//         <div class="artist artisthome border">
//                                     <div class="arheader">
//                                         <ul class="inv allflex">
//                                             <li><h2>Popular artists</h2></li>
//                                             <li>Show all</li>
//                                         </ul>
//                                     </div>
//                                     <div class="artisttemplate">
//                                         <div class="arcard">
//                                             <img src="ab67616100005174cb6926f44f620555ba444fca.jpeg" class="imgcircle" alt="photo">
//                                             <h4 class="inv">Pritam</h4>
//                                             <p class="inv">Artist</p>
//                                         </div>
//                                         <div class="arcard">
//                                             <img src="ab67616100005174bd6fbc7d0973cc33940781ad.jpeg" class="imgcircle" alt="photo">
//                                             <h4 class="inv">Sachin-Jigar</h4>
//                                             <p class="inv">Artist</p>                </div>
//                                         <div class="arcard">
//                                             <img src="ab67616100005174b19af0ea736c6228d6eb539c.jpeg" class="imgcircle" alt="photo">
//                                             <h4 class="inv">A.R. Rahaman</h4>
//                                             <p class="inv">Artist</p>                </div>
//                                         <div class="arcard">
//                                             <img  src="ab676161000051745ba2d75eb08a2d672f9b69b7.jpeg" class=" ar imgcircle" alt="photo">
//                                             <h4 class="inv">Arijit Singh</h4>
//                                             <p class="inv">Artist</p>                </div>
//                                         <div class="arcard">
//                                             <img src="ab6761610000517490b6c3d093f9b02aad628eaf.jpeg" class="imgcircle" alt="photo">
//                                             <h4 class="inv">Vishal-Shekhar</h4>
//                                             <p class="inv">Artist</p>                </div>
//                                         <div class="arcard">
//                                             <img src="ab6761610000e5ebc40600e02356cc86f0debe84.jpeg" class="imgcircle" alt="photo">
//                                             <h4 class="inv">Atif Aslam</h4>
//                                             <p class="inv">Artist</p>                </div>
//                                     </div>
//                                     <div class="album">
//                                         <div class="arheader">
//                                             <ul class="inv allflex">
//                                                 <li><h2>Popular album and singles</h2></li>
//                                                 <li>Show all</li>
//                                             </ul>
//                                         </div>
//                                         <div class="artisttemplate">
//                                             <div class="arcard">
//                                                 <img src="glory.jpeg" class="imgsqw" alt="photo">
//                                                 <h4 class="inv">GLORY</h4>
//                                                 <p class="inv">Yo Yo Honey Singh</p>
//                                             </div>
//                                             <div class="arcard">
//                                                 <img src="patandar.jpg" class="imgsqw" alt="photo">
//                                                 <h4 class="inv">Pathamdar</h4>
//                                                 <p class="inv">Arjan Dhillon,Mxrci</p>
//                                             </div>
//                                             <div class="arcard">
//                                                 <img src="ashiqui2.jpeg" class="imgsqw" alt="photo">
//                                                 <h4 class="inv">Aashiqui 2</h4>
//                                                 <p class="inv">Mithoor,Ankit Twiari,Jeet Gannguli</p>
//                                             </div>
//                                             <div class="arcard">
//                                                 <img src="jo tum.jpg" class="imgsqw" alt="photo">
//                                                 <h4 class="inv">Jo tum mere ho</h4>
//                                                 <p class="inv">Anuv jain</p>
//                                             </div>
//                                             <div class="arcard">
//                                                 <img src="MAKING MEMORIES.jpg" class="imgsqw" alt="photo">
//                                                 <h4 class="inv">Making Memories</h4>
//                                                 <p class="inv">Karan Aujla,lkky</p>
//                                             </div>
//                                             <div class="arcard">
//                                                 <img src="ea jawani.jpeg" class="imgsqw" alt="photo">
//                                                 <h4 class="inv">Yeh Jawaani Hai Deewani</h4>
//                                                 <p class="inv">Pritam</p>
//                                             </div>
//                                     </div>
//                                     </div>`


//         document.getElementById('nextPageButton').addEventListener('click', function () {
//             window.location.href = 'playlist.html'; // Replace 'nextpage.html' with the URL of the desired page.
//         });


//     }
// }

// // Add event listener to detect changes in the media query
// mediaQuery.addEventListener('change', handleMediaQueryChange);

// // Initial check
// handleMediaQueryChange(mediaQuery);

// // Create a new div and add the class "leftslide"


// // console.log(left);
// // console.log( document.getElementsByClassName(".leftslide"));



