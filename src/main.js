import './styles/index.css';

const tabGroups = document.querySelectorAll('[data-tabs]');
const demoForm = document.querySelector('[data-demo-form]');
const formStatus = document.querySelector('#form-status');
const demoNameInput = document.querySelector('#demo-name');
const demoNameStatus = document.querySelector('#demo-name-status');
const buttonStatus = document.querySelector('[data-button-status]');
const demoButtons = document.querySelectorAll('[data-demo-button]');

const activateTab = (tabs, nextTab, shouldFocus = true) => {
  tabs.forEach((tab) => {
    const isActive = tab === nextTab;
    const panel = document.getElementById(tab.getAttribute('aria-controls'));

    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;

    if (panel) {
      panel.hidden = !isActive;
    }
  });

  if (shouldFocus) {
    nextTab.focus();
  }
};

tabGroups.forEach((tabGroup) => {
  const tabs = Array.from(tabGroup.querySelectorAll('[role="tab"]'));
  const panels = Array.from(tabGroup.querySelectorAll('[role="tabpanel"]'));
  const currentTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0];

  if (!currentTab) {
    return;
  }

  activateTab(tabs, currentTab, false);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      activateTab(tabs, tab);
    });

    tab.addEventListener('keydown', (event) => {
      const isNext = event.key === 'ArrowRight';
      const isPrevious = event.key === 'ArrowLeft';
      const isHome = event.key === 'Home';
      const isEnd = event.key === 'End';

      if (!isNext && !isPrevious && !isHome && !isEnd) {
        return;
      }

      event.preventDefault();

      if (isHome) {
        activateTab(tabs, tabs[0]);
        return;
      }

      if (isEnd) {
        activateTab(tabs, tabs[tabs.length - 1]);
        return;
      }

      const direction = isNext ? 1 : -1;
      const nextIndex = (index + direction + tabs.length) % tabs.length;
      activateTab(tabs, tabs[nextIndex]);
    });
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== currentTab.getAttribute('aria-controls');
  });
});

if (demoForm && formStatus) {
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = demoForm.querySelector('#email');

    if (!(emailInput instanceof HTMLInputElement)) {
      return;
    }

    if (!emailInput.validity.valid) {
      formStatus.textContent = 'Enter a valid email address before submitting.';
      return;
    }

    formStatus.textContent = `Demo subscription captured for ${emailInput.value}.`;
    demoForm.reset();
  });
}

if (demoNameInput instanceof HTMLInputElement && demoNameStatus) {
  demoNameInput.addEventListener('input', () => {
    demoNameStatus.textContent = demoNameInput.value
      ? `Preview value: ${demoNameInput.value}`
      : 'Start typing to see the input event update.';
  });
}

if (buttonStatus && demoButtons.length > 0) {
  demoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      buttonStatus.textContent = `${button.textContent} activated.`;
    });
  });
}
