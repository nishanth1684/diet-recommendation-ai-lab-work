const form = document.getElementById("dietForm");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  outputDiv.innerHTML = "Generating diet recommendation...";

  // Collect user input
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi = document.getElementById("bmi").value;
  const dietRestrictions = document.getElementById("dietRestrictions").value;
  const foodAllergies = document.getElementById("foodAllergies").value;
  const fitnessGoals = document.getElementById("fitnessGoals").value;
  const cuisinePreferences =
    document.getElementById("cuisinePreferences").value;
  const medicalConditions = document.getElementById("medicalConditions").value;
  const additionalInfo = document.getElementById("additionalInfo").value;

  // Create payload object
  const payload = {
    gender,
    age,
    height,
    weight,
    bmi,
    dietRestrictions,
    foodAllergies,
    fitnessGoals,
    cuisinePreferences,
    medicalConditions,
    additionalInfo,
  };

  try {
    // Send request to ChatGPT API
    const response = await fetch("https://api.pawan.krd/v1/completions", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer pk-PrtXwZOVSwgyxqFfyrhYpdYRaMaWNKUiGVqgKwzmyifebdZG",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    // Display the diet recommendation
    outputDiv.innerHTML = data.output;
  } catch (error) {
    console.error("Error:", error);
    outputDiv.innerHTML =
      "An error occurred while generating the diet recommendation.";
  }
});
