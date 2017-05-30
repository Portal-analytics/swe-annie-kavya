import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';	
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import ReactDOM from 'react-dom';

injectTapEventPlugin();


export default class contractTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            currentIndex: 0,
            contracts: [],
            buttonState: true
        };
    }

    /*
    handleInputChange(field, e) {
        const value = e.target.value;
        field = "name";
        this.setState({
            ...this.state,
            
            field: name, // attribute called field that is assigned to name prop
            [field]: value, // brackets evaulate field to name, then name attribute is set to value
            
            name: value,
            "name" : value
        })
    }
    */

    handleNameChange = (event, name) => {
        this.setState({
            name, 
            description: this.state.description, 
            price: this.state.price, 
            contracts: this.state.contracts
        });
    }
    handleDescriptionChange = (event, description) => {
        this.setState({
            name:this.state.name, 
            description, 
            price:this.state.price, 
            contracts: this.state.contracts
        });
    }
    handlePriceChange = (event, price) => {
        this.setState({
            name:this.state.name, 
            description:this.state.description, 
            price, 
            contracts: this.state.contracts
        });

    }    
    
    onSubmit = (contracts) => {
        const contract = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price
        };

        this.setState({
            name: "",
            description: "",
            price: "",
            contracts: this.state.contracts.concat([contract]), 
           
        });

    }

    onEditButtonClick = (index) => {
        var currentContract = this.state.contracts[index]
        this.setState({
            ...this.state,
            name: currentContract.name,
            description: currentContract.description,
            price: currentContract.price,
            buttonState: !this.state.buttonState
        });
        
    }

    handleReSubmit = (index) => {
        const updated_contract = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
        };
        var updated_list = this.state.contracts.slice(0)
        updated_list[index] = updated_contract
        this.setState({
            ...this.state,
            buttonState: !this.state.buttonState,
            contracts: updated_list
        });
    }

    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <TextField hintText={"Enter name"} value={this.state.name} onChange={this.handleNameChange}/>
                    </div>    
                    <div>
                        <TextField hintText={"Enter description"} value={this.state.description} onChange={this.handleDescriptionChange}/>
                    </div>
                    <div>
                        <TextField hintText={"Enter price"} value={this.state.price} onChange={this.handlePriceChange}/>
                    </div>
                    <RaisedButton label={this.state.buttonState ? 'Submit' : 'ReSubmit'} onTouchTap={this.state.buttonState ? this.onSubmit : () => this.handleReSubmit()}/>
                    <table>
                        <th> Title </th>
                        <th> Description </th>
                        <th> Price </th>
                        {this.state.contracts.map( (contractItem, index) => {
                                return (
                                        <tr key={index}>
                                            <td> {contractItem.name} </td>
                                            <td> {contractItem.description} </td>
                                            <td> {contractItem.price} </td>
                                            <button onClick={() => this.onEditButtonClick(index)}> Edit </button>
                                        </tr> 
                                ); 
                            })}
                    </table>   
                </div>
            </MuiThemeProvider>


        )
    }
}
ReactDOM.render(<contractTracker />, document.getElementById('root'));