const tabGroups = document.querySelectorAll('[data-tabs]');
const demoForm = document.querySelector('[data-demo-form]');
const formStatus = document.querySelector('#form-status');
const demoNameInput = document.querySelector('#demo-name');
const demoNameStatus = document.querySelector('#demo-name-status');
const floatingInput = document.querySelector('[data-floating-input]');
const floatingStatus = document.querySelector('[data-floating-status]');
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

const toggleControlledRegion = (trigger, forceState) => {
  const controls = trigger.getAttribute('aria-controls');
  const panel = controls ? document.getElementById(controls) : null;

  if (!panel) {
    return;
  }

  const currentState = trigger.getAttribute('aria-expanded') === 'true';
  const nextState = typeof forceState === 'boolean' ? forceState : !currentState;

  trigger.setAttribute('aria-expanded', String(nextState));
  panel.hidden = !nextState;
};

const closeNearestControlledRegion = (button) => {
  const dismissible = button.closest('[data-dismissible]');
  if (dismissible instanceof HTMLElement) {
    dismissible.hidden = true;
  }

  const controlledRoot = button.closest('[id]');
  if (!(controlledRoot instanceof HTMLElement)) {
    return;
  }

  controlledRoot.hidden = true;

  const trigger = document.querySelector(`[aria-controls="${controlledRoot.id}"]`);
  if (trigger instanceof HTMLButtonElement) {
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
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

if (floatingInput instanceof HTMLInputElement && floatingStatus) {
  floatingInput.addEventListener('input', () => {
    floatingStatus.textContent = floatingInput.value
      ? `Floating label active for: ${floatingInput.value}`
      : 'Start typing to keep the label floated.';
  });
}

if (buttonStatus && demoButtons.length > 0) {
  demoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      buttonStatus.textContent = `${button.textContent} activated.`;
    });
  });
}

document.querySelectorAll('[data-disclosure-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    toggleControlledRegion(button);
  });
});

document.querySelectorAll('[data-popup-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    toggleControlledRegion(button);
  });
});

document.querySelectorAll('[data-demo-dismiss]').forEach((button) => {
  button.addEventListener('click', () => {
    closeNearestControlledRegion(button);
  });
});

document.querySelectorAll('[data-cycle-badge]').forEach((button) => {
  button.addEventListener('click', () => {
    const badge = document.querySelector('[data-demo-badge]');

    if (!(badge instanceof HTMLElement)) {
      return;
    }

    const states = ['Status: Draft', 'Status: Review', 'Status: Published'];
    const currentIndex = states.indexOf(badge.textContent ?? '');
    const nextIndex = (currentIndex + 1) % states.length;
    badge.textContent = states[nextIndex];
  });
});

document.querySelectorAll('[data-group-button]').forEach((button) => {
  button.addEventListener('click', () => {
    const group = button.closest('[role="group"]');
    const status = document.querySelector('[data-group-status]');

    group?.querySelectorAll('[data-group-button]').forEach((item) => {
      item.setAttribute('aria-pressed', String(item === button));
    });

    if (status) {
      status.textContent = `Current view: ${button.textContent}.`;
    }
  });
});

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = [
    'Slide 1: Keep motion user-controlled.',
    'Slide 2: Provide explicit previous and next buttons.',
    'Slide 3: Announce the current slide in text.',
  ];
  const slide = carousel.querySelector('[data-carousel-slide]');
  const status = carousel.querySelector('[data-carousel-status]');
  const previous = carousel.querySelector('[data-carousel-previous]');
  const next = carousel.querySelector('[data-carousel-next]');
  let index = 0;

  const renderSlide = () => {
    if (slide) {
      slide.textContent = slides[index];
    }

    if (status) {
      status.textContent = `Slide ${index + 1} of ${slides.length}`;
    }
  };

  previous?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    renderSlide();
  });

  next?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    renderSlide();
  });

  renderSlide();
});

document.querySelectorAll('[data-check-item]').forEach((input) => {
  input.addEventListener('change', () => {
    const checked = Array.from(document.querySelectorAll('[data-check-item]:checked'))
      .map((item) => item.value);
    const status = document.querySelector('[data-check-status]');

    if (status) {
      status.textContent = checked.length > 0
        ? `Selected checks: ${checked.join(', ')}.`
        : 'No checks selected yet.';
    }
  });
});

