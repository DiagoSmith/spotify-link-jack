const SPOTIFY_APP_URI = "spotify:";

const convertUrl = url => {
  const trimmedUrl = url.slice(url.indexOf("/", 8) + 1, url.indexOf("?"));
  const splitURL = trimmedUrl.split("/");
  return `${SPOTIFY_APP_URI}${splitURL[0]}:${splitURL[1]}`;
};
