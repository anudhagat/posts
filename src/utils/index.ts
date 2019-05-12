const arrayToObject = (array: [], fieldName: string) =>
  array.reduce((obj, item) => {
    obj[item[fieldName]] = item;
    return obj;
  }, {});

export default arrayToObject;
