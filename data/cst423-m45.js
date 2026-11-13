/* CST423 Modules 4 and 5 */
(Q=>{Q.push(
/* ---------- MODULE 4 ---------- */
{id:'access-control',m:4,s:['N25:Q8','A25:Q18b'],q:'Access control: MAC vs DAC vs RBAC',a:`
<p><b>Access control</b> is the mechanism that decides which subjects (users, processes) may perform which operations (read, write, execute) on which objects (files, VMs, databases), after authentication. It enforces confidentiality and integrity.</p>
<div class="tw"><table class="t"><tr><th>Feature</th><th>MAC (Mandatory)</th><th>DAC (Discretionary)</th><th>RBAC (Role-based)</th></tr>
<tr><td>Who decides access</td><td>Central authority / system policy</td><td>Owner of the resource</td><td>Administrator assigns permissions to roles</td></tr>
<tr><td>Basis</td><td>Security labels: clearance of subject vs classification of object (Top Secret, Secret…)</td><td>Access control lists / owner permissions</td><td>User's role in the organisation (manager, clerk)</td></tr>
<tr><td>Users can change permissions?</td><td>No</td><td>Yes, owner can grant to others</td><td>No, only by changing role membership</td></tr>
<tr><td>Flexibility</td><td>Rigid</td><td>Very flexible</td><td>Moderate, easy to manage at scale</td></tr>
<tr><td>Security</td><td>Highest</td><td>Weakest (Trojan horses, accidental sharing)</td><td>Good; least privilege per role</td></tr>
<tr><td>Examples</td><td>Military systems, SELinux</td><td>Unix file permissions, Windows NTFS ACLs</td><td>AWS IAM roles, Azure RBAC, enterprise apps</td></tr></table></div>`,ms:[['Definition',1],['MAC',2],['DAC / RBAC',2],['Comparison',1]],
a3:`<div class="tw"><table class="t"><tr><th>MAC</th><th>DAC</th></tr><tr><td>Access decided by a central system policy using security labels (clearance vs classification)</td><td>Access decided by the owner of the object</td></tr><tr><td>Users cannot change permissions</td><td>Owner can grant/revoke rights to others</td></tr><tr><td>Rigid, very secure (military, SELinux)</td><td>Flexible, less secure (Unix permissions, ACLs)</td></tr></table></div>`,ms3:[['Three differences',3]]},
{id:'threat-agents',m:4,s:['N25:Q17a','N24:Q8'],q:'Threat agents: role, types and risks they cause',a:`
<p>A <b>threat agent</b> is an entity that poses a threat because it is capable of carrying out an attack. It can originate inside or outside the organisation. It exploits <b>vulnerabilities</b> to realise a <b>threat</b>, creating a <b>risk</b> (likelihood × impact of loss) to IT resources.</p>
<span class="eqb">THREAT AGENT ──launches──► ATTACK (threat) ──exploits──► VULNERABILITY of cloud resource
       └─────────────────────────────── RISK of loss (confidentiality, integrity, availability)</span>
<h4>Types of threat agents</h4>
<ul><li><b>Anonymous attacker:</b> non-trusted outside consumer without permissions; uses network attacks, spoofing, stolen credentials, DoS.</li>
<li><b>Malicious service agent:</b> compromised or malicious software/service that intercepts and forwards network traffic, inserts malicious logic.</li>
<li><b>Trusted attacker (malicious tenant):</b> shares IT resources in the same cloud as a legitimate consumer and abuses that trust: attacks co-tenants, side-channel attacks, VM escape, hacking weak authentication, DoS from inside.</li>
<li><b>Malicious insider:</b> current or former employees of the provider (or consumer) with administrative access who misuse it to steal or damage data.</li></ul>
<h4>Risks / threats caused</h4>
<ul><li><b>Traffic eavesdropping:</b> data in transit intercepted (loss of confidentiality).</li><li><b>Malicious intermediary:</b> messages altered (integrity).</li><li><b>Denial of service:</b> resources overloaded (availability).</li><li><b>Insufficient authorization / weak authentication:</b> unauthorised access.</li><li><b>Virtualization attack:</b> escaping VM isolation to reach the hypervisor or other tenants.</li><li><b>Overlapping trust boundaries:</b> one tenant attacks shared resources of others.</li><li>Data theft, data loss, account hijacking, reputation and financial loss.</li></ul>
<p><b>Counter:</b> security policies and mechanisms such as encryption, IAM, firewalls, intrusion detection, hardened images.</p>`,ms:[['Definition / role',2],['Types of threat agents',3],['Risks caused',2]],
a3:`<ul><li><b>Anonymous attacker:</b> untrusted outsider with no permissions.</li><li><b>Malicious service agent:</b> compromised software that intercepts or alters traffic.</li><li><b>Trusted attacker:</b> a legitimate co-tenant abusing shared resources.</li><li><b>Malicious insider:</b> employee/ex-employee with privileged access.</li></ul>`,ms3:[['Four types',3]]},
{id:'iam',m:4,s:['N25:Q17b'],q:'Identity and Access Management (IAM): functions and benefits',a:`
<p><b>IAM</b> is the framework of policies, processes and technologies that controls and tracks user identities and their access to cloud IT resources: <i>the right people get the right access to the right resources at the right time</i>.</p>
<h4>Key functions (components)</h4>
<ul><li><b>Authentication:</b> verifying identity with usernames/passwords, digital certificates, biometrics, <b>multi-factor authentication</b>; single sign-on (SSO).</li>
<li><b>Authorization:</b> defining fine-grained access rights through policies, roles (RBAC) and groups; least privilege.</li>
<li><b>User management:</b> creating, modifying and deleting identities and groups; provisioning and de-provisioning; password and credential management.</li>
<li><b>Credential management:</b> issuing and rotating keys, tokens, certificates; temporary credentials and roles for services.</li>
<li><b>Federation:</b> trust between identity providers (SAML, OAuth, OpenID Connect) so corporate identities can access cloud services.</li>
<li><b>Auditing and logging:</b> recording who accessed what and when (e.g. AWS CloudTrail) for compliance.</li></ul>
<h4>Benefits</h4>
<ul><li>Improved security: prevents unauthorised access and data breaches; MFA protects against stolen passwords.</li><li>Centralised, consistent control across many services and accounts.</li><li>Least-privilege and separation of duties reduce insider risk.</li><li>Easier compliance with regulations (audit trails).</li><li>Better user experience with SSO; reduced administration cost through automation.</li></ul>
<p>Examples: AWS IAM, Azure Active Directory (Entra ID), Google Cloud IAM.</p>`,ms:[['Definition',1],['Key functions',4],['Benefits',2]]},
{id:'shared-images',m:4,s:['N25:Q18a','A25:Q8','D23:Q18b'],q:'Security risks posed by shared (virtual machine) images',a:`
<p>In IaaS clouds users launch VMs from <b>images</b> (e.g. Amazon Machine Images). Many images are published and shared publicly by other users. Using them introduces risks:</p>
<ul><li><b>Malicious images:</b> an attacker can publish an image containing malware, backdoors, Trojan horses or rootkits; anyone launching it is compromised (e.g. an image with a hidden account or keylogger).</li>
<li><b>Leftover credentials:</b> creators often forget to remove SSH keys, passwords, API keys in configuration or shell history. The creator can log in to every instance launched from the image (backdoor via authorized_keys), and users can steal the creator's AWS keys.</li>
<li><b>Sensitive data leakage:</b> browser history, deleted files recoverable from the disk, database dumps, private keys of the publisher.</li>
<li><b>Outdated and unpatched software:</b> old OS and services with known vulnerabilities; default insecure configuration (open ports, weak passwords).</li>
<li><b>Untrusted origin and integrity:</b> no way to verify who created the image or whether it was modified.</li>
<li>Study example: an analysis of thousands of public AMIs found many with leftover private keys and unpatched vulnerabilities, allowing unauthorised remote access.</li></ul>
<h4>Mitigation</h4><ul><li>Use images only from trusted, verified publishers; scan images for malware and vulnerabilities.</li><li>Before sharing, remove credentials, keys, history and logs; publishers should harden images.</li><li>Patch immediately after launch; change default passwords; use image signing and private image registries.</li></ul>`,ms:[['Concept of shared images',1],['Risks with examples',4],['Mitigation',2]],
a3:`<ul><li><b>Malicious images:</b> attackers publish images with malware or backdoors.</li><li><b>Leftover credentials and data:</b> publishers forget SSH keys, passwords or API keys, letting them log into instances or exposing their own secrets.</li><li><b>Unpatched software</b> and insecure defaults. <i>Example:</i> a public AMI with the creator's key in authorized_keys gives the creator root access to every launched copy.</li></ul>`,ms3:[['Risks',2],['Example',1]]},
{id:'vm-security',m:4,s:['N25:Q18b','N24:Q18a'],q:'Achieving virtual machine security in the cloud',a:`
<p>VM security protects guest VMs, the hypervisor (VMM) and the shared physical host from attacks in a multi-tenant environment.</p>
<h4>Threats to address</h4><ul><li><b>Hypervisor/VMM-based:</b> compromise of the VMM, rogue hypervisors (hyperjacking), VM escape, insecure management interfaces.</li><li><b>VM-based:</b> malicious or insecure VM images, VM sprawl, side-channel attacks between co-resident VMs, insecure live migration, snapshot/rollback risks, inactive VMs left unpatched.</li></ul>
<h4>Measures</h4>
<ul><li><b>Harden and minimise the hypervisor:</b> small trusted computing base, patched promptly, management interfaces restricted and on separate networks; secure boot / trusted platform module (TPM) for attestation.</li>
<li><b>Strong isolation:</b> separate VMs of different tenants; resource limits to prevent DoS; dedicated hosts for sensitive workloads.</li>
<li><b>Secure images:</b> use trusted, hardened, scanned images; remove credentials; image signing.</li>
<li><b>Patch and configure guest OS:</b> firewalls, antivirus, host intrusion detection inside VMs; disable unused services.</li>
<li><b>Virtual network security:</b> virtual firewalls/security groups, VLANs, micro-segmentation, traffic monitoring between VMs.</li>
<li><b>Secure live migration:</b> encrypt migration traffic and authenticate source/destination hosts.</li>
<li><b>Encryption</b> of VM disks and snapshots; key management.</li>
<li><b>Access control and IAM</b> for VM management with MFA and least privilege; logging and auditing of VM lifecycle.</li>
<li><b>VM introspection and monitoring:</b> the VMM inspects guest memory/state to detect rootkits; intrusion detection systems.</li>
<li><b>Lifecycle management</b> to avoid VM sprawl: track, patch or delete dormant VMs.</li></ul>`,ms:[['Threats to VMs',2],['Security measures',5]]},
{id:'vmm-threats',m:4,s:['A25:Q7','D23:Q8'],q:'Hypervisor (VMM)-based threats vs VM-based threats',a:`
<ul><li><b>Hypervisor/VMM-based threats:</b> attacks on the virtualization layer itself. Examples: a compromised or rogue hypervisor (hyperjacking, Blue Pill rootkit), VM escape from a guest to the hypervisor, unauthorised access through insecure management interfaces, resource starvation of VMs by a faulty VMM, insecure VM migration. Impact: <b>all VMs on the host</b> are compromised.</li>
<li><b>VM-based threats:</b> arise from individual VMs. Examples: rogue or insecure VMs and images (malware, leftover credentials), VM sprawl of unpatched dormant VMs, side-channel and cross-VM attacks against co-resident VMs, attacks on VM snapshots/rollback. Impact is usually limited to the VM or its neighbours unless combined with escape.</li></ul>`,ms:[['VMM threats',1.5],['VM threats',1.5]]},
{id:'sec-mechanisms',m:4,s:['A25:Q17a'],q:'Security policies and mechanisms countering threats, vulnerabilities and risks',a:`
<span class="eqb">            THREAT AGENT
               │ poses
               ▼
            THREAT ──exploits──► VULNERABILITY ──in──► IT RESOURCE (asset)
               │                       ▲                     ▲
               └──► increases RISK ────┘                     │ protects
                                                             │
   SECURITY POLICY ──defines──► SECURITY CONTROLS ──implemented by──► SECURITY MECHANISMS
   (rules, standards)            (countermeasures)                    (encryption, IAM,
                                                                       firewall, IDS, PKI…)</span>
<h4>Terms</h4><ul><li><b>Threat:</b> a potential security violation that can challenge defences (e.g. eavesdropping, DoS).</li><li><b>Vulnerability:</b> a weakness that can be exploited (misconfiguration, weak password, unpatched software).</li><li><b>Risk:</b> possibility of loss or harm; likelihood of a threat exploiting a vulnerability × impact.</li><li><b>Threat agent:</b> entity that carries out the attack (anonymous attacker, malicious service agent, trusted attacker, malicious insider).</li></ul>
<h4>Security policies</h4><p>A <b>security policy</b> establishes a set of security rules and regulations: how security controls and mechanisms are implemented, what is permitted, who is responsible. Policies define acceptable use, data classification, password rules, incident response and compliance.</p>
<h4>Security controls and mechanisms</h4><p><b>Controls</b> are countermeasures to prevent or respond to threats (preventive, detective, corrective). <b>Mechanisms</b> are the components/technologies that implement them:</p>
<ul><li><b>Encryption</b> (symmetric/asymmetric) for confidentiality against eavesdropping.</li><li><b>Hashing and digital signatures</b> for integrity and authenticity against malicious intermediaries.</li><li><b>PKI and certificates</b> to bind identities to keys.</li><li><b>IAM and SSO</b> against insufficient authorization and weak authentication.</li><li><b>Cloud-based security groups / firewalls</b> to segment resources and limit attack surface.</li><li><b>Hardened virtual server images</b> against insecure images.</li><li><b>Intrusion detection, logging and monitoring</b> to detect attacks; DoS protection.</li></ul>
<h4>How they counter risk</h4><p>Policies set the rules; controls and mechanisms reduce vulnerabilities and block threat agents, lowering the probability and impact of attacks so residual risk is acceptable. Regular risk assessment updates the policies.</p>`,ms:[['Diagram',2],['Terms',2],['Policies',2],['Mechanisms and how they counter',3]]},
{id:'os-security',m:4,s:['D23:Q17b','A25:Q17b'],q:'Operating system security in cloud computing',a:`
<p>The OS (host OS, hypervisor host and guest OS in each VM) is the base on which applications run; if it is compromised, all controls above it fail.</p>
<h4>Requirements and mechanisms</h4>
<ul><li><b>Access control:</b> mandatory access control (SELinux, AppArmor) so even privileged processes are restricted; discretionary permissions; least privilege; separate admin accounts.</li>
<li><b>Authentication:</b> strong passwords, SSH keys, MFA; disable root login over network.</li>
<li><b>Trusted paths and trusted computing base:</b> small, verified kernel; secure boot and TPM-based attestation ensure the OS has not been tampered with.</li>
<li><b>Isolation:</b> process and memory protection; sandboxing; containers/VMs separate tenants.</li>
<li><b>Hardening:</b> minimal installation, disable unused services and ports, secure configuration baselines (CIS benchmarks).</li>
<li><b>Patch management:</b> regular updates of kernel and packages; automated patching.</li>
<li><b>Host-based firewall, antivirus and intrusion detection</b> (HIDS); file integrity monitoring.</li>
<li><b>Logging and auditing</b> of system calls, logins and privilege use, forwarded to central monitoring.</li>
<li><b>Encryption</b> of disks and swap.</li></ul>
<h4>Cloud-specific issues</h4><ul><li>A commodity OS is large and has many vulnerabilities; applications with root privileges can disable protections.</li><li>Guest OS security depends on the hypervisor: the VMM must protect guest memory and isolate VMs.</li><li>Shared responsibility: in IaaS the consumer secures the guest OS; in PaaS/SaaS the provider does.</li><li>Malicious management OS (Dom0) can read guest memory, so it must be minimal and protected.</li></ul>`,ms:[['Role of OS security',1],['Mechanisms',5],['Cloud-specific issues',2]]},
{id:'infra-security',m:4,s:['A25:Q18a'],q:'Categories of infrastructure security in cloud computing',a:`
<p>Infrastructure security is examined at three levels (Mather et al.):</p>
<h4>1. Network level</h4><ul><li>Ensuring <b>confidentiality and integrity of data in transit</b> to/from the provider (TLS/SSL, VPN, IPsec).</li><li><b>Proper access control</b> to resources exposed on the public internet (security groups, firewalls, ACLs).</li><li><b>Availability</b> of internet-facing resources: protection against DoS/DDoS, DNS and BGP attacks.</li><li>Replacing the traditional network zone/tier model with logical security domains; network segmentation, IDS/IPS, monitoring.</li></ul>
<h4>2. Host level</h4><ul><li>Security of the <b>hypervisor/virtualization layer</b> and of guest OSs (in IaaS the consumer secures the guest; in PaaS/SaaS the provider secures hosts).</li><li>Threats: VM escape, hypervisor compromise, insecure images, unpatched OS, stolen SSH keys.</li><li>Controls: hardened images, patching, host firewalls and HIDS, access control, logging, protecting keys.</li></ul>
<h4>3. Application level</h4><ul><li>Securing web applications and services against OWASP threats: SQL injection, cross-site scripting, broken authentication, session hijacking, insecure APIs.</li><li>Controls: secure coding, input validation, web application firewalls, strong authentication/authorisation, encryption of data, security testing.</li><li>Responsibility: SaaS provider secures the application; in IaaS/PaaS the consumer secures its own apps.</li></ul>
<p>Additionally, <b>data security</b> (at rest and in transit) and <b>physical security</b> of the data centre complete the infrastructure picture.</p>`,ms:[['Network level',3],['Host level',2.5],['Application level',2.5]]},
{id:'cia',m:4,s:['N24:Q7','D23:Q7'],q:'Confidentiality, integrity, authenticity and availability',a:`
<ul><li><b>Confidentiality:</b> information is accessible only to authorised parties; data in transit and storage are protected (encryption, access control).</li><li><b>Integrity:</b> data is not altered by unauthorised parties; what the receiver gets is what the sender sent (hashes, digital signatures).</li><li><b>Authenticity:</b> the characteristic of having been provided by an authorised source; covers non-repudiation, i.e. a party cannot deny having sent or performed an action (authentication, certificates).</li><li><b>Availability:</b> the IT resource is accessible and usable during a specified time period by authorised users (redundancy, DoS protection, SLAs).</li></ul>`,ms:[['Each term',1]]},
{id:'cloud-threats',m:4,s:['N24:Q17a'],q:'Kinds of cloud security threats',a:`
<ul><li><b>Traffic eavesdropping:</b> data being transferred to or within the cloud is passively intercepted by a malicious service agent (loss of confidentiality); hard to detect.</li>
<li><b>Malicious intermediary:</b> messages are intercepted and <b>altered</b> (or malicious content inserted) before reaching the destination, compromising confidentiality and integrity (man-in-the-middle).</li>
<li><b>Denial of service (DoS/DDoS):</b> overloading IT resources so they cannot function: flooding with requests or network traffic, exhausting memory/CPU by a co-tenant, launching tasks that monopolise shared resources.</li>
<li><b>Insufficient authorization:</b> access is granted too broadly or wrongly, or attackers exploit weak authentication (weak passwords, shared accounts) to reach resources directly.</li>
<li><b>Virtualization attack:</b> a trusted attacker with administrative access to a VM exploits vulnerabilities in the virtualization platform to escape and compromise the hypervisor or other VMs on the host.</li>
<li><b>Overlapping trust boundaries:</b> multiple consumers share physical resources; a malicious tenant targets shared resources to compromise others, e.g. side-channel attacks reading co-resident data.</li>
<li><b>Other threats:</b> flawed implementations, security policy disparity between consumer and provider, contracts lacking security guarantees, risk from anonymous attackers and malicious insiders, data loss, account/service hijacking, insecure APIs.</li></ul>`,ms:[['Six threats explained',8],['Others',2]]},
{id:'harder',m:4,s:['N24:Q17b'],q:'Why it is harder to establish security in the cloud',a:`
<ul><li><b>Loss of control:</b> data and applications live on infrastructure owned and managed by a third party; consumers cannot inspect or physically secure it.</li><li><b>Multi-tenancy and overlapping trust boundaries:</b> many unknown tenants share hardware, hypervisors and networks.</li><li><b>Larger attack surface:</b> public internet access, many APIs and web consoles, virtualization layer, mobile access.</li><li><b>Shared responsibility confusion</b>, policy disparity between provider and consumer, lack of transparency and audit, data spread across jurisdictions (legal/compliance issues), insider threats at the provider.</li></ul>`,ms:[['Four reasons',4]]},
{id:'mgmt-os',m:4,s:['N24:Q18b'],q:'Security risks posed by the management OS (Dom0)',a:`
<p>In hypervisors like Xen, a privileged <b>management OS (Dom0)</b> creates, controls and provides I/O to guest VMs. It is a full OS with device drivers and network services, so it is a large, high-value attack target.</p>
<ul><li>A compromised Dom0 can <b>read and modify guest memory</b> and CPU registers, stealing keys and data of all VMs.</li><li>It can <b>tamper with VM images and snapshots</b>, inject malware, or reboot/kill VMs (DoS).</li><li>It handles I/O through backend drivers, so it can <b>eavesdrop on or alter all network and disk traffic</b> of guests.</li><li>It can hijack <b>VM migration</b>, sending a VM's memory to an attacker.</li><li>A malicious administrator (insider) using Dom0 tools can perform these attacks without breaking into the guests.</li></ul>
<p><b>Example:</b> an attacker exploiting a bug in Dom0's emulated device code (QEMU, e.g. VENOM vulnerability) gained control of the host and access to co-resident VMs. <b>Mitigation:</b> minimal, disaggregated Dom0, restricted admin access, encryption of guest memory (AMD SEV), auditing.</p>`,ms:[['Role of management OS',1],['Risks with example',4]]},
{id:'breaches',m:4,s:['D23:Q17a'],q:'Internal security breaches in the cloud and steps to reduce breaches',a:`
<h4>Types of internal breaches</h4>
<ul><li><b>Malicious insider:</b> provider or consumer employees deliberately stealing, leaking or destroying data (e.g. a disgruntled admin copying customer databases).</li><li><b>Negligent insider / human error:</b> misconfigured storage buckets left public, weak passwords, sharing credentials, falling for phishing.</li><li><b>Privilege misuse:</b> excessive administrative rights used beyond job needs; former employees whose access was not revoked.</li><li><b>Compromised insider accounts:</b> credentials stolen by attackers, who act as trusted users.</li><li><b>Data exfiltration</b> through unauthorised devices, shadow IT, unsanctioned cloud apps.</li></ul>
<h4>Steps to reduce breaches</h4>
<ul><li>Strong IAM: least privilege, role-based access, MFA, immediate de-provisioning.</li><li>Encrypt data at rest and in transit; manage keys securely.</li><li>Continuous monitoring, logging and user-behaviour analytics; audit privileged actions.</li><li>Secure configuration and automated configuration checks; regular patching.</li><li>Employee security training, background checks, separation of duties, data loss prevention (DLP) tools, incident response plan, backups.</li></ul>`,ms:[['Types of breaches',3],['Steps to reduce',3]]},
{id:'risk-mgmt',m:4,s:['D23:Q18a'],q:'Risk management and ongoing risk management processes',a:`
<p><b>Risk management</b> is the continuous process of identifying, assessing and controlling risks to an organisation's IT resources and data, so that residual risk is reduced to an acceptable level at reasonable cost. In the cloud it is shared between consumer and provider.</p>
<span class="eqb">   ┌──► RISK ASSESSMENT ───► RISK TREATMENT ───► RISK CONTROL ──┐
   └────────────────────── (cyclic, ongoing) ◄──────────────────┘</span>
<h4>Ongoing risk management stages</h4>
<ol><li><b>Risk assessment:</b> the cloud environment is analysed to identify potential vulnerabilities and shortcomings that threats can exploit. The provider may be asked for statistics and documentation of past attacks. Risks are quantified and qualified by probability of occurrence and degree of impact.</li>
<li><b>Risk treatment:</b> mitigation policies and plans are designed. Options:
<ul><li><b>Mitigate/reduce:</b> apply security controls and mechanisms.</li><li><b>Transfer:</b> outsource to the provider via SLA or insurance.</li><li><b>Accept:</b> tolerate low risks.</li><li><b>Avoid:</b> don't move certain workloads to the cloud.</li></ul></li>
<li><b>Risk control:</b> monitoring is done continuously: results of treatment are reviewed, logs analysed, new threats identified, and policies adjusted. Feeds back into new assessment.</li></ol>
<h4>Types of ongoing risk management activities</h4><ul><li>Continuous vulnerability scanning and penetration testing.</li><li>Security audits and compliance reviews (ISO 27001, SOC 2).</li><li>Incident monitoring and response; change management; review of provider SLAs and reports.</li></ul>
<p>Frameworks: ISO 31000, NIST SP 800-37 Risk Management Framework.</p>`,ms:[['Definition',2],['Assessment',2],['Treatment',2],['Control / ongoing activities',2]]},
/* ---------- MODULE 5 ---------- */
{id:'gcp-db',m:5,s:['N25:Q9'],q:'Database services offered by Google Cloud',a:`
<ul><li><b>Cloud SQL:</b> fully managed relational MySQL, PostgreSQL and SQL Server. <b>AlloyDB</b> for high-performance PostgreSQL.</li><li><b>Cloud Spanner:</b> globally distributed, strongly consistent, horizontally scalable relational database.</li><li><b>Cloud Bigtable:</b> wide-column NoSQL for huge analytical/IoT workloads.</li><li><b>Firestore / Datastore:</b> serverless NoSQL document database for web and mobile apps.</li><li><b>Memorystore</b> (managed Redis/Memcached) and <b>BigQuery</b> (serverless data warehouse).</li></ul>`,ms:[['Three or more services',3]]},
{id:'aws-storage',m:5,s:['N25:Q10','N24:Q19b'],q:'AWS storage types / key concepts of Amazon storage services',a:`
<ul><li><b>Object storage – Amazon S3:</b> stores data as <b>objects</b> (data + metadata + key) in <b>buckets</b>; accessed via REST API/URL; virtually unlimited, 99.999999999 % durability; storage classes (Standard, Infrequent Access, Glacier for archival); versioning, lifecycle policies, bucket policies.</li>
<li><b>Block storage – Amazon EBS:</b> persistent <b>volumes</b> attached to one EC2 instance like a raw disk; formatted with a file system; <b>snapshots</b> stored in S3; SSD and HDD types; survives instance stop/termination (if configured).</li>
<li><b>File storage – Amazon EFS:</b> managed NFS file system shared by many EC2 instances simultaneously; grows and shrinks automatically. (FSx for Windows/Lustre.)</li></ul>
<p><b>Other concepts:</b> instance store (temporary disk), Amazon Glacier for archives, Storage Gateway for hybrid, regions and availability zones for replication.</p>`,ms:[['S3',2],['EBS',1.5],['EFS / other',1.5]],
a3:`<ul><li><b>Amazon S3 (object storage):</b> files stored as objects in buckets, accessed over HTTP; highly durable and scalable.</li><li><b>Amazon EBS (block storage):</b> persistent virtual disks attached to an EC2 instance; snapshots for backup.</li><li><b>Amazon EFS (file storage):</b> shared NFS file system mountable by many instances.</li></ul>`,ms3:[['Each type',1]]},
{id:'aws',m:5,s:['N25:Q19a','N24:Q19a'],q:'Amazon Web Services offerings / AWS ecosystem',a:`
<span class="eqb">                 ┌──────────────── AWS CLOUD ─────────────────┐
  Users / apps ─►│  Route 53 (DNS) ─► CloudFront (CDN) ─► ELB │
   (console,     │        │                                    │
    CLI, SDK)    │  COMPUTE: EC2 (AMI, instances), Auto Scaling, Lambda, Elastic Beanstalk
                 │  STORAGE: S3, EBS, EFS, Glacier             │
                 │  DATABASE: RDS, DynamoDB, SimpleDB, Redshift│
                 │  NETWORK: VPC, Direct Connect               │
                 │  APP SERVICES: SQS, SNS, SES, SWF            │
                 │  ANALYTICS: EMR (Hadoop), Kinesis           │
                 │  SECURITY/MGMT: IAM, CloudWatch, CloudTrail │
                 └──── Regions → Availability Zones → data centres ┘</span>
<h4>Compute</h4><ul><li><b>Amazon EC2:</b> resizable virtual servers (instances) launched from AMIs, with instance types, security groups, key pairs, elastic IPs; on-demand, reserved and spot pricing.</li><li><b>Auto Scaling and Elastic Load Balancing</b> for elasticity and availability.</li><li><b>AWS Lambda</b> (serverless functions), <b>Elastic Beanstalk</b> (PaaS), ECS/EKS (containers).</li></ul>
<h4>Storage</h4><ul><li><b>S3</b> object storage, <b>EBS</b> block volumes, <b>EFS</b> file storage, <b>Glacier</b> archival.</li></ul>
<h4>Database</h4><ul><li><b>RDS</b> (managed MySQL, PostgreSQL, Oracle, SQL Server, Aurora), <b>DynamoDB</b> and <b>SimpleDB</b> (NoSQL), <b>Redshift</b> (data warehouse), ElastiCache.</li></ul>
<h4>Networking and content delivery</h4><ul><li><b>VPC</b> (isolated virtual network), <b>Route 53</b> (DNS), <b>CloudFront</b> (CDN), Direct Connect.</li></ul>
<h4>Application and communication services</h4><ul><li><b>SQS</b> (message queue), <b>SNS</b> (notifications), <b>SES</b> (email), <b>SWF/Step Functions</b> (workflows).</li></ul>
<h4>Analytics, management and security</h4><ul><li><b>Elastic MapReduce</b> (Hadoop), Kinesis; <b>CloudWatch</b> (monitoring), <b>CloudFormation</b> (infrastructure as code), <b>IAM</b>, CloudTrail, KMS.</li></ul>
<p>Global infrastructure of <b>regions</b> and <b>availability zones</b>; pay-as-you-go pricing; accessed by Management Console, CLI, SDKs and APIs.</p>`,ms:[['Ecosystem diagram',2],['Compute and storage',3],['Database, networking, app services',2],['Management/security',2]]},
{id:'azure-storage',m:5,s:['N25:Q19b','D23:Q10'],q:'Microsoft Azure storage services (Blob, Table, Queue, File)',a:`
<p>Azure Storage, accessed through a <b>storage account</b> with REST APIs, offers durable, replicated (LRS, ZRS, GRS) storage. The four core services:</p>
<ul><li><b>Blob storage:</b> object storage for unstructured data (images, video, backups, logs). Blobs are stored in <b>containers</b>. Types: <b>block blobs</b> (files up to TBs, uploaded as blocks), <b>append blobs</b> (logging), <b>page blobs</b> (random read/write, used as VM disks). Hot, cool and archive tiers.</li>
<li><b>Table storage:</b> NoSQL key–attribute store for structured, schema-less data. Each <b>entity</b> (row) has a <b>PartitionKey</b> and <b>RowKey</b> plus up to 252 properties; scales by partitions; cheap and fast for large datasets (user profiles, metadata).</li>
<li><b>Queue storage:</b> reliable message queues for asynchronous communication between application components (e.g. web role puts a job, worker role processes it). Messages up to 64 KB; millions of messages per queue; decouples and scales components.</li>
<li><b>File storage (Azure Files):</b> fully managed file shares accessible via SMB/NFS; can be mounted by cloud VMs and on-premise machines simultaneously; replaces on-premise file servers ("lift and shift").</li></ul>
<p>Also: <b>Disk storage</b> (managed disks for VMs, based on page blobs) and Data Lake Storage.</p>`,ms:[['Blob',2],['Table',1.5],['Queue',1.5],['File',2]],
a3:`<ul><li><b>Blob storage:</b> unstructured objects (block, append, page blobs) in containers.</li><li><b>Table storage:</b> NoSQL key–attribute entities (PartitionKey, RowKey).</li><li><b>Queue storage:</b> messages for asynchronous communication between components.</li><li><b>File storage:</b> SMB/NFS file shares; also managed Disks for VMs.</li></ul>`,ms3:[['Services listed with one line each',3]]},
{id:'azure-blob',m:5,s:['A25:Q10'],q:'Azure Blob storage service',a:`
<ul><li><b>Blob (Binary Large Object) storage</b> is Azure's object store for massive unstructured data: documents, images, video, backups, logs. Hierarchy: <b>storage account → containers → blobs</b>, each addressable by URL (https://account.blob.core.windows.net/container/blob).</li><li><b>Types:</b> <b>block blobs</b> (large files uploaded in blocks, up to ~190 TB), <b>append blobs</b> (optimised for appending, e.g. logs), <b>page blobs</b> (512-byte pages, random access, used as VM disks/VHDs).</li><li><b>Access tiers</b> hot, cool, cold, archive for cost; redundancy options (LRS/ZRS/GRS); security via shared access signatures and Azure AD; REST API access.</li></ul>`,ms:[['Concept/hierarchy',1],['Blob types',1],['Tiers / features',1]]},
{id:'azure-arch',m:5,s:['N25:Q20a','N24:Q20a'],q:'Microsoft Azure platform architecture',a:`
<span class="eqb">┌──────────────────────── WINDOWS AZURE PLATFORM ──────────────────────────┐
│  Applications / users  (browser, REST, SDK, Visual Studio)                │
├──────────────────────────────────────────────────────────────────────────┤
│  COMPUTE           │  STORAGE              │  NETWORK / CONNECT   │  APP / DATA│
│  • Web role        │  • Blobs              │  • Virtual Network    │  • SQL     │
│  • Worker role     │  • Tables             │  • CDN                │   Database │
│  • VM role / VMs   │  • Queues             │  • Traffic Manager    │  • AppFabric│
│  • App Service     │  • Files, Disks       │  • VPN / ExpressRoute │   (Service │
│                    │                       │                       │   Bus, ACS)│
├──────────────────────────────────────────────────────────────────────────┤
│  FABRIC CONTROLLER  — manages VMs, deployment, scaling, health, updates  │
├──────────────────────────────────────────────────────────────────────────┤
│  Hyper-V based hypervisor on thousands of servers in global data centres │
└──────────────────────────────────────────────────────────────────────────┘</span>
<h4>Main components</h4>
<ul><li><b>Compute:</b> runs applications in role instances: <b>Web role</b> (front-end, IIS-hosted web apps), <b>Worker role</b> (background processing), <b>VM role</b> / Azure Virtual Machines (IaaS). Today also App Service, Functions, AKS.</li>
<li><b>Storage:</b> Blobs, Tables, Queues, Files, managed Disks; replicated three times.</li>
<li><b>Fabric controller:</b> the "kernel" of Azure: a distributed set of processes that owns all compute and storage resources, allocates role instances to servers, monitors health, restarts failed instances, applies updates and scales according to the service model.</li>
<li><b>SQL Azure / Azure SQL Database:</b> relational database as a service; also Cosmos DB.</li>
<li><b>AppFabric:</b> <b>Service Bus</b> (messaging and connecting on-premise and cloud apps), <b>Access Control Service</b> (identity federation), caching.</li>
<li><b>Networking:</b> Virtual Network, Azure Connect/VPN, CDN, Traffic Manager, load balancer.</li>
<li><b>Management:</b> Azure portal, Resource Manager, Monitor; identity with Azure AD.</li></ul>
<p>Applications are described by a <b>service definition</b> and <b>configuration</b>; Azure deploys them across fault and upgrade domains in its global data centres. Supports .NET, Java, Python, Node.js, PHP.</p>`,ms:[['Architecture diagram',3],['Compute, storage, fabric controller',3],['Other components',1]]},
{id:'gae-components',m:5,s:['N25:Q20b','N24:Q20b','D23:Q20a'],q:'Core components of Google App Engine',a:`
<p><b>Google App Engine (GAE)</b> is Google's PaaS for building and hosting scalable web applications on Google's infrastructure, without managing servers.</p>
<ul><li><b>Application runtime environment (sandbox):</b> runs app code in a secure sandbox, distributing requests across servers and scaling instances automatically. Supported runtimes: Python, Java, Go, PHP, Node.js, Ruby. Sandbox restricts file system writes and arbitrary sockets for isolation.</li>
<li><b>Front ends and load balancing:</b> receive HTTP requests, route them to the right application instance and serve static files from a separate scalable infrastructure.</li>
<li><b>Datastore (now Firestore in Datastore mode):</b> scalable, schemaless NoSQL object store built on Bigtable, with entities, keys, queries (GQL) and transactions. Also Cloud SQL for relational data.</li>
<li><b>Scalable services (APIs):</b> <b>Memcache</b> (distributed in-memory cache), <b>URL Fetch</b> (access web resources), <b>Mail</b> (send/receive email), <b>Task Queues</b> (background work), <b>Cron / scheduled tasks</b>, <b>Users / authentication</b> (Google accounts), <b>Image manipulation</b>, <b>Blobstore / Cloud Storage</b> for large files, XMPP.</li>
<li><b>Application management and SDK:</b> local development server, deployment tools (gcloud), admin console for versions, traffic splitting, logs, monitoring and quotas.</li>
<li><b>Instances and scaling:</b> automatic, basic or manual scaling; Standard and Flexible environments (Flexible runs Docker containers on Compute Engine VMs).</li></ul>
<p><b>Billing:</b> free quota, then pay for instance hours, storage, bandwidth and API calls.</p>`,ms:[['Definition',1],['Runtime/sandbox',2],['Datastore',1.5],['Services/APIs',2],['SDK/management',1.5]]},
{id:'gae-paas',m:5,s:['A25:Q20a'],q:'Google App Engine for PaaS applications (with diagram)',a:`
<span class="eqb">  Users ─► HTTP(S) request
              │
       ┌──────▼──────────────┐
       │ Google Front End    │  load balancing, static file servers
       └──────┬──────────────┘
              ▼
       ┌───────────────────────────────────────┐
       │ APP SERVERS: application instances in │◄── auto-scaling by
       │ sandboxed runtimes (Python, Java, Go,  │    the App Engine
       │ PHP, Node.js) ─ Standard / Flexible    │    scheduler
       └──────┬───────────┬──────────┬─────────┘
              ▼           ▼          ▼
         Datastore/    Memcache   Services: Task Queues, Cron,
         Firestore,               URL Fetch, Mail, Users,
         Cloud SQL,               Blobstore / Cloud Storage
         Cloud Storage
  Developer ─► SDK / gcloud deploy ─► Admin console (versions, logs, quotas)</span>
<p><b>Google App Engine</b> is a fully managed <b>Platform-as-a-Service</b>: developers write application code, upload it with the SDK, and Google runs it on its infrastructure, handling servers, OS, patching, load balancing and scaling.</p>
<h4>How it supports PaaS applications</h4>
<ul><li><b>Runtime environments:</b> language runtimes in secure sandboxes; Standard environment (fast scale-to-zero instances) and Flexible environment (Docker containers on VMs).</li><li><b>Automatic scaling:</b> instances added/removed with traffic; pay only for resources used.</li><li><b>Managed data storage:</b> Datastore/Firestore NoSQL, Cloud SQL relational, Cloud Storage for blobs, Memcache for caching.</li><li><b>Built-in services:</b> task queues, cron jobs, mail, URL fetch, user authentication, logging and monitoring.</li><li><b>Application lifecycle:</b> versioning, traffic splitting for A/B tests and rollbacks, local development server.</li></ul>
<h4>Benefits and limitations</h4><ul><li>No server administration, rapid deployment, high availability on Google's network, free tier.</li><li>Sandbox restrictions (no writes to local disk, limited request time in Standard), vendor lock-in to Google APIs.</li></ul>
<p>Typical apps: web sites, mobile back-ends, REST APIs (e.g. Snapchat initially ran on GAE).</p>`,ms:[['Diagram',3],['Definition',1],['PaaS features',4],['Benefits/limits',1]]},
{id:'ami',m:5,s:['A25:Q9'],q:'Amazon Machine Image (AMI)',a:`
<ul><li>An <b>AMI</b> is a pre-configured template used to launch EC2 instances: it contains the root volume image (OS, e.g. Amazon Linux, Ubuntu, Windows; plus application server and software), launch permissions and block device mapping.</li><li>One AMI can launch many identical instances of any compatible instance type; AMIs are region-specific and stored as EBS snapshots (or in S3 for instance-store).</li><li>Sources: AWS-provided, AWS Marketplace, community (shared) or your own custom AMIs created from a configured instance; can be private, shared with accounts, or public.</li></ul>`,ms:[['Definition',1],['Contents/usage',1],['Types/sources',1]]},
{id:'storage-forms',m:5,s:['A25:Q19a'],q:'Cloud storage offered as IaaS and as SaaS',a:`
<h4>Storage as IaaS (infrastructure storage)</h4><ul><li>Raw storage capacity provided as a service for consumers' own applications and VMs; the consumer manages the file system, data layout and access.</li><li><b>Block storage:</b> virtual disks/volumes attached to VMs (Amazon EBS, Azure Disks, Google Persistent Disk).</li><li><b>Object storage:</b> buckets of objects accessed by API (Amazon S3, Azure Blob, Google Cloud Storage); used by developers to build backups, data lakes, media storage.</li><li><b>File storage:</b> network file shares (Amazon EFS, Azure Files).</li><li>Pay per GB-month and per request; high durability via replication; programmatic control, encryption options.</li></ul>
<h4>Storage as SaaS (end-user storage applications)</h4><ul><li>Ready-to-use applications that let end users store, sync and share files through web/mobile apps; the provider manages everything including the application.</li><li>Examples: <b>Google Drive</b>, <b>Dropbox</b>, <b>Microsoft OneDrive</b>, Box, iCloud.</li><li>Features: file synchronisation across devices, sharing and collaboration, version history, online editing (Google Docs), free quota + subscription.</li></ul>
<div class="tw"><table class="t"><tr><th>Aspect</th><th>IaaS storage</th><th>SaaS storage</th></tr><tr><td>User</td><td>Developers, system admins</td><td>End users</td></tr><tr><td>Access</td><td>APIs, attached volumes</td><td>Web/mobile apps</td></tr><tr><td>Control</td><td>High (configure, build apps on it)</td><td>Low (use as provided)</td></tr><tr><td>Examples</td><td>S3, EBS, Azure Blob</td><td>Google Drive, Dropbox</td></tr></table></div>`,ms:[['IaaS storage with examples',3.5],['SaaS storage with examples',3],['Comparison',1.5]]},
{id:'simpledb-rds',m:5,s:['A25:Q19b'],q:'Amazon SimpleDB vs Amazon RDS',a:`
<div class="tw"><table class="t"><tr><th>Feature</th><th>Amazon SimpleDB</th><th>Amazon RDS</th></tr>
<tr><td>Type</td><td>NoSQL, non-relational key–attribute data store</td><td>Managed relational database service</td></tr>
<tr><td>Data model</td><td>Domains → items → attribute–value pairs; schema-less; all values strings</td><td>Tables with fixed schema, rows and columns, data types</td></tr>
<tr><td>Engines</td><td>Proprietary AWS service</td><td>MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora</td></tr>
<tr><td>Query</td><td>Simple SELECT-like API; no joins or complex transactions</td><td>Full SQL: joins, transactions, stored procedures</td></tr>
<tr><td>Consistency</td><td>Eventual (optional consistent reads)</td><td>Strong ACID consistency</td></tr>
<tr><td>Administration</td><td>None: automatic indexing and scaling, no servers</td><td>Choose instance class and storage; AWS handles backups, patching, Multi-AZ, read replicas</td></tr>
<tr><td>Limits</td><td>10 GB per domain, small datasets</td><td>Up to tens of TB</td></tr>
<tr><td>Pricing</td><td>Machine hours used by queries + storage</td><td>Instance hours + storage + I/O</td></tr>
<tr><td>Use</td><td>Lightweight metadata, logs, indexes</td><td>Traditional transactional apps (ERP, e-commerce)</td></tr></table></div>`,ms:[['Six points of difference',6]]},
{id:'azure-compute',m:5,s:['A25:Q20b'],q:'Compute services offered by Microsoft Azure',a:`
<ul><li><b>Azure Virtual Machines:</b> IaaS Windows/Linux VMs of many sizes; VM Scale Sets for auto-scaling.</li><li><b>Cloud Services (roles):</b> PaaS model with <b>Web roles</b> (front-end web apps on IIS) and <b>Worker roles</b> (background processing), managed by the fabric controller.</li><li><b>Azure App Service:</b> PaaS hosting for web apps, REST APIs and mobile back-ends with auto-scaling and deployment slots.</li><li><b>Azure Functions:</b> serverless, event-driven code billed per execution.</li><li><b>Containers:</b> Azure Kubernetes Service (AKS), Container Instances; <b>Batch</b> for large parallel/HPC jobs.</li></ul>`,ms:[['Five compute services',5]]},
{id:'ec2',m:5,s:['D23:Q19a','N24:Q9'],q:'Amazon Elastic Compute Cloud (EC2) and its features',a:`
<p><b>Amazon EC2</b> is AWS's core <b>IaaS</b> service that provides resizable virtual servers, called <b>instances</b>, in the cloud. Users launch as many instances as needed within minutes, configure them fully (root access) and pay only for the time used.</p>
<span class="eqb">AMI (template) ──launch──► EC2 INSTANCE (instance type: CPU, RAM)
                             ├─ EBS volumes / instance store
                             ├─ Security group (firewall), key pair (SSH)
                             ├─ Elastic IP, in a VPC subnet
                             └─ in a Region / Availability Zone; Auto Scaling + ELB</span>
<h4>Features</h4>
<ul><li><b>Amazon Machine Images (AMIs):</b> templates with OS and software to launch instances; public, marketplace or custom.</li>
<li><b>Instance types:</b> many combinations of CPU, memory, storage and networking: general purpose (t, m), compute-optimised (c), memory-optimised (r), storage-optimised (i), accelerated (GPU: p, g).</li>
<li><b>Elasticity:</b> scale up/down by changing instance type; scale out with <b>Auto Scaling</b> groups and <b>Elastic Load Balancing</b>.</li>
<li><b>Pricing models:</b> On-Demand (per second), Reserved Instances / Savings Plans (1–3 year commitment, cheaper), Spot Instances (spare capacity, up to 90 % off, can be interrupted), Dedicated Hosts.</li>
<li><b>Storage:</b> persistent <b>EBS</b> volumes and snapshots; temporary instance store.</li>
<li><b>Networking and security:</b> runs in a <b>VPC</b>; <b>security groups</b> (stateful firewall), key pairs for SSH, <b>Elastic IP</b> addresses, IAM roles.</li>
<li><b>Regions and Availability Zones</b> for fault tolerance and low latency.</li>
<li><b>Monitoring</b> with CloudWatch; complete control (root access, choose OS); integration with other AWS services; 99.99 % SLA.</li></ul>`,ms:[['Definition',2],['Features',6]],
a3:`<p><b>Amazon EC2</b> is the AWS IaaS service providing resizable virtual servers (<b>instances</b>) on demand. Instances are launched from <b>AMIs</b>, chosen from many <b>instance types</b>, protected by <b>security groups</b> and key pairs, backed by <b>EBS</b> volumes, and scaled with Auto Scaling. Billing is pay-as-you-go (on-demand, reserved or spot).</p>`,ms3:[['Definition',1.5],['Features',1.5]]},
{id:'gcs',m:5,s:['N24:Q10'],q:'Google Cloud Storage',a:`
<ul><li>Google's unified, scalable <b>object storage</b> service: data stored as objects in <b>buckets</b>, accessed via REST/JSON API, gsutil/gcloud or console; virtually unlimited capacity and 11 nines durability.</li><li><b>Storage classes:</b> Standard (hot data), Nearline (monthly access), Coldline (quarterly) and Archive (yearly); regional, dual-region and multi-region locations.</li><li>Features: object versioning, lifecycle management, IAM and ACL access control, encryption by default, signed URLs; used for backups, media serving, data lakes, and as storage for App Engine and BigQuery.</li></ul>`,ms:[['Concept',1],['Storage classes',1],['Features',1]]},
{id:'s3-ebs',m:5,s:['D23:Q9'],q:'Amazon S3 vs Amazon EBS',a:`
<div class="tw"><table class="t"><tr><th>Amazon S3</th><th>Amazon EBS</th></tr>
<tr><td>Object storage: objects in buckets, accessed via HTTP/REST API and URLs</td><td>Block storage: virtual disk volumes attached to an EC2 instance</td></tr>
<tr><td>Accessible from anywhere, by many clients simultaneously</td><td>Attached to one instance (in same AZ) at a time (except multi-attach)</td></tr>
<tr><td>Virtually unlimited size; objects up to 5 TB</td><td>Fixed provisioned size up to 64 TB per volume</td></tr>
<tr><td>Highly durable (11 nines), replicated across AZs</td><td>Replicated within one AZ; backed up by snapshots to S3</td></tr>
<tr><td>Pay per GB stored and requests; for backups, media, static websites</td><td>Pay per provisioned GB/IOPS; for OS boot disks, databases</td></tr></table></div>`,ms:[['Three differences',3]]},
{id:'s3-arch',m:5,s:['D23:Q19b'],q:'Architecture of Amazon S3',a:`
<span class="eqb">  Client (console / CLI / SDK / browser)
        │ REST API over HTTPS:  PUT / GET / DELETE / LIST
        ▼
  https://bucket-name.s3.region.amazonaws.com/key
        │
  ┌─────▼─────────────── AMAZON S3 (region) ───────────────────────┐
  │  Request routing, authentication (IAM, bucket policy, ACL)      │
  │  BUCKET ── OBJECT = key + data (up to 5 TB) + metadata + version│
  │  Storage classes: Standard, IA, One Zone-IA, Glacier             │
  │  Data replicated across ≥ 3 Availability Zones                   │
  └──────────────────────────────────────────────────────────────────┘</span>
<ul><li><b>Buckets:</b> top-level containers with globally unique names, created in a chosen region; hold unlimited objects; configured with policies, versioning, logging, lifecycle rules, static website hosting.</li><li><b>Objects:</b> the stored entities: data (any type, 0 B–5 TB) plus metadata (system and user-defined name–value pairs); multipart upload for large files.</li><li><b>Keys:</b> unique identifier of an object within a bucket; bucket + key + version ID uniquely identifies every object. Flat namespace (prefixes like folders).</li><li><b>Regions and replication:</b> data stored redundantly across multiple facilities (AZs) in a region: 99.999999999 % durability, 99.99 % availability; optional cross-region replication.</li><li><b>Access:</b> REST/SOAP APIs and SDKs; security via IAM policies, bucket policies, ACLs, pre-signed URLs; encryption at rest (SSE-S3, SSE-KMS) and in transit.</li><li><b>Consistency:</b> strong read-after-write consistency.</li></ul>`,ms:[['Diagram',2],['Buckets, objects, keys',2.5],['Regions, access, durability',1.5]]},
{id:'gdocs',m:5,s:['D23:Q20b'],q:'Google Docs and Google Drive',a:`
<h4>Google Docs</h4><ul><li>A free, web-based <b>SaaS</b> office suite (Docs, Sheets, Slides, Forms) running in the browser; no installation.</li><li><b>Real-time collaboration:</b> many users edit the same document simultaneously, see each other's cursors, add comments and suggestions; chat.</li><li><b>Automatic saving</b> to the cloud and <b>version history</b> to restore earlier versions.</li><li>Import/export of Microsoft Office formats and PDF; offline mode; templates; add-ons; access from mobile apps.</li><li>Sharing controls: view, comment or edit rights by user or link.</li></ul>
<h4>Google Drive</h4><ul><li>Google's <b>cloud storage and file synchronisation</b> service (SaaS storage) launched in 2012; stores any file type and the native Docs/Sheets/Slides files.</li><li>15 GB free (shared with Gmail and Photos), more via Google One subscription.</li><li><b>Sync</b> across devices with Drive for desktop and mobile apps; files available anywhere.</li><li><b>Sharing and collaboration:</b> share files and folders with permissions; shared drives for teams.</li><li>Powerful search (including OCR in images and PDFs), preview of many formats, integration with third-party apps, backup and version history; encryption in transit and at rest.</li></ul>
<p>Together they replace desktop office software and local file servers with cloud-based storage and collaboration.</p>`,ms:[['Google Docs',3],['Google Drive',3]]}
)})(SUBJ.CST423.QB);
