export default function GetDate(date) {
  let newDate = new Date(date);
  const monthNum = newDate.getDate();
  const monthString = newDate.toLocaleString("en-US", { month: "short" });
  const day = newDate.toLocaleString("en-US", { weekday: "short" });
  return { day, monthNum, monthString };
}
