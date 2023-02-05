function calculateAge() {
  const birthday = new Date(document.querySelector("#birthday").value);
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const ageMessage = `You are ${age} years old.`;
  document.querySelector("#result").innerHTML = ageMessage;
}
