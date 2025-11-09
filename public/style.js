 const images = [
        "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
        "https://media.istockphoto.com/id/904172104/photo/weve-made-it-all-this-way-i-am-proud.webp?a=1&b=1&s=612x612&w=0&k=20&c=XfRJBUkSatKmlfmpJo5di5ToQ9-cvnlRypQ03CHiylg=",
         "https://images.unsplash.com/photo-1742909619691-ce7acf0a911c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwYW5kJTIwbmF0dXJlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1742909620139-fafe38f1f054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGFuZCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://media.istockphoto.com/id/606217830/photo/boat-riding-in-a-river.webp?a=1&b=1&s=612x612&w=0&k=20&c=2tilaurTPP6SMhq1ukXLZLrmimxMJh_sAQFL3gpQpEo=",
        "https://images.unsplash.com/photo-1639973549199-7e27f244acb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwYW5kJTIwYWR2ZW50dXJlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1520274582042-1cc0a67fc322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbCUyMGFuZCUyMGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
         "https://images.unsplash.com/photo-1639973549199-556244765a13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGFuZCUyMGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D",
     ];

    let index = 0;
    const div = document.querySelector('.backgroundDiv');

    function changeBackground() {
      div.style.backgroundImage =`url('${images[index]}')`;
      index = (index + 1) % images.length;
    }

    // Start the cycle
    changeBackground(); // Show first image immediately
    setInterval(changeBackground, 4000); // Repeat every 2 sec

      const sentences = [
   "Find your home, wherever you roam.",
  "Stay in spaces that tell a story.",
  "Wake up where you’ve always dreamed.",
  "Travel slow, live fully, stay beautifully.",
  "Wanderlust: Homes made for your stories."
  ];

  const el = document.getElementById("typewriter");
  let sentenceIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = sentences[sentenceIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = current.substring(0, charIndex);
    } else {
      charIndex++;
      el.textContent = current.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
      setTimeout(type, 500);
    } else {
      const speed = isDeleting ? 50 : 100;
      setTimeout(type, speed);
    }
  }

  type();
