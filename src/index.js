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

document.addEventListener('DOMContentLoaded', () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-133159807-2', { anonymize_ip: true });

  const buttons = $$('.button');
  buttons.forEach(button => {
    button.addEventListener('click', btn => {
      gtag('event', 'Click', {
        event_category: 'CTA',
        event_label: `Click ${btn.target.innerText}`,
        value: btn.target.innerText
      });
    });
  });

  const links = $$('.nav--link a');
  links.forEach(link => {
    link.addEventListener('click', l => {
      gtag('event', 'Click', {
        event_category: 'Navigation',
        event_label: `Click on ${l.target.innerText}`,
        value: l.target.innerText
      });
    });
  });

  $('.badge').addEventListener('click', badge => {
    gtag('event', 'Click', {
      event_category: 'CTA',
      event_label: `Click on badge version number`,
      value: badge.target.innerText
    });
  });
});
