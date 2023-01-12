import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { ContainerChartHome } from './Style.home';
import {dataLineChart, dataColumn, dataArea, dataPizza} from '../../DatasGrafic/DataGrafics';

/* Import de imagens*/

import setacima from '../../assets/img_icones/setacima.png';
import setabaixo from '../../assets/img_icones/Setabaixo.png';
import { useContext, useEffect, useState } from 'react';
import { EadContext } from '../../contexts/EadContext/EadContext';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['var(--azul-secundary)', 'var(--azul-complementary)', 'var(--warning)', 'var(--danger)', 'var(--gray-grafic)'];

interface dataCursoProps{
    name: string;
    value: number | null;
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

        const dataCursoStatus = [{ name: 'Cursos abertos', value: eadContext.cursos.filter(curso => curso.cursoStatusId == 1).length},
        {name: 'Cursos concluídos', value: eadContext.cursos.filter(curso => curso.cursoStatusId == 2).length},
        {name: 'Cursos aprovados', value: eadContext.cursos.filter(curso => curso.cursoStatusId == 3).length}]

        setDataCursoStatus(dataCursoStatus);

        const constCursoNotas: dataCursoProps[] = [];

        eadContext.cursos.map(curso => {
            let objCursoNotas = { name: curso.titulo, value: curso.nota }

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

    // const CustomTooltip = ({ active, payload, label }: any) => {
    //     if (active && payload && payload.length) {
    //       return (
    //         <div className="custom-tooltip">
    //           <p className="label">{`${label} : ${payload[2].value}`}</p>
    //         </div>
    //       );
    //     }
      
    //     return null;
    //   };

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

                <ResponsiveContainer width="50%">
                    <PieChart>
                        
                        <Pie
                            data={dataCursoStatus}
                            innerRadius={35}
                            outerRadius={55}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip  />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
            <div className='container_grafics_2'>
                <div className='grafics_2_1'>
                    <div>
                        <h2>34 345</h2>
                        <label><img src={setabaixo} alt="Seta positivo" /> 7,00%</label>
                    </div>
                    <ResponsiveContainer width="50%" height="100%">
                        <LineChart width={300} height={100} data={dataCursoNotas}>
                        <Line type="monotone" dataKey="value" stroke="#136CFB" strokeWidth={2} />
                        <Tooltip />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className='grafics_2_2'>
                    <div>
                        <h2>34 345</h2>
                        <label> <img src={setacima} alt="Seta positivo" /> 7,00%</label>
                    </div>
                <ResponsiveContainer width="50%" height="100%">
                    <BarChart width={150} height={40} data={dataCursoNotas}>
                    <Bar dataKey="value" fill="#136CFB" >
                        
                    </Bar>
                    <Tooltip cursor={{fillOpacity: '0'}} />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
            <div className='container-grafics_3'>
                <div className='grafics_3'>
                <div className='legend_grafic_3'>
                    <div> 
                        <h3>Texto de dados</h3>
                        <label>123456</label>
                    </div>
                    <div>
                        <h3>Texto de dados</h3>
                        <label>123456</label>
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
                    <Tooltip cursor={{fillOpacity: '0'}}  />
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