# 360° Systems & Security Trace
## Audit Framework & Assessment Checklist

---

**Document Type:** Operational Framework
**Version:** 1.0
**Last Updated:** January 2026

---

## Overview

This document provides the complete framework for executing the 360° Systems & Security Trace audit engagement. Use this checklist to ensure consistent, thorough assessments for every client.

---

## Engagement Timeline

```
Week 1                    Week 2                    Week 3
┌─────────────────────────────────────────────────────────────────────┐
│ Day 1-3      │ Day 4-7      │ Day 8-10     │ Day 11-14   │ Day 15-18│
│ Discovery    │ Network &    │ Apps &       │ Analysis &  │ Delivery │
│ & Access     │ Infrastructure│ Security    │ Roadmap     │          │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Phase 1: Discovery & Access (Days 1-3)

### Day 1: Kickoff

#### Pre-Kickoff Preparation
- [ ] Review signed SOW and confirm scope
- [ ] Review client questionnaire responses
- [ ] Research client company (website, LinkedIn, news)
- [ ] Prepare kickoff presentation/agenda
- [ ] Set up client folder in documentation system
- [ ] Create client organization in password vault

#### Kickoff Meeting Checklist
- [ ] Introductions completed
- [ ] Engagement scope reviewed
- [ ] Timeline and milestones confirmed
- [ ] Communication preferences established
- [ ] Primary contact identified
- [ ] Access requirements documented
- [ ] Stakeholder interviews scheduled
- [ ] Next steps confirmed

#### Post-Kickoff Actions
- [ ] Send meeting summary email
- [ ] Submit access requests
- [ ] Confirm interview schedule
- [ ] Begin documentation setup

### Days 2-3: Stakeholder Interviews

#### Executive Interview (CFO/COO/Owner)
**Duration:** 45 minutes

Questions:
- [ ] "What are your top 3 business priorities this year?"
- [ ] "Where do you feel technology is helping vs. hindering those goals?"
- [ ] "What keeps you up at night regarding IT or security?"
- [ ] "What would success look like from this engagement?"
- [ ] "Are there any compliance requirements we should know about?"
- [ ] "What's your budget outlook for IT improvements?"

Notes:
```
Business Priorities:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

Key Concerns:
_______________________________________________
_______________________________________________

Success Definition:
_______________________________________________
```

#### Operations Interview (Operations Manager/Director)
**Duration:** 30-45 minutes

Questions:
- [ ] "Walk me through a typical day—where do you spend most time?"
- [ ] "What manual processes consume the most staff time?"
- [ ] "How does data flow from [sales/production] to [accounting/reporting]?"
- [ ] "What breaks most often? What's most frustrating?"
- [ ] "If you could automate one thing, what would it be?"
- [ ] "How do you currently get reports/visibility into operations?"

Notes:
```
Manual Processes Identified:
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

Data Flow Pain Points:
_______________________________________________
_______________________________________________

Automation Wishlist:
_______________________________________________
```

#### IT/Technical Interview (If IT Staff Exists)
**Duration:** 30 minutes

Questions:
- [ ] "What's your current infrastructure setup?"
- [ ] "What are your biggest technical challenges?"
- [ ] "How do you handle backups? When was last test restore?"
- [ ] "What security tools/processes are in place?"
- [ ] "What's on your wishlist if budget wasn't a constraint?"
- [ ] "Any recent incidents or close calls?"

Notes:
```
Current Infrastructure Summary:
_______________________________________________

Technical Challenges:
_______________________________________________

Security Posture (Self-Assessment):
_______________________________________________
```

#### Finance Interview (Controller/Accounting Manager)
**Duration:** 30 minutes

Questions:
- [ ] "What accounting/ERP system do you use?"
- [ ] "How does data get from operations into accounting?"
- [ ] "What manual data entry is required?"
- [ ] "How long does month-end close take?"
- [ ] "What reports do you wish you had?"
- [ ] "Any audit or compliance requirements?"

Notes:
```
Accounting System: ______________________________

Manual Data Entry Points:
1. _______________________________________________
2. _______________________________________________

Month-End Close Time: ___________________________

