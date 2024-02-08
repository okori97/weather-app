function calcDaysPassed(publishedAt) {
	const currentDate = new Date();
	const publishedDate = new Date(publishedAt);
	const differenceInTime = currentDate.getTime() - publishedDate.getTime();
	const millisecondsPerDay = 1000 * 60 * 60 * 24;
	return differenceInTime / millisecondsPerDay;
}

function GetDate(date) {
	let newDate = new Date(date);
	const monthNum = newDate.getDate();
	const monthString = newDate.toLocaleString("en-US", { month: "short" });
	const day = newDate.toLocaleString("en-US", { weekday: "short" });
	return { day, monthNum, monthString };
}

export { calcDaysPassed, GetDate };
