/* CST423 quick-revision answers.
   L = long-question answer (7–10 marks), S = 3-mark answer.
   Format (turned into HTML by QRF in src/app.js): plain line = intro, "# " numbered point,
   "- " bullet, "Ex: " example, "= " conclusion, "@ " easy-way-to-remember line.
   The diagrams of the full answer are shown under the intro automatically. */
(R=>{SUBJ.CST423.QB.forEach(c=>{const r=R[c.id];if(!r)return;if(r.L)c.qr=r.L;if(r.S)c.qr3=r.S})})({

/* ================= MODULE 1 ================= */
'trad-cloud':{S:`
Traditional computing means the organisation buys and runs its own servers; cloud computing rents IT resources over the internet on demand.
- <b>Cost:</b> traditional needs big upfront investment; cloud is pay-per-use.
- <b>Scaling:</b> traditional has fixed capacity sized for peak; cloud scales up and down in minutes.
- <b>Maintenance:</b> traditional needs in-house IT staff; in the cloud the provider maintains hardware.
- <b>Limitations of traditional:</b> high cost, idle servers most of the time, poor scalability, weak disaster recovery.
@ Cost, Capacity, Care (maintenance).`},

'cluster-grid':{S:`
Both join many computers to work together, but a cluster is one tightly coupled system while a grid shares resources across organisations.
- <b>Coupling:</b> cluster nodes are tightly coupled on a fast LAN; grid nodes are loosely coupled over WAN / internet.
- <b>Nodes:</b> cluster nodes are same type (homogeneous); grid nodes differ (heterogeneous).
- <b>Control:</b> cluster has one owner and central control; grid has many owners and decentralised control.
Ex: cluster for HPC jobs; grid such as SETI@home or the CERN LHC grid.
@ Cluster = Close, Common, Central; Grid = Global, Gathered, Group-owned.`},

'grid-dist-cloud':{L:`
Distributed, grid and cloud computing all use networked computers, but they differ in ownership, resource model and billing.
# Distributed computing
- Many networked computers cooperate on one task by passing messages.
- Usually owned by one organisation; dedicated nodes.
Ex: distributed databases, banking systems, P2P.
# Grid computing
- Shares heterogeneous resources of many organisations as a virtual supercomputer.
- Jobs are scheduled by grid middleware (Globus); mostly free for research.
Ex: SETI@home, CERN's WLCG.
# Cloud computing
- On-demand IT services (IaaS, PaaS, SaaS) over the internet.
- Provider owns resources; users rent them, pay-per-use.
Ex: AWS, Azure, Google Cloud.
# Key differences
- <b>Scalability:</b> distributed limited, grid via job queues, cloud rapid and automatic.
- <b>Virtualisation:</b> not needed in distributed or grid; core of cloud.
- <b>Billing:</b> none / shared in distributed and grid; metered in cloud.
= Cloud grew out of grid and utility computing by adding virtualisation, services and a pay-per-use business model.
@ Distributed = Divide the task, Grid = Group of organisations, Cloud = Customer rents.`},

'nist':{L:`
NIST defines cloud computing as on-demand network access to a shared pool of configurable resources that can be quickly provisioned and released with little management effort. Its reference architecture has five actors.
# Cloud consumer
- Person or organisation that uses cloud services.
- Works under an SLA and pays for usage.
# Cloud provider
- Makes services available to consumers.
- Handles service orchestration, service management, security and privacy.
# Cloud auditor
- Independent party that checks the services.
- Assesses security controls, privacy impact and performance against SLAs.
# Cloud broker
- Middleman between consumers and providers.
- Intermediation (adds value), aggregation (combines services), arbitrage (picks the best provider).
# Cloud carrier
- Provides the network connection and transport.
Ex: telecom and network operators.
# Also in the model
- 5 characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service.
- 3 service models (IaaS, PaaS, SaaS) and 4 deployment models (public, private, community, hybrid).
= The NIST model gives a common vocabulary of actors, characteristics and models for describing any cloud.
@ 5 actors = CPABC: Consumer, Provider, Auditor, Broker, Carrier.`},

'deploy-models':{L:`
A deployment model tells who owns the cloud and who can use it. There are four main types.
# Public cloud
- Owned by a third-party provider and open to the general public over the internet.
- Pay-per-use, huge scale; less control and privacy.
Ex: AWS, Azure, Google Cloud.
# Private cloud
- Used by only one organisation, on-premise or hosted.
- More control, security and compliance; costly to build and run.
Ex: OpenStack, VMware vSphere.
# Community cloud
- Shared by several organisations with common needs (security, compliance).
- Cost is shared among members.
Ex: government departments, hospitals, universities.
# Hybrid cloud
- Combination of two or more clouds (usually private + public).
- Normal load runs privately; peaks overflow to the public cloud (cloud bursting).
Ex: a bank keeps customer data private and runs its website on a public cloud.
# By service model
- Clouds are also classified as IaaS, PaaS and SaaS.
= The choice depends on cost, control, security and scalability needs.
@ PPCH: Public, Private, Community, Hybrid.`},

'service-models':{L:`
A cloud service is any IT capability (computing, storage, platform, application) offered over the network on demand and paid by use. There are three service models.
# IaaS (Infrastructure as a Service)
- Provider gives virtual machines, storage and networks.
- User installs and manages OS, middleware and apps; highest control.
Ex: Amazon EC2, Google Compute Engine.
# PaaS (Platform as a Service)
- Provider gives a ready platform: OS, runtime, database, tools.
- User manages only code and data; scaling is automatic.
Ex: Google App Engine, Heroku.
# SaaS (Software as a Service)
- Complete application used through a browser on subscription.
- User only uses it; provider manages everything.
Ex: Gmail, Google Docs, Salesforce.
# Control and responsibility
- From IaaS → PaaS → SaaS, user control decreases and provider responsibility increases.
= The three models let users rent infrastructure, a platform or a finished application as needed.
@ I-P-S = Infrastructure, Platform, Software (Hardware → Tools → App).`},

'delivery-models':{S:`
Cloud delivery models (IaaS, PaaS, SaaS) are prepackaged sets of IT resources, and each is delivered to the consumer as a service.
- The consumer does not buy the resources; it subscribes to them on demand.
- They are accessed over the network and billed by usage under an SLA, which are the properties of a service.
- So "delivery model" and "service delivery model" mean the same thing: what service is delivered and who is responsible for what.
@ Subscribe, Access, Pay = Service.`},

'saas':{S:`
SaaS delivers a complete application over the internet that users access through a browser.
- <b>No installation:</b> provider hosts and maintains the app; automatic updates.
- <b>Multi-tenant:</b> one instance serves many customers.
- <b>Subscription:</b> pay per user / per month; accessible anywhere, on any device.
Ex: Gmail, Google Docs, Microsoft 365, Salesforce.
@ No-install, Multi-tenant, Monthly fee.`},

'paas':{L:`
PaaS gives developers a ready platform to build and run applications without managing servers.
# Runtime framework
- Provides language runtimes, web/app servers, databases and middleware.
# Abstraction
- Developers deploy code without handling servers, OS or VMs.
# Automation and elasticity
- Automatic provisioning, load balancing and scaling.
# Developer tools and services
- SDKs, APIs, testing and monitoring; built-in storage, queues and login.
# Multi-tenancy and pay-per-use
- Many users share the platform; possible vendor lock-in.
Ex: Google App Engine, Azure App Service, Heroku.
@ RAAD: Runtime, Abstraction, Auto-scaling, Developer tools.`},

'iaas-control':{L:`
IaaS gives consumers raw virtual infrastructure, so they control (and are responsible for) almost the whole software stack.
# What IaaS provides
- Virtual servers, storage and networks.
- Provider manages only physical hardware, data centre and hypervisor.
# High control for the consumer
- Root access to VMs: chooses and installs OS, middleware, runtime and apps.
- Configures firewalls, IP addresses, load balancers and storage volumes; decides how many VMs to run.
# High responsibility for the consumer
- Patching and securing the OS, backups and monitoring.
- Licences, scaling, high availability and cost of resources left running.
# Split of duties
- Provider: hardware, network, data centre, virtualisation.
- Consumer: OS, apps, data, security settings, scaling.
Ex: in Amazon EC2 the user picks the AMI, instance type, security group and EBS volumes and manages everything inside the instance.
= More control in IaaS always comes with more responsibility.
@ Root access = Full control = Full responsibility.`},

'char-ben':{L:`
Cloud computing delivers IT resources over the internet on demand, with some clear characteristics, benefits and challenges.
# Characteristics
- On-demand self-service and broad network access.
- Resource pooling (multitenancy), rapid elasticity, measured service (pay-per-use).
# Benefits
- Lower cost: no upfront investment; pay only for what is used.
- Scalability, high availability, easy backup and disaster recovery.
- Speed and access from anywhere; focus on business, not IT.
# Challenges
- Security and privacy: data with a third party, shared tenants.
- Less control, vendor lock-in, legal compliance (data location).
- Depends on the network (latency, outages); unexpected bills.
= Cloud is cheap, fast and flexible, but security, control and lock-in must be managed.
@ Characteristics = ORREM (On-demand, Reach anywhere, Resource pooling, Elastic, Measured); Benefits = Cost, Scale, Speed; Challenges = Security, Control, Lock-in.`},

'scaling':{S:`
Scaling changes capacity to match workload; it can be horizontal or vertical.
- <b>Horizontal (scale out/in):</b> add or remove more servers of the same type.
- <b>Vertical (scale up/down):</b> replace a server with a bigger or smaller one (more CPU, RAM).
- Horizontal uses cheap commodity hardware and has almost no limit, needs a load balancer; vertical is limited by the biggest machine and often needs a restart.
@ Horizontal = more machines (side by side), Vertical = bigger machine (taller).`},

'boundaries':{L:`
Boundaries define which IT resources belong to, and are trusted by, an organisation.
# Organizational boundary
- Physical perimeter around IT resources owned and governed by an organisation.
- The consumer's and provider's boundaries are separate; the cloud lies outside the consumer's boundary.
# Trust boundary
- Logical perimeter around all IT resources the organisation trusts.
- When it uses the cloud, its trust boundary extends beyond its organisational boundary to include the cloud resources.
# Risk
- Many consumers on one provider create overlapping trust boundaries, a security risk.
@ Organisational = what you Own; Trust = what you Trust (includes the cloud).`},

'pub-priv':{L:`
Public and private clouds offer very different kinds of flexibility.
# Scalability
- Public: practically unlimited capacity on demand, pay-per-use.
- Private: limited to the organisation's own hardware.
# Customisation
- Public: little control over hardware, hypervisor, network or security policies.
- Private: fully customisable infrastructure, policies and compliance.
# Workloads
- Public: standard services chosen from the provider's catalogue.
- Private: can run legacy and specialised workloads.
# Cost and speed
- Public: fast start, no capital cost.
- Private: needs capital investment and in-house staff.
@ Public = flexible in Size; Private = flexible in Setup.`},

'hybrid':{L:`
A hybrid cloud joins two or more separate clouds (private, public, community) with technology that lets data and applications move between them.
# Why it combines deployment models
- Each part stays a separate cloud but is managed as one system.
- Sensitive work stays private; flexible work goes public.
# Example: a bank
- Customer accounts and core banking run in its private cloud (security, regulations).
- Website, mobile app front-end and analytics run on a public cloud (AWS / Azure).
- Festive-season peaks overflow to the public cloud (cloud bursting).
- Both are linked by VPN and APIs.
= Since one setup uses both private and public models together, hybrid cloud is a combination of deployment models.
@ Private for Secrets, Public for Peaks.`},

/* ================= MODULE 2 ================= */
'trad-vm':{S:`
A traditional computer runs one OS directly on hardware; a virtual machine is a software computer that shares hardware through a hypervisor.
- <b>OS:</b> traditional runs one OS; many VMs with different OSs run on one host.
- <b>Use of hardware:</b> traditional machines are often under-used; VMs consolidate many workloads.
- <b>Flexibility:</b> VMs are isolated and can be moved, cloned and snapshotted; they add a small overhead.
@ One box one OS vs One box many OSs.`},

'vm-types':{S:`
Virtual machines are mainly of two types.
- <b>System VM:</b> provides a complete hardware platform to run a full guest OS. Ex: VMware, Xen, VirtualBox.
- <b>Process VM:</b> runs a single program in a platform-independent environment and exists only while it runs. Ex: Java Virtual Machine, .NET CLR.
- By hypervisor: native / bare-metal VMs (Type 1) and hosted VMs (Type 2).
@ System VM = whole OS; Process VM = one program.`},

'hypervisor':{S:`
A hypervisor (virtual machine monitor) is software that creates and runs virtual machines on one physical machine.
- <b>Type 1 (bare-metal):</b> runs directly on hardware; fast and secure. Ex: Xen, VMware ESXi, Hyper-V.
- <b>Type 2 (hosted):</b> runs as an app on a host OS; easy but slower. Ex: VirtualBox, VMware Workstation.
- It shares CPU, memory and I/O among VMs and keeps them isolated.
@ Type 1 = on the Iron; Type 2 = on Top of an OS.`,
L:`
A hypervisor or virtual machine monitor (VMM) is the software layer between hardware and guest OSs that creates and runs virtual machines.
# Role of a hypervisor
- Allocates CPU, memory, storage and I/O to each VM.
- Keeps VMs isolated; traps and handles privileged instructions.
# Type 1 (native / bare-metal)
- Runs directly on hardware.
- High performance, secure; used in data centres.
Ex: Xen, VMware ESXi, Microsoft Hyper-V, KVM.
# Type 2 (hosted)
- Runs as an application on a host OS.
- Easy to install but slower; used on desktops for testing.
Ex: VirtualBox, VMware Workstation.
# By architecture
- Monolithic: drivers inside the hypervisor (ESXi); fast but large.
- Microkernel: drivers in a management VM (Xen Dom0); smaller and safer.
# Functions
- VM creation, scheduling, memory management, live migration, snapshots.
= Type 1 suits servers and clouds; Type 2 suits personal and test use.
@ Type 1 = Iron (hardware); Type 2 = Top of an OS.`},

'xen':{S:`
Xen is an open-source, bare-metal (Type 1) microkernel hypervisor known for para-virtualization.
- <b>Xen hypervisor:</b> thin layer in Ring 0 doing CPU scheduling and memory; no device drivers.
- <b>Dom0:</b> first privileged VM with real drivers and management tools.
- <b>DomU:</b> guest VMs; para-virtual guests call Xen through hypercalls.
@ Xen = Hypervisor + Dom0 (boss) + DomU (users).`,
L:`
Xen is an open-source, bare-metal (Type 1) microkernel hypervisor from Cambridge University. It is best known for para-virtualization and also supports full (hardware-assisted) virtualization.
# Xen hypervisor
- Thin layer in the most privileged level (Ring 0).
- Does CPU scheduling, memory partitioning and interrupts; has no device drivers.
# Domain 0 (Dom0)
- First privileged VM started at boot.
- Holds real device drivers and tools to create, destroy and migrate VMs.
# Domain U (DomU)
- Unprivileged guest VMs.
- PV guests use front-end drivers that talk to Dom0 back-end drivers (split drivers).
# Hypercalls
- Para-virtual guests replace privileged instructions with hypercalls to Xen.
- Guest kernel runs in Ring 1.
# Communication
- Event channels and grant tables for messages and shared memory.
= Xen is light and fast, but Dom0 is a single point of control: if it is compromised, all guests are at risk.
@ H-D-D-H: Hypervisor, Dom0, DomU, Hypercalls.`},

'net-virt':{S:`
Network virtualization combines physical network resources and presents them as several independent virtual networks.
- <b>External:</b> VLANs, VPNs and overlays (VXLAN) group hosts into virtual networks.
- <b>Internal:</b> virtual switches and virtual NICs connect VMs inside one host.
- SDN separates control from data; NFV runs firewalls and load balancers as software. Benefit: isolation and quick setup per tenant.
@ VLAN, VPN, vSwitch, SDN.`},

'storage-virt':{L:`
Storage virtualization pools storage from many physical devices and presents it as one logical storage, managed from a central console.
# How it works
- A virtualization layer maps logical volumes to physical disks.
- Users and VMs see volumes without knowing where data lives.
# Types
- Block-level: logical volumes on physical blocks (SAN, LVM).
- File-level: files independent of location (NAS, HDFS).
- By location: host-based, network-based, array-based.
# Benefits
- Better use of space and thin provisioning; grow without downtime.
- Central management; easy migration, snapshots, replication and backup.
Ex: Amazon EBS and S3 are built on storage virtualization.
# Drawbacks
- Mapping data is a single point of failure; adds complexity.
= Storage virtualization makes many disks behave like one flexible storage pool.
@ Pool, Map, Manage.`},

'emulation':{S:`
These techniques run code written for one instruction set (ISA) on hardware with another ISA.
- <b>Emulation:</b> software imitates the whole guest hardware so an unmodified OS runs. Ex: QEMU running ARM on x86.
- <b>Interpretation:</b> each guest instruction is decoded and executed one by one; simple but very slow.
- <b>Binary translation:</b> blocks of guest code are translated once to host code and cached; much faster.
@ Emulate = copy the machine, Interpret = one at a time, Translate = once and reuse.`,
L:`
Emulation, interpretation and binary translation are ISA-level virtualization techniques: they run code built for one instruction set on hardware with another.
# Emulation
- Software imitates the complete hardware of the guest (CPU, memory, I/O).
- Unmodified guest OS and programs run as if on the real machine; flexible but slow.
Ex: QEMU emulating ARM on x86, game console emulators.
# Interpretation
- The emulator fetches, decodes and executes each guest instruction one at a time.
- Simple, but one instruction may need tens of host instructions; very slow.
# Binary translation
- Blocks of guest instructions are translated into host instructions once, cached and reused.
- Dynamic (at run time) or static (whole program beforehand); much faster.
Ex: QEMU TCG, VMware binary translation, Apple Rosetta.
= Interpretation is simplest, binary translation is fastest, and emulation uses them to copy a whole machine.
@ E-I-B: Emulate the machine, Interpret line by line, Binary-translate in blocks.`},

'os-virt':{L:`
OS-level virtualization shares one OS kernel and splits it into many isolated user spaces called containers.
# Model
- No guest OS and no hypervisor; containers run on the host kernel.
- Each container has its own processes, file system, network and users.
- Built using namespaces (isolation) and cgroups (resource limits).
Ex: Docker, LXC, OpenVZ, Solaris Zones.
# Advantages
- Very low overhead, near-native speed; starts in seconds.
- Hundreds of containers per host; small images.
- Easy deployment and portability (microservices, DevOps).
# Limitations
- All containers must use the same kernel family.
- Weaker isolation than VMs; a kernel bug affects all.
- Little kernel-level customisation.
= Containers are light and fast, but less isolated and less flexible than VMs.
@ One kernel, many boxes: Light, Fast, Same OS.`},

'virt-pros':{S:`
Virtualization creates software versions of resources (servers, storage, networks) so one physical machine can act as many.
- <b>Advantages:</b> server consolidation and cost saving; isolation; quick provisioning; live migration.
- <b>Disadvantages:</b> performance overhead; host failure stops all its VMs.
- <b>Security:</b> hypervisor attacks, VM escape and VM sprawl.
@ Pros = Save, Separate, Speed; Cons = Slower, Single failure, Security.`,
L:`
Virtualization is the creation of a virtual (software) version of computing resources such as servers, storage, networks or OSs, so one physical resource can act as many. A hypervisor runs several isolated VMs on one machine.
# Advantages
- Server consolidation: many workloads on fewer machines (higher utilisation).
- Cost saving: less hardware, power, cooling and space.
- Isolation: a crash or attack in one VM does not affect others.
- Rapid provisioning from templates; cloning and snapshots.
- Live migration, high availability and easy disaster recovery.
- Many OSs and legacy apps on one machine; foundation of cloud.
# Disadvantages
- Performance overhead, especially for heavy I/O.
- Single point of failure: host failure stops all its VMs.
- Security risks: hypervisor attacks, VM escape, VM sprawl.
- Licensing, setup cost and need for skilled staff; resource contention.
= Virtualization saves cost and adds flexibility, but needs care for performance and security.
@ Pros = 3 S (Save, Separate, Speed); Cons = 3 S (Slower, Single failure, Security).`},

'full-para':{L:`
Full, para and hardware-assisted virtualization differ in how the guest OS's privileged instructions are handled.
# Full virtualization
- Guest OS is unmodified and unaware it is virtual.
- Hypervisor traps privileged instructions and uses binary translation; some overhead.
Ex: VMware Workstation.
# Para-virtualization
- Guest kernel is modified to call the hypervisor through hypercalls.
- Guest in Ring 1, hypervisor in Ring 0; near-native speed.
- Needs OS source changes, so closed OSs cannot use it.
Ex: Xen, KVM virtio drivers.
# Hardware-assisted virtualization
- CPU support (Intel VT-x, AMD-V) traps privileged instructions in hardware.
- Unmodified guest OS, good performance.
Ex: KVM, Hyper-V, Xen HVM.
# Comparison
- Guest OS: unmodified / modified / unmodified.
- Performance: translation overhead / near-native / good.
= Para-virtualization is fastest in software; hardware-assisted gives speed without changing the OS.
@ Full = Fool the OS, Para = Partner OS (modified), Hardware = Help from CPU.`},

'nonvirt':{L:`
In a non-virtualized machine one OS owns the hardware; in a virtualized machine a hypervisor runs many guest OSs on it.
# OS per machine
- Non-virtualized: one OS tightly tied to hardware.
- Virtualized: many guest OSs on one machine.
# Utilisation
- Non-virtualized: low (10–20 %).
- Virtualized: high through consolidation.
# Isolation
- Non-virtualized: apps can conflict; one failure affects all.
- Virtualized: VMs isolated from each other.
# Flexibility
- Non-virtualized: provisioning takes days; hard to move.
- Virtualized: create, clone, snapshot and migrate VMs in minutes.
# Overhead and cost
- Non-virtualized: no overhead but higher hardware cost.
- Virtualized: small hypervisor overhead, lower cost.
@ Virtualized = More OSs, More use, More isolation, More flexibility.`},

'impl-levels':{L:`
Virtualization can be done at five levels, from hardware instructions up to applications.
# ISA level
- Emulates one instruction set on another (interpretation / binary translation).
Ex: QEMU, Bochs.
# Hardware abstraction level
- Hypervisor virtualises CPU, memory and I/O for full guest OSs.
Ex: Xen, VMware ESXi, KVM.
# Operating system level
- Containers share one kernel.
Ex: Docker, LXC, OpenVZ.
# Library (user-level API) level
- Virtualises the API / system-call interface.
Ex: WINE runs Windows apps on Linux.
# Application level
- Process VMs run programs anywhere.
Ex: JVM, .NET CLR.
@ I-H-O-L-A: ISA, Hardware, OS, Library, Application (bottom to top).`},

'virt-techniques':{L:`
Machine virtualization runs several guest OSs on one physical machine; the hypervisor must safely handle their privileged instructions, memory and I/O.
# Full virtualization (binary translation)
- Unmodified guest; kernel code with privileged instructions is translated on the fly.
Ex: VMware Workstation.
# Para-virtualization
- Guest kernel modified to use hypercalls instead of privileged instructions.
Ex: Xen.
# Hardware-assisted virtualization
- Intel VT-x / AMD-V add a root mode; privileged instructions trap to the VMM automatically.
Ex: KVM, Hyper-V.
# Memory virtualization
- Two-level mapping: guest virtual → guest physical → machine memory.
- Shadow page tables or hardware nested page tables (EPT/NPT); ballooning and page sharing.
# I/O virtualization
- Device emulation, para-virtual split drivers (virtio), direct passthrough (VT-d, SR-IOV).
# Trap-and-emulate
- Basic method: guest runs in user mode; privileged instructions trap to the VMM which emulates them.
= CPU, memory and I/O are each virtualised by software tricks or hardware support.
@ CPU (Full, Para, Hardware) + Memory + I/O.`},

'vmware':{L:`
VMware is a leading virtualization company whose products give full virtualization of x86 hardware, first using binary translation and now also hardware assistance.
# Products
- VMware Workstation / Fusion: Type 2 (desktop).
- VMware ESXi with vSphere / vCenter: Type 1 (data centre).
# Hypervisor (VMM)
- ESXi: bare-metal with a small VMkernel managing CPU, memory and I/O.
- Workstation: hosted VMM with a driver in the host OS.
# Binary translator
- Translates kernel-mode guest code on the fly and caches it.
# Virtual hardware
- Each VM gets virtual CPU, memory, NIC, disk controller and BIOS, so unmodified OSs run.
# Memory management
- Shadow page tables, page sharing, ballooning, memory compression.
# VMware Tools
- Para-virtual drivers in the guest for faster graphics, network and disk.
# Management (vCenter / vSphere)
- vMotion live migration, DRS load balancing, HA restart, snapshots, templates.
- VMFS: cluster file system for VM disk files.
= VMware combines a hypervisor, binary translation and strong management tools for enterprise virtualization.
@ H-B-V-M-T-M: Hypervisor, Binary translator, Virtual hardware, Memory, Tools, Management.`},

/* ================= MODULE 3 ================= */
'provisioning':{S:`
Resource provisioning allocates computing resources (VMs, CPU, storage) to applications according to demand.
- <b>Static:</b> resources fixed in advance for peak demand; simple but wastes money or fails at peaks.
- <b>Dynamic:</b> resources added and removed at run time by monitoring and auto-scaling; pay only for use.
Ex: AWS Auto Scaling adds EC2 instances during a sale and removes them later.
@ Static = Set once; Dynamic = Changes with demand.`,
L:`
Resource provisioning is allocating computing resources (VMs, CPU, memory, storage, bandwidth) to applications according to demand and SLAs.
# Static provisioning
- Resources allocated in advance, once, for predicted peak demand.
- Simple and predictable cost.
- Causes over-provisioning (idle, wasted money) or under-provisioning (SLA failure at peaks).
Ex: a company reserves 10 VMs for payroll all year, though it needs 20 at month-end and 3 on other days.
# Dynamic provisioning
- Resources added and released at run time using monitoring and auto-scaling.
- VMs scaled out, removed, resized or migrated; pay only for use.
- Needs monitoring and load balancers; small delay when scaling.
Ex: an e-commerce site on AWS Auto Scaling grows from 4 to 40 instances in a festive sale, then shrinks.
# Comparison
- Time: before execution vs during execution.
- Workload: steady vs variable.
- Utilisation and cost: low use and high cost vs high use and pay-per-use.
= Dynamic provisioning suits the cloud's changing workloads; static suits steady, predictable ones.
@ Static = Set once for the peak; Dynamic = Scale with the demand.`},

'hdfs':{S:`
HDFS (Hadoop Distributed File System) stores very large files across clusters of commodity machines.
- <b>NameNode (master):</b> keeps metadata such as directory tree and block locations.
- <b>DataNodes (slaves):</b> store the actual data blocks.
- Files split into 128 MB blocks, replicated 3 times; write-once-read-many, fault tolerant.
@ Name keeps names, Data keeps data, 128 MB × 3 copies.`,
L:`
HDFS is Hadoop's distributed, fault-tolerant file system for very large files on commodity hardware, modelled on Google File System.
# HDFS architecture
- NameNode (master): stores metadata (directory tree, block locations).
- DataNodes (slaves): store the actual blocks and serve reads and writes.
- Files split into 128 MB blocks, replicated 3 times across racks.
# HDFS features
- Fault tolerance via replication and heartbeats.
- High-throughput streaming; write-once-read-many.
- Scales to thousands of nodes; data locality and rack awareness.
# Running a job: steps
- Submission: client gets a job ID, splits input, copies the JAR to HDFS, submits to the ResourceManager.
- Initialisation: an ApplicationMaster creates one map task per split plus reduce tasks.
- Assignment: containers allocated on NodeManagers near the data.
- Execution: map outputs are sorted and written to local disk.
- Shuffle and reduce: reducers merge their partitions and write output to HDFS.
- Progress and completion: heartbeats report progress; failed tasks rerun; client notified.
= HDFS stores the data and YARN/MapReduce runs the job close to where the data lives.
@ HDFS = Name + Data nodes; Job = Submit, Initialise, Assign, Execute, Shuffle-Reduce, Complete.`},

'opennebula':{S:`
OpenNebula is an open-source cloud management platform for building private, public and hybrid IaaS clouds on existing data centres.
- It manages hypervisors (KVM, Xen, VMware), storage and networks.
- Handles VM lifecycle, image repository, virtual networks, users, accounting and live migration.
- Front-end (daemon, scheduler, Sunstone web GUI, EC2-compatible API) controls a cluster of hosts; supports bursting to AWS.
@ Open-source manager of VMs, images and networks.`},

'mapreduce':{L:`
MapReduce is a programming model (from Google, implemented in Hadoop) for processing huge data sets in parallel on a cluster. The programmer writes only map and reduce functions; the framework does the rest.
# Input splitting
- Input in HDFS divided into splits; RecordReader turns them into key–value records.
# Map
- Runs in parallel on each split and emits intermediate (key, value) pairs.
# Combiner (optional)
- Local mini-reduce on map output to cut network traffic.
# Partition, shuffle and sort
- Partitioner picks a reducer for each key; data is moved and grouped by key.
# Reduce
- Aggregates the values of each key and writes the final output to HDFS.
# Master and workers
- Master schedules and monitors tasks; reruns failed ones.
Ex: word count: map emits (word, 1); reduce sums counts, e.g. (cloud, 3).
# Advantages
- Massive scalability on cheap hardware.
- Automatic parallelism and fault tolerance; data locality.
= MapReduce hides the complexity of distributed processing behind two simple functions.
@ Split → Map → Shuffle → Reduce → Output.`},

'broadband':{L:`
All clouds need a network; broadband internet lets remote users reach cloud services on demand.
# Internet Service Providers (ISPs)
- Hierarchy: Tier 1 (global backbone), Tier 2 (regional), Tier 3 (local).
- Interconnect at exchange points; no central control.
# Connectionless packet switching
- Data split into packets; each packet routed independently and reassembled (TCP/IP).
# Router-based interconnectivity
- Routers forward packets hop by hop; many paths give redundancy.
- Layers: physical network, transport (TCP/UDP), application protocols (HTTP, FTP).
# Technical and business considerations
- Connectivity: on-premise vs internet access; VPN links.
- Bandwidth and latency affect performance; internet QoS is best effort.
- Choose cloud carriers and providers with good SLAs.
# Role in cloud
- Gives ubiquitous, always-on access to remote IT resources.
= Without broadband internet, cloud services could not be delivered to users.
@ ISP, Packet, Router, Bandwidth.`},

'web-tech':{L:`
Cloud services are delivered and used mostly through web technology, so it is a key cloud-enabling technology.
# URL
- Standard address to locate web resources.
Ex: http://www.example.com/index.html.
# HTTP
- Main request/response protocol of the web (GET, POST, PUT, DELETE).
- HTTPS adds encryption.
# Markup languages
- HTML for presenting pages; XML / JSON for exchanging data.
# Web application architecture
- Three tiers: presentation (browser), application (web/app server), data (database).
# Role in cloud
- REST APIs let users manage cloud resources; browsers give access to SaaS.
= URL, HTTP and markup languages together make cloud services reachable from any browser.
@ U-H-M: URL (where), HTTP (how), Markup (what).`},

'datacenter':{L:`
A data centre is a facility that houses centralised IT resources (servers, storage, networks) with power, cooling and security, built to run cloud services.
# Virtualization
- Physical resources abstracted into virtual ones; consolidation and quick provisioning.
# Standardisation and modularity
- Commodity hardware in standard racks; easy expansion.
# Automation
- Provisioning, patching and monitoring done by software.
# Remote operation
- Managed remotely; "lights-out" data centres.
# High availability
- Redundant power, cooling, network and storage; no single point of failure.
# Security-aware design
- Physical access control, CCTV, fire safety, compliance.
# Facilities and hardware
- UPS and generators, cooling (hot/cold aisles).
- Rack and blade servers, RAID storage, high-speed networks.
= These technologies make data centres efficient, reliable and secure enough to power the cloud.
@ VSARHS: Virtualization, Standardisation, Automation, Remote, High availability, Security.`},

'internetworking':{S:`
Internetworking connects users to IT resources; on-premise and cloud-based setups differ.
- <b>Access:</b> on-premise users reach resources on the corporate LAN (VPN for remote); cloud users reach them over the internet.
- <b>Control:</b> on-premise the organisation owns the whole network path; in the cloud the provider controls its network.
- <b>Performance:</b> on-premise LAN has fixed, low-latency bandwidth; cloud depends on ISP bandwidth and internet latency.
@ Own LAN vs Internet; Own control vs Shared control.`},

'eucalyptus':{S:`
Eucalyptus is open-source software for building private and hybrid IaaS clouds that are compatible with AWS (EC2 and S3).
- <b>Cloud Controller:</b> front end; takes user requests, handles accounts and scheduling.
- <b>Walrus:</b> S3-like storage for images and data; <b>Storage Controller:</b> EBS-like volumes.
- <b>Cluster and Node Controllers:</b> manage clusters and start VMs on each host.
@ CLC, Walrus, CC, SC, NC.`,
L:`
Eucalyptus (Elastic Utility Computing Architecture for Linking Your Programs To Useful Systems) is open-source software for building private and hybrid IaaS clouds that are API-compatible with Amazon EC2 and S3.
# Cloud Controller (CLC)
- Front end and entry point; accepts requests via EC2-style APIs and web console.
- Handles authentication, accounting and high-level scheduling.
# Walrus
- Storage service like Amazon S3 for VM images, snapshots and data.
# Cluster Controller (CC)
- Manages a cluster of nodes; schedules VMs and virtual networks.
# Storage Controller (SC)
- Provides block volumes to VMs, like Amazon EBS.
# Node Controller (NC)
- Runs on each host; starts, monitors and stops VMs through the hypervisor.
# Key features
- AWS compatibility, so workloads move between private cloud and AWS.
- Works with Xen, KVM and VMware on commodity Linux clusters.
- Self-service, elastic IPs, security groups; modular and scalable.
= Eucalyptus lets an organisation run its own AWS-like cloud.
@ CLC, Walrus, CC, SC, NC = Cloud, Warehouse, Cluster, Storage, Node.`},

'multitenancy':{S:`
Multitenancy lets one instance of an application serve many customers (tenants), each with an isolated view.
- <b>Isolation:</b> one tenant's use does not affect others; data stays private.
- <b>Customisation:</b> each tenant can change UI, rules and access settings.
- <b>Shared upgrades and metering:</b> one upgrade for all; usage measured per tenant; scales to more tenants.
@ Isolate, Customise, Upgrade once.`},

'mt-vs-virt':{S:`
Multitenancy shares one application among many users; virtualization shares one physical server among many VMs.
- <b>Level:</b> multitenancy shares at the application level; virtualization shares at the hardware level.
- <b>Isolation:</b> done by application logic vs done by the hypervisor.
- <b>Typical use:</b> SaaS (Salesforce, Gmail) vs IaaS (EC2 VMs).
@ Multi-tenant = many users, one app; Virtual = many VMs, one machine.`,
L:`
Multitenancy and virtualization both share resources, but at different levels.
# What is shared
- Multitenancy: one application instance used by many tenants.
- Virtualization: one physical server split into many VMs.
# Level of sharing
- Multitenancy: application / software level.
- Virtualization: hardware level via a hypervisor.
# What users get
- Multitenancy: same app with customised, isolated views.
- Virtualization: each VM runs its own OS and apps.
# Isolation
- Multitenancy: by application logic and data partitioning.
- Virtualization: by the hypervisor.
# Typical use
- Multitenancy: SaaS (Salesforce, Gmail). Virtualization: IaaS (EC2).
= They work together: a multitenant SaaS app often runs on virtualised servers.
@ Many users → one App (multitenancy); Many VMs → one Machine (virtualization).`},

'pig':{S:`
Pig Latin is the data-flow scripting language of Apache Pig for processing large data sets on Hadoop.
- Scripts (LOAD, FILTER, GROUP, JOIN, FOREACH…GENERATE, STORE) are compiled into MapReduce jobs automatically.
- Procedural, step-by-step style; extensible with UDFs; handles semi-structured data.
- <b>Data types:</b> scalar (int, chararray…) and complex (tuple, bag, map).
@ Pig = Load → Transform → Store; data = Atom, Tuple, Bag, Map.`,
L:`
Apache Pig is a high-level platform for analysing large data sets on Hadoop. Its language, Pig Latin, is a data-flow scripting language whose scripts are compiled into MapReduce jobs.
# Features of Pig Latin
- Procedural, step-by-step data flow (unlike declarative SQL).
- Operators: LOAD, FOREACH…GENERATE, FILTER, GROUP, JOIN, ORDER, STORE, DUMP.
- No need to write low-level Java MapReduce code.
- Extensible with user-defined functions; handles structured and semi-structured data; automatic optimisation.
# Scalar data types
- int, long, float, double, chararray (string), bytearray, boolean, datetime.
# Complex data types
- Atom (field): single value, e.g. 'Ravi'.
- Tuple: ordered set of fields, e.g. (Ravi, 25).
- Bag: collection of tuples, e.g. {(Ravi,25),(Anu,22)}; a relation is a bag.
- Map: key#value pairs, e.g. [name#Ravi].
= Pig Latin makes Hadoop data processing short and easy to write.
@ Data types = A-T-B-M: Atom, Tuple, Bag, Map.`},

/* ================= MODULE 4 ================= */
'access-control':{S:`
Access control decides which users can do which actions on which resources.
- <b>MAC (Mandatory):</b> a central authority decides using security labels; most secure. Ex: military systems, SELinux.
- <b>DAC (Discretionary):</b> the owner decides and can share; flexible but weakest. Ex: Unix file permissions.
- <b>RBAC (Role-based):</b> permissions given to roles, users get roles. Ex: AWS IAM roles.
@ MAC = Master decides, DAC = Data owner decides, RBAC = Role decides.`,
L:`
Access control is the mechanism that decides which users or processes may read, write or execute which resources, after authentication. It protects confidentiality and integrity.
# MAC (Mandatory Access Control)
- Central authority decides using labels (Top Secret, Secret…).
- Users cannot change permissions; most secure but rigid.
Ex: military systems, SELinux.
# DAC (Discretionary Access Control)
- The resource owner decides and can grant access to others.
- Very flexible but weakest (accidental sharing, Trojans).
Ex: Unix file permissions, Windows ACLs.
# RBAC (Role-Based Access Control)
- Admin gives permissions to roles; users get roles (manager, clerk).
- Easy to manage at scale; least privilege.
Ex: AWS IAM roles, Azure RBAC.
# Comparison
- Who decides: system / owner / role.
- Security: highest / lowest / good.
= Clouds mostly use RBAC because it is secure and easy to manage.
@ MAC = Master, DAC = Data owner, RBAC = Role.`},

'threat-agents':{S:`
A threat agent is an entity that can carry out an attack on IT resources.
- <b>Anonymous attacker:</b> untrusted outsider using network attacks or stolen credentials.
- <b>Malicious service agent:</b> infected software that intercepts or alters traffic.
- <b>Trusted attacker and malicious insider:</b> a co-tenant or an employee who misuses their access.
@ A-M-T-M: Anonymous, Malicious agent, Trusted attacker, Malicious insider.`,
L:`
A threat agent is an entity that poses a threat because it can carry out an attack. It may be inside or outside the organisation, and it exploits vulnerabilities to create risk.
# Anonymous attacker
- Untrusted outsider with no permissions.
- Uses network attacks, spoofing, stolen credentials, DoS.
# Malicious service agent
- Compromised or malicious software / service.
- Intercepts and forwards traffic, inserts malicious logic.
# Trusted attacker (malicious tenant)
- Shares the same cloud as a legitimate consumer and abuses that trust.
- Attacks co-tenants, side channels, VM escape.
# Malicious insider
- Current or former employees with admin access who steal or damage data.
# Risks they cause
- Traffic eavesdropping, malicious intermediary, denial of service.
- Insufficient authorization, virtualization attacks, overlapping trust boundaries.
= Knowing the threat agents helps choose the right security controls.
@ A-M-T-M: Anonymous, Malicious agent, Trusted attacker, Malicious insider.`},

'iam':{L:`
Identity and Access Management (IAM) is the set of policies, processes and technologies that controls user identities and their access to cloud resources: the right people get the right access at the right time.
# Authentication
- Verifies identity: passwords, certificates, biometrics, MFA; single sign-on.
# Authorization
- Fine-grained access rights through policies, roles (RBAC) and groups; least privilege.
# User management
- Create, change and delete identities and groups; provisioning and de-provisioning.
# Credential management
- Issue and rotate keys, tokens and certificates; temporary credentials.
# Federation
- Trust between identity providers (SAML, OAuth, OpenID Connect).
# Auditing and logging
- Records who accessed what and when (e.g. AWS CloudTrail).
# Benefits
- Better security; central, consistent control; least privilege; compliance and easier user management.
Ex: AWS IAM, Azure Active Directory.
= IAM is the first line of defence for cloud resources.
@ 4 A's: Authenticate, Authorise, Administer (users), Audit.`},

'shared-images':{S:`
Shared VM images (e.g. public Amazon Machine Images) published by other users can be risky.
- <b>Malicious images:</b> may contain malware, backdoors or hidden accounts.
- <b>Leftover secrets:</b> SSH keys, passwords or API keys left by the creator.
- <b>Outdated software:</b> unpatched OS with known vulnerabilities and insecure defaults.
@ Malware, Leftovers, Old software.`,
L:`
In IaaS clouds, users launch VMs from images such as Amazon Machine Images (AMIs). Many images are shared publicly, and using them brings risks.
# Malicious images
- Attackers publish images with malware, backdoors or rootkits.
Ex: an image with a hidden account or keylogger.
# Leftover credentials
- SSH keys, passwords or API keys left in files or history.
- The creator can log in to every instance launched from it.
# Sensitive data leakage
- Browser history, deleted files, database dumps and private keys can be recovered.
# Outdated, unpatched software
- Old OS and services with known flaws; open ports and weak defaults.
# Unknown origin
- No way to check who made the image or whether it was changed.
# Mitigation
- Use trusted, verified publishers; scan images.
- Remove credentials and data before sharing; patch after launch.
= Shared images save time but must be trusted and cleaned before use.
@ M-L-D-O-U: Malware, Leftover keys, Data leak, Old software, Unknown source.`},

'vm-security':{L:`
VM security protects guest VMs, the hypervisor and the shared host in a multi-tenant cloud.
# Threats to handle
- Hypervisor attacks: VM escape, rogue hypervisor, insecure management interfaces.
- VM attacks: bad images, VM sprawl, side channels, insecure migration.
# Harden the hypervisor
- Small, patched hypervisor; restricted management network; secure boot and TPM.
# Strong isolation
- Separate tenants' VMs; resource limits; dedicated hosts for sensitive work.
# Secure images and guest OS
- Trusted, scanned images; patch the guest; firewall, antivirus and host IDS inside VMs.
# Virtual network security
- Security groups, VLANs, micro-segmentation and traffic monitoring.
# Secure migration and encryption
- Encrypt migration traffic and VM disks; authenticate hosts.
# Monitoring
- Logging, introspection and auditing of VM activity.
= VM security needs protection at every layer: hypervisor, VM, network and data.
@ H-I-I-N-M-M: Harden, Isolate, Images, Network, Migration, Monitor.`},

'vmm-threats':{S:`
Threats in virtualised clouds come either from the hypervisor (VMM) or from individual VMs.
- <b>VMM-based:</b> attacks on the hypervisor itself: hyperjacking, VM escape, insecure management interfaces.
- <b>VM-based:</b> rogue or insecure VMs and images, VM sprawl, cross-VM side-channel attacks.
- <b>Impact:</b> VMM threats affect all VMs on the host; VM threats usually affect one VM or its neighbours.
@ VMM threat = all VMs fall; VM threat = one VM falls.`},

'sec-mechanisms':{L:`
Security policies and mechanisms are used together to counter threats, vulnerabilities and risks.
# Terms
- Threat: potential security violation (eavesdropping, DoS).
- Vulnerability: weakness that can be exploited (weak password, unpatched software).
- Risk: likelihood of a threat exploiting a vulnerability × impact.
- Threat agent: the attacker carrying out the threat.
# Security policies
- Set of rules: what is allowed, how controls are applied, who is responsible.
- Cover acceptable use, data classification, passwords, incident response.
# Security controls
- Preventive, detective and corrective countermeasures.
# Security mechanisms
- Encryption against eavesdropping.
- Hashing and digital signatures against tampering.
- PKI and certificates for identity; IAM and SSO against weak authorization.
- Hardened images, firewalls and IDS against attacks.
= Policies decide the rules; mechanisms enforce them to reduce risk.
@ Threat + Vulnerability = Risk; Policy (rules) + Mechanism (tools) = Protection.`},

'os-security':{L:`
The OS (host OS and each guest OS) is the base on which applications run; if it is compromised, every control above it fails.
# Access control
- Mandatory access control (SELinux, AppArmor), least privilege, separate admin accounts.
# Authentication
- Strong passwords, SSH keys, MFA; no remote root login.
# Trusted computing base
- Small verified kernel; secure boot and TPM attestation.
# Isolation
- Process and memory protection; sandboxing; containers / VMs for tenants.
# Hardening and patching
- Minimal install, unused services off; regular automatic updates.
# Host protection
- Host firewall, antivirus, intrusion detection, file integrity checks.
# Logging and encryption
- Audit logins and privilege use; encrypt disks and swap.
# Cloud-specific issues
- Large commodity OSs have many bugs; guest OS security is the consumer's job in IaaS.
= A hardened, patched and monitored OS is the foundation of cloud security.
@ A-A-T-I-H-L: Access control, Authentication, Trusted base, Isolation, Hardening, Logging.`},

'infra-security':{L:`
Cloud infrastructure security is studied at three levels: network, host and application.
# Network level
- Protect data in transit (TLS, VPN, IPsec).
- Control access to public-facing resources (firewalls, security groups).
- Keep resources available against DoS / DDoS; use segmentation and IDS.
# Host level
- Secure the hypervisor and guest OSs.
- Threats: VM escape, insecure images, unpatched OS, stolen SSH keys.
- Controls: hardened images, patching, host firewall, logging.
# Application level
- Protect web apps and APIs from SQL injection, XSS, broken authentication.
- Controls: secure coding, input validation, web application firewall, testing.
# Responsibility
- In IaaS the consumer secures more; in SaaS the provider secures almost everything.
= Security must be applied at all three levels for a safe cloud.
@ N-H-A: Network, Host, Application (outside → inside).`},

'cia':{S:`
These are the four basic goals of information security.
- <b>Confidentiality:</b> only authorised people can read the data (encryption, access control).
- <b>Integrity:</b> data is not changed by unauthorised parties (hashes, signatures).
- <b>Authenticity:</b> data comes from a genuine source; no denying actions (certificates).
- <b>Availability:</b> resources are usable when needed (redundancy, DoS protection).
@ CIAA: Confidential, Intact, Authentic, Available.`},

'cloud-threats':{L:`
Cloud environments face several common security threats.
# Traffic eavesdropping
- Data in transit is secretly intercepted; loss of confidentiality.
# Malicious intermediary
- Messages are intercepted and altered (man-in-the-middle); loss of integrity.
# Denial of service (DoS)
- Resources are overloaded with requests so users cannot use them.
# Insufficient authorization
- Access granted too broadly, or weak passwords exploited.
# Virtualization attack
- A user with VM access exploits the hypervisor to reach other VMs.
# Overlapping trust boundaries
- A malicious tenant attacks shared resources to reach other tenants (side channels).
# Other threats
- Flawed implementations, policy disparity, weak contracts, data location issues.
= Encryption, strong IAM, isolation and monitoring are needed to counter these threats.
@ E-M-D-I-V-O: Eavesdrop, Middleman, DoS, Insufficient auth, Virtualization, Overlap.`},

'harder':{L:`
Securing the cloud is harder than securing an in-house data centre for several reasons.
# Loss of control
- Data and apps run on third-party infrastructure that the consumer cannot inspect.
# Multi-tenancy
- Many unknown tenants share hardware, hypervisors and networks.
# Larger attack surface
- Internet access, many APIs, web consoles and the virtualization layer.
# Unclear responsibility and compliance
- Shared-responsibility confusion, policy mismatch, little transparency, data in many countries.
- Insider threats at the provider.
@ Control lost, Crowded (tenants), Contact points many, Compliance unclear.`},

'mgmt-os':{L:`
In hypervisors like Xen, a privileged management OS (Dom0) controls all guest VMs. Being a full OS with drivers and network services, it is a high-value target.
# Steal data
- A compromised Dom0 can read and change guest memory, stealing keys and data.
# Tamper with VMs
- Can modify images and snapshots, inject malware, or kill VMs (DoS).
# Spy on I/O
- Handles all guest disk and network I/O, so it can eavesdrop or alter traffic.
# Hijack migration
- Can send a migrating VM's memory to an attacker.
# Insider misuse
- A malicious admin with Dom0 tools can do all of this without breaking into guests.
Ex: the VENOM bug in QEMU device code let attackers escape to the host and reach other VMs.
= Keep Dom0 minimal, restrict admin access, encrypt guest memory and audit actions.
@ Dom0 can See, Change, Stop, Spy and Steal.`},

'breaches':{L:`
Internal security breaches come from people inside the provider or consumer organisation.
# Types of internal breaches
- Malicious insider: employee deliberately steals or destroys data.
- Negligent insider: human errors like public storage buckets or weak passwords.
- Privilege misuse: excess rights, or ex-employees still having access.
- Compromised accounts: stolen credentials used as trusted users.
- Data exfiltration through unauthorised devices or apps.
# Steps to reduce breaches
- Strong IAM: least privilege, roles, MFA, quick removal of access.
- Encrypt data at rest and in transit.
- Monitoring, logging and audit of privileged actions.
- Secure configuration checks and patching.
- Training, background checks, separation of duties, DLP tools, incident plan.
= Most insider breaches can be prevented with least privilege, monitoring and training.
@ Breaches = Malicious, Mistake, Misuse, Masquerade; Fix = Limit, Lock, Log, Learn.`},

'risk-mgmt':{L:`
Risk management is the continuous process of identifying, assessing and controlling risks so that remaining risk is acceptable at a reasonable cost. In the cloud it is shared by consumer and provider.
# Risk assessment
- Analyse the cloud to find vulnerabilities and threats.
- Rate each risk by probability and impact; ask the provider for past attack data.
# Risk treatment
- Mitigate: apply security controls.
- Transfer: to the provider (SLA) or insurer.
- Accept small risks; avoid by keeping some work out of the cloud.
# Risk control
- Monitor continuously; review results, logs and new threats.
- Adjust policies and feed back into assessment.
# Ongoing activities
- Vulnerability scans and penetration tests.
- Audits and compliance reviews (ISO 27001, SOC 2), incident monitoring.
= Risk management is a cycle: assess, treat, control, repeat.
@ A-T-C: Assess, Treat, Control (and repeat).`},

/* ================= MODULE 5 ================= */
'gcp-db':{S:`
Google Cloud offers several managed database services.
- <b>Cloud SQL:</b> managed relational MySQL, PostgreSQL and SQL Server.
- <b>Cloud Spanner:</b> globally distributed, strongly consistent relational database.
- <b>Bigtable and Firestore:</b> NoSQL for huge analytical data and for web / mobile apps; BigQuery as data warehouse.
@ SQL, Spanner, Bigtable, Firestore, BigQuery.`},

'aws-storage':{S:`
AWS provides three main types of storage.
- <b>Object storage – Amazon S3:</b> objects in buckets, accessed by URL; virtually unlimited and very durable.
- <b>Block storage – Amazon EBS:</b> persistent virtual disks attached to an EC2 instance.
- <b>File storage – Amazon EFS:</b> shared NFS file system for many instances; Glacier for archives.
@ S3 = Objects, EBS = Blocks (disks), EFS = Files.`,
L:`
AWS offers several storage services for different kinds of data.
# Amazon S3 (object storage)
- Stores objects (data + metadata + key) in buckets; accessed by REST API / URL.
- Virtually unlimited, 11 nines durability; storage classes, versioning, lifecycle rules.
# Amazon EBS (block storage)
- Persistent virtual disks attached to one EC2 instance.
- Snapshots saved to S3; SSD and HDD types.
# Amazon EFS (file storage)
- Managed NFS file system shared by many EC2 instances; grows automatically.
# Other storage
- Instance store (temporary disk), Glacier (archives), Storage Gateway (hybrid).
= Choose S3 for files and backups, EBS for VM disks, EFS for shared files.
@ S3 = Objects, EBS = Blocks, EFS = Files, Glacier = Archive.`},

'aws':{L:`
Amazon Web Services (AWS) is Amazon's cloud computing platform. It offers computing, storage, databases, networking, security and many more services over the internet.
# Compute services
- Provide virtual servers and serverless code to run applications.
- Auto Scaling and load balancing handle changing load.
Ex: Amazon EC2, AWS Lambda.
# Storage services
- Store files, images, videos and backups.
Ex: Amazon S3, EBS, Glacier.
# Database services
- Provide managed databases to store and manage data.
Ex: Amazon RDS, DynamoDB, Redshift.
# Networking services
- Connect cloud resources and manage networks and content delivery.
Ex: Amazon VPC, Route 53, CloudFront.
# Security services
- Protect data and control user access.
Ex: AWS IAM, KMS, CloudTrail.
# Application services
- Help apps communicate and run workflows.
Ex: SQS (queues), SNS (notifications), SES (email).
# Analytics and management
- Process big data and monitor resources.
Ex: Elastic MapReduce, Kinesis, CloudWatch, CloudFormation.
= AWS lets users run applications and store data on a global, pay-as-you-go platform without buying physical servers.
@ Compute, Storage, Database, Networking, Security, Application, Analytics.`},

'azure-storage':{S:`
Azure Storage, used through a storage account, offers four core services.
- <b>Blob:</b> object storage for files, images, videos and backups.
- <b>Table and Queue:</b> NoSQL key–attribute data; message queues between app parts.
- <b>File:</b> managed file shares (SMB/NFS) mounted by VMs and PCs.
@ BTQF: Blob, Table, Queue, File.`,
L:`
Azure Storage is accessed through a storage account using REST APIs and is replicated for durability (LRS, ZRS, GRS). It has four core services.
# Blob storage
- Object storage for unstructured data: images, video, backups, logs.
- Blobs in containers; block, append and page blobs; hot, cool and archive tiers.
# Table storage
- NoSQL key–attribute store for structured, schema-less data.
- Each entity has PartitionKey + RowKey; cheap and fast at scale.
Ex: user profiles, metadata.
# Queue storage
- Reliable message queues between application parts.
- Messages up to 64 KB; decouples web and worker components.
# File storage (Azure Files)
- Managed file shares over SMB/NFS.
- Mounted by cloud VMs and on-premise PCs; replaces file servers.
= Blob, Table, Queue and File cover objects, records, messages and shared files.
@ BTQF: Blob (big files), Table (rows), Queue (messages), File (shares).`},

'azure-blob':{S:`
Azure Blob (Binary Large Object) storage is Azure's object store for large unstructured data.
- <b>Hierarchy:</b> storage account → container → blob; each blob has a URL.
- <b>Blob types:</b> block blobs (large files), append blobs (logs), page blobs (VM disks).
- <b>Features:</b> hot, cool, cold and archive tiers; replication options; secure access.
@ Account → Container → Blob; Block, Append, Page.`},

'azure-arch':{L:`
Microsoft Azure is Microsoft's cloud computing platform. It provides computing, storage, networking, databases and application development services over the internet.
# Compute
- Runs applications using VMs and role instances (web role, worker role).
- Also App Service, Functions and Kubernetes.
# Storage
- Stores files, images, videos and data as Blobs, Tables, Queues and Files.
- Data replicated three times for reliability.
# Fabric Controller
- The "brain" of Azure: owns and monitors all hardware resources.
- Allocates resources to apps, balances load and recovers from failures.
# Networking
- Connects services and users: virtual networks, VPN, load balancer, CDN.
# SQL Database
- Managed relational database for structured data (also Cosmos DB).
# Application services (AppFabric)
- Service Bus messaging, access control and caching for building apps.
# Management portal
- Web interface to manage and monitor all Azure services.
# Working
- Users reach Azure over the internet; apps run on compute, data sits in storage or databases.
- The fabric controller manages resources and networking connects everything.
= Azure gives a flexible, scalable and reliable platform to develop, deploy and manage applications.
@ Compute, Storage, Fabric Controller, Networking, SQL Database, Application Services, Management Portal.`},

'gae-components':{L:`
Google App Engine (GAE) is Google's PaaS for building and hosting scalable web applications without managing servers.
# Runtime environment (sandbox)
- Runs app code in a secure sandbox and scales instances automatically.
- Supports Python, Java, Go, PHP, Node.js, Ruby.
# Front ends and load balancing
- Receive HTTP requests and route them to app instances; serve static files.
# Datastore
- Scalable NoSQL object store (built on Bigtable) with queries and transactions.
- Cloud SQL for relational data.
# Scalable services (APIs)
- Memcache, URL Fetch, Mail, Task Queues, Cron jobs, user login, image handling.
# SDK and management
- Local development server, deployment tools, admin console, logs and versions.
= GAE gives code a ready runtime, storage and services so developers only write the app.
@ R-F-D-S-S: Runtime, Front end, Datastore, Services, SDK.`},

'gae-paas':{L:`
Google App Engine is a fully managed PaaS: developers upload code and Google runs it, handling servers, OS, patching, load balancing and scaling.
# Runtime environments
- Language runtimes in secure sandboxes.
- Standard environment (fast, scales to zero) and Flexible environment (Docker containers).
# Automatic scaling
- Instances added and removed with traffic; pay only for use.
# Managed storage
- Datastore / Firestore (NoSQL), Cloud SQL, Cloud Storage, Memcache.
# Built-in services
- Task queues, cron jobs, mail, URL fetch, login, logging and monitoring.
# Application lifecycle
- Versions, traffic splitting for A/B tests and rollback; local dev server.
# Benefits and limits
- No server admin, quick deployment, high availability, free tier.
- Sandbox limits and vendor lock-in.
Ex: web sites, mobile back-ends and REST APIs.
= GAE lets developers focus only on code while Google manages the platform.
@ Run, Scale, Store, Serve, Version.`},

'ami':{S:`
An Amazon Machine Image (AMI) is a ready template used to launch EC2 instances.
- <b>Contents:</b> root disk image (OS + software), launch permissions and block device mapping.
- <b>Use:</b> one AMI can launch many identical instances; AMIs are region-specific.
- <b>Sources:</b> AWS-provided, Marketplace, community (shared) or your own custom AMI.
@ AMI = OS photocopy for EC2.`},

'storage-forms':{L:`
Cloud storage is offered both as infrastructure (IaaS) for developers and as ready applications (SaaS) for end users.
# Storage as IaaS
- Raw storage for the consumer's own apps and VMs; the consumer manages the data layout.
- Block: Amazon EBS, Azure Disks. Object: Amazon S3, Azure Blob. File: Amazon EFS, Azure Files.
- Pay per GB and per request; high durability; API control.
# Storage as SaaS
- Ready apps to store, sync and share files; provider manages everything.
Ex: Google Drive, Dropbox, OneDrive, Box.
- Features: sync across devices, sharing, version history, online editing, free quota.
# Comparison
- Users: developers vs end users.
- Access: APIs and attached volumes vs web / mobile apps.
= IaaS storage is a building block; SaaS storage is a finished product.
@ IaaS = Raw storage for developers; SaaS = Ready app for users.`},

'simpledb-rds':{L:`
Amazon SimpleDB and Amazon RDS are both AWS database services, but one is NoSQL and the other relational.
# Type
- SimpleDB: NoSQL key–attribute store.
- RDS: managed relational database.
# Data model
- SimpleDB: domains → items → attribute–value pairs; no schema.
- RDS: tables with fixed schema, rows and columns.
# Engines and queries
- SimpleDB: proprietary; simple SELECT, no joins.
- RDS: MySQL, PostgreSQL, Oracle, SQL Server, Aurora; full SQL with joins.
# Consistency
- SimpleDB: eventual. RDS: strong (ACID).
# Administration and size
- SimpleDB: no servers, automatic; 10 GB per domain.
- RDS: choose instance size; up to tens of TB; AWS handles backups and patches.
# Use
- SimpleDB: small metadata and logs. RDS: transactional apps like ERP and e-commerce.
@ SimpleDB = Simple, Schema-less, Small; RDS = Relational, Rich SQL, Robust.`},

'azure-compute':{L:`
Microsoft Azure offers several compute services for running applications.
# Azure Virtual Machines
- IaaS Windows / Linux VMs of many sizes; VM Scale Sets for auto-scaling.
# Cloud Services (roles)
- PaaS with Web roles (front-end) and Worker roles (background jobs).
# Azure App Service
- PaaS hosting for web apps, APIs and mobile back-ends with auto-scaling.
# Azure Functions
- Serverless, event-driven code billed per run.
# Containers and Batch
- Azure Kubernetes Service, Container Instances; Batch for large parallel jobs.
@ V-C-A-F-C: VMs, Cloud services, App Service, Functions, Containers.`},

'ec2':{S:`
Amazon EC2 (Elastic Compute Cloud) is AWS's IaaS service that provides resizable virtual servers called instances.
- Launched from <b>AMIs</b> in many <b>instance types</b> (CPU, memory, GPU options).
- <b>Elastic:</b> scale with Auto Scaling and load balancers; pay only for time used.
- Pricing: On-Demand, Reserved and Spot; storage on EBS; secured with security groups and key pairs.
@ AMI + Instance type + Pay-as-you-go = EC2.`,
L:`
Amazon EC2 is AWS's core IaaS service that provides resizable virtual servers, called instances. Users launch them in minutes, get full control and pay only for the time used.
# Amazon Machine Images (AMIs)
- Templates with OS and software used to launch instances.
# Instance types
- Many CPU, memory, storage and GPU combinations.
Ex: general purpose (t, m), compute (c), memory (r), GPU (p, g).
# Elasticity
- Change instance size; scale out with Auto Scaling and Elastic Load Balancing.
# Pricing models
- On-Demand (per second), Reserved / Savings Plans (cheaper for 1–3 years), Spot (up to 90 % off, can stop).
# Storage
- Persistent EBS volumes and snapshots; temporary instance store.
# Networking and security
- Runs in a VPC; security groups, key pairs, Elastic IPs, IAM roles.
# Regions and Availability Zones
- Instances spread across zones for fault tolerance and low latency.
= EC2 gives flexible, scalable computing without buying servers.
@ A-I-E-P-S-N-R: AMI, Instance types, Elastic, Pricing, Storage, Network, Regions.`},

'gcs':{S:`
Google Cloud Storage is Google's scalable object storage: data is kept as objects in buckets.
- Accessed by REST API, gsutil / gcloud or console; virtually unlimited, 11 nines durability.
- <b>Storage classes:</b> Standard, Nearline, Coldline and Archive.
- <b>Features:</b> versioning, lifecycle rules, IAM access control, encryption by default.
@ Buckets + Objects; classes = Standard, Nearline, Coldline, Archive (hot → cold).`},

's3-ebs':{S:`
Amazon S3 and EBS are both AWS storage, but S3 stores objects and EBS provides disks.
- <b>Type:</b> S3 is object storage in buckets accessed by URL; EBS is block storage attached to an EC2 instance.
- <b>Access:</b> S3 from anywhere by many clients; EBS by one instance in the same zone.
- <b>Use:</b> S3 for backups, media and websites; EBS for OS boot disks and databases.
@ S3 = Shared objects anywhere; EBS = Elastic Block disk for one EC2.`},

's3-arch':{L:`
Amazon S3 (Simple Storage Service) is AWS's object storage service built around buckets, objects and keys.
# Buckets
- Top-level containers with globally unique names in a chosen region.
- Have policies, versioning, logging, lifecycle rules and static website hosting.
# Objects
- Data (0 B to 5 TB) plus metadata; multipart upload for big files.
# Keys
- Unique name of an object in a bucket; bucket + key + version identifies it.
- Flat namespace; prefixes act like folders.
# Regions and durability
- Data stored across multiple zones: 11 nines durability, 99.99 % availability.
# Access and security
- REST APIs and SDKs; IAM and bucket policies, ACLs, pre-signed URLs.
- Encryption at rest and in transit; strong read-after-write consistency.
= S3's simple bucket–object–key design gives virtually unlimited, very durable storage.
@ B-O-K: Bucket, Object, Key (+ Region, Access).`},

'gdocs':{L:`
Google Docs and Google Drive are Google's SaaS tools for creating, storing and sharing documents in the cloud.
# Google Docs
- Free web-based office suite: Docs, Sheets, Slides, Forms; no installation.
- Real-time collaboration: many users edit together, with comments and suggestions.
- Auto-save and version history; import / export Office and PDF; offline mode.
# Google Drive
- Cloud storage and sync for any file type.
- 15 GB free (shared with Gmail and Photos); more with Google One.
- Sync across devices; share files and folders with permissions; shared drives for teams.
- Smart search, previews, app integration, version history and encryption.
= Together they replace desktop office software and local file storage.
@ Docs = Create and Collaborate; Drive = Store, Sync and Share.`},

});
