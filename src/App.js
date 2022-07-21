import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
