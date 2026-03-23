/* ═══════════════════════════════════════
   js/github.js — GitHub REST API integration
═══════════════════════════════════════ */
(function () {
  const USERNAME = 'mdshahabuddin-ml';
  const container = document.getElementById('reposContainer');

  async function loadGitHub () {
    try {
      // Fetch repos and user info in parallel
      const [reposRes, userRes] = await Promise.all([
        fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`),
        fetch(`https://api.github.com/users/${USERNAME}`)
      ]);

      if (!reposRes.ok) throw new Error('Rate limited or not found');

      const repos = await reposRes.json();
      const user  = await userRes.json();

      // Update stat cards
      document.getElementById('gh-repos').textContent = user.public_repos ?? repos.length;
      document.getElementById('gh-stars').textContent =
        repos.reduce((acc, r) => acc + r.stargazers_count, 0);

      // Render repo cards
      container.innerHTML = repos.map((repo) => `
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-card">
          <div class="repo-name">${repo.name}</div>
          <div class="repo-desc">${repo.description ?? 'No description yet.'}</div>
          <div class="repo-footer">
            <span class="lang-dot ${repo.language === 'JavaScript' ? 'js' : ''}"></span>
            <span>${repo.language ?? 'Python'}</span>
            <span style="margin-left:auto;">⭐ ${repo.stargazers_count}</span>
          </div>
        </a>
      `).join('');

    } catch {
      // Graceful fallback — show static cards
      container.innerHTML = `
        <a href="https://github.com/${USERNAME}?tab=repositories" target="_blank" class="repo-card">
          <div class="repo-name">python-project</div>
          <div class="repo-desc">Hangman word guessing game built with Python.</div>
          <div class="repo-footer"><span class="lang-dot"></span><span>Python</span></div>
        </a>
        <a href="https://github.com/${USERNAME}?tab=repositories" target="_blank" class="repo-card">
          <div class="repo-name">quiz_game</div>
          <div class="repo-desc">Interactive Python quiz with scoring.</div>
          <div class="repo-footer"><span class="lang-dot"></span><span>Python</span></div>
        </a>
        <a href="https://github.com/${USERNAME}?tab=repositories" target="_blank" class="repo-card">
          <div class="repo-name">jarvish_project</div>
          <div class="repo-desc">Voice-activated Python assistant.</div>
          <div class="repo-footer"><span class="lang-dot"></span><span>Python</span></div>
        </a>
      `;
      document.getElementById('gh-repos').textContent = '12+';
      document.getElementById('gh-stars').textContent = '★';
    }
  }

  loadGitHub();
})();
