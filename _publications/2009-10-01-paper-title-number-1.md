---
title: "Paper Title Number 1"
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2009-10-01
venue: 'Journal 1'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://MadFrogL.github.io/files/UWB-Fi Pushing Wi-Fi towards Ultra-wideband for Fine-Granularity Sensing.pdf'
citation: '@inproceedings{li2024uwb,
  title={{UWB-Fi: Pushing Wi-Fi towards Ultra-wideband for Fine-Granularity Sensing}},
  author={Li, Xin and Wang, Hongbo and Chen, Zhe and Jiang, Zhiping and Luo, Jun},
  booktitle={Proc. of the 22nd ACM MobiSy},
  pages={42--55},
  year={2024}
}'
---

The limited bandwidth of Wi-Fi severely confines the granularity (especially in differentiating multiple subjects) of Wi-Fi sensing, posing a significant challenge for its wide adoption. Though utilizing multiple channels to expand the effective bandwidth sounds plausible, continuous spectrum stitching towards \textit{ultra-wideband} (UWB) is far from practical given various constraints (e.g., the runtime channel availability and inconsistent channel responses across a wide bandwidth). To this end, we propose \name as a novel Wi-Fi sensing system with ultra-wide bandwidth, leveraging only discrete and irregular channel sampling. We first design a fast channel hopping scheme to perform arbitrary sampling across 4.7~\!GHz (i.e., 2.4 to 7.1~\!GHz) bandwidth on commodity Wi-Fi hardware without interrupting default communications. As no signal processing tool is available to handle such channel samples, we innovate in a model-based deep learning approach that translates discrete channel samples to high-dimensional spectral parameters; this method successfully avoids the \textit{bias-variance tradeoff} in parameter estimation, while filtering out hardware-related offsets inherent to Wi-Fi. Through extensive evaluations, we demonstrate that \name successfully achieves fine-granularity sensing, enabling centimeter-level resolution for indoor multi-person sensing.
