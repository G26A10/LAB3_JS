const transactions = [
    {
      transaction_id: "1",
      transaction_date: "2019-01-01",
      transaction_amount: 100.0,
      transaction_type: "debit",
      transaction_description: "Payment for groceries",
      merchant_name: "SuperMart",
      card_type: "Visa",
    },
    {
      transaction_id: "2",
      transaction_date: "2019-01-02",
      transaction_amount: 50.0,
      transaction_type: "credit",
      transaction_description: "Refund for returned item",
      merchant_name: "OnlineShop",
      card_type: "MasterCard",
    },
    {
      transaction_id: "3",
      transaction_date: "2019-01-03",
      transaction_amount: 75.0,
      transaction_type: "debit",
      transaction_description: "Dinner with friends",
      merchant_name: "RestaurantABC",
      card_type: "Amex",
    },
    {
      transaction_id: "4",
      transaction_date: "2019-01-04",
      transaction_amount: 120.0,
      transaction_type: "debit",
      transaction_description: "Shopping at Mall",
      merchant_name: "FashionStoreXYZ",
      card_type: "Discover",
    },
    {
      transaction_id: "5",
      transaction_date: "2019-01-05",
      transaction_amount: 25.0,
      transaction_type: "credit",
      transaction_description: "Returned defective product",
      merchant_name: "ElectronicsShop",
      card_type: "Visa",
    },
    {
      transaction_id: "6",
      transaction_date: "2019-01-06",
      transaction_amount: 60.0,
      transaction_type: "debit",
      transaction_description: "Gasoline refill",
      merchant_name: "GasStationXYZ",
      card_type: "MasterCard",
    },
    {
      transaction_id: "7",
      transaction_date: "2019-01-07",
      transaction_amount: 40.0,
      transaction_type: "debit",
      transaction_description: "Lunch with colleagues",
      merchant_name: "Cafe123",
      card_type: "Visa",
    },
    {
      transaction_id: "8",
      transaction_date: "2019-01-08",
      transaction_amount: 90.0,
      transaction_type: "debit",
      transaction_description: "Movie tickets",
      merchant_name: "CinemaXYZ",
      card_type: "Amex",
    },
];

/**
 * @typedef {Object} Transaction
 * @property {string} transaction_id - Уникальный идентификатор транзакции.
 * @property {string} transaction_date - Дата транзакции в формате YYYY-MM-DD.
 * @property {number} transaction_amount - Сумма транзакции.
 * @property {"debit"|"credit"} transaction_type - Тип транзакции.
 * @property {string} transaction_description - Описание транзакции.
 * @property {string} merchant_name - Название магазина или сервиса.
 * @property {string} card_type - Тип банковской карты.
 */

/**
 * Возвращает список уникальных типов транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {string[]} Массив уникальных значений transaction_type.
 */
function getUniqueTransactionTypes(transactions) {
let uniqueTransactionTypes = new Set();
  transactions.forEach(transaction => uniqueTransactionTypes.add(transaction.transaction_type));  
  return Array.from(uniqueTransactionTypes);
}

/**
 * Считает общую сумму всех транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {number} Сумма всех transaction_amount.
 */
function calculateTotalAmount(transactions) {
    let sum = 0;
    transactions.forEach(transaction => sum += transaction.transaction_amount);                   
    return sum;
}

/**
 * Считает общую сумму транзакций за конкретную дату.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @param {number} year - Год.
 * @param {number} month - Месяц (1-12).
 * @param {number} day - День месяца.
 * @returns {number} Сумма транзакций за указанную дату.
 */
function calculateTotalAmountByDate(transactions, year, month, day) {
    return transactions
        .filter(transaction => {
            const date = new Date(transaction.transaction_date);
            return (
                date.getFullYear() === year &&
                date.getMonth() + 1 === month &&
                date.getDate() === day
            );
        })
        .reduce((sum, transaction) => sum + transaction.transaction_amount, 0);
}

/**
 * Возвращает транзакции определенного типа.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @param {string} type - Тип транзакции (например debit или credit).
 * @returns {Transaction[]} Отфильтрованный массив транзакций.
 */
function getTransactionByType(transactions, type) {
    return transactions.filter(transaction => transaction.transaction_type === type);
}

/**
 * Возвращает транзакции в указанном диапазоне дат включительно.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @param {string} startDate - Начальная дата в формате YYYY-MM-DD.
 * @param {string} endDate - Конечная дата в формате YYYY-MM-DD.
 * @returns {Transaction[]} Транзакции в диапазоне дат.
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
    return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.transaction_date);
        return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
    });
}

/**
 * Возвращает транзакции по названию магазина.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @param {string} merchantName - Название магазина.
 * @returns {Transaction[]} Транзакции указанного магазина.
 */
function getTransactionsByMerchant(transactions, merchantName) {
    return transactions.filter(transaction => transaction.merchant_name === merchantName);
}

/**
 * Вычисляет среднюю сумму транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {number} Средняя сумма транзакции.
 */
function calculateAverageTransactionAmount(transactions){
    const totalAmount = calculateTotalAmount(transactions);
    return totalAmount / transactions.length;
}

/**
 * Возвращает транзакции в заданном диапазоне сумм включительно.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @param {number} minAmount - Минимальная сумма.
 * @param {number} maxAmount - Максимальная сумма.
 * @returns {Transaction[]} Транзакции в диапазоне сумм.
 */
function getTransactionsByAmountRange(transactions, minAmount, maxAmount) {
    return transactions.filter(transaction => transaction.transaction_amount >= minAmount && transaction.transaction_amount <= maxAmount);
}

