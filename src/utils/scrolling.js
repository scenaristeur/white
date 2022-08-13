let scrollingEnabled = true;

function preventScrollingMaybe(e) {
  if (scrollingEnabled) return;
  e = e || window.event;
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.returnValue = false;
}
document.addEventListener("touchmove", preventScrollingMaybe, {
  passive: false
});

export function disableTouchScroll() {
  scrollingEnabled = false;
}
export function enableTouchScroll() {
  scrollingEnabled = true;
}
