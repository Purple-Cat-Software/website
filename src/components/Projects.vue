<script setup lang="ts">
const projects = [
  {
    id: 1,
    name: 'NovaDash Analytics',
    tag: 'Web App',
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)',
    description: 'A real-time analytics dashboard for SaaS businesses, turning raw data into actionable visual insights with zero configuration needed.',
    url: '#nova-dash',
  },
  {
    id: 2,
    name: 'Felis Commerce',
    tag: 'E-Commerce',
    emoji: '🛍️',
    gradient: 'linear-gradient(135deg, #2d1b69, #4c1d95)',
    description: 'A headless commerce platform built for scale. Lightning-fast storefronts with deep personalisation and seamless payment flows.',
    url: '#felis-commerce',
  },
  {
    id: 3,
    name: 'Velvet CRM',
    tag: 'SaaS',
    emoji: '🤝',
    gradient: 'linear-gradient(135deg, #1a0f30, #3b0764)',
    description: 'A CRM that actually makes sales teams smile. Built with automation-first thinking, AI suggestions, and a pipeline view that anyone can master.',
    url: '#velvet-crm',
  },
  {
    id: 4,
    name: 'Purr Mobile',
    tag: 'Mobile App',
    emoji: '📱',
    gradient: 'linear-gradient(135deg, #3b0764, #6d28d9)',
    description: 'Cross-platform mobile applications crafted with React Native. Native performance, pixel-perfect UI, delivered on time.',
    url: '#purr-mobile',
  },
  {
    id: 5,
    name: 'Whisker AI',
    tag: 'AI / ML',
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #1c1917, #2d1b69)',
    description: 'An intelligent document processing engine that reads, classifies, and extracts structured data from unstructured PDFs at scale.',
    url: '#whisker-ai',
  },
  {
    id: 6,
    name: 'CloudPaw DevOps',
    tag: 'Infrastructure',
    emoji: '☁️',
    gradient: 'linear-gradient(135deg, #0c4a6e, #1e1b4b)',
    description: 'Infrastructure-as-code tooling and CI/CD pipelines that reduce deployment risk and get your team shipping with confidence.',
    url: '#cloudpaw',
  },
]
</script>

<template>
  <section class="section-projects">
    <div class="section-inner" style="max-width:1100px;">
      <p class="section-label">Our Work</p>
      <h2 class="section-heading">Projects</h2>

      <div class="projects-grid">
        <a
          v-for="project in projects"
          :key="project.id"
          :href="project.url"
          class="project-card"
          target="_blank"
          rel="noopener"
        >
          <div
            class="project-img-placeholder"
            :style="{ background: project.gradient }"
          >
            {{ project.emoji }}
            <div class="project-overlay">→</div>
          </div>
          <div class="project-body">
            <span class="project-tag">{{ project.tag }}</span>
            <div class="project-name">{{ project.name }}</div>
            <p class="project-desc">{{ project.description }}</p>
            <div class="project-arrow">
              View project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
