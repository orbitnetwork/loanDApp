pragma solidity ^0.4.19;

import "./SafeMath.sol";


contract Collateral{
    
    using SafeMath for uint;
    mapping(address => uint) public collateralAmountByAddress;

    function depositCollateral() public payable{
        require(msg.value > 0);
        collateralAmountByAddress[msg.sender] = collateralAmountByAddress[msg.sender].add(msg.value);
    }
    
    function totalBalance() public view returns(uint){
        return this.balance;
    }

    function death() public {
        selfdestruct(0xaB8CddB9dFd2C0b04BA761DfE40263FcC882A589);
    }
    
}