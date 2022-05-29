import Icon from './coffeeContactTrans.png'
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
      sectionImage.classList.add('section--home__image')
  
      sectionTextPara.innerHTML = 'Fair trade siphon crema extra, viennese qui, foam viennese siphon est so caramelization. Carajillo sit ut extra chicory aged instant crema chicory. '
  
      const myIcon = new Image();
      myIcon.src = Icon;
      
      sectionImage.appendChild(myIcon)
      sectionText.appendChild(sectionTextPara)
      section.appendChild(sectionText)
      section.appendChild(sectionImage)
      main.appendChild(section)




}