// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract Tracking {
    enum ShipmentStatus { PENDING, IN_TRANSIT , DELIVERED }

    struct Shipment {
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 distance;
        uint256 price;
        ShipmentStatus status;
        
    }
}