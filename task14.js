var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
  ];

  const orderFood = (list) => {
    let countVegetarian = 0
    let countVegan = 0
    let countStandard = 0
    let result = {}

    for (let i in list) {
        if (list[i].meal === 'vegetarian') {
            countVegetarian += 1
            result.vegetarian = countVegetarian
        } else if (list[i].meal === 'vegan') {
            countVegan += 1
            result.vegan = countVegan
        } else if (list[i].meal === 'standard') {
            countStandard += 1
            result.standard = countStandard
        }
    }
            return result
    
  }

  console.log(orderFood(list1))
