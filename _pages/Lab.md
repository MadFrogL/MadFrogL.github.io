---
permalink: /Lab/
# title: ""
author_profile: true
redirect_from: 
  - /md/
  - /Lab.html
---





<style>
/* ===== iMSe Lab Page ===== */

.imse-page {
  --imse-blue: #173b60;
  --imse-muted: #60738a;
  --imse-border: #dce5ef;
}

/* Lab identity */
.imse-hero {
  padding: 1.3rem 1.5rem;
  margin: 0 0 1.8rem;
  border: 1px solid var(--imse-border);
  border-left: 4px solid var(--imse-blue);
  border-radius: 10px;
  background: linear-gradient(135deg, #ffffff, #f3f7fc);
}

.imse-hero-top {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.imse-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 110px;
  height: 95px;
  border-radius: 10px;
  background: var(--imse-blue);
  color: white;
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.imse-hero-info {
  min-width: 0;
}

.imse-hero-title {
  margin: 0 0 0.3rem !important;
  color: var(--imse-blue);
  font-size: 1.55rem !important;
  font-weight: 750;
}

.imse-hero-en {
  margin: 0 !important;
  color: #56697d;
  font-size: 0.82rem;
  line-height: 1.6;
}

.imse-hero-cn {
  margin: 0.2rem 0 0 !important;
  color: #56697d;
  font-size: 0.8rem;
  line-height: 1.6;
}

.imse-hero-bottom {
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid var(--imse-border);
}

.imse-motto {
  margin: 0 0 0.2rem !important;
  color: var(--imse-blue);
  font-size: 1.15rem;
  font-weight: 650;
  font-style: italic;
}

.imse-motto-cn {
  margin: 0 !important;
  color: var(--imse-muted);
  font-size: 0.8rem;
}

/* Section headings */
.imse-section-title {
  margin: 2rem 0 0.9rem !important;
  padding-bottom: 0.45rem;
  border-bottom: 1px solid var(--imse-border);
  color: var(--imse-blue);
  font-size: 1.35rem !important;
}

/* Research cards */
.imse-research-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
}

.imse-research-card {
  padding: 1rem 1.1rem;
  border: 1px solid var(--imse-border);
  border-radius: 9px;
  background: #ffffff;
}

.imse-research-card h3 {
  margin: 0 0 0.45rem !important;
  color: var(--imse-blue);
  font-size: 1rem !important;
}

.imse-research-card p {
  margin: 0 !important;
  color: #526477;
  font-size: 0.82rem;
  line-height: 1.7;
}

/* Recruitment */
.imse-recruit {
  padding: 1.15rem 1.3rem;
  border: 1px solid #d3e1ef;
  border-radius: 10px;
  background: #f4f8fd;
}

.imse-recruit p {
  margin: 0 0 0.75rem;
  font-size: 0.88rem;
  line-height: 1.75;
}

.imse-recruit p:last-child {
  margin-bottom: 0;
}

.imse-recruit ul {
  margin: 0.4rem 0 0.8rem;
  padding-left: 1.25rem;
  font-size: 0.86rem;
  line-height: 1.8;
}

.imse-contact {
  margin-top: 1rem;
  font-size: 0.88rem;
}

.imse-contact a {
  color: var(--imse-blue);
  font-weight: 650;
}

/* Responsive */
@media (max-width: 650px) {
  .imse-hero {
    padding: 1rem;
  }

  .imse-hero-top {
    gap: 0.8rem;
  }

  .imse-mark {
    flex-basis: 80px;
    height: 78px;
    font-size: 1.4rem;
  }

  .imse-hero-title {
    font-size: 1.3rem !important;
  }

  .imse-hero-en,
  .imse-hero-cn {
    font-size: 0.72rem;
  }

  .imse-research-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="imse-page">

  <!-- ===== Lab Identity ===== -->

  <section class="imse-hero">
    <div class="imse-hero-top">

      <div class="imse-mark">iMSe</div>

      <div class="imse-hero-info">
        <h2 class="imse-hero-title">iMSe Lab</h2>
        <p class="imse-hero-en">
          Intelligent Mobile Systems and Security Laboratory
        </p>
        <p class="imse-hero-cn">
          智能移动系统与安全实验室 · 南开大学
        </p>
      </div>

    </div>

    <div class="imse-hero-bottom">
      <p class="imse-motto">
        I See Beyond the Visible.
      </p>
      <p class="imse-motto-cn">
        超越可见，洞察未知。
      </p>
    </div>
  </section>

  <!-- ===== Introduction ===== -->

  <h2 class="imse-section-title">About the Lab</h2>

  <p>
    Our research focuses on wireless
    sensing, wireless security, mobile computing,
    intelligent IoT systems, and intelligent cabin.
  </p>

  <p>
    We aim to uncover information beyond direct
    observation, develop intelligent sensing
    capabilities, and investigate the security
    of emerging wireless and mobile systems.
  </p>

  <!-- ===== Research Directions ===== -->

  <h2 class="imse-section-title">Research Directions</h2>

  <div class="imse-research-grid">

    <div class="imse-research-card">
      <h3>01. Wireless Sensing &amp; Intelligence</h3>
      <p>
        Wi-Fi and RF sensing, human activity
        recognition, cross-domain sensing,
        and learning-based intelligent sensing.
      </p>
    </div>

    <div class="imse-research-card">
      <h3>02. Wireless &amp; Mobile Security</h3>
      <p>
        NFC and RF security, wireless side-channel
        analysis, physical-layer security,
        and security of mobile systems.
      </p>
    </div>

    <div class="imse-research-card">
      <h3>03. Mobile Computing &amp; Intelligent IoT</h3>
      <p>
        Mobile and ubiquitous computing,
        intelligent connected devices,
        AIoT systems, and context-aware
        applications.
      </p>
    </div>

    <div class="imse-research-card">
      <h3>04. Intelligent Vehicular Systems</h3>
      <p>
        In-vehicle sensing, intelligent cockpit
        systems, multimodal interaction,
        and smart mobility applications.
      </p>
    </div>

  </div>

  <!-- ===== Recruitment ===== -->

  <h2 class="imse-section-title" id="recruitment">
    Prospective Students / 招生信息
  </h2>

  <div class="imse-recruit">

    <p>
      <strong>Join iMSe Lab!</strong>
    </p>

    <p>
      We welcome motivated students interested
      in wireless sensing, wireless security,
      mobile computing, and intelligent IoT
      to contact us about potential research
      opportunities.
    </p>

    <p>
      欢迎对无线感知、无线安全、移动计算和智能物联网
      感兴趣的同学联系交流，了解课题组的研究方向
      及潜在的科研与招生机会。
    </p>

    <p><strong>We particularly value:</strong></p>

    <ul>
      <li>
        Strong motivation and curiosity for research.
      </li>
      <li>
        Solid programming or mathematical foundations.
      </li>
      <li>
        Interest in wireless systems, security,
        signal processing, or machine learning.
      </li>
      <li>
        Initiative, persistence, and teamwork.
      </li>
    </ul>

    <p>
      有意向的同学可以通过邮件联系，并附上个人简历。
    </p>

    <p class="imse-contact">
      <strong>Contact:</strong>
      <a href="mailto:li.xin@nankai.edu.cn">
        li.xin@nankai.edu.cn
      </a>
    </p>

  </div>

</div>


