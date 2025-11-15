---
title: "Poison to Cure: Privacy-preserving Wi-Fi Multi-User Sensing via Data Poisoning"
collection: publications
permalink: /publication/2025-08-1-Poison2Cure
excerpt: 'This study leverages poisoning attacks to protect user privacy. [Code](https://github.com/DeepWiSe888/Poison2Cure)'
date: 2025-08-31
venue: 'ACM MobiCom'
paperurl: 'http://MadFrogL.github.io/files/Poison2Cure.pdf'
# citation: '@inproceedings{hu2024poison,
#   title={{Poison to Cure: Privacy-preserving Wi-Fi Multi-User Sensing via Data Poisoning}},
#   author={Hu, Jingzhi and Li, Xin and Gan, Jin and Luo, Jun},
#   booktitle={Proc. of the 31th ACM MobiCom},
#   pages={},
#   year={2025}
# }'
---

Wi-Fi human sensing, boosted by latest progress in both system innovation and deep analytics, has demonstrated everincreasing resolution of users’ activities. Nonetheless, it may become a spy on users’ private activities such as password entry or intimate social interactions. Existing countermeasures include signal obfuscation and adversarial perturbations to hamper and confuse Wi-Fi sensing, yet they both require substantial changes in Wi-Fi hardware/firmware, and they at most stay at user level in protection granularity. This paper presents Poison2Cure, the first semantic-level privacypreserving framework for Wi-Fi human sensing systems, with full compatibility to any underlying hardware. The innovation behind Poison2Cure lies in feeding poisoned training data from (privacy-sensitive) users to the neural model for Wi-Fi sensing, degrading only the sensing for private activities while retaining that for regular ones. Moreover, we tackle the harsh conditions where the neural model is kept confidential and/or preceded by data cleansing. Our extensive evaluations demonstrate that Poison2Cure reduces over 76% of the accuracy for the private activities while keeping the accuracy for regular activities largely intact.
