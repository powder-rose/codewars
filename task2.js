var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  const greetDevelopers = (list) => {
    for (let obj in list) {
        list[obj].greeting = `Hi ${list[obj].firstName}, what do you like the most about ${list[obj].language}?`
    }
        return list
  }

  console.log(greetDevelopers(list1))