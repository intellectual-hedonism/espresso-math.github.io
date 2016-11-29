// decimal to array of bits in boolean
function dec2array(dec_num){
	
	// array of bits in boolean
	var arr = [];

	// to string
	var base2 = (dec_num).toString(2);

	// iterate string
	for(var j=0;j<base2.length;j++){
		arr.push(boolean(int(base2[j])));
	}

	arr_len = arr.length;
	// prepend zeros
	for(var j=0;j<8-arr_len;j++){
		arr.unshift(false);
	}

	return arr;
}

function array2dec(arr){
	var dec = 0;

	for(var i=arr.length-1;i>=0;i--){
		dec += int(arr[i]) * pow(2,arr.length-i-1);
	}

	return dec;
}

function array2string(arr){
	var arr_str = '';
	for(var i=0;i<arr.length;i++){
		arr_str += str(int(arr[i]));
	}
	return arr_str;
}

function matrix(rows, cols, defaultValue){

  var arr = [];

  // Creates all lines:
  for(var i=0; i < rows; i++){

      // Creates an empty line
      arr.push([]);

      // Adds cols to the empty line:
      arr[i].push( new Array(cols));

      for(var j=0; j < cols; j++){
        // Initializes:
        arr[i][j] = defaultValue;
      }
  }

  return arr;
}