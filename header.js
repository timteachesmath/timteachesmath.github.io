(function () {
  const HOME_URL = "https://timteachesmath.github.io/";

  const style = document.createElement("style");
  style.textContent = `
    .tc-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
      background: #0f172a;
      color: #f1f5f9;
      padding: 0.75rem 1.25rem;
      font-family: system-ui, sans-serif;
      font-size: 0.9rem;
      border-bottom: 1px solid #1e293b;
      box-sizing: border-box;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .tc-header a {
      color: inherit;
      text-decoration: none;
    }
    .tc-header a:hover {
      text-decoration: underline;
    }
    .tc-header__name {
      font-weight: 700;
      font-size: 1rem;
    }
    .tc-header__title {
      color: #94a3b8;
      font-weight: 400;
      margin-left: 0.5rem;
    }
    .tc-header__links {
      display: flex;
      gap: 1rem;
      color: #94a3b8;
    }
  `;
  document.head.appendChild(style);

  const header = document.createElement("header");
  header.className = "tc-header";
  header.innerHTML = `
    <div>
      <a href="${HOME_URL}" class="tc-header__name">Tim Cieplowski</a><span class="tc-header__title">Software Developer &middot; Madison, WI</span>
    </div>
    <nav class="tc-header__links">
      <a href="${HOME_URL}#projects">Projects</a>
      <a href="mailto:timteachesmath+portfolio@gmail.com">Email</a>
      <a href="https://linkedin.com/in/tim-cieplowski" target="_blank" rel="noopener">LinkedIn</a>
    </nav>
  `;

  document.body.prepend(header);
})();
