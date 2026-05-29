import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content-area">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
};

export default App;
