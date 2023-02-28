let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #white" > Ven y conoce mi trabajo en Desarrollo de sitios web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
