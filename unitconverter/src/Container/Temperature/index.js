import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import '../style.css';

export default class Temperature extends React.Component {
    constructor() {
        super();
        this.state={
            output: '',
            input: '',
            from:'Celsius',
            to:'Kelvin'
        };
        this.takeinput = this.takeinput.bind(this);
        this.fromselect = this.fromselect.bind(this);
        this.toselect = this.toselect.bind(this);
        this.output = this.output.bind(this);
    }
    takeinput(e) {
        let val = e.target.value;
        val=Number(val);
        this.setState({
            input: val
        });
        this.output(val);
    }
    output(val) {
        if(this.state.from === 'Celsius'){
            if(this.state.to === 'Kelvin') {
                val = val+273.15;
            }
            else if(this.state.to === 'Farhenheit') {
                val = (val*9/5)+32;
            }
            else;
        }
        else if(this.state.from === 'Kelvin') {
            if(this.state.to === 'Celsius') {
                val = val-273.15;
            }
            else if(this.state.to === 'Farhenheit') {
                val = ((val-273.15)*9/5)+32;
            }
            else;
        }
        else {
            if(this.state.to === 'Kelvin') {
                val = ((val-32)*5/9)+273.15;
            }
            else if(this.state.to === 'Celsius') {
                val = ((val-32)*5/9);
            }
            else;
        }
        this.setState({
            output: val
        });
    }
    fromselect(e) {
        let select = e.target.value;
        this.setState({
            from: select,
        });
        this.output(this.state.input);
    }
    toselect(e) {
        let selectto = e.target.value;
        this.setState({
            to: selectto,
        });
        this.output(this.state.input);
    }
    render() {
        return(
            <div>
                <Header/>
                <div className="input_block text-center">
                    <h2>NOTE: Double click on the unit to covert</h2><br/>
                    <div className="row block">
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="from" value={this.state.input} onChange={this.takeinput} className="col-8"/>
                            <p className="col-1 unit_color">{this.state.from}</p>
                        </div>
                        <select size="4" className="row select_block" onClick={this.fromselect}>
                            <option value="Celsius">Celsius</option>
                            <option value="Kelvin">Kelvin</option>
                            <option value="Farhenheit">Farhenheit</option>
                        </select>
                    </div>
                    <div className="col">
                        <div className="row">
                            <input type="number" placeholder="to" value={this.state.output} className="col-8"/>
                            <p className="col-1 unit_color">{this.state.to}</p>
                        </div>
                        <select size="4" className="row select_block" onClick={this.toselect}>
                            <option value="Celsius">Celsius</option>
                            <option value="Kelvin">Kelvin</option>
                            <option value="Farhenheit">Farhenheit</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}