const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
  ];
  
  function filterAdults(userArr) {
    let adult = [];
    userArr.filter((elm) => {
        if(elm.age >= 18) {
            adult.push(elm);
        }
    }) 
    return adult;
  }
  
console.log(filterAdults(users));

function mapUserNames(userArr) {
    let newArr = [];
    userArr.map((item) => {
        newArr.push(item.name);
    })
    return newArr;
}

console.log(mapUserNames(users));

function groupUsersByCity(users) {
    return users.reduce((acc, user) => {
        if (!acc[user.city]) {
          acc[user.city] = [];
        }
        acc[user.city].push(user);
        return acc;
      }, {});
}

console.log(groupUsersByCity(users));

  // filterAdults(users) => [{ id: 2, ... }, { id: 3, ... }, { id: 4, ... }]
  // mapUserNames(users) => ["Alice", "Bob", "Charlie", "Diana"]
  // groupUsersByCity(users) => {
  //   "New York": [{ id: 1, ... }, { id: 3, ... }],
  //   "Los Angeles": [{ id: 2, ... }],
  //   "Chicago": [{ id: 4, ... }]
  // }  
