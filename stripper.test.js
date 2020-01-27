const SPOTIFY_APP_URI = "spotify:";

const convertUrl = url => {
  const trimmedUrl = url.slice(url.indexOf("/", 8) + 1, url.indexOf("?"));
  const splitURL = trimmedUrl.split("/");
  return `${SPOTIFY_APP_URI}${splitURL[0]}:${splitURL[1]}`;
};

test("track", () => {
  expect(
    convertUrl(
      "https://open.spotify.com/track/2Bc4llhjJBW77I552RgA3L?si=iDRpqgbLSsOy_RFNm_NRrQ"
    )
  ).toBe("spotify:track:2Bc4llhjJBW77I552RgA3L");
});

test("playlist", () => {
  expect(
    convertUrl(
      "https://open.spotify.com/playlist/0umncgTMeQtIcSDR7iCK4J?si=GQh9p9yrQMGeNMLvlOEmjw"
    )
  ).toBe("spotify:playlist:0umncgTMeQtIcSDR7iCK4J");
});

test("album", () => {
  expect(
    convertUrl(
      "https://open.spotify.com/album/3MATDdrpHmQCmuOcozZjDa?si=t-DDaI1cSCiGlCI6wdu3xA"
    )
  ).toBe("spotify:album:3MATDdrpHmQCmuOcozZjDa");
});
