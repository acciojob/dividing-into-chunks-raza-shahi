const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const {result,current,sum} = arr.reduce((acc,val)=>{
	if(acc.sum+val <=n){
		acc.current.push(val);
		acc.sum += val;
	}else{
		acc.result.push(acc.current);
		acc.current = [val];
		acc.sum = val;
	}
		return acc;
	},{result:[],current:[],sum:0;});
	if (current.length>0) {
		result.push(current);
	}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
