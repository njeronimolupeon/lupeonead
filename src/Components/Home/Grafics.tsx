import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { ContainerChartHome } from './Style.home';
import {dataLineChart, dataColumn, dataArea, dataPizza} from '../../DatasGrafic/DataGrafics';

/* Import de imagens*/

import setacima from '../../assets/img_icones/setacima.png';
import setabaixo from '../../assets/img_icones/Setabaixo.png';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['var(--azul-secundary)', 'var(--azul-complementary)', 'var(--warning)', 'var(--danger)', 'var(--gray-grafic)'];


export function Grafics(){
    return(
        <ContainerChartHome>
            
            <div className='container_chart_1'>
                <div className='conteudo_chart_1'>
                    <div className='legend_grafic_1'>
                        <p>Grupo A</p>
                        <span style={{backgroundColor: 'var(--azul-secundary)'}}></span>
                    </div>
                    <div className='legend_grafic_1'>
                        <p>Grupo B</p>
                        <span style={{backgroundColor: 'var(--azul-complementary)'}}></span>
                    </div>
                    <div className='legend_grafic_1'>
                        <p>Grupo C</p>
                        <span style={{backgroundColor: 'var(--warning)'}}></span>
                    </div>
                    <div className='legend_grafic_1'>
                        <p>Grupo D</p>
                        <span style={{backgroundColor: 'var(--danger)'}}></span>
                    </div>
                </div>

                <ResponsiveContainer width="50%">
                    <PieChart>
                        
                        <Pie
                            data={data}
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
                    <ResponsiveContainer width="50%" height="100%">
                        <LineChart width={300} height={100} data={dataLineChart}>
                        <Line type="monotone" dataKey="pv" stroke="#136CFB" strokeWidth={2} />
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
                    <BarChart width={150} height={40} data={dataColumn}>
                    <Bar dataKey="uv" fill="#136CFB"/>
                    <Tooltip />
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
                    data={dataArea}
                    margin={{
                        bottom: 0,
                    }}
                    >
                    <Area type="monotone" dataKey="uv" stroke="" fill="#136CFB"  />
                    <Area type="monotone" dataKey="pv" stroke="" fill="var(--azul-complementary_)"  />
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