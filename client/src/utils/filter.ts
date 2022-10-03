export default (
  arr: { [key: string]: string }[],
  key: string,
  condition: string,
  value: string
) => {
  switch (condition) {
    case 'содержит':
      return arr.filter((obj) => obj[key].includes(value));
      break;
    case '=':
      return arr.filter((obj) => obj[key] === value);
    case '>':
    case '<':
      const valNum = parseInt(value);
      if (isNaN(valNum)) return;
      return arr.filter((obj) => {
        const num = parseInt(obj[key]);
        if (isNaN(num)) return;
        if (condition === '>' && num > valNum) {
          return obj;
        } else if (condition === '<' && num < valNum) {
          return obj;
        }
      });
    default:
      break;
  }
};
