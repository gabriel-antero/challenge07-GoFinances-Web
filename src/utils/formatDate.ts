const formatDate = (timestamp: string): string =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(timestamp));

export default formatDate;
