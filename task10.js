var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

  const addUsername = (list) => {
    let result = []
    let date = new Date ()
    let year = date.getFullYear()
    list.forEach((el, i) => { el.username = `${list[i].firstName.toLowerCase()}${list[i].lastName.replace('.','').toLowerCase()}${year - list[i].age}`
        
    });
    
   return list
  }

  console.log(addUsername(list1))

