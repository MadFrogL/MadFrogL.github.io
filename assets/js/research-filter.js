(function () {
  'use strict';
  var filters = document.querySelector('.research-filters');
  if (!filters) return;
  var buttons = Array.from(filters.querySelectorAll('button'));
  var papers = Array.from(document.querySelectorAll('[data-research]'));
  var status = document.getElementById('research-filter-status');
  function select(id, updateUrl) {
    var selected = buttons.find(function (button) { return button.dataset.researchFilter === id; });
    // Unknown or removed directions safely fall back to the complete list.
    if (!selected) { id = ''; selected = buttons[0]; }
    var count = 0;
    papers.forEach(function (paper) {
      var tags = paper.dataset.research.trim().split(/\s+/);
      paper.hidden = !!id && tags.indexOf(id) === -1;
      if (!paper.hidden) count += 1;
    });
    buttons.forEach(function (button) { button.setAttribute('aria-pressed', String(button === selected)); });
    status.hidden = !id;
    status.textContent = count ? count + ' publication' + (count === 1 ? '' : 's') + ' in this direction.' : 'No publications have been assigned to this direction yet. Choose All publications to see the complete list.';
    if (updateUrl) {
      var url = new URL(window.location.href);
      if (id) url.searchParams.set('research', id);
      else url.searchParams.delete('research');
      window.history.pushState(null, '', url.toString());
    }
  }
  filters.hidden = false;
  buttons.forEach(function (button) {
    button.addEventListener('click', function () { select(button.dataset.researchFilter, true); });
  });
  function fromUrl() { select(new URL(window.location.href).searchParams.get('research') || '', false); }
  window.addEventListener('popstate', fromUrl);
  fromUrl();
}());
