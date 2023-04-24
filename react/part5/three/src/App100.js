
import './App.css';
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Homepage } from './pages/Homepage';
import { Profile } from './pages/Profile';
import { Navbar } from './pages/Navbar'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


function App() {
  const client = new QueryClient({defaultOptions:{
    queries:{
      refetchOnWindowFocus: false
    }
  }})

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/profile"} element={<Profile />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
