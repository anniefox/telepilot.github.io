var quotes =
//Donald Trump Quotes
[["Any negative polls are fake news, just like the CNN, ABC, NBC polls in the election. Sorry, people want border security and extreme vetting.", "Donald Trump"],["Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don’t know what to do. Love!", "Donald Trump"],["Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!", "Donald Trump"], ["Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man – he made a good decision.", "Donald Trump"], ["Meryl Streep, one of the most over-rated actresses in Hollywood, doesn’t know me but attacked last night at the Golden Globes. She is a Hillary flunky who lost big.", "Donald Trump"],["One of they key problems today is that politics is such a disgrace. Good people don’t go into government.", "Donald Trump"],
//Other Quotes
["The difference between stupidity and genius is that genius has its limits.", "Albert Einstein"], ["A good speech should be like a woman's skirt: long enough to cover the subject and short enough to create interest.", "Winston Churchill" ], ["The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.", "Mark Twain"],["The worst thing I can be is the same as everybody else. I hate that.", "Arnold Schwarzenegger"],
["I'd like to live like a poor man - only with lots of money.", "Pablo Picasso"],["There is a place you can touch a woman that will drive her crazy. Her heart.", "Melanie Griffith"],["I have opinions of my own -- strong opinions -- but I don't always agree with them.", "George W. Bush"], ["I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.", "Groucho Marx"],
["Money doesn't make you happy. I now have $50 million but I was just as happy when I had $48 million.", "Arnold Schwarzenegger"], ["One of the great things about books is sometimes there are some fantastic pictures.", "George W. Bush"], ["I think it is good that books still exist, but they do make me sleepy.", "Frank Zappa"],
];


var newQuote, oldQuote, answer, otherAnswer, altAnswer, quoteOne, quoteTwo, i;

var printQuote = function() {

  //generate random Quote
  newQuote = [];
  newQuote.push(quotes[Math.floor(Math.random() * quotes.length)]);

  //Generate a quote that's not by person of the first quote
  i = 0;
  do {
    altAnswer = [];
    altAnswer.push(quotes[Math.floor(Math.random() * quotes.length)]);
    i++;
    } while (altAnswer[0][1] === newQuote[0][1] && i < quotes.length)

  //make sure the quotes don't repeat themselves
    if (oldQuote !== newQuote && (newQuote[0][1] === "Donald Trump" || altAnswer[0][1] === "Donald Trump")) {
    console.log("Who said: " + newQuote[0][0]);
  } else printQuote()
}



var answerQuote = function() {
  //Get a random order for the answering prompt
  var order = Math.floor(Math.random() * 100);
    if (order % 2 === 0) {
      quoteOne = newQuote[0][1];
      quoteTwo = altAnswer[0][1];
    } else {
      quoteOne = altAnswer[0][1];
      quoteTwo = newQuote[0][1];
    }
    //log and return answer
   answer = prompt("Who said it? " + quoteOne + " or " + quoteTwo + "?");
    if (answer === newQuote[0][1]) {
      console.log("You're right!");
    } else if (answer === altAnswer[0][1]){
      console.log("No, it was " + newQuote[0][1])
    }
      else { console.log("Wrong input, try again")}
      oldQuote = newQuote;
}
