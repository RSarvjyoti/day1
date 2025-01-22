function flatArr(arr, flatten = []) {
    arr.forEach((item) => {
        if(Array.isArray(item)) {
            flatArr(item).forEach((nestedItem) => {
                flatten.push(nestedItem);
            })
        }else{
            flatten.push(item);
        }
    })
    return flatten;
}

const nestedArray = [1, [2, 3], [4, [5, 6],[1,[8,[12,0]]]]];
console.log(flatArr(nestedArray));


function flatObject(object, parentKey = '', result = {}) {
    for (const key in object) {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;
  
      if (typeof object[key] === 'object' && object[key] !== null && !Array.isArray(object[key])) {
        flatObject(object[key], fullKey, result);
      } else {
        result[fullKey] = object[key];
      }
    }
  
    return result;
  }

const input = {
    user: {
      info: {
        name: "Alice",
        age: 25
      },
      preferences: {
        theme: "dark",
        notifications: true
      }
    },
    status: "active"
  };

  let output = flatObject(input);
  console.log(output);
  
  /*
  Expected output:
  {
    "user.info.name": "Alice",
    "user.info.age": 25,
    "user.preferences.theme": "dark",
    "user.preferences.notifications": true,
    "status": "active"
  }
  */
  