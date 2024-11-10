var balance = 0;

function deposit() {
    var amount = parseFloat(document.getElementById('deposit-amount').value);
    balance += amount;
    document.getElementById('deposit-amount').value = '';
    
}

function withdraw() {
    var amount = parseFloat(document.getElementById('withdraw-amount').value);
    if(amount > balance){
        alert("Insufficient balance");
    }else{
    balance -= amount;
    }
    document.getElementById('withdraw-amount').value = '';
}

function showBalance() {
    document.getElementById('balance-amount').innerHTML = '₹' + balance;
    
} 

