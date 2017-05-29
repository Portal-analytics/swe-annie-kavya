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

/*const ContractTable = ({contracts}) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                
            </TableRow>
        </TableBody>
    </Table>
);*/


export default class contractTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            price: "",
            contracts: []
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

        this.state.contracts.push(contract);
        console.log(contracts)
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
                    <RaisedButton label="Submit" onTouchTap={this.onSubmit}/>
                </div>
                {/*<ContractTable contracts={this.state.contracts} />*/}
            </MuiThemeProvider>


        )
    }
}
ReactDOM.render(<contractTracker />, document.getElementById('root'));