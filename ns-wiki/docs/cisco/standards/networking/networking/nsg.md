---
sidebar_position: 4
title: NSG
---

# Network Security Group

> A network security group (NSG) is a simple packet filter which provides limited protection to resources. It can be attached to a subnet or a NIC.

## Naming convention

> 1. nsg for `Network Security Group`
> 2. Resource name where the NSG is hosted
> 
> e.g. nsg-SVNSAFGTP0001 for a NIC  
> e.g. nsg-snet-ns-weu-p-conn-01 for a subnet

## Rulebase

The rulebase is a numbered sequence and will be handled from top to bottom. When creating an NSG, a set of default firewall rules will be applied. These rules start with a priority of 65000 and **cannot** be modified or removed.  
  
<!-- ![Default NSG ruleset](/img/azure/standards/networking/various/nsg_ruleset.png) -->

## Custom rules

Custom rules can be created for inbound and outbound traffic and can be identified by their priority between 1 and 4096. Keep the following best practices in mind:

1. Start custom rules with a priority of 100 and increment with 10
2. Create a specific allow rule from the management stations for port SSH (TCP/22) and RDP (TCP/3389)
3. Create a deny rule with low priority (4000+) to deny access for SSH and RDP from `Any` source
4. Avoid using NSGs on both subnet and NIC level simultaniously to avoid conflicts

:::info
**VirtualNetwork as Source/Destination**  
The keyword `VirtualNetwork` is **not** limited to the IP space of the subnet or VNET. It contains **all** subnets of the VNET, **all** peered VNETs and **all** advertised networks of the Virtual Network Gateways. Applying a default NSG will **not** provide additional protection.
:::

### Special cases

There are number of special cases:

1. **Firewall NVA Frontend NICs**  
   Attaching an NSG to a NIC with a public IP is mandatory to allow ingress Internet traffic. Frontend NICs of the firewall **must** have a AllowAnyInbound rule.

2. **GatewaySubnet**  
   The GatewaySubnet does not support NSGs.

3. **RouteServerSubnet**  
   The RouteServerSubnet does not support NSGs.

4. **AzureFirewallSubnet**  
   The AzureFirewallSubnet does not support NSGs.

5. **Application Gateways**  
   NSGs are supported on subnets hosting Application Gateways but there are special rules required. See [documentation](https://learn.microsoft.com/en-us/azure/application-gateway/configuration-infrastructure#required-security-rules).
