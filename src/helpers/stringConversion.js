/* eslint-disable no-restricted-syntax */
const toUpperCaseFirstLetter = (title) => {
  const splitted = title.split('');
  const first = splitted[0].toUpperCase();
  const rest = [...splitted];
  rest.splice(0, 1);
  const result = [first, ...rest].join('');
  return result;
};


export { toUpperCaseFirstLetter };
