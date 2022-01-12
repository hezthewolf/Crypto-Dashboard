import React from 'react'
import NewsFeed from './components/NewsFeed'
import CurrencyConverter from './components/Currency'

const App = () => {
  return (
    <div className="App">
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
}

export default App;
