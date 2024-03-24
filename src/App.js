import './App.css';
import LayoutDashboard from './component/layout/layout';
import MainLayout from './component/layout/mainLayout';
import Homepage from './page/HomePage/HomePage';
function App() {
  return (
    <MainLayout>
      <Homepage />
    </MainLayout>
  );
}

export default App;
