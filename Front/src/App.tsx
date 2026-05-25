import Header from './components/Header/Header';
import ItemsProvider from './context/items';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <ItemsProvider>
      <Header />
      <HomePage />
    </ItemsProvider>
  )
}

export default App;
