---
title: "Observability"
description: "Understanding observability in modern applications"
order: 2
---

# The Internet

- The *Internet* is a vast interconnected network of networks, linking hosts from all over the globe using a series of network devices and allowing the exchange of information through the implementation of standardized protocols. Data is exchanged via network devices, such as switches and routers, relaying infomation through various requests and responses from the hosts. 

## Network
https://launchschool.com/lessons/4af196b9/assignments/268243e5

- "At the most basic level, it's two devices connected in such a way that they can communicate or exchange data."

- A network, in its simplest form, is formed when two devices are connected, allowing communication and data to be exchanged between them.

### Local Area Network (LAN)
https://launchschool.com/lessons/4af196b9/assignments/268243e5

- "...multiple computers and other devices connected via a network bridging device such as a hub or, more likely, a switch. The computers are all connected to this device via network cables, and this forms the network."

- A Local Area Network (LAN) is established between multiple devices that have a tangibly physical source connecting them, typically within a close proximity. These devices are connected by networks cables that are grouped together using hubs, bridges, or switches.

### Wireless Local Area Network (WLAN)

- Similarly to a LAN, a Wireless Local Area Network is established between mutliple nearby devices; however, these devices are instead connected through radio waves, creating a wireless connection between devices. While WLAN allows for greater device transportability, it comes at the cost of slower latency and smaller bandwidth.

### Router

- "Routers are network devices that can route network traffic to other networks. Within a Local Area Network, they effectively act as gateways into and out of the network."

- Networks are linked together by the implementation of **routers**, which route data enchange from network to network.

### Protocol

- "In simple terms, we can think of a protocol as a *system of rules*."
- "In terms of computer networks, we can be a bit more specific: A set of rules that govern the exchange or transmission of data."

- A *protocol* is a system of rules that two hosts follow to allow for successful data exchange or transmission. Without these agreed-upon rules, information between the hosts would become chaotic and likely misunderstood and unprotected.

Why so many protocols?

1. "Different protocols were developed to address different aspects of network communication."
2. "Different protocols were developed to address the same aspect of network communication but differently for a specific use case."

## Network Models
https://launchschool.com/lessons/4af196b9/assignments/21ef33af

- "Although there is utility in both of these approaches, no single model will perfectly fit a real-world implementation."

### OSI Model

Wikipedia: https://en.wikipedia.org/wiki/OSI_model

- "The Open Systems Interconnection model (OSI model) is a reference model from the International Organization for Standardization (ISO) that "provides a common basis for the coordination of standards development for the purpose of systems interconnection."

- Layer 7: Application
- Layer 6: Presentation
- Layer 5: Session   
- Layer 4: Transport (Service to Service)
- Layer 3: Network (End to End)
- Layer 2: Data Link (Hop to Hop)
- Layer 1: Physical (Transporting Bits)

### Internet Protocol Suite (TCP/IP) Model

- Layer 4: Application (5-7)
- Layer 3: Transport (4)
- Layer 2: Network (3)
- Layer 1: Network Interface (1-2)

## Protocol Data Units (PDU)
https://launchschool.com/lessons/4af196b9/assignments/21ef33af

"...a Protocol Data Unit (PDU) is an amount or block of data transferred over a network. Different protocols or protocol layers refer to PDUs by different names. At the Link/ Data Link layer, for example, a PDU is known as a frame. At the Internet/ Network layer it is known as a packet. At the Transport layer, it is known as a segment (TCP) or datagram (UDP)."

- A protocol data unit (**PDU**) represents a block of data that is transferred across a network, with each PDU receiving a different name depending on its placement within the OSI or TCP/IP model.

Specific Layer PDUs:

- Transfer - *segments* (TCP) *datagrams* (UDP)
- Network - *packets*
- Data Link - *frames* (Ethernet frames)

### Encapsulation of Data

- The entire PDU for a specific layer of a network model--header, data payload, trailer--is encapsulated as the data payload for the layer below it. For example, the TCP segment of a data exchange is encapsulated within the data payload of the IP packet, which is then encapsulated as the data payload of the ethernet frame. This allows each layer to operate independently, disregarding any information from other layers and providing a 'service' to the upward layer.

Quiz Answers:

- "Encapsulation is implemented through the use of Protocol Data Units (PDUs)."
- "Encapsulation creates separation between protocols operating at different networks layers."
- "With encapsulation, the entire PDU from one layer forms the data payload for the PDU at the layer below."

### Header/Trailer

"The exact structure of the header and, if included, trailer varies from protocol to protocol, but the purpose of them is the same in each case: to provide protocol-specific metadata about the PDU."

## The Physical Layer

### Wires, Cables, and WiFi (Khan Academy)
https://www.khanacademy.org/computing/code-org/computers-and-the-internet/internet-works/v/the-internet-wires-cables-and-wifi

### Bit
Khan Academy
"A bit can be described as any pair of opposites: on or off, yes or no. We typically use a 1 (on) or a 0 (off)"
"These are the atoms of information."
"Today, we physically send bits by electricity, lights, and radio waves."

### Bandwidth

- "Bandwidth is the amount of data that can be sent in a particular unit of time (typically, a second)."

- **Bandwidth** refers to the total data that can be transferred from one device to another within a specific timeframe.

### Bit Rate

"The number of bits that we can send over a given period of time, usually measured in seconds."

### Latency

- "...latency is a measure of the time it takes for some data to get from one point in a network to another point in a network."
- "We can think of latency as a measure of delay."

- **Latency** is the measure of time that it takes for data to move from one part of a network to another.

Different types of delay:

- Propagation delay
- Transmission delay
- Processing delay
- Queing delay
- Last-mile latency
- Round-trip Time (RTT)

### Methods of Transportation

1. Electricity (Copper wires)

- Cheap
- Signal loss

2. Fiber Optic Cable

"A thread of glass engineered to reflect light."
- Really fast
- No signal loss
- Expensive

3. Radio Waves

"Uses radio signal to send bits from one place to another."
- Translates 1's and 0's from binary to radio waves and back.
- Totally mobile
- Short range

### Fault Tolerant

- Because a package can take a variety of routes from one IP address to another, the system is fault tolerant, as a distruption in one path can be avoiding by following another path.

### Hop

- A **hop** is the movement from one device to another. Each IP package keeps track of its hop count, preventing bugs in the path from halting a delivery using the hop limit.

## Ethernet
https://launchschool.com/lessons/4af196b9/assignments/81df3782

- "An Ethernet Frame adds logical structure to this binary data."
- "Two of the most important aspects of Ethernet are framing and addressing."

## MAC Address
https://launchschool.com/lessons/4af196b9/assignments/81df3782

- Media Access Control address
- "Since this address is linked to the specific physical device, and (usually) doesn't change, it is sometimes referred to as the physical address or burned-in address. MAC Addresses are formatted as a sequence of six two-digit hexadecimal numbers, e.g. 00:40:96:9d:68:0a, with different ranges of addresses being assigned to different network hardware manufacturers."

- The Media Access Control (**MAC**) address is an address, formatted as a sequence of six two-digit hexadecimal numbers, that is linked to the Network Interface Card (NIC) of a specific physical device and typically never changes. While useful in the exchange of Ethernet frames between adjacent devices, MAC addresses do not scale well, as they are non-hiarchical and illogical in nature.
