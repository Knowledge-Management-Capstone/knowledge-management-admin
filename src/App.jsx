import { Routes, Route } from 'react-router-dom'
import dashboard from './config/dashboard'

const App = () => {
  return (
    <Routes>
      {dashboard.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))}
    </Routes>
  )
}

export default App
