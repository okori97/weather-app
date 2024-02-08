import axios from "axios";

export default async function getNews() {
	let API =
		"https://newsapi.org/v2/everything?" +
		"q=UK AND rain And forecast&" +
		"apiKey=c1b72961cfd84e3d8369b9cabf3c6adf";

	let result = await axios.get(API).then((response) => {
		return response.data.articles[0];
	});

	let {
		title,
		url,
		source: { name },
		publishedAt,
	} = result;

	return { title, url, name, publishedAt };
}
