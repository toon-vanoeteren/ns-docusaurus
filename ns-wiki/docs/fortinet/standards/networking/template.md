---
sidebar_position: 6
title: Template
---

# Name of the `resource type`

:::important
Max 2-sentence description and link to Azure docs and pricing pages
:::

`Resource Type` provides `some capabilities`, `some security features`, and `other` capabilities, making it a versatile tool for optimizing and securing your `Solution` in the Azure cloud.

## `Resource Type` Use cases

:::important
To describe where we use used this Azure Resource Type for our customers at Cegeka
:::

`Resource type` is a awesome and powertool tool with several key use cases and best practices.

- Use case number 1
- Use case number 2
- Best practice 1

### Use case number 1

Give some useful information regarding this Use Case.

### Use case number 2

Give some useful information regarding this Use Case.

### Best practice 1

Describe the do's and don't you want to share.

## Design considerations

:::important

- List what we learned from designing the resource and integrating it in our solutions.
- List best practices
:::

When designing `Resource Type`, there are several important considerations to keep in mind.

### Resource organization

<details open>
  <summary>Resource organization</summary>

| `Recource Type Identifier` | **Resource organization** |
|:-------|:---|
| Statement | **By default we deploy an `Resource Type` within the `Landing Zone` subscription** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

</details>

### Network Design

<details open>
  <summary>Virtual network</summary>

| `Recource Type Identifier` | **Virtual network** |
|:-------|:---|
| Statement | **By default we deploy a seperate VNET within the `Platform Landing Zone Connection` subscription** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

| `Recource Type Identifier` | **Route table** |
|:-------|:---|
| Statement | **By default we deploy a Route Table associated with `Resource type` subnet** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

</details>

### Monitoring and Logging

<details open>
  <summary>Log Analytics Workspace (LAW)</summary>

| `Recource Type Identifier` | **Log Analytics Workspace** |
|:-------|:---|
| Statement | **By default we use the LAW within Platform Landing Zone: `Management` subscription** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

</details>

<details open>
  <summary>Diagnostic setting</summary>

| `Recource Type Identifier` | **Category groups** |
|:-------|:---|
| Statement | **By default we enable for the Logs Category groups `allLogs`** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

| `Recource Type Identifier` | **Metrics** |
|:-------|:---|
| Statement | **By default we enable for the Metrics `AllMetrics`** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

</details>

### Security

Implement appropriate security measures: `Explain Important Secutiy Considerations` for this `Resource Type`.

<details open>
  <summary>Configuration Item</summary>

| APPGW006 | **Configuration Item** |
|:-------|:---|
| Statement | **When an `Resource Type` uses a Public Endpoint (Public IP Address) we `some statement`** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

</details>

## Other `Recource Type` settings

Here you can describe additional information regarding addtional settings for `Recource Type`.

### `Additional settings`

<details open>
  <summary>Additional settings</summary>

| `Recource Type Identifier` | **Additional setting 1** |
|:-------|:---|
| Statement | **By default we enable `Some additional setting 1`** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

| `Recource Type Identifier` | **Additional setting 2** |
|:-------|:---|
| Statement | **By default we enable `Some additional setting 2`** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

</details>

<details open>
  <summary>Other userful information</summary>

| `Recource Type Identifier` | **Useful Information 1** |
|:-------|:---|
| Statement | **By default we enable `Some Information setting 1`** |
| Rationale | Explain **WHY** regarding this **Statement**.|
| Implications | Explain **WHAT** regarding this **Statement**.|
||Some additional information this **Statement**.|

</details>

## IaC Repository

:::important
Where can you find our Terraform Super Module.
:::

Our (Azure CC) central Azure DevOps/Github repository location of the Terraform Module(s) for this `Resource Type`.

| Module | **Remarks** |
|:-------|:---|
|[some module](https://dev.azure.com/cgkcaf-cgk/Cgkcaf%20-%20Azure%20IaC/_git/cgkcaf?path=/&version=GBmain) | Terraform module for `Resource Type` |

## Cegeka KB articles

:::important
Another idea to be developed under the "Azure Engineering" part of the docs. A KB with short KB entries which could be tagged with Azure resource types and then pops up in this list automatically when tagged with the resource type.
:::

| KB Number | Remarks |
|:-------|:---|
| [`KB Type Identifier`](https://support.microsoft.com/en-us) | Some addtional information about this KB article. |

## More information

:::important
Link to useful external articles
:::

### Option 1: Default markdown anchors

- [Example: Microsoft Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/overview)
- [Example: Azure Resource Manager](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview)
- [Example: Cegeka Cloud Enablement](https://www.cegeka.com/en/nl/solutions/cloud-enablement)

### Option 2: More advanded anchors

Here you can find the [Azure landing zones foundation: High-level design document][HLD]

[HLD]: https://cegekagroup.sharepoint.com/:w:/r/sites/O-BLInfra-CloudServices/Shared%20Documents/03%20-%20Cloud%20Service%20Design%20Documents/CS.080.5XX%20-%20Azure%20Design%20Documents/CS.080.501%20Azure%20Landing%20Zone%20Foundation/Solution%20HLD%20-%20Azure%20Landing%20Zones%20Foundation.docx?d=wad2e1c2460654d4c8564cd452758f8c2&csf=1&web=1&e=ICiLXf
