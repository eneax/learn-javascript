const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // hide all tab panels
  tabPanels.forEach(panel => (panel.hidden = true));

  // mark all tabs as unselected
  // tabButtons.forEach(button => (button.ariaSelected = false));
  tabButtons.forEach(button => button.setAttribute('aria-selected', false));

  // mark the clicked tab as selected
  // e.target.ariaSelected = true;
  e.currentTarget.setAttribute('aria-selected', true);

  // find the associated tab panel and select it
  const { id } = e.currentTarget;

  /*
    ! METHOD 1
  */
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;

  /*
    ! METHOD 2 - find in the array of tabPanels
    For this method to work, we need tabPanels to be an array and not a NodeList:

      const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
    
      const tabPanel = tabPanels.find(
        panel => panel.getAttribute('aria-labelledby') === id
      );
      tabPanel.hidden = false;
  */
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
