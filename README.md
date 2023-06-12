# Lab 11: CAPS-Events
## The Code Academy Parcel Service
Problem Domain: This repository contains the code for the CAPS (Code Academy Parcel Service) system, which is a simulation of a real-world supply chain. CAPS is an event-driven application that manages package pickups, deliveries, and notifications between vendors and drivers.
## Phase 1
In this initial phase, we will set up a pool of events and handler functions for CAPS. The focus is on establishing the infrastructure, and although the mechanisms for triggering events may change in future phases, the handler functions will remain largely the same.

The following user/developer stories outline the major functionality for Phase 1:

- As a vendor, I want to alert the system when I have a package to be picked up.
- As a driver, I want to be notified when there is a package to be delivered.
- As a driver, I want to alert the system when I have picked up a package and it is in transit.
- As a driver, I want to alert the system when a package has been delivered.
- As a vendor, I want to be notified when my package has been delivered.

- As a developer, I want to use industry standards for managing the state of each package.
- As a developer, I want to create an event-driven system so that I can write code that responds to events in real time.

### Vendor Client Application
- Implement a module for managing vendor events.
- Use the store name as a parameter.
- When triggered, simulate a pickup event for the given store name to the global event pool.
- Emit a pickup event to the global event pool.
- Listen for a delivered event and respond by logging a thank you message to the console: "Thank you for your order <customer-name>"

- [UML for Lab 11](./assets/uml-lab-11.png)

# Lab 12: CAPS-Socket.io 
## Delivery Tracking System
Problem Domain: This repository contains the code for a delivery tracking system built using Socket.io. The system enables real-time communication between server and client applications, allowing vendors and drivers to track package pickups and deliveries.
### Phase 2
In Phase 2, we will be transitioning from using Node Events to Socket.io for networking. This will enable clients to communicate over a network, and Socket.io will manage the connection pool, simplifying broadcasting and supporting both terminal-based and web clients.

The core functionality of the system remains the same, but in this phase, we will be creating a networking layer using Socket.io. Therefore, the user stories related to application functionality remain unchanged, but the developer story is updated to reflect the refactoring work required.

### Overview
The primary objective of this lab is to create a namespaced Socket.io event server and configure the Vendor and Driver Client Modules.

- The Socket Server will create a namespace called caps that will receive all CAPS event traffic.
- Each Vendor and Driver Client will connect to the caps namespace.
- The server will emit specific events to each socket that is listening for their designated events from the Global Event Pool defined in the Server.
- Each Vendor will emit and listen for specific events based on their Vendor ID, managed by rooms within Socket.io.
- Each Driver will simulate package pickup, in-transit, and delivered events based on notifications received from Vendors.

### Global Event Pool (HUB)
Configure the Socket.io npm package to create an event Server that can be started on a designated port using Node.js.

- Accept connections on a namespace called caps and configure socket objects from clients.
- Ensure that client sockets connect to their appropriate room, if specified.
- Configure a Global Event Pool that every client socket should listen for:
  - pickup: This will be broadcast to all sockets except the sender.
  - in-transit: This will be emitted only to Vendors that have joined the appropriate room.
  - delivered: This will be emitted only to Vendors that have joined the appropriate room.
Note: You may need to create an extra event here that allows clients to join rooms.
### Vendor Client Application
Connects to the CAPS Application Server using socket.io-client:
- Make sure your module connects to the caps namespace.
- Use the store name 1-206-flowers to simulate a single vendor.


- [UML for Lab 12](./assets/uml-lab-12.png)




# Lab 13: CAPS-Queue
## CAPS Delivery Tracking System - Message Queues
Problem Domain: implementing a message queue system for the CAPS Delivery Tracking System. The message queues ensure reliable delivery of event notifications to the intended recipients, allowing vendors and drivers to subscribe to specific events and catch up on missed notifications. This README provides an overview of the lab, including business requirements, technical requirements, and development instructions.

## Business Requirements

- As a vendor, I want to "subscribe" to "delivered" notifications so that I know when my packages are delivered.
- As a vendor, I want to "catch up" on any "delivered" notifications that I might have missed so that I can see a complete log.
- As a driver, I want to "subscribe" to "pickup" notifications so that I know what packages to deliver.
- As a driver, I want to "catch up" on any "pickup" notifications I may have missed so that I can deliver everything.
- As a driver, I want a way to "scan" a delivery so that the vendors know when a package has been delivered.

## Technical Requirements

The technical requirements for implementing the message queue system are as follows:

- Configure a socket.io server to handle events.
- Create a message queue on the server to store payloads for specific clients.
- Add an event to the global event pool when a payload is received.
- Implement a mechanism for clients to retrieve all undelivered messages from their respective queues.
- Refactor the existing events ("delivered," "pickup," and "in-transit") to add payloads to the appropriate queues and broadcast them to subscribers.
- Develop vendor client applications to subscribe to vendor queues and catch up on missed messages.
- Refactor the driver client application to use queues and subscribe to vendor queues.

## Development Instructions

To set up and work on the lab, follow these steps:

1. Clone the CAPS repository.
2. Create a new branch named `queue` based on the previous day's branch.
3. Navigate to the `server` directory and configure the socket.io server to handle events.
4. Implement the message queue system on the server, including adding messages to queues and broadcasting events to subscribers.
5. Refactor the existing events to incorporate the message queues.
6. Develop the vendor client applications (`acme-widgets` and `1-800-flowers`) to subscribe to vendor queues and handle missed messages.
7. Refactor the driver client application to use queues and subscribe to vendor queues.
8. Test the implementation thoroughly, including unit tests for event handler functions and the queue module.
9. Ensure code quality and engineering goals are met, such as improving code readability and reusability.
10. If desired, work on the stretch goal of abstracting socket.io-client functionality into a class.

## Visual Validation

To visually validate the functionality of the message queue system, follow these steps:

1. Start all three servers: Queue Server, Vendor Client Application Servers, and Driver Client Application Server.
2. Stop one of the application servers to simulate missed messages.
3. Resend requests to the queue to generate undelivered messages.
4. Restart the application server and verify that it retrieves and logs all queued messages correctly.

## Testing

Unit tests play a crucial role in ensuring the correctness of the implementation. The following testing steps should be followed:

1. Write unit tests for each event handler function, ensuring that they are called and executed as expected.
2. Utilize Jest spies or mocks to verify the correct invocation of handlers.
3. Write unit tests for the queue module to

- [UML for Lab 13](./assets/uml-lab-13.png)

## Covers All:
### **License**
This project is licensed under the MIT License.