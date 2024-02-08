import React, { useState, useEffect } from "react";
import "../styles/NewsBlock.css";
import getNews from "../requests/getNews";

export default function NewsBlock() {
	const [news, setNews] = useState({
		title: "",
		url: "",
		name: "",
		publishedAt: "",
	});
	useEffect(() => {
		async function fetchNews() {
			const response = await getNews();
			setNews(response);
		}
		console.log(news.publishedAt);
		fetchNews();
	}, []);

	return (
		<div className="news space-between">
			<div className="news__details">
				<h1 className="news__details-title"> {news.title}</h1>
				<p className="news__details-timestamp">5 mins ago</p>
			</div>

			<div className="news__row space-between">
				<a className="news__button" href={news.url} target="_blank">
					Read More
				</a>
				<div className="news__chip">{news.name}</div>
			</div>
		</div>
	);
}
