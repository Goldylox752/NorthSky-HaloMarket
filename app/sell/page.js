```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>V168 AERIAL — V168 GPS Drone | Factory Direct $100 Offer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
          colors: {
            obsidian: '#0B0F19',
            slatecard: '#111827',
            cyanaccent: '#0EA5E9',
          },
        },
      },
    };
  </script>
  <style>
    /* Subtle custom animations for the hero drone and radar rings */
    @keyframes floatDrone {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(0.8deg); }
    }
    @keyframes spinProp {
      0% { transform: scaleX(1); opacity: 0.85; }
      50% { transform: scaleX(0.15); opacity: 0.35; }
      100% { transform: scaleX(1); opacity: 0.85; }
    }
    @keyframes pulseBeacon {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.25; transform: scale(1.4); }
    }
    @keyframes orbitDot {
      0% { transform: rotate(0deg) translateX(74px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(74px) rotate(-360deg); }
    }
    .drone-float {
      animation: floatDrone 4.8s ease-in-out infinite;
    }
    .prop-blur {
      transform-origin: center;
      animation: spinProp 0.14s linear infinite;
    }
    .beacon-led {
      transform-origin: center;
      animation: pulseBeacon 1.6s ease-in-out infinite;
    }
    .orbit-sim {
      animation: orbitDot 6s linear infinite;
    }
    /* Custom scrollbar for dark mode */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #0B0F19;
    }
    ::-webkit-scrollbar-thumb {
      background: #1E293B;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #0EA5E9;
    }
  </style>
</head>
<body class="bg-[#0B0F19] text-white font-sans antialiased selection:bg-[#0EA5E9] selection:text-white overflow-x-hidden">

  <!-- Top Direct-Factory Deal Banner -->
  <div class="bg-gradient-to-r from-sky-600 via-[#0EA5E9] to-cyan-500 text-slate-950 text-xs sm:text-sm font-semibold py-2 px-4 text-center tracking-wide">
    <span>V168 GPS Drone: <span class="font-extrabold">$229 USD</span> Standard Flight Kit or <span class="font-extrabold">$249 USD</span> Creator Pro Kit • Tracked Shipping &amp; Dispatch Included</span>
  </div>

  <!-- 1. Sticky Navigation Bar -->
  <header class="sticky top-0 z-40 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-2.5 group">
        <div class="w-9 h-9 rounded-xl bg-[#0EA5E9]/15 border border-[#0EA5E9]/40 flex items-center justify-center group-hover:bg-[#0EA5E9]/25 transition">
          <svg class="w-5 h-5 text-[#0EA5E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 12L4 4m16 0l-8 8m0 0l-8 8m16 0l-8-8" stroke-linecap="round"/>
            <circle cx="4" cy="4" r="2.5"/>
            <circle cx="20" cy="4" r="2.5"/>
            <circle cx="4" cy="20" r="2.5"/>
            <circle cx="20" cy="20" r="2.5"/>
            <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="currentColor"/>
          </svg>
        </div>
        <div>
          <span class="font-extrabold tracking-wider text-base sm:text-lg text-white">V168 <span class="text-[#0EA5E9]">AERIAL</span></span>
          <span class="hidden sm:block text-[10px] uppercase tracking-[0.22em] text-slate-400 -mt-1">Direct Flight Systems</span>
        </div>
      </a>

      <!-- Quick Links -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#features" class="hover:text-[#0EA5E9] transition">Features</a>
        <a href="#flight-modes" class="hover:text-[#0EA5E9] transition">Flight Modes &amp; Specs</a>
        <a href="#in-the-box" class="hover:text-[#0EA5E9] transition">What's in the Box</a>
        <a href="#faq" class="hover:text-[#0EA5E9] transition">FAQ</a>
      </nav>

      <!-- Actions: Order Now + Live Cart Toggle -->
      <div class="flex items-center gap-2.5 sm:gap-3">
        <a href="#bundle-selector" class="hidden sm:inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-sky-400 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-[#0EA5E9]/25 transition transform active:scale-95">
          <span>Order Now — From $229 USD</span>
        </a>

        <button onclick="toggleCart(true)" aria-label="Open shopping cart" class="relative inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white px-3.5 py-2.5 rounded-xl transition cursor-pointer">
          <svg class="w-5 h-5 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span class="text-sm font-semibold hidden sm:inline">Cart</span>
          <span id="cart-badge" class="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-extrabold rounded-full bg-[#0EA5E9] text-slate-950">0</span>
        </button>
      </div>
    </div>
  </header>

  <!-- 2. Hero Section -->
  <section class="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
    <!-- Ambient Background Glows -->
    <div class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[780px] h-[420px] bg-[#0EA5E9]/15 blur-[130px] rounded-full"></div>
    <div class="pointer-events-none absolute top-40 right-0 w-80 h-80 bg-indigo-500/10 blur-[110px] rounded-full"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Hero Left Content -->
        <div class="lg:col-span-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 text-[#0EA5E9] text-xs font-semibold tracking-wide uppercase mb-6">
            <span class="w-2 h-2 rounded-full bg-[#0EA5E9] animate-ping"></span>
            Limited Direct-Factory Batch • Save $79
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white mb-5">
            Master the Sky. <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] via-sky-300 to-cyan-200">
              Capture Everything.
            </span>
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            Foldable quadcopter built with quiet brushless motors, satellite GPS return-to-home, optical flow hover stability, and autonomous flight modes—starting at <strong class="text-white font-bold">$229 USD</strong> (<strong class="text-[#0EA5E9] font-bold">$249 USD</strong> Creator Pro Kit) with transparent shipping and dispatch details.
          </p>

          <!-- Key Quick-Badges -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 max-w-xl mx-auto lg:mx-0">
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 text-center">
              <div class="text-xs font-bold text-white">Sub-249g</div>
              <div class="text-[11px] text-slate-400">Ultra-Light</div>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 text-center">
              <div class="text-xs font-bold text-[#0EA5E9]">GPS Return</div>
              <div class="text-[11px] text-slate-400">1-Key Safe Home</div>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 text-center">
              <div class="text-xs font-bold text-white">Brushless</div>
              <div class="text-[11px] text-slate-400">Wind-Resistant</div>
            </div>
            <div class="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 text-center">
              <div class="text-xs font-bold text-[#0EA5E9]">5G Wi-Fi FPV</div>
              <div class="text-[11px] text-slate-400">Live Phone Feed</div>
            </div>
          </div>

          <!-- Primary CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <button onclick="quickAddAndOpen('standard')" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0EA5E9] hover:bg-sky-400 text-slate-950 font-extrabold text-base px-7 py-4 rounded-2xl shadow-xl shadow-[#0EA5E9]/25 transition transform hover:-translate-y-0.5 cursor-pointer">
              <span>Order Standard Kit — $229 USD</span>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <a href="#bundle-selector" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base px-7 py-4 rounded-2xl transition">
              <span>Compare $229 &amp; $249 Kits</span>
            </a>
          </div>

          <div class="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              24–48h Dispatch • Tracked Shipping Included
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#0EA5E9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              30-Day Guarantee
            </span>
          </div>
        </div>

        <!-- Hero Right: Custom Sleek Vector / CSS Quadcopter Drone Illustration -->
        <div class="lg:col-span-6 relative flex items-center justify-center">
          <div class="relative w-full max-w-lg aspect-square flex items-center justify-center">
            <!-- Telemetry HUD Rings -->
            <div class="absolute inset-6 rounded-full border border-[#0EA5E9]/20 border-dashed"></div>
            <div class="absolute inset-16 rounded-full border border-white/10"></div>
            <div class="absolute w-64 h-64 rounded-full bg-[#0EA5E9]/10 blur-2xl"></div>

            <!-- Floating HUD Telemetry Pills -->
            <div class="absolute top-6 left-4 sm:left-6 bg-slate-900/90 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 shadow-lg z-20">
              <div class="text-[10px] uppercase tracking-wider text-slate-400">GPS Lock</div>
              <div class="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span> 16 Satellites Ready
              </div>
            </div>

            <div class="absolute bottom-8 right-4 sm:right-6 bg-slate-900/90 backdrop-blur-md border border-[#0EA5E9]/30 rounded-xl px-3.5 py-2 shadow-lg z-20">
              <div class="text-[10px] uppercase tracking-wider text-slate-400">Gimbal Tilt</div>
              <div class="text-xs font-bold text-[#0EA5E9]">90° Remote Adjustable</div>
            </div>

            <!-- Custom High-Detail Foldable Quadcopter Drone SVG -->
            <div class="drone-float relative z-10 w-full px-4">
              <svg viewBox="0 0 520 340" class="w-full h-auto drop-shadow-[0_25px_35px_rgba(14,165,233,0.28)]" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bodyGrad" x1="180" y1="110" x2="340" y2="230" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#334155"/>
                    <stop offset="50%" stop-color="#1E293B"/>
                    <stop offset="100%" stop-color="#0F172A"/>
                  </linearGradient>
                  <linearGradient id="armGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#475569"/>
                    <stop offset="100%" stop-color="#1E293B"/>
                  </linearGradient>
                  <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.9"/>
                    <stop offset="100%" stop-color="#0EA5E9" stop-opacity="0"/>
                  </radialGradient>
                </defs>

                <!-- Rear Left & Right Folding Arms -->
                <path d="M215 155 L105 95 L95 108 L205 172 Z" fill="url(#armGrad)" stroke="#64748B" stroke-width="1.2"/>
                <path d="M305 155 L415 95 L425 108 L315 172 Z" fill="url(#armGrad)" stroke="#64748B" stroke-width="1.2"/>

                <!-- Front Left & Right Folding Arms -->
                <path d="M210 185 L85 235 L95 250 L220 202 Z" fill="url(#armGrad)" stroke="#64748B" stroke-width="1.2"/>
                <path d="M310 185 L435 235 L425 250 L300 202 Z" fill="url(#armGrad)" stroke="#64748B" stroke-width="1.2"/>

                <!-- Brushless Motor Pods (4x) -->
                <g>
                  <!-- Rear Left Motor -->
                  <ellipse cx="98" cy="98" rx="16" ry="10" fill="#0F172A" stroke="#0EA5E9" stroke-width="1.5"/>
                  <ellipse cx="98" cy="94" rx="11" ry="6" fill="#334155"/>
                  <ellipse cx="98" cy="91" rx="68" ry="8" fill="url(#cyanGlow)" class="prop-blur"/>
                  <line x1="30" y1="91" x2="166" y2="91" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" class="prop-blur"/>

                  <!-- Rear Right Motor -->
                  <ellipse cx="422" cy="98" rx="16" ry="10" fill="#0F172A" stroke="#0EA5E9" stroke-width="1.5"/>
                  <ellipse cx="422" cy="94" rx="11" ry="6" fill="#334155"/>
                  <ellipse cx="422" cy="91" rx="68" ry="8" fill="url(#cyanGlow)" class="prop-blur"/>
                  <line x1="354" y1="91" x2="490" y2="91" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" class="prop-blur"/>

                  <!-- Front Left Motor -->
                  <ellipse cx="88" cy="240" rx="18" ry="11" fill="#0F172A" stroke="#0EA5E9" stroke-width="1.5"/>
                  <ellipse cx="88" cy="235" rx="12" ry="7" fill="#475569"/>
                  <circle cx="88" cy="252" r="4" fill="#0EA5E9" class="beacon-led"/>
                  <ellipse cx="88" cy="231" rx="76" ry="9" fill="url(#cyanGlow)" class="prop-blur"/>
                  <line x1="12" y1="231" x2="164" y2="231" stroke="#7DD3FC" stroke-width="2.5" stroke-linecap="round" class="prop-blur"/>

                  <!-- Front Right Motor -->
                  <ellipse cx="432" cy="240" rx="18" ry="11" fill="#0F172A" stroke="#0EA5E9" stroke-width="1.5"/>
                  <ellipse cx="432" cy="235" rx="12" ry="7" fill="#475569"/>
                  <circle cx="432" cy="252" r="4" fill="#0EA5E9" class="beacon-led"/>
                  <ellipse cx="432" cy="231" rx="76" ry="9" fill="url(#cyanGlow)" class="prop-blur"/>
                  <line x1="356" y1="231" x2="508" y2="231" stroke="#7DD3FC" stroke-width="2.5" stroke-linecap="round" class="prop-blur"/>
                </g>

                <!-- Main Aerodynamic Fuselage -->
                <path d="M260 112 C295 112 325 135 328 175 C330 205 305 228 260 228 C215 228 190 205 192 175 C195 135 225 112 260 112 Z" fill="url(#bodyGrad)" stroke="#475569" stroke-width="2"/>
                
                <!-- Top GPS Module Cap & Obstacle Sensor Turret -->
                <rect x="234" y="132" width="52" height="36" rx="12" fill="#0F172A" stroke="#0EA5E9" stroke-width="1.5"/>
                <circle cx="260" cy="150" r="8" fill="#0EA5E9" fill-opacity="0.25" stroke="#38BDF8" stroke-width="1.5"/>
                <circle cx="260" cy="150" r="3" fill="#38BDF8" class="beacon-led"/>

                <!-- V168 Accent Chevrons -->
                <path d="M225 182 L260 194 L295 182" stroke="#0EA5E9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <text x="260" y="175" text-anchor="middle" fill="#94A3B8" font-size="9" font-family="Inter, sans-serif" font-weight="700" letter-spacing="2">V168 GPS</text>

                <!-- Front Motorized Dual Camera Housing -->
                <rect x="236" y="212" width="48" height="26" rx="8" fill="#020617" stroke="#64748B" stroke-width="1.5"/>
                <circle cx="253" cy="225" r="8" fill="#0F172A" stroke="#0EA5E9" stroke-width="2"/>
                <circle cx="253" cy="225" r="3.5" fill="#38BDF8"/>
                <circle cx="271" cy="225" r="4" fill="#1E293B" stroke="#94A3B8" stroke-width="1"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 3. Bundle / Package Selector -->
  <section id="bundle-selector" class="py-16 sm:py-24 border-y border-white/10 bg-slate-950/60">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-[#0EA5E9] font-bold text-xs uppercase tracking-[0.2em]">Transparent USD Pricing &amp; Shipping</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-2">Choose Your V168 Flight Package</h2>
        <p class="text-slate-400 mt-3 text-sm sm:text-base">
          Both tiers include insured tracked shipping with freight already accounted for in our pricing—choose the $229 USD Standard Flight Kit or upgrade to the $249 USD Creator Pro Kit for extra batteries and fast multi-charging.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        
        <!-- Standard Flight Kit ($229 USD) -->
        <div id="card-standard" onclick="selectBundle('standard')" class="cursor-pointer rounded-3xl p-6 sm:p-8 bg-white/[0.03] border-2 border-[#0EA5E9] relative flex flex-col justify-between transition duration-200 shadow-2xl shadow-[#0EA5E9]/10">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="px-3 py-1 rounded-full bg-[#0EA5E9]/15 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">Core Flight Package</span>
              <span id="check-standard" class="w-6 h-6 rounded-full bg-[#0EA5E9] text-slate-950 flex items-center justify-center font-bold text-xs">✓</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white">Standard Flight Kit</h3>
            <p class="text-slate-400 text-sm mt-1">Complete ready-to-fly V168 GPS quadcopter with shipping included and 24–48h dispatch.</p>

            <div class="mt-6 flex items-baseline gap-2.5">
              <span class="text-4xl sm:text-5xl font-black text-white">$229</span>
              <span class="text-sm font-bold text-slate-300 uppercase tracking-wider">USD</span>
              <span class="text-xs font-bold text-emerald-