document.querySelectorAll('[data-list-item]').forEach((button) => {
  button.addEventListener('click', () => {
    const status = document.querySelector('[data-list-status]');

    if (status) {
      status.textContent = `${button.textContent} selected.`;
    }
  });
});

document.querySelectorAll('[data-page-link]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-page-link]').forEach((item) => {
      if (item === button) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });

    const status = document.querySelector('[data-page-status]');
    if (status) {
      status.textContent = `Current page: ${button.textContent}.`;
    }
  });
});

const placeholderButton = document.querySelector('[data-placeholder-toggle]');
const placeholderStatus = document.querySelector('[data-placeholder-status]');
const placeholderContent = document.querySelector('[data-placeholder-content]');

if (placeholderButton && placeholderStatus && placeholderContent) {
  placeholderButton.addEventListener('click', () => {
    placeholderContent.textContent = 'Loaded content is now available.';
    placeholderContent.classList.add('cf-placeholder--loaded');
    placeholderStatus.textContent = 'Loaded content is now visible.';
  });
}

const progressButton = document.querySelector('[data-progress-step]');
const progressBar = document.querySelector('[data-progress-bar]');
const progressStatus = document.querySelector('[data-progress-status]');

if (progressButton && progressBar && progressStatus) {
  progressButton.addEventListener('click', () => {
    const current = Number(progressBar.getAttribute('aria-valuenow'));
    const next = current >= 100 ? 25 : current + 25;

    progressBar.setAttribute('aria-valuenow', String(next));
    progressBar.style.width = `${next}%`;
    progressStatus.textContent = `Progress: ${next}%.`;
  });
}

const rangeInput = document.querySelector('[data-range-input]');
const rangeStatus = document.querySelector('[data-range-status]');

if (rangeInput instanceof HTMLInputElement && rangeStatus) {
  rangeInput.addEventListener('input', () => {
    rangeStatus.textContent = `Current value: ${rangeInput.value}.`;
  });
}

document.querySelectorAll('[data-scrollspy-link]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-scrollspy-link]').forEach((item) => {
      if (item === button) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });

    const status = document.querySelector('[data-scrollspy-status]');
    if (status) {
      status.textContent = `Active section: ${button.textContent}.`;
    }
  });
});

const selectInput = document.querySelector('[data-select-input]');
const selectStatus = document.querySelector('[data-select-status]');

if (selectInput instanceof HTMLSelectElement && selectStatus) {
  selectInput.addEventListener('change', () => {
    selectStatus.textContent = selectInput.value === 'Choose one'
      ? 'Choose an option to preview the selected value.'
      : `Selected option: ${selectInput.value}.`;
  });
}

const spinnerButton = document.querySelector('[data-spinner-toggle]');
const spinner = document.querySelector('[data-spinner]');
const spinnerStatus = document.querySelector('[data-spinner-status]');

if (spinnerButton && spinner && spinnerStatus) {
  spinnerButton.addEventListener('click', () => {
    spinner.hidden = true;
    spinnerStatus.textContent = 'Loading complete.';
  });
}

const validationForm = document.querySelector('[data-validation-form]');
const validationStatus = document.querySelector('[data-validation-status]');

if (validationForm instanceof HTMLFormElement && validationStatus) {
  validationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailField = validationForm.querySelector('#validation-email');

    if (!(emailField instanceof HTMLInputElement)) {
      return;
    }

    if (!emailField.validity.valid) {
      emailField.setAttribute('aria-invalid', 'true');
      validationStatus.textContent = 'Enter a valid email address before continuing.';
      return;
    }

    emailField.removeAttribute('aria-invalid');
    validationStatus.textContent = `Validated address: ${emailField.value}.`;
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') {
    return;
  }

  document.querySelectorAll('[aria-expanded="true"]').forEach((trigger) => {
    if (trigger instanceof HTMLButtonElement) {
      toggleControlledRegion(trigger, false);
    }
  });
});
