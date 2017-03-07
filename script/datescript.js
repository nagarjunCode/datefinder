//import wordsToNumbers from 'words-to-numbers';

var months = [" ", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var short_months = [" ", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var number_terms = [" ", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eigth", "nineth", "tenth", "eleventh", "twelveth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twenteeth", "twentyfirst", "twentysecond", "twentythird", "twentyfourth", "twentyfifth", "twentysixth", "twentyseventh", "twentyeigth", "twentynineth", "thirty", "thirtyfirst", "last"];
var week_days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var short_week_days = ["sun", "mon", "tues", "wed", "thurs", "fri", "sat"];

var current_date = Date();
var date_num, r, month_num = 0;

var input, words = "";

function findDate() {
    r = /(\d+)/g;
    date_num = 0;


    input = document.getElementById("textbox").value;
    input = input.toLowerCase();
    words = input.split(" ");
    month_num = find_month_num();
    console.log("month_num " + month_num);

    if (month_num < 0) {
        date_num = find_date_num(input);
        console.log("date_num " + date_num);
    }



    document.getElementById("display").innerHTML = date_num + " " + months[month_num];
}

function flush() {
    document.getElementById("textbox").value = "";
    document.getElementById("display").innerHTML = "";
}

function find_date_num(input) {
    r = /(\d+)/g;
    if (input.match(r) !== null && parseInt(input.match(r)[0]) < 32)
        return input.match(r)[0];
    else {
        for (var i = 0; i < words.length; i++) {
            date_num = number_terms.indexOf(words[i]);
            if (date_num == 32)
                date_num--;
            if (date_num > 0)
                return date_num;
        }
    }
    return -1;
}

function find_month_num() {
    for (var i = 0; i < words.length; i++) {
        month_num = months.indexOf(words[i]);
        console.log(month_num)
        if (month_num > 0) {
            if (words[i - 1].match(r) !== null) {
                date_num = words[i - 1].match(r)[0];
                return month_num;
            }  if (words[i - 2].match(r) !== null) {
                date_num = words[i - 2].match(r)[0];
                return month_num;
            }  if ((i+1)<words.length && words[i + 1].match(r) !== null ) {
                date_num = words[i + 1].match(r)[0];
                return month_num;
            }  if ((i+2)<words.length && words[i + 2].match(r) !== null  ) {
                date_num = words[i + 2].match(r)[0];
                return month_num;
            }
        }
    }

    for (var i = 0; i < words.length; i++) {
        month_num = short_months.indexOf(words[i]);
        if (month_num > 0 && words[i - 1].match(r) !== null) {
            console.log("date " + words[i - 1].match(r)[0]);
            return month_num;
        }
        if (month_num > 0 && words[i + 1].match(r) !== null) {
            console.log("date " + words[i + 1].match(r)[0]);
            return month_num;
        }
    }

    return -1;

}
