const MAX_BALANCE = 990;
const MAX_BALANCE_ERROR = `La cuenta no puede exceder de ${MAX_BALANCE}`;
const MIN_BALANCE = 10;
const MIN_BALANCE_ERROR = `La cuenta no puede bajar de ${MIN_BALANCE}`;
const NO_ACCESS = "Error intenta nuevamente";
const NO_ACCOUNT = "Error no se selecciono cuenta";
const NO_NUMBER_AMOUNT =
  "Error no agregaste un numero valido, intenta de nuevo";
const operationsContainer = document.querySelector(".atm_operations");
const atmForm = document.querySelector(".atm_form");
const ACCOUNTS = sessionStorage.getItem("ACCOUNTS")
  ? JSON.parse(sessionStorage.getItem("ACCOUNTS"))
  : [
      { name: "Mali", balance: 200, password: "helloworld" },
      { name: "Gera", balance: 290, password: "l33t" },
      { name: "Maui", balance: 67, password: "123" },
    ];

const showForm = () => {
  atmForm.style.display = "flex";
  operationsContainer.style.display = "none";
};

const showOperations = () => {
  atmForm.style.display = "none";
  operationsContainer.style.display = "flex";
};

const logout = () => {
  sessionStorage.removeItem("account");
  showForm();
};

const selectAccount = (account) => {
  sessionStorage.setItem("account", JSON.stringify(account));
};

const login = (name, password) => {
  const myAccount = ACCOUNTS.find((account) => account.name === name);
  if (!myAccount || myAccount.password !== password) {
    throw Error(NO_ACCESS);
  }
  return myAccount;
};

const requestBalance = (account) => `Saldo: ${account.balance}`;

const addAmountBalance = (account, amount) => {
  const newAccount = JSON.parse(JSON.stringify(account));
  const newBalance = newAccount.balance + amount;
  if (newBalance > MAX_BALANCE) {
    throw new Error(MAX_BALANCE_ERROR);
  }
  newAccount.balance = newBalance;
  return newAccount;
};

const subAmountBalance = (account, amount) => {
  const newAccount = JSON.parse(JSON.stringify(account));
  const newBalance = newAccount.balance - amount;
  if (newBalance < MIN_BALANCE) {
    throw new Error(MIN_BALANCE_ERROR);
  }
  newAccount.balance = newBalance;
  return newAccount;
};

const makeLogin = () => {
  const name = document.getElementsByName("name")[0].value;
  const password = document.getElementsByName("password")[0].value;
  try {
    const account = login(name, password);
    showOperations();
    selectAccount(account);
  } catch (error) {
    logout();
    alert(error.message);
  }
};

const showBalance = () => {
  const account = JSON.parse(sessionStorage.getItem("account"));
  if (!account) {
    return alert(NO_ACCOUNT);
  }
  alert(requestBalance(account));
};

const getAmount = (message) => {
  const amount = Number(prompt(message));
  if (isNaN(amount)) {
    alert(NO_NUMBER_AMOUNT);
    return getAmount(message);
  }
  return amount;
};

const addToBalance = () => {
  const amount = getAmount("Agregar al saldo: ");
  const account = JSON.parse(sessionStorage.getItem("account"));
  try {
    const newAccount = addAmountBalance(account, amount);
    const NEW_ACCOUNTS = ACCOUNTS.map((ac) =>
      ac.name === newAccount.name ? newAccount : ac
    );
    sessionStorage.setItem("account", JSON.stringify(newAccount));
    sessionStorage.setItem("ACCOUNTS", JSON.stringify(NEW_ACCOUNTS));
  } catch (error) {
    alert(error.message);
  }
};

const removeFromBalance = () => {
  const amount = getAmount("Retirar del saldo: ");
  const account = JSON.parse(sessionStorage.getItem("account"));
  try {
    const newAccount = subAmountBalance(account, amount);
    const NEW_ACCOUNTS = ACCOUNTS.map((ac) =>
      ac.name === newAccount.name ? newAccount : ac
    );
    sessionStorage.setItem("account", JSON.stringify(newAccount));
    sessionStorage.setItem("ACCOUNTS", JSON.stringify(NEW_ACCOUNTS));
  } catch (error) {
    alert(error.message);
  }
};

if (sessionStorage.getItem("account")) {
  showOperations();
}
