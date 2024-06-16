---
title: "UWB-Fi Pushing Wi-Fi towards Ultra-wideband for Fine-Granularity Sensing"
collection: publications
permalink: /publication/2024-06-UWBFi-MobiSys
excerpt: 'We propose UWB-Fi as a novel Wi-Fi sensing system with ultra-wide bandwidth, leveraging only discrete and irregular channel sampling. [Code](https://github.com/DeepWiSe888/UWB-Fi)'
date: 2024-06-03
venue: 'The 22nd ACM International Conference on Mobile Systems, Applications, and Services'
paperurl: 'http://MadFrogL.github.io/files/UWB.pdf'
citation: '@inproceedings{li2024uwb,
title={UWB-Fi: Pushing Wi-Fi towards Ultra-wideband for Fine-Granularity Sensing},
author={Li, Xin and Wang, Hongbo and Chen, Zhe and Jiang, Zhiping and Luo, Jun},
booktitle={Proc. of the 22nd ACM MobiSy},
pages={42--55},
year={2024}
}'
---

The limited bandwidth of Wi-Fi severely confines the granularity (especially in differentiating multiple subjects) of Wi-Fi sensing, posing a significant challenge for its wide adoption. Though utilizing multiple channels to expand the effective bandwidth sounds plausible, continuous spectrum stitching towards ultra-wideband (UWB) is far from practical given various constraints (e.g., the runtime channel availability and inconsistent channel responses across a wide bandwidth). To this end, we propose UWB-Fi as a novel Wi-Fi sensing system with ultra-wide bandwidth, leveraging only discrete and irregular channel sampling. We first design a fast channel hopping scheme to perform arbitrary sampling across 4.7 GHz (i.e., 2.4 to 7.1 GHz) bandwidth on commodity Wi-Fi hardware without interrupting default communications. As no signal processing tool is available to handle such channel samples, we innovate in a model-based deep learning approach that translates discrete channel samples to high-dimensional spectral parameters; this method successfully avoids the bias-variance tradeoff in parameter estimation, while filtering out hardware-related offsets inherent to Wi-Fi. Through extensive evaluations, we demonstrate that UWB-Fi successfully achieves fine-granularity sensing, enabling centimeter-level resolution for indoor multi-person sensing.
