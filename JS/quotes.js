const quotes = [
    {
        quote : "this is number A",
        author : "A",
    },
    {
        quote : "this is number B",
        author : "B",
    },
    {
        quote : "this is number C",
        author : "C",
    },
    {
        quote : "this is number D",
        author : "D",
    },
    {
        quote : "this is number E",
        author : "E",
    },
    {
        quote : "this is number F",
        author : "F",
    },
    {
        quote : "this is number G",
        author : "G",
    },
    {
        quote : "this is number H",
        author : "H",
    },
    {
        quote : "this is number I",
        author : "I",
    },
    {
        quote : "this is number J",
        author : "J",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;