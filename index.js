
const meals = [
    { id: 1, name: "Meal 1", calories: 0 },
    { id: 2, name: "Meal 2", calories: 0 },
    { id: 3, name: "Meal 3", calories: 0 },
    { id: 4, name: "Meal 4", calories: 0 },
    { id: 5, name: "Meal 5", calories: 0 }
];


function createMealElements() {
    const mealsContainer = document.getElementById('mealsContainer');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';

        const mealLabel = document.createElement('label');
        const mealCheckbox = document.createElement('input');
        mealCheckbox.type = 'checkbox';
        mealCheckbox.value = meal.id;
        mealLabel.appendChild(mealCheckbox);
        mealLabel.appendChild(document.createTextNode(` ${meal.name}`));

        const calorieInput = document.createElement('input');
        calorieInput.type = 'number';
        calorieInput.placeholder = 'Calories';
        calorieInput.addEventListener('input', (e) => {
            meal.calories = parseInt(e.target.value, 10) || 0;
        });

        mealDiv.appendChild(mealLabel);
        mealDiv.appendChild(calorieInput);
        mealsContainer.appendChild(mealDiv);
    });
}

function calculateTotalCalories(event) {
    event.preventDefault();

    let totalCalories = meals
        .filter(meal => document.querySelector(`input[type="checkbox"][value="${meal.id}"]`).checked)
        .reduce((sum, meal) => sum + meal.calories, 0);

    document.getElementById('totalCalories').textContent = totalCalories;
}


document.addEventListener('DOMContentLoaded', () => {
    createMealElements();
    document.getElementById('mealForm').addEventListener('submit', calculateTotalCalories);
});
