import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import Form from './Form';
import Info from './Info';
import './App.css'
import CollateralABI from '../../build/contracts/Collateral.json';

import web3 from '../web3';

const styles = {
  jumboStyle: {
    width: "50%",
    margin: "auto",
    height: "400px"
  }
};

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '0xa....',
      balance: '',
      CollateralInstance: '',
      accounts: ''
    }

  }

  async componentDidMount() {
    const contract = require('truffle-contract');
    const Collateral = contract(CollateralABI);
    Collateral.setProvider(web3.currentProvider);

    const accounts = await web3.eth.getAccounts();
    const CollateralInstance = await Collateral.deployed();
    this.setState((prevState) => {
      return {
        CollateralInstance
      }
    })

    this.setState((prevState) => {
      return {
        address: accounts[0]
      }
    })
    this.getBalance(accounts[0]);
  }


  getBalance = async (address) => {
    const { CollateralInstance } = this.state;
    const balance = await CollateralInstance.collateralAmountByAddress.call(address);
    console.log(web3.utils.fromWei(balance.toString()));
    this.setState((prevState) => {
      return {
        balance: web3.utils.fromWei(balance.toString(), 'ether')
      }
    })
  }
  depositCollateral = async (value) => {
    console.log(`vaaaaaa${value}`);
    const { CollateralInstance, address } = this.state;
    const valueInWei = web3.utils.toWei(value, 'ether');
    console.log(CollateralInstance, address);
    await CollateralInstance.depositCollateral({from: address, value:valueInWei})
    this.getBalance(address)
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
    //  */

    // const contract = require('truffle-contract')
    // const simpleStorage = contract(SimpleStorageContract)
    // simpleStorage.setProvider(this.state.web3.currentProvider)

    // // Declaring this for later so we can chain functions on SimpleStorage.
    // var simpleStorageInstance

    // // Get accounts.
    // this.state.web3.eth.getAccounts((error, accounts) => {
    //   simpleStorage.deployed().then((instance) => {
    //     simpleStorageInstance = instance

    //     // Stores a given value, 5 by default.
    //     return simpleStorageInstance.set(5, {from: accounts[0]})
    //   }).then((result) => {
    //     // Get the value from the contract to prove it worked.
    //     return simpleStorageInstance.get.call(accounts[0])
    //   }).then((result) => {
    //     // Update state with the result.
    //     return this.setState({ storageValue: result.c[0] })
    //   })
    // })
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <Jumbotron style={styles.jumboStyle}>
            <Info address={this.state.address} balance={this.state.balance} />
            <Form depositCollateral={this.depositCollateral} />
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default App
