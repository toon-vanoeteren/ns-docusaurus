---
sidebar_position: 3
title: Connection
---

# Connection

## Overview

A connection is the link between a `Virtual Network Gateway` and a `Local Network Gateway` or `Expressroute Circuit`. It contains key components such as cryptography settings, secrets and advanced BGP settings.

### Naming Convention

> 1. cn for `Connection`
> 2. `Local Network Gateway` or `Expressroute Circuit` name
> 3. `Virtual Network Gateway` name
> 
> e.g. cn-lgw-onprem-vgw-ns-weu-p-conn

### Cryptography  
These settings are only applicable for connections with a `Local Network Gateway`. They can be used to increase the security of the VPNs.

1. **Authentication**  
This secret is the pre-shared key between Azure and the remote site to establish a VPN tunnel.

1. **IKE (Phase 1)**  
* Encryption (e.g. AES256)
* Integrity (e.g. SHA512)
* DH Group (e.g ECP256)

:::info
The lifetime of IKEv2 in Azure is fixed to 28800 seconds and **cannot** be modified.
:::

2. **IPsec (Phase 2)**  
* Encryption (e.g. AES256) 
* Integrity (e.g. SHA256)
* PFS Group (e.g ECP256)
* Lifetime (Cegeka uses time-based lifetimes exclusively)

3. **Dead Peer Detection (DPD)**  
Dead Peer Detection is a mechanism to identify if the VPN peer is still responsive. If the peer fails to respond within 3 attempts, the `Virtual Network Gateway` will close the VPN tunnel prematurely to save resources. To avoid intermediate connection issues, it is highly recommended to configure both peers with the same DPD settings.

4. **BGP**  
If BGP is used for dynamic routing, it needs to be enabled on the `Connection`. 
:::info
Certain providers (e.g. AWS) will not accept route advertisements if the BGP peer IP does not match with the tunnel. It is possible to assign an individual BGP Peer IP to each instance if the Virtual Network Gateway is running in `Active-Active` mode.
:::

5. **NAT**  
It is possible to implement NAT inside the VPN tunnels to resolve IP conflict between Azure and the VPN Peer. We highly discourage the use of this feature.

