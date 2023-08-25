const newspaper = ['<iframe src="https://www.abc.com.py/" height="1000px" width="1000px"></iframe>', ' <iframe src="https://www.ciudad.com.ar/" height="1000px" width="1000px"></iframe>', ' <iframe src="https://www.istockphoto.com/es/fotos/mommy-vlog" height="1000px" width="1000px"></iframe>'];
// creates array for the different newspapers 
iframe = document.getElementById("iframe"); // creates variable 
var i = 0; // starting value for positioning of array
function ready() {
  iframe.innerHTML = newspaper[0]; // innerHTML is used to change or get html content. in this case it is to change. 
} 
function next() {
  i++; // adds one to the position of the array
  if (i == newspaper.length) { // if when added one, it reaches the max,
    iframe.innerHTML=newspaper[0];// it will go back to position one
    i=0;// the position must change as well
  }// if it is not the max, it will proceed as normal
  else{
  iframe.innerHTML = newspaper[i];}
}
function back() {// back is different as when it loads, you cannot go back immediately. that is why you cannot do i-- before checking if it is 0 first
  if (i == 0) {// of it is the starting page, array [0] then 
    iframe.innerHTML=newspaper[(newspaper.length)-1]; // it goes to the last item in the array (substracti  ng one as the lenght, and the array position are different by one)
    i=newspaper.length-1; // changes the array position to reflect the current page 
  }
 else{  // if it is not position 0, it will proceed as normal
  i--;// position minus 1
  iframe.innerHTML = newspaper[i];}// reflects the new position
}