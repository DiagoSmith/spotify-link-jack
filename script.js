chrome.runtime.onInstalled.addListener(() => console.log("installed"));

const SPOTIFY_HOSTS = ["https://open.spotify.com", "https://play.spotify.com"];

const domains = {
  urls: ["*://open.spotify.com/*", "*://play.spotify.com/*"]
};

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    const { url } = details;

    console.error(url);

    if (url.includes(SPOTIFY_HOSTS[0]) || url.includes(SPOTIFY_HOSTS[1])) {
      const redirectUrl = convertUrl(url);
      console.error(redirectUrl);
      return { redirectUrl: convertUrl(url) };
    }
  },
  domains,
  ["blocking"]
);
