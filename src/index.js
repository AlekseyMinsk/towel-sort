
module.exports = function towelSort (matrix) {
  var answer = [];
  if(matrix === undefined) {
  	return answer;
  }
  var array = matrix.map((i, index) => {
  	if(!(index%2)) {
  		return i;
  	} else {
  		return i.reverse();
  	}
  })

  array.forEach(i => {
  	i.forEach(item =>{
  		answer.push(item);
  	})
  })
  return answer;
}
