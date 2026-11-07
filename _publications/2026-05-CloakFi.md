---
# Optional research directions: uncomment and keep only matching IDs.
research:
  # - wireless-sensing
  # - mobile-intelligence
  - wireless-security
#   - vehicular-systems
title: "CloakFi: Metasurface-Enabled Privacy Protection for Wi-Fi Integrated Sensing and Communication"
collection: publications
permalink: /publication/2026-05-CloakFi
excerpt: 'We propose CloakFi, a plug-and-play, low-cost solution that leverages the channel manipulation capability of metasurfaces to safeguard privacy while preserving ISAC performance.'
date: 2026-05-18
venue: 'IEEE INFOCOM'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/11571421'
# citation: '@inproceedings{hu2024poison,
#   title={{Poison to Cure: Privacy-preserving Wi-Fi Multi-User Sensing via Data Poisoning}},
#   author={Hu, Jingzhi and Li, Xin and Gan, Jin and Luo, Jun},
#   booktitle={Proc. of the 31th ACM MobiCom},
#   pages={},
#   year={2025}
# }'
---

Publicly available channel state information (CSI) in Wi-Fi has enabled a wide range of sensing applications and empowered integrated sensing and communication (ISAC). However, this same openness also raises serious privacy concerns. Existing defenses either neglect legitimate ISAC requirements or depend on costly, specialized hardware. To this end, we propose CloakFi, a plug-and-play, low-cost solution that leverages the channel manipulation capability of metasurfaces to safeguard privacy while preserving ISAC performance. The key idea is to assign each metasurface row two distinct beamforming vectors and randomly activate one at each time slot, introducing fluctuations that mask sensitive sensing information. Those vectors are jointly designed to remain nearly identical in the communication direction, ensuring stable, high-throughput transmission, while diverging in the sensing direction, thereby introducing significant fluctuations and obfuscating unauthorized observations. To further support legitimate sensing under such randomized configurations, we develop a time-domain masking and demasking method that associates CSI samples with their corresponding metasurface configurations and eliminates induced discrepancies, enabling accurate recovery of valid CSI. We implement CloakFi on commodity Wi-Fi devices, and extensive experiments demonstrate that it provides strong privacy protection without sacrificing communication or sensing performance for legitimate users.


