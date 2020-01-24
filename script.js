chrome.runtime.onInstalled.addListener(() => console.log("installed"));

const SPOTIFY_HOST = "https://open.spotify.com/track";
const SPOTIFY_APP_URI = "spotify:track:";

const domains = {
  urls: ["*://open.spotify.com/*", "*://play.spotify.com/*"]
};

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    const { url } = details;
    if (url.includes(SPOTIFY_HOST)) {
      const trackID = url.substring(
        url.lastIndexOf("/") + 1,
        url.lastIndexOf("?")
      );
      return { redirectUrl: `${SPOTIFY_APP_URI}${trackID}` };
    }
  },
  domains,
  ["blocking"]
);
