/** Ordered hero slideshow backgrounds in public/Background IMAGES. */
export const HERO_BACKGROUND_SLIDES = [
  encodeURI("/Background IMAGES/BACK1.jpg"),
  encodeURI("/Background IMAGES/BACK2.jpg"),
  encodeURI("/Background IMAGES/BACK3.jpg"),
  encodeURI("/Background IMAGES/BACK4.jpg"),
] as const;

export type HeroSlideStyle = {
  backgroundPosition: string;
  backgroundSize: string;
};

/** Portrait slides need top anchoring and less zoom so faces stay in frame. */
export const HERO_SLIDE_STYLES: Partial<Record<string, HeroSlideStyle>> = {
  [encodeURI("/Background IMAGES/BACK2.jpg")]: {
    backgroundPosition: "center top",
    backgroundSize: "auto 100%",
  },
  [encodeURI("/Background IMAGES/BACK4.jpg")]: {
    backgroundPosition: "center top",
    backgroundSize: "auto 100%",
  },
};

export function getHeroSlideStyle(src: string): HeroSlideStyle {
  return (
    HERO_SLIDE_STYLES[src] ?? {
      backgroundPosition: "center",
      backgroundSize: "cover",
    }
  );
}

/** Milliseconds each slide is visible before swiping to the next. */
export const HERO_SLIDE_INTERVAL_MS = 8000;

/** Swipe animation duration in milliseconds. */
export const HERO_SLIDE_TRANSITION_MS = 800;
