// // var add = function(a,b) {
// //     return a+b;
// // }

// // var nTimes = function(n, func) {
// //     var count = 0;
// //     var previousValue;

// //     var executeFunc = function() {
// //         if (count < n) {
// //             previousValue = func.apply(null, arguments);
// //             count++;
// //         }
// //         return previousValue;
// //     }

// //     return executeFunc;
// // }

// // var addTimes = nTimes(3, add);

// // console.log(addTimes(1,3));
// // console.log(addTimes(2,3));
// // console.log(addTimes(3,3));
// // console.log(addTimes(4,3));
// // console.log(addTimes(5,3));

// var Animal = function(species, name) {
//     var obj = Object.create(objMethods);

//     obj.species = species;
//     obj.name = name;

//     return obj;
// }

// var objMethods = {
//     makeSound: function() {

//     }
// }

// var tiger = Animal('tiger', 'tigger');
// tiger.makeSound();

var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(val) {
  // If inserting val is > than this.val, check this.right
  // If this.right is null, add val (BinarySearchTree(val)) to this.right
  // If this.right has value, run the recursive function
  // If inserting val is < than this.val, check this.left
  // If this.left is null, add val (BinarySearchTree(val)) to this.left
  // If this.right has value, run the recursive function
  let newNode = new BinarySearchTree(val);

  console.log(this.value);

  function helperFunc(node) {
    // debugger;
    if (val > this.value) {
      if (this.right === null) {
        this.right = node;
      } else {
        helperFunc.bind(this.right)(node);
      }
    } else {
      if (this.left === null) {
        this.left = node;
      } else {
        helperFunc.bind(this.left)(node);
      }
    }
  }

  helperFunc.call(this, newNode);
};

var bst = new BinarySearchTree(5);
bst.insert(1);
console.log(bst);

//which accepts a value and places it in the tree in the correct position.
BinarySearchTree.prototype.contains = function(value) {};

BinarySearchTree.prototype.depthFirstLog = function() {};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Implement a binarySearchTree class with the following properties:
// A .left property, a binary search tree (BST) where all values are lower than the current value.
// A .right property, a BST where all values are higher than the current value.
// A .insert() method, which accepts a value and places it in the tree in the correct position.
// A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
// A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
// What is the time complexity of the above functions?
// Use case: Given a list of a million numbers, write a function that takes a new number and returns the closest number in the list using your BST. Profile this against the same operation using an array.

// console.log(dan.value);
// console.log(dan.right);

//b
