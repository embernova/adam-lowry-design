export function getScrollbarWidth() {
  const element = document.createElement('div');
  element.setAttribute('style', 'width: calc(100vw - 100%); position: relative; z-index: 10000');
  document.body.appendChild(element);
  const width = window.getComputedStyle(element).width;
  document.body.removeChild(element);

  return width;
}
