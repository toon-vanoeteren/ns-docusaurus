---
sidebar_position: 1
---
# Firewalling

## Overview

> A firewall is a network security device that monitors incoming and outgoing network traffic and permits or blocks data packets based on a set of security rules.

## Vendors

|Vendor          | Type          | Mode          |
|:---------------|:--------------|:--------------|
|Fortigate       |Third-Party    |Active-Active  |
|Checkpoint      |Third-Party    |Active-Passive |
|Palo Alto       |Third-Party    |Unknown        |
|PfSense         |Third-Party    |Single         |
|Azure Firewall  |First-Party    |Active-Passive |

:::caution
**Management Access**  
Administrative access to the NVA firewalls is allowed over the Internet by default during the project phase/initial deployment. During the project phase, access will be restricted from the Internet to well-known Cegeka IPs. During the RUN phase, access will be limited to the connection kit.
:::

:::info
The NS Architect team made a comparison of the different NVAs versus the native Azure Firewall/NSG's. 
See Excel file [here](https://cegekagroup.sharepoint.com/:x:/r/sites/O-TechnicalArchitects/Shared%20Documents/General/1%20-%20Products/Azure/Azure%20-%20Public%20cloud%20firewall%20comparison.xlsx?d=wf708277428114b3ba4fe428ef0a9da78&csf=1&web=1&e=p6RWdg).
:::

## Azure Attributes

### Name
The name of the firewall is a combination of different variables

> 1. S for `Server`
> 2. V for `Virtual`
> 3. Tenant abbreviation
> 4. A for `Azure`
> 5. Vendor abbreviation
> 6. Instance number (001, 002, ...)
> 
> e.g. SVNSAFGTP0001

### Resource Group
The resource group name is a combination of different variables

> 1. rg for `Resource Group`
> 2. Tenant abbreviation
> 3. Region abbreviation
> 4. Environment abbreviation
> 5. Keyword `hub`
> 6. Vendor abbreviation
> 7. Keyword `01`
> 
> e.g. rg-ns-weu-p-hub-fgt-01

### Subscription
The firewall is always deployed in the **Connectivity** subscription. In legacy environments, the firewall was likely deployed in the **Hub** subscription.

### Size
The size or SKU determines the available CPUs and NICs of the firewall and is dependant on the chosen firewall flavor. The SKUs are listed in priority.\
For flavor specifications, please consult ns.architect@cegeka.com

|Flavor      | SKU (priority)                    |
|:-----------|:----------------------------------|
|Small       |Standard_D2ls_v5, Standard_F2s_v2  |
|Medium      |Standard_D4ls_v5, Standard_F4s_v2  |
|Large       |Standard_D8ls_v5, Standard_F8s_v2  |

:::caution
**Network acceleration**  
Due to restrictions on the SKU `Standard_F2s_v2`, network acceleration can only be activated on 1 NIC. We activate this on the *LAN NIC*.
:::

### Region  
During deployment of a firewall cluster, make sure to use different availability zones with the same region. A full overview can be found here: https://www.azurespeed.com/Information/AzureRegions

:::note
**Capacity issues**  
Due to resource capacity issues in West Europe and North Europe, it is currently not advisable to deploy new setups in these regions. For the most up-to-date deployment region, please contact O.Azure.
:::

## CMDB attributes

|CMDB Attribute         |Value                  |Additional Info                              |
|:----------------------|:----------------------|:--------------------------------------------|
|Tenant                 |Tenant name            |                                             |
|Resolver Group         |SSC.NS                 |                                             |
|Hostname               |[See Name](#name)      |                                             |
|Configuration          |Ask PM/SDM             |                                             |
|Class                  |Public Cloud Firewall  |                                             |
|Family                 |Virtual Firewall       |                                             |
|Status                 |In Use                 |                                             |
|Part of Subscription   |CI of the subscription |                                             |
|Service Window         |Ask PM/SDM             |If the service is 247, fill in the OOH Team  |
|Is guest of            |Cluster CI (optional)  |Only applicable for High Available firewalls |

All IP configurations have to be documented, this includes public and private IPs.

## Credentials

:::note
**AzureAdmin credentials**  
Automated rollouts automatically provision a "AzureAdmin" administrator account on the firewall. In case of emergencies you can always find the password for this user inside of the linked hub keyvault!
:::
