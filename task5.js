var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

  const countLanguages = (list) => {
  
    let result = {}
    for (let el of list) {
        if (result[el.language] === undefined) {
            result[el.language] = 1
        } else {
            result[el.language]++
        }
    }
    return result
}

  console.log(countLanguages(list1))

