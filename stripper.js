const SPOTIFY_APP_URI = "spotify:";

// const MEDIA_TYPES = ["track", "album", "playlist"];

// const urlIsHot = (url) => {
//   return url.includes("");
// };

const isUrlEmbedded = (url) => url.includes("embed");

const convertUrl = (url) => {
  if (isUrlEmbedded(url)) return;
  const trimmedUrl = url.slice(url.indexOf("/", 8) + 1, url.indexOf("?"));
  const splitURL = trimmedUrl.split("/");
  return `${SPOTIFY_APP_URI}${splitURL[0]}:${splitURL[1]}`;
};
