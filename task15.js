var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];

  const findOddNames = (list) => {
    const result = []
    let sum
   for (let el in list) {
     sum = 0;
     for (let i = 0; i < list[el].firstName.length; i++) {
       sum += list[el].firstName.charCodeAt(i)
     }
     if (sum % 2) result.push(list[el])
   }
   
   return result
 }


 