---
layout: default
title: Home
permalink: /
---

<section class="hero">
  <div>
    <div class="kicker">Portfolio • SITE 1101</div>

    <h1>Hello, I’m <span class="accent">Jalil Rzayev</span> 👋</h1>

    <p>
      I’m a Computer Science major with a strong interest in mathematics and problem-solving.
      I enjoy building clean, responsive websites and learning how systems work—from logic circuits to real software.
      My goal is to keep improving through practical projects, consistent practice, and challenges that require real thinking.
    </p>

    <div class="btns">
      <a class="btn primary" href="{{ '/projects/' | relative_url }}">View My Projects →</a>
      <a class="btn" href="{{ '/about/' | relative_url }}">About Me</a>
      <a class="btn" href="{{ site.repo_url }}" target="_blank" rel="noopener">GitHub Repo</a>
    </div>
  </div>

  <div class="hero-media">
    <div class="profile-card">
      <div class="profile-img">
        <img src="{{ '/assets/img/profile.jpg' | relative_url }}" alt="Profile photo of Jalil Rzayev" />
      </div>
      <div class="profile-meta">
        <span>Computer Science</span>
        <span>Math • Projects</span>
      </div>
    </div>
  </div>
</section>

<h2 class="section-title">Explore</h2>
<section class="cardgrid">
  <div class="card">
    <h3>About</h3>
    <p>My background, achievements, and interests.</p>
    <a href="{{ '/about/' | relative_url }}">Open →</a>
  </div>

  <div class="card">
    <h3>Projects</h3>
    <p>My work, demos, and what I learned from building.</p>
    <a href="{{ '/projects/' | relative_url }}">Open →</a>
  </div>

  <div class="card">
    <h3>Profiles</h3>
    <p>Find my GitHub and Codecademy from the footer icons.</p>
    <a href="{{ '/about/' | relative_url }}">Open →</a>
  </div>
</section>
