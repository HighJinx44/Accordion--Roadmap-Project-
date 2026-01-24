const accordionInfo = [
  {
    id: '1',
    title: 'What is roadmap.sh?',
    description: 'roadmap.sh is a community effort to create learning paths, guides, project ideas and other similar content to help developers grow in their careers.'
  },
  {
    id: '2',
    title: 'What are the plans for roadmap.sh?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: '3',
    title: 'How is roadmap.sh built?',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: '4',
    title: 'Can I use roadmap.sh in my team?',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    id: '5',
    title: 'How can I create custom roadmaps?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: '6',
    title: 'Is roadmap.sh really 7th most starred project on GitHub?',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

function generateAccordionHTML(clickedId = 0) {
  let accordionHTML = '';
  const AccordionContainer = document.querySelector('.js-accordion-box-container');
  accordionInfo.forEach(item => {
    let currentHTML = `
      <div data-key="${item.id}" class="accordion-box js-accordion-box">
        <div>${item.title}</div>
        <div>v</div>
      </div>`;
    if (clickedId === item.id) {
      currentHTML += `
      <div class="accordion-info">${item.description}</div>`;
    };
    accordionHTML += currentHTML;
  });
  
  AccordionContainer.innerHTML = accordionHTML;

  const accordionElements = document.querySelectorAll('.js-accordion-box');
  accordionElements.forEach(element => {
    //console.log(element.dataset.key);
    element.addEventListener('click', () => {
      generateAccordionHTML(element.dataset.key);
    });
  });

}

generateAccordionHTML();


