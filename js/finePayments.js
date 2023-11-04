"use strict";
/**
 Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
 Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
 яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");


/**
 Вам необхідно реалізувати наступний функціонал.
 Зробити валідацію до всіх полів
 1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
 alert "Номер не співпадає" або "Сума не співпадає"

 2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
 Якщо не співпадає то видавати alert "Не вірний паспортний номер"

 3. Номер кредитної карки 16 цифр -
 якщо не співпадає то видавати alert "Не вірна кредитна картка"

 4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

 Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */

buttonSubmit.addEventListener('click', payFine);

let DB = data.finesData
let newValue

function payFine() {
    //Звертаючись до властивості finesData ви отримуєте всі дані з файлу data.js
    if (validNumb(fineNumber.value, amount.value)
        &&checkPassport(passport.value)&& checkCreditCard(creditCardNumber.value)
        && verifyCVV(cvv.value)) {
        for (let i = 0; i < DB.length; i++) {
            if (fineNumber.value === DB[i].номер) {
                DB.splice(i, 1)
                i--
            }
        }
    }
}




function validNumb(numb, sum) {
    for (let key of DB) {
        if (numb === key.номер && parseFloat(sum) === key.сума) {
            return true
        }
    }
    alert(`Номер / Сума не співпадає`)
    return false
}

function checkCreditCard(number) {
    if (number.length < 16 || number.length > 16
        || typeof +number === "string" || isNaN(+number) === true) {
        alert("Не вірна кредитна картка")
        return false
    } else {
        return true
    }
}

function verifyCVV(cvv) {
    if (cvv.length < 3 || cvv.length > 3
        || typeof +cvv === "string" || isNaN(+cvv) === true
    ) {
        alert("Не вірний cvv")
        return false
    } else {
        return true
    }
}


let reg = new RegExp(/^[А-ГҐДЕЄЖЗИІЇЙК-Я]{2}\d{6}$/)

function checkPassport(pass) {
    if (reg.test(pass)) {
        console.log(`True`)
        return true
    } else {
        alert("Не вірний паспортний номер")
        return false
    }
}


