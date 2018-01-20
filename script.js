var quotes = [["Big hands", "Donald Trump"],["hello", "Obama"],["Tjenixen", "kickass-coachen"], ["Any negative polls are fake news, just like the CNN, ABC, NBC polls in the election. Sorry, people want border security and extreme vetting.", "Donald Trump"],["Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don’t know what to do. Love!", "Donald Trump"],["Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!", "Donald Trump"], ["Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man – he made a good decision.", "Donald Trump"], ["Meryl Streep, one of the most over-rated actresses in Hollywood, doesn’t know me but attacked last night at the Golden Globes. She is a Hillary flunky who lost big.", "Donald Trump"],["One of they key problems today is that politics is such a disgrace. Good people don’t go into government.", "Donald Trump"], ["The beauty of me is that I’m very rich.", "Donald Trump"]];


var newQuote, oldQuote, answer, otherAnswer, altAnswer, quoteOne, quoteTwo;

var printQuote = function() {

  newQuote = [];
  altAnswer = [];
  //generate random Quote
  newQuote.push(quotes[Math.floor(Math.random() * quotes.length)]);

    var otherFunction = function() {
      //Generate a quote that's not the first quote
      otherAnswer = quotes[Math.floor(Math.random() * quotes.length)];
      if (otherAnswer[1] !== newQuote[0][1]) {
        altAnswer.push(otherAnswer)
      } else {
        otherFunction()
      }
        }
        otherFunction()
        //make sure the quotes don't repeat themselves
    if (oldQuote !== newQuote) {
    console.log("Who said: " + newQuote[0][0]);
  } else printQuote()

}

var answerQuote = function() {
  //Get a random order for the answering prompt
  var order = Math.floor(Math.random() * 200);
    if (order % 2 === 0) {
      quoteOne = newQuote[0][1];
      quoteTwo = altAnswer[0][1];
    } else {
      quoteOne = altAnswer[0][1];
      quoteTwo = newQuote[0][1];
    }
   answer = prompt("Who said it? " + quoteOne + " or " + quoteTwo + "?");
    if (answer === newQuote[0][1]) {
      console.log("You're right!");
    } else if (answer === altAnswer[0][1]){
      console.log("No, it was " + newQuote[0][1])
    }
      else { console.log("Wrong input, try again")}
      oldQuote = newQuote;
}
