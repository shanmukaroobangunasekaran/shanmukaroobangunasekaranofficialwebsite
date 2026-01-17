function startLoading() {
    // 1. Hide Stage 1 (Entrance and Wizard)
    document.getElementById('stage1').style.display = 'none';
    
    // 2. Show Stage 2 (Plasma Ball & Wand)
    document.getElementById('stage2').style.display = 'flex';

    // 3. Wait 7 seconds for the summoning animation to finish
    setTimeout(function() {
        // 4. Hide Stage 2
        document.getElementById('stage2').style.display = 'none';
        
        // 5. Show Stage 3 (Portfolio)
        document.getElementById('stage3').style.display = 'block';
        
        // 6. Enable scrolling
        document.body.style.overflow = 'auto'; 
    }, 7000);
}
