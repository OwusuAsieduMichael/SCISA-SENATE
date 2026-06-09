/** Ordered hero slideshow backgrounds in public/Background IMAGES. */
export const HERO_BACKGROUND_SLIDES = [
  encodeURI("/Background IMAGES/BACK1.jpg"),
  encodeURI("/Background IMAGES/BACK2.jpg"),
  encodeURI("/Background IMAGES/BACK3.jpg"),
  encodeURI("/Background IMAGES/BACK4.jpg"),
] as const;

/** Milliseconds each slide is visible before swiping to the next. */
export const HERO_SLIDE_INTERVAL_MS = 5000;

/** Swipe animation duration in milliseconds. */
export const HERO_SLIDE_TRANSITION_MS = 800;
