// Global Veriable Declare
const gridContainerEl = document.getElementById("grid-container");
const mainBalance = getInputTextByValue("main-balance");
// global Veriable Declare of part History
const historyContainer = document.getElementById("history-container");
const historyText = document.getElementById("flood-noakhali-text").innerText;
const historyText2 = document.getElementById("flood-relief-text").innerText;
const historyText3 = document.getElementById("injured-quota-text").innerText;
// Donate For Flood Button in JS
const donateNowButtonEl = document.getElementById("donation-now-btn");
donateNowButtonEl.addEventListener("click", function () {
  // Select Input Field by Share Function
  const donationFlood = getInputFieldByValue("donation-flood");
  //   Condition Part
  if (mainBalance < donationFlood || donationFlood <= 0) {
    alert("wrong amount! Please try Again");
    return;
  }
  //   Add Donation Amount
  const floodBalanceEl = parseFloat(
    document.getElementById("flood-balance").innerText
  );
  const floodBalance = donationFlood + floodBalanceEl;
  document.getElementById("flood-balance").innerText = floodBalance.toFixed(2);
  //   Decrease Main balance
  const totalBalance1 = mainBalance - floodBalance;
  document.getElementById("main-balance").innerText = totalBalance1.toFixed(2);
  //   Open Modal
  const myModal = document.getElementById("my_modal_5");
  const donationBalance1 = document.getElementById("donation-balance-1");
  donationBalance1.innerHTML = `${donationFlood.toFixed(2)} BDT`;
  myModal.classList.remove("hidden");

  //   Donation History
  const historyContent = document.createElement("div");
  historyContent.className = "border rounded-md p-5 mb-3";
  historyContent.innerHTML = `
  <h1 class="text-xl font-semibold">${donationFlood} Taka is <span>${historyText}</span> </h1>
  <p class="text-gray-500 text-xs">Date: ${new Date().toDateString()}
     <span>${new Date().toTimeString()}</span></p>
  `;
  historyContainer.appendChild(historyContent);
});
//
// Donation relief Button
const donateNowButtonEl2 = document.getElementById("donation-now-btn-2");
donateNowButtonEl2.addEventListener("click", function () {
  // Select Input Field by Share Function
  const donationFloodRelief = getInputFieldByValue("donatetion-flood-relief");
  //   Condition Part
  if (mainBalance < donationFloodRelief || donationFloodRelief <= 0) {
    alert("wrong amount! Please try Again");
    return;
  }
  //   Relief Balance Declare
  const reliefBalanceEl = parseFloat(
    document.getElementById("relief-balance").innerText
  );
  //   Add Donation Amount
  const reliefBalance = donationFloodRelief + reliefBalanceEl;
  document.getElementById("relief-balance").innerText = reliefBalance;
  //   Decrease Main balance
  const totalBalance2 = mainBalance - reliefBalance;
  document.getElementById("main-balance").innerText = totalBalance2;
  //   Open Modal
  const myModal = document.getElementById("my_modal_2");
  const donationBalance2 = document.getElementById("donation-balance-2");
  donationBalance2.innerHTML = `${donationFloodRelief.toFixed(2)} BDT`;
  myModal.classList.remove("hidden");
  //   Donation History
  const historyContent = document.createElement("div");
  historyContent.className = "border rounded-md p-5 mb-3";
  historyContent.innerHTML = `
    <h1 class="text-xl font-semibold">${donationFloodRelief} Taka is <span>${historyText2}</span> </h1>
    <p class="text-gray-500 text-xs">Date: ${new Date().toDateString()}
       <span>${new Date().toTimeString()}</span></p>
    `;
  historyContainer.appendChild(historyContent);
});
// Injured Quota Button
const donateNowButtonEl3 = document.getElementById("donation-now-btn-3");
donateNowButtonEl3.addEventListener("click", function () {
  // Select Input Field by Share Function
  const donationQuotaInjurd = getInputFieldByValue("donation-quota-injured");
  //   Condition Part
  if (mainBalance < donationQuotaInjurd || donationQuotaInjurd <= 0) {
    alert("wrong amount! Please try Again");
    return;
  }
  //   donation-quota-injured Declare
  const injuredQuotaBalanceEl = parseFloat(
    document.getElementById("injured-quota-balance").innerText
  );
  //   Add Donation Amount
  const injuredQuotaBalance = donationQuotaInjurd + injuredQuotaBalanceEl;
  document.getElementById("injured-quota-balance").innerText =
    injuredQuotaBalance;
  //   Decrease Main balance
  const totalBalance3 = mainBalance - injuredQuotaBalance;
  document.getElementById("main-balance").innerText = totalBalance3;
  //   Open Modal
  const myModal = document.getElementById("my_modal_3");
  const donationBalance3 = document.getElementById("donation-balance-3");
  donationBalance3.innerHTML = `${donationQuotaInjurd.toFixed(2)} BDT`;
  myModal.classList.remove("hidden");
  //   Donation History
  const historyContent = document.createElement("div");
  historyContent.className = "border rounded-md p-5 mb-3";
  historyContent.innerHTML = `
     <h1 class="text-xl font-semibold">${donationQuotaInjurd} Taka is <span>${historyText3}</span> </h1>
     <p class="text-gray-500 text-xs">Date: ${new Date().toDateString()}
        <span>${new Date().toTimeString()}</span></p>
     `;
  historyContainer.appendChild(historyContent);
});

// History Button
const historyBtnEl = document.getElementById("history-btn");
const donationBtnEl = document.getElementById("donation-btn");
historyBtnEl.addEventListener("click", function () {
  historyContainer.classList.remove("hidden");
  gridContainerEl.classList.add("hidden");
  historyBtnEl.classList.add("bg-primary");
  donationBtnEl.classList.remove("bg-primary");
  donationBtnEl.classList.add("border");
});

// Donation Button

donationBtnEl.addEventListener("click", function () {
  gridContainerEl.classList.remove("hidden");
  historyContainer.classList.add("hidden");
  historyBtnEl.classList.remove("bg-primary");
  donationBtnEl.classList.add("bg-primary");
});