Compliance Requirements:
_______________________________________________
```

---

## Phase 2: Technical Assessment (Days 4-10)

### Network Infrastructure (Days 4-5)

#### Internet/WAN Assessment
- [ ] ISP provider identified
- [ ] Circuit type documented (fiber, cable, T1, etc.)
- [ ] Bandwidth specifications recorded
- [ ] Redundancy/failover assessed
- [ ] SLA reviewed (if available)
- [ ] Modem/router documented

```
ISP: ______________________ Circuit Type: ____________
Download: _______ Mbps    Upload: _______ Mbps
Redundant Connection: [ ] Yes [ ] No
If yes, provider: _________________________________
```

#### Firewall Assessment
- [ ] Make and model documented
- [ ] Firmware version recorded
- [ ] Security services status checked
  - [ ] Intrusion Prevention (IPS)
  - [ ] Gateway Antivirus
  - [ ] Content Filtering
  - [ ] Anti-Spyware
  - [ ] Botnet Protection
- [ ] Admin access method reviewed
- [ ] WAN management status checked
- [ ] VPN configuration reviewed
- [ ] Firewall rules reviewed (document critical rules)

```
Firewall: _________________ Model: _________________
Firmware: _________________ Last Updated: __________
Security Services: [ ] Active [ ] Expired [ ] Not Licensed
WAN Management: [ ] Disabled [ ] Restricted [ ] OPEN (RISK)
```

**Security Services Status:**
| Service | Status | Notes |
|---------|--------|-------|
| IPS | [ ] On [ ] Off | |
| Gateway AV | [ ] On [ ] Off | |
| Content Filter | [ ] On [ ] Off | |
| Anti-Spyware | [ ] On [ ] Off | |

#### LAN Assessment
- [ ] Network topology documented
- [ ] Switch inventory completed
- [ ] VLAN configuration reviewed
- [ ] IP addressing scheme documented
- [ ] DHCP configuration reviewed
- [ ] DNS configuration reviewed

```
Network Segments:
[ ] Single flat network (RISK)
[ ] Segmented by VLAN

