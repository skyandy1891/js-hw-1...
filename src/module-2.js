// ========== 1 ==========
В функции может быть больше одного оператора return.Главное помнить, что выполнение функции прерывается когда интерпретатор встречает возврат, и весь код после него будет проигнорирован в текущем вызове функции.

Возьмём уже знакомую нам функцию проверки совершеннолетия. Она работает, но здесь есть «лишний» код, то есть тело функции можно оптимизировать. В данном случае подойдёт приём (паттерн) «ранний возврат».


Если условие в if выполняется, то есть приводится к true, возвращаем строку "You are an adult" и код ниже уже не исполнится.
Если условие в if не выполняется, то есть приводится к false, возвращаем строку "You are a minor".
Используя паттерн «ранний возврат» и то, что выполнение функции прерывается на операторе return, мы избавляемся от лишней переменной и блока else. То есть этот приём помогает «разгладить» ветвления.

Задание
Запиши условие в инструкции if так, чтобы функция работала правильно.
// решение
function checkAge(age) {
  if (age >= 18) { 
    return "You are an adult";
  }

  return "You are a minor";
}
// ========== 2 ==========