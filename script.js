function validateData(event) {
  event.preventDefault();
  let name = document.forms["animiForm"]["animi-name"].value;
  let errmsg = document.getElementById('errormsg');
  
  if ((/[^\w\*]/g.test(name))) {
    errmsg.innerHTML = "Special Characters are not allowed";
    return false;
  } else if(name.length === 0){
    errmsg.innerHTML = "Name should not be empty";
    return false;
  } else if(name.length < 8) {
    errmsg.innerHTML = "Name should have minimum 8 character";
    return false;
  } else if(name.length > 15) {
    errmsg.innerHTML = "Name should have maximum of 15 character only";
    return false;
  }
  errmsg.innerHTML = "";
  return true;
}


