import React, { Component } from 'react'
import 'antd/dist/antd.min.css';
import "../../component.css"
import { Card, Input, Button, Table } from 'antd';
const InputStyle = {
	background: "#DAA520",
	color: "white",
	fontWeight: "bold",
	fontSize: "24px"

};
var A = [], 
B = [], 
X, 
matrixA = [], 
matrixB = [],
output = []
class Cramer extends Component{
    constructor(){
        super()
        this.state={
            row: parseInt(0),
            column: parseInt(0),
            showDimentionForm: true,
            showMatrixForm: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.cramer = this.cramer.bind(this);
    }
    cramer(){
        this.getMatrix()
        var couter=0

        while (couter!=this.state.row ) {
            var transformatrix=JSON.parse(JSON.stringify(A)) 
        }
    }
}