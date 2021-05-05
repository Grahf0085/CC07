export function getHouses(arr) {

  return arr.map(item => item.house);

}

export function updateNumbers(obj) {

  let newArray = Object.entries(obj).map(([key, value]) => `${key}: ${value}`);

  return newArray;

}

export function totalCharacters(arr) {

  let total = 0;

  for (let item of arr) {
    if (item.name.length !== 0) {
      total = total + 1;
    }
    if (item.spouse !== null) {
      total = total + 1;
    }
    total = total + item.children.length;
  }

  return total;
}

export function hasChildrenEntries(arr, character) {
  for (let item of arr) {
    let score = 0;
    Object.entries(item).forEach(([key, value]) => {
      if ((key === 'name') && (value === character)) {
        score++;
      }
      if ((key === 'children') && (value.length > 0) && (score === 1)) {
        score++;
      }
    });
    if (score > 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

export function sortByChildren(arr) {

  arr.sort((a, b) => {

    let x = a.children.length - b.children.length;
    if (x !== 0) {
      return x;
    } else {
      return a.name > b.name;
    }
  }
  );
  return arr;

}