/**
 * Считает общую сумму только дебетовых транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {number} Сумма транзакций с типом debit.
 */
function calculateTotalDebitAmount(transactions) {
    let totalDebit = 0;
    transactions.forEach(transaction => {
        if (transaction.transaction_type === "debit") {
            totalDebit += transaction.transaction_amount;
        }   });
    return totalDebit;
}

/**
 * Находит месяц, в котором было больше всего транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {number|null} Номер месяца (1-12) или null, если массив пустой.
 */
function findMostTransactionsMonth(transactions) {
    const monthCounts = {};
    let mostMonth = null;
    let biggestCount = 0;

    transactions.forEach(transaction => {
        const month = new Date(transaction.transaction_date).getMonth() + 1;
        monthCounts[month] = (monthCounts[month] || 0) + 1;

        if (monthCounts[month] > biggestCount) {
            biggestCount = monthCounts[month];
            mostMonth = month;
        }
    });

    return mostMonth;
}

/**
 * Находит месяц, в котором было больше всего дебетовых транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {number|null} Номер месяца (1-12) или null, если дебетовых транзакций нет.
 */
function findMostDebitTransactionMonth(transactions) {
    const monthCounts = {};
    let mostMonth = null;
    let biggestCount = 0;

    transactions.forEach(transaction => {
        if (transaction.transaction_type !== "debit") {
            return;
        }

        const month = new Date(transaction.transaction_date).getMonth() + 1;
        monthCounts[month] = (monthCounts[month] || 0) + 1;

        if (monthCounts[month] > biggestCount) {
            biggestCount = monthCounts[month];
            mostMonth = month;
        }
    });

    return mostMonth;
}

/**
 * Сравнивает количество дебетовых и кредитовых транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {"debit"|"credit"|"equal"} Результат сравнения количества типов транзакций.
 */
function mostTransactionTypes(transactions) {
    let debitCount = 0;
    let creditCount = 0;
    
    transactions.forEach(transaction => {
        if (transaction.transaction_type === "debit") {
            debitCount++;
        } else if (transaction.transaction_type === "credit") {
            creditCount++;
        }
    });
    
    if (debitCount > creditCount) {
        return "debit";
    } else if (creditCount > debitCount) {
        return "credit";
    } else {
        return "equal";
    }
}

/**
 * Возвращает транзакции, совершенные раньше указанной даты.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @param {string} date - Дата в формате YYYY-MM-DD.
 * @returns {Transaction[]} Транзакции до указанной даты.
 */
function getTransactionsBeforeDate(transactions, date) {
    return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.transaction_date);
        return transactionDate < new Date(date);
    });
}

/**
 * Ищет транзакцию по ее идентификатору.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @param {string} id - Идентификатор транзакции.
 * @returns {Transaction|undefined} Найденная транзакция или undefined.
 */
function findTransactionById(transactions, id) {
    return transactions.find(transaction => transaction.transaction_id === id);
}

/**
 * Возвращает список описаний транзакций.
 *
 * @param {Transaction[]} transactions - Массив транзакций.
 * @returns {string[]} Массив строк с описаниями транзакций.
 */
function mapTransactionDescriptions(transactions) {
    return transactions.map(transaction => transaction.transaction_description);
}

/**
 * Запускает все функции для указанного набора данных и выводит результаты в консоль.
 *
 * @param {string} datasetName - Название тестового набора.
 * @param {Transaction[]} list - Массив транзакций для тестирования.
 * @returns {void}
 */
function testAllFunctions(datasetName, list) {
    console.log("\n=== " + datasetName + " ===");

    console.log("1. getUniqueTransactionTypes:", getUniqueTransactionTypes(list));
    console.log("2. calculateTotalAmount:", calculateTotalAmount(list));
    console.log("3. calculateTotalAmountByDate (2019-01-03):", calculateTotalAmountByDate(list, 2019, 1, 3));
    console.log("4. getTransactionByType (debit):", getTransactionByType(list, "debit"));
    console.log("5. getTransactionsInDateRange (2019-01-02..2019-01-05):", getTransactionsInDateRange(list, "2019-01-02", "2019-01-05"));
    console.log("6. getTransactionsByMerchant (Cafe123):", getTransactionsByMerchant(list, "Cafe123"));
    console.log("7. calculateAverageTransactionAmount:", calculateAverageTransactionAmount(list));
    console.log("8. getTransactionsByAmountRange (50..100):", getTransactionsByAmountRange(list, 50, 100));
    console.log("9. calculateTotalDebitAmount:", calculateTotalDebitAmount(list));
    console.log("10. findMostTransactionsMonth:", findMostTransactionsMonth(list));
    console.log("11. findMostDebitTransactionMonth:", findMostDebitTransactionMonth(list));
    console.log("12. mostTransactionTypes:", mostTransactionTypes(list));
    console.log("13. getTransactionsBeforeDate (2019-01-05):", getTransactionsBeforeDate(list, "2019-01-05"));
    console.log("14. findTransactionById (3):", findTransactionById(list, "3"));
    console.log("15. mapTransactionDescriptions:", mapTransactionDescriptions(list));
}

const oneTransaction = [
    {
        transaction_id: "201",
        transaction_date: "2019-01-03",
        transaction_amount: 42.0,
        transaction_type: "debit",
        transaction_description: "Single test transaction",
        merchant_name: "Cafe123",
        card_type: "Visa",
    },
];

const emptyTransactions = [];

console.log("Тест");
testAllFunctions("Основной набор", transactions);
testAllFunctions("Пустой массив транзакций", emptyTransactions);
testAllFunctions("Массив с одной транзакцией", oneTransaction);

