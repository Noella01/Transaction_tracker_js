document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('transactionForm');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const nameInput = document.getElementById('nameInput');
  const amountInput = document.getElementById('amountInput');
  const transactionTypeInput = document.getElementById('transactionType');
  const timeInput = document.getElementById('timeInput');
  const searchInput = document.getElementById('searchInput');
  const transactionList = document.getElementById('transactionList');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const transactionType = transactionTypeInput.value;
    const time = timeInput.value;

    if (email === '' || password === '' || name === '' || isNaN(amount) || time === '') {
      alert('Please enter valid values for email, password, name, amount, and time.');
      return;
    }

    const transactionItem = document.createElement('div');
    transactionItem.classList.add('transaction-item');
    transactionItem.innerHTML = `
      <strong>Email:</strong> ${email} - 
      <strong>Password:</strong> ${password} - 
      <strong>Name:</strong> ${name} - 
      <strong>Amount:</strong> ${amount} - 
      <strong>Type:</strong> ${transactionType} - 
      <strong>Time:</strong> ${time}
    `;
    transactionList.appendChild(transactionItem);

    // Clear input fields
    emailInput.value = '';
    passwordInput.value = '';
    nameInput.value = '';
    amountInput.value = '';
    timeInput.value = '';
  });

  searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    const transactions = transactionList.getElementsByClassName('transaction-item');

    Array.from(transactions).forEach(function(transaction) {
      const textContent = transaction.textContent || transaction.innerText;
      const isVisible = textContent.toLowerCase().includes(searchValue);
      transaction.style.display = isVisible ? 'block' : 'none';
    });
  });
});
