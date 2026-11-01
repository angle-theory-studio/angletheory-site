(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-nav');
  if (!toggle || !navigation) return;
  // Hiding a focused control at the breakpoint can reset activeElement to body.
  let lastFocusedElement = document.activeElement;
  document.addEventListener('focusin', event => {
    if (event.target !== document.body) lastFocusedElement = event.target;
  });
  const setOpen = (open, restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', open);
    if (restoreFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) {
      lastFocusedElement = null;
      setOpen(false);
    }
  });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', event => {
    const focusedElement = document.activeElement === document.body
      ? lastFocusedElement : document.activeElement;
    const focusMovesToMenu = !event.matches && navigation.contains(focusedElement);
    const focusMovesToNavigation = event.matches && focusedElement === toggle;
    setOpen(false);
    if (focusMovesToMenu) toggle.focus({ preventScroll: true });
    if (focusMovesToNavigation) navigation.querySelector('a')?.focus({ preventScroll: true });
  });
})();
