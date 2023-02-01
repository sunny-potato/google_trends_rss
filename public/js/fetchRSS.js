export async function fetchRSS() {
  //RSS URL from google trends
  const rss_url =
    "https://trends.google.com/trends/trendingsearches/daily/rss?geo=NO";

  // convert RSS into JSON
  // https://rss2json.com/#rss_url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fgifs.rss

  const rss_json = `https://api.rss2json.com/v1/api.json?rss_url=${rss_url}`;

  try {
    const response = await fetch(rss_json); // fetch return promise
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error : ", error);
  }
}
