---
sidebar_position: 1
---
# Networking Overview

Microsoft Azure provides a wide array of networking services to connect, secure, and manage the network performance of applications. These services collectively provide robust, secure, and scalable networking capabilities. While there isn't an official breakdown called "pillars" of Azure networking services, we can categorize the key areas (or "pillars") as follows, based on their functionalities:

![Azure Networking](https://wedoazure.files.wordpress.com/2018/09/azurenetworkingfalludpate.png)


## Connect

- **Virtual Network (VNet):** Provides an isolated, securely managed environment to run Azure resources.
- **Virtual WAN:** A networking service providing optimized and automated branch connectivity.
- **ExpressRoute:** Enables private connections between Azure datacenters and infrastructure on your on-premises or in a colocation environment.
- **VPN Gateway:** To establish secure, cross-premises connectivity.
- **Azure DNS:** Manage your DNS records using the same credentials, APIs, tools, and billing as your other Azure services.

## Protect

- **DDoS Protection:** Safeguard Azure applications by mitigating and protecting against Distributed Denial of Service (DDoS) attacks.
- **Fortigate/Azure Firewall:** A managed, cloud-based network security service that protects your Azure Virtual Network resources.
- **Network Security Groups (NSG):** Controls inbound and outbound traffic to resources, such as VMs.
- **Application Gateway:** Offers a web traffic load balancer that enables you to manage traffic to your web applications.
- **Private Endpoint:** A network interface that connects you privately and securely to a service powered by Azure Private Link.
- **Service Endpoint:** Allows you to secure Azure service resources to your virtual network by eliminating exposure to the public internet.
  
## Delivery

- **Content Delivery Network (CDN):** A distributed network of servers that can efficiently deliver web content to users.
- **Azure Front Door:** It provides global load balancing and site acceleration services to applications, ensuring optimal performance and high availability for your end users.
- **Traffic Manager:** A DNS-based traffic load balancer that enables you to distribute traffic optimally to services across global Azure regions.
- **Application Gateway:** A dedicated virtual appliance providing application delivery controller (ADC) as a service.
- **Load Balancer:** Provides high availability by distributing incoming network traffic across multiple servers.

## Monitoring

- **Network Watcher:** Offers network performance monitoring and diagnostic services.
- **ExpressRoute Monitor:** This service is a part of Azure Monitor and provides monitoring, alerting, and logging capabilities for Azure ExpressRoute.
- **Azure Monitor:** Full-stack monitoring, advanced analytics, and intelligent insights to ensure availability and performance.
- **Virtual Network TAP:** (Terminal Access Point) It provides the capability to continuously stream your virtual machine network traffic to a network packet collector or analytics tool.

## Todo

- Licenses for Azure DevOps.
- Specific instructions for Architects?
- List of SME's with Chat.
- Route tables.
- VNet peering en propagation.
- Subnet address space/prefix e.g. Fortigate Front/Backend.

### Via de chat

David Brouwers

index:

1. Naming convention	6
1. Azure VNET	7
1. Azure NVA (network virtual appliance)	18
1. Azure load balancer	29
1. Azure Interconnectivity	33
1. Azure Traffic Manager (GTM)	42
1. Azure application gateway (L7)	42
1. Azure Security Tools	43
1. Azure on prem tools	43

[Azure networking services overview][networking-overview]

 [//]: # (************************)
 [//]: # (INSERT LINK LABELS BELOW)
 [//]: # (************************)

[networking-overview]: https://learn.microsoft.com/en-us/azure/networking/fundamentals/networking-overview
