function startLoading() {
    // 1. Hide Stage 1 (Entrance and Wizard)
    document.getElementById('stage1').style.display = 'none';

    // 2. Identify both audio elements
    let s2Music = document.getElementById('music-stage2');
    let s3Music = document.getElementById('music-stage3');

    // 3. Start Stage 2 music immediately upon click
    s2Music.volume = 0.5;
    s2Music.play();

    // 4. UI Changes: Switch from Entrance to Summoning
    document.getElementById('stage1').style.display = 'none';
    document.getElementById('stage2').style.display = 'flex';
    
    // 5. Show Stage 2 (Plasma Ball & Wand)
    document.getElementById('stage2').style.display = 'flex';

    // 6. Wait 7 seconds for the summoning animation to finish
    setTimeout(function() {

        // Stop Stage 2 music
        s2Music.pause();
        s2Music.currentTime = 0; 

        // Start Stage 3 music (Looped)
        s3Music.volume = 0.4;
        s3Music.play();


        
        // 7. Hide Stage 2
        document.getElementById('stage2').style.display = 'none';
        
        // 8. Show Stage 3 (Portfolio)
        document.getElementById('stage3').style.display = 'block';
        
        // 9. Enable scrolling
        document.body.style.overflow = 'auto'; 
    }, 7000);

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    // Remove the 'active' class from the current image
    slides[currentSlide].classList.remove('active');
    
    // Move to the next image (and loop back to the first one at the end)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add the 'active' class to the new image to make it visible
    slides[currentSlide].classList.add('active');
}

// Changes the image every 4 seconds (4000 milliseconds)
setInterval(showNextSlide, 4000);
    
}


