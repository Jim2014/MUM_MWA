type BankAccount = {
    money: number,
    deposit: (a: number) => void
}
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
type PersonInfo = {
    name: string,
    bankAccount: BankAccount,
    hobbies: [string, string]
}
let myself: PersonInfo = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Voilin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
