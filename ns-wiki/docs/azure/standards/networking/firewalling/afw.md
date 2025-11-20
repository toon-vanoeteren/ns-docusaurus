---
sidebar_position: 6
title: Native - Azure Firewall
---
# Azure Firewall

<details>

<summary>Click to view design drawing</summary>

![smol drawing](/img/azure/standards/networking/fw_design_afw.png)

</details>

## Pro vs Con

|Pro |Con |
|:---|:---|
|Fully managed in code |Hard to read rulebase |
|Azure Service Tags native support |Low log retention |
||No log export options |
||No advanced firewalling on standard tier |
||No native sniffer tooling |
||All assigned public IPs used for SNAT |

## Vendor-specific configurations

* **NAT**  
   Hide-NAT is configured in a unique way. By design, all traffic towards [non-RFC1918 ranges](https://en.wikipedia.org/wiki/Private_network) will be hidden behind the public IP addresses assigned to the Azure firewall. Exceptions will need to be added manually.  
   The Azure Firewall will use ***ALL*** assigned public IPs for outbound SNAT traffic, making whitelisting challenging.

* **Rule collections**  
   An Azure firewall makes use of rule collections which are subsets of firewall rules. There are 3 different rule types: DNAT, network and application rules. They are processed in this exact order.
   * DNAT  
      When configuring a DNAT rule, the traffic is implicitely allowed. No additional rule is required.
   * Network  
      These rules are your standard network rules consisting out of IPs, IP Groups, FQDNs, Protocols and Ports. 
   * Application  
      These rules only apply to HTTP, HTTPS and MSSQL.


* **IP Groups**  
  An Azure firewall is capable of using groups but these have to be defined seperately before they can be used in the rulebase.