export const stringCut = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

export const stringFormat = str => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(' ', '');
};
