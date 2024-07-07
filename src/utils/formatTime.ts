export const formatTime = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  // const hours = date.getHours();
  // const minutes = date.getMinutes();
  // const format = hours >= 12 ? "PM" : "AM";
  // const formattedHours = hours % 12;
  // const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  // const formattedTime = `${formattedHours}:${formattedMinutes} ${format}`;
  const formattedDate = `${day}.${month}.${year}`;
  return `${formattedDate} `;
};
