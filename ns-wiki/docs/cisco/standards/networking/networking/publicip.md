---
sidebar_position: 5
title: Public IP
---

# Public IP  

> A public IP is an IP address which is reachable from the Internet. 

## Naming convention  

> 1. pip for `Public IP`
> 2. Resource name where the IP is hosted
> 3. Instance number (01, 02, ...)
> 
> e.g. pip-SVNSAFGTP0001-01

## SKU  

Azure provides 2 different SKUs for public IPs: `Basic` and `Standard`. The `Basic` SKU will be deprecated on September 30, 2025 [\(source\).](https://azure.microsoft.com/en-us/updates/upgrade-to-standard-sku-public-ip-addresses-in-azure-by-30-september-2025-basic-sku-will-be-retired/)

|SKU |`Standard` |`Basic` |
|:---|:---|:---|
|Allocation method| Static |Dynamic |
|Availability Zone support |Yes |No |
|Global loadbalancing support |Yes |No |
  
:::caution
**Dynamic allocation**  
When de-allocating a device with a `Basic` public IP, the public IP is no longer reserved. A new public IP will be assigned when the device is started.
:::

:::info
When allocating a `Standard` IP to a virtual machine, ingress traffic will be blocked by default. An NSG is required to allow the explicit ingress traffic.
:::

## Constraints

As a public IP exposes a device to the Internet, we do **not** allow virtual machines to host a public IP.  
Here is a list of devices which are allowed to host one or multiple public IPs:

  * The firewall VMs
  * The External loadbalancer of the firewall
  * Virtual Network Gateway
  * Expressroute Gateway
  * Application Gateway
  * Bastion

In order to allocate a public IP to a device, it **must** to be located within the same subscription and region as the device.

## BYOIP

It is possible to advertise your own public IP addresses with no additional charge. The process and limitations are listed [here](https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/custom-ip-address-prefix).