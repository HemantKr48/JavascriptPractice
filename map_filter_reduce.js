const arr = [2, 4, 6, 7, 8, 9, 10, 11];

// Map:The map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
const output1 = arr.map(double);

function double(number) {
	return number * 2;
}

console.log(output1);

//We use this to write short code...
const output2 = arr.map((num) => num * 3);
console.log(output2);

//Filter:The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

const output3 = arr.filter((number) => number % 2 != 0);
console.log(output3);

// Reduce:The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

// const maximum = reduce(function (acc, curr) {
//     acc=
// })

function maxNumber(arr) {
	let number = -1;
	for (let i = 0; i < arr.length; i++) {
		if (number < arr[i]) {
			number = arr[i];
		}
	}

	return number;
}

console.log(maxNumber(arr));

const maxnumber = arr.reduce(function (acc, curr) {
	if (curr > acc) {
		acc = curr;
	}

	return acc;
}, 1);
console.log(maxnumber);

// Good example to understand
const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

 const output = input.map((num) => {
     return num.age * num.age;
})

 console.log(output);
const ans = [];
const oldest = input.reduce(function (acc, curr) {
    if (curr.age > acc) {
        acc = curr.age;
    }

    return acc;
}, 0);

const oldest1 = input.map((num) => {
    return num.age;
})

console.log(Math.min(...oldest1));

console.log(oldest1);

console.log(oldest);
ans.push({ oldest });
console.log(ans);

setTimeout(function () {
  console.log("time matters");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
})
