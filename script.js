// ------ To-top knap ------ //
let mybutton = document.getElementById("topBtn"); // henter knappen

//laver scroll funktion for at definere hvornår knappen skal opstå
window.onscroll = function() {scrollFunction()}; 

//når brugeren har scrollet 20px fra toppen (scrollTop > 20) af dokumentet, skal knappen vises ("block")
function scrollFunction() { 
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else { // hvis de ikke har scroller 20px, skal den ikke vises ("none")
    mybutton.style.display = "none";
  }
}

// når brugeren klikker på knappen, scroller en til toppen (scrollTop = 0)
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// ------ Slideshow ------ //
let slideIndex = 1; // variablen slideIndex holder styr på den aktuelle slide der vises

showSlides(slideIndex); // funktionen showSlides sender slideIndex som et argument og bruger den til at vise det første slide (1)

// Frem/tilbage knapperne
function plusSlides(n) { // parameteren n repræsenterer antallet af slides den skal bevæge frem og tilbage (defineres på home.html siden)

  showSlides(slideIndex += n); // når man klikker på en af knapperne, opdateres showSlide med den "n" slideIndex værdi
}

// viser det relevante slide baseret på slideIndex værdien - tager "n" parameteren, der skal vises
function showSlides(n) {
  let i; // erklærer en variabel i - er en loop tæller
  let slides = document.getElementsByClassName("slides"); // erklærer en variabel slides - gemmer referencer til HTML-elementet "slides"

  if (n > slides.length) {slideIndex = 1} // hvis n er større end antal slides (slides.length), sættes slideIndex til 1 (første slide)

  if (n < 1) {slideIndex = slides.length} // hvis n er mindre end antal slides (slides.length), sættes slideIndex til det sidste slide (slides-length). Dette tillader loopin fra den sidste slide til den første

  // gentager hvert slide-element ved hjælp af loop og sætter "display = none", for at skjule alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // indstiller display stilen for slidesne ved at slideIndex-1 (trækker 1 fra fordi arrays er nul-baserede) sættes til block for gøre den synlig
  slides[slideIndex-1].style.display = "block";
}


// ------ Search bar - tutorials ------ //
function search_tut() {
  let input = document.getElementById('searchbar').value // henter værdien der er indtastet i vores "searchbar" og tildeler den til variabel inputtet

  input=input.toLowerCase(); // konverterer inputsne til små bogstaver

  let x = document.getElementsByClassName('tuts'); // erklærer variablen "x" som henter alle elementerne på siden 
  
  // laver et for-loop der gentager hvert element i "x"
  for (i = 0; i < x.length; i++) { // sætter loop-tælleren "i" til 0 og fortsætter så længe "i" er mindre en længden af "x" (længden = antallet af elementer på siden)

      if (!x[i].innerHTML.toLowerCase().includes(input)) { // tjekker om vores indholdet med små bogstaver i "x[i]" ikke inkluderer inputværdien. include() bestemmer om inputværdien er til stede i vores indhold 
          x[i].style.display="none"; // hvis det er true, betyder det at elementets indhold ikke matcher det man søger på og elementets dispaly sættes til "none"
      }
      else { // hvis det er false, matcher elementets inhold med det man søger på og display bliver synligt
          x[i].style.display="list-item";                 
      }
  }
}

// ------ Search bar - information ------ //
function search_udd() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('udd-info');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

// ------ Search bar - multimediedesigner ------ //
function search_mul() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('mul-info');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}