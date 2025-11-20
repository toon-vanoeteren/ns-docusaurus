---
sidebar_position: 7
title: NAT Gateway
---

# Azure NAT Gateway

Azure NAT Gateway is a fully managed and highly resilient Network Address Translation (NAT) service. You can use Azure NAT Gateway to let all instances in a private subnet connect outbound to the internet while remaining fully private. Unsolicited inbound connections from the internet aren't permitted through a NAT Gateway. Only packets arriving as response packets to an outbound connection can pass through a NAT Gateway.

NAT Gateway provides dynamic SNAT port functionality to automatically scale outbound connectivity and reduce the risk of SNAT port exhaustion.

![NAT - High level](/img/azure/standards/networking/various/natgateway_highlevel.png)


## Azure NAT Gateway basics

1. **Outbound connectivity**
   - Outbound connectivity with NAT Gateway is defined at a per subnet level. NAT Gateway replaces the default Internet destination of a subnet.
   - No traffic routing configurations are required to use NAT Gateway.
   - NAT Gateway allows flows to be created from the virtual network to the services outside your virtual network. Return traffic from the Internet is only allowed in response to an active flow. Services outside your virtual network can’t initiate an inbound connection through NAT Gateway.
   - NAT Gateway takes precedence over other outbound connectivity methods, including Load balancer, instance-level public IP addresses, and Azure Firewall.
   - When NAT Gateway is configured to a virtual network where a different outbound connectivity method already exists, NAT Gateway takes over all outbound traffic moving forward. There are no drops in traffic flow for existing connections on Load balancer. All new connections use NAT Gateway.
   - NAT Gateway doesn't have the same limitations of SNAT port exhaustion as doesdefault outbound access and outbound rules of a load balancer.
   - NAT Gateway supports TCP and UDP protocols only. ICMP isn't supported.

2. **Availability zones**
   - A NAT Gateway can be created in a specific availability zone or placed in 'no zone'.
   - NAT Gateway can be isolated in a specific zone when you create zone isolation scenarios. This deployment is called a zonal deployment. After NAT Gateway is deployed, the zone selection can't be changed.
   - NAT Gateway is placed in 'no zone' by default. A non-zonal NAT Gateway is placed in a zone for you by Azure.


## Azure NAT Gateway architecture

NAT Gateway uses software defined networking to operate as a distributed and fully managed service. Because NAT Gateway has multiple fault domains, it's able to withstand multiple failures without any effect to the service.

NAT Gateway provides source network address translation (SNAT) for private instances within subnets of your Azure virtual network. When configured on a subnet, the private IPs within your subnets SNAT to a NAT Gateway's static public IP addresses to connect outbound to the Internet. NAT Gateway also provides destination network address translation (DNAT) for response packets to an outbound originated connection only.

![NAT - High level](/img/azure/standards/networking/various/natgateway_architecture.png)

When a NAT Gateway is attached to a subnet within a virtual network, the NAT Gateway assumes the subnet’s default next hop type for all outbound traffic directed to the internet. No extra routing configurations are required. NAT Gateway doesn't provide unsolicited inbound connections from the internet. DNAT is only performed for packets that arrive as a response to an outbound packet.

### Subnets

A NAT Gateway can be attached to multiple subnets within a virtual network to provide outbound connectivity to the internet. When a NAT Gateway is attached to a subnet, it assumes the default route to the internet. The NAT Gateway will then be the next hop type for all outbound traffic destined to the internet.
The following subnet configurations can’t be used with a NAT Gateway:

   - A subnet can’t be attached to more than one NAT Gateway. The NAT Gateway becomes the default route to the internet for a subnet, only one NAT Gateway can serve as the default route.
   - A NAT Gateway can’t be attached to subnets from different virtual networks.
   - A NAT Gateway can’t be used with a gateway subnet. A gateway subnet is a designated subnet for a VPN gateway to send encrypted traffic between an Azure virtual network and on-premises location. 

### Static public IP addresses

A NAT Gateway can be associated with static public IP addresses or public IP prefixes for providing outbound connectivity. NAT Gateway supports IPv4 addresses. A NAT Gateway can use public IP addresses or prefixes in any combination up to a total of 16 IP addresses. If you assign a public IP prefix, the entire public IP prefix is used. You can use a public IP prefix directly or distribute the public IP addresses of the prefix across multiple NAT Gateway resources. NAT Gateway will groom all traffic to the range of IP addresses of the prefix.

   - A NAT Gateway can’t be used with IPv6 public IP addresses or prefixes.
   - A NAT Gateway can’t be used with basic SKU public IP addresses.

### Limitations

   - Basic load balancers and basic public IP addresses aren't compatible with NAT Gateway. Use standard SKU load balancers and public IPs instead.
   - NAT Gateway doesn't support ICMP.
   - IP fragmentation isn't available for NAT Gateway.
   - NAT Gateway doesn't support public IP addresses with routing configuration type Internet. To see a list of Azure services that do support routing configuration internet on public IPs.
   - Public IPs with DDoS protection enabled are not supported with NAT Gateway.


## Pro’s and cons

**Pro's**
   - This is a Azure native product that can easily be deployed true the Azure Portal.
   - For small environments this can be a valid solution for outbound connectivity.

**Con's**
   - Even though it is possible to assign multiple IP addresses or prefixes, you have no control in saying which IP you must use going out. This means that Azure will pick an IP and try to stick as much as possible to that.
   - No ICMP support .
   - IP fragmentation isn't available.
   - If a legacy SKU exists in the VNET, the NAT Gateway refuses to deploy. This could be a problem for legacy customers that are still using load balancers of SKU type “Basic”.


## Conclusion

The above is enough of a reason to conclude we shouldn’t be doing this by default in any case. This boils down to the same discussion we had back when we had to decide which SNAT method to use for FortiGates.
Does that mean I think it doesn’t serve a purpose at all? Not really, as you may know there are certain networks where we must route certain service tags towards the internet directly, because sending it through the firewall breaks their functionality, look at Databricks or Logic/Function apps.
In those cases, the spoke itself routes towards the internet. There are cases where this traffic must go to the internet to a 3rd party, which requires it to have a certain IP to whitelist. In those cases, it *may* be interesting to assign a NAT Gateway to the spoke network, and more specifically the PaaS subnets.


## Solution

To have more control over the outgoing public IP, our standard solution is a FortiGate firewall conform the Hub spoke Azure design:

<details>

<summary>Click to view FortiGate design drawing</summary>

![FortiGate design Azure](/img/azure/standards/networking/fw_design_fgt.png)

</details>

Introducing a FortiGate in Azure enables us to have full control far beyond layer4 and makes it possible to specify what IP’s need to be used on outbound traffic.
The FortiGate will be installed in the traditional Hub – Spoke design where all Vnet are peered to the Hub where the FortiGate resides. 
