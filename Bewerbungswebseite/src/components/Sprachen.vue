<template>
  <section class="projekt-section">
    <div class="projekt-container">
      <router-link to="/" class="back-button">← Zurück zur Startseite</router-link>
      <h1 class="page-title">Sprachen</h1>
      <p class="info-text">
        Auf dieser Seite sehen Sie welche Sprachen ich spreche: <br />
        Englisch, Deutsch, Italienisch und Französisch
      </p>
      <div class="cambridge-svg-wrapper">
        <h3 class="english-title">Englisch</h3>
        <div class="info-row">
          <div class="info-box">Result:<br />Pass at Grade A</div>
          <div class="info-box">Overall Score:<br />{{ overallScore }}</div>
          <div class="info-box">CEFR Level:<br />{{ cefrLevel }}</div>
        </div>
        <svg :viewBox="viewBox" class="cambridge-svg">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="18"
            fill="#fff"
            stroke="#e0e0e0"
            stroke-width="2"
          />

          <!-- Desktop View -->
          <g v-if="!isMobile">
            <!-- Scale/Ruler -->
            <g>
              <text x="10" y="60" class="scale-label">CEFR Level</text>
              <text x="160" y="60" class="scale-label">Cambridge English Scale</text>
              <rect x="120" y="100" width="70" height="210" fill="#e0e0e0" opacity="0.7" />
              <line x1="60" y1="130" x2="190" y2="130" class="scale-line-dashed" />
              <line x1="60" y1="190" x2="190" y2="190" class="scale-line-dashed" />
              <line x1="60" y1="250" x2="190" y2="250" class="scale-line-dashed" />
              <text x="45" y="138" class="cefr-label" text-anchor="end">C1</text>
              <text x="45" y="198" class="cefr-label" text-anchor="end">B2</text>
              <text x="45" y="258" class="cefr-label" text-anchor="end">B1</text>
              <text x="195" y="100" class="scale-number" text-anchor="start">190</text>
              <text x="195" y="130" class="scale-number" text-anchor="start">180</text>
              <text x="195" y="190" class="scale-number" text-anchor="start">160</text>
              <text x="195" y="250" class="scale-number" text-anchor="start">140</text>
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
            <!-- Bars and Labels -->
            <g v-for="bar in chartData" :key="bar.label">
              <rect
                :x="bar.x"
                :y="bar.y"
                :width="bar.width"
                :height="bar.height"
                fill="#e76f51"
                rx="6"
              />
              <text :x="bar.valueX" :y="bar.valueY" class="bar-value" text-anchor="middle">
                {{ Math.round(bar.animatedValue) }}
              </text>
              <text :x="bar.labelX" :y="bar.labelY" class="bar-label" text-anchor="middle">
                {{ bar.label }}
              </text>
            </g>
          </g>

          <!-- Mobile View -->
          <g v-if="isMobile">
            <!-- Scale -->
            <text x="50%" y="40" class="scale-label" text-anchor="middle">
              Cambridge English Scale
            </text>
            <line x1="130" y1="55" x2="360" y2="55" class="scale-line" />
            <g v-for="score in [120, 140, 160, 180, 190]" :key="score">
              <line
                :x1="130 + ((score - 120) / 70) * 230"
                y1="55"
                :x2="130 + ((score - 120) / 70) * 230"
                y2="600"
                class="scale-line-dashed"
              />
              <text
                :x="130 + ((score - 120) / 70) * 230"
                y="70"
                class="scale-number"
                text-anchor="middle"
              >
                {{ score }}
              </text>
            </g>
            <!-- Bars and Labels -->
            <g v-for="bar in chartData" :key="bar.label">
              <rect
                :x="bar.x"
                :y="bar.y"
                :width="bar.width"
                :height="bar.height"
                fill="#e76f51"
                rx="6"
              />
              <text :x="bar.labelX" :y="bar.labelY" class="bar-label" text-anchor="end">
                {{ bar.label }}
              </text>
              <text :x="bar.valueX" :y="bar.valueY" class="bar-value" text-anchor="start">
                {{ Math.round(bar.animatedValue) }}
              </text>
            </g>
          </g>
        </svg>
      </div>
      <div class="english-text">
        <p>
          Die Grafik zeigt meine Ergebnisse des Cambridge English Tests. Ich habe den Test im Juli
          2025 absolviert und ich bin sehr zufrieden mit den Ergebnissen. <br />
          Das Zertifikat können Sie auf <a href="/#kontakt">Anfrage</a> erhalten.
        </p>
      </div>

      <div class="language-box">
        <h3>Deutsch</h3>
        <p>
          Deutsch ist meine Muttersprache. Ich habe in Sprache und Kommunikation einen 5.5. Zeugnis
          auf <a href="/#kontakt">Anfrage</a> erhalten.
        </p>
      </div>
      <div class="language-box">
        <h3>Italienisch</h3>
        <p>
          Ich spreche mit meiner erweiterten Familie Italienisch, habe aber keine formale Ausbildung
          in der Sprache.
        </p>
      </div>
      <div class="language-box">
        <h3>Französisch</h3>
        <p>
          Ich habe Französisch in der Schule gelernt und das Niveau A in der Sekundarstufe mit der
          Note 5 bestanden.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sprachen',
  setup() {
    const scores = ref([
      { label: 'Reading', value: 190 },
      { label: 'Use of English', value: 179 },
      { label: 'Writing', value: 175 },
      { label: 'Listening', value: 190 },
      { label: 'Speaking', value: 186 },
    ])

    const animatedScores = ref(scores.value.map((s) => ({ ...s, animatedValue: 0 })))

    const isMobile = ref(window.innerWidth <= 768)

    const viewBox = computed(() => (isMobile.value ? '0 0 450 620' : '0 0 900 440'))

    const updateScreenSize = () => {
      isMobile.value = window.innerWidth <= 768
    }

    const runAnimation = () => {
      gsap.to(animatedScores.value, {
        animatedValue: (i) => scores.value[i].value,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.1,
        onUpdate: function () {
          // This is a bit of a hack to force Vue to re-render
          // during the animation. It works by updating the reference.
          animatedScores.value = [...animatedScores.value]
        },
      })
    }

    onMounted(() => {
      window.addEventListener('resize', updateScreenSize)
      runAnimation()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateScreenSize)
    })

    const chartData = computed(() => {
      const scaleMin = 120
      const scaleMax = 190

      if (isMobile.value) {
        // Mobile layout calculations
        const yPositions = [100, 180, 260, 340, 420]
        const barHeight = 40
        const chartMinX = 130
        const chartWidth = 230 // Reduced to create space for labels

        return animatedScores.value.map((score, index) => {
          const barWidth = ((score.animatedValue - scaleMin) / (scaleMax - scaleMin)) * chartWidth
          const y = yPositions[index]
          return {
            ...score,
            x: chartMinX,
            y: y,
            width: barWidth,
            height: barHeight,
            labelX: chartMinX - 15,
            labelY: y + barHeight / 2 + 5,
            valueX: chartMinX + barWidth + 10, // Position value to the right of the bar
            valueY: y + barHeight / 2 + 5,
          }
        })
      } else {
        // Desktop layout calculations
        const scaleTop = 100 // y-position for 190
        const scaleBottom = 310 // y-position for 120 (approx)
        const scaleHeight = scaleBottom - scaleTop // 210

        return animatedScores.value.map((score, index) => {
          const valueClamped = Math.max(120, Math.min(score.animatedValue, 190))
          const rel = (valueClamped - 120) / (190 - 120)
          const barY = scaleBottom - rel * scaleHeight
          const barHeight = scaleBottom - barY

          return {
            ...score,
            x: 250 + index * 140,
            y: barY,
            width: 40,
            height: barHeight,
            labelX: 250 + index * 140 + 20,
            labelY: 330,
            valueX: 250 + index * 140 + 20,
            valueY: barY - 10,
          }
        })
      }
    })

    const overallScore = computed(() => {
      const total = scores.value.reduce((acc, score) => acc + score.value, 0)
      return Math.round(total / scores.value.length)
    })

    const cefrLevel = computed(() => {
      const score = overallScore.value
      if (score >= 180) return 'C1'
      if (score >= 160) return 'B2'
      if (score >= 140) return 'B1'
      return 'N/A'
    })

    return {
      isMobile,
      viewBox,
      chartData,
      overallScore,
      cefrLevel,
    }
  },
}
</script>

<style scoped>
.projekt-section {
  padding: 2rem 1rem;
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
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  text-align: center;
}

.english-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #14471e;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  text-align: center;
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cambridge-svg {
  width: 100%;
  height: auto;
  display: block;
  font-family: Arial, sans-serif;
}

.scale-label {
  font-size: 15px;
  font-weight: bold;
}

.cefr-label {
  font-size: 22px;
  font-weight: bold;
  fill: #111;
  text-anchor: end;
}

.scale-number {
  font-size: 13px;
  font-weight: bold;
  fill: #111;
}

.scale-line-dashed {
  stroke: #888;
  stroke-dasharray: 4, 4;
}

.scale-line {
  stroke: #888;
  stroke-width: 2;
}

.bar-label {
  font-size: 16px;
  fill: #333;
  font-weight: bold;
}

.bar-value {
  font-size: 15px;
  font-weight: bold;
  fill: #e76f51;
}

.language-box {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 1.2rem 1.5rem;
  margin: 2rem auto;
  max-width: 650px;
  text-align: left;
}

.language-box h3 {
  margin-top: 0;
  margin-bottom: 0.7rem;
  color: #14471e;
  font-size: 1.3rem;
  text-align: center;
}

.language-box p {
  color: #555;
  font-size: 1.08rem;
  margin-bottom: 0;
}

.english-text {
  max-width: 650px;
  margin: 2rem auto 0 auto;
  text-align: left;
}

.language-box a,
.language-box .router-link,
.english-text a,
.english-text .router-link {
  color: #68904d;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s;
}
.language-box a:hover,
.language-box .router-link:hover,
.english-text a:hover,
.english-text .router-link:hover {
  color: #14471e;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .info-row {
    flex-direction: column;
    padding: 0;
  }

  .cambridge-svg-wrapper {
    padding: 0.5rem;
  }

  .bar-label {
    font-size: 14px;
  }

  .bar-value {
    font-size: 14px;
  }

  .scale-label {
    font-size: 14px;
  }

  .english-text {
    margin: 2rem auto 0 auto;
    max-width: 650px;
    background: #fafafa;
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
    padding: 1rem;
  }

  .language-box {
    margin: 2rem auto;
    max-width: 650px;
    background: #fafafa;
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
    padding: 1rem;
    text-align: center;
  }
}
</style>
