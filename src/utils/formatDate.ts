const formatDate = (date: string): string => {
  const parsedDate = new Date(date);
  return Intl.DateTimeFormat('pt-br').format(parsedDate);
};
export default formatDate;