VLANs Identified:
_______________________________________________
_______________________________________________
```

#### Wireless Assessment
- [ ] Wireless controller/APs documented
- [ ] SSID configuration reviewed
- [ ] Security protocol verified (WPA2/WPA3)
- [ ] Guest network isolation verified
- [ ] Coverage adequacy assessed

```
Wireless Platform: _______________________________
Number of APs: ___________________________________
Security: [ ] WPA2 [ ] WPA3 [ ] Other: ___________
Guest Network: [ ] Yes, isolated [ ] Yes, not isolated [ ] No
```

### Server & Infrastructure (Days 5-6)

#### Server Inventory

**For Each Server, Document:**

| Field | Server 1 | Server 2 | Server 3 |
|-------|----------|----------|----------|
| Hostname | | | |
| IP Address | | | |
| Physical/Virtual | | | |
| OS Version | | | |
| Roles | | | |
| CPU | | | |
| RAM | | | |
| Storage | | | |
| Last Patched | | | |
| Backup Status | | | |

#### Server Assessment Checklist
- [ ] All servers inventoried
- [ ] OS versions documented (identify end-of-life)
- [ ] Patch status reviewed
- [ ] Resource utilization checked
- [ ] Roles and dependencies mapped
- [ ] Service accounts identified
- [ ] Antivirus/EDR status verified

#### Virtualization Assessment (If Applicable)
- [ ] Hypervisor platform documented
- [ ] Version and patch status reviewed
- [ ] Host hardware specifications
- [ ] VM inventory completed
- [ ] Resource allocation reviewed
- [ ] Backup/replication status checked

```
Hypervisor: [ ] VMware [ ] Hyper-V [ ] Other: _______
Version: _________________________________________
Number of Hosts: _________________________________
Number of VMs: ___________________________________
```

### Active Directory & Identity (Days 6-7)

#### Domain Assessment
- [ ] Domain structure documented
- [ ] Domain controllers identified
- [ ] Functional level recorded
- [ ] Trust relationships documented
- [ ] Sites and services reviewed

```
Domain Name: _____________________________________
Functional Level: _________________________________
Number of DCs: ___________________________________
```

#### Password Policy Assessment

| Setting | Current Value | Best Practice | Compliant? |
|---------|---------------|---------------|------------|
| Minimum Length | | 16 characters | [ ] |
| Complexity | | Enabled | [ ] |
| Max Age | | 90 days | [ ] |
| Min Age | | 1 day | [ ] |
| History | | 24 passwords | [ ] |
| Lockout Threshold | | 5 attempts | [ ] |
| Lockout Duration | | 30 minutes | [ ] |

#### Account Security Assessment
- [ ] Domain Admins group membership reviewed
- [ ] Number of Domain Admins: _______
- [ ] Service accounts identified and documented
- [ ] Service account restrictions reviewed
- [ ] Stale/unused accounts identified
- [ ] External/vendor accounts reviewed

**Domain Admin Accounts:**
| Account | Purpose | Necessary? |
|---------|---------|------------|
| | | |
| | | |

#### Group Policy Assessment
- [ ] GPO inventory completed
- [ ] Critical GPOs documented
- [ ] Workstation policies reviewed
  - [ ] Windows Firewall enabled
  - [ ] Screen lock configured
  - [ ] RDP encryption forced
  - [ ] PowerShell restricted

### Security Assessment (Days 7-8)

#### Endpoint Protection
- [ ] AV/EDR solution identified
- [ ] Coverage verified (all endpoints)
- [ ] Management console accessible
- [ ] Definition update status
- [ ] Recent threat detections reviewed

```
Endpoint Protection: _____________________________
Coverage: _______ of _______ endpoints (____%)
Last Definition Update: __________________________
Recent Threats: [ ] None [ ] Yes (document below)
```

#### Email Security
- [ ] Email platform documented
- [ ] SPF record configured
- [ ] DKIM configured
- [ ] DMARC configured
- [ ] Spam filtering solution identified
- [ ] Email encryption available
- [ ] Archiving/retention configured

```
Email Platform: [ ] M365 [ ] Exchange [ ] Google [ ] Other
SPF: [ ] Configured [ ] Missing [ ] Misconfigured
DKIM: [ ] Configured [ ] Missing
DMARC: [ ] Configured [ ] Missing
Spam Filter: ____________________________________
```

#### Multi-Factor Authentication
| Account Type | MFA Status | Notes |
|--------------|------------|-------|
| Admin Accounts | [ ] Yes [ ] No [ ] Partial | |
| User Accounts | [ ] Yes [ ] No [ ] Partial | |
| VPN Access | [ ] Yes [ ] No [ ] N/A | |
| Remote Access | [ ] Yes [ ] No [ ] Partial | |

#### Backup Assessment
- [ ] Backup solution documented
- [ ] All critical servers included
- [ ] Backup schedule documented
- [ ] Retention policy documented
- [ ] Offsite/cloud replication configured
- [ ] Encryption enabled
- [ ] Last successful backup verified
- [ ] Last test restore date

```
Backup Solution: _________________________________
Backup Schedule: _________________________________
Retention: _______________________________________
Offsite: [ ] Yes [ ] No
Encrypted: [ ] Yes [ ] No
Last Successful: _________________________________
Last Test Restore: _______________________________
```

**Backup Coverage:**
| Server | Included? | Last Success |
|--------|-----------|--------------|
| | [ ] Yes [ ] No | |
| | [ ] Yes [ ] No | |
| | [ ] Yes [ ] No | |

#### Vulnerability Scan (If In Scope)
- [ ] Scan completed
- [ ] Critical vulnerabilities identified
- [ ] High vulnerabilities identified
- [ ] Medium vulnerabilities identified
- [ ] Remediation priorities set

### Application Inventory (Days 8-9)

#### Line of Business Applications

**For Each Critical Application:**

| Field | App 1 | App 2 | App 3 |
|-------|-------|-------|-------|
| Name | | | |
| Vendor | | | |
| Version | | | |
| Purpose | | | |
| Users | | | |
| Deployment | | | |
| Integration | | | |
| Criticality | | | |

**Application Categories to Review:**
- [ ] ERP/Accounting (QuickBooks, Sage, NetSuite, etc.)
- [ ] CRM (Salesforce, HubSpot, Dynamics, etc.)
- [ ] Industry-specific applications
- [ ] Document management
- [ ] Collaboration tools
- [ ] Productivity suite (Microsoft 365, Google Workspace)

#### SaaS/Cloud Services Inventory

| Service | Purpose | Admin Access | SSO? | MFA? |
|---------|---------|--------------|------|------|
| | | [ ] Yes [ ] No | [ ] | [ ] |
| | | [ ] Yes [ ] No | [ ] | [ ] |
| | | [ ] Yes [ ] No | [ ] | [ ] |

### Data Flow Mapping (Days 9-10)

#### Primary Data Flows

**Data Flow 1:**
```
Source: _________________ → Process: _________________ → Destination: _________________
Method: [ ] Automated [ ] Manual [ ] Export/Import
Frequency: _________________
Pain Points: _________________________________________________
```

**Data Flow 2:**
```
Source: _________________ → Process: _________________ → Destination: _________________
Method: [ ] Automated [ ] Manual [ ] Export/Import
Frequency: _________________
Pain Points: _________________________________________________
```

**Data Flow 3:**
```
Source: _________________ → Process: _________________ → Destination: _________________
Method: [ ] Automated [ ] Manual [ ] Export/Import
Frequency: _________________
Pain Points: _________________________________________________
```

#### Manual Process Inventory

| Process | Frequency | Time/Occurrence | Staff Involved | Annual Hours |
|---------|-----------|-----------------|----------------|--------------|
| | | | | |
| | | | | |
| | | | | |

**Total Estimated Annual Hours on Manual Data Work:** _____________

**Estimated Annual Labor Cost:** $_____________ (hours × avg hourly rate)

---

## Phase 3: Analysis & Roadmap (Days 11-14)

### Findings Summary

#### Critical Findings (Must Fix - Security/Compliance Risk)
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

#### High Priority Findings (Should Fix - Significant Impact)
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

#### Medium Priority Findings (Nice to Fix - Efficiency Gain)
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

### Integration Opportunities

| Opportunity | Systems Involved | Estimated Savings | Complexity | Priority |
|-------------|------------------|-------------------|------------|----------|
| | | | | |
| | | | | |
| | | | | |

### 12-Month Roadmap Framework

**Quarter 1 (Months 1-3): Foundation**
- Critical security fixes
- Quick wins
- Essential infrastructure

**Quarter 2 (Months 4-6): Optimization**
- High-priority improvements
- First integration projects
- Process improvements

**Quarter 3 (Months 7-9): Automation**
- Major integration work
- Workflow automation
- Efficiency gains

**Quarter 4 (Months 10-12): Enhancement**
- Advanced capabilities
- Refinement
- Planning for Year 2

---

## Phase 4: Delivery (Days 15-18)

### Deliverables Checklist

- [ ] Executive Summary (1-2 pages)
- [ ] Current State Overview
  - [ ] Network topology diagram
  - [ ] Server inventory
  - [ ] Application inventory
  - [ ] Data flow diagram
- [ ] Security Assessment Report
  - [ ] Findings by priority
  - [ ] Remediation recommendations
- [ ] Integration Opportunity Matrix
- [ ] 12-Month Strategic Roadmap
- [ ] Appendices
  - [ ] Vendor contact list
  - [ ] Full inventory spreadsheets
  - [ ] Password vault export (secure delivery)

### Executive Presentation Checklist

- [ ] Presentation slides prepared
- [ ] Key stakeholders invited
- [ ] Room/video conference booked
- [ ] Handouts printed (if in-person)
- [ ] Follow-up proposal ready
- [ ] Q&A anticipated and prepared

### Post-Delivery Checklist

- [ ] Final documentation package sent
- [ ] Client feedback collected
- [ ] Testimonial requested
- [ ] Referral request made
- [ ] Retainer proposal discussed
- [ ] Follow-up meeting scheduled
- [ ] Internal lessons learned documented

---

## Quality Assurance

### Before Delivery Review

- [ ] All checklist items completed
- [ ] All deliverables reviewed for accuracy
- [ ] Recommendations are actionable and clear
- [ ] Roadmap is realistic and prioritized
- [ ] No spelling/grammar errors
- [ ] Client name correct throughout
- [ ] Pricing (if included) is accurate

### Client Satisfaction Check

After delivery, confirm:
- [ ] Client understands findings
- [ ] Client understands recommendations
- [ ] Client sees value in roadmap
- [ ] Next steps are clear
- [ ] Any questions addressed

---

## Appendix: Quick Reference

### Common Systems by Industry

**Manufacturing:**
- ERP: Epicor, JobBOSS, SAP B1, Global Shop
- MES: Various
- Quality: Various

**Logistics:**
- TMS: Various
- WMS: Various
- Fleet: Samsara, Verizon Connect

**Energy Services:**
- Field Service: ServiceMax, FieldAware
- Asset Tracking: Various
- Safety/Compliance: ISNetworld

### Security Quick Checks

| Check | Command/Method |
|-------|----------------|
| SPF Record | `nslookup -type=txt domain.com` |
| Open Ports | `nmap -sV target` |
| SSL Certificate | Browser or `openssl s_client` |
| Password Policy | `Get-ADDefaultDomainPasswordPolicy` |
| Domain Admins | `Get-ADGroupMember "Domain Admins"` |

---

**Document Control**

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | January 2026 | Initial release |
