---
sidebar_position: 5
title: Virtual WAN
---
# Virtual WAN

## Overview

According to Microsoft: “Azure Virtual WAN is a networking service that brings many networking, security, and routing functionalities together to provide a single operational interface.”
It is  management interface to facilitate the configuration of the communication between the different WAN connections, and VNETs. vWAN is a hub-and-spoke model with centralized management.

<details>

<summary>Click to view high level overview of vWAN</summary>

<!-- ![vWAN High Level](/img/azure/standards/networking/various/vwan-highlevel.png) -->

</details>

## Types

1. **Basic**  
   - Site-to-site VPN only


2. **Standard**  
   - ExpressRoute
   - User VPN (P2S)
   - VPN (site-to-site)
   - Inter-hub and VNet-to-VNet transiting through the virtual hub
   - Azure Firewall
   - NVA in a virtual WAN


## Interesting Resources

* [Best Practices Guide by Check Point][Best-Practices-By-CheckPoint] 
* **[Presentation NS Architects on vWAN][Presentation-NS-Arch-vWAN]**


[Best-Practices-By-CheckPoint]: https://cegekagroup.sharepoint.com/:b:/r/sites/O-TechnicalArchitects/Shared%20Documents/General/1%20-%20Products/Azure/best-practices-to-secure-azure-vwan.pdf?csf=1&web=1&e=5RfPmn
[Presentation-NS-Arch-vWAN]: https://cegekagroup.sharepoint.com/:p:/r/sites/O-TechnicalArchitects/Shared%20Documents/General/1%20-%20Products/Azure/Azure%20vWAN.pptx?d=w43bb37294ff3405c92aea2b0677c70c0&csf=1&web=1&e=r4BN7W