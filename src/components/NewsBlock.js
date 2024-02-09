import React, { useState, useEffect } from "react";
import "../styles/NewsBlock.css";
import getNews from "../requests/getNews";
import { calcDaysPassed } from "../helpers/dateUtils";

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
		fetchNews();
	}, []);

	const daysPassed = calcDaysPassed(news.publishedAt);
	return (
		<div className="news space-between">
			<div className="news__details">
				<h1 className="news__details-title"> {news.title}</h1>
				<p className="news__details-timestamp">
					{Math.floor(daysPassed)} days ago
				</p>
			</div>

			<div className="news__row space-between">
				<a
					className="news__button"
					href={news.url}
					target="_blank"
					rel="noreferrer"
				>
					Read More
				</a>
				<div className="news__chip">{news.name}</div>
			</div>
		</div>
	);
}
