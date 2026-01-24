# Security Assessment Report
## 360° Systems & Security Trace

---

**Client:** [CLIENT COMPANY NAME]
**Assessment Date:** [DATE]
**Report Date:** [DATE]
**Prepared By:** [YOUR NAME]
**Classification:** CONFIDENTIAL

---

## Executive Summary

### Overall Security Score: [XX]/100

| Rating | Score Range | Description |
|--------|-------------|-------------|
| Excellent | 90-100 | Strong security posture, minor improvements only |
| Good | 75-89 | Solid foundation, some gaps to address |
| Fair | 60-74 | Significant gaps requiring attention |
| Poor | 40-59 | Major vulnerabilities, immediate action needed |
| Critical | 0-39 | Severe risk, business operations at risk |

**[CLIENT COMPANY NAME] Rating:** [RATING] ([SCORE]/100)

### Key Findings Summary

| Severity | Count | Description |
|----------|-------|-------------|
| Critical | [#] | Immediate action required |
| High | [#] | Address within 30 days |
| Medium | [#] | Address within 90 days |
| Low | [#] | Address as resources permit |

---

## Assessment Scope

### Systems Assessed

- [ ] Network infrastructure (firewall, switches, wireless)
- [ ] Servers ([#] physical, [#] virtual)
- [ ] Workstations ([#] total)
- [ ] Active Directory / Identity
- [ ] Email security (Microsoft 365 / Exchange)
- [ ] Endpoint protection
- [ ] Backup and recovery
- [ ] Cloud services
- [ ] Remote access

### Assessment Methods

- Configuration review
- Policy analysis
- Vulnerability scanning
- Best practice comparison
- Stakeholder interviews

---

## Detailed Findings

### 1. Identity & Access Management

**Score:** [X]/10

#### 1.1 Password Policy

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Minimum Length | [X] chars | 16 chars | [PASS/FAIL] |
| Complexity Required | [Yes/No] | Yes | [PASS/FAIL] |
| Maximum Age | [X] days | 90 days | [PASS/FAIL] |
| Minimum Age | [X] days | 1 day | [PASS/FAIL] |
| Password History | [X] | 24 | [PASS/FAIL] |
| Lockout Threshold | [X] | 5 attempts | [PASS/FAIL] |
| Lockout Duration | [X] min | 30 min | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 1.2 Administrative Accounts

| Finding | Value |
|---------|-------|
| Domain Admin accounts | [#] |
| Expected | 1 |
| Service accounts with admin rights | [#] |
| Stale admin accounts | [#] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 1.3 Multi-Factor Authentication

| Account Type | MFA Enabled | Coverage |
|--------------|-------------|----------|
| Admin Accounts | [Yes/No/Partial] | [X]% |
| User Accounts | [Yes/No/Partial] | [X]% |
| VPN Access | [Yes/No/N/A] | [X]% |
| Cloud Services | [Yes/No/Partial] | [X]% |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

### 2. Network Security

**Score:** [X]/10

#### 2.1 Firewall Configuration

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Firmware Version | [X] | [LATEST] | [PASS/FAIL] |
| Security Services Licensed | [Yes/No] | Yes | [PASS/FAIL] |
| IPS Enabled | [Yes/No] | Yes | [PASS/FAIL] |
| Gateway AV Enabled | [Yes/No] | Yes | [PASS/FAIL] |
| Content Filter Enabled | [Yes/No] | Yes | [PASS/FAIL] |
| WAN Management Disabled | [Yes/No] | Yes | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 2.2 Network Segmentation

| Finding | Value |
|---------|-------|
| VLANs Configured | [Yes/No] |
| Guest Network Isolated | [Yes/No/N/A] |
| Server Network Segmented | [Yes/No] |
| Critical Systems Isolated | [Yes/No] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 2.3 Wireless Security

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Encryption | [WPA2/WPA3/WEP/None] | WPA2/WPA3 | [PASS/FAIL] |
| Guest Network | [Yes/No] | Yes | [PASS/FAIL] |
| Guest Isolation | [Yes/No] | Yes | [PASS/FAIL] |
| SSID Broadcasting | [Hidden/Visible] | Visible OK | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

### 3. Endpoint Security

**Score:** [X]/10

#### 3.1 Endpoint Protection

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Solution Deployed | [PRODUCT] | EDR/AV | [PASS/FAIL] |
| Coverage - Servers | [X]% | 100% | [PASS/FAIL] |
| Coverage - Workstations | [X]% | 100% | [PASS/FAIL] |
| Real-time Protection | [Yes/No] | Yes | [PASS/FAIL] |
| Definition Age | [X] days | <7 days | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 3.2 Patch Management

| Category | Current | Target | Status |
|----------|---------|--------|--------|
| Windows Servers - Days Behind | [X] days | <30 days | [PASS/FAIL] |
| Windows Workstations - Days Behind | [X] days | <14 days | [PASS/FAIL] |
| Third-Party Apps | [Managed/Ad-hoc/None] | Managed | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 3.3 Workstation Hardening

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Windows Firewall Enabled | [Yes/No] | Yes | [PASS/FAIL] |
| Screen Lock (minutes) | [X] min | 10 min | [PASS/FAIL] |
| Local Admin Controlled | [Yes/No/LAPS] | LAPS | [PASS/FAIL] |
| USB Storage Policy | [Allowed/Blocked/None] | Policy | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

### 4. Email Security

**Score:** [X]/10

#### 4.1 Email Authentication

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| SPF Record | [Configured/Missing/Invalid] | Configured | [PASS/FAIL] |
| DKIM | [Configured/Missing] | Configured | [PASS/FAIL] |
| DMARC | [Configured/Missing] | Configured | [PASS/FAIL] |
| DMARC Policy | [none/quarantine/reject] | quarantine/reject | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 4.2 Email Security Controls

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Spam Filtering | [Product/None] | Yes | [PASS/FAIL] |
| Malware Scanning | [Yes/No] | Yes | [PASS/FAIL] |
| Phishing Protection | [Yes/No] | Yes | [PASS/FAIL] |
| External Email Warning | [Yes/No] | Yes | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

### 5. Backup & Disaster Recovery

**Score:** [X]/10

#### 5.1 Backup Configuration

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Backup Solution | [PRODUCT] | Yes | [PASS/FAIL] |
| All Servers Covered | [Yes/No] | Yes | [PASS/FAIL] |
| Backup Frequency | [X] | Daily minimum | [PASS/FAIL] |
| Retention Period | [X] days | 30+ days | [PASS/FAIL] |
| Offsite/Cloud Copy | [Yes/No] | Yes | [PASS/FAIL] |
| Encryption | [Yes/No] | Yes | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

#### 5.2 Recovery Capabilities

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Last Successful Backup | [DATE] | <24 hours | [PASS/FAIL] |
| Last Test Restore | [DATE/Never] | Monthly | [PASS/FAIL] |
| Documented RTO | [Yes/No] | Yes | [PASS/FAIL] |
| Documented RPO | [Yes/No] | Yes | [PASS/FAIL] |
| DR Plan Exists | [Yes/No] | Yes | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

### 6. Security Awareness

**Score:** [X]/10

| Setting | Current | Recommended | Status |
|---------|---------|-------------|--------|
| Security Training | [Yes/No] | Yes | [PASS/FAIL] |
| Training Frequency | [X] | Annual minimum | [PASS/FAIL] |
| Phishing Simulation | [Yes/No] | Yes | [PASS/FAIL] |
| Security Policies | [Documented/Informal/None] | Documented | [PASS/FAIL] |
| Acceptable Use Policy | [Yes/No] | Yes | [PASS/FAIL] |

**Finding:** [DESCRIPTION]

**Risk:** [DESCRIPTION]

**Recommendation:** [DESCRIPTION]

**Priority:** [CRITICAL/HIGH/MEDIUM/LOW]

---

## Vulnerability Summary

### Critical Vulnerabilities

| # | Finding | Affected Systems | Risk | Remediation |
|---|---------|------------------|------|-------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### High Vulnerabilities

| # | Finding | Affected Systems | Risk | Remediation |
|---|---------|------------------|------|-------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### Medium Vulnerabilities

| # | Finding | Affected Systems | Risk | Remediation |
|---|---------|------------------|------|-------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

---

## Remediation Roadmap

### Immediate (0-7 Days)

| # | Action | Effort | Owner |
|---|--------|--------|-------|
| 1 | | | |
| 2 | | | |

### Short-Term (7-30 Days)

| # | Action | Effort | Owner |
|---|--------|--------|-------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

### Medium-Term (30-90 Days)

| # | Action | Effort | Owner |
|---|--------|--------|-------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Compliance Considerations

### Applicable Frameworks

- [ ] HIPAA
- [ ] PCI-DSS
- [ ] SOC 2
- [ ] CMMC
- [ ] NIST CSF
- [ ] Other: _______________
- [ ] None specifically applicable

### Compliance Gaps Identified

| Requirement | Current State | Gap | Remediation |
|-------------|---------------|-----|-------------|
| | | | |
| | | | |

---

## Appendices

### A. Scan Results

[ATTACH OR REFERENCE VULNERABILITY SCAN OUTPUT]

### B. Configuration Screenshots

[ATTACH KEY CONFIGURATION SCREENSHOTS]

### C. Evidence Documentation

[LIST EVIDENCE COLLECTED]

---

**Document:** Security Assessment Report
**Client:** [CLIENT COMPANY NAME]
**Date:** [DATE]
**Version:** 1.0
**Classification:** CONFIDENTIAL

---

*This report contains sensitive security information and should be treated as confidential. Distribution should be limited to authorized personnel only.*
