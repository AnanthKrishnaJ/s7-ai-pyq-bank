/* CST423 Modules 1 and 2 */
(Q=>{Q.push(
/* ---------- MODULE 1 ---------- */
{id:'trad-cloud',m:1,s:['D23:Q1','A25:Q1'],q:'Traditional computing vs cloud computing; limitations of traditional computing',a:`
<div class="tw"><table class="t"><tr><th>Traditional (on-premise)</th><th>Cloud computing</th></tr>
<tr><td>Organisation buys and owns servers, storage, software</td><td>Resources rented on demand from a provider</td></tr>
<tr><td>Large upfront capital expense (CapEx)</td><td>Pay-per-use operating expense (OpEx)</td></tr>
<tr><td>Fixed capacity; must be sized for peak load</td><td>Elastic: scale up/down in minutes</td></tr>
<tr><td>Maintained by in-house IT staff</td><td>Provider manages hardware, updates, backups</td></tr>
<tr><td>Access mostly within the organisation's network</td><td>Accessible anywhere over the internet</td></tr></table></div>
<h4>Limitations of traditional computing</h4><ul><li>High initial investment and long procurement time.</li><li>Under-utilisation (servers idle most of the time) or overload at peaks; poor scalability.</li><li>High maintenance, power, cooling and staff costs; single site so weaker disaster recovery.</li></ul>`,ms:[['Three differences / limitations',3]]},
{id:'cluster-grid',m:1,s:['N25:Q2','N24:Q1'],q:'Cluster computing vs grid computing',a:`
<div class="tw"><table class="t"><tr><th>Cluster computing</th><th>Grid computing</th></tr>
<tr><td>Tightly coupled computers connected by a fast LAN, working as a single system</td><td>Loosely coupled, geographically distributed computers connected over WAN/internet</td></tr>
<tr><td>Homogeneous nodes (same hardware and OS)</td><td>Heterogeneous nodes (different hardware, OS)</td></tr>
<tr><td>Single owner/administrative domain, centralised management</td><td>Multiple organisations/domains, decentralised; virtual organisations</td></tr>
<tr><td>Used for high availability and HPC jobs</td><td>Used to share idle resources for large scientific problems (e.g. SETI@home, LHC grid)</td></tr></table></div>`,ms:[['Three differences',3]]},
{id:'grid-dist-cloud',m:1,s:['N25:Q12a'],q:'Grid vs distributed vs cloud computing',a:`
<div class="tw"><table class="t"><tr><th>Aspect</th><th>Distributed computing</th><th>Grid computing</th><th>Cloud computing</th></tr>
<tr><td>Idea</td><td>Many networked computers cooperate on a task by message passing</td><td>Sharing heterogeneous resources across organisations as a virtual supercomputer</td><td>On-demand IT services (IaaS/PaaS/SaaS) over the internet, pay-per-use</td></tr>
<tr><td>Ownership</td><td>Usually one organisation</td><td>Multiple organisations (virtual organisations)</td><td>Provider owns; users rent</td></tr>
<tr><td>Resource model</td><td>Dedicated nodes</td><td>Pooled, scheduled by grid middleware (Globus)</td><td>Virtualised, elastic resource pool</td></tr>
<tr><td>Scalability</td><td>Limited by the system design</td><td>High but via job queues</td><td>Rapid, automatic elasticity</td></tr>
<tr><td>Billing</td><td>None</td><td>Mostly free/shared for research</td><td>Metered, pay-as-you-go</td></tr>
<tr><td>Virtualisation</td><td>Not essential</td><td>Rarely used</td><td>Core technology</td></tr>
<tr><td>Examples</td><td>Distributed databases, P2P, banking systems</td><td>SETI@home, WLCG (CERN)</td><td>AWS, Azure, Google Cloud</td></tr></table></div>
<p><b>Common points:</b> all use networked computers and resource sharing; cloud evolved from grid and utility computing by adding virtualisation, service orientation and a business model.</p>`,ms:[['Definitions',2],['Comparison points',4]]},
{id:'nist',m:1,s:['N25:Q11a','A25:Q12a','N24:Q11a','D23:Q11a'],q:'NIST cloud computing reference model / architecture',a:`
<p>NIST defines cloud computing as a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources that can be rapidly provisioned and released with minimal management effort. Its reference model has <b>5 essential characteristics, 3 service models, 4 deployment models</b>, and a reference architecture of <b>5 actors</b>.</p>
<span class="eqb">┌──────────────┐  ┌──────────────────────────────────────────────┐  ┌──────────────┐
│ CLOUD        │  │               CLOUD PROVIDER                  │  │ CLOUD BROKER │
│ CONSUMER     │  │ ┌──────────────────────────┐ ┌─────────────┐  │  │ • Service    │
│              │  │ │ Service Orchestration    │ │ Cloud       │  │  │  intermediation
├──────────────┤  │ │  Service layer: SaaS     │ │ Service     │  │  │ • Service    │
│ CLOUD        │  │ │                 PaaS     │ │ Management  │  │  │  aggregation │
│ AUDITOR      │  │ │                 IaaS     │ │ • business  │  │  │ • Service    │
│ • Security   │  │ │  Resource abstraction &  │ │   support   │  │  │  arbitrage   │
│   audit      │  │ │  control layer           │ │ • provision-│  │  └──────────────┘
│ • Privacy    │  │ │  Physical resource layer │ │   ing/config│  │
│   impact     │  │ │  (hardware, facility)    │ │ • portability│ │
│ • Performance│  │ └──────────────────────────┘ └─────────────┘  │
│   audit      │  │   Security  │  Privacy (cross-cutting)         │
└──────────────┘  └──────────────────────────────────────────────┘
                     ════════════ CLOUD CARRIER ════════════
                     (network connectivity and transport)</span>
<h4>Five actors</h4>
<ul><li><b>Cloud consumer:</b> person or organisation that uses services from a provider, under a service-level agreement (SLA), and pays for them.</li>
<li><b>Cloud provider:</b> entity that makes services available; handles service deployment, orchestration, management, security and privacy.</li>
<li><b>Cloud auditor:</b> independent party that assesses services for security controls, privacy impact and performance against SLAs.</li>
<li><b>Cloud broker:</b> manages use, performance and delivery of services and negotiates between providers and consumers: intermediation (value-added services), aggregation (combining services), arbitrage (choosing among providers).</li>
<li><b>Cloud carrier:</b> intermediary providing connectivity and transport of services (network and telecom operators).</li></ul>
<h4>Provider's activities</h4><ul><li><b>Service orchestration:</b> service layer (SaaS, PaaS, IaaS), resource abstraction and control layer (hypervisors, virtualisation), physical resource layer (servers, network, cooling, power).</li><li><b>Cloud service management:</b> business support (billing, contracts), provisioning and configuration (rapid provisioning, metering, SLA monitoring), portability and interoperability.</li><li><b>Security and privacy</b> across all layers.</li></ul>
<h4>Essential characteristics</h4><p>On-demand self-service, broad network access, resource pooling (multi-tenancy), rapid elasticity, measured service.</p>
<h4>Service and deployment models</h4><p>SaaS, PaaS, IaaS; public, private, community, hybrid clouds.</p>`,ms:[['Definition',1],['Diagram',3],['Five actors',4],['Characteristics / models',2]]},
{id:'deploy-models',m:1,s:['N25:Q11b','D23:Q12b'],q:'Cloud deployment models / types of cloud',a:`
<span class="eqb">               TYPES OF CLOUD
   by deployment:  Public │ Private │ Community │ Hybrid
   by service:     IaaS   │ PaaS    │ SaaS     (also XaaS)</span>
<ul><li><b>Public cloud:</b> owned and operated by a third-party provider; services offered to the general public over the internet on pay-per-use (AWS, Azure, GCP). <i>Pros:</i> no capital cost, huge scale, elastic. <i>Cons:</i> less control, shared multi-tenant infrastructure, data privacy concerns.</li>
<li><b>Private cloud:</b> infrastructure used exclusively by one organisation, hosted on-premise or by a third party (OpenStack, VMware vSphere, Eucalyptus). <i>Pros:</i> control, security, compliance, customisation. <i>Cons:</i> high cost, limited scalability, needs in-house staff.</li>
<li><b>Community cloud:</b> shared by several organisations with common concerns (mission, security, compliance), e.g. government departments, hospitals, universities. Costs are shared; managed by members or a third party.</li>
<li><b>Hybrid cloud:</b> combination of two or more of the above (usually private + public) bound by technology that allows data and application portability, e.g. <b>cloud bursting</b>: run normal load in private cloud and overflow to public cloud at peaks. Balances control and scalability; complex to manage.</li></ul>
<p>By service model clouds are classified as <b>IaaS</b> (virtual machines, storage), <b>PaaS</b> (development platform), <b>SaaS</b> (ready applications). Other variants: multi-cloud, virtual private cloud.</p>`,ms:[['Public',1.5],['Private',1.5],['Community',1.5],['Hybrid',1.5],['Service-based classification (8 m)',2]]},
{id:'service-models',m:1,s:['N25:Q12b'],q:'Cloud services; IaaS, PaaS, SaaS with examples',a:`
<p><b>Cloud service:</b> any IT capability (computing, storage, platform, application) made remotely accessible over a network by a cloud provider, provisioned on demand and metered.</p>
<span class="eqb">  You manage ▓   Provider manages ░
                  On-prem   IaaS     PaaS     SaaS
  Applications      ▓        ▓        ▓        ░
  Data              ▓        ▓        ▓        ░
  Runtime           ▓        ▓        ░        ░
  Middleware        ▓        ▓        ░        ░
  OS                ▓        ▓        ░        ░
  Virtualisation    ▓        ░        ░        ░
  Servers/Storage   ▓        ░        ░        ░
  Networking        ▓        ░        ░        ░</span>
<ul><li><b>IaaS (Infrastructure as a Service):</b> provider gives virtualised raw resources: VMs, storage, networks. The consumer installs and manages OS, middleware and applications. Highest control. <i>Example:</i> Amazon EC2, Google Compute Engine, Azure VMs.</li>
<li><b>PaaS (Platform as a Service):</b> provider gives a ready runtime platform (OS, language runtime, database, web server, tools) to develop and deploy applications; consumer manages only code and data; automatic scaling. <i>Example:</i> Google App Engine, Azure App Service, Heroku.</li>
<li><b>SaaS (Software as a Service):</b> complete application delivered over the web on subscription; consumer only uses it (maybe some settings). <i>Example:</i> Gmail, Google Docs, Salesforce CRM, Microsoft 365.</li></ul>
<p>Moving from IaaS to SaaS, consumer control and responsibility decrease while provider responsibility and convenience increase.</p>`,ms:[['Definition',1],['IaaS',2],['PaaS',2],['SaaS',2],['Diagram',1]]},
{id:'delivery-models',m:1,s:['D23:Q2'],q:'Why cloud delivery models are called cloud service delivery models',a:`
<ul><li>A cloud delivery model is a prepackaged combination of IT resources offered by a provider, and each one is delivered to the consumer <b>as a service</b>: Infrastructure-as-a-Service, Platform-as-a-Service, Software-as-a-Service.</li><li>The consumer does not buy the resources; it subscribes to them on demand, accesses them over the network, and is billed by usage under an SLA, which are the properties of a service.</li><li>Hence the terms are used interchangeably: the model describes <i>what service</i> is delivered and how responsibility is split between provider and consumer.</li></ul>`,ms:[['Delivered as service',1.5],['Explanation',1.5]]},
{id:'saas',m:1,s:['N24:Q2'],q:'Key features of SaaS with example',a:`
<ul><li>Complete application hosted by the provider and accessed through a web browser or thin client; nothing to install.</li><li>Multi-tenant architecture: one instance serves many customers; automatic updates and patches.</li><li>Subscription / pay-per-user pricing; scalable; accessible anywhere on any device; provider handles infrastructure, security and backups.</li></ul>
<p><b>Examples:</b> Gmail, Google Docs, Microsoft 365, Salesforce CRM, Zoom.</p>`,ms:[['Features',2],['Example',1]]},
{id:'paas',m:1,s:['A25:Q11b'],q:'Main characteristics of a PaaS solution',a:`
<ul><li><b>Runtime framework:</b> provides an execution environment (language runtimes, web/app servers, databases, middleware) for developer code.</li><li><b>Abstraction:</b> developers deploy applications without managing servers, OS or virtual machines.</li><li><b>Automation and elasticity:</b> automatic provisioning, load balancing and scaling of the application according to demand.</li><li><b>Development tools and APIs:</b> SDKs, IDE integration, testing, versioning, monitoring; built-in services (storage, queues, authentication).</li><li><b>Multi-tenancy</b> and pay-per-use billing; possible vendor lock-in due to proprietary APIs.</li></ul>
<p>Examples: Google App Engine, Azure App Service, Heroku, AWS Elastic Beanstalk.</p>`,ms:[['Four characteristics',4]]},
{id:'iaas-control',m:1,s:['D23:Q11b'],q:'How IaaS gives consumers a high level of control and responsibility',a:`
<ul><li>IaaS provides <b>raw, virtualised infrastructure</b>: virtual servers, storage, networks, with the provider responsible only for the physical hardware, data centre and hypervisor.</li>
<li>The consumer gets <b>administrative (root) access</b> to the virtual machines: chooses and installs the operating system, middleware, runtime and applications, and configures firewalls, IP addresses, load balancers and storage volumes.</li>
<li>So the consumer controls the <b>entire software stack</b> and how resources are scaled (number and size of VMs).</li>
<li>With that control comes <b>responsibility</b>: patching and securing the OS, backups, monitoring, licensing, configuring scaling and high availability, and the cost of resources left running.</li></ul>
<div class="tw"><table class="t"><tr><th>Provider manages</th><th>Consumer manages</th></tr><tr><td>Physical servers, storage, network, data centre, virtualisation layer</td><td>OS, runtime, middleware, applications, data, security configuration, scaling</td></tr></table></div>
<p>Example: in Amazon EC2 the user picks an AMI, instance type, security group and EBS volumes and manages everything inside the instance.</p>`,ms:[['What IaaS provides',2],['Consumer control',2],['Consumer responsibility / example',2]]},
{id:'char-ben',m:1,s:['A25:Q11a','N24:Q12a','D23:Q12a'],q:'Characteristics, benefits and challenges of cloud computing',a:`
<h4>Characteristics</h4>
<ul><li><b>On-demand self-service:</b> users provision computing and storage themselves without human interaction with the provider.</li><li><b>Broad (ubiquitous) network access:</b> available over the network from laptops, phones and other devices.</li><li><b>Resource pooling / multitenancy:</b> provider's resources are pooled and dynamically assigned to many consumers; location independence.</li><li><b>Rapid elasticity:</b> capacity can be scaled out and in quickly, often automatically; appears unlimited.</li><li><b>Measured service:</b> usage is metered and billed (pay-per-use).</li><li><b>Resiliency:</b> redundancy across data centres for availability.</li></ul>
<h4>Benefits</h4>
<ul><li><b>Reduced cost:</b> no upfront investment; pay only for what is used; lower maintenance.</li><li><b>Scalability and elasticity</b> to handle peaks.</li><li><b>Availability and reliability</b> through redundant infrastructure; easy disaster recovery and backup.</li><li><b>Speed and agility:</b> resources in minutes; faster time to market.</li><li><b>Accessibility and collaboration</b> from anywhere.</li><li>Automatic updates; focus on core business instead of IT; green computing through better utilisation.</li></ul>
<h4>Challenges</h4>
<ul><li><b>Security and privacy:</b> data stored with a third party; shared multi-tenant environment; overlapping trust boundaries.</li><li><b>Reduced operational governance/control</b> over infrastructure.</li><li><b>Vendor lock-in and limited portability</b> due to proprietary APIs.</li><li><b>Regulatory and legal compliance</b>: data location across countries.</li><li><b>Network dependence:</b> latency, bandwidth and internet outages.</li><li>Cost management (unexpected bills), performance variability, migration complexity.</li></ul>`,ms:[['Characteristics',4],['Benefits',3],['Challenges',3]]},
{id:'scaling',m:1,s:['A25:Q2'],q:'Horizontal vs vertical scaling',a:`
<div class="tw"><table class="t"><tr><th>Horizontal scaling (scale out/in)</th><th>Vertical scaling (scale up/down)</th></tr>
<tr><td>Add or remove more instances (servers/VMs) of the same type</td><td>Replace with a bigger or smaller instance (more CPU, RAM)</td></tr>
<tr><td>Uses commodity hardware; cheaper</td><td>Needs specialised high-capacity servers; costly</td></tr>
<tr><td>Practically unlimited; resources available instantly</td><td>Limited by maximum hardware capacity</td></tr>
<tr><td>No downtime; needs load balancer and distributed design</td><td>Usually needs downtime/restart; simple, no app changes</td></tr></table></div>`,ms:[['Definitions',1],['Two or more differences',2]]},
{id:'boundaries',m:1,s:['A25:Q12b'],q:'Organizational boundary and trust boundary',a:`
<ul><li><b>Organizational boundary:</b> the physical perimeter that surrounds the set of IT resources owned and governed by an organisation. A cloud consumer's and a cloud provider's organisational boundaries are separate; the cloud lies outside the consumer's boundary.</li>
<li><b>Trust boundary:</b> a logical perimeter that spans beyond physical boundaries to include all IT resources trusted by an organisation. When a consumer uses cloud services, its trust boundary <b>extends</b> beyond its organisational boundary to include the cloud-based resources it uses.</li></ul>
<span class="eqb">┌ consumer org boundary ┐      ┌ provider org boundary ┐
│  on-premise servers   │      │  cloud VMs, storage   │
└───────────────────────┘      └───────────────────────┘
└ ─ ─ ─ ─ ─ ─ ─ consumer's TRUST boundary ─ ─ ─ ─ ─ ─ ─┘</span>
<p>Overlapping trust boundaries (many consumers on the same provider) create security risks.</p>`,ms:[['Organizational boundary',2],['Trust boundary',2]]},
{id:'pub-priv',m:1,s:['N24:Q11b'],q:'Public vs private cloud in terms of flexibility',a:`
<div class="tw"><table class="t"><tr><th>Public cloud</th><th>Private cloud</th></tr>
<tr><td>Highly elastic: practically unlimited capacity on demand, pay-per-use</td><td>Scalability limited to the organisation's own hardware</td></tr>
<tr><td>Little flexibility in customising hardware, security policies, hypervisor or network</td><td>Fully customisable infrastructure, policies, security and compliance</td></tr>
<tr><td>Standardised services; choice limited to provider's offerings</td><td>Can run legacy and specialised workloads</td></tr>
<tr><td>Fast to start, no capital cost</td><td>Requires capital investment and in-house staff</td></tr></table></div>`,ms:[['Four points',4]]},
{id:'hybrid',m:1,s:['N24:Q12b'],q:'Hybrid cloud as a combination of deployment models: justify with example',a:`
<p>A hybrid cloud is composed of two or more distinct clouds (private, public, community) that remain separate entities but are bound together by technology that allows data and application portability.</p>
<p><b>Example:</b> a bank keeps customer account databases and core banking in its <b>private cloud</b> for security and regulatory compliance, but runs its public website, mobile app front-end and analytics on a <b>public cloud</b> (AWS/Azure). During festive-season sales, extra load is handled by <b>cloud bursting</b> into the public cloud. Both parts are connected via VPN/APIs and managed together, so the deployment combines two models, which justifies the statement.</p>`,ms:[['Definition',1.5],['Example',2.5]]},
/* ---------- MODULE 2 ---------- */
{id:'trad-vm',m:2,s:['N25:Q1'],q:'Traditional computer vs virtual machine',a:`
<span class="eqb">Traditional:  Applications │ Operating system │ Hardware
Virtualised:  App│App │ Guest OS│Guest OS │ VMM / hypervisor │ (Host OS) │ Hardware</span>
<ul><li>A traditional computer runs <b>one OS</b> directly on hardware; applications are tied to that OS. A VM is a <b>software emulation</b> of a computer; several VMs with different OSs run on one physical host via a hypervisor.</li><li>Traditional machines are often under-utilised and hard to move; VMs give isolation, consolidation, easy migration, snapshots and cloning.</li><li>VMs add a small overhead from the virtualisation layer.</li></ul>`,ms:[['Three differences',3]]},
{id:'vm-types',m:2,s:['N25:Q3','N24:Q4'],q:'Types of virtual machines',a:`
<ul><li><b>System virtual machine:</b> provides a complete hardware platform that runs a full guest OS (e.g. VMware, Xen, VirtualBox, Hyper-V). Several OSs share one physical machine through a hypervisor.</li><li><b>Process (application) virtual machine:</b> runs a single process/program in a platform-independent environment and exists only while the process runs (e.g. Java Virtual Machine, .NET CLR, Python VM).</li><li>By hypervisor placement: <b>native/bare-metal VM</b> (Type 1, e.g. Xen, ESXi) and <b>hosted VM</b> (Type 2, runs on a host OS, e.g. VirtualBox); also <b>dual-mode/para-virtual</b> VMs.</li></ul>`,ms:[['System VM',1.5],['Process VM / other types',1.5]]},
{id:'hypervisor',m:2,s:['A25:Q13a','N25:Q4'],q:'Hypervisor and its types (Type 1 vs Type 2)',a:`
<p>A <b>hypervisor</b> or <b>virtual machine monitor (VMM)</b> is the software layer that creates and runs virtual machines. It sits between hardware and guest operating systems, allocates CPU, memory, storage and I/O to each VM, isolates them, and traps and emulates privileged instructions.</p>
<span class="eqb">  Type 1 (bare-metal)                 Type 2 (hosted)
  ┌──────┬──────┬──────┐              ┌──────┬──────┐
  │ VM 1 │ VM 2 │ VM 3 │              │ VM 1 │ VM 2 │
  ├──────┴──────┴──────┤              ├──────┴──────┤
  │    HYPERVISOR      │              │ HYPERVISOR  │ (an application)
  ├────────────────────┤              ├─────────────┤
  │     HARDWARE       │              │  HOST OS    │
  └────────────────────┘              ├─────────────┤
                                      │  HARDWARE   │
                                      └─────────────┘</span>
<div class="tw"><table class="t"><tr><th>Type 1 (native / bare-metal)</th><th>Type 2 (hosted)</th></tr>
<tr><td>Runs directly on hardware</td><td>Runs as an application on a host OS</td></tr>
<tr><td>High performance, low overhead</td><td>Slower: extra host OS layer</td></tr>
<tr><td>More secure and stable; used in data centres and clouds</td><td>Easy to install; used on desktops for testing and development</td></tr>
<tr><td>Xen, VMware ESXi, Microsoft Hyper-V, KVM</td><td>VMware Workstation, Oracle VirtualBox, Parallels</td></tr></table></div>
<h4>By architecture</h4><ul><li><b>Monolithic hypervisor:</b> device drivers are inside the hypervisor (VMware ESXi): fast, but large and hardware-specific.</li><li><b>Microkernel hypervisor:</b> hypervisor does only basic functions (CPU scheduling, memory); drivers run in a privileged management VM (Xen's Dom0, Hyper-V's parent partition): smaller, more secure.</li></ul>
<h4>Functions</h4><p>VM creation and lifecycle, resource partitioning and scheduling, memory management (shadow page tables), I/O virtualisation, isolation, live migration, snapshots.</p>`,ms:[['Definition',2],['Type 1 and Type 2 with diagram',4],['Comparison / architectures',3]],
a3:`<div class="tw"><table class="t"><tr><th>Type 1 (bare-metal)</th><th>Type 2 (hosted)</th></tr><tr><td>Runs directly on hardware</td><td>Runs on top of a host OS</td></tr><tr><td>Fast, efficient, secure; used in servers and clouds</td><td>More overhead; used on desktops for testing</td></tr><tr><td>Xen, VMware ESXi, Hyper-V</td><td>VirtualBox, VMware Workstation</td></tr></table></div>`,ms3:[['Three differences',3]]},
{id:'xen',m:2,s:['A25:Q3','N24:Q3','D23:Q14b'],q:'Xen hypervisor: virtualization type, architecture and elements',a:`
<p><b>Xen</b> is an open-source, bare-metal (Type 1), microkernel hypervisor from the University of Cambridge, used by AWS EC2 (earlier), Citrix XenServer. It is best known for <b>para-virtualization</b>; with Intel VT-x/AMD-V it also supports full (hardware-assisted, HVM) virtualization.</p>
<span class="eqb">┌────────────────┬───────────────┬───────────────┐
│ Domain 0       │ Domain U      │ Domain U      │
│ (privileged)   │ (PV guest)    │ (HVM guest)   │
│ control tools, │ modified      │ unmodified    │
│ device drivers,│ guest OS      │ guest OS      │
│ backend drivers│ frontend drv  │ (QEMU emul.)  │
├────────────────┴───────────────┴───────────────┤
│        XEN HYPERVISOR (Ring 0): CPU scheduling, │
│        memory management, interrupts, hypercalls│
├─────────────────────────────────────────────────┤
│                    HARDWARE                     │
└─────────────────────────────────────────────────┘</span>
<h4>Elements</h4>
<ul><li><b>Xen hypervisor:</b> thin layer running in the most privileged ring (Ring 0). Handles CPU scheduling, memory partitioning and interrupts. Has no device drivers.</li>
<li><b>Domain 0 (Dom0):</b> the first, privileged VM started at boot. Contains the real device drivers and the control/management tools (create, destroy, migrate VMs). Accesses hardware directly and provides I/O to other domains through <b>backend drivers</b>.</li>
<li><b>Domain U (DomU):</b> unprivileged guest VMs. PV guests use <b>frontend drivers</b> that talk to Dom0 backend drivers through shared memory (split-driver model); HVM guests run unmodified OSs using hardware support.</li>
<li><b>Hypercalls:</b> para-virtualised guest kernels replace privileged instructions with hypercalls to Xen (like system calls to an OS); guest kernel runs in Ring 1.</li>
<li><b>Event channels and grant tables</b> for communication and memory sharing between domains.</li></ul>
<p><b>Security note:</b> Dom0 is a single point of control; compromise of Dom0 compromises all guests.</p>`,ms:[['Type of virtualization',1],['Architecture diagram',3],['Elements: hypervisor, Dom0, DomU, hypercalls',4]],
a3:`<p>Xen uses <b>para-virtualization</b> (guest kernels modified to issue hypercalls); it also supports hardware-assisted full virtualization.</p><p><b>Architecture:</b> a thin bare-metal Xen hypervisor (Ring 0) for CPU scheduling and memory; <b>Domain 0</b>, a privileged VM with device drivers and management tools; and <b>Domain U</b> guest VMs whose frontend drivers send I/O to Dom0's backend drivers.</p>`,ms3:[['Type',1],['Architecture',2]]},
{id:'net-virt',m:2,s:['A25:Q4'],q:'Network-level virtualization',a:`
<ul><li>Combining physical network resources (switches, routers, links, NICs) and presenting them as multiple independent <b>logical/virtual networks</b> that share the same hardware.</li><li><b>External</b> network virtualization: VLANs, VPNs, VXLAN overlays group hosts into virtual networks across physical segments; <b>internal</b>: virtual switches and virtual NICs connect VMs inside one host.</li><li>Software-defined networking (SDN) separates control from data plane; NFV runs firewalls/load balancers as software. Benefits: isolation, flexibility, quick provisioning per tenant.</li></ul>`,ms:[['Concept',1.5],['Types / examples',1.5]]},
{id:'storage-virt',m:2,s:['N25:Q13a','D23:Q14a'],q:'Storage virtualization',a:`
<p><b>Storage virtualization</b> pools physical storage from multiple devices (disks, arrays, NAS, SAN) and presents it as a single logical storage resource managed from a central console. Users and VMs see logical volumes and are unaware of where data physically resides.</p>
<span class="eqb">   Servers / VMs:   [App 1]   [App 2]   [App 3]
                        │         │         │
                  logical volumes / virtual disks (LUNs)
                        └─────────┼─────────┘
              ┌────────── VIRTUALIZATION LAYER ───────────┐
              │ mapping table: logical block → physical   │
              │ pooling, thin provisioning, snapshots,    │
              │ replication, migration                    │
              └──────┬────────────┬─────────────┬─────────┘
               ┌─────▼───┐  ┌─────▼────┐  ┌─────▼────┐
               │ Disk    │  │ SAN      │  │ NAS      │   physical storage pool
               │ array 1 │  │ array    │  │ device   │
               └─────────┘  └──────────┘  └──────────┘</span>
<h4>Types</h4><ul><li><b>Block-level:</b> logical volumes mapped to physical blocks (SAN-based, LVM).</li><li><b>File-level:</b> file systems abstracted from physical location (NAS, distributed file systems like HDFS).</li><li>By location: <b>host-based</b> (volume manager in server OS), <b>network-based</b> (switch/appliance in the SAN, in-band or out-of-band), <b>array-based</b> (storage controller).</li></ul>
<h4>Benefits</h4><ul><li>Better utilisation and thin provisioning; easy expansion without downtime.</li><li>Centralised management, non-disruptive data migration.</li><li>Snapshots, replication, backup and disaster recovery.</li><li>Basis of cloud storage services such as Amazon EBS and S3.</li></ul>
<p><b>Drawbacks:</b> mapping metadata is a single point of failure; complexity and possible performance overhead.</p>`,ms:[['Definition',1.5],['Sketch',2.5],['Types',2],['Benefits',2]]},
{id:'emulation',m:2,s:['N25:Q13b','D23:Q3'],q:'Emulation, interpretation and binary translation',a:`
<p>These are techniques to run code written for one instruction set architecture (ISA) on a machine with a different ISA, i.e. <b>ISA-level virtualization</b>.</p>
<ul><li><b>Emulation:</b> software imitates the complete hardware of a guest system (CPU, memory, I/O) on a different host, so an unmodified guest OS and programs run as if on the original machine. Example: QEMU emulating ARM on x86, game console emulators. Flexible but slow.</li>
<li><b>Interpretation:</b> the emulator fetches, decodes and executes each guest instruction one at a time using host instructions (a software CPU). Simple, but each source instruction may need tens or hundreds of host instructions, so very slow.</li>
<li><b>Binary translation:</b> blocks of guest instructions are translated into equivalent host instructions once, cached and then executed directly. <b>Dynamic</b> translation happens at run time (QEMU TCG, VMware's binary translation of privileged x86 instructions, Apple Rosetta); <b>static</b> translates the whole binary beforehand. Much faster than interpretation because translated code is reused.</li></ul>`,ms:[['Emulation',2],['Interpretation',2],['Binary translation',2]],
a3:`<p><b>Emulation virtualization</b> is ISA-level virtualization in which software (the emulator) imitates the full hardware of a guest machine, so programs and OSs built for one instruction set run unmodified on a host with a different instruction set. It works by <b>interpretation</b> (decode and execute each instruction in software) or faster <b>dynamic binary translation</b> (translate blocks and cache them). Example: QEMU running ARM code on x86. It is very flexible but slow.</p>`,ms3:[['Definition',1.5],['How / example',1.5]]},
{id:'os-virt',m:2,s:['N25:Q14a','N24:Q14b'],q:'Operating system level virtualization (containers): model, advantages, limitations',a:`
<span class="eqb">┌────────────┬────────────┬────────────┐
│ Container 1│ Container 2│ Container 3│   each: apps + libs/bins,
│ (VE / jail)│            │            │   own file system, processes,
│  App A     │  App B     │  App C     │   network, users
├────────────┴────────────┴────────────┤
│   VIRTUALIZATION LAYER in OS kernel  │   namespaces, cgroups,
│   (container engine: Docker, LXC)    │   chroot, resource control
├──────────────────────────────────────┤
│   SINGLE HOST OS KERNEL (shared)     │
├──────────────────────────────────────┤
│              HARDWARE                │
└──────────────────────────────────────┘</span>
<p>The OS kernel is shared and partitioned into multiple isolated user-space instances called <b>containers / virtual environments (VEs) / jails</b>. Each looks like a separate server with its own processes, file system, network and users, but there is no guest OS and no hypervisor. Implemented with namespaces (isolation) and control groups (resource limits). Examples: Docker, LXC, OpenVZ, Solaris Zones, FreeBSD jails.</p>
<h4>Advantages</h4><ul><li>Very low overhead, near-native performance; containers start in seconds.</li><li>High density: hundreds of containers per host; small images.</li><li>Easy deployment, portability (DevOps, microservices), simple resource scaling.</li></ul>
<h4>Limitations</h4><ul><li>All containers must use the same OS kernel family (no Windows container on a Linux kernel).</li><li>Weaker isolation than VMs: a kernel vulnerability can affect all containers.</li><li>Less flexibility in kernel-level customisation.</li></ul>`,ms:[['Model diagram',2.5],['Explanation',1.5],['Advantages',1.5],['Limitations',1.5]]},
{id:'virt-pros',m:2,s:['A25:Q14a','D23:Q4','N25:Q14b'],q:'Virtualization: definition, advantages (pros) and disadvantages (cons)',a:`
<p><b>Virtualization</b> is the creation of a virtual (software-based) version of computing resources such as servers, storage, networks or operating systems, so that one physical resource can act as many logical resources (or many as one). A hypervisor lets several VMs with different OSs share one physical machine in isolation.</p>
<h4>Advantages</h4>
<ul><li><b>Server consolidation and better utilisation:</b> many workloads on fewer machines (utilisation from ~15 % to 70 %+).</li><li><b>Cost saving:</b> less hardware, power, cooling and space.</li><li><b>Isolation:</b> a crash or attack in one VM does not affect others.</li><li><b>Rapid provisioning:</b> VMs created from templates in minutes; cloning, snapshots.</li><li><b>Live migration and high availability:</b> move running VMs for maintenance or load balancing; easy disaster recovery.</li><li><b>Run multiple OSs</b> and legacy applications on the same hardware; good for testing.</li><li>Foundation of cloud computing and multi-tenancy.</li></ul>
<h4>Disadvantages</h4>
<ul><li><b>Performance overhead</b> of the virtualization layer, especially for I/O-intensive work.</li><li><b>Single point of failure:</b> host failure brings down all its VMs.</li><li><b>Security risks:</b> hypervisor attacks, VM escape, VM sprawl, insecure shared images.</li><li><b>Licensing and initial setup cost</b>; need skilled administrators.</li><li>Resource contention among VMs; some hardware not virtualisable.</li></ul>`,ms:[['Definition',2],['Advantages',4],['Disadvantages',4]],
a3:`<p><b>Pros:</b> server consolidation and higher utilisation, lower hardware/power cost, isolation between VMs, quick provisioning, snapshots and live migration, run multiple OSs.</p><p><b>Cons:</b> performance overhead, host is a single point of failure, new security risks (hypervisor attacks, VM sprawl), licensing and management complexity.</p>`,ms3:[['Pros',1.5],['Cons',1.5]]},
{id:'full-para',m:2,s:['N24:Q13b','D23:Q13b','N25:Q14b'],q:'Full virtualization vs para-virtualization vs hardware-assisted virtualization',a:`
<span class="eqb">  FULL (binary translation)      PARA-VIRTUALIZATION          HARDWARE-ASSISTED
  Ring 3: user apps              Ring 3: user apps             Non-root: apps, guest OS
  Ring 1: UNMODIFIED guest OS    Ring 1: MODIFIED guest OS     (Ring 0 non-root)
  Ring 0: VMM — traps and        ── hypercalls ──►             Root mode: VMM
          binary-translates      Ring 0: hypervisor            (VT-x / AMD-V traps
          privileged instr.                                     privileged instr.)
  Hardware                       Hardware                      Hardware with VT support</span>
<h4>Para-virtualization</h4>
<p>The guest OS kernel is <b>modified</b> to know it is virtualised: instead of executing sensitive/privileged instructions (which x86 cannot trap cleanly), it calls the hypervisor directly through <b>hypercalls</b>. Guest kernel runs in Ring 1, hypervisor in Ring 0. I/O uses efficient split drivers. <b>Example:</b> Xen, VMware ESX para-virtual drivers, KVM virtio.</p>
<p><b>Merits:</b> lower overhead than binary translation, near-native performance, simpler hypervisor. <b>Demerits:</b> needs source-level modification of the OS (not possible for closed OSs like older Windows); compatibility and maintenance of modified kernels.</p>
<div class="tw"><table class="t"><tr><th>Feature</th><th>Full virtualization</th><th>Para-virtualization</th><th>Hardware-assisted</th></tr>
<tr><td>Guest OS</td><td>Unmodified</td><td>Modified (hypercalls)</td><td>Unmodified</td></tr>
<tr><td>Handling privileged instructions</td><td>Trap + dynamic binary translation by VMM</td><td>Replaced by hypercalls</td><td>CPU traps them in hardware (VM exits)</td></tr>
<tr><td>Guest awareness</td><td>Unaware it is virtualised</td><td>Aware</td><td>Unaware</td></tr>
<tr><td>Performance</td><td>Overhead of translation</td><td>Near-native</td><td>Good; improving with each CPU generation</td></tr>
<tr><td>Portability</td><td>Any OS</td><td>Only OSs that can be modified</td><td>Any OS, needs VT-x/AMD-V CPU</td></tr>
<tr><td>Examples</td><td>VMware Workstation, Microsoft Virtual Server</td><td>Xen PV, VMware ESX tools</td><td>KVM, Xen HVM, Hyper-V</td></tr></table></div>`,ms:[['Concept / diagram',3],['Para-virtualization explanation',3],['Comparison',2]]},
{id:'nonvirt',m:2,s:['A25:Q13b','D23:Q13a'],q:'Non-virtualized vs virtualized machine environment',a:`
<span class="eqb"> Non-virtualized                 Virtualized
 ┌──────────────────┐           ┌────────┬────────┬────────┐
 │ App │ App │ App  │           │App│App │App│App │App│App │
 ├──────────────────┤           │Guest OS│Guest OS│Guest OS│
 │ Operating system │           ├────────┴────────┴────────┤
 ├──────────────────┤           │ Virtualization layer (VMM)│
 │    Hardware      │           ├──────────────────────────┤
 └──────────────────┘           │ (Host OS)  Hardware       │
                                └──────────────────────────┘</span>
<div class="tw"><table class="t"><tr><th>Non-virtualized</th><th>Virtualized</th></tr>
<tr><td>One OS per physical machine, tightly coupled to hardware</td><td>Many guest OSs on one machine via a hypervisor</td></tr>
<tr><td>Low utilisation (10–20 %)</td><td>High utilisation through consolidation</td></tr>
<tr><td>Applications can conflict; a failure affects the whole machine</td><td>VMs isolated from each other</td></tr>
<tr><td>Inflexible: provisioning takes days; hard to migrate</td><td>VMs created, cloned, snapshotted and live-migrated in minutes</td></tr>
<tr><td>No virtualisation overhead</td><td>Small overhead of the VMM layer</td></tr>
<tr><td>Higher hardware, power and space cost</td><td>Lower cost; hardware independence</td></tr></table></div>`,ms:[['Diagrams',2],['Differences',3]]},
{id:'impl-levels',m:2,s:['A25:Q14b'],q:'Implementation levels of virtualization',a:`
<ol><li><b>Instruction Set Architecture (ISA) level:</b> emulate one ISA on another by interpretation or binary translation (QEMU, Bochs).</li><li><b>Hardware Abstraction level:</b> hypervisor virtualises hardware (CPU, memory, I/O) directly for full guest OSs (Xen, VMware ESXi, KVM).</li><li><b>Operating System level:</b> containers share one kernel (Docker, OpenVZ, LXC).</li><li><b>Library support (user-level API) level:</b> virtualises the API/system-call interface (WINE runs Windows apps on Linux; vCUDA).</li><li><b>Application (process) level:</b> process VMs such as JVM and .NET CLR.</li></ol>`,ms:[['Five levels',4]]},
{id:'virt-techniques',m:2,s:['N24:Q13a'],q:'Techniques used in machine (hardware) virtualization',a:`
<p>Machine virtualization lets several guest OSs run on one physical machine. The VMM must handle <b>sensitive/privileged instructions</b> that the guest OS issues. Techniques:</p>
<h4>1. Full virtualization with binary translation</h4><p>Unmodified guest OS runs in a less privileged ring (Ring 1); user code runs directly on the CPU, while kernel code containing privileged instructions is <b>dynamically translated</b> by the VMM into safe sequences that emulate their effect. Example: VMware Workstation. Any OS works; translation overhead.</p>
<h4>2. Para-virtualization</h4><p>Guest kernel is modified to replace privileged instructions with <b>hypercalls</b> to the hypervisor. Example: Xen. Near-native speed; OS must be modifiable.</p>
<h4>3. Hardware-assisted virtualization</h4><p>CPUs with Intel VT-x / AMD-V add a new root mode for the VMM; the guest runs in non-root Ring 0 and privileged instructions automatically trap to the VMM (VM exit). Example: KVM, Hyper-V, Xen HVM. No translation or OS change needed.</p>
<h4>4. Memory virtualization</h4><p>Two-level mapping: guest virtual → guest physical → machine memory, via <b>shadow page tables</b> maintained by the VMM, or hardware <b>extended/nested page tables</b> (EPT/NPT). Ballooning and page sharing for over-commitment.</p>
<h4>5. I/O virtualization</h4><ul><li><b>Full device emulation</b> (QEMU emulates standard devices).</li><li><b>Para-virtual split drivers</b> (frontend in guest, backend in Dom0/host; virtio).</li><li><b>Direct I/O / passthrough</b> with IOMMU (VT-d) and SR-IOV.</li></ul>
<h4>6. Trap-and-emulate</h4><p>Basic Popek–Goldberg technique: guest runs de-privileged; each sensitive instruction traps to the VMM, which emulates it.</p>`,ms:[['CPU techniques: full, para, HW-assisted',5],['Memory and I/O virtualization',3]]},
{id:'vmware',m:2,s:['N24:Q14a'],q:'VMware and its elements for virtualization',a:`
<p><b>VMware</b> is a leading virtualization company whose products implement full virtualization of x86 hardware, originally using <b>binary translation</b> with direct execution, now also hardware assistance. Products: <b>VMware Workstation/Fusion</b> (Type 2, desktop) and <b>VMware ESXi</b> with <b>vSphere/vCenter</b> (Type 1, data centre).</p>
<h4>Full virtualization in VMware</h4>
<span class="eqb">Ring 3: user applications ── direct execution on CPU
Ring 1: guest OS kernel   ── privileged/sensitive instructions trapped
                              and BINARY TRANSLATED by VMM, cached
Ring 0: VMM (VMware hypervisor)
         Hardware</span>
<h4>Elements</h4>
<ul><li><b>Hypervisor / VMM:</b> ESXi is a bare-metal hypervisor with a small <b>VMkernel</b> that manages CPU scheduling, memory and I/O directly; Workstation runs as a hosted VMM with a driver in the host OS (VMX driver) and a user-level VMX process.</li>
<li><b>Binary translator:</b> translates kernel-mode guest code on the fly, caching translations.</li>
<li><b>Virtual hardware:</b> each VM gets virtual CPU, memory, NIC (vmxnet), SCSI controllers, BIOS; emulates standard devices so unmodified OSs run.</li>
<li><b>Memory virtualization:</b> shadow page tables; transparent page sharing, ballooning (vmmemctl driver), memory compression for over-commitment.</li>
<li><b>VMware Tools:</b> para-virtual drivers installed in guest for better graphics, network and disk performance.</li>
<li><b>Management (vCenter / vSphere):</b> centralised management of hosts and VMs; <b>vMotion</b> live migration, <b>DRS</b> load balancing, <b>HA</b> restart on failure, <b>Storage vMotion</b>, snapshots and templates.</li>
<li><b>VMFS:</b> clustered file system storing VM disks (VMDK files) on shared storage.</li></ul>`,ms:[['What is VMware / products',2],['Full virtualization with binary translation',3],['Elements',4]]}
)})(SUBJ.CST423.QB);
