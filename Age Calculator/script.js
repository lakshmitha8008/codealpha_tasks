function calculateAge() {
  let dob = document.getElementById('dob').value;
  if (!dob) {
      document.getElementById('result').innerText = "Please enter your date of birth.";
      return;
  }

  let dobDate = new Date(dob);
  let today = new Date();

  let age = today.getFullYear() - dobDate.getFullYear();
  let monthDiff = today.getMonth() - dobDate.getMonth();
  let dayDiff = today.getDate() - dobDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
  }

  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayOfWeek = weekdays[dobDate.getDay()];

  let resultElement = document.getElementById('result');
  resultElement.innerText = `You were born on ${dayOfWeek}. Your age is: ${age} years`;

  resultElement.classList.remove('show');
  setTimeout(() => {
      resultElement.classList.add('show');
  }, 10);
}
