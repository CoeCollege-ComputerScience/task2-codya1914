
var valid = true;

function validate(element){
	//alert(element.type + ":"+element.value);
	if (element.value === ""){console.log("empty")}
	if (element.type!="submit" && !element.value){
		//alert(element.labels[0].textContent + " is required");
		element.classList.toggle("highlight", true);
		valid = false;
	}

}

document.getElementById("MailingList").onsubmit = function() {
	var result = true;
	var labelText;
	var form = document.getElementById("MailingList");
	Array.from(form.elements).forEach(validate);
	alert(valid);
	return valid;
}












// document.getElementById("MailingList").onsubmit = function() {
// 	var result = true;
// 	result = result && notBlank("fname", "First Name");
// 	result = result && notBlank("lname", "Last Name");
// 	result = result && notBlank("phone", "Phone Number");
// 	result = result && notBlank("email", "e-mail address");
// 	return result;
// }


// 	// for(i=0;i<form.elements.length;i++){
// 	// 	var labels = form.elements[i].labels;
// 	// 	var ids
// 	// 	if (labels && labels.length > 0) {
// 	// 		// An element can technically have multiple labels, but usually it's just the first one
// 	// 		alert(labels[0].textContent);
// 	// 		}
// 	// }
//
// 	return result;


// 	result = result && notBlank("fname", "First Name");
// 	result = result && notBlank("lname", "Last Name");
// 	result = result && notBlank("phone", "Phone Number");
// 	result = result && notBlank("email", "e-mail address");
// 	return result;
// }

