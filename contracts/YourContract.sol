// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract YourContract {
    uint256 public data;

    event DataUpdated(uint256 newData);

    constructor() {
        data = 0;
    }

    function setData(uint256 _data) external {
        data = _data;
        emit DataUpdated(_data);
    }

    function getData() external view returns (uint256) {
        return data;
    }
}
