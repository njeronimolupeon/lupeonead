import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login";
import { Preloader } from "./Components/Preloader/Preloader";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { GlobalStyles } from "./Styles/Global";
import 'react-toastify/dist/ReactToastify.css';
import { EditUser } from "./Components/EditUser/EditUser";
import { ReprodutorAulas } from "./Components/ReprodutorAulas/ReprodutorAulas";
import { CadastroAulas } from "./Pages/CadastroAulas/CadastroAulas";
import { HomeCursos } from "./Pages/HomeCursos/HomeCursos";
import { CadastroCurso } from "./Pages/CadastroCurso/CadastroCurso";

export function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>

          <div style={{display: 'flex'}}>
            <Sidebar/>
            
            <Routes>
              <Route element={ <Preloader /> } path="/"/>
              <Route element={ <Login /> } path="/login"/>
              <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="/usuario" element={<RequireAuth><EditUser /></RequireAuth>} />
              <Route path="/aulas" element={<RequireAuth><ReprodutorAulas /></RequireAuth>} />
              <Route path="/CadastroAulas" element={<RequireAuth><CadastroAulas /></RequireAuth>} />
              <Route path="/CadastroCurso" element={<RequireAuth><CadastroCurso /></RequireAuth>} />
              <Route path="/HomeCursos" element={<RequireAuth><HomeCursos /></RequireAuth>} />
            </Routes>
          </div>
          <GlobalStyles />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}