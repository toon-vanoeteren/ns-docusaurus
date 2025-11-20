---
sidebar_position: 2
title: NVA - Fortigate
---

# Fortigate

<details>

<summary>Click to view design drawing</summary>

<!-- ![smol drawing](/img/azure/standards/networking/fw_design_fgt.png) -->

</details>

Price point: $$$

## Pro vs Con

|Pro |Con |
|:---|:---|
|Fast failover times |2 Outbound IPs |
|Full threat protection ||
|No management station required ||
|Azure integration support ||

## Vendor-specific configurations

* **Active-active deployment**  
   The firewall is deployed with an active-active model, meaning both units are receiving and processing traffic. This model allows for very fast failover times and does not involve the AzureAPI. A downside of this method is that the cluster will use both public IPs of the firewall for outbound SNAT.

* **Azure integration support**  
   It is possible to configure the Fortigate firewall to connect to the AzureAPI by using the [Azure SDN Connector](https://docs.fortinet.com/document/fortigate-public-cloud/7.4.0/azure-administration-guide/948968/azure-sdn-connector-service-principal-configuration-requirements) and fetch AzureTags and AzureServices to be used in firewall rules. 

* **Fully qualified domain name (FQDN) support**  
   The firewall is capable of use FQDNs in its firewall rules for dynamic domains. DNS requests have to pass *through* the firewall to allow correct resolving.