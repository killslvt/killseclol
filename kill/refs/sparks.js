function createBloodSparks() {
    const numSparks = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numSparks; i++) {
        const bloodSpark = document.createElement('div');
        const bloodTrail = document.createElement('div');
        
        bloodSpark.classList.add('blood-spark');
        bloodTrail.classList.add('blood-trail');
        
        bloodSpark.style.left = `${Math.random() * window.innerWidth}px`;
        bloodTrail.style.left = `${Math.random() * window.innerWidth}px`;
        
        document.body.appendChild(bloodSpark);
        document.body.appendChild(bloodTrail);

        setTimeout(() => {
            bloodSpark.remove();
            bloodTrail.remove();
        }, 6000);
    }
}

setInterval(createBloodSparks, 1000);