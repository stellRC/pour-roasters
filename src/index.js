import _ from 'lodash';
import './style.css';

import './all.js'
import menuPage from './menuPage.js';
import homePage from './home.js';
import contactPage from './contact.js'


function component() {
  const content = document.createElement('section');
  const header = document.createElement('header');
  const headerTitle = document.createElement('h1')
  const navHeader = document.createElement('nav');
  const navHeaderList = document.createElement('ul');
  const navHeaderListItemOne = document.createElement('li');
  const navHeaderListItemTwo = document.createElement('li');
  const navHeaderListItemThree = document.createElement('li');
  const navFooterList = document.createElement('ul');
  const navFooterListItemOne = document.createElement('li');
  const navFooterListItemTwo = document.createElement('li');
  const shareBtn = document.createElement('a');
  const codeBtn = document.createElement('a');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  let main = document.createElement('section');
  const footer = document.createElement('footer');
  const navFooter = document.createElement('nav');

  content.setAttribute('id', 'content');

  header.classList.add('header');
  headerTitle.classList.add('.header--title')
  navHeader.classList.add('nav--header');
  navHeaderList.classList.add('nav--list');
  navHeaderListItemOne.classList.add('nav--item');
  navHeaderListItemTwo.classList.add('nav--item');
  navHeaderListItemThree.classList.add('nav--item');
  homeBtn.classList.add('btn', 'homeBtn');
  menuBtn.classList.add('btn', 'menuBtn');
  contactBtn.classList.add('btn', 'contactBtn');
  main.classList.add('main');
  footer.classList.add('footer');
  navFooter.classList.add('nav--footer');
  navFooterListItemOne.classList.add('nav--footer__item');
  navFooterListItemTwo.classList.add('nav--footer__item');
  shareBtn.classList.add('fa', 'fa-twitter');
  codeBtn.classList.add('fa', 'fa-github');
  headerTitle.innerHTML = 'Pour Roasters';
  homeBtn.innerHTML = 'Home';
  menuBtn.innerHTML = 'Menu';
  contactBtn.innerHTML = 'Contact';
  shareBtn.innerHTML = 'Tweet';
  codeBtn.innerHTML = 'Code';
  shareBtn.href = 'https://twitter.com/Yoda_bells'
  codeBtn.href = 'https://github.com/stellRC?tab=repositories'

  window.onload = homePage;
  homeBtn.onclick = homePage;
  menuBtn.onclick = menuPage;
  contactBtn.onclick = contactPage;


  header.appendChild(headerTitle)
  navHeaderListItemOne.appendChild(homeBtn);
  navHeaderList.appendChild(navHeaderListItemOne);
  navHeader.appendChild(navHeaderList);
  navHeaderListItemTwo.appendChild(menuBtn);
  navHeaderList.appendChild(navHeaderListItemTwo);
  navHeader.appendChild(navHeaderList);
  navHeaderListItemThree.appendChild(contactBtn);
  navHeaderList.appendChild(navHeaderListItemThree);
  navHeader.appendChild(navHeaderList);
  header.appendChild(navHeader);

  navFooterListItemTwo.appendChild(codeBtn)
  navFooterList.appendChild(navFooterListItemTwo)
  navFooterListItemOne.appendChild(shareBtn)
  navFooterList.appendChild(navFooterListItemOne)
  navFooter.appendChild(navFooterList)
  footer.appendChild(navFooter);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);

  return content;
}

document.body.appendChild(component());
