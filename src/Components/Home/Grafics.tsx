import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { ContainerChartHome } from './Style.home';

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
                            innerRadius={40}
                            outerRadius={60}
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
            
            <ResponsiveContainer width="40%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
        </ContainerChartHome>
        
    )
}