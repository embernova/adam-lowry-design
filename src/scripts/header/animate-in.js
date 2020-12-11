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
import { getScrollbarWidth } from '../scrollbar-width';

export function animateIn() {
  const siteHeaderElement = document.getElementById('siteHeader');

  const menuElement = document.getElementById('siteMenu');
  const menuElementInner = document.getElementById('siteMenuInner');
  const backgroundImageElement = document.getElementById('headerBackgroundImage');

  document.body.style.paddingRight = getScrollbarWidth();
  document.body.style.overflow = 'hidden';

  menuElement.removeAttribute('hidden');
  siteHeaderElement.classList.add('header__open');

  const useBorder = window.matchMedia('(min-width: 992px)').matches;

  const timeline = anime.timeline({
    easing: 'easeOutCirc',
  });

  const settings = {
    targets: menuElement,
    translateY: [MAIN_TRANSLATE_Y_OUT, MAIN_TRANSLATE_Y_IN],
    duration: MAIN_SLIDE_DURATION,
  };

  if (useBorder) {
    settings.borderWidth = {
      value: [MAIN_BORDER_WIDTH_OUT, MAIN_BORDER_WIDTH_IN],
      duration: MAIN_BORDER_DURATION,
      delay: MAIN_SLIDE_DURATION + MAIN_BORDER_DELAY
    };
    settings.padding = {
      value: [MAIN_BORDER_WIDTH_IN, MAIN_BORDER_WIDTH_OUT],
      duration: MAIN_BORDER_DURATION,
      delay: MAIN_SLIDE_DURATION + MAIN_BORDER_DELAY
    };
  }

  timeline.add(settings);


  const timeline2 = anime.timeline({
    easing: 'easeOutCirc',
  });

  const inner = {
    targets: [menuElementInner, backgroundImageElement],
    opacity: [0, 1],
    duration: MAIN_BORDER_DURATION,
    delay: MAIN_SLIDE_DURATION + MAIN_BORDER_DELAY
  };

  timeline2.add(inner);
}
