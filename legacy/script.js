function addRecommendation() {
  const recommendation = document.getElementById("new_recommendation");

  if (recommendation.value && recommendation.value.trim() !== "") {
    showPopup(true);

    const element = document.createElement("div");
    element.className = "recommendation";
    element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;

    document.getElementById("all_recommendations").appendChild(element);

    // Reset textarea
    recommendation.value = "";
  }
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  popup.style.visibility = show ? "visible" : "hidden";
  popup.style.opacity = show ? "1" : "0";
  popup.style.transition = "opacity 0.3s ease";
}
