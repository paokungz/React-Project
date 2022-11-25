import React, { Component } from 'react'
import 'antd/dist/antd.min.css';
import { Card, Input, Button, Table } from 'antd';
import { error, func} from '../../Useful/Chage';
import Graph from '../../Useful/Graph';
import "../../component.css"
import ApexCharts from 'apexcharts';
import Plot from 'react-plotly.js';
import {  Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend );
const InputStyle = {
	background: "#DAA520",
	color: "white",
	fontWeight: "bold",
	fontSize: "24px"

};
var dataTable=[],errarray=[],fxarray=[],iterationarr=[],labels
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "XL",
        dataIndex: "xl",
        key: "xl"
    },
    {
        title: "XR",
        dataIndex: "xr",
        key: "xr"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    },
    {
        title: "F(x)",
        key: "fxanser",
        dataIndex: "fxanser"
    }
];
const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
const data1 = {
    labels: fxarray,
    datasets: [
      {
        label: 'Dataset 1',
        data: errarray,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
}
class Bisection extends Component{
	constructor(){
		super();
		this.state={
            fx: "",
            xl: 0,
            xr: 0,
            error: 0,
            inputerror: 0,
            showOutputCard: false,
            showGraph: false,
            showcheckans : false,
        };
		this.handleChange=this.handleChange.bind(this);// JavaScript เมธอดของคลาสจะไม่ถูกผูกไว้โดยค่าเริ่มต้น bind เพื่อกำหนดFuc onclick 
		this.bisection=this.bisection.bind(this);
	}
	bisection(xl,xr,inputerror){
		var increaseFunction = false;
        var xm = 0;
        var sum = parseFloat(0.000000);
        var n = 0; 
		var data=[]
		data['xl']=[]
		data['xr'] = []
        data['x'] = []
        data['error'] = []
        data['fxanser']=[]
		if (func(this.state.fx, xl) < func(this.state.fx, xr)) {
            increaseFunction = true;
        }
		do{
			xm=(xl+xr)/2;
            if (func(this.state.fx, xm) * func(this.state.fx, xr) < 0){
                sum = error(xm, xr);
                if (increaseFunction) {
                    xl = xm;
                }
                else {
                    xr = xm;
                }
            }else {
                sum = error(xm, xl);
                if (increaseFunction) {
                    xr = xm;
                }
                else {
                    xl = xm;
                }
            }
            data['xl'][n] = xl;
            data['xr'][n] = xr;
            data['x'][n] = xm;
            data['error'][n] = Math.abs(sum).toFixed(8);
            data['fxanser'][n] = func(this.state.fx , xm);
            n++;
            dataTable.push({
                iteration: n,
                xl: xl,
                xr: xr,
                x: xm,
                error: Math.abs(sum).toFixed(8),
                fxanser : func(this.state.fx , xm)
            })
            errarray.push(Math.abs(sum).toFixed(8));
            fxarray.push(xm);
            iterationarr.push(n)

		}while (Math.abs(sum) > inputerror );
        this.setState({
            showOutputCard: true,
            showGraph: true,
            showcheckans : true
        })
	}
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
	render(){ 
        let { fx, xl, xr, inputerror } = this.state;
		return(
			<div style={{ background: "#FFFF", padding: "30px" }}>
				<h2 style={{ color: "black", fontWeight: "bold" }}>Bisection</h2>
				<div className="row">
                    <div className="col">
					<Card
                            bordered={true}
                            style={{ background: "black", borderRadius:"15px", color: "#FFFFFFFF" }}
                            onChange={this.handleChange}
                            id="inputCard"
                        >
                            <h2 style={{color:"white"}}>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                            <h2 style={{color:"white"}}>X<sub>L</sub></h2><Input size="large" name="xl" style={InputStyle}></Input>
                            <h2 style={{color:"white"}}>X<sub>R</sub></h2><Input size="large" name="xr" style={InputStyle}></Input><br /><br />
                            <h2 style={{color:"white"}}>Error</h2><Input size="large" name="inputerror" style={InputStyle}></Input>
                            <div className="row">
                                <div className="center">
                                    <Button id="submit_button" onClick= {()=> this.bisection(parseFloat(xl), parseFloat(xr), parseFloat(inputerror))} 
                                    style={{ background: "#4caf50", color: "white"  }}>Submit</Button>
                                </div>
							</div>
					</Card>
				</div>
                <div className='col'>
                        {this.state.showGraph && 
                      <Line
                      options={options} data={data1} 
                      />
                        }
                </div>
			</div>
            <div className='row'> 
            {this.state.showOutputCard &&
                        <Card
                            title={"Output"}
                            bordered={true}
                            style={{ width: "100%", background: "#2196f3", color: "#FFFFFFFF" }}
                            id="outputCard"
                        >
                            <Table columns={columns} dataSource={dataTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black" }}></Table>
                           
                        </Card>
                    }
            </div>
			</div>
		);
    }
}

export default Bisection