chrome.runtime.onInstalled.addListener(() => console.log("installed"));

const SPOTIFY_APP_URI = "spotify:";

const domains = {
  urls: ["*://open.spotify.com/*", "*://play.spotify.com/*"]
};

const convertUrl = url => {
  const trimmedUrl = url.slice(url.indexOf("/", 8), url.indexOf("?"));
  const splitURL = trimmedUrl.split(",");
  return `${SPOTIFY_APP_URI}:${splitURL[0]}:${splitURL[1]}`;
};

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    const { url } = details;
    if (domains.urls.includes(url)) {
      return { redirectUrl: convertUrl(url) };
    }
  },
  domains,
  ["blocking"]
);
