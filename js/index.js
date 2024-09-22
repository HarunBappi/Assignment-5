// Donation Now Button Js Here
const donationNowBtnEl = document.getElementById("donation-now-btn");
donationNowBtnEl.addEventListener("click", function () {
  const donationFlood = parseFloat(
    document.getElementById("donation-flood").value
  );
  //   if (donationFlood === null) {
  //     return alert("input field is empty");
  //   }
  const floodBalanceEl = parseFloat(
    document.getElementById("flood-balance").innerText
  );
  const floodBalance = donationFlood + floodBalanceEl;
  document.getElementById("flood-balance").innerText = floodBalance;
  //   Decrement Total Balance
  const totalBalanceEl = parseFloat(
    document.getElementById("total-balance").innerText
  );
  const totalBalance = totalBalanceEl - donationFlood;
  document.getElementById("total-balance").innerText = totalBalance;
});

// History Button in JS
const donationBtnEl = document.getElementById("donation-btn");
const gridContainerEl = document.getElementById("grid-container");
const historyContainer = document.getElementById("history-container");
const historyBtnEl = document.getElementById("history-btn");
// classList add and button hidden JS
historyBtnEl.addEventListener("click", function () {
  historyBtnEl.className =
    "bg-primary border p-2 text-xl font-semibold rounded-md";
  donationBtnEl.classList.remove("bg-primary");
  donationBtnEl.classList.add("border");
  gridContainerEl.classList.add("hidden");
  historyContainer.classList.remove("hidden");
});
