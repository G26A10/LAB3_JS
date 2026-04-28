# Transaction Analyzer

Лабораторная работа по анализу финансовых транзакций на JavaScript.

---

## Запуск проекта

### Что нужно

- [Node.js](https://nodejs.org/) (версия 14 и выше)

### Шаги

```bash
# 1. Клонировать репозиторий
git clone https://github.com/your-username/transaction-analyzer.git

# 2. Перейти в папку проекта
cd transaction-analyzer

# 3. Запустить скрипт
node transactions.js
```

> Никакие зависимости устанавливать не нужно — проект работает на чистом JavaScript.

---

## Описание лабораторной работы

Цель работы — написать набор функций для анализа массива финансовых транзакций.

Каждая транзакция содержит следующие поля:

| Поле | Тип | Описание |
|---|---|---|
| `transaction_id` | string | Уникальный ID |
| `transaction_date` | string | Дата в формате `YYYY-MM-DD` |
| `transaction_amount` | number | Сумма |
| `transaction_type` | `"debit"` / `"credit"` | Тип операции |
| `transaction_description` | string | Описание |
| `merchant_name` | string | Название магазина |
| `card_type` | string | Тип карты |

---

## Документация функций

| Функция | Что делает |
|---|---|
| `getUniqueTransactionTypes(transactions)` | Возвращает список уникальных типов транзакций |
| `calculateTotalAmount(transactions)` | Считает общую сумму всех транзакций |
| `calculateTotalAmountByDate(transactions, year, month, day)` | Сумма транзакций за конкретный день |
| `getTransactionByType(transactions, type)` | Фильтрует транзакции по типу |
| `getTransactionsInDateRange(transactions, startDate, endDate)` | Транзакции в диапазоне дат |
| `getTransactionsByMerchant(transactions, merchantName)` | Транзакции конкретного магазина |
| `calculateAverageTransactionAmount(transactions)` | Средняя сумма транзакции |
| `getTransactionsByAmountRange(transactions, min, max)` | Транзакции в диапазоне сумм |
| `calculateTotalDebitAmount(transactions)` | Сумма только дебетовых транзакций |
| `findMostTransactionsMonth(transactions)` | Месяц с наибольшим числом транзакций |
| `findMostDebitTransactionMonth(transactions)` | Месяц с наибольшим числом дебетовых транзакций |
| `mostTransactionTypes(transactions)` | Что больше — дебет или кредит |
| `getTransactionsBeforeDate(transactions, date)` | Транзакции до указанной даты |
| `findTransactionById(transactions, id)` | Поиск транзакции по ID |
| `mapTransactionDescriptions(transactions)` | Список описаний всех транзакций |

---

## Примеры использования

### Получить уникальные типы транзакций

```js
getUniqueTransactionTypes(transactions);
// → ["debit", "credit"]
```

### Посчитать общую сумму

```js
calculateTotalAmount(transactions);
// → 560
```

### Сумма за конкретный день

```js
calculateTotalAmountByDate(transactions, 2019, 1, 3);
// → 75
```

### Фильтр по типу

```js
getTransactionByType(transactions, "credit");
// → [{ transaction_id: "2", ... }, { transaction_id: "5", ... }]
```

### Транзакции в диапазоне дат

```js
getTransactionsInDateRange(transactions, "2019-01-02", "2019-01-05");
// → транзакции с ID 2, 3, 4, 5
```

### Транзакции по магазину

```js
getTransactionsByMerchant(transactions, "Cafe123");
// → [{ transaction_id: "7", merchant_name: "Cafe123", ... }]
```

### Средняя сумма

```js
calculateAverageTransactionAmount(transactions);
// → 70
```

### Транзакции в диапазоне сумм

```js
getTransactionsByAmountRange(transactions, 50, 100);
// → транзакции с суммами 100, 50, 75, 60, 90
```

### Сумма дебетовых транзакций

```js
calculateTotalDebitAmount(transactions);
// → 485
```

### Найти транзакцию по ID

```js
findTransactionById(transactions, "3");
// → { transaction_id: "3", transaction_description: "Dinner with friends", ... }
```

### Получить все описания

```js
mapTransactionDescriptions(transactions);
// → ["Payment for groceries", "Refund for returned item", ...]
```

---

## Ответы на контрольные вопросы

**1. Какие методы массивов можно использовать для обработки объектов?**

Основные: `filter()` — отбирает нужные элементы, `map()` — преобразует каждый элемент, `reduce()` — сворачивает массив в одно значение, `find()` — находит первый подходящий элемент, `forEach()` — перебирает без возврата результата.

**2. Как сравнивать даты в строковом формате?**

Строки формата `YYYY-MM-DD` можно сравнивать напрямую как строки (`"2019-01-03" < "2019-01-05"`), потому что формат идёт от большего к меньшему. Либо конвертировать через `new Date(str)` и сравнивать как числа.

```js
new Date("2019-01-03") < new Date("2019-01-05") // → true
```

**3. В чём разница между `map()`, `filter()` и `reduce()`?**

| Метод | Что делает | Возвращает |
|---|---|---|
| `map()` | Преобразует каждый элемент | Новый массив той же длины |
| `filter()` | Отбирает элементы по условию | Новый массив меньшей или равной длины |
| `reduce()` | Сворачивает массив | Одно значение (число, объект и т.д.) |

```js
// map — получить все суммы
transactions.map(t => t.transaction_amount); // → [100, 50, 75, ...]

// filter — только дебетовые
transactions.filter(t => t.transaction_type === "debit");

// reduce — общая сумма
transactions.reduce((sum, t) => sum + t.transaction_amount, 0); // → 560
```

---

## Структура проекта

```
transaction-analyzer/
└── transactions.js   # Данные и все функции
```

---

## 🔗 Список использованных источников

- [MDN Web Docs — Array methods](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs — Date](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN Web Docs — Set](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Node.js официальный сайт](https://nodejs.org/)
