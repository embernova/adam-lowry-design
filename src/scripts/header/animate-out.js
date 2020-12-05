import {
  MAIN_BORDER_DELAY,
  MAIN_BORDER_DURATION,
  MAIN_BORDER_WIDTH_IN,
  MAIN_BORDER_WIDTH_OUT,
  MAIN_SLIDE_DURATION,
  MAIN_TRANSLATE_Y_IN,
  MAIN_TRANSLATE_Y_OUT
} from './header-options';
import anime from 'animejs';

export function animateOut() {
  const siteHeaderElement = document.getElementById('siteHeader');

  const menuElement = document.getElementById('siteMenu');
  const useBorder = window.matchMedia('(min-width: 992px)').matches;
  const menuElementInner = document.getElementById('siteMenuInner');

  const timeline = anime.timeline({
    easing: 'easeOutCirc',
  });

  const settings = {
    targets: menuElement,
    duration: MAIN_BORDER_DURATION,
    translateY: {
      value: [MAIN_TRANSLATE_Y_IN, MAIN_TRANSLATE_Y_OUT],
      duration: MAIN_SLIDE_DURATION,
      delay: useBorder ? (MAIN_SLIDE_DURATION + MAIN_BORDER_DELAY): 0
    },
    complete: () => {
      menuElement.setAttribute('hidden', '');
      siteHeaderElement.classList.remove('header__open');
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }
  };

  if (useBorder) {
    settings.borderWidth = [MAIN_BORDER_WIDTH_IN, MAIN_BORDER_WIDTH_OUT];
    settings.padding = [MAIN_BORDER_WIDTH_OUT, MAIN_BORDER_WIDTH_IN];
  }

  timeline.add(settings);

  const timeline2 = anime.timeline({
    easing: 'easeOutCirc',
  });


  const inner = {
    targets: menuElementInner,
    opacity: [1, 0],
    duration: MAIN_BORDER_DURATION,
  };

  timeline2.add(inner);
}
