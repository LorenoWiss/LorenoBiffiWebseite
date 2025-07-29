<template>
  <section class="projekt-section">
    <div class="projekt-container">
      <router-link to="/" class="back-button">← Zurück zur Startseite</router-link>
      <h1 class="page-title">Sprachen</h1>
      <p class="info-text">

      </p>
              <div class="cambridge-svg-wrapper">
        <div class="info-row">
          <div class="info-box">Result:<br>Pass at Grade A</div>
          <div class="info-box">Overall Score:<br>184</div>
          <div class="info-box">CEFR Level:<br>C1</div>
        </div>
        <svg viewBox="0 0 900 440" class="cambridge-svg">
          <rect x="0" y="0" width="900" height="440" rx="18" fill="#fff" stroke="#e0e0e0" stroke-width="2" />
          <g transform="translate(0,50)">
            <g>
              <text x="10" y="60" font-size="15" font-family="Arial, sans-serif" font-weight="bold">CEFR Level</text>
              <text x="160" y="60" font-size="15" font-family="Arial, sans-serif" font-weight="bold">Cambridge English Scale</text>
              <rect x="120" y="100" width="70" height="210" fill="#e0e0e0" opacity="0.7" />
              <line x1="60" y1="130" x2="190" y2="130" stroke="#888" stroke-dasharray="4,4" />
              <line x1="60" y1="190" x2="190" y2="190" stroke="#888" stroke-dasharray="4,4" />
              <line x1="60" y1="250" x2="190" y2="250" stroke="#888" stroke-dasharray="4,4" />
              <text x="45" y="138" font-size="22" font-family="Arial, sans-serif" font-weight="bold" fill="#111" text-anchor="end">C1</text>
              <text x="45" y="198" font-size="22" font-family="Arial, sans-serif" font-weight="bold" fill="#111" text-anchor="end">B2</text>
              <text x="45" y="258" font-size="22" font-family="Arial, sans-serif" font-weight="bold" fill="#111" text-anchor="end">B1</text>
              <text x="195" y="100" font-size="13" font-family="Arial, sans-serif" font-weight="bold" fill="#111" text-anchor="start">190</text>
              <text x="195" y="130" font-size="13" font-family="Arial, sans-serif" font-weight="bold" fill="#111" text-anchor="start">180</text>
              <text x="195" y="190" font-size="13" font-family="Arial, sans-serif" font-weight="bold" fill="#111" text-anchor="start">160</text>
              <text x="195" y="250" font-size="13" font-family="Arial, sans-serif" font-weight="bold" fill="#111" text-anchor="start">140</text>
              <g stroke="#888">
                <line x1="120" y1="100" x2="190" y2="100" stroke-width="2" />
                <line x1="120" y1="130" x2="190" y2="130" stroke-width="2" />
                <line x1="120" y1="160" x2="190" y2="160" stroke-width="2" />
                <line x1="120" y1="190" x2="190" y2="190" stroke-width="2" />
                <line x1="120" y1="220" x2="190" y2="220" stroke-width="2" />
                <line x1="120" y1="250" x2="190" y2="250" stroke-width="2" />
                <line x1="120" y1="310" x2="190" y2="310" stroke-width="2" />
                <line x1="150" y1="115" x2="190" y2="115" stroke-width="1" />
                <line x1="150" y1="145" x2="190" y2="145" stroke-width="1" />
                <line x1="150" y1="175" x2="190" y2="175" stroke-width="1" />
                <line x1="150" y1="205" x2="190" y2="205" stroke-width="1" />
                <line x1="150" y1="235" x2="190" y2="235" stroke-width="1" />
                <line x1="150" y1="265" x2="190" y2="265" stroke-width="1" />
              </g>
            </g>
            <g>
              <rect
                v-for="(bar, i) in bars"
                :key="bar.label"
                :x="bar.x"
                :y="bar.animatedY + 20"
                :width="40"
                :height="bar.animatedHeight"
                fill="#e76f51"
                rx="6"
              />
            </g>
            <g font-size="15" font-weight="bold" fill="#e76f51" text-anchor="middle">
              <text
                v-for="(bar, i) in bars"
                :key="bar.label + '-value'"
                :x="bar.x + 20"
                :y="bar.animatedY + 10"
              >{{ bar.value }}</text>
            </g>
            <g font-size="16" fill="#333" font-family="Arial, sans-serif" font-weight="bold">
              <text
                v-for="(bar, i) in bars"
                :key="bar.label + '-label'"
                :x="bar.x + 20"
                y="355"
                text-anchor="middle"
              >{{ bar.label }}</text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MeineSprachen',
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    // SVG chart constants for Cambridge scale (120–190)
    const scaleTop = 80;    // y-position for 190
    const scaleBottom = 290; // y-position for 120
    const scaleHeight = scaleBottom - scaleTop; // 210
    const minScore = 120;
    const maxScore = 190;
    // Bar data
    const bars = [
      { label: 'Reading', value: 190, x: 250 },
      { label: 'Use of English', value: 179, x: 390 },
      { label: 'Writing', value: 175, x: 530 },
      { label: 'Listening', value: 190, x: 670 },
      { label: 'Speaking', value: 186, x: 810 },
    ].map(bar => ({
      ...bar,
      animatedHeight: 0,
      animatedY: scaleBottom,
    }));
    return {
      bars,
      scaleTop,
      scaleBottom,
      scaleHeight,
      minScore,
      maxScore,
    };
  },
  mounted() {
    this.animateBars();
  },
  methods: {
    animateBars() {
      const duration = 900; // ms
      const start = performance.now();
      const scaleTop = this.scaleTop;
      const scaleBottom = this.scaleBottom;
      const scaleHeight = this.scaleHeight;
      const minScore = this.minScore;
      const maxScore = this.maxScore;
      const bars = this.bars;
      const animate = now => {
        const elapsed = Math.min((now - start) / duration, 1);
        bars.forEach(bar => {
          // Calculate bar height and y so that 120 = bottom, 190 = top
          const valueClamped = Math.max(minScore, Math.min(bar.value, maxScore));
          const rel = (valueClamped - minScore) / (maxScore - minScore);
          const barY = scaleBottom - rel * scaleHeight;
          const barHeight = (scaleBottom - barY);
          bar.animatedHeight = barHeight * elapsed;
          bar.animatedY = scaleBottom - bar.animatedHeight;
        });
        if (elapsed < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final state
          bars.forEach(bar => {
            const valueClamped = Math.max(minScore, Math.min(bar.value, maxScore));
            const rel = (valueClamped - minScore) / (maxScore - minScore);
            const barY = scaleBottom - rel * scaleHeight;
            const barHeight = (scaleBottom - barY);
            bar.animatedHeight = barHeight;
            bar.animatedY = scaleBottom - bar.animatedHeight;
          });
        }
      };
      requestAnimationFrame(animate);
    },
  },
  metaInfo() {
    return {
      title: this.pageTitle + ' - Loreno Biffi',
    }
  },
};
</script>

<style scoped>
.projekt-section {
  padding: 2rem 5%;
  max-width: 800px;
  margin: 0 auto;
}

.back-button {
  display: inline-block;
  margin-bottom: 1.5rem;
  text-decoration: none;
  color: #68904d;
  font-weight: 500;
  transition: color 0.3s;
}

.back-button:hover {
  color: #14471e;
}

.page-title {
  font-size: 2rem;
  color: #14471e;
  margin-bottom: 1rem;
  text-align: center;
}

.info-text {
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  line-height: 1.6;
}

.cambridge-svg-wrapper {
  margin: 2rem auto 0 auto;
  max-width: 650px;
  background: #fafafa;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 1rem;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
  padding: 0 1rem;
}

.info-box {
  background: #e76f51;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  font-weight: 600;
  flex: 1;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-box br + * {
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 0.2rem;
}

.cambridge-svg {
  width: 100%;
  height: auto;
  display: block;
}
</style>

/* Cambridge-style summary boxes */
.cambridge-summary-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 2.5rem;
  margin-bottom: 1.2rem;
  background: #fff;
  padding: 0.5rem 0;
  border-radius: 8px;
}
.cambridge-summary-box {
  background: #e76f51;
  color: #fff;
  border-radius: 6px;
  border: 2px solid #d35439;
  min-width: 200px;
  max-width: 220px;
  height: 62px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.2rem 0.7rem 1.2rem;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  gap: 1.2rem;
}
.cambridge-summary-box-row {
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-between !important;
}
.cambridge-summary-title {
  color: #111;
  font-size: 1.08rem;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-align: left;
}
.cambridge-summary-value {
  font-size: 1.45rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
  text-align: right;
}
.cambridge-summary-value-bold {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
  text-align: right;
}
