// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать 
// введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и вывести 
// в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после расчетов, так как в некоторых случаях может получиться "длинная дробь".

// 1 вариант с Math.round / математическое округление к ближайшему числу
// let temp_Celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
// alert(`Цельсия: ${temp_Celsius}, Фаренгейт: ${Math.round((9 / 5) * temp_Celsius + 32)}`)

// 2 вариант с toFixed /Строковое значение!количество цифр после знака(2). Если не указано(), то считается равным 0.
let temp_Celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия"));
alert(`Цельсия: ${temp_Celsius.toFixed(2)}, Фаренгейт: ${((9 / 5) * temp_Celsius + 32).toFixed(2)}`)