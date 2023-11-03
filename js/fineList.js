"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */
    var result = [];

    for (let i = 0; i < DB.length; i++)
    {
        if (DB[i].номер === searchKey) {
            result = result.concat(DB[i]);
        }
        else {
                if (DB[i].тип === searchKey) {
                result = result.concat(DB[i]);
            }
        }

    }
    if (result.length == 0) alert("Такого штрафу не має.");
    return result;
}

