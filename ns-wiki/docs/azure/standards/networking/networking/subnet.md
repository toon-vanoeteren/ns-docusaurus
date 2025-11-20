---
sidebar_position: 2
title: Subnet
---

# Subnet

<details>

<summary>Click to view drawing</summary>

![smol drawing](/img/azure/standards/networking/design_snet.png)

</details>

## Overview

Subnets are a subcomponent of Virtual Networks. They are the module in which actual deployments happen. A subnet takes a portion of the parent Virtual Network IP range. 
While subnets can be of pretty much all sizes, the minimum required size is a /29.

### Naming Convention

> 1. snet for `Subnet`
> 2. Tenant abbreviation
> 3. Region abbreviation
> 4. Environment
> 5. Accurate description of the network purpose
> 
> e.g. snet-ns-weu-p-spoke

### Subnet Reserved IP's

Much like in a traditional networking picture, certain IP's within a subnet can not be used.
The first 3 IP's of any given subnet, and the last IP can not be used for your resources.
Let's have a look at example subnet 10.0.0.0/24:

|IP          | Purpose          |
|:---------------|:--------------|
|10.0.0.1    |Azure Gateway   |
|10.0.0.2    |DNS IP    |
|10.0.0.3    |DNS IP    |
|10.0.0.255   |Broadcast IP    |

This means that the first VM getting placed into this subnet will get IP 10.0.0.4.
This is why you won't see any firewall in Azure with the "expected" gateway IP of ".1".

### Subnet Types

Most subnets can be named however you like (within the Cegeka standard), but there are exceptions. These exceptions host their own specialised services and do not allow for deploying other types of resources into them. There are also additional subnets that you can expect to see for every tenant when it comes down to the networking standard.

#### GatewaySubnet

This is a dynamic subnet that's used solely for the purpose of VPN. It hosts only VPN gateways and nothing else. The name is static and can not be changed through any means.

#### AzureBastionSubnet

This is a dynamic subnet that's used solely for the Bastion service within Azure. 

#### AzureFirewallSubnet

This subnet is defined by placing a native Azure Firewall.

#### RouteServerSubnet

Azure Route Server is a service that can be used to propagate your ranges across an entire WAN. While not preferred within our organization, there are edge cases where it is useful. This subnet is dedicated to the router of the Route Server.

### Illegal Subnet Locations

Certain subnet types should only ever be spotted in certain locations.

#### GatewaySubnet

This type of subnet should exist exclusively within the hub network, as it is expected to terminate all connections with third-parties, remote offices and/or Cegeka.

:::caution
When running into a tenant where this subnet is deployed within a spoke, please validate if it was discussed. In rare cases some tenants have joint access over a subscription and may be participating in rogue deployments.
:::

### Assigned Modules

Subnets can be assigned two more services: Network Security Groups (NSG's) and Route Tables (UDR's).
It is `required` to assign an NSG to each subnet and `required` to attach a UNIQUE route table to each subnet.

#### Route Tables

For more information on what configurations must be done, please consult [route tables](routetable.md)!

#### Network Security Groups

For more information on what configurations must be done, please consult [network security groups](nsg.md)!

### Endpoints

Endpoints in Azure are used to communicate directly with certain services native to Azure. Since there are many PaaS and SaaS services available, it is important to be able to prevent exposure to the internet. For example, you can privatize your SQL PaaS endpoints, and send your communication to them via a private endpoint. This removes the need to approach it over the WAN. While these components themselves are managed by O.Azure, it is important to know their influence on the network.

#### Service Endpoints

Service endpoints are managed exclusively by O.Azure.

#### Private Endpoints

As mentioned before, private endpoints are used to stop exposing public endpoints. They do this by utilizing a private IP within a subnet, and propagating this new private IP as a /32 to the rest of the network so that it takes priority. On the subnet however you can define whether you want this behavior to occur or not.

![smol drawing](/img/azure/standards/networking/various/subnetpe.png)

By enabling the "route tables" flag, you ensure that the route tables are still being followed - and the /32 propagation behavior is disabled.

### Private subnet

A new feature that was rolled out at Microsoft is that by default subnets no longer have access to the internet.
Previously if you deployed a VM into an empty subnet without any routing tables/nsg, you would be able to fetch data from the internet.
Please note that this new feature is now enabled `by default` on any newly created subnets after this release date.

