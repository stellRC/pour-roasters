import Icon from './coffeeCupTrans.png'


export default function menuPage() {


    const main = document.querySelector('.main')
    if (main.hasChildNodes()) {
        main.removeChild(main.children[0]);
      }

    

   
      const section = document.createElement('section');
      const sectionText = document.createElement('div')
      const sectionTextPara = document.createElement('p')
      const sectionImage = document.createElement('div')
  
      section.classList.add('section', 'section--home')
      sectionText.classList.add('section--home__text')
      sectionImage.classList.add('section--home__image', 'menu--img')
  
      sectionTextPara.innerHTML = 'Barista et bar aftertaste, brewed variety filter turkish breve organic. Mug french press rich doppio barista redeye cream. Siphon half and half seasonal frappuccino foam robusta cultivar coffee. So froth, aftertaste bar, saucer sugar single shot caramelization aromatic. Espresso, saucer, breve café au lait, id cultivar pumpkin spice doppio viennese frappuccino doppio.'
  
      const myIcon = new Image();
      myIcon.src = Icon;
      
      sectionImage.appendChild(myIcon)
      sectionText.appendChild(sectionTextPara)
      section.appendChild(sectionText)
      section.appendChild(sectionImage)
      main.appendChild(section)


}
