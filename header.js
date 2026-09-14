(function () {
  const HOME_URL = "https://timteachesmath.github.io/";
  const STYLESHEET_URL = HOME_URL + "site.css";

  // The header's own styling lives in site.css alongside every other shared
  // rule, so pages link that themselves — which also avoids the flash a
  // deferred script injecting a stylesheet would cause. This is only a
  // backstop for a page that includes header.js but hasn't added the link.
  // Matched on path, not the whole URL, so a page on this origin can link it
  // relatively (which keeps a local preview working) and still be recognised.
  const hasStylesheet = Array.prototype.some.call(
    document.querySelectorAll('link[rel="stylesheet"]'),
    (link) => new URL(link.href, location.href).pathname.endsWith("/site.css")
  );
  if (!hasStylesheet) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = STYLESHEET_URL;
    document.head.appendChild(link);
  }

  const header = document.createElement("header");
  header.className = "tc-header";
  // The bar spans the viewport; the inner wrapper is capped at --measure so
  // its contents line up with the page column beneath it.
  header.innerHTML = `
    <div class="tc-header__inner">
      <div>
        <a href="${HOME_URL}" class="tc-header__name">Tim Cieplowski</a><span class="tc-header__title">Software Developer &middot; Madison, WI</span>
      </div>
      <nav class="tc-header__links">
        <a href="${HOME_URL}#projects">Projects</a>
        <a href="mailto:timteachesmath+portfolio@gmail.com">Email</a>
        <a href="https://linkedin.com/in/tim-cieplowski" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/timteachesmath" target="_blank" rel="noopener">GitHub</a>
      </nav>
    </div>
  `;

  document.body.prepend(header);
})();
