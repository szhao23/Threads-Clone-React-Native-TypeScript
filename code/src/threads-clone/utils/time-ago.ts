// Helper Function
export function timeAgo(date: string): string {
  const now = new Date();
  const diffInMs = now.getTime() - new Date(date).getTime();

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return diffInSeconds + "s";
  } else if (diffInMinutes < 60) {
    return diffInMinutes + " min";
  } else if (diffInHours < 24) {
    return diffInHours + "h";
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else {
    return diffInDays + " days";
  }
}
