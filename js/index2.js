// Global Verialbe Declare
const mainBalance = getInputTextByValue("main-balance");
// Donate For Flood Button in JS
const donateNowButtonEl = document.getElementById("donation-now-btn");
donateNowButtonEl.addEventListener("click", function () {
  const donationFlood = getInputFieldByValue("donation-flood");
  //   Condition Part
  if (
    isNaN(donationFlood) ||
    mainBalance < donationFlood ||
    donationFlood <= 0
  ) {
    alert("wrong amount! Please try Again");
    return;
  }
  //   Add Donation Amount
  const floodBalanceEl = parseFloat(
    document.getElementById("flood-balance").innerText
  );
  const floodBalance = donationFlood + floodBalanceEl;
  document.getElementById("flood-balance").innerText = floodBalance;
  //   Decrease Main balance
  const totalBalance = mainBalance - donationFlood;
  document.getElementById("main-balance").innerText = totalBalance;
});
//
// Donation relief Button
const donateNowButtonEl2 = document.getElementById("donation-now-btn-2");
donateNowButtonEl2.addEventListener("click", function () {
  const donationFloodRelief = getInputFieldByValue("donatetion-flood-relief");
  //   Condition Part
  if (
    isNaN(donationFloodRelief) ||
    mainBalance < donationFloodRelief ||
    donationFloodRelief <= 0
  ) {
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
  const totalBalance = mainBalance - reliefBalance;
  document.getElementById("main-balance").innerText = totalBalance;
});
// Injured Quota Button
const donateNowButtonEl3 = document.getElementById("donation-now-btn-3");
donateNowButtonEl3.addEventListener("click", function () {
  const donationQuotaInjurd = getInputFieldByValue("donation-quota-injured");
  //   Condition Part
  if (
    isNaN(donationQuotaInjurd) ||
    mainBalance < donationQuotaInjurd ||
    donationQuotaInjurd <= 0
  ) {
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
  const totalBalance = mainBalance - injuredQuotaBalance;
  document.getElementById("main-balance").innerText = totalBalance;
});
