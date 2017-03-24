// Project: Deep Comparison
// Not functioning properly yet, not properly checking properties/values

// when comparing two objects with == operator the identity
// (location in memory) are compared not the actual properties
// or their values

// the deep comparison function will check equality of object values


// Project Details:

// Deep comparison

// The == operator compares objects by identity. But sometimes,
// you would prefer to compare the values of their actual properties.

// Write a function, deepEqual, that takes two values and returns
// true only if they are the same value or are objects with the same
// properties whose values are also equal when compared with a recursive
// call to deepEqual.

// To find out whether to compare two things by identity (use
// the === operator for that) or by looking at their properties, you
// can use the typeof operator. If it produces "object" for both values,
// you should do a deep comparison. But you have to take one silly
// exception into account: by a historical accident, typeof null also
// produces "object".

// // Your code here.

// var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
// Your test for whether you are dealing with a real object will
// look something like typeof x == "object" && x != null. Be careful
// to compare properties only when both arguments are objects. In all
// other cases you can just immediately return the result of applying ===.

// Use a for/in loop to go over the properties. You need to test
// whether both objects have the same set of property names and whether
// those properties have identical values. The first test can be done
// by counting the properties in both objects and returning false if
// the numbers of properties are different. If they’re the same, then
// go over the properties of one object, and for each of them, verify
// that the other object also has the property. The values of the
// properties are compared by a recursive call to deepEqual.

// Returning the correct value from the function is best done by
// immediately returning false when a mismatch is noticed and returning
// true at the end of the function.


function deepEqual(item1, item2) {
  if (((typeof item1 === "object") && (item1 != null)) && ((typeof item2 === "object") && (item2 != null))) {
    console.log("1");
    if ((Object.keys(item1).length) === (Object.keys(item2).length)) {
      console.log("2");
      var propertyCount = Object.keys(item1).length;
      for (var i = 0; i < propertyCount; i++) {
        for (var j = 0; j < propertyCount; j++) {
          console.log("i = " + i + "\nj = " + j);
          console.log((Object.keys(item1)[i]) + " / " + (Object.keys(item2)[j]))
          // if ((Object.keys(item1)[i]) === (Object.keys(item2)[j])) {
          //   if ((item1[Object.keys(item1)[i]]) === (item2[Object.keys(item2)[j]])) {
          //     return false;
          //   }
          // } else {
          //   return false;
          // }
          if ((Object.keys(item1)[i]) === (Object.keys(item2)[j])) {

          }
          deepEqual(i, j);
        }
      }
    } else {
      return false;
    }
  } else {
    return item1 === item2;
  }
  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true




