/**
 * Kindred Travels - Centralized Professional Booking Engine
 * High-end Sri Lankan luxury travel quotation, reservation and voucher management system.
 */

(function(window) {
  'use strict';

  // --- 1. SIGNATURE PACKAGES CATALOG ---
  const PACKAGES_CATALOG = {
    'quick-cultural': {
      id: 'quick-cultural',
      title: 'Quick Cultural Heritage Explorer',
      days: 3,
      nights: 2,
      basePricePerPerson: 450,
      category: 'short',
      route: 'Colombo → Sigiriya → Kandy',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
      highlights: ['Sigiriya Lion Rock Palace', 'Dambulla Cave Temple', 'Temple of the Tooth Relic'],
      recommendedSeason: 'Year-Round'
    },
    'classic-highlights': {
      id: 'classic-highlights',
      title: 'Classic Sri Lanka Highlights',
      days: 5,
      nights: 4,
      basePricePerPerson: 750,
      category: 'short',
      route: 'Sigiriya → Kandy → Ella → Galle',
      image: './sigiriya1.jpg',
      highlights: ['Pidurangala Sunset', 'Tea Plantation Strolls', 'Nine Arch Bridge', 'Galle Dutch Fort'],
      recommendedSeason: 'Dec - Apr & Jul - Sep'
    },
    'highlands-surf': {
      id: 'highlands-surf',
      title: 'Highlands & Surf Safari',
      days: 7,
      nights: 6,
      basePricePerPerson: 980,
      category: 'long',
      route: 'Kandy → Nuwara Eliya → Ella → Arugam Bay / Weligama',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      highlights: ['Highland Tea Trails', 'Blue Train Journey', 'Surf Clinics & Beach Clubs'],
      recommendedSeason: 'May - Sep (East) / Nov - Apr (South)'
    },
    'grand-island': {
      id: 'grand-island',
      title: 'Grand Island Discovery Tour',
      days: 14,
      nights: 13,
      basePricePerPerson: 1850,
      category: 'long',
      route: 'Full Island Comprehensive Circuit',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
      highlights: ['Ancient Kingdoms', 'Tea Country', 'Yala Safari', 'Southern Beaches', 'Colombo Dining'],
      recommendedSeason: 'Dec - Apr'
    },
    'romance-honeymoon': {
      id: 'romance-honeymoon',
      title: 'Ceylon Romance & Honeymoon Retreat',
      days: 8,
      nights: 7,
      basePricePerPerson: 1400,
      category: 'themed',
      route: 'Ceylon Tea Trails → Yala Glamping → Tangalle Ocean Villas',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      highlights: ['Candlelit Planter Bungalows', 'Private Safari Dinners', 'Secluded Oceanfront Villas'],
      recommendedSeason: 'Dec - May'
    },
    'family-adventure': {
      id: 'family-adventure',
      title: 'Family Wildlife & Coastal Adventure',
      days: 10,
      nights: 9,
      basePricePerPerson: 1250,
      category: 'themed',
      route: 'Pinnawala → Minneriya → Kandy → Bentota',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      highlights: ['Elephant Gathering', 'Kid-friendly Turtle Sanctuaries', 'Calm Beach Lagoons'],
      recommendedSeason: 'Year-Round'
    },
    'signature-luxury': {
      id: 'signature-luxury',
      title: 'Signature Luxury Villa & Heli Charter',
      days: 8,
      nights: 7,
      basePricePerPerson: 2950,
      category: 'themed',
      route: 'Colombo → Tea Trails → Yala Sanctuary → Galle Amangalla',
      image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
      highlights: ['Helicopter Transfers', 'Private Butler Service', 'Relais & Châteaux Properties'],
      recommendedSeason: 'Dec - Apr'
    },
    'safari-odyssey': {
      id: 'safari-odyssey',
      title: 'Great Wild Safari Odyssey',
      days: 6,
      nights: 5,
      basePricePerPerson: 920,
      category: 'themed',
      route: 'Wilpattu → Minneriya → Yala National Park',
      image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
      highlights: ['Sloth Bear & Leopard Tracking', 'Wild Elephant Corridors', 'Expert Naturalists'],
      recommendedSeason: 'May - Sep & Dec - Mar'
    },
    'sacred-kingdoms': {
      id: 'sacred-kingdoms',
      title: 'Sacred Ancient Kingdoms & Spiritual Route',
      days: 5,
      nights: 4,
      basePricePerPerson: 680,
      category: 'themed',
      route: 'Anuradhapura → Polonnaruwa → Sigiriya → Kandy',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
      highlights: ['UNESCO Ruins', 'Sacred Bo Tree (Sri Maha Bodhi)', 'Venerable Monasteries'],
      recommendedSeason: 'Year-Round'
    },
    'coastal-paradise': {
      id: 'coastal-paradise',
      title: 'Southern Coastal Sun & Whale Sanctuary',
      days: 7,
      nights: 6,
      basePricePerPerson: 890,
      category: 'themed',
      route: 'Bentota → Galle → Mirissa → Hiriketiya',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
      highlights: ['Blue Whale Yacht Expeditions', 'Surf Bays & Beach Lounges', 'Historic Galle Fort'],
      recommendedSeason: 'Nov - Apr'
    },
    'bespoke-custom': {
      id: 'bespoke-custom',
      title: '100% Bespoke Custom Itinerary',
      days: 7,
      nights: 6,
      basePricePerPerson: 130, // per day base
      category: 'custom',
      route: 'Tailor-Made According to Your Desires',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
      highlights: ['100% Flexible Schedule', 'Private Chauffeur Guide', 'Custom Hotel Selections'],
      recommendedSeason: 'Year-Round'
    }
  };

  // --- 2. PRICING PARAMETERS & TIERS ---
  const ACCOMMODATION_TIERS = {
    'value': {
      id: 'value',
      name: 'Value Explorer (3★)',
      desc: 'Charming boutique guest houses & authentic heritage inns with AC & breakfast.',
      dailyPerPerson: 65,
      multiplier: 0.85
    },
    'midrange': {
      id: 'midrange',
      name: 'Midrange Premium (4★)',
      desc: 'Selected 4-star colonial bungalows, stylish beach retreats & high-comfort safari lodges.',
      dailyPerPerson: 130,
      multiplier: 1.0 // Base reference
    },
    'luxury': {
      id: 'luxury',
      name: 'Luxury Boutique (5★)',
      desc: 'Top-tier sanctuaries: Tea Trails, Wild Coast, Amangalla, Cape Weligama with experiential dining.',
      dailyPerPerson: 275,
      multiplier: 1.6
    },
    'ultraluxe': {
      id: 'ultraluxe',
      name: 'Ultra-Luxe Private Villas',
      desc: 'Exclusive private estates with dedicated private chef, private pool, and personal butler.',
      dailyPerPerson: 420,
      multiplier: 2.3
    }
  };

  const VEHICLE_TIERS = {
    'sedan': {
      id: 'sedan',
      name: 'Private Luxury AC Sedan',
      ideal: '1 - 2 Travelers',
      dailyCharge: 0, // Included in base package
      desc: 'Premium hybrid sedan with complimentary Wi-Fi, chilled bottled water, and dedicated English-speaking chauffeur.'
    },
    'van': {
      id: 'van',
      name: 'Executive High-Roof Van',
      ideal: '3 - 6 Travelers',
      dailyCharge: 35,
      desc: 'Spacious high-roof executive van with panoramic windows, captain seats, and extra luggage bay.'
    },
    'cruiser': {
      id: 'cruiser',
      name: '4x4 Safari Land Cruiser',
      ideal: 'Adventure Explorers',
      dailyCharge: 80,
      desc: 'Elevated 4WD expedition cruiser fitted with openable roof hatches for superior wildlife visibility.'
    },
    'helicopter': {
      id: 'helicopter',
      name: 'Private Scenic Heli-Charter (Add-on)',
      ideal: 'Fast Intercity Transfer',
      dailyCharge: 750, // Flat transfer rate
      desc: 'Skip road winding with chartered helicopter scenic transfers between Colombo, Tea Country, and Coast.'
    }
  };

  const EXCLUSIVE_ADDONS = {
    'balloon': {
      id: 'balloon',
      name: 'Sigiriya Sunrise Hot Air Balloon',
      rate: 260,
      per: 'person',
      desc: 'Drift at dawn over ancient reservoirs and the iconic Sigiriya rock with champagne breakfast.'
    },
    'yala-jeep': {
      id: 'yala-jeep',
      name: 'Private Yala Safari & Naturalist Guide',
      rate: 180,
      per: 'vehicle',
      desc: 'Dedicated 4x4 safari with senior wildlife tracker for optimal leopard and sloth bear sightings.'
    },
    'blue-train': {
      id: 'blue-train',
      name: 'First-Class Scenic Train Tickets (Kandy to Ella)',
      rate: 45,
      per: 'person',
      desc: 'Reserved observation saloon seats traversing mist-veiled tea estates and cascading waterfalls.'
    },
    'ayurveda': {
      id: 'ayurveda',
      name: 'Authentic Ayurvedic Spa Sanctuary (Half-Day)',
      rate: 110,
      per: 'person',
      desc: 'Holistic herb & warm oil massage treatments supervised by traditional Ayurvedic physicians.'
    },
    'whale-catamaran': {
      id: 'whale-catamaran',
      name: 'Private Whale Watching Catamaran in Mirissa',
      rate: 140,
      per: 'person',
      desc: 'Sail in luxury away from crowded boats to view Blue Whales and spinner dolphins ethically.'
    },
    'cooking-masterclass': {
      id: 'cooking-masterclass',
      name: 'Private Chef Ceylon Seafood Masterclass',
      rate: 85,
      per: 'person',
      desc: 'Market tour and lagoon-side culinary lesson preparing authentic Sri Lankan black pepper crab.'
    }
  };

  // --- 3. QUOTATION CALCULATION LOGIC ---
  function calculateQuote(options) {
    const pkgId = options.packageId || 'classic-highlights';
    const pkg = PACKAGES_CATALOG[pkgId] || PACKAGES_CATALOG['classic-highlights'];
    
    // Dates & Duration
    let days = parseInt(options.days) || pkg.days || 5;
    if (options.startDate && options.endDate) {
      const d1 = new Date(options.startDate);
      const d2 = new Date(options.endDate);
      const diffTime = d2 - d1;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays > 0) {
        days = diffDays;
      }
    }

    const adults = Math.max(1, parseInt(options.adults) || 2);
    const children = Math.max(0, parseInt(options.children) || 0);
    const infants = Math.max(0, parseInt(options.infants) || 0);

    const tierId = options.tier || options.tierId || 'midrange';
    const tier = ACCOMMODATION_TIERS[tierId] || ACCOMMODATION_TIERS['midrange'];

    const vehicleId = options.vehicle || options.vehicleId || (adults + children > 2 ? 'van' : 'sedan');
    const vehicle = VEHICLE_TIERS[vehicleId] || VEHICLE_TIERS['sedan'];

    const selectedAddons = Array.isArray(options.addons) ? options.addons : [];

    // Core Price Calculation:
    let baseRatePerAdult = 0;
    if (pkg.id === 'bespoke-custom') {
      baseRatePerAdult = tier.dailyPerPerson * days;
    } else {
      const durationRatio = days / (pkg.days || 5);
      baseRatePerAdult = Math.round(pkg.basePricePerPerson * tier.multiplier * (durationRatio > 0.8 && durationRatio < 1.2 ? 1 : durationRatio));
    }

    // Children pay 55% of adult rate, infants are free
    const adultSubtotal = baseRatePerAdult * adults;
    const childSubtotal = Math.round(baseRatePerAdult * 0.55 * children);

    // Solo traveler supplement (+25% if solo)
    const soloSupplement = (adults === 1 && children === 0) ? Math.round(adultSubtotal * 0.25) : 0;

    // Transport cost
    const transportTotal = vehicle.id === 'helicopter' 
      ? vehicle.dailyCharge 
      : (vehicle.dailyCharge * days);

    // Add-on excursions
    let addonsTotal = 0;
    const addonDetails = [];
    selectedAddons.forEach(aId => {
      const addon = EXCLUSIVE_ADDONS[aId];
      if (addon) {
        let charge = 0;
        if (addon.per === 'person') {
          charge = addon.rate * (adults + children);
        } else {
          charge = addon.rate; // per vehicle / booking
        }
        addonsTotal += charge;
        addonDetails.push({
          id: addon.id,
          name: addon.name,
          cost: charge
        });
      }
    });

    const subtotal = adultSubtotal + childSubtotal + soloSupplement + transportTotal + addonsTotal;
    const taxesAndLevies = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + taxesAndLevies;
    const depositRequired = Math.round(grandTotal * 0.25); // 25% deposit to confirm

    return {
      packageId: pkg.id,
      packageName: pkg.title,
      days: days,
      durationDays: days,
      nights: Math.max(1, days - 1),
      adults: adults,
      children: children,
      infants: infants,
      totalTravelers: adults + children + infants,
      tierId: tier.id,
      tierName: tier.name,
      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      transportTotal: transportTotal,
      addons: addonDetails,
      addonsTotal: addonsTotal,
      adultSubtotal: adultSubtotal,
      childSubtotal: childSubtotal,
      soloSupplement: soloSupplement,
      subtotal: subtotal,
      taxesAndLevies: taxesAndLevies,
      grandTotal: grandTotal,
      totalCost: grandTotal,
      depositRequired: depositRequired,
      deposit: depositRequired,
      currency: 'USD'
    };
  }

  // --- 4. CENTRALIZED BOOKINGS STORE & PERSISTENCE ---
  const STORAGE_KEY = 'kindred_bookings';

  const DEFAULT_SEED_BOOKINGS = [
    {
      id: 'BK-4392',
      packageId: 'classic-highlights',
      packageName: 'Classic Sri Lanka Highlights',
      startDate: '2026-09-12',
      endDate: '2026-09-17',
      duration: '5 Days / 4 Nights',
      days: 5,
      adults: 2,
      children: 0,
      infants: 0,
      guestsLabel: 'Couple (2 Adults)',
      roomType: 'Deluxe Heritage Double',
      tier: 'Luxury Boutique (5★)',
      tierId: 'luxury',
      vehicle: 'Private Luxury AC Sedan',
      addons: ['First-Class Scenic Train Tickets (Kandy to Ella)'],
      cost: 3240,
      deposit: 810,
      status: 'Approved',
      paymentStatus: 'Unpaid',
      curator: 'Ruwan Perera (Senior Ceylon Specialist)',
      customer: {
        name: 'Jane Harrison',
        email: 'jane.h@outlook.com',
        phone: '+1 (555) 234-8900',
        country: 'United States',
        dietary: 'Vegetarian',
        flightNumber: 'QR 668',
        notes: 'Celebrating 5th wedding anniversary. Prefer upper floor suites with swimming pool views.'
      },
      dateCreated: 'Jul 24, 2026'
    },
    {
      id: 'BK-8291',
      packageId: 'grand-island',
      packageName: 'Grand Island Discovery Tour',
      startDate: '2026-11-05',
      endDate: '2026-11-19',
      duration: '14 Days / 13 Nights',
      days: 14,
      adults: 2,
      children: 1,
      infants: 0,
      guestsLabel: 'Family Group (2 Adults, 1 Child)',
      roomType: 'Interconnecting Family Suite',
      tier: 'Luxury Boutique (5★)',
      tierId: 'luxury',
      vehicle: 'Executive High-Roof Van',
      addons: ['Private Yala Safari & Naturalist Guide', 'First-Class Scenic Train Tickets (Kandy to Ella)'],
      cost: 8400,
      deposit: 2100,
      status: 'Pending',
      paymentStatus: 'Unpaid',
      curator: 'Chaminda Silva (Lead Wildlife Specialist)',
      customer: {
        name: 'Arthur Pendelton',
        email: 'arthur.travels@yahoo.co.uk',
        phone: '+44 7700 900123',
        country: 'United Kingdom',
        dietary: 'None',
        flightNumber: 'BA 2158',
        notes: 'Travelling with our 7-year-old child. Need child seat in van and reliable Wi-Fi for light work.'
      },
      dateCreated: 'Jul 26, 2026'
    },
    {
      id: 'BK-2104',
      packageId: 'quick-cultural',
      packageName: 'Quick Cultural Heritage Explorer',
      startDate: '2026-08-20',
      endDate: '2026-08-23',
      duration: '3 Days / 2 Nights',
      days: 3,
      adults: 1,
      children: 0,
      infants: 0,
      guestsLabel: 'Solo Traveler',
      roomType: 'Single Boutique Room',
      tier: 'Value Explorer (3★)',
      tierId: 'value',
      vehicle: 'Private Luxury AC Sedan',
      addons: ['Sigiriya Sunrise Hot Air Balloon'],
      cost: 710,
      deposit: 175,
      status: 'Confirmed',
      paymentStatus: 'Deposit Paid',
      curator: 'Nilani Wickramasinghe (Cultural Expert)',
      customer: {
        name: 'Kenji Sato',
        email: 'kenji.s@gmail.com',
        phone: '+81 90-1234-5678',
        country: 'Japan',
        dietary: 'Pescetarian',
        flightNumber: 'UL 455',
        notes: 'Keen on photography. Need early morning start for Sigiriya climb before sunrise.'
      },
      dateCreated: 'Jul 27, 2026'
    }
  ];

  const BookingStore = {
    getAll: function() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SEED_BOOKINGS));
          return DEFAULT_SEED_BOOKINGS;
        }
        return JSON.parse(stored);
      } catch (err) {
        console.error('Error reading bookings store:', err);
        return DEFAULT_SEED_BOOKINGS;
      }
    },

    saveAll: function(bookings) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
      } catch (err) {
        console.error('Error saving bookings store:', err);
      }
    },

    getById: function(bookingId, clientEmail) {
      const bookings = this.getAll();
      const idTrim = (bookingId || '').trim().toUpperCase();
      const emailTrim = (clientEmail || '').trim().toLowerCase();

      return bookings.find(b => {
        const matchId = (b.id || '').toUpperCase() === idTrim;
        if (!clientEmail) return matchId;
        const matchEmail = (b.customer && b.customer.email ? b.customer.email : (b.email || '')).toLowerCase() === emailTrim;
        return matchId && matchEmail;
      });
    },

    createBooking: function(bookingData) {
      const bookings = this.getAll();
      const newId = 'BK-' + Math.floor(1000 + Math.random() * 9000);
      
      const newRecord = Object.assign({}, bookingData, {
        id: newId,
        status: bookingData.status || 'Pending',
        paymentStatus: bookingData.paymentStatus || 'Unpaid',
        curator: bookingData.curator || 'Ruwan Perera (Senior Ceylon Specialist)',
        dateCreated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      });

      bookings.unshift(newRecord);
      this.saveAll(bookings);
      return newRecord;
    },

    updateStatus: function(bookingId, newStatus, newCurator, paymentStatus) {
      const bookings = this.getAll();
      const item = bookings.find(b => b.id === bookingId);
      if (item) {
        if (newStatus) item.status = newStatus;
        if (newCurator) item.curator = newCurator;
        if (paymentStatus) item.paymentStatus = paymentStatus;
        this.saveAll(bookings);
        return item;
      }
      return null;
    },

    deleteBooking: function(bookingId) {
      let bookings = this.getAll();
      bookings = bookings.filter(b => b.id !== bookingId);
      this.saveAll(bookings);
      return bookings;
    },

    resetToDemo: function() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SEED_BOOKINGS));
      return DEFAULT_SEED_BOOKINGS;
    }
  };

  // --- 5. PRINTABLE VOUCHER HTML GENERATOR ---
  function generateVoucherHTML(b) {
    const client = b.customer || { name: b.name, email: b.email, country: b.country || '', phone: b.phone || '' };
    const costFormatted = b.cost ? `$${b.cost.toLocaleString()}` : (b.grandTotal ? `$${b.grandTotal.toLocaleString()}` : '$0');
    const depositFormatted = b.deposit ? `$${b.deposit.toLocaleString()}` : '$0';
    
    return `
      <div class="kindred-voucher-sheet">
        <div class="voucher-header">
          <div class="voucher-brand">
            <h1 class="voucher-title">KINDRED TRAVELS</h1>
            <p class="voucher-subtitle">CEYLON LUXURY EXPEDITIONS &amp; BESPOKE VOYAGES</p>
          </div>
          <div class="voucher-badge-box">
            <span class="voucher-ref-label">${(b.type === 'inquiry' || b.paymentStatus === 'Inquiry Only') ? 'OFFICIAL INQUIRY DOSSIER' : 'OFFICIAL BOOKING VOUCHER'}</span>
            <span class="voucher-ref-number">${b.id}</span>
            <span class="voucher-status-stamp status-${(b.status || 'pending').toLowerCase()}">${(b.status || 'Pending').toUpperCase()}</span>
          </div>
        </div>

        <div class="voucher-grid-2col">
          <div class="voucher-card">
            <h4>Primary Traveler Information</h4>
            <div class="v-row"><span>Lead Guest:</span><strong>${client.name || 'Valued Guest'}</strong></div>
            <div class="v-row"><span>Email Address:</span><span>${client.email || 'N/A'}</span></div>
            <div class="v-row"><span>Phone / WhatsApp:</span><span>${client.phone || 'N/A'}</span></div>
            <div class="v-row"><span>Country of Residence:</span><span>${client.country || 'N/A'}</span></div>
            ${client.flightNumber ? `<div class="v-row"><span>Arrival Flight:</span><span>${client.flightNumber}</span></div>` : ''}
            ${client.dietary ? `<div class="v-row"><span>Dietary Needs:</span><span>${client.dietary}</span></div>` : ''}
          </div>

          <div class="voucher-card">
            <h4>Journey Specifications</h4>
            <div class="v-row"><span>Itinerary Package:</span><strong>${b.packageName || b.packageTitle || 'Custom Ceylon Tour'}</strong></div>
            <div class="v-row"><span>Commencing Date:</span><strong>${b.startDate || 'Flexible Dates'}</strong></div>
            <div class="v-row"><span>Departure Date:</span><span>${b.endDate || 'TBD'} (${b.duration || (b.days ? b.days + ' Days' : 'Custom')})</span></div>
            <div class="v-row"><span>Party Configuration:</span><span>${b.guestsLabel || (b.adults ? b.adults + ' Adults' : (b.guests || '1 Guest'))}</span></div>
            <div class="v-row"><span>Accommodation Tier:</span><span>${b.tier || 'Midrange Premium (4★)'}</span></div>
            <div class="v-row"><span>Dedicated Vehicle:</span><span>${b.vehicle || 'Private AC Chauffeur Vehicle'}</span></div>
          </div>
        </div>

        <div class="voucher-card full-width" style="margin-top: 20px;">
          <h4>Selected Experiences &amp; Special Requests</h4>
          <div class="v-row">
            <span>Add-on Excursions:</span>
            <span>${Array.isArray(b.addons) && b.addons.length > 0 ? (typeof b.addons[0] === 'string' ? b.addons.join(' • ') : b.addons.map(a => a.name).join(' • ')) : 'Standard Curated Itinerary Highlights Included'}</span>
          </div>
          <div class="v-row">
            <span>Special Curator Notes:</span>
            <span>${client.notes || b.notes || 'None specified. Standard VIP welcoming amenities apply.'}</span>
          </div>
        </div>

        <div class="voucher-summary-card">
          <div class="summary-col">
            <span class="v-muted">Assigned Travel Curator</span>
            <strong>${b.curator || 'Ruwan Perera (Senior Ceylon Specialist)'}</strong>
            <span class="v-muted" style="font-size: 0.8rem; margin-top: 4px;">Direct Concierge: +94 11 234 5678</span>
          </div>
          <div class="summary-col text-right">
            <span class="v-muted">Estimated Total Investment</span>
            <h2 class="voucher-price">${costFormatted}</h2>
            <span class="v-badge-deposit">Deposit: ${depositFormatted} (${b.paymentStatus || 'Unpaid'})</span>
          </div>
        </div>

        <div class="voucher-footer">
          <p>This voucher serves as confirmation of your itinerary folder with Kindred Travels (Pvt) Ltd. Registered under the Sri Lanka Tourism Development Authority (SLTDA). For 24/7 client dispatch assistance, contact <strong>hello@kindredtravels.lk</strong> or your assigned curator.</p>
        </div>
      </div>
    `;
  }

  // --- 6. STATUS LIFECYCLE EMAIL TEMPLATES & DISPATCH ENGINE ---
  function getStatusEmailData(b, rawStatus) {
    const norm = {
      id: b.id || 'BK-0000',
      packageName: b.packageName || b.packageTitle || b.duration || 'Bespoke Ceylon Voyage',
      startDate: b.startDate || 'Flexible Dates',
      duration: b.duration || 'Custom Itinerary',
      guestsLabel: b.guestsLabel || (b.adults ? (b.adults + ' Adults' + (b.children ? ', ' + b.children + ' Children' : '')) : (b.guests || '2 Guests')),
      tier: b.tier || b.budget || 'Luxury Boutique (5★)',
      vehicle: b.vehicle || 'Private AC Chauffeur Vehicle',
      cost: typeof b.cost === 'number' ? b.cost : (parseFloat(b.cost) || b.grandTotal || 0),
      deposit: typeof b.deposit === 'number' ? b.deposit : (parseFloat(b.deposit) || Math.round((b.cost || 0) * 0.25)),
      curator: b.curator || 'Ruwan Perera (Senior Ceylon Specialist)',
      customer: b.customer || {
        name: b.name || 'Valued Guest',
        email: b.email || '',
        phone: b.phone || '',
        country: b.country || ''
      }
    };

    const client = norm.customer;
    const costStr = '$' + norm.cost.toLocaleString();
    const depositStr = '$' + norm.deposit.toLocaleString();
    const balanceStr = '$' + Math.max(0, norm.cost - norm.deposit).toLocaleString();
    const trackerUrl = 'https://kindredtravels.lk/plan.html?mode=tracker&id=' + norm.id + '&email=' + encodeURIComponent(client.email);

    const cleanKey = (rawStatus || norm.status || 'Pending').toLowerCase().replace(/[^a-z]/g, '');
    const isInquiry = b.type === 'inquiry' || b.paymentStatus === 'Inquiry Only' || (b.category && b.category.includes('Inquiry'));

    let statusLabel = 'Pending Review';
    let subject = '';
    let headline = '';
    let message = '';

    if (cleanKey.includes('approv')) {
      statusLabel = 'Approved';
      subject = `Itinerary Approved & Ready for Deposit: ${norm.packageName} (Ref: ${norm.id}) - Kindred Travels`;
      headline = 'Your Bespoke Ceylon Itinerary is Approved & Ready for Confirmation';
      message = 
`Dear ${client.name},

Delighted news! Your customized Sri Lanka travel itinerary "${norm.packageName}" (Reference: ${norm.id}) has been officially APPROVED by your dedicated curator, ${norm.curator}.

STATUS: APPROVED — AWAITING 25% DEPOSIT

SUMMARY OF APPROVED TOUR:
--------------------------------------------------
• Booking Reference: ${norm.id}
• Itinerary: ${norm.packageName}
• Commencing Date: ${norm.startDate}
• Duration: ${norm.duration}
• Travel Party: ${norm.guestsLabel}
• Accommodation Tier: ${norm.tier}
• Chauffeur Vehicle: ${norm.vehicle}
• Total Quoted Investment: ${costStr} USD
• Required 25% Deposit: ${depositStr} USD
--------------------------------------------------

HOW TO CONFIRM YOUR DATES:
To lock in your boutique suite allotments and secure your private vehicle, please complete the 25% deposit payment (${depositStr} USD). We support:
1. International Credit Cards (Visa, MasterCard, American Express)
2. International Bank Wire / SWIFT to Commercial Bank of Ceylon
3. Wise / Revolut Instant Transfer

VIEW & PRINT OFFICIAL TRAVEL VOUCHER:
${trackerUrl}

Our concierge team is at your disposal on WhatsApp (+94 11 234 5678) to assist with deposit arrangements or tailored requests.

Warm regards,

${norm.curator}
Kindred Travels (Pvt) Ltd
Galle Road, Colombo 03, Sri Lanka
hello@kindredtravels.lk | +94 11 234 5678`;

    } else if (cleanKey.includes('deposit') || cleanKey.includes('paid')) {
      statusLabel = 'Deposit Paid';
      subject = `Deposit Received & Accommodations Secured: ${norm.packageName} (Ref: ${norm.id}) - Kindred Travels`;
      headline = 'Deposit Confirmed — Your Private Journey is Officially Secured';
      message = 
`Dear ${client.name},

We are pleased to confirm receipt of your 25% confirmation deposit (${depositStr} USD) for tour reference ${norm.id} ("${norm.packageName}").

STATUS: DEPOSIT PAID & RESERVATIONS LOCKED

FINANCIAL & LOGISTICAL SUMMARY:
--------------------------------------------------
• Booking Reference: ${norm.id}
• Itinerary: ${norm.packageName}
• Departure Date: ${norm.startDate}
• Total Quoted Investment: ${costStr} USD
• Deposit Received: ${depositStr} USD (PAID)
• Remaining Balance: ${balanceStr} USD
• Balance Due Date: 14 days prior to departure or on arrival in Colombo
--------------------------------------------------

WHAT WE ARE DOING NOW:
All boutique hotel bookings, heritage tea bungalow suites, safari jeep permits, and dedicated chauffeur assignments are now definitively locked in your name.

Your updated official travel voucher reflecting "DEPOSIT PAID" is ready to view:
${trackerUrl}

Please reply to this email or message us on WhatsApp (+94 11 234 5678) with your arrival flight details (Airline, Flight Number, Scheduled Time) so we can coordinate your private VIP airport welcome.

Warm regards,

${norm.curator}
Kindred Travels (Pvt) Ltd
Galle Road, Colombo 03, Sri Lanka
hello@kindredtravels.lk | +94 11 234 5678`;

    } else if (cleanKey.includes('confirm')) {
      statusLabel = 'Confirmed (Full)';
      subject = `Official Tour Confirmed & Final Travel Voucher Issued: ${norm.packageName} (Ref: ${norm.id}) - Kindred Travels`;
      headline = 'All Clear for Takeoff! Your Ceylon Voyage is 100% Confirmed';
      message = 
`Dear ${client.name},

We are thrilled to advise that your Sri Lankan expedition "${norm.packageName}" (Reference: ${norm.id}) is now FULLY CONFIRMED and finalized for travel commencing ${norm.startDate}.

STATUS: CONFIRMED (FULL)

FINAL TRAVEL DOSSIER:
--------------------------------------------------
• Booking Reference: ${norm.id}
• Itinerary: ${norm.packageName}
• Commencing Date: ${norm.startDate}
• Duration: ${norm.duration}
• Lead Guest: ${client.name}
• Assigned Curator: ${norm.curator}
• Dedicated Chauffeur Vehicle: ${norm.vehicle}
--------------------------------------------------

AIRPORT ARRIVAL WELCOME PROTOCOL:
Upon touchdown at Colombo Bandaranaike International Airport (CMB):
1. Clear immigration and collect your luggage.
2. Step into the main arrival lobby.
3. Look for your dedicated chauffeur-guide holding a high-visibility paging placard reading: "KINDRED TRAVELS — ${client.name}".
4. You will be escorted to your chilled private vehicle equipped with bottled king coconut water, cool towels, and high-speed Wi-Fi.

PRINT YOUR OFFICIAL TRAVEL VOUCHER:
Please print or save a digital copy of your official voucher from our client portal:
${trackerUrl}

Our 24/7 client dispatch concierge hotline is live on WhatsApp: +94 11 234 5678. We look forward to giving you an unforgettable Ceylon experience!

Warm regards,

${norm.curator}
Kindred Travels (Pvt) Ltd
Galle Road, Colombo 03, Sri Lanka
hello@kindredtravels.lk | +94 11 234 5678`;

    } else if (cleanKey.includes('complet')) {
      statusLabel = 'Journey Completed';
      subject = `Welcome Home! Thank You for Traveling with Kindred Travels (Ref: ${norm.id})`;
      headline = 'Memories of Ceylon — Thank You for Exploring Sri Lanka with Us';
      message = 
`Dear ${client.name},

Welcome home! On behalf of ${norm.curator} and the entire team at Kindred Travels, we want to express our deepest gratitude for traveling with us on your "${norm.packageName}" expedition (Reference: ${norm.id}).

We hope your journey was filled with unforgettable moments — from the ancient ramparts of Sigiriya and emerald highland tea valleys to the thrilling wildlife encounters and tranquil golden coastlines.

SHARE YOUR EXPERIENCE:
Your feedback means the world to our local team and guides. We would be deeply honored if you took a moment to share your review:
https://kindredtravels.lk/testimonials.html

KINDRED ALUMNI PRIVILEGE:
As a valued member of the Kindred community, you and your travel companions are entitled to an exclusive 10% loyalty privilege on your next private journey in Sri Lanka or the Maldives.

Until we welcome you back to the teardrop island of Ceylon, we wish you safe travels and fond memories!

Warmest regards,

${norm.curator}
Kindred Travels (Pvt) Ltd
Galle Road, Colombo 03, Sri Lanka
hello@kindredtravels.lk | +94 11 234 5678`;

    } else if (cleanKey.includes('cancel')) {
      statusLabel = 'Cancelled';
      subject = `Booking Cancellation Notice: ${norm.packageName} (Ref: ${norm.id}) - Kindred Travels`;
      headline = 'Itinerary Cancellation Confirmation';
      message = 
`Dear ${client.name},

This email confirms that your travel folder for "${norm.packageName}" (Reference: ${norm.id}) has been CANCELLED as requested.

STATUS: CANCELLED

All provisional room allocations, private transport schedules, and bespoke excursion permits have been released back to our inventory.

CANCELLATION & REFUND POLICY:
Any refundable deposits or future travel credits will be processed in accordance with our Booking & Cancellation Terms (https://kindredtravels.lk/booking-policy.html). Our accounts department will issue a formal credit note to ${client.email} within 3–5 business days.

We are sorry that we will not be hosting you on this occasion, but we sincerely hope to have the honor of welcoming you to Sri Lanka in the near future.

Warm regards,

${norm.curator}
Kindred Travels (Pvt) Ltd
Galle Road, Colombo 03, Sri Lanka
hello@kindredtravels.lk | +94 11 234 5678`;

    } else if (isInquiry || cleanKey.includes('inquir')) {
      // Custom Tour Inquiry Under Review
      statusLabel = 'Inquiry Under Review';
      subject = `Custom Ceylon Tour Inquiry Received (Ref: ${norm.id}) - Kindred Travels`;
      headline = 'Your Custom Ceylon Itinerary Request is Being Curated';
      message = 
`Dear ${client.name},

Thank you for reaching out to Kindred Travels. We have successfully received your custom Sri Lankan voyage inquiry under official Reference: ${norm.id}.

STATUS: INQUIRY LOGGED & UNDER CURATOR REVIEW
Your travel folder has been assigned to our Senior Ceylon Specialist, ${norm.curator}.

INQUIRY SPECIFICATIONS:
--------------------------------------------------
• Reference Number: ${norm.id}
• Itinerary / Themes: ${norm.packageName}
• Target Dates: ${norm.startDate}
• Expected Duration: ${norm.duration}
• Travel Party: ${norm.guestsLabel}
• Estimated Investment: ${costStr} USD
• Special Requests: ${client.notes || 'None specified'}
--------------------------------------------------

WHAT WE ARE DOING NOW:
Our Colombo concierge desk and destination specialists are crafting a personalized day-by-day route with boutique heritage stays, private chauffeur logistics, and bespoke excursion options. You will receive your complete proposal within 24 hours.

LIVE INQUIRY TRACKER:
You can review your inquiry specifications anytime on our client portal:
${trackerUrl}

For immediate questions or adjustments, message your curator directly on WhatsApp (+94 11 234 5678) or reply to this email.

Warm regards,

${norm.curator}
Kindred Travels (Pvt) Ltd
Galle Road, Colombo 03, Sri Lanka
hello@kindredtravels.lk | +94 11 234 5678`;

    } else {
      // Default: Pending / Pending Review
      statusLabel = 'Pending Review';
      subject = `Booking Received & Under Review: ${norm.packageName} (Ref: ${norm.id}) - Kindred Travels`;
      headline = 'Your Sri Lanka Itinerary Request Has Been Received';
      message = 
`Dear ${client.name},

Thank you for entrusting your Ceylon journey to Kindred Travels. We have successfully received your booking request for "${norm.packageName}" under official Reference: ${norm.id}.

STATUS: PENDING CURATOR REVIEW
Your travel folder has been assigned to our Senior Ceylon Specialist, ${norm.curator}.

ITINERARY SPECIFICATIONS:
--------------------------------------------------
• Booking Reference: ${norm.id}
• Itinerary: ${norm.packageName}
• Commencing Date: ${norm.startDate}
• Duration: ${norm.duration}
• Travel Party: ${norm.guestsLabel}
• Accommodation Standard: ${norm.tier}
• Chauffeur Vehicle: ${norm.vehicle}
• Total Quoted Investment: ${costStr} USD
• 25% Confirmation Deposit: ${depositStr} USD (Due upon approval)
--------------------------------------------------

WHAT HAPPENS NEXT:
Our Colombo operations desk is currently confirming room availability at boutique heritage villas and verifying our senior chauffeur-guide allocations. You will receive an official approval notification with secure payment instructions within 4–12 hours.

LIVE TRACKER & TRAVEL VOUCHER:
You can track the progress of your booking anytime on our client portal:
${trackerUrl}

Should you need immediate assistance or have adjustments to your travel dates, contact your dedicated curator directly on WhatsApp: +94 11 234 5678 or reply to this email.

Warm regards,

${norm.curator}
Kindred Travels (Pvt) Ltd
Galle Road, Colombo 03, Sri Lanka
hello@kindredtravels.lk | +94 11 234 5678`;
    }

    const mailtoUrl = `mailto:${encodeURIComponent(client.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(client.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const yahooUrl = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(client.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(client.email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    const rawPhone = (client.phone || '').replace(/[^0-9]/g, '');
    const waPhone = rawPhone.length >= 8 ? rawPhone : '94112345678';
    const waText = encodeURIComponent(`*Kindred Travels Status Notification*\n\nDear ${client.name},\n${headline}\n\n• Reference: ${norm.id}\n• Itinerary: ${norm.packageName}\n• Dates: ${norm.startDate}\n• Status: ${statusLabel}\n\nTrack your journey & official voucher here:\n${trackerUrl}`);
    const whatsAppUrl = `https://wa.me/${waPhone}?text=${waText}`;

    return {
      statusKey: cleanKey,
      statusLabel: statusLabel,
      recipientName: client.name,
      recipientEmail: client.email,
      bookingId: norm.id,
      packageName: norm.packageName,
      startDate: norm.startDate,
      duration: norm.duration,
      guests: norm.guestsLabel,
      tier: norm.tier,
      vehicle: norm.vehicle,
      curator: norm.curator,
      cost: costStr,
      deposit: depositStr,
      balance: balanceStr,
      trackerUrl: trackerUrl,
      subject: subject,
      headline: headline,
      message: message,
      mailtoUrl: mailtoUrl,
      gmailUrl: gmailUrl,
      yahooUrl: yahooUrl,
      outlookUrl: outlookUrl,
      whatsAppUrl: whatsAppUrl
    };
  }

  // Dispatch email via EmailJS with auto fallback
  function dispatchStatusEmail(booking, rawStatus) {
    const emailData = getStatusEmailData(booking, rawStatus);
    const storedConfig = JSON.parse(localStorage.getItem('kindred_emailjs_config') || '{}');
    
    // Select the best template ID from config
    let templateId = storedConfig.approvalTemplate || storedConfig.clientTemplate;
    const isApproved = emailData.statusLabel === 'Approved';
    if (isApproved && storedConfig.approvalTemplate) {
      templateId = storedConfig.approvalTemplate;
    } else if (storedConfig.clientTemplate) {
      templateId = storedConfig.clientTemplate;
    }

    const isEmailJSReady = typeof emailjs !== 'undefined' && 
                           storedConfig.publicKey && 
                           storedConfig.publicKey !== 'YOUR_PUBLIC_KEY' &&
                           storedConfig.serviceId && 
                           storedConfig.serviceId !== 'YOUR_SERVICE_ID' &&
                           templateId;

    if (isEmailJSReady) {
      try {
        emailjs.init(storedConfig.publicKey);
        return emailjs.send(storedConfig.serviceId, templateId, {
          status_label: emailData.statusLabel,
          email_subject: emailData.subject,
          email_headline: emailData.headline,
          email_message: emailData.message,
          booking_id: emailData.bookingId,
          client_name: emailData.recipientName,
          client_email: emailData.recipientEmail,
          start_date: emailData.startDate,
          duration: emailData.duration,
          guests: emailData.guests,
          budget: emailData.tier,
          package_name: emailData.packageName,
          curator: emailData.curator,
          cost: emailData.cost,
          deposit: emailData.deposit,
          balance: emailData.balance,
          tracker_url: emailData.trackerUrl,
          status: emailData.statusLabel
        }).then(function(res) {
          return { success: true, method: 'emailjs', emailData: emailData, response: res };
        }).catch(function(err) {
          console.warn('EmailJS delivery error, ready for fallback:', err);
          return { success: false, method: 'fallback', emailData: emailData, error: err };
        });
      } catch (err) {
        console.warn('EmailJS dispatch exception:', err);
        return Promise.resolve({ success: false, method: 'fallback', emailData: emailData, error: err });
      }
    }

    // Silent FormSubmit background autoresponder fallback
    fetch('https://formsubmit.co/ajax/hello@kindredtravels.lk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        _subject: emailData.subject,
        "Booking Ref": emailData.bookingId,
        "Client Name": emailData.recipientName,
        "Client Email": emailData.recipientEmail,
        "Status": emailData.statusLabel,
        "email": emailData.recipientEmail,
        "_autoresponder": emailData.message
      })
    }).catch(function(e) { /* silent fallback attempt */ });

    return Promise.resolve({ success: true, method: 'mailto', emailData: emailData });
  }

  // Export to window
  window.KindredBookingEngine = {
    PACKAGES: PACKAGES_CATALOG,
    TIERS: ACCOMMODATION_TIERS,
    VEHICLES: VEHICLE_TIERS,
    ADDONS: EXCLUSIVE_ADDONS,
    calculateQuote: calculateQuote,
    store: BookingStore,
    generateVoucherHTML: generateVoucherHTML,
    getStatusEmailData: getStatusEmailData,
    dispatchStatusEmail: dispatchStatusEmail
  };

})(window);
