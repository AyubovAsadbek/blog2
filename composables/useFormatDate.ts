export function formatDate(dateString: string) {
  const date = new Date(dateString); // Parse the input date string

  // Extract day, month, and year
  const day = date.getDate().toString().padStart(2, "0"); // Ensure two digits
  const month = date.toLocaleString("en-US", { month: "long" }); // Full month name
  const year = date.getFullYear();

  // Return formatted date
  return `${day} ${month}, ${year}`;
}
