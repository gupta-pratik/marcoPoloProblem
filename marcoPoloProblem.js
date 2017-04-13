
// This function solves the Marco Polo Problem
// Input is number till which you want to print values
// Returns a single string which performs thee logic of Marco Polo.
function marcoPoloFunc(number){
	var retVal='';
	for(var i=1; i<=number;i++){
		if(i%4==0 && i%7==0) // checks if number is divisible by both 4 and 7
			retVal+='marcopolo'
		else if(i%4==0)  // checks if number is divisible by 4
			retVal+='marco'
		else if(i%7==0) // checks if number is divisible by 7
			retVal+='polo'
		else
			retVal+=i;
		retVal+=',';
		}
		retVal =retVal.substring(0,retVal.length-1);
		console.log(retVal); // print to console.
	return retVal; // returns the single string with required output
}