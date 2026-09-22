/**
 * Small Glowing Black Heart Interactive Story Engine
 * Features a 3D Depth Layered Dark Heart Galaxy Canvas (150+ Hearts & Starlight Dust)
 */

let currentPage = 1;

document.addEventListener('DOMContentLoaded', () => {
    initPageSequence(1);
    initDarkHeartGalaxy();
    initAudioSynth();
});

// Navigation Engine across 8 Full-Screen Pages
function nextPage(pageNum) {
    const activePageEl = document.querySelector(`.page.active`);
    const targetPageEl = document.getElementById(`page-${pageNum}`);
    const heartContainer = document.getElementById('heartContainer');

    if (!targetPageEl || pageNum === currentPage) return;

    // Subtle scale heartbeat transition effect
    if (heartContainer) {
        heartContainer.style.transform = 'translate(-50%, -50%) scale(1.08)';
        setTimeout(() => {
            heartContainer.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 700);
    }

    // Fade out active page
    if (activePageEl) {
        activePageEl.classList.remove('active');
    }

    currentPage = pageNum;

    // Fade in target page after transition delay
    setTimeout(() => {
        targetPageEl.classList.add('active');
        initPageSequence(pageNum);
    }, 450);
}

// Final Action: Redirect to Google Chat in the same tab
function redirectToChat() {
    window.location.href = 'https://chat.google.com/';
}

// Page-specific Timed Reveal Sequences
function initPageSequence(pageNum) {
    switch(pageNum) {
        case 1:
            // Page 1: "Hey..." -> "Can I steal a minute?" -> "Okay 🖤"
            setTimeout(() => {
                const el = document.querySelector('.p1-line-1');
                if (el) el.classList.add('show-reveal');
            }, 500);

            setTimeout(() => {
                const el = document.querySelector('.p1-line-2');
                if (el) el.classList.add('show-reveal');
            }, 2000);

            setTimeout(() => {
                const el = document.querySelector('.p1-line-3');
                if (el) el.classList.add('show-reveal');
            }, 3500);
            break;

        case 4:
            // Page 4: "Maybe..." -> "You're right." -> "I miss you. 🖤" -> "A little more than I want to admit." -> Button
            setTimeout(() => {
                const el = document.querySelector('.p4-line-1');
                if (el) el.classList.add('show-reveal');
            }, 500);

            setTimeout(() => {
                const el = document.querySelector('.p4-line-2');
                if (el) el.classList.add('show-reveal');
            }, 2000);

            setTimeout(() => {
                const el = document.querySelector('.p4-line-3');
                if (el) el.classList.add('show-reveal');

                const heartContainer = document.getElementById('heartContainer');
                if (heartContainer) {
                    heartContainer.style.transform = 'translate(-50%, -50%) scale(1.12)';
                    setTimeout(() => {
                        heartContainer.style.transform = 'translate(-50%, -50%) scale(1)';
                    }, 2200);
                }
            }, 3600);

            setTimeout(() => {
                const el = document.querySelector('.p4-line-4');
                if (el) el.classList.add('show-reveal');
            }, 5400);

            setTimeout(() => {
                const el = document.querySelector('.p4-line-5');
                if (el) el.classList.add('show-reveal');
            }, 6800);
            break;

        case 6:
            // Page 6: "I don't need a perfect moment." -> "I don't need perfect words." -> "I just want..." -> "US. 🖤" -> "Whenever you're ready." -> Button
            setTimeout(() => {
                const el = document.querySelector('.p6-line-1');
                if (el) el.classList.add('show');
            }, 500);

            setTimeout(() => {
                const el = document.querySelector('.p6-line-2');
                if (el) el.classList.add('show');
            }, 2000);

            setTimeout(() => {
                const el = document.querySelector('.p6-line-3');
                if (el) el.classList.add('show');
            }, 3500);

            setTimeout(() => {
                const el = document.querySelector('.p6-line-4');
                if (el) el.classList.add('show-reveal');
            }, 5000);

            setTimeout(() => {
                const el = document.querySelector('.p6-line-5');
                if (el) el.classList.add('show-reveal');
            }, 6600);

            setTimeout(() => {
                const el = document.querySelector('.p6-line-6');
                if (el) el.classList.add('show-reveal');
            }, 8000);
            break;

        case 7:
            // Page 7: "No matter how many days pass..." -> "No matter how quiet it gets..." -> "You'll always mean something to me." -> Button
            setTimeout(() => {
                const el = document.querySelector('.p7-line-1');
                if (el) el.classList.add('show-reveal');
            }, 600);

            setTimeout(() => {
                const el = document.querySelector('.p7-line-2');
                if (el) el.classList.add('show-reveal');
            }, 2200);

            setTimeout(() => {
                const el = document.querySelector('.p7-line-3');
                if (el) el.classList.add('show-reveal');
            }, 3800);

            setTimeout(() => {
                const el = document.querySelector('.p7-line-4');
                if (el) el.classList.add('show-reveal');
            }, 5400);
            break;

        case 8:
            // Page 8 (Final Climax - LOVE):
            const heartContainer = document.getElementById('heartContainer');
            if (heartContainer) {
                heartContainer.style.transform = 'translate(-50%, -50%) scale(1.15)';
            }

            setTimeout(() => {
                const el = document.querySelector('.p8-line-1');
                if (el) el.classList.add('show');
            }, 800);

            setTimeout(() => {
                const el = document.querySelector('.p8-line-2');
                if (el) el.classList.add('show');
            }, 2400);

            setTimeout(() => {
                const el = document.querySelector('.p8-line-3');
                if (el) el.classList.add('show');
            }, 4200);

            setTimeout(() => {
                const el = document.querySelector('.p8-line-4');
                if (el) el.classList.add('show');
            }, 5800);

            setTimeout(() => {
                const el = document.querySelector('.p8-line-5');
                if (el) el.classList.add('show');
            }, 7200);
            break;
    }
}

// ==========================================================================
// DYNAMIC 3D DEPTH-LAYERED DARK HEART GALAXY CANVAS ENGINE
// ==========================================================================
function initDarkHeartGalaxy() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    // Helper: Draw heart shape onto canvas
    function drawHeart(ctx, x, y, width, height) {
        ctx.beginPath();
        const topCurveHeight = height * 0.3;
        ctx.moveTo(x, y + topCurveHeight);
        ctx.bezierCurveTo(x, y, x - width / 2, y, x - width / 2, y + topCurveHeight);
        ctx.bezierCurveTo(x - width / 2, y + (height + topCurveHeight) / 2, x, y + height, x, y + height);
        ctx.bezierCurveTo(x, y + height, x + width / 2, y + (height + topCurveHeight) / 2, x + width / 2, y + topCurveHeight);
        ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);
        ctx.closePath();
    }

    // Particle pool: 160 hearts + 120 fine starlight dust specks
    const hearts = [];
    const dustParticles = [];
    const totalHearts = Math.min(width < 600 ? 100 : 170, 200);
    const totalDust = 120;

    // Dark color palette (Charcoal, dark gray, muted silver-black, faint purple/red aura)
    const darkPalettes = [
        { fill: '#0a0a0f', stroke: '#1c1c26' },
        { fill: '#121218', stroke: '#2a2a38' },
        { fill: '#1a1a24', stroke: '#3a3a4c' },
        { fill: '#242430', stroke: '#4a4a60' },
        { fill: '#16101c', stroke: '#382645' }, // faint dark purple tint
        { fill: '#1c1014', stroke: '#42242d' }  // faint dark red tint
    ];

    class GalaxyHeart {
        constructor(layerIndex) {
            this.layer = layerIndex; // 0 = Background (heavy blur), 1 = Middle, 2 = Foreground
            this.reset(true);
        }

        reset(isInitial = false) {
            this.x = Math.random() * width;
            this.y = isInitial ? Math.random() * height : height + 30;
            
            // Layer-based size, speed, blur, and opacity
            if (this.layer === 0) { // Deep Background Bokeh
                this.size = Math.random() * 10 + 6;
                this.speedY = -(Math.random() * 0.15 + 0.04);
                this.speedX = (Math.random() - 0.5) * 0.08;
                this.opacity = Math.random() * 0.18 + 0.05;
                this.blur = Math.random() * 6 + 4;
            } else if (this.layer === 1) { // Middle Floating Layer
                this.size = Math.random() * 14 + 12;
                this.speedY = -(Math.random() * 0.25 + 0.1);
                this.speedX = (Math.random() - 0.5) * 0.12;
                this.opacity = Math.random() * 0.28 + 0.12;
                this.blur = Math.random() * 3 + 1;
            } else { // Foreground Crisp/Glow Layer
                this.size = Math.random() * 18 + 22;
                this.speedY = -(Math.random() * 0.35 + 0.15);
                this.speedX = (Math.random() - 0.5) * 0.18;
                this.opacity = Math.random() * 0.35 + 0.15;
                this.blur = Math.random() * 1.5;
            }

            this.rotation = (Math.random() - 0.5) * 0.4;
            this.rotSpeed = (Math.random() - 0.5) * 0.003;
            this.palette = darkPalettes[Math.floor(Math.random() * darkPalettes.length)];
            this.pulsePhase = Math.random() * Math.PI * 2;
            this.pulseSpeed = Math.random() * 0.015 + 0.005;
            this.isOutlined = Math.random() < 0.25; // 25% outlined hearts like reference image
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotSpeed;
            this.pulsePhase += this.pulseSpeed;

            if (this.y < -40 || this.x < -40 || this.x > width + 40) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            const currentOpacity = Math.max(0, Math.min(0.6, this.opacity + Math.sin(this.pulsePhase) * 0.06));
            ctx.globalAlpha = currentOpacity;

            if (this.blur > 0) {
                ctx.shadowBlur = this.blur * 2;
                ctx.shadowColor = this.palette.stroke;
            }

            drawHeart(ctx, 0, 0, this.size, this.size);

            if (this.isOutlined) {
                ctx.strokeStyle = this.palette.stroke;
                ctx.lineWidth = 1;
                ctx.stroke();
            } else {
                ctx.fillStyle = this.palette.fill;
                ctx.fill();
                ctx.strokeStyle = this.palette.stroke;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }

            ctx.restore();
        }
    }

    class StarlightDust {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 1.2 + 0.3;
            this.speedY = -(Math.random() * 0.2 + 0.05);
            this.opacity = Math.random() * 0.4 + 0.1;
            this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        }

        update() {
            this.y += this.speedY;
            this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.004;

            if (this.y < -10) {
                this.y = height + 10;
                this.x = Math.random() * width;
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = Math.max(0, Math.min(0.5, this.opacity));
            ctx.fillStyle = '#ffffff';
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Populate 3 depth layers
    const bgCount = Math.floor(totalHearts * 0.55);
    const midCount = Math.floor(totalHearts * 0.32);
    const fgCount = totalHearts - bgCount - midCount;

    for (let i = 0; i < bgCount; i++) hearts.push(new GalaxyHeart(0));
    for (let i = 0; i < midCount; i++) hearts.push(new GalaxyHeart(1));
    for (let i = 0; i < fgCount; i++) hearts.push(new GalaxyHeart(2));

    for (let i = 0; i < totalDust; i++) dustParticles.push(new StarlightDust());

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Draw fine starlight dust
        dustParticles.forEach(d => {
            d.update();
            d.draw();
        });

        // Draw 3 layers of hearts
        hearts.forEach(h => {
            h.update();
            h.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Optional Ambient Atmosphere Synthesizer (Web Audio API)
function initAudioSynth() {
    const audioToggle = document.getElementById('audioToggle');
    if (!audioToggle) return;

    let audioCtx = null;
    let isPlaying = false;
    let gainNode = null;

    audioToggle.addEventListener('click', () => {
        if (!isPlaying) {
            startSoundscape();
            audioToggle.classList.add('active');
            audioToggle.querySelector('.audio-text').textContent = 'Music ON 🖤';
        } else {
            stopSoundscape();
            audioToggle.classList.remove('active');
            audioToggle.querySelector('.audio-text').textContent = 'Music';
        }
        isPlaying = !isPlaying;
    });

    function startSoundscape() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.09, audioCtx.currentTime + 4);

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 320;

        gainNode.connect(filter);
        filter.connect(audioCtx.destination);

        const frequencies = [220, 261.63, 329.63];
        frequencies.forEach(freq => {
            const osc = audioCtx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            osc.connect(gainNode);
            osc.start();
        });
    }

    function stopSoundscape() {
        if (gainNode && audioCtx) {
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
            setTimeout(() => {
                audioCtx.suspend();
            }, 1000);
        }
    }
}
