let accordions = document.querySelectorAll('.accordion-title');

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener('click', e => {
    e.preventDefault();
    let nodeParent = accordions[i].parentElement;
    let secondChild = nodeParent.lastElementChild;
    if (secondChild.classList.contains('show')) {
      secondChild.classList.remove('show');
    } else {
      secondChild.classList.add('show');
    }
  });
}
