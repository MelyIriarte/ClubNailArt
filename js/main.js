const cards = document.querySelector(".box")

function createCard([brandName, info, img, moreInfo]) {
    let code = ` 
   
    <div class="flip-box">


    <div class="flip-box-front text-center" style="background-image: url(${img})">
          <div class="inner color-white">
             <h3 class="flip-box-header">${brandName}</h3>
             <p> ${info} </p>
             <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img">
          </div>
       </div>
      <div class="flip-box-back text-center" style="background-image: url(${img})">
           <div class="inner color-white">
                <h3 class="flip-box-header">${brandName}</h3>
                <p>${moreInfo}</p>
                <button class="flip-box-button">Mas Info</button>
          </div>
      
</div>
      </div>
    
    `;
    cards.innerHTML += code;
}

let card1 = ["Esculpidas", "Extensiones que se construyen a partir de la uña natural con material acrílico o gel", "img/c.png", "Estas permiten restaurar y reconstruir uñas mordidas o simplemente, lucir uñas más largas."]
let card2 = ["Kapping", "Consiste en aplicar una fina capa de acrílico o gel fortificador sobre la uña que actúa como una barrera protectora.", "img/kapping1.png", "Este baño no alarga la uña natural sino que acompaña el crecimiento de la misma y dura hasta 20 días.", ]
let card3 = ["Esmaltado Semipermanente", "Secado inmediato y de larga duración que mantiene un resultado reluciente.", "img/semi3.png", "Este efecto se consigue con la aplicación de esmaltes específicos y el secado de las uñas en una luz UV o LED. Se vean perfectas durante 15 días aprox."]
let card4 = ["Press On", "Las uñas Press On son confeccionadas a la medida y gusto de cada cliente, y están hechas de un material similar al acrílico.", "img/press5.png", "Podes colocarlas fácilmente en casa, usas un poco de pegamento, se aplican, presionas y listo."]

createCard(card1);
createCard(card2);
createCard(card3);
createCard(card4);