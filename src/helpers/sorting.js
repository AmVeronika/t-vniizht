
const buildFilter = (filter) => {
	const query = {};
	for (const keys in filter) {
		if (Array.isArray(filter[keys]) && filter[keys].length > 0) {
			query[keys] = filter[keys];
		}
	}
	return query;
};

const filterData = (data, query) => {
	let filteredData = []
	if(query !== '') {
		data.forEach((obj) => {
			let flag = false;
			Object.values(obj).forEach((value) =>{
				if(String(value).includes(query)) {
					flag = true;
				}
			})
			if (flag) {
				filteredData.push(obj);
				flag = false;
			}
		})
	} else filteredData = [...data]

	// 	= data.filter((item) => {
	// 	Object.values(item).forEach((el)=> {
	// 		if (el === undefined || !String(el).includes(query)) {
	// 			return false;
	// 		} 		return true;
	// 	})
	//
	// });
	return filteredData;
};

const removeDuplicates = (data) => {
 const filteredData = new Set(data);
 return filteredData;
};

const sortingTheTable = async (array, name, graduation) => {
  await array.forEach((el, index) => {
    // Проверка, если значение может быть числом, то преобразовываем строку в число
    isNumeric(el[name]) ? array[index][name] = +el[name] : '';
  });
  await array.sort(byField(name, graduation));
	return array;
};

// eslint-disable-next-line no-restricted-globals
const isNumeric = (name) => !isNaN(parseFloat(name)) && isFinite(name);

const byField = (name, graduation) => {
  if (graduation) {
    return (a, b) => (a[name] > b[name] ? 1 : -1);
  }
  return (a, b) => (a[name] < b[name] ? 1 : -1);
};

export {
 buildFilter, filterData, removeDuplicates, sortingTheTable,
};
