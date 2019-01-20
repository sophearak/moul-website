const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const platforms = $$('.platform');
const platformContent = $('.tab--content');

platforms.forEach(platform => {
  platform.addEventListener('click', element => {
    platforms.forEach(tab => {
      tab.classList.remove('active');
    });

    element.target.classList.add('active');

    platformContent.classList.remove('macOS');
    platformContent.classList.remove('Linux');
    platformContent.classList.remove('Windows');

    switch (element.target.getAttribute('data-platform')) {
      case 'macOS':
        platformContent.classList.add('macOS');
        break;
      case 'Linux':
        platformContent.classList.add('Linux');
        break;
      case 'Windows':
        platformContent.classList.add('Windows');
        break;
      default:
        break;
    }
  });
});
