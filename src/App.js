import './App.css'
// import LayoutDashboard from './component/layout/layout'
import MainLayout from './layout/mainLayout'
import RoutesComponent from './layout/Routes.tsx'
function App() {
  return (
    <MainLayout>
      <RoutesComponent />
    </MainLayout>
  )
}

export default App
