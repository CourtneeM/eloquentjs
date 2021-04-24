function deepEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  
  if (obj1Keys.length !== obj2Keys.length) return false;
  
  for (let i = 0; i < obj1Keys.length; i++) {
    if (obj1Keys[i] !== obj2Keys[i]) return false; 
  }
  
  if (!anyObjects(obj1) || !anyObjects(obj2)) {
    for (let i = 0; i < obj1Keys.length; i++) {
      if (obj1[obj1Keys[i]] !== obj2[obj2Keys[i]]) return false;
    }
  }
  
  for (let prop in obj1) {
    if (typeof obj1[prop] === "object" && typeof obj2[prop] === "object") {
      deepEqual(obj1[prop], obj2[prop]);
    }
  }
  
  return true;
}

function anyObjects(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "object") {
      return true; 
    }
  }
  
  return false;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
