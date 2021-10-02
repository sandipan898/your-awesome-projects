const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const button = document.querySelector(".button");

let data;
let quotesData;

const showQuotes = () => {
	let random = Math.floor(Math.random() * data.length);
	//console.log(random);
	quotesData = data[random].text;
	quotes.innerHTML = data[random].text;
	author.innerHTML = data[random].author == null? "Anonymous" : data[random].author;
}

async function getQuotes(){
	const url = "https://type.fit/api/quotes";
	const apiData = await fetch(url);
	data = await apiData.json();
	return;
}

getQuotes().then(() => {
	showQuotes();
})
.catch((err) => {
	console.log("Sorry!!! Something went Wrong");
});


button.addEventListener("click", showQuotes);

document.querySelector(".tweet").addEventListener("click", () => {
	let tweetPost = `https://twitter.com/intent/tweet/?text=${quotesData}`;
	window.open(tweetPost);
});