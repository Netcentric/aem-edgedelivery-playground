import { decorateButtons } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const titles = block.querySelectorAll('h1, h2, h3, h4, h5, h6');
  [...titles].forEach(title => {
    title.classList.add('hero__title');
  });
  block.classList.add('hero__block');
  console.log('hero block decorated', { block: block.children});
  [...block.children].forEach(child => {
    const deepestChild = child.querySelector('.hero__title');
    if (deepestChild) {
      child.classList.add('hero__title--wrapper');
    } else {
      const content = child.querySelector(':scope > div');
      content.classList.add('hero__content');
      const textContent = document.createElement('p');
      textContent.innerHTML = content.innerHTML;
      content.innerHTML = '';
      content.appendChild(textContent);
      child.classList.add('hero__content--wrapper');
      const buttons = child.querySelectorAll('strong');
      const buttonContainer = document.createElement('p');
      console.log('child', {child, content});
    }
  });
}
