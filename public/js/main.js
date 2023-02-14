import "../css/style.css";
import { fetchRSS } from "./fetchRSS";
let data = await fetchRSS();
const dataRank = data.items; // title, pubDate, link
const rankList = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
];

for (let i = 0; i < rankList.length; i++) {
  const link = document.createElement("a");
  const linkName = document.createTextNode(`${dataRank[i].title}`);
  link.appendChild(linkName);

  let searchQuery = `https://www.google.com/search?q=${dataRank[i].title}`;
  link.setAttribute("title", `${dataRank[i].title}`);
  link.setAttribute("href", searchQuery);
  link.setAttribute("target", "_blank");
  const parentDiv = document.querySelector(`.rankKeyword.${rankList[i]}`);
  parentDiv.appendChild(link);
}

// get date
let todaysDate = 0;
let getToday = 0;
for (let i = 0; i < dataRank.length; i++) {
  const getDate = dataRank[i].pubDate.split(" ");
  const currentDate = Number(getDate[0].slice(8, 10));
  if (todaysDate < currentDate) {
    todaysDate = currentDate;
    getToday = getDate[0];
  }
}
document.querySelector(
  ".headerDate"
).innerHTML = `The latest update : ${getToday} `;
