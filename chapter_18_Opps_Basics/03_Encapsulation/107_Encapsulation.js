class bankbalance {
    #balance = 0;
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    Bamount() {
        return this.#balance;
    }
}
const balance = new bankbalance();
balance.deposit(100);
let res = balance.Bamount();
console.log(res);