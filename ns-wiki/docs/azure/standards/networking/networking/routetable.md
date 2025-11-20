---
sidebar_position: 3
title: Route Table
---

# Route Tables

<details>

<summary>Click to view drawing</summary>

![smol drawing](/img/azure/standards/networking/design_snet.png)

</details>

## Overview

Route tables, also commonly referred to as UDR's are a component that can be attached to subnets within Virtual Networks. They are meant to influence the routing behavior of the linked subnet. Routing tables should be unique per subnet - never use duplicates as this destroys the purpose of granularity.

### Naming Convention

> 1. rt for `Route Table`
> 2. subnet name in full (of the subnet you're attaching this route table to)
> 
> e.g. rt-ns-test-subnet

### Route Types

Within Azure there is a distinction between two types of routes that are known to any single resource.

:::info
Regardless of the route type, be aware that the most specific always wins!
:::

#### User Routes

User routes are the types of routes that would be the same as the static routes in a traditional network. As the name suggests, these are routes inserted by the user manually. In most environments following routes should be "standard" for following subnets:

##### GatewaySubnet

The GatewaySubnet should contain a route towards EACH Virtual Network. In some cases you will also see a route for each subnet instead, this is also allowed and allows for more granular control - but it is not required. The format of the route name should be: Route-to-"VirtualNetwork".

:::caution
Make sure to never put a default (0.0.0.0/0) route on this subnet! This will break any and all VPN systems inside of it.
:::

##### Spokes

Each spoke should always have the same routing table, besides a few exceptions.
Below is an example for a subnet called "snet-spoke" with IP space 10.0.1.0/24 inside of a Virtual Network "vnet-spoke" with IP space 10.0.0.0/23.
The example subnet has a fictionary firewall in the connected hub with IP 192.168.0.4.

|Route Table          | Route Name         | Route   | Next Hop
|:---------------|:--------------|:----------------|:----------------|
|rt-snet-spoke    |default  | 0.0.0.0/0 | 192.168.0.4
|      |Route-to-vnet| 10.0.0.0/23 | 192.168.0.4
| |Route-to-self| 10.0.1.0/24 | VnetLocal

##### Application Gateway Subnet

|Route Table          | Route Name         | Route   | Next Hop
|:---------------|:--------------|:----------------|:----------------|
|rt-snet-appgw    |Route-to-RFC1918-1  | 192.168.0.0/16 | 192.168.0.4
|      |Route-to-RFC1918-2| 10.0.0.0/8 | 192.168.0.4
| |Route-to-RFC1918-3| 172.16.0.0/12 | 192.168.0.4

:::info
There are multiple Next-Hop types, but the most used ones for us will be: Virtual Appliance (firewall), VnetLocal (local Virtual Network breakout) and Internet (direct internet breakout).
:::

#### System Routes

In contrary to User-Defined Routes, System Routes are not controlled by the user at all. These types of routes get injected into the subnets routing information by Azure itself. The contents of these routes can be seen by viewing the `Effective Routes` on a VM's NIC. Certain actions like for example connecting a VPN in Azure, will inject the BGP advertised IP ranges or the statically defined encryption domain into the routing tables of all connected networks. This is important because if the broadcasted ranged are more specific than the UDR routes, the system routes will win.

Another example is peering. As soon as you peer with another Virtual Network, the IP address space of the linked Virtual Network will be inserted into the system routes of your local network.

### Propagation

The routing table has a BGP propagation flag which is important to understand. Let's say we have a Virtual Network that is connected to a hub Virtual Network. By default - the peering will also advertise everything that the hub is learning as well. If the hub has a VPN connected inside of it, those ranges will therefore be immediately propagated to the spoke Virtual Network as well.

In these cases we opt to toggle the BGP propagation off in the spoke Virtual Networks to make sure that he does NOT learn these routes and instead, focuses on his own local UDR.
Therefore BGP propagation should only be enabled on the following subnets:

> 1. Firewall subnets
> 2. GatewaySubnet



