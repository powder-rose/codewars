var list1 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

  const isRubyComing = (list) => {
    
    for (let obj in list) {
        if (list[obj].language === 'Ruby') {
            return true
        }   
    }  
            return false
  }

  console.log(isRubyComing(list1))