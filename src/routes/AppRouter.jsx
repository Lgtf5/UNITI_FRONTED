import { Routes, Route } from 'react-router-dom'
import { WelcomeView }  from '../views/welcomeView/WelcomeView'
import { LoginView } from '../views/loginView/LoginView'
import { RegisterView } from '../views/registerView/RegisterView'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<WelcomeView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      {/* <Route path="/sections" element={<SectionsView />} /> */}
      {/* <Route path="/sections/frontend" element={<FrontendView />} /> */}
      {/* <Route path="/sections/backend" element={<BackendView />} /> */}
      {/* <Route path="/sections/qa" element={<QAView />} /> */}
  
    </Routes>
  )
}



