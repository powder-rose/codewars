var list1 = [
    { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
  ];

 const getAverageAge = (list) => {
    let result = 0
    for (let i in list) {
        result += list[i].age / list.length
        
    }
    return Math.round(result)
 }

 getAverageAge(list1)
