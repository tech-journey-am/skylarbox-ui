export * from "./media.constant";
export * from "./animations";

// Blur data URL for image placeholders
export const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAPBJREFUKFMVyVtLwmAAgOH3m2hmJwQvOuguVrIIpKv+b/f9gC5rpYZUlAXNTQPBQmszFTe1b4cvem4f8eU0FEmEilekckE4nxHIhFwuD0JD+J1r9R9yOSGOI9JfSb1xg1k7Y2OriPAdS0XBhDiJSeWKaO7x8HhPuXrKTmkX4XWulG/XCX9GTP0R42lIdnsPsVagfHSC8LtNNftwcNwe765N1TTRDZPu8x3LJEV4blNlNLBfn+i7L+zrBhXjkMlwiN1uIb47t0rTBJcX51T0A9JEUdKP+ez3mHoDxOjNUpqAdssiHA+Qi4CEDNn1AvnNIn97lYAfxKOqJwAAAABJRU5ErkJggg==";

// Loading states
export const LOADING_STATES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;
