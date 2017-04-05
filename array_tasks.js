var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = []
		for(element of arr1){
			newArray.push(element)
		}
		for(element of arr2){
			newArray.push(element)
		}
		return newArray
	},

	insertAt: function (arr, itemToAdd, index) {
		var newArray = []
		var resultArray = this.concat(newArray, arr)
		resultArray.splice(index, 0, itemToAdd)
		return resultArray
	},

	square: function (arr) {
		var newArray = []
		for(element of arr)
			newArray.push(element * element)
		return newArray
		
	},

	sum: function (arr) {
		var total = 0
		for(element of arr)
			total = total + element
		return total
	},

	findDuplicates: function (arr) {
		var newArray = []
		var sortedArray = arr.sort()
		for(var i = 0; i < arr.length; i++){
			if(arr[i] === arr [i + 1]){
				newArray.push(arr[i])
			}
		}
			for(var i = 0; i < newArray.length; i++){
				if(newArray[i] === newArray[i-1]){
					newArray.splice(i, 1);
				}
			}
			return newArray;


		
		
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = []
		for(element of arr){
			if(element !== valueToRemove){
				newArray.push(element)
			}
		}
	return newArray
		
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = []
		for(var i=0; i < arr.length; i++){
			if(arr[i] === itemToFind){
				newArray.push(i)
			}
		}
	return newArray
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var total = 0
		for(element of arr){
			if(element % 2 === 0){
				total = total + element * element
			}
		}
		return total
	}	

}

module.exports = arrayTasks
