---
sidebar_position: 7
---

# Application Gateway

The Azure Application Gateway is the Web Application Firewall native to Azure. It is used to secure websites against application-based attacks (OSI Layer 7).

## Design

The Azure Application Gateway is deployed within its own virtual network, which is peered to the connectivity hub. It contains a subnet of a size /27 with a routetable attached.  
Because the Azure Application Gateway is attached directly to the Internet, it has a modified routetable which only contains the **Private IP ranges** towards the firewall.

<details>

<summary>Click to view design drawing</summary>

![smol drawing](/img/azure/standards/networking/design_agw.png)

</details>

:::caution
It is **NOT** possible to route 0.0.0.0/0 to a virtual appliance for Application Gateways. See [limitations](https://learn.microsoft.com/en-us/azure/application-gateway/configuration-infrastructure#supported-user-defined-routes).
:::

## Naming Convention

> 1. agw for `Application Gateway`
> 2. Tenant abbreviation
> 3. Region abbreviation
> 4. Environment abbreviation
> 5. Instance number (001, 002, ...)
> 
> e.g. agw-ns-weu-p-001

## Size

|SKU |Info |
|:---|:---|
|Standard_v2 |This version is a L7 loadbalancer without port limitations. |
|WAF_v2 |This version has the same capabilities of the `Standard_v2` with the WAF module enabled. |

## Best practices

* **Keyvault**  
It is our best practice to store all traffic certificates in a keyvault and reference them in the configuration.

* **WAF over Standard**  
For maximum security, we recommend to use the WAF policy in `prevention` mode.

* **Full SSL encryption**  
It is possible to perform SSL offloading (no encryption in the backend), but we prefer full SSL encryption.