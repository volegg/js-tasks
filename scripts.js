/**
 * Created by PC on 16.08.2016.
 */
//alert( window.innerWidth );
let symb = "";
let str = "";
// 1 Частота встречаемости символа в строке
function stringLengthDefinition() {
    let symbArr = [];
    for (index; index < str.length; index++) {
        if (indexof(symb) != -1) {
            symbArr.push(symb);
        } else {
            console.log('Next')
        }
    }
    return symbArr.length;
}
//2 Удаление лишних пробелов
let space = " ";
function spaceRemoving() {
    let removed = [];
    for (index; index < str.length; index++) {
        let elem = str[index];
        if (str[index] = space) {
            if (str[index - 1] = space) {
                removed.push(elem)
            } else {
                console.log('Next')
            }
        } else {
            console.log('Next letter')
        }
    }
}
let deleted = [];
function chekingSpace() {
    for (index = 0; index < str.length; index++) {
        console.log(str[index]);
        quest = str[index];

        if (quest = " ") {
            removingSpace()

        } else {
            console.log("Next")
        }
    }

    return result;
}
// 3 Удалить пробелы между первым и вторым вопросительным знаком
function removingSpace() {
    for (index = 0; index < str.length; index++) {
        console.log(str[index]);
        quest = str[index];
        if (str[index - 1] = "?" && str[index + 1] = "?") {
            deleted.push(quest)
        } else {
            break
        }
    }
}

// 4 Заменить пробел и группы пробелов символом "*"
function spaceChanging() {
    for (index = 0; index < str.length; index++) {
        console.log(str[index]);
        quest = str[index];

        if (quest = " ") {
            starsChanging()

        } else {
            console.log("Next")
        }
    }

    return result;
}

function starsChanging() {
    str.replace(/ /g, "*");
    return str
}
//5 Выделение слов из строки
function arrayCreation() {
    var arr = str.split(' ');
    var arr2 = [];
    for (var i in arr) {
        if (arr2.indexOf(arr[i]) == -1)arr2.push(arr[i]);
    }
    return arr2

}

//6 Подсчет количества слов в строке
function wordsCounting() {
    let sum = 1;
    for (index = 0; index < str.length; index++) {
        console.log(str[index]);
        quest = str[index];
        if (quest = " ") {
            sum = sum + 1;
        } else {
            continue
        }
    }
    return sum
}
//уточнить правильность кода ниже у Олега
// 8 Вывести слова строки в обратном порядке
function reverse(str) {
    str.split(" ").reverse().join(" ")
}

//9 Удаление из строки слов заданной длины
// 10 Определить длину самого короткого слова в строке
arr = str.split(" ");
minlength = getMinValue(lengthArr);
lengthArr = [];
function getWordsLength() {
    for (index = 0; index < arr.length; index++) {
        quest = arr[index].length;
        lengthArr.push(quest);
    }
}
function getMinValue(lengthArr) {
    var min = lengthArr[0];
    for (var i = 0; i < lengthArr.length; i++) {
        if (min > lengthArr[i]) min = lengthArr[i];
    }
    return min;
}

function getMinLength() {
    wordLength = minlength.length;
    return wordLength
}
// 11 Заменить в самом длинном слове строки буквы "a" на "b"


function getMaxValue(lengthArr){
    var max = lengthArr[0];
    for (var i = 0; i < lengthArr.length; i++) {
        if (max < lengthArr[i]) max = lengthArr[i];
    }
    return max;
}

let longestWord = getMaxValue(lengthArr);

function lettersChanging() {
    longestWord.replace("a","b")
    return longestWord
}

let fixedMaxWord = lettersChanging();


