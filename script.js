// Validate email

let email = document.querySelector(".email");
email.addEventListener('blur', handleBlurEmail);

function handleBlurEmail() {
  let re = new RegExp(/.+@.+\..+/);
  if (email.value!='' && re.test(email.value)) {
    makeFieldGreen(email);
    makeLabelBlue(email);
  } else if (email.value == '') {
    makeFieldGrey(email);
    makeLabelWhite(email);
  } else {
    makeFieldRed(email);
    makeLabelRed(email);
    console.log("Invalid email");
  }
}

// Validate username

let username = document.querySelector(".username");
username.addEventListener('blur', handleBlurUsername);

function handleBlurUsername() {
  let re = new RegExp(/^[a-zA-Z0-9]{3,20}$/);
  if (username.value!='' && (!re.test(username.value))) {
    makeFieldRed(username);
    makeLabelRed(username);
    console.log("Username should be 3-20 characters long");
  } else if (username.value == '') {
    makeFieldGrey(username);
    makeLabelWhite(username);
  } else {
    makeFieldGreen(username);
    makeLabelBlue(username);
  }
}

// Validate passwords

let passwordOne = document.querySelector(".password-1");
let passwordTwo = document.querySelector(".password-2");
passwordOne.addEventListener('blur', handleBlurPasswords);
passwordTwo.addEventListener('blur', handleBlurPasswords);

function handleBlurPasswords() {
  let re = new RegExp(/^[a-zA-Z0-9]{6,30}$/);
  if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value!=passwordTwo.value) {
    makeFieldRed(passwordOne);
    makeFieldRed(passwordTwo);
    makeLabelRed(passwordOne);
    makeLabelRed(passwordTwo);
    console.log("Passwords don't match");
  } else if (!re.test(passwordOne.value) && passwordOne.value!='' && passwordTwo.value!='') {
    makeFieldRed(passwordOne);
    makeFieldRed(passwordTwo);
    makeLabelRed(passwordOne);
    makeLabelRed(passwordTwo);
    console.log("Password should be 6-30 characters long");
  } else if (passwordOne.value!='' && passwordTwo.value!='' && passwordOne.value==passwordTwo.value) {
    makeFieldGreen(passwordOne);
    makeFieldGreen(passwordTwo);
    makeLabelBlue(passwordOne);
    makeLabelBlue(passwordTwo);
    console.log("Passwords match");
  } else if ((passwordOne.value=='' && passwordTwo.value!='') || (passwordOne.value!='' && passwordTwo.value=='')) {
    makeFieldGrey(passwordOne);
    makeFieldGrey(passwordTwo);
    makeLabelWhite(passwordOne);
    makeLabelWhite(passwordTwo);
  }
}

// Float labels

const handleFocusFloats = (e) => {
  const target = e.target;
  target.parentNode.classList.add('active');
};

const handleBlurFloats = (e) => {
  const target = e.target;
  if(!target.value) {
    target.parentNode.classList.remove('active');
  }  
};

const floatContainers = document.querySelectorAll('.float-container');
floatContainers.forEach((floatContainer) => {
  bindEventsForFloats(floatContainer);
});

function bindEventsForFloats(element) {
  const floatField = element.querySelector('input');
  floatField.addEventListener('focus', handleFocusFloats);
  floatField.addEventListener('blur', handleBlurFloats);
}

function makeFieldGreen(field) {
  field.parentNode.classList.remove("invalid")
  field.parentNode.classList.add("valid")
}

function makeFieldRed(field) {
  field.parentNode.classList.remove("valid")
  field.parentNode.classList.add("invalid")
}

function makeFieldGrey(field) {
  field.parentNode.classList.remove("invalid")
  field.parentNode.classList.remove("valid")
}

function makeLabelBlue(field) {
  label = field.parentNode.querySelector('label');
  label.classList.remove('invalid');
  label.classList.add('active');
}

function makeLabelRed(field) {
  label = field.parentNode.querySelector('label');
  label.classList.remove('active');
  label.classList.add('invalid');
}

function makeLabelWhite(field) {
  label = field.parentNode.querySelector('label');
  label.classList.remove('active');
  label.classList.remove('invalid');
}