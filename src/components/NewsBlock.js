import React from "react";
import "../styles/NewsBlock.css";

export default function NewsBlock() {
	return (
		<div className="news space-between">
			<div className="news__details">
				<h1 className="news__details-title">
					UK weather: Snow warning for some as mild conditions to end
				</h1>
				<p className="news__details-timestamp">5 mins ago</p>
			</div>

			<div className="news__row space-between">
				<a className="news__button" href="#" target="_blank">
					Read More
				</a>
				<div className="news__chip">BBC News</div>
			</div>
		</div>
	);
}
