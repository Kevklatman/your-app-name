import data from './db.json';


const characterQuotes = quotes.find(
    (quote) => quote.character._id === character._id
  )