const topics = [
  {
    id: "foundations",
    group: "Foundations",
    title: "Computer networking",
    intro: "Computer networking refers to connected computing devices that communicate with one another. The lecture includes computers, servers, smartphones, tablets, and an expanding range of IoT devices.",
    body: `
      <div class="definition"><strong>Computer networking:</strong> The connection of computing devices so they can communicate with one another.</div>
      <h3>Why networks matter</h3>
      <p>Networks have changed the way people learn, communicate, work, and play. The lecture identifies education, faster daily tasks, online shopping, research and development, business promotion, communication, digital transactions, money management, and travel as important roles.</p>
      <ul><li>Communication includes instant messaging, texting, social media, wikis, and podcasting.</li><li>Peer-to-peer file sharing is another example of how networks change everyday work and communication.</li></ul>
      <figure class="diagram-card"><svg viewBox="0 0 700 190" role="img" aria-label="End devices connected through an intermediary device"><defs><marker id="arrow-a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0f6867"></path></marker></defs><rect class="diagram-node" x="30" y="65" width="130" height="56"></rect><text class="diagram-label" x="95" y="99" text-anchor="middle">End device</text><rect class="diagram-node" x="285" y="65" width="130" height="56"></rect><text class="diagram-label" x="350" y="99" text-anchor="middle">Switch / router</text><rect class="diagram-node" x="540" y="65" width="130" height="56"></rect><text class="diagram-label" x="605" y="99" text-anchor="middle">End device</text><path class="diagram-line" marker-end="url(#arrow-a)" d="M160 93 H280"></path><path class="diagram-line" marker-end="url(#arrow-a)" d="M420 93 H535"></path></svg><figcaption>End devices use intermediary devices to move data across a network.</figcaption></figure>
      <h3>Network structure</h3>
      <p>A network has hardware and software components. <strong>End devices</strong> form the interface with the human and communications network. <strong>Intermediary devices</strong> provide connectivity and help data flow across the network. <strong>Network media</strong> is the channel over which a message travels.</p>
    `,
    takeaway: "A network is more than connected computers: end devices, intermediary devices, media, hardware, software, and communication rules work together."
  },
  {
    id: "media",
    group: "Foundations",
    title: "Network media",
    intro: "The lecture groups transmission media into copper, fiber optic, and wireless media. Each has different speed, distance, cost, interference, and installation characteristics.",
    body: `
      <h3>Copper media</h3>
      <p>Copper carries data as electrical signals. The lecture presents coaxial cable, shielded twisted-pair (STP), and unshielded twisted-pair (UTP).</p>
      <div class="definition"><strong>Twisted-pair cable:</strong> Pairs of insulated copper wire twisted around one another.</div>
      <ul><li><strong>Coaxial cable:</strong> The lecture gives typical speed and throughput of 10–100 Mbps, low cost, and a maximum cable length of 500 m.</li><li><strong>STP:</strong> Pairs of insulated wire are enclosed within foil shielding and an insulating sheath to reduce outside interference. The lecture gives 10–100 Mbps and a 100 m maximum length.</li><li><strong>UTP:</strong> Pairs of insulated wire sit within an insulating sheath. It is widely used for LANs and telephone connections. The lecture gives 10–100–1000 Mbps depending on cable quality/category, low cost, and a 100 m maximum length.</li></ul>
      <h3>Fiber optic</h3>
      <div class="definition"><strong>Fiber-optic cable:</strong> Uses light pulses conducted through special glass conductors to carry data.</div>
      <p>Fiber has much greater bandwidth than metal cable, is less susceptible to interference, is thinner and lighter, and can transmit data digitally. Its disadvantages are higher installation cost, fragility, and difficult splicing. The lecture identifies enterprise networks, fiber-to-the-home and access networks, long-haul networks, and submarine networks as areas of use.</p>
      <h3>Wireless media</h3>
      <p>Wireless communication uses radio frequencies (RF) or infrared (IR) waves to transmit data on a LAN. It does not require physical cabling and is useful for remote access and laptop users.</p>
      <ul><li><strong>Advantages:</strong> portability, expansion without disrupting current users, saving money, and ease of use.</li><li><strong>Concerns:</strong> coverage area, interference, and security. The lecture also notes limited speed compared with other topologies and security issues associated with wireless transmissions.</li></ul>
      <table class="compare"><thead><tr><th>Property</th><th>Copper media</th><th>Fiber optic</th></tr></thead><tbody><tr><td>Bandwidth in lecture comparison</td><td>10 Mbps–10 Gbps</td><td>10 Mbps–100 Gbps</td></tr><tr><td>Distance</td><td>Relatively short: 1–100 m</td><td>Relatively high: 1–100,000 m</td></tr><tr><td>EMI/RFI and electrical hazards</td><td>Low immunity</td><td>Completely immune in the lecture table</td></tr><tr><td>Cost and installation</td><td>Lowest</td><td>Highest</td></tr></tbody></table>
    `,
    takeaway: "Copper is inexpensive and common; fiber supports greater distance and interference immunity; wireless provides portability but brings coverage, interference, and security concerns."
  },
  {
    id: "size-topology",
    group: "Foundations",
    title: "Network size and topology",
    intro: "Networks range from two devices to millions of devices. The lecture classifies them by size and by the way devices are physically or logically arranged.",
    body: `
      <h3>Network size</h3>
      <ul><li><strong>PAN:</strong> Personal Area Network.</li><li><strong>LAN:</strong> Local Area Network.</li><li><strong>CAN:</strong> Campus Area Network.</li><li><strong>MAN:</strong> Metropolitan Area Network.</li><li><strong>WAN:</strong> Wide Area Network.</li><li><strong>SAN:</strong> Storage Area Network.</li></ul>
      <p>The lecture also classifies networks as the <strong>Internet</strong>, <strong>intranet</strong>, or <strong>extranet</strong>. Home users, teleworkers, and small offices typically connect to an ISP to access the Internet. The lecture lists cable broadband, DSL, wireless WANs, and mobile services as connection choices.</p>
      <h3>Network topologies</h3>
      <p>Topology describes how network devices and connections are arranged. The lecture presents bus, ring, star, mesh, tree, and hybrid topologies.</p>
      <figure class="diagram-card"><svg viewBox="0 0 700 280" role="img" aria-label="Examples of star, ring, and bus topologies"><line class="diagram-line" x1="25" y1="225" x2="220" y2="225"></line><text class="diagram-label" x="120" y="260" text-anchor="middle">Bus</text><circle class="diagram-node" cx="55" cy="225" r="13"></circle><circle class="diagram-node" cx="120" cy="225" r="13"></circle><circle class="diagram-node" cx="185" cy="225" r="13"></circle><circle class="diagram-node" cx="470" cy="100" r="26"></circle><text class="diagram-label" x="470" y="105" text-anchor="middle">hub</text><g class="diagram-line"><line x1="470" y1="100" x2="470" y2="35"></line><line x1="470" y1="100" x2="410" y2="175"></line><line x1="470" y1="100" x2="530" y2="175"></line></g><circle class="diagram-node" cx="470" cy="27" r="12"></circle><circle class="diagram-node" cx="402" cy="185" r="12"></circle><circle class="diagram-node" cx="538" cy="185" r="12"></circle><text class="diagram-label" x="470" y="260" text-anchor="middle">Star</text><circle class="diagram-node" cx="180" cy="90" r="12"></circle><circle class="diagram-node" cx="250" cy="45" r="12"></circle><circle class="diagram-node" cx="325" cy="70" r="12"></circle><circle class="diagram-node" cx="325" cy="155" r="12"></circle><circle class="diagram-node" cx="250" cy="180" r="12"></circle><path class="diagram-line" d="M180 90 L250 45 L325 70 L325 155 L250 180 Z M250 180 L180 90"></path><text class="diagram-label" x="250" y="260" text-anchor="middle">Ring</text></svg><figcaption>Topology affects how devices are connected and how a failure can affect communication.</figcaption></figure>
      <ul><li><strong>Bus:</strong> Devices share a common connection.</li><li><strong>Ring:</strong> Devices form a ring connection.</li><li><strong>Star:</strong> Devices connect to a central device.</li><li><strong>Mesh:</strong> Devices have many interconnections.</li><li><strong>Tree:</strong> Devices use a hierarchical arrangement.</li><li><strong>Hybrid:</strong> Combines two or more topology types.</li></ul>
    `,
    takeaway: "Network size describes the area or purpose of a network; topology describes the arrangement of its connections."
  },
  {
    id: "models-architecture",
    group: "Models",
    title: "Network models and architecture",
    intro: "The lecture distinguishes peer-to-peer and client-server networks, then introduces the characteristics used when designing a reliable network.",
    body: `
      <h3>Peer-to-peer and client-server</h3>
      <div class="definition"><strong>Peer-to-peer (P2P):</strong> A network where devices can act as both clients and servers. The lecture connects this model with P2P file sharing.</div>
      <div class="definition"><strong>Client-server:</strong> A model where clients request services from servers.</div>
      <table class="compare"><thead><tr><th>Peer-to-peer</th><th>Client-server</th></tr></thead><tbody><tr><td>Devices can share directly with one another.</td><td>Dedicated servers provide services to clients.</td></tr><tr><td>Associated in the lecture with P2P applications and file sharing.</td><td>Uses a server that responds to client requests.</td></tr></tbody></table>
      <h3>Architecture characteristics</h3>
      <ul><li><strong>Fault tolerance:</strong> The network can continue to operate when a device or link fails.</li><li><strong>Scalability:</strong> The network can expand to support more users and devices.</li><li><strong>Quality of service:</strong> The network can manage different traffic requirements.</li><li><strong>Security:</strong> The network protects data and controls access.</li></ul>
      <p>The lecture also describes <strong>converged networks</strong>, in which data, voice, video, and other services use a common network infrastructure.</p>
      <figure class="diagram-card"><svg viewBox="0 0 700 210" role="img" aria-label="Client server relationship"><defs><marker id="arrow-b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#d98041"></path></marker></defs><rect class="diagram-node" x="35" y="75" width="135" height="55"></rect><text class="diagram-label" x="102" y="108" text-anchor="middle">Client</text><rect class="diagram-node" x="285" y="62" width="135" height="80"></rect><text class="diagram-label" x="352" y="108" text-anchor="middle">Server</text><rect class="diagram-node" x="535" y="75" width="135" height="55"></rect><text class="diagram-label" x="602" y="108" text-anchor="middle">Client</text><path d="M175 88 H280" stroke="#d98041" stroke-width="2" marker-end="url(#arrow-b)"></path><path d="M425 115 H530" stroke="#d98041" stroke-width="2" marker-end="url(#arrow-b)"></path><text class="diagram-label" x="225" y="74" text-anchor="middle">request</text><text class="diagram-label" x="480" y="153" text-anchor="middle">response</text></svg><figcaption>In the client-server model, clients request services from a server.</figcaption></figure>
    `,
    takeaway: "P2P distributes roles between peers; client-server centralizes service delivery. A strong network is designed for fault tolerance, scalability, QoS, and security."
  },
  {
    id: "layers",
    group: "Models",
    title: "Network layers: OSI and TCP/IP",
    intro: "Layering makes network communication easier to design, understand, and troubleshoot. The lecture presents the OSI reference model and the TCP/IP model.",
    body: `
      <p>Layers divide communication into related responsibilities. This assists protocol design, fosters improvement, means changes in one layer do not affect other layers, and provides a common language.</p>
      <h3>OSI reference model</h3>
      <table class="compare"><thead><tr><th>Layer</th><th>Name</th><th>Role in the lecture</th></tr></thead><tbody><tr><td>7</td><td><strong>Application</strong></td><td>Network services used by applications.</td></tr><tr><td>6</td><td><strong>Presentation</strong></td><td>Representation of data.</td></tr><tr><td>5</td><td><strong>Session</strong></td><td>Manages communication sessions.</td></tr><tr><td>4</td><td><strong>Transport</strong></td><td>End-to-end communication and data delivery.</td></tr><tr><td>3</td><td><strong>Network</strong></td><td>Logical addressing and routing.</td></tr><tr><td>2</td><td><strong>Data Link</strong></td><td>Local delivery and frames.</td></tr><tr><td>1</td><td><strong>Physical</strong></td><td>Signals and transmission media.</td></tr></tbody></table>
      <h3>TCP/IP model and encapsulation</h3>
      <p>The lecture uses the TCP/IP model with Application, Transport, Internet, and Network Access layers. During communication, each layer adds its own information as data moves downward. At the destination, the reverse process is de-encapsulation.</p>
      <figure class="diagram-card"><svg viewBox="0 0 700 280" role="img" aria-label="Encapsulation from application data to bits"><defs><marker id="arrow-c" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0f6867"></path></marker></defs><g transform="translate(45,28)"><rect class="diagram-node" width="170" height="38"></rect><text class="diagram-label" x="85" y="25" text-anchor="middle">Application data</text><rect class="diagram-node" y="52" width="170" height="38"></rect><text class="diagram-label" x="85" y="77" text-anchor="middle">Segment / datagram</text><rect class="diagram-node" y="104" width="170" height="38"></rect><text class="diagram-label" x="85" y="129" text-anchor="middle">Packet</text><rect class="diagram-node" y="156" width="170" height="38"></rect><text class="diagram-label" x="85" y="181" text-anchor="middle">Frame</text><rect class="diagram-node" y="208" width="170" height="38"></rect><text class="diagram-label" x="85" y="233" text-anchor="middle">Bits</text><path class="diagram-line" marker-end="url(#arrow-c)" d="M85 40 V50"></path><path class="diagram-line" marker-end="url(#arrow-c)" d="M85 92 V102"></path><path class="diagram-line" marker-end="url(#arrow-c)" d="M85 144 V154"></path><path class="diagram-line" marker-end="url(#arrow-c)" d="M85 196 V206"></path></g><text class="diagram-label" x="300" y="55">Application layer</text><text class="diagram-label" x="300" y="107">Transport layer</text><text class="diagram-label" x="300" y="159">Internet layer</text><text class="diagram-label" x="300" y="211">Network access / link</text><text class="diagram-label" x="300" y="258">Physical transmission</text></svg><figcaption>Encapsulation adds control information as data moves down the layers.</figcaption></figure>
    `,
    takeaway: "OSI is a seven-layer reference model; TCP/IP is the practical protocol model. Encapsulation moves data down the stack and de-encapsulation moves it up."
  },
  {
    id: "protocols",
    group: "Protocols",
    title: "Network protocols and transport",
    intro: "Protocols define communication rules. The lecture introduces application protocols and explains the transport layer through TCP and UDP.",
    body: `
      <h3>Protocols in the lecture</h3>
      <p>The lecture lists <strong>TCP, UDP, HTTP, FTP, SMTP, POP</strong>, and other protocols. It also covers DHCP, DNS, and ARP in later sections.</p>
      <h3>Transport layer</h3>
      <p>The transport layer establishes a temporary communication session between applications and delivers data between them. Its responsibilities include tracking individual communication between applications, segmenting data for manageability, and reassembling segmented data into the original data.</p>
      <div class="definition"><strong>TCP:</strong> Transmission Control Protocol. The lecture presents it as one of the two transport protocols used by TCP/IP.</div>
      <div class="definition"><strong>UDP:</strong> User Datagram Protocol. The lecture presents it as the other transport protocol used by TCP/IP.</div>
      <table class="compare"><thead><tr><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>Used by applications that require TCP communication.</td><td>Used by applications that use UDP communication.</td></tr><tr><td>Transport protocol in the TCP/IP model.</td><td>Transport protocol in the TCP/IP model.</td></tr></tbody></table>
      <h3>Application protocols</h3>
      <ul><li><strong>HTTP:</strong> Included in the lecture as a network protocol used by applications.</li><li><strong>FTP:</strong> Included in the lecture as a protocol for file transfer.</li><li><strong>SMTP and POP:</strong> Included in the lecture in connection with email communication.</li></ul>
    `,
    takeaway: "The transport layer supports application-to-application communication. TCP and UDP are the two transport protocols identified by the lecture."
  },
  {
    id: "dhcp-dns-arp",
    group: "Protocols",
    title: "DHCP, DNS, and ARP",
    intro: "These protocols support configuration, naming, and local delivery. Together they help a host become usable and communicate on an IP network.",
    body: `
      <h3>DHCP</h3>
      <p><strong>Dynamic Host Configuration Protocol (DHCP)</strong> provides automatic network configuration. The lecture presents DHCP operation as a sequence of client and server messages.</p>
      <ol class="step-list"><li>The client sends a DHCP Discover.</li><li>A DHCP server sends an Offer.</li><li>The client sends a Request.</li><li>The server sends an Acknowledgment.</li></ol>
      <h3>DNS</h3>
      <p><strong>Domain Name System (DNS)</strong> is presented through a hierarchy. It allows names used by people to be associated with network addresses and uses DNS servers in a hierarchical structure.</p>
      <figure class="diagram-card"><svg viewBox="0 0 700 240" role="img" aria-label="DNS hierarchy"><path class="diagram-line" d="M350 50 V90 M350 110 V150 M350 170 V205"></path><rect class="diagram-node" x="285" y="15" width="130" height="35"></rect><text class="diagram-label" x="350" y="38" text-anchor="middle">Root</text><rect class="diagram-node" x="285" y="90" width="130" height="35"></rect><text class="diagram-label" x="350" y="113" text-anchor="middle">Top-level domain</text><rect class="diagram-node" x="285" y="165" width="130" height="35"></rect><text class="diagram-label" x="350" y="188" text-anchor="middle">Domain server</text><text class="diagram-label" x="350" y="228" text-anchor="middle">Host name</text></svg><figcaption>The lecture shows DNS as a hierarchy of name servers.</figcaption></figure>
      <h3>ARP</h3>
      <div class="definition"><strong>ARP:</strong> Address Resolution Protocol. It determines a MAC address for a known IPv4 address on the local network.</div>
      <p>In the ARP process, a host checks its ARP table. If it does not know the MAC address, it sends an ARP request. The device with the matching IP address returns an ARP reply. The host can then use the MAC address for local delivery.</p>
      <p>For remote communication, the host determines the MAC address for the router interface serving the local network. The router then forwards the packet toward the remote destination.</p>
    `,
    takeaway: "DHCP configures a host, DNS supports name resolution through a hierarchy, and ARP maps a known local IP address to a MAC address."
  },
  {
    id: "ip-subnetting",
    group: "Addressing",
    title: "IP addressing and subnetting",
    intro: "The lecture introduces IPv4 addressing, special address types, and subnetting. A subnet mask separates the network portion from the host portion.",
    body: `
      <h3>IPv4 address</h3>
      <div class="definition"><strong>IPv4 address:</strong> A logical address used by the network layer to identify devices and support communication across networks.</div>
      <p>The lecture identifies network and broadcast addresses within each network. The first and last addresses cannot be assigned to hosts in the ordinary case.</p>
      <ul><li><strong>Loopback:</strong> 127.0.0.1 is used by a host to direct traffic to itself; the lecture reserves 127.0.0.0 to 127.255.255.255.</li><li><strong>Link-local:</strong> 169.254.0.0 to 169.254.255.255 can be automatically assigned to the local host.</li><li><strong>TEST-NET:</strong> 192.0.2.0 to 192.0.2.255 is set aside for teaching and learning.</li></ul>
      <h3>Subnetting</h3>
      <p>Subnetting divides a network into smaller networks by using a subnet mask. It changes how many bits identify the network and how many identify hosts.</p>
      <p class="formula">Usable hosts in an ordinary subnet = 2<sup>host bits</sup> − 2</p>
      <p>For example, the lecture's subnetting idea can be applied by identifying the network portion, calculating the remaining host bits, and identifying network, usable host, and broadcast addresses. Always exclude the network and broadcast addresses from ordinary host assignment.</p>
      <div class="note"><strong>Exam focus:</strong> Keep the distinction clear: the network address identifies the network, the broadcast address reaches hosts on the network, and host addresses are assigned between them.</div>
    `,
    takeaway: "IP addressing identifies networks and hosts. Subnetting divides a network, while network and broadcast addresses are not ordinary host addresses."
  },
  {
    id: "collision",
    group: "Addressing",
    title: "Collision",
    intro: "The lecture closes with collision as a network communication concept. A collision concerns simultaneous transmissions using a shared medium.",
    body: `
      <div class="definition"><strong>Collision:</strong> A situation in which transmitted signals interfere because more than one device transmits at the same time on a shared medium.</div>
      <p>Collision is associated with shared communication media. Understanding whether a medium is shared helps explain why access control and network design matter.</p>
      <p>Review this concept together with the lecture's network structure, media, topology, and data communication sections.</p>
    `,
    takeaway: "A collision results from competing transmissions on a shared medium; the medium and access method determine how it is handled."
  }
];

const questions = [
  { topicId: "foundations", topic: "Computer networking", type: "Multiple choice", question: "Which network component provides connectivity and helps data flow across a network?", options: ["End device", "Intermediary device", "Network media", "User application"], answer: 1, explanation: "The lecture describes intermediary devices as providing connectivity and ensuring data flows across the network." },
  { topicId: "media", topic: "Network media", type: "True or false", question: "Wireless communication requires physical cabling between every device on a LAN.", options: ["True", "False"], answer: 1, explanation: "The lecture states that wireless communication does not require physical cabling." },
  { topicId: "media", topic: "Network media", type: "Multiple choice", question: "Which medium uses light pulses conducted through special glass conductors?", options: ["UTP", "Coaxial cable", "Fiber optic", "Wireless RF"], answer: 2, explanation: "Fiber-optic cables use light pulses conducted through special glass conductors." },
  { topicId: "size-topology", topic: "Network size and topology", type: "Multiple choice", question: "Which topology connects devices to a central device?", options: ["Ring", "Bus", "Star", "Mesh"], answer: 2, explanation: "The lecture describes the star topology as devices connected to a central device." },
  { topicId: "models-architecture", topic: "Network models and architecture", type: "Multiple choice", question: "Which model allows devices to act as both clients and servers?", options: ["Peer-to-peer", "Client-server", "OSI", "TCP/IP"], answer: 0, explanation: "In a peer-to-peer network, devices can act as both clients and servers." },
  { topicId: "models-architecture", topic: "Network models and architecture", type: "Multiple choice", question: "Which is one of the network architecture characteristics listed in the lecture?", options: ["Fault tolerance", "Screen brightness", "File compression", "Keyboard layout"], answer: 0, explanation: "The lecture lists fault tolerance, scalability, quality of service, and security." },
  { topicId: "layers", topic: "Network layers: OSI and TCP/IP", type: "Multiple choice", question: "Which OSI layer is responsible for logical addressing and routing?", options: ["Physical", "Data Link", "Network", "Application"], answer: 2, explanation: "The Network layer is associated with logical addressing and routing." },
  { topicId: "protocols", topic: "Network protocols and transport", type: "Multiple choice", question: "Which two protocols does the lecture identify as the TCP/IP transport protocols?", options: ["HTTP and FTP", "TCP and UDP", "DNS and DHCP", "ARP and IP"], answer: 1, explanation: "TCP/IP uses Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) at the transport layer." },
  { topicId: "dhcp-dns-arp", topic: "DHCP, DNS, and ARP", type: "Sequence", question: "What is the correct order of the DHCP operation sequence presented in the lecture?", options: ["Offer, Discover, Acknowledgment, Request", "Discover, Offer, Request, Acknowledgment", "Request, Offer, Discover, Acknowledgment", "Discover, Request, Offer, Acknowledgment"], answer: 1, explanation: "The sequence is Discover, Offer, Request, and Acknowledgment." },
  { topicId: "dhcp-dns-arp", topic: "DHCP, DNS, and ARP", type: "Multiple choice", question: "What does ARP determine for a known IPv4 address on the local network?", options: ["A DNS hierarchy", "A MAC address", "A subnet mask", "A file name"], answer: 1, explanation: "ARP determines a MAC address for a known IPv4 address on the local network." },
  { topicId: "ip-subnetting", topic: "IP addressing and subnetting", type: "Multiple choice", question: "Which address is identified in the lecture as a loopback address?", options: ["192.0.2.1", "169.254.1.1", "127.0.0.1", "255.255.255.255"], answer: 2, explanation: "127.0.0.1 is a loopback address used by a host to direct traffic to itself." },
  { topicId: "ip-subnetting", topic: "IP addressing and subnetting", type: "True or false", question: "The first and last addresses in an ordinary network can always be assigned to hosts.", options: ["True", "False"], answer: 1, explanation: "The lecture identifies the first address as the network address and the last as the broadcast address; these cannot be assigned to ordinary hosts." },
  { topicId: "collision", topic: "Collision", type: "Concept", question: "What is a collision?", options: ["A name-server hierarchy", "Interference caused by simultaneous transmissions on a shared medium", "Automatic IP configuration", "A type of fiber connector"], answer: 1, explanation: "A collision occurs when transmitted signals interfere because more than one device transmits at the same time on a shared medium." },
  { topicId: "foundations", topic: "Computer networking", type: "Multiple choice", question: "Which device is an example of an end device?", options: ["Router", "Switch", "Printer", "Network cable"], answer: 2, explanation: "The lecture identifies computers, printers, and mobile devices as end devices." },
  { topicId: "foundations", topic: "Computer networking", type: "Concept", question: "What is network media?", options: ["The channel over which a message travels", "A device that routes packets", "A software application", "A type of server"], answer: 0, explanation: "Network media is the channel over which a message travels." },
  { topicId: "foundations", topic: "Computer networking", type: "True or false", question: "IoT devices such as cameras and sensors can participate in computer networks.", options: ["True", "False"], answer: 0, explanation: "The lecture includes cameras, door locks, thermostats, and sensors among networked IoT devices." },
  { topicId: "media", topic: "Network media", type: "Multiple choice", question: "Which copper cable is described as the least expensive in the lecture?", options: ["UTP", "STP", "Coaxial", "Fiber optic"], answer: 0, explanation: "The lecture describes UTP as the least expensive of the listed cable options." },
  { topicId: "media", topic: "Network media", type: "Multiple choice", question: "What is the maximum cable length given for UTP in the lecture?", options: ["50 m", "100 m", "500 m", "1,000 m"], answer: 1, explanation: "The lecture gives UTP a maximum cable length of 100 m." },
  { topicId: "media", topic: "Network media", type: "Multiple choice", question: "Which is a disadvantage of fiber-optic cable?", options: ["It is highly affected by EMI", "It is difficult to splice", "It cannot carry digital data", "It has the lowest installation cost"], answer: 1, explanation: "The lecture identifies higher installation cost, fragility, and difficult splicing as disadvantages of fiber." },
  { topicId: "media", topic: "Network media", type: "Multiple choice", question: "Which three concerns are specifically identified for wireless media?", options: ["Coverage, interference, and security", "Splicing, shielding, and voltage", "Routing, addressing, and ports", "Cost, weight, and glass"], answer: 0, explanation: "The lecture explicitly lists coverage area, interference, and security as wireless concerns." },
  { topicId: "size-topology", topic: "Network size and topology", type: "Multiple choice", question: "Which network type covers a metropolitan region?", options: ["PAN", "LAN", "MAN", "SAN"], answer: 2, explanation: "MAN stands for Metropolitan Area Network." },
  { topicId: "size-topology", topic: "Network size and topology", type: "Multiple choice", question: "Which network type is associated with storage?", options: ["SAN", "PAN", "MAN", "CAN"], answer: 0, explanation: "SAN stands for Storage Area Network." },
  { topicId: "size-topology", topic: "Network size and topology", type: "Multiple choice", question: "Which topology arranges devices in a loop?", options: ["Bus", "Ring", "Star", "Tree"], answer: 1, explanation: "A ring topology arranges devices in a ring connection." },
  { topicId: "size-topology", topic: "Network size and topology", type: "Concept", question: "What does a hybrid topology do?", options: ["Uses only wireless media", "Combines two or more topology types", "Connects only two devices", "Replaces all intermediary devices"], answer: 1, explanation: "The lecture defines hybrid as a combination of two or more topology types." },
  { topicId: "models-architecture", topic: "Network models and architecture", type: "Multiple choice", question: "In which model do clients request services from dedicated servers?", options: ["Peer-to-peer", "Client-server", "Bus", "Ring"], answer: 1, explanation: "The client-server model uses clients that request services from servers." },
  { topicId: "models-architecture", topic: "Network models and architecture", type: "True or false", question: "Scalability means a network can expand to support more users and devices.", options: ["True", "False"], answer: 0, explanation: "Scalability is the ability of a network to expand as users and devices increase." },
  { topicId: "models-architecture", topic: "Network models and architecture", type: "Concept", question: "What does fault tolerance describe?", options: ["A network's ability to keep operating when a device or link fails", "A cable's maximum length", "A DNS server hierarchy", "A method for assigning IP addresses"], answer: 0, explanation: "Fault tolerance is a network architecture characteristic concerning continued operation after failures." },
  { topicId: "layers", topic: "Network layers: OSI and TCP/IP", type: "Multiple choice", question: "How many layers are in the OSI reference model?", options: ["4", "5", "7", "8"], answer: 2, explanation: "The OSI reference model has seven layers." },
  { topicId: "layers", topic: "Network layers: OSI and TCP/IP", type: "Sequence", question: "What is the correct order of common protocol data units as data moves downward?", options: ["Bits, frame, packet, segment, data", "Data, segment/datagram, packet, frame, bits", "Packet, data, frame, bits, segment", "Frame, bits, data, packet, segment"], answer: 1, explanation: "Encapsulation moves from application data to segment or datagram, packet, frame, and finally bits." },
  { topicId: "layers", topic: "Network layers: OSI and TCP/IP", type: "Concept", question: "What is encapsulation?", options: ["Removing headers at the destination", "Adding layer information as data moves down the network stack", "Assigning a wireless password", "Finding a DNS server"], answer: 1, explanation: "Encapsulation is the process of each layer adding its own information as data moves downward." },
  { topicId: "protocols", topic: "Network protocols and transport", type: "Multiple choice", question: "Which protocol is associated with file transfer in the lecture?", options: ["FTP", "ARP", "DHCP", "DNS"], answer: 0, explanation: "FTP is included as a protocol for file transfer." },
  { topicId: "protocols", topic: "Network protocols and transport", type: "Multiple choice", question: "Which protocol is associated with sending email?", options: ["SMTP", "ARP", "HTTP", "DHCP"], answer: 0, explanation: "The lecture includes SMTP in connection with email communication." },
  { topicId: "protocols", topic: "Network protocols and transport", type: "True or false", question: "The transport layer tracks individual communication between applications.", options: ["True", "False"], answer: 0, explanation: "Tracking individual application communication is one of the transport layer responsibilities described in the lecture." },
  { topicId: "dhcp-dns-arp", topic: "DHCP, DNS, and ARP", type: "Multiple choice", question: "Which DHCP message comes first in the sequence?", options: ["Offer", "Request", "Discover", "Acknowledgment"], answer: 2, explanation: "The DHCP sequence begins with Discover." },
  { topicId: "dhcp-dns-arp", topic: "DHCP, DNS, and ARP", type: "Concept", question: "What does DNS provide?", options: ["A hierarchy for name resolution", "A fiber connection", "A collision signal", "A subnet broadcast"], answer: 0, explanation: "The lecture presents DNS through a hierarchy of name servers used for name resolution." },
  { topicId: "dhcp-dns-arp", topic: "DHCP, DNS, and ARP", type: "True or false", question: "An ARP request is used to determine a MAC address for a known local IPv4 address.", options: ["True", "False"], answer: 0, explanation: "ARP determines a MAC address for a known IPv4 address on the local network." },
  { topicId: "dhcp-dns-arp", topic: "DHCP, DNS, and ARP", type: "Scenario", question: "For remote communication, which device interface does the host determine a MAC address for?", options: ["The remote host directly", "The router interface serving the local network", "The DNS root", "The DHCP server only"], answer: 1, explanation: "For remote communication, ARP determines the MAC address of the local router interface serving the network." },
  { topicId: "ip-subnetting", topic: "IP addressing and subnetting", type: "Multiple choice", question: "Which address range is identified as link-local in the lecture?", options: ["127.0.0.0/8", "169.254.0.0/16", "192.0.2.0/24", "10.0.0.0/8"], answer: 1, explanation: "The lecture identifies 169.254.0.0 to 169.254.255.255 as link-local." },
  { topicId: "ip-subnetting", topic: "IP addressing and subnetting", type: "Concept", question: "What does the network address identify?", options: ["The network itself", "Only one application", "A fiber connector", "A DNS hierarchy"], answer: 0, explanation: "The network address identifies the network and cannot be assigned to an ordinary host." },
  { topicId: "ip-subnetting", topic: "IP addressing and subnetting", type: "Concept", question: "What does subnetting do?", options: ["Divides a network into smaller networks", "Converts light to radio", "Removes all IP addresses", "Creates a new email protocol"], answer: 0, explanation: "Subnetting divides a network into smaller networks by using a subnet mask." },
  { topicId: "collision", topic: "Collision", type: "True or false", question: "A collision can occur when more than one device transmits at the same time on a shared medium.", options: ["True", "False"], answer: 0, explanation: "Simultaneous transmissions on a shared medium can interfere and create a collision." },
  { topicId: "collision", topic: "Collision", type: "Scenario", question: "Which condition is necessary for the collision concept described in the lecture?", options: ["A shared communication medium", "A DNS hierarchy", "A fiber splice", "A private IP range"], answer: 0, explanation: "The lecture relates collisions to competing transmissions on a shared medium." }
];

const topicContainer = document.querySelector("#topic-container");
const contentsList = document.querySelector("#contents-list");
const mobileTopicList = document.querySelector("#mobile-topic-list");
const quizContainer = document.querySelector("#quiz-container");
const filter = document.querySelector("#topic-filter");
const progressBar = document.querySelector("#reading-progress-bar");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const quizState = { index: 0, selected: null, submitted: false, answers: [] };

function renderTopics() {
  topicContainer.innerHTML = topics.map((topic, index) => `
    <article class="topic" id="${topic.id}">
      <div class="topic-heading"><span class="topic-number">${String(index + 1).padStart(2, "0")}</span><div><p class="eyebrow">${topic.group}</p><h2>${topic.title}</h2></div></div>
      <div class="topic-overview"><p class="topic-label">Topic overview</p><p class="lead">${topic.intro}</p></div>
      ${topic.body}
      <div class="topic-footer"><p class="topic-label">Quick revision</p><p>${topic.takeaway}</p></div>
    </article>
  `).join("");
  renderContents();
}

function renderContents() {
  const grouped = topics.reduce((groups, topic) => {
    (groups[topic.group] ||= []).push(topic);
    return groups;
  }, {});
  contentsList.innerHTML = Object.entries(grouped).map(([group, entries]) => `
    <div class="contents-group"><p class="contents-group-title">${group}</p>
      ${entries.map(topic => `<a class="contents-item" href="#${topic.id}">${topic.title}</a>`).join("")}
    </div>
  `).join("");
  mobileTopicList.innerHTML = `<span class="mobile-topic-heading">Topics</span>${topics.map(topic => `<a href="#${topic.id}">${topic.title}</a>`).join("")}`;
  mobileTopicList.querySelectorAll("a").forEach(link => link.addEventListener("click", () => document.querySelector("#mobile-nav").classList.remove("open")));
}

function renderTopicFilter() {
  filter.innerHTML = `<option value="all">All Topics</option>${topics.map(topic => `<option value="${topic.id}">${topic.title}</option>`).join("")}`;
}

function renderQuiz() {
  const available = filter.value === "all" ? questions : questions.filter(question => question.topicId === filter.value);
  if (!available.length) {
    quizContainer.innerHTML = `<p class="quiz-empty">There are no questions in this practice set yet.</p>`;
    return;
  }
  if (quizState.index >= available.length) {
    renderResults(available);
    return;
  }
  const current = available[quizState.index];
  const selected = quizState.selected;
  const submitted = quizState.submitted;
  const options = current.options.map((option, index) => {
    const state = submitted && index === current.answer ? "correct" : submitted && index === selected && selected !== current.answer ? "incorrect" : selected === index ? "selected" : "";
    return `<button type="button" class="answer-option ${state}" data-answer="${index}" ${submitted ? "disabled" : ""}><input type="radio" tabindex="-1" ${selected === index ? "checked" : ""} aria-hidden="true" /> <span>${option}</span></button>`;
  }).join("");
  quizContainer.innerHTML = `
    <div class="quiz-meta"><span>${current.topic} · ${current.type}</span><span>${quizState.index + 1} of ${available.length}</span></div>
    <div class="quiz-progress"><span style="width:${((quizState.index + 1) / available.length) * 100}%"></span></div>
    <h3 class="quiz-question">${current.question}</h3>
    <div class="answer-list">${options}</div>
    ${submitted ? `<div class="feedback ${selected === current.answer ? "" : "incorrect"}"><strong>${selected === current.answer ? "Correct" : "Not quite"}</strong><p>${current.explanation}</p></div>` : ""}
    <div class="quiz-actions">
      <button class="button button-outline" type="button" id="previous-question" ${quizState.index === 0 ? "disabled" : ""}>Previous</button>
      ${submitted ? `<button class="button button-dark next-button" type="button" id="next-question">${quizState.index === available.length - 1 ? "View results" : "Next question"} <span aria-hidden="true">→</span></button>` : `<button class="button button-dark next-button" type="button" id="submit-answer" ${selected === null ? "disabled" : ""}>Submit answer</button>`}
    </div>
  `;
  quizContainer.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
    if (!quizState.submitted) {
      quizState.selected = Number(button.dataset.answer);
      renderQuiz();
    }
  }));
  quizContainer.querySelector("#submit-answer")?.addEventListener("click", () => {
    quizState.submitted = true;
    quizState.answers[quizState.index] = quizState.selected;
    renderQuiz();
  });
  quizContainer.querySelector("#next-question")?.addEventListener("click", () => {
    quizState.index += 1;
    quizState.selected = null;
    quizState.submitted = false;
    renderQuiz();
  });
  quizContainer.querySelector("#previous-question")?.addEventListener("click", () => {
    if (quizState.index > 0) {
      quizState.index -= 1;
      quizState.selected = quizState.answers[quizState.index] ?? null;
      quizState.submitted = quizState.answers[quizState.index] !== undefined;
      renderQuiz();
    }
  });
}

