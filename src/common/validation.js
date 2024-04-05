export function validateName(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return "Name is necessary.";
  } else if (trimmedValue.length < 3) {
    return "Name should be at least 3 characters long.";
  } else if (trimmedValue.length > 35) {
    return "Name should be less than 35 characters long.";
  } else if (!/^[a-zA-Z ]+$/.test(trimmedValue)) {
    return "Name should only contain letters and spaces.";
  } else {
    return ""; // No error
  }
}

export function validateDateOfBirth(dateOfBirth) {
  const givenDate = new Date(dateOfBirth);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (givenDate >= currentDate) {
    return "Date of Birth should be a past date.";
  }
  return "";
}

export function validateDropdown(value) {
  if (!value || value === "") {
    return "Please select valid option.";
  }
  return "";
}

export function validateInput(value, type) {
  switch (type) {
    case "checkbox":
      if (!value || value.length === 0) {
        return "Please select at least one option.";
      }
      return "";
    case "radiobutton":
      if (!value || value === "") {
        return "Please select an option.";
      }
      return "";
    case "file":
      if (!value || value === "") {
        return "Please select a file.";
      }
      return "";
    default:
      if (!value || value === "") {
        return "Please select an option.";
      }
      return "";
  }
}
export function validatePhoneNumber(phoneNumber) {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
  if (cleanedPhoneNumber.length > 10 || cleanedPhoneNumber.length < 10) {
    return " Phone number should be 10 digits long";
  }

  return "";
}
export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return "Please enter a valid email address.";
  }
  return "";
}
