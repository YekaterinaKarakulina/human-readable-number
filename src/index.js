module.exports = function toReadable (number) {
    var wordsOfNumber = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
  
    var arr = number.toString(10).split("");
    var str = '';
    var numb = 0;
    if(arr.length == 1) {
        numb = arr.join('');
        return wordsOfNumber[numb];
    } 
     if(arr.length == 2) {
        numb = arr.join('');
        if(numb.match(/[1-9]{1}0|1[1-9]{1}/)) {
            return str + wordsOfNumber[numb];
        } else {
            return str + wordsOfNumber[Number(arr[0] + '0')] + ' ' + wordsOfNumber[Number(arr[1])];
        }
    }
    if(arr.length == 3)
    {
        numb = arr.join('');
        if(numb.match(/[1-9]{1}00/)) {
        return wordsOfNumber[arr[0]] + ' hundred';
        } else if (numb.match(/[1-9]{2}0/)) {
            return wordsOfNumber[arr[0]] + ' hundred ' + wordsOfNumber[arr[1]+'0'];
        } else {
            str = wordsOfNumber[arr[0]] + ' hundred ';
            arr.shift();
            numb = arr.join('');
            if(numb.match(/0[1-9]{1}/)) {
                return str + wordsOfNumber[arr[1]];
            } else if(numb.match(/[1-9]{1}0|1[1-9]{1}/)) {
                return str + wordsOfNumber[numb];
            } else {
                return str + wordsOfNumber[Number(arr[0] + '0')] + ' ' + wordsOfNumber[Number(arr[1])];
            }
        }
    }
}