/* CST423 Module 3 */
(Q=>{Q.push(
{id:'provisioning',m:3,s:['N25:Q16b','D23:Q15b','N25:Q5'],q:'Static vs dynamic resource provisioning (in VMs / cloud)',a:`
<p><b>Resource provisioning</b> is the allocation of computing resources (VMs, CPU, memory, storage, bandwidth) to user applications according to their demand and SLAs.</p>
<h4>Static provisioning</h4><ul><li>Resources are allocated <b>in advance</b>, once, based on predicted peak demand, for the lifetime of the application or contract.</li><li>Simple, predictable cost, no run-time decisions.</li><li>Problems: <b>over-provisioning</b> (resources idle, money wasted) or <b>under-provisioning</b> (SLA violations at peaks).</li><li><i>Example:</i> a company reserves 10 VMs for its payroll system for a year; at month-end it needs 20, other days 3.</li></ul>
<h4>Dynamic provisioning</h4><ul><li>Resources are allocated and released <b>at run time</b> as workload changes, using monitoring and auto-scaling policies (threshold-based, predictive, or reactive).</li><li>VMs can be added (scale out), removed, resized or migrated; pay only for what is used.</li><li>Needs monitoring, load balancers, fast VM provisioning (templates), and can cause brief lag.</li><li><i>Example:</i> an e-commerce site on AWS Auto Scaling runs 4 instances normally and automatically launches 40 during a festive sale when CPU exceeds 70 %, then removes them.</li></ul>
<div class="tw"><table class="t"><tr><th>Aspect</th><th>Static</th><th>Dynamic</th></tr>
<tr><td>Allocation time</td><td>Before execution, fixed</td><td>During execution, on demand</td></tr>
<tr><td>Workload suited</td><td>Predictable, steady</td><td>Variable, bursty</td></tr>
<tr><td>Utilisation</td><td>Low (sized for peak)</td><td>High</td></tr>
<tr><td>Cost</td><td>Higher (pay for idle)</td><td>Pay-per-use</td></tr>
<tr><td>Complexity</td><td>Simple</td><td>Needs monitoring and auto-scaling</td></tr>
<tr><td>SLA risk</td><td>Violation if demand exceeds forecast</td><td>Handles peaks; small provisioning delay</td></tr></table></div>
<p>Provisioning methods in the cloud also include demand-driven (threshold), event-driven (scheduled for known events) and popularity-driven (based on observed traffic trends).</p>`,ms:[['Static with example',3],['Dynamic with example',3],['Comparison',2]],
a3:`<p><b>Dynamic resource provisioning</b> allocates and releases resources (VMs, CPU, memory, storage) automatically at run time according to the current workload, rather than fixing them in advance. Monitoring tools watch metrics such as CPU use or request rate; auto-scaling policies add instances when load rises and remove them when it falls. It avoids over- and under-provisioning, keeps SLAs and lets users pay only for what they use. Example: AWS Auto Scaling launching more EC2 instances during a sale.</p>`,ms3:[['Definition',1],['Mechanism',1],['Benefit / example',1]]},
{id:'hdfs',m:3,s:['A25:Q16a','N25:Q6'],q:'HDFS and running a job in Hadoop',a:`
<h4>HDFS (Hadoop Distributed File System)</h4>
<span class="eqb">            Client ── metadata ops ──► NAMENODE (master)
              │                         namespace, file → block map,
              │ read/write blocks        replication policy
              ▼                          ▲ heartbeats + block reports
   ┌───────────┬───────────┬───────────┐ │
   │ DataNode 1│ DataNode 2│ DataNode 3│─┘   (Secondary NameNode:
   │ B1  B2    │ B1  B3    │ B2  B3    │      checkpoints the metadata)
   └───────────┴───────────┴───────────┘
       each block (128 MB) replicated 3 times on different nodes/racks</span>
<ul><li>Distributed, fault-tolerant file system for very large files on commodity hardware, modelled on Google File System.</li><li><b>Master–slave architecture:</b> one <b>NameNode</b> stores metadata (directory tree, block locations); many <b>DataNodes</b> store the actual blocks and serve reads/writes.</li><li>Files are split into large <b>blocks</b> (128 MB default) replicated (factor 3) across racks.</li><li><b>Key characteristics:</b> fault tolerance by replication and heartbeats; high throughput streaming access; write-once-read-many; scalable to thousands of nodes; data locality (computation moved to data); rack awareness.</li></ul>
<h4>Running a MapReduce job in Hadoop (classic / YARN)</h4>
<span class="eqb">Client ─1─► submit job (JAR, config, input splits copied to HDFS)
   │
   ▼                         2. allocate container
ResourceManager (JobTracker) ─────────────────► NodeManager → MR ApplicationMaster
                                                  │ 3. request containers for tasks
                                                  ▼
             NodeManagers (TaskTrackers) launch MAP tasks near the data blocks
                    │  4. map → sort/partition → spill to local disk
                    ▼  5. shuffle (reducers fetch map outputs)
                   REDUCE tasks → 6. output written to HDFS
             progress/heartbeats ─► AM ─► client;  7. job completion</span>
<ol><li><b>Job submission:</b> client gets a job ID, computes input splits and copies the job JAR and configuration to HDFS, then submits to the ResourceManager (JobTracker in Hadoop 1).</li><li><b>Job initialisation:</b> an ApplicationMaster is started in a container; it creates one map task per input split and the configured number of reduce tasks.</li><li><b>Task assignment:</b> containers on NodeManagers (TaskTrackers) are allocated, preferring nodes holding the data (data locality).</li><li><b>Task execution:</b> tasks run in separate JVMs; map outputs are partitioned, sorted and written to local disk.</li><li><b>Shuffle and reduce:</b> reducers copy their partitions, merge-sort them and run the reduce function; output goes to HDFS.</li><li><b>Progress and status:</b> heartbeats report progress; failed tasks are re-executed on other nodes (speculative execution for slow ones).</li><li><b>Completion:</b> client is notified; temporary data cleaned up.</li></ol>`,ms:[['HDFS architecture and features',4],['Job run steps with diagram',4]],
a3:`<p><b>HDFS</b> is Hadoop's distributed file system for storing very large files across clusters of commodity machines. A master <b>NameNode</b> keeps metadata (namespace, block locations); <b>DataNodes</b> store data blocks.</p><p><b>Key characteristics:</b> large blocks (128 MB) replicated 3× for fault tolerance, high-throughput streaming access, write-once-read-many, horizontal scalability, data locality and rack awareness.</p>`,ms3:[['Definition/architecture',1.5],['Characteristics',1.5]]},
{id:'opennebula',m:3,s:['N25:Q7','D23:Q6'],q:'OpenNebula',a:`
<ul><li><b>OpenNebula</b> is an open-source cloud management platform (toolkit) for building and managing <b>private, public and hybrid IaaS clouds</b> on existing data-centre infrastructure.</li><li>It orchestrates hypervisors (KVM, Xen, VMware), storage and networks: VM lifecycle, image repository, virtual networks, user/group management, accounting, scheduling and live migration.</li><li>Architecture: a front-end (OpenNebula daemon, scheduler, Sunstone web GUI, CLI and APIs including EC2-compatible interface) managing a cluster of hosts through drivers; supports cloud bursting to AWS for hybrid clouds.</li></ul>`,ms:[['Definition',1],['Functions',1],['Architecture / features',1]]},
{id:'mapreduce',m:3,s:['N25:Q15a','N24:Q16a','D23:Q16b'],q:'MapReduce: components, functions, logical data flow, word-count example, advantages',a:`
<p><b>MapReduce</b> is a programming model (from Google, implemented in Hadoop) for processing very large data sets in parallel across a cluster. The programmer writes only two functions, <b>map</b> and <b>reduce</b>; the framework handles distribution, scheduling, data movement and fault tolerance.</p>
<span class="eqb">map:    (k1, v1)          → list(k2, v2)
reduce: (k2, list(v2))    → list(k3, v3)</span>
<h4>Logical data flow (word count)</h4>
<span class="eqb">INPUT FILE                SPLIT          MAP                 SHUFFLE & SORT        REDUCE        OUTPUT
"Deer Bear River        ┌ Deer Bear River ─► (Deer,1)(Bear,1)(River,1) ┐  Bear: [1,1]   ─► (Bear,2)
 Car Car River          ├ Car Car River   ─► (Car,1)(Car,1)(River,1)   ├► Car:  [1,1,1] ─► (Car,3)
 Deer Car Bear"         └ Deer Car Bear   ─► (Deer,1)(Car,1)(Bear,1)   ┘  Deer: [1,1]   ─► (Deer,2)
                                                                          River:[1,1]   ─► (River,2)</span>
<span class="eqb">map(String key /*offset*/, String line):
    for each word w in line:  emit(w, 1)

reduce(String word, Iterator&lt;int&gt; counts):
    sum = 0
    for each c in counts: sum += c
    emit(word, sum)</span>
<h4>Components / stages and functions</h4>
<ul><li><b>Input reader / splitting:</b> input in HDFS is divided into splits (one per block); RecordReader turns each into key–value records.</li><li><b>Map function:</b> runs in parallel on each split, emitting intermediate (key, value) pairs.</li><li><b>Combiner (optional):</b> local mini-reduce on map output (e.g. sums counts per mapper) to cut network traffic.</li><li><b>Partitioner:</b> decides which reducer gets each key (hash(key) mod R).</li><li><b>Shuffle and sort:</b> intermediate data is transferred to reducers and grouped by key; values for a key are collected into a list.</li><li><b>Reduce function:</b> aggregates each key's values to produce final output.</li><li><b>Output writer:</b> writes results to HDFS.</li><li><b>Master (JobTracker/ResourceManager) and workers (TaskTrackers/NodeManagers):</b> master schedules map and reduce tasks, monitors them via heartbeats and re-runs failed tasks.</li></ul>
<h4>Advantages</h4><ul><li>Massive scalability on cheap commodity hardware.</li><li>Automatic parallelisation and fault tolerance (re-execution).</li><li>Data locality: computation moved to where the data is.</li><li>Simple programming model; cost effective for batch analytics (logs, indexing, ETL).</li></ul>
<p><b>Limitation:</b> batch-oriented with disk I/O between stages; not suited to iterative or real-time processing (Spark addresses this).</p>`,ms:[['Model / definition',1],['Data-flow diagram',2.5],['Components and functions',2.5],['Word-count example / advantages',2]]},
{id:'broadband',m:3,s:['A25:Q15a','N25:Q15b'],q:'Broadband networks and internet architecture (role in enabling cloud)',a:`
<p>All clouds must be connected to a network; the <b>internet</b> lets remote consumers reach cloud services. Broadband (high-speed, always-on) connectivity is what makes on-demand remote IT resources practical.</p>
<span class="eqb">  Cloud consumer ─ LAN ─ ISP (Tier 3, local) ─ Tier 2 regional ISP ─┐
                                                                    ├─ Tier 1 backbone ISPs (core)
  Cloud provider data centre ─ ISP ─ Tier 2 ─────────────────────────┘
          the internet: interconnected ISPs forming a network of networks</span>
<h4>Internet Service Providers (ISPs)</h4><ul><li>The internet's backbone is a hierarchy of ISPs: <b>Tier 1</b> large international backbone carriers, <b>Tier 2</b> regional, <b>Tier 3</b> local providers connecting businesses and homes. They interconnect at Internet Exchange Points.</li><li>No central control: a decentralised, fault-tolerant topology.</li></ul>
<h4>Connectionless packet switching (datagram networks)</h4><ul><li>Data is broken into packets with headers; each packet is routed independently through routers to the destination and reassembled (TCP/IP).</li></ul>
<h4>Router-based interconnectivity</h4><ul><li>Routers forward packets hop by hop using routing tables; multiple paths provide redundancy.</li><li><b>Physical network</b> (fibre, copper, wireless), <b>transport layer protocols</b> (TCP, UDP), <b>application layer protocols</b> (HTTP, SMTP, FTP, P2P) form the stack.</li></ul>
<h4>Technical and business considerations</h4><ul><li><b>Connectivity:</b> on-premise vs internet-based access; VPN links.</li><li><b>Network bandwidth and latency:</b> bandwidth constrained by the ISP; latency affects interactive apps; QoS is "best effort".</li><li><b>Cloud carrier and provider selection:</b> SLAs for connectivity; multiple carriers for redundancy.</li></ul>
<h4>Role in enabling cloud</h4><p>Broadband and the internet provide <b>ubiquitous network access</b>, allowing on-demand self-service, global reach, remote storage, SaaS delivery and inter-data-centre replication. Without them, rapid elasticity and pay-per-use remote resources would not be usable.</p>`,ms:[['ISPs and hierarchy',3],['Packet switching and routers',3],['Bandwidth/latency considerations',2],['Role in cloud',2]]},
{id:'web-tech',m:3,s:['N24:Q15a','N25:Q15b'],q:'Web technology: fundamental elements of web architecture (role in cloud)',a:`
<p>Cloud services are mostly delivered and accessed through web technology, so it is a key cloud-enabling technology.</p>
<h4>Basic elements of web technology</h4>
<ul><li><b>Uniform Resource Locator (URL):</b> standard syntax to identify and locate web resources, e.g. http://www.example.com/index.html; logical network locations of cloud resources are referenced by URLs.</li><li><b>Hypertext Transfer Protocol (HTTP):</b> the primary communication protocol for exchanging content and data on the web (request/response: GET, POST, PUT, DELETE); HTTPS adds TLS encryption.</li><li><b>Markup languages (HTML, XML):</b> HTML expresses presentation of web pages; XML (and JSON) represent data and metadata for exchange between applications and services.</li></ul>
<h4>Web applications</h4><p>Three-tier architecture: <b>presentation tier</b> (browser/UI), <b>application tier</b> (web/app server running business logic), <b>data tier</b> (database). Cloud SaaS and PaaS applications follow this model.</p>
<span class="eqb">Browser ──HTTP(S)/URL──► Web server ─► Application server ─► Database
  (HTML, JS)                              (REST/SOAP web services, XML/JSON)</span>
<p><b>Role in cloud:</b> web services and REST APIs let consumers provision and manage cloud resources; browsers give universal access to SaaS without installing software.</p>`,ms:[['URL',1.5],['HTTP',1.5],['Markup languages',1.5],['Web application architecture',1.5]]},
{id:'datacenter',m:3,s:['N24:Q15b','N25:Q16a','D23:Q15a'],q:'Data centre technologies enabling cloud',a:`
<p>A <b>data centre</b> is a specialised facility housing centralised IT resources (servers, storage, networks) with power, cooling and security, built to run cloud services reliably. Its component technologies:</p>
<ul><li><b>Virtualization:</b> physical servers, storage and networks are abstracted into virtual resources; enables consolidation, multi-tenancy and rapid provisioning.</li>
<li><b>Standardization and modularity:</b> commodity hardware in standard racks and pods/containers; easy expansion and replacement; lower cost.</li>
<li><b>Automation:</b> provisioning, configuration, patching and monitoring done by software without human intervention (orchestration).</li>
<li><b>Remote operation and management:</b> most operations are performed remotely; "lights-out" data centres.</li>
<li><b>High availability:</b> redundant power (UPS, generators), cooling, network paths and storage; failover clusters; no single point of failure.</li>
<li><b>Security-aware design, operation and management:</b> physical access control, CCTV, fire suppression, logical security, compliance.</li>
<li><b>Facilities:</b> specialised building, electrical (power distribution, UPS), cooling (hot/cold aisle, HVAC), fire protection.</li>
<li><b>Computing hardware:</b> rack-mounted and blade servers, multi-core CPUs, high-density computing.</li>
<li><b>Storage hardware:</b> disk arrays (RAID), hot-swappable drives, storage virtualization, SAN and NAS, fast data replication.</li>
<li><b>Network hardware:</b> carrier/external interconnection, web-tier load balancers and accelerators, LAN fabric, SAN fabric, NAS gateways; high-bandwidth, low-latency switching.</li></ul>
<h4>Role in cloud</h4><p>These give the cloud its scale, elasticity, reliability and efficiency: virtualised, automated, redundant pools of resources that can be offered as IaaS/PaaS/SaaS to many tenants at low cost.</p>`,ms:[['Definition',1],['Technology components explained',6],['Role in cloud',1]],
a3:null},
{id:'internetworking',m:3,s:['A25:Q5'],q:'On-premise vs cloud-based internetworking',a:`
<div class="tw"><table class="t"><tr><th>On-premise internetworking</th><th>Cloud-based internetworking</th></tr>
<tr><td>Users on the corporate LAN access IT resources directly; remote users come in through VPN</td><td>Users and the organisation reach cloud-hosted resources over the internet via the provider's network</td></tr>
<tr><td>Organisation owns and controls the full network path, firewall and security</td><td>Provider controls the cloud network; consumer controls only its side</td></tr>
<tr><td>Fixed bandwidth, low latency inside LAN</td><td>Depends on ISP bandwidth and internet latency</td></tr>
<tr><td>Limited access from outside</td><td>Ubiquitous access from anywhere</td></tr></table></div>`,ms:[['Three differences',3]]},
{id:'eucalyptus',m:3,s:['A25:Q6','N24:Q16b','D23:Q16a'],q:'Eucalyptus: architecture, key features and functionalities',a:`
<p><b>Eucalyptus</b> (Elastic Utility Computing Architecture for Linking Your Programs To Useful Systems) is an open-source software framework for building <b>private and hybrid IaaS clouds</b> that are API-compatible with Amazon Web Services (EC2 and S3).</p>
<span class="eqb">                 Clients (euca2ools, AWS tools, web console)
                                │  EC2 / S3 compatible APIs
                    ┌───────────▼────────────┐       ┌──────────────┐
                    │   CLOUD CONTROLLER (CLC)│◄─────►│ WALRUS (S3-  │
                    │ entry point, scheduling │       │ like storage)│
                    └───┬────────────────┬───┘       └──────────────┘
          ┌─────────────▼───┐      ┌─────▼───────────┐
          │ CLUSTER CTRL(CC) │      │ CLUSTER CTRL(CC)│   one per cluster
          │ + STORAGE CTRL   │      │ + STORAGE CTRL  │   (SC = EBS-like volumes)
          └──┬─────┬─────┬──┘      └──┬─────┬────────┘
          ┌──▼─┐┌──▼─┐┌──▼─┐       ┌──▼─┐┌──▼─┐
          │ NC ││ NC ││ NC │       │ NC ││ NC │   NODE CONTROLLERS on each host
          │VMs ││VMs ││VMs │       │VMs ││VMs │   (Xen / KVM / VMware)
          └────┘└────┘└────┘       └────┘└────┘</span>
<h4>Components and functionalities</h4>
<ul><li><b>Cloud Controller (CLC):</b> the front end and entry point; accepts user requests through EC2-compatible APIs and web console, handles authentication, accounting, high-level scheduling and resource management.</li><li><b>Walrus:</b> storage service compatible with Amazon S3; stores VM images, snapshots and user data in buckets.</li><li><b>Cluster Controller (CC):</b> manages a cluster of nodes; schedules VM execution on nodes and manages virtual networks.</li><li><b>Storage Controller (SC):</b> provides block storage volumes like Amazon EBS to VMs in its cluster.</li><li><b>Node Controller (NC):</b> runs on each physical host; controls the hypervisor to start, monitor and terminate VM instances.</li></ul>
<h4>Key features</h4>
<ul><li><b>AWS compatibility:</b> same APIs and tools as EC2/S3, so workloads can move between private Eucalyptus cloud and AWS (hybrid).</li><li>Supports multiple hypervisors (Xen, KVM, VMware); runs on commodity Linux clusters.</li><li>Self-service provisioning, elastic IPs, security groups, virtual networking modes.</li><li>Hierarchical, modular, scalable design; multi-tenant with user and group management.</li><li>Open source, low cost private cloud; image management.</li></ul>`,ms:[['Definition',1],['Architecture diagram',2],['Components',2],['Key features',1]],
a3:`<ul><li>Open-source software for building <b>private/hybrid IaaS clouds</b> on Linux clusters.</li><li><b>API-compatible with Amazon EC2 and S3</b>, so the same tools and images work and workloads can burst to AWS.</li><li>Modular components: Cloud Controller, Walrus (S3-like storage), Cluster Controller, Storage Controller (EBS-like), Node Controllers; supports Xen, KVM, VMware.</li></ul>`,ms3:[['Three features',3]]},
{id:'multitenancy',m:3,s:['N24:Q6'],q:'Characteristics of multitenant technology',a:`
<p>Multitenancy lets one instance of an application (and its infrastructure) serve many consumers (tenants) simultaneously, with each tenant's view isolated.</p>
<ul><li><b>Usage isolation</b> and <b>data security:</b> one tenant's use does not affect another; tenants cannot see others' data.</li><li><b>Tenant-level customisation:</b> UI, business rules, data schema and access control per tenant; individual recovery and backup.</li><li><b>Application upgrades</b> applied once for all tenants; <b>scalability</b> to more tenants; <b>metered usage</b> per tenant; data-tier isolation (separate DB, schema or shared tables).</li></ul>`,ms:[['Three or more characteristics',3]]},
{id:'mt-vs-virt',m:3,s:['D23:Q5','A25:Q15b'],q:'Multitenancy vs virtualization',a:`
<div class="tw"><table class="t"><tr><th>Multitenancy</th><th>Virtualization</th></tr>
<tr><td>One physical server <b>hosting one application instance</b> that is used by many tenants</td><td>Multiple <b>virtual copies</b> of a server (VMs), each a separate environment</td></tr>
<tr><td>Sharing happens at the application/software level</td><td>Sharing happens at the hardware/infrastructure level via a hypervisor</td></tr>
<tr><td>Tenants use the same application but see customised, isolated views</td><td>Each VM can run its own OS and applications</td></tr>
<tr><td>Typical in SaaS (Salesforce, Gmail)</td><td>Typical in IaaS (EC2 VMs)</td></tr>
<tr><td>Isolation enforced by the application logic and data partitioning</td><td>Isolation enforced by the hypervisor</td></tr></table></div>
<p>The two are complementary: a multitenant SaaS app may itself run on virtualised servers.</p>`,ms:[['Four differences',4]],a3:null},
{id:'pig',m:3,s:['N24:Q5','A25:Q16b'],q:'Pig Latin: language and data types',a:`
<p><b>Apache Pig</b> is a high-level platform for analysing large data sets on Hadoop. Its language, <b>Pig Latin</b>, is a data-flow scripting language: scripts are compiled into a series of MapReduce (or Tez/Spark) jobs, so users avoid writing low-level Java MapReduce code.</p>
<ul><li>Procedural, step-by-step data flow (unlike declarative SQL); operators: LOAD, FOREACH … GENERATE, FILTER, GROUP, JOIN, ORDER, DISTINCT, UNION, STORE, DUMP.</li><li>Extensible with user-defined functions (UDFs) in Java/Python; handles structured and semi-structured data; automatic optimisation.</li></ul>
<span class="eqb">lines  = LOAD 'input.txt' AS (line:chararray);
words  = FOREACH lines GENERATE FLATTEN(TOKENIZE(line)) AS word;
grp    = GROUP words BY word;
counts = FOREACH grp GENERATE group, COUNT(words);
STORE counts INTO 'out';</span>
<h4>Data types</h4>
<ul><li><b>Scalar (simple):</b> int, long, float, double, chararray (string), bytearray (default), boolean, datetime, biginteger, bigdecimal.</li><li><b>Complex:</b>
<ul><li><b>Atom/field:</b> a single value, e.g. 'Ravi' or 25.</li><li><b>Tuple:</b> ordered set of fields, written (Ravi, 25).</li><li><b>Bag:</b> unordered collection of tuples, possibly duplicates: {(Ravi,25),(Anu,22)}. A relation is an outer bag.</li><li><b>Map:</b> set of key#value pairs with chararray keys: [name#Ravi, age#25].</li></ul></li></ul>`,ms:[['What is Pig Latin / features',3],['Data types',3]],
a3:`<p><b>Pig Latin</b> is the high-level data-flow scripting language of Apache Pig for processing large data sets on Hadoop. Scripts (LOAD, FILTER, GROUP, JOIN, FOREACH…GENERATE, STORE) are compiled into MapReduce jobs automatically, so analysts avoid writing Java MapReduce code. It supports nested data types (tuple, bag, map), UDFs and automatic optimisation.</p>`,ms3:[['Definition',1],['Features',2]]}
)})(SUBJ.CST423.QB);
