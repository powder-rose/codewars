var list1 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];

  const getFirstPython = (list) => {
    result = list.find(element => element.language === 'Python')
        return result ? `${result.firstName}, ${result.country}` : 'There will be no Python developers'

  }

  console.log(getFirstPython(list1))


