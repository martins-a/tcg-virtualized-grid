
export const splitArrayInSubarrays = (array, chunkSize): any[] => {
  let response = [];
  var i,j,temparray,chunk = chunkSize;
  for (i=0,j=array.length; i<j; i+=chunk) {
      temparray = array.slice(i,i+chunk);
      response.push(temparray);
  }

  return response;
}
