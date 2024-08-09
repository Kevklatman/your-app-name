import './index.css';
import Header from './Header';
import Body from './Body';
import data from './db.json'

const characters = data.characters;
const characterQuotes = characters.reduce((result, character) => {
  const quotes = data.quotes.filter(quote => quote.character._id === character._id);
  result[character._id] = quotes;
  return result;
}, {});

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Body characterQuotes={characterQuotes}/>
      </main>
    </div>
  );
}

export default App;
