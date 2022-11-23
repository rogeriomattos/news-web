export default (dateString: string) => {
  const date = new Date(dateString);

  return date.toLocaleDateString('pt-br');
} 