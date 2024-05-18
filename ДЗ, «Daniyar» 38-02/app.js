// * Написать функцию капитализации строк. Например: capitalizeString("ЕВГЕНИЙ") -> "Евгений"; capitalizeString("иВАНОВ") -> "Иванов"; Капитализация - это процесс преобразования строки, когда первая буква становится заглавной, а остальные строчными.

let capitalizeString = prompt('введите данные')

function toCapitalize(letter) { 
    return letter[0].toUpperCase() + letter.slice(1).toLowerCase();
}

alert(toCapitalize(capitalizeString))


// * Написать функцию которая возвращает сколько раз в строке встречается определенный символ (причем учесть буквы как верхнего так и нижнего регистра). Например: charCount(“Abrakadabra”, “a”) -> 5, charCount(“hello”, “z”) -> 0.

let word = prompt('введите слово')
let letter = prompt('введите букву')

function charCount(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    return count;
}

let count = charCount(word, letter);
alert(count);