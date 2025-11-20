---
sidebar_position: 1
title: Virtual Network Gateway
---

# Virtual Network Gateway

## Overview

> Virtual Network Gateway

<details>

<summary>Click to view design drawing</summary>

<!-- ![smol drawing](/img/azure/standards/networking/various/design_vgw.png) -->

</details>

## Naming Convention

> 1. vgw for `Virtual Network Gateway`
> 2. Tenant abbreviation
> 3. Region abbreviation
> 4. Environment abbreviation
> 5. Subnet abbreviation
> 6. Type abbreviation (exr or vpn)
> 7. Instance number (01, 02, ..)
> 
> e.g. vgw-ns-weu-p-conn-vpn-01

## Gateway type

There are 2 types of `Virtual Network Gateway`: `VPN Gateway` and `ExpressRoute Gateway`.

:::caution
A `Virtual Network Gateway` **must** be deployed in a `GatewaySubnet`. Each `GatewaySubnet` is limited to 1 instance of each type.
:::

### VPN Gateway

This `Virtual Network Gateway` hosts Site-to-Site VPNs, Client-to-Site VPNs and VNET-to-VNET connections.  

#### SKU

The SKU of a `VPN Gateway` affects the aggregated throughput, the number of supported tunnels and zone redundancy. A full breakdown of the SKUs can be found [here](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways#gwsku).

:::info
**Best practice**  
Cegeka recommends the use of **AZ** SKUs in regions with availability zones for optimal resiliency.
:::

#### Modes  
`VPN Gateways` can be configured in 2 possible modes:

* **Active-Passive**  
In the Active-Passive mode *(default)*, there is a single instance of the `VPN Gateway` running. If the active instance fails, a backup instance will become active. This setup requires a single public IP.

* **Active-Active**  
In the Active-Active mode, both instances of the `VPN Gateway` are running simultanously and traffic is loadbalanced between both nodes. This setup requires 2 public IPs.

#### Parameters

* **Gateway Private IPs**  
If this option is toggled, the gateway will try to initiate VPN tunnels using its private IP. This option is rarely used.

* **BGP**  
If BGP is enabled for high availability, some settings can be modified.  
   * Autonomous System Number (ASN)  
   The default ASN of Azure is 65515 and can be modified.  
   * Custom APIPA BGP Peer IPs  
   It is possible to configure one or multiple custom BGP Peer IPs per instance.  

:::info
If APIPA addresses are configured and regular IPs are configured in the address space of the `Local Network Gateway`, Azure will revert to using its private IPs for initiating BGP peering sessions.  
  
If APIPA addresses are used for BGP peering, the on-premise device **must** initiate the BGP peering connections.  
:::

#### Point-to-site

Never ever ever never never ever ever ever never use this. Thank you.

### ExpressRoute Gateway  
This `Virtual Network Gateway` is used to connect an `Expressroute Circuit` to the environment.

#### SKU

The SKU of an `ExpressRoute Gateway` affects the supported throughput, number of circuits and number of supported routes. A breakdown of the SKUs with their related performance can be found [here](https://learn.microsoft.com/en-us/azure/expressroute/expressroute-about-virtual-network-gateways#virtual-network-gateway-limitations-and-performance).

#### Parameters

Besides the name and public IP, the `ExpressRoute Gateway` does not require additional configuration. 