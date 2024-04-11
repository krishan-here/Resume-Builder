export function dateFormatter(dateString) {
  const date = new Date(`${dateString}-01`); // Append "-01" for day to make it a valid date
  const formattedDate = date.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  });
  return formattedDate;
}
