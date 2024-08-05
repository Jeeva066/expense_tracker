let totalExpense = 0;
let expenses = [];

function addExpense() {
    const expenseDescription = document.getElementById("expense").value;
    const expenseAmount = parseFloat(document.getElementById("amount").value);

    if (expenseDescription.trim() !== "" && !isNaN(expenseAmount) && expenseAmount > 0) {
        expenses.push({ description: expenseDescription, amount: expenseAmount });
        totalExpense += expenseAmount;

        displayExpenses();

        document.getElementById("expense").value = "";
        document.getElementById("amount").value = "";

        document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
    } else {
        alert("Please enter a valid expense description and amount.");
    }
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    const now = new Date();
        const dateTime = now.toLocaleString();

    expenses.forEach((expense, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${expense.description}: ₹${expense.amount.toFixed(2)} :     ${dateTime}`;

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fas", "fa-trash-alt", "delete-icon");
        deleteIcon.setAttribute("data-index", index);
        deleteIcon.addEventListener("click", deleteExpense);
        listItem.appendChild(deleteIcon);

        expenseList.appendChild(listItem);
    });
}

function deleteExpense() {
    const index = parseInt(this.getAttribute("data-index"));
    if (index >= 0 && index < expenses.length) {
        totalExpense -= expenses[index].amount;
        expenses.splice(index, 1);
        displayExpenses();
        document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
    }
}
function resetFields() {
    document.getElementById("expense").value = "";
    document.getElementById("amount").value = "";
}