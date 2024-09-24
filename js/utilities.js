// Get Input Value Share Function
function getInputFieldByValue(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
// Get Total balance Share Function
function getInputTextByValue(id) {
  const inputBalance = parseFloat(document.getElementById(id).innerText);
  return inputBalance;
}
// Get Donate-Now Button Share Function
function getDonateNowButton(id) {
  return document.getElementById(id);
}
