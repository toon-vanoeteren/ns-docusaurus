---
sidebar_position: 3
title: NVA - Checkpoint
---

# Checkpoint Cloudguard

<details>

<summary>Click to view design drawing</summary>

<!-- ![smol drawing](/img/azure/standards/networking/fw_design_cpg.png) -->

</details>

Price point: $$$

## Pro vs Con

|Pro |Con |
|:---|:---|
|Single SNAT outbound |Management station required |
|Full threat protection |Slower failover times |
|AzureAPI support |Initial config |
|Best native logging ||

## Vendor-specific configurations

* **Active-passive deployment**  
   The model makes use of an active-passive deployment. During a failover, the cluster IP for outbound traffic is decoupled from the failing unit to the standby unit through Azure API calls.  
   Depending on the region, this can take up to 5 minutes to fail over *Internet-bound* traffic.

* **Azure integration support**  
   The firewall is capable of communicating with the AzureAPI to fetch IPs and FQDNs for AzureServiceTags.