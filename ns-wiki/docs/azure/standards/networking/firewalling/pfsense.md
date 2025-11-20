---
sidebar_position: 5
title: NVA - PfSense
---

# PfSense

<details>

<summary>Click to view design drawing</summary>

![smol drawing](/img/azure/standards/networking/fw_design_pfs.png)

</details>

Price point: $

## Pro vs Con

|Pro |Con |
|:---|:---|
|Quick deployment |No failover |
||No advanced firewalling |

## Vendor-specific configurations

* **Edge-case**  
   This firewall should **never** be used as the main firewall in an environment. There are very few cases where it is used.

* **Single deployment**  
   Due to the limited use cases of this product, there is no high availability deployment.
