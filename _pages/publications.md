---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can find all my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>; only a few are listed here.</div>
{% endif %}

{% include base_path %}

<div class="research-filters" aria-label="Filter publications by research direction" hidden>
  <button type="button" data-research-filter="" aria-pressed="true">All publications</button>
  {% for direction in site.data.research %}
    <button type="button" data-research-filter="{{ direction.id | escape }}" aria-pressed="false">{{ direction.title | escape }}</button>
  {% endfor %}
</div>
<p id="research-filter-status" role="status" hidden></p>
<noscript><p>All publications are shown below. Enable JavaScript to filter by research direction.</p></noscript>

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<script src="{{ '/assets/js/research-filter.js' | relative_url }}" defer></script>
