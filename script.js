function getFormvalue() {
    //Write your code here
let first=document.queryselector('#form1 input[name="fname"]');
let last=document.queryselector('#form1 input[name="lname"]');
	let fname=first.value;
	let lname=last.value;
	alert(fname+" "+lname);

	
}
