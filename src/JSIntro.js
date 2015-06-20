
exports.Sum = function(num1, num2){
return (num1+num2);
}

exports.SumOfArray = function(arrayOfNums){
var i=0;
var sum=0;
for(i=0;i<arrayOfNums.length;i++)
  sum=sum+arrayOfNums[i];
return sum}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
var i,j,sum=0;
for(i=0;i<arrayOfNums.length;i++)
   {for(j=0;j<i;j++)
      {if(arrayOfNums[i]==arrayOfNums[j])
         {
		 break;}
	   }
	   if(i==j)
	     sum=sum+arrayOfNums[i];
   }
	return sum;
}

exports.ReverseString = function(str){
var rev="";
var j=(str.length-1);

for(var i=0;i<str.length;i++,j--)
  rev=rev+str[j];

return rev;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
var rev=new Array();
var temp;
var j=arrayOfStrings.length-1;
 for(var i=0;i<(arrayOfStrings.length/2);i++,j--)
 {temp=arrayOfStrings[i];
  rev[i]=arrayOfStrings[j];
  rev[j]=temp;
 }
  	return rev;
}