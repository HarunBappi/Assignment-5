// Donation Now Button Js Here
const donationNowBtnEl = document.getElementById("donation-now-btn");
donationNowBtnEl.addEventListener("click", function () {
  const donationFlood = parseFloat(
    document.getElementById("donation-flood").value
  );
  if (isNaN(donationFlood)) {
    alert("input field is empty");
    return;
  }
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
  window.location.re;
});

// History Button in JS
const donationBtnEl = document.getElementById("donation-btn");
const gridContainerEl = document.getElementById("grid-container");
const historyBtnEl = document.getElementById("history-btn");
// classList add and button hidden JS
historyBtnEl.addEventListener("click", function () {
  historyBtnEl.className =
    "bg-primary border p-2 text-xl font-semibold rounded-md";
  donationBtnEl.classList.remove("bg-primary");
  donationBtnEl.classList.add("border");
  gridContainerEl.classList.add("hidden");
  historyContainer.classList.remove("hidden");
  // History
  const historyItemsEl = document.createElement("div");
  historyItemsEl.className = "border rounded-md p-5 space-y-3";
  historyItemsEl.innerHTML = `
   <h1 class="text-xl font-semibold">
      ${donationFlood}Taka is Donated for famine-2024 at Feni, Bangladesh
   </h1>
   <p class="text-gray-500 text-xs"></p>
  `;
  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItemsEl, historyContainer.firstChild);
});

// Dnation Button In JS
donationBtnEl.addEventListener("click", function () {
  historyContainer.classList.add("hidden");
  gridContainerEl.classList.remove("hidden");
  donationBtnEl.classList =
    "bg-primary border p-2 text-xl font-semibold rounded-md";
  historyBtnEl.classList.remove("bg-primary");
});

// Utilities Function in JS

// document.getElementById('')
