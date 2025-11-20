---
sidebar_position: 1
title: Virtual Network
---

# Virtual Network

<details>

<summary>Click to view drawing</summary>

![smol drawing](/img/azure/standards/networking/design_vnet.png)

</details>

## Overview

> A virtual network (a.k.a. `vnet`) is a collection of IP ranges. It dictates which IP spaces the subnets can use. Within the deployment model of Cegeka you will commonly hear these referred to under the term "Hub & Spokes" - where the "Hub" is your central Virtual Network and your "Spokes" are child Virtual Networks that are attached to said "Hub".

:::caution
Be mindful when selecting an IP range for a new tenant. Always check beforehand if there is any IP overlap with other parts of the customer's network! If the tenant is expected to connect with Cegeka as well, also here a review is needed for overlap. At minimum the mandatory "Connection Kit" IP space should be considered when deploying.
:::

## Address Space

### Hub Network
When selecting an IP space for the hub network, always select at minimum a /23. Any less will put the environment at risk of running out of space when deploying multiple services that require to be at the hub. While it is possible to add additional ranges to the Virtual Network, updating the object can cause desync in the peering processes.

#### Layout

|Vnet          | Subnet          |
|:---------------|:--------------|
|Hub Vnet (/23)    |Frontend Subnet (/27)   |
|      |Backend Subnet (/27)    |
|       |GatewaySubnet (/27)    |
|         |AzureBastionSubnet (/27)   |
|  |PrivateEndpointSubnet (/27)   |

#### Naming Convention

> 1. vnet for `Virtual Network`
> 2. Tenant abbreviation
> 3. Region abbreviation
> 4. Environment abbreviation
> 5. Keyword `hub`
> 
> e.g. vnet-ns-weu-p-hub

### Application Gateway Network
When selecting an IP space for the application gateway network, always select a /24. This network will be exclusively used to host an Application Gateway.

#### Layout

|Vnet          | Subnet          |
|:---------------|:--------------|
|AGW Vnet (/24)    |AGW Snet (/27)   |
|      |PrivateEndpointSubnet (/27)    |

#### Naming Convention

> 1. vnet for `Virtual Network`
> 2. Tenant abbreviation
> 3. Region abbreviation
> 4. Environment abbreviation
> 5. Keyword `hub`
> 6. Keyword `agw`
> 
> e.g. vnet-ns-weu-p-hub-agw

### Other Networks
The address spaces for spoke networks are decided by the O.Azure team. We do however ask that you remain vigilant in making sure the allocated IP spaces are within reason. If you see networks along the line of /16's, this will almost certainly never be needed.

Certain subnets should also never be seen inside of these Virtual Networks. See [Illegal Subnet Locations](./subnet#illegal-subnet-locations)!

## Connected Devices

Should you ever need to know which IP's are allocated within your virtual networks, within the portal you may always consult the "Connected Devices" tab to show this information. Please note that some dynamically allocated subnets do not show their assigned IP's (e.g. GatewaySubnet).

## Subnets

For details regarding subnets, please consult [subnets](subnet.md)!

## DNS Servers

Always make sure that this setting correctly points to the DNS servers of the tenant. By design this will cause the traffic within the network to look for the DNS servers via the firewall.

## Peerings

### Overview

<details>

<summary>Click to view drawing</summary>

![smol drawing](/img/azure/standards/networking/design_peering.png)

</details>

### Functionality

Peerings are used to be the "bridge" between Virtual Networks. You can consider it to be a tunnel of sorts. They play a key part in the "Hub & Spokes" model. Once peering is set up between two Virtual Networks, they are aware of each others IP address space and hosts within it can begin communicating with each other.

:::caution
Peerings should only ever be done between the Hub Virtual Network and a Spoke Virtual Network. Peerings between two Spoke Virtual Networks can only be done when absolutely required on an applicational level. If you observe an abuse of peerings, always report this as it can cause unwanted routing bypasses.
:::

### Global Peering

Global peering is not entirely different from regular peering. It is a term used for connecting two Virtual Networks that are in different regions OR subscriptions. In cases where a tenant wants to connect their Azure environment to their DR environment (and they do not have an Expressroute or similar) it is allowed to do this.

:::caution
While it is technically possible to connect your Virtual Networks to a third-party Virtual Network in another subscription, this is not allowed by default. If this arises it has to be raised with our architect team to discuss the options first! Do NOT simply implement this!
:::

### Settings

The settings on a peer link should always be the same.
Please follow below standards.

#### Peering from a Hub to a Spoke

![hubtospoke](/img/azure/standards/networking/various/hubtospoke.png)

#### Peering from a Spoke to a Hub

![spoketohub](/img/azure/standards/networking/various/spoketohub.png)

## Endpoints

Endpoints are not managed by SSC.NS, but you can find some more information on them [here](./subnet#endpoints)!

