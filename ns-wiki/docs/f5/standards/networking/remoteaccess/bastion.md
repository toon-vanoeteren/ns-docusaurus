---
sidebar_position: 1
title: Bastion
---

# Bastion

## Overview

This article will be limited to the networking aspect of Bastion. An in-depth description of the service can be found here (insert hyperlink).

### Location

An Azure Bastion can only be deployed in its designated subnet `AzureBastionSubnet`. There are 2 valid locations where this subnet can be deployed:

* **Management spoke**  
The Bastion in this location is used for Remote Access for Cegeka engineers. Access is limited to jumphost servers within the management spoke.

* **Connectivity hub**
The Bastion in this location is used for Remote Access for Third Parties. Access to resources is enforced by RBAC.