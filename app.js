new Set([1,1,2,2,3,4]) // Set(4) {1,2,3,4}

let n = [...new Set("referee")].join("") // 'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 
/*
	0: {Array(3) => true}
	1: {Array(3) => false}
*/


const hasDuplicate = (arr) => new Set(arr).size !== arr.length;



const vowel = (char) => { 
	return 'aeiou'.includes(char);
}


const vowelCount = (str) => {
	const m = new Map();
	for (let char of str){
		let lowerCase = char.toLowerCase()
		if(vowel(lowerCase)){
			if(m.has(lowerCase)){
				m.set(lowerCase, m.get(lowerCase) + 1);
			} else {
				m.set(lowerCase, 1);
			}
		}
	}
	return m;
}