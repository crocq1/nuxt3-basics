export const Icons = {
  CHEVRON: "chevron",
  SEARCH: "search",
  USER: "user",
  SOCIAL: {
    INSTAGRAM: "instagram",
    TWITTER: "twitter",
    SOUNDCLOUD: "soundcloud",
    YOUTUBE: "youtube",
    FACEBOOK: "facebook",
    SPOTIFY: "spotify",
    APPLEMUSIC: "apple-music",
    DEEZER: "deezer",
    TIDAL: "tidal",
  },
};

export type IconsType = (typeof Icons)[keyof typeof Icons];

