function createAccount(pin, amount = 0) {
    return {
      initialPin: pin,
      initialBalance: amount,
  
      checkBalance(enteredPin) {
        if (enteredPin === this.initialPin) {
          return `$${this.initialBalance}`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      deposit(enteredPin, depositAmt) {
        if (enteredPin === this.initialPin) {
          this.initialBalance += depositAmt;
          return `Successfully deposited $${depositAmt}. Current balance: $${this.initialBalance}.`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      withdraw(enteredPin, withdrawAmt) {
        if (enteredPin === this.initialPin && this.initialBalance - withdrawAmt >= 0) {
          this.initialBalance -= withdrawAmt;
          return `Successfully withdrew $${withdrawAmt}. Current balance: $${this.initialBalance}.`;
        } else if (enteredPin === this.initialPin && this.initialBalance - withdrawAmt < 0) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          return "Invalid PIN.";
        }
      },
  
      changePin(oldPin, newPin) {
        if (oldPin === this.initialPin) {
          this.initialPin = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      },
    };
  }
  
  module.exports = { createAccount };
  

module.exports = { createAccount };
