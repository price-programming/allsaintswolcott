const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.main-nav');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navigation.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}
