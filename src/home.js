import Icon from './coffeeBeansTransp.png';

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

    sectionTextPara.innerHTML = 'Java chicory, black doppio and roast cream mocha turkish strong. Blue mountain doppio black, chicory, sugar medium, single shot a wings blue mountain turkish. Viennese et, cinnamon, turkish lungo qui cappuccino kopi-luwak.'

    const myIcon = new Image();
    myIcon.src = Icon;
    
    sectionImage.appendChild(myIcon)
    sectionText.appendChild(sectionTextPara)
    section.appendChild(sectionText)
    section.appendChild(sectionImage)
    main.appendChild(section)




}
