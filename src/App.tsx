import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
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
import { Jornadas } from "./Pages/Jornadas";
import { CadastroCurso } from "./Pages/Curso/CadastroCurso/CadastroCurso";
import { CursosLista } from "./Pages/Curso/CursoLista/CursosLista";
import { EadProvider } from "./contexts/EadContext/EadProvider";
import { DetailJornada } from "./Pages/Jornadas/DetailJornada";

export function App() {

  return (
    <>
      <AuthProvider>
        <EadProvider>
        <BrowserRouter>

          <Routes>
            <Route element={ <Preloader /> } path="/"/>
            <Route element={ <Login /> } path="/login"/>
          </Routes>
          
          <div className="app_container">
            <div>
                <Sidebar />
            </div>  
            
            <div>
              <Routes>
                
                        
                <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
                <Route path="/usuario" element={<RequireAuth><EditUser /></RequireAuth>} />
                <Route path="/Aula/:aulaId" element={<RequireAuth><ReprodutorAulas /></RequireAuth>} />
                <Route path="/CadastroAulas" element={<RequireAuth><CadastroAulas /></RequireAuth>} />
                <Route path="/CadastroCurso" element={<RequireAuth><CadastroCurso /></RequireAuth>} />
                <Route path="/Jornadas" element={<RequireAuth><Jornadas /></RequireAuth>} />
                <Route path="/HomeCursos" element={<RequireAuth><HomeCursos /></RequireAuth>} />
                <Route path="/Cursos" element={<RequireAuth><CursosLista /></RequireAuth>} />
                <Route path="/Jornadas/DetailJornada/:jornadaId" element={<RequireAuth><DetailJornada /></RequireAuth>} />
              </Routes>
            </div>
          </div>
          <GlobalStyles />
        </BrowserRouter>
        </EadProvider>
      </AuthProvider>
    </>
  )
}