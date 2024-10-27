---
title: "Beamforming Made Malicious: Manipulating Wi-Fi Traffic via Beamforming Feedback Forgery"
collection: publications
permalink: /publication/2024-08-BeamCraft-MobiCom
excerpt: 'The core idea of BeamCraft involves corrupting beamforming decisions by injecting crafted BFIs that feed an access point (AP) with erroneous information on channel states. [Code](Pending)'
date: 2024-08-31
venue: 'The 30th Annual International Conference On Mobile Computing And Networking'
paperurl: 'http://MadFrogL.github.io/files/MobiCom24_BeamCraft.pdf'
citation: '@inproceedings{xu2024beamforming,
  title={{Beamforming Made Malicious: Manipulating Wi-Fi Traffic via Beamforming Feedback Forgery}},
  author={Xu, Mingming and He, Yinghui and Li, Xin and Hu, Jingzhi and Chen, Zhe and Xiao, Fu and Luo, Jun},
  booktitle={Proc. of the 30th ACM MobiCom},
  pages={},
  year={2024}
}'
---

New Wi-Fi systems have leveraged beamforming to manage a significant portion of traffic for achieving high throughput and reliability. Unfortunately, this has amplified certain security risks since beamforming critically relies on the cleartext beamforming feedback information (BFI): though similar risks have been exposed using emulation platforms (e.g., USRP), they have never proven realistic till this day. In this paper, we propose BeamCraft, the first attack to manipulate traffic in commodity Wi-Fi systems; it differs significantly from existing attacks either staying only on emulation platforms with limited real-world applicability or jamming communications by brute force. The core idea of BeamCraft involves corrupting beamforming decisions by injecting crafted BFIs that feed an access point (AP) with erroneous information on channel states. To mount a covert yet purposeful attack, we develop i) a joint location and transmit power selection strategy to evade detection by victims and ii) a novel BFI forgery method to effectively manipulate AP’s beamforming decisions.We implement BeamCraft using commodity Wi-Fi devices and perform extensive evaluations with it; the results reveal that BeamCraft effectively manipulates Wi-Fi traffic while maintaining a low exposure rate.
