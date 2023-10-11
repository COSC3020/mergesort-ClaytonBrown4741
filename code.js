function mergesort(array) {
	var arrayLength=array.length
	var hi=0;
	var mid=0;
	var tempVar=0;
	var counter=0;
	if (arrayLength==0)
		return array;
	for (var i = 1; i <= arrayLength - 1; i = i * 2) {
		for (var j = 0; j < arrayLength - 1; j += 2 * i) {
			hi = j + 2 * i - 1;
			if (hi > arrayLength - 1) 
				hi = arrayLength - 1;
			mid=j+i-1;
			if (mid>hi || mid > arrayLength)
				mid=hi
			if (mid<j)
				mid=j

			var a = j, b = mid + 1;
			counter=0;
			tempVar=0;

			while (a <= mid && b <= hi) {
        			if (array[a] <= array[b]) {
            				a++;
        			}
        			else {
					tempVal=array[b];
					for (var k = b; k != a; k--){
						array[k]=array[k-1]
					}
					array[a] = tempVal;
            				a++;
            				mid++;
            				b++;
        			}
    			}

        	}
    	}
    return array;
}


console.log(mergesort([10,9,8,6,8,7,6,7,2,1,5,5]));