function renderResults(available) {
  const correct = available.reduce((total, question, index) => total + (quizState.answers[index] === question.answer ? 1 : 0), 0);
  const percentage = Math.round((correct / available.length) * 100);
  quizContainer.innerHTML = `
    <div class="results"><p class="eyebrow">Practice complete</p><div class="results-score"><strong>${percentage}%</strong><span>result</span></div>
    <p class="results-stats">${correct} correct · ${available.length - correct} incorrect · ${available.length} questions</p>
    <h3>Review answers</h3>
    <ul class="review-list">${available.map((question, index) => `<li class="${quizState.answers[index] === question.answer ? "review-correct" : "review-wrong"}"><strong>${index + 1}. ${quizState.answers[index] === question.answer ? "Correct" : "Review"}:</strong> ${question.question}</li>`).join("")}</ul>
    <button class="button button-dark" type="button" id="restart-results">Restart quiz</button></div>
  `;
  quizContainer.querySelector("#restart-results").addEventListener("click", resetQuiz);
}

function resetQuiz() {
  quizState.index = 0;
  quizState.selected = null;
  quizState.submitted = false;
  quizState.answers = [];
  renderQuiz();
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }
  const matches = topics.filter(topic => `${topic.title} ${topic.intro} ${topic.body}`.toLowerCase().includes(query));
  searchResults.hidden = false;
  searchResults.innerHTML = matches.length
    ? `<strong>${matches.length} topic${matches.length === 1 ? "" : "s"} found</strong><ul>${matches.map(topic => `<li><a href="#${topic.id}">${topic.title}</a></li>`).join("")}</ul>`
    : `<strong>No matching topic</strong><p>Try a term such as DHCP, fiber, topology, ARP, or subnetting.</p>`;
});

filter.addEventListener("change", resetQuiz);
document.querySelector("#restart-button").addEventListener("click", resetQuiz);
document.querySelector("#contents-toggle").addEventListener("click", event => {
  const panel = document.querySelector(".contents-panel");
  panel.classList.toggle("collapsed");
  const expanded = !panel.classList.contains("collapsed");
  event.currentTarget.textContent = expanded ? "Hide" : "Show";
  event.currentTarget.setAttribute("aria-expanded", expanded);
});
document.querySelector("#menu-button").addEventListener("click", event => {
  const nav = document.querySelector("#mobile-nav");
  nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", nav.classList.contains("open"));
});
document.querySelectorAll(".mobile-nav a").forEach(link => link.addEventListener("click", () => document.querySelector("#mobile-nav").classList.remove("open")));

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max ? window.scrollY / max : 0})`;
});

renderTopics();
renderTopicFilter();
renderQuiz();
