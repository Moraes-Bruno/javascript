/*
In this kata you will create a function that takes a list of non-negative integers
and strings and returns a new list with the strings filtered out.
*/

function filter_list(l) {
  let filter = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] == "number") {
      filter.push([l[i]]);
    }
  }

  return filter.flat();
}

let list = [1, 2, "a", "b", "123"];
console.log(filter_list(list));
