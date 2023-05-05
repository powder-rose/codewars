var list1 = [
    // { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

const countDevelopers = (list) => {
    let count = 0
        for (value in list) {
            if (list[value].continent === 'Europe' && list[value].language === 'JavaScript') {
        count += 1  
    }
}
 return count
}

countDevelopers(list1)