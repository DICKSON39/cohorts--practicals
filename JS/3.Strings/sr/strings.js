const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

async function verifyPassword(enteredPassword, storedHashedPassword) {
    return await bcrypt.compare(enteredPassword, storedHashedPassword);
}

function verifyMFA(enteredCode, actualCode) {
    return enteredCode === actualCode;
}

function checkBalance(withdrawalAmount, balance) {
    return balance >= withdrawalAmount;
}

function checkDailyLimit(withdrawalAmount, dailyLimit) {
    return withdrawalAmount <= dailyLimit;
}

async function processWithdrawal(enteredPassword, storedHashedPassword, 
                                 enteredMFA, actualMFA, 
                                 withdrawalAmount, balance, 
                                 dailyLimit) {
    
    if (!await verifyPassword(enteredPassword, storedHashedPassword)) {
        return "Transaction Failed: Incorrect password.";
    }
    
    if (!verifyMFA(enteredMFA, actualMFA)) {
        return "Transaction Failed: MFA failed.";
    }
    
    if (!checkBalance(withdrawalAmount, balance)) {
        return "Transaction Failed: Insufficient balance.";
    }
    
    if (!checkDailyLimit(withdrawalAmount, dailyLimit)) {
        return "Transaction Failed: Amount exceeds daily limit.";
    }
    
    return "Transaction Successful: Withdrawal processed.";
}

// Example Usage
(async () => {
    const storedHashedPassword = await hashPassword("securePassword123");
    const actualMFA = "123456";
    const balance = 5000.0;
    const dailyLimit = 2000.0;

    // User Input
    const enteredPassword = "securePassword123";
    const enteredMFA = "123456";
    const withdrawalAmount = 1500.0;

    // Process Withdrawal
    const result = await processWithdrawal(enteredPassword, storedHashedPassword, enteredMFA, actualMFA, withdrawalAmount, balance, dailyLimit);
    console.log(result);
})();