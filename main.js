/* // hello world
// 1. вам надо будет проверить и убрать пробелы в начале и в конце
// 2. поменять местами world hello
// 3. не первое o поменять на а */
// function exFn(word) {
//     if (!!word) {
//         let newWord = word.trim();
//         let replOne = newWord.slice(0, 4);
//         let replTwo = newWord.slice(-5)
//         let replLast = replOne.slice(0, -1) + 'a';
//         return  replTwo + ' ' + replLast
//     } else {
//         return 'write a text!'
//     }
// }
//
// console.log(exFn(' day good '))

/* проверить длинну на четность */
// function lengthFn(text) {
//     if (!!text) {
//         let newText = text.replace(' ', '');
//         if(newText.length % 2) {
//             return `длинна Четное!`
//         } else  {
//             return `длинна Не четное`
//         }
//     } else {
//         return 'write a text!'
//     }
// }
//
// console.log(lengthFn('hello world'))

/* lorem ipsum dolor sit amet => LoremIpsumDolorSitAmet */
// function replaceStr(text) {
//     if(!!text) {
//         let newText = text.replaceAll(' ', '')
//         let upperOne = newText.slice(newText.indexOf('l'),newText.indexOf('o')).toUpperCase() + newText.slice(newText.indexOf('o'), newText.indexOf('i'));
//         let upperTwo = newText.slice(newText.indexOf('i'),newText.indexOf('p')).toUpperCase() + newText.slice(newText.indexOf('p'), newText.indexOf('d'));
//         let upperThree = newText.slice(newText.lastIndexOf('d'),newText.lastIndexOf('o', 11)).toUpperCase() + newText.slice(newText.indexOf('o', 11), newText.lastIndexOf('s'));
//         let upperFour = newText.slice(newText.indexOf('s', 15), newText.indexOf('i', 16)).toUpperCase() + newText.slice(newText.indexOf('i', 14), -4);
//         let upperFive = newText.slice(newText.indexOf('a', 16), newText.indexOf('m', 19)).toUpperCase() + newText.slice(newText.indexOf('m', 18));
//         return upperOne + upperTwo + upperThree + upperFour + upperFive
//     }
// }
//
// console.log(replaceStr('lorem ipsum dolor sit amet'))

/* price и discount */
// function discount(num, disc) {
//     if (!!num && disc) {
//         return `Ваша скидка - ${num / 100 * disc}сом`
//     } else {
//         return 'напишите цену и скидку!'
//     }
// }
//
// console.log(discount(50000, 50))

/* str в задаче вам надо проверить что это строка.
вы проверяете не пустая ли она. длина мин 4 макс 10. четность длины.*/
// function strCheck(str) {
//     if(typeof str === 'string') {
//         if(str.length >= 4 && str.length < 10) {
//            if (str.length % 2) {
//                return `длинна четное!`
//            } else {
//                return `длинна не четное!`
//            }
//         } else {
//             return 'мин. символов 4 - макс.символов 10'
//         }
//     } else {
//         return 'это не строка!'
//     }
// }
//
// console.log(strCheck('12345'))