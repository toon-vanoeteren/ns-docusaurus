---
sidebar_position: 2
title: Local Network Gateway
---
# Local Network Gateway

## Overview

The Local Network Gateway (LGW) contains information of the VPN peer IP and its IP space.  

<details>

<summary>Click to view design drawing</summary>

<!-- ![smol drawing](/img/azure/standards/networking/various/design_lgw.png) -->

</details>

:::info
Creating a local network gateway does **not** create VPNs automatically. A [connection](/docs/azure/standards/connectivity/interconnectivity/conn) is required.
:::

### Naming Convention

> 1. lgw for `Local Network Gateway`
> 2. Peer information
> 3. `Virtual Network Gateway` name
> 4. Instance number (01, 02, ...)
> 
> e.g. lgw-onprem-vgw-ns-weu-p-conn-01

### Parameters

1. **VPN Peer IP**  
The VPN Peer IP to which the `Virtual Network Gateway` will connect. In most cases, this will be a public IP. It is possible to create VPNs with private IPs.

2. **Address space**  
Defines the IP space of the VPN peer IP. When adding ranges, the `Virtual Network Gateway` will propagate the routes regardless if they are reachable or not. 

3. **BGP**  
It is possible to configure BGP for dynamic routing over VPNs and redundancy. When toggled on, you **must** specify the Peer ASN and BGP Peer IP.