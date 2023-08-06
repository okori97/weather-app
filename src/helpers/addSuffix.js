export default function addSuffix(month) {
  if (month > 3 && month < 21) return `${month}th`;
  switch (month) {
    case 1:
      return `${month}st`;
    case 2:
      return `${month}nd`;
    case 3:
      return `${month}rd`;

    default:
      return `${month}th`;
  }
}
