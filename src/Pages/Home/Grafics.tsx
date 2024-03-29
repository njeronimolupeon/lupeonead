// import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { ContainerChartHome } from './Style.home';
import {dataLineChart, dataColumn, dataArea, dataPizza} from '../../DatasGrafic/DataGrafics';

/* Import de imagens*/

import setacima from '../../assets/img_icones/setacima.png';
import setabaixo from '../../assets/img_icones/Setabaixo.png';
import { useContext, useEffect, useState } from 'react';
import { EadContext } from '../../contexts/EadContext/JornadaAndCursos/EadContext';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const datateste = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const COLORS = ['var(--azul-secundary)', 'var(--azul-complementary)', 'var(--warning)', 'var(--danger)', 'var(--gray-grafic)'];

interface dataCursoProps{
    name: string;
    valor: number | null;
}

interface dataCursoDificuldadeProps{
    name: string;
    valueIniciante: number | null;
    valueIntermediario: number | null;
    valueAvancado: number | null;
}

export function Grafics(){

    const [dataCursoStatus, setDataCursoStatus] = useState<dataCursoProps[]>([]);
    const [dataCursoNotas, setDataCursoNotas] = useState<dataCursoProps[]>([]);
    const [dataCursoDificuldade, setDataCursoDificuldade] = useState<dataCursoDificuldadeProps[]>([]);

    const eadContext = useContext(EadContext);

    useEffect(() => {

        const dataCursoStatus = [{ name: 'Cursos abertos', valor: eadContext.cursos.filter(curso => curso.cursoStatusId == 1).length},
        {name: 'Cursos concluídos', valor: eadContext.cursos.filter(curso => curso.cursoStatusId == 2).length},
        {name: 'Cursos aprovados', valor: eadContext.cursos.filter(curso => curso.cursoStatusId == 3).length}]

        setDataCursoStatus(dataCursoStatus);

        const constCursoNotas: dataCursoProps[] = [];

        eadContext.cursos.map(curso => {
            let objCursoNotas = { name: curso.titulo.toString(), valor: curso.nota }
            // console.log(curso.titulo);
            constCursoNotas.push(objCursoNotas);
        })

        setDataCursoNotas(constCursoNotas);

        let totalCursos = eadContext.cursos.length;
        let cursoIniciante = eadContext.cursos.filter(m => m.cursoDificuldadeId == 1).length;
        let cursoIntermediario = eadContext.cursos.filter(m => m.cursoDificuldadeId == 2).length;
        let cursoAvancado = eadContext.cursos.filter(m => m.cursoDificuldadeId == 3).length;

        const constCursoDificuldade = [
            {name: 'Iniciante', valueIniciante: cursoIniciante / totalCursos * 100, valueIntermediario : 0, valueAvancado : 0 }
        , {name: 'Intermediario', valueIntermediario: cursoIntermediario / totalCursos * 100, valueIniciante: 0, valueAvancado: 0 }
        , {name: 'Avançado', valueAvancado: cursoAvancado / totalCursos * 100, valueIniciante: 0, valueIntermediario: 0 }];

        setDataCursoDificuldade(constCursoDificuldade);

    }, []);

    return(
        <ContainerChartHome>
            
            <div className='container_chart_1'>
                <div className='conteudo_chart_1'>
                    <div className='legend_grafic_1'>
                        <p>Aberto</p>
                        <span style={{backgroundColor: 'var(--azul-secundary)'}}></span>
                    </div>
                    <div className='legend_grafic_1'>
                        <p>Concluído</p>
                        <span style={{backgroundColor: 'var(--azul-complementary)'}}></span>
                    </div>
                    <div className='legend_grafic_1'>
                        <p>Aprovado</p>
                        <span style={{backgroundColor: 'var(--warning)'}}></span>
                    </div>
                </div>

                <ResponsiveContainer width="50%" >
                    <PieChart
                    style={{
                        fontSize: 11
                    }}>
                        
                        <Pie
                            data={dataCursoStatus}
                            innerRadius={35}
                            outerRadius={55}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="valor"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        {/* <XAxis dataKey="name" display={"none"} height={0} /> */}
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
            <div className='container_grafics_2'>
                <div className='grafics_2_1'>
                    <div>
                        <h2>34 345</h2>
                        <label><img src={setabaixo} alt="Seta positivo" /> 7,00%</label>
                    </div>
                    {/* <ResponsiveContainer width="50%" height="100%">
                        <LineChart width={300} height={100} data={dataCursoNotas}  >
                        {/* <Line type="monotone" dataKey="value" stroke="#136CFB" strokeWidth={2} />
                        <Line  dataKey="value" stroke="#136CFB" strokeWidth={2}  />
                        <Tooltip />
                        </LineChart>
                    </ResponsiveContainer> */}

                    <ResponsiveContainer width="50%" height="100%">
                        <LineChart
                        width={300}
                        height={100}
                        data={dataCursoNotas}
                        style={{
                            fontSize: 11
                        }}
                        >
                        <XAxis dataKey="name" display={"none"} height={0} />
                        <Tooltip />
                        <Line type="monotone" dataKey="valor" stroke="#8884d8"  />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='grafics_2_2'>
                    <div>
                        <h2>34 345</h2>
                        <label> <img src={setacima} alt="Seta positivo" /> 7,00%</label>
                    </div>
                <ResponsiveContainer width="50%" height="100%">
                    <BarChart 
                    width={150} 
                    height={40} 
                    data={dataCursoNotas}
                    style={{
                        fontSize: 11
                    }}>
                        
                    <XAxis dataKey="name" display={"none"} height={0} />
                    <Bar dataKey="valor" fill="#136CFB" >
                        
                    </Bar>
                    <Tooltip cursor={{fillOpacity: '0'}}  />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
            <div className='container-grafics_3'>
                <div className='grafics_3'>
                <div className='legend_grafic_3'>
                    <div> 
                        <h3>{dataCursoDificuldade[0]?.name}</h3>
                        
                        <label><p style={{backgroundColor:'#136CFB', padding:'0.2rem'}}></p> {dataCursoDificuldade[0]?.valueIniciante?.toFixed(0)}%</label>
                    </div>
                    <div>
                        <h3>{dataCursoDificuldade[1]?.name}</h3>
                        <label><p style={{backgroundColor:'var(--azul-complementary_)', padding:'0.2rem'}}></p>
                            {dataCursoDificuldade[1]?.valueIntermediario?.toFixed(0)}%</label>
                    </div>
                    <div>
                        <h3>{dataCursoDificuldade[2]?.name}</h3>
                        <label><p style={{backgroundColor:'var(--azul-complementary)', padding:'0.2rem'}}></p>
                            {dataCursoDificuldade[2]?.valueAvancado?.toFixed(0)}%</label>
                    </div>
                </div>
                
                <ResponsiveContainer width="100%" height="50%">
                    <AreaChart
                    width={200}
                    height={60}
                    data={dataCursoDificuldade}
                    margin={{
                        bottom: 0,
                    }}
                    >
                    <Area type="monotone" dataKey="valueIniciante" stroke="" fill="#136CFB">
                        
                    </Area>
                    <Area type="monotone" dataKey="valueIntermediario" stroke="" fill="var(--azul-complementary_)"  />
                    <Area type="monotone" dataKey="valueAvancado" stroke="" fill="var(--azul-complementary)"  />
                    <XAxis dataKey="name" display={"none"} height={0} />
                    {/* <Tooltip cursor={{fillOpacity: '0'}}  /> */}
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            </div>
            <div className='container-grafics_4'>
                <div className='grafics_4'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={300} height={300}>
                    <Pie
                        data={dataPizza}
                        labelLine={false}
                        outerRadius={65}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        
                    </Pie>
                    <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
                </div>
            </div>
            
        </ContainerChartHome>
        
    )
}