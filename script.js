function validateData(event) {
  event.preventDefault();
  let name = document.forms["animiForm"]["animi-name"].value;
  
  if ((/[^\w\*]/g.test(name))) {
    alert("Validate Failed")
    return false;
  } else if(name.length < 8) {
    alert("Validate Failed")
    return false;
  } else if(name.length > 15) {
    alert("Validate Failed")
    return false;
  }
  alert("Validate Success")
  return true;
}


