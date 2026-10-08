// ==========================================================================
// EMAILJS BACKGROUND MAILING CONFIGURATION
// ==========================================================================
// Replace these strings with your actual EmailJS credentials:
// Load stored EmailJS configuration from Admin settings
const storedConfig = JSON.parse(localStorage.getItem('kindred_emailjs_config') || '{}');
const EMAILJS_CONFIG = {
  publicKey: storedConfig.publicKey || "YOUR_PUBLIC_KEY",
  serviceId: storedConfig.serviceId || "YOUR_SERVICE_ID",
  templateId: storedConfig.clientTemplate || storedConfig.templateId || "YOUR_CLIENT_TEMPLATE_ID"
};

// Initialize EmailJS if credentials are set
if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
  emailjs.init(EMAILJS_CONFIG.publicKey);
}

// Dynamic Map Destinations Data
const MAP_DESTINATIONS = {
  colombo: {
    name: 'Colombo',
    tag: 'The Gateway City',
    desc: 'Sri Lanka’s bustling commercial capital, blending colonial architecture with modern skyscrapers, vibrant street markets, and coastal parks.',
    temp: '30°C',
    altitude: 'Sea Level',
    attraction: 'Galle Face Green & Red Mosque'
  },
  sigiriya: {
    name: 'Sigiriya (Lion Rock)',
    tag: 'Ancient Citadel',
    desc: 'An iconic 200m high fortress of archaeological significance, featuring 5th-century frescoes, water gardens, and panoramic jungle views.',
    temp: '29°C',
    altitude: '200m',
    attraction: 'Mirror Wall & Lion Claw Gate'
  },
  kandy: {
    name: 'Kandy',
    tag: 'The Royal Capital',
    desc: 'The last royal kingdom nestled among hills, hosting the sacred Temple of the Tooth Relic, serene Kandy Lake, and traditional cultural pageants.',
    temp: '24°C',
    altitude: '500m',
    attraction: 'Temple of the Tooth Relic'
  },
  ella: {
    name: 'Ella',
    tag: 'Misty Highlands',
    desc: 'A sleepy mountain village surrounded by lush tea estates, waterfalls, and hiking routes. Famous for bridges, valleys, and hiking Ella Rock.',
    temp: '18°C',
    altitude: '1,041m',
    attraction: 'Nine Arch Bridge & Ella Rock'
  },
  yala: {
    name: 'Yala National Park',
    tag: 'Wildlife Haven',
    desc: 'A massive coastal reserve where scrubs meet the ocean, offering the best chance to spot leopards, elephants, and crocodiles in the wild.',
    temp: '31°C',
    altitude: 'Sea Level',
    attraction: 'Leopard & Sloth Bear Safari'
  },
  galle: {
    name: 'Galle Fort',
    tag: 'Colonial Heritage',
    desc: 'A historical Dutch fort with robust ramparts, cobblestone alleys, lighthouse, boutiques, and a charming coastal atmosphere.',
    temp: '28°C',
    altitude: 'Sea Level',
    attraction: 'Galle Lighthouse & Fort Walls'
  }
};

// Destination Details Data (for Modals)
const DESTINATION_DETAILS = {
  colombo: {
    title: 'Colombo',
    tag: 'Urban Gateway',
    desc: 'The commercial capital of Sri Lanka, Colombo is a vibrant city blending historic colonial architecture with modern luxury high-rises. Visit the historical Galle Face Green, the Red Mosque, and high-end shopping precincts.',
    img: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    bestTime: 'November to April',
    weather: '28°C - 31°C (Warm & Sunny)',
    stay: '1 - 2 Days',
    highlights: ['Walk Galle Face Green at Sunset', 'Shop at Dutch Hospital Precinct', 'Explore the Red Mosque', 'Visit Gangaramaya Temple'],
    activities: 'Urban sightseeing, shopping, temple visits, street food tours.',
    hotels: 'The Kingsbury, Shangri-La Colombo, Galle Face Hotel'
  },
  sigiriya: {
    title: 'Sigiriya (Lion Rock)',
    tag: 'Ancient Heritage',
    desc: 'A colossal 200-meter-high granite monolith rising sheer out of the jungle, hosting a legendary 5th-century palace fortress built by King Kasyapa. Famed for its ancient frescoes, mirror wall, and lion claw entry.',
    img: './sigiriya1.jpg',
    bestTime: 'December to April',
    weather: '27°C - 32°C (Warm & Tropical)',
    stay: '1 - 2 Days',
    highlights: ['Climb the 1,200 steps to the summit ruins', 'See the frescoes & mirror wall writings', 'Explore ancient royal water gardens', 'Watch sunset from Pidurangala Rock'],
    activities: 'Hiking, archaeology tours, hot air ballooning, photography.',
    hotels: 'Heritance Kandalama, Jetwing Vil Uyana, Aliya Resort & Spa'
  },
  kandy: {
    title: 'Kandy (Hill Capital)',
    tag: 'Royal Citadel',
    desc: 'Nestled among rolling hills, Kandy is the cultural heartland of Sri Lanka and its last royal capital. It houses the sacred Temple of the Tooth Relic, which holds a tooth of the Buddha, and hosts the annual Esala Perahera.',
    img: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    bestTime: 'January to April, July to August',
    weather: '22°C - 28°C (Misty & Warm)',
    stay: '2 Days',
    highlights: ['Pay respect at Temple of the Tooth Relic', 'Stroll the massive Peradeniya Botanical Gardens', 'Watch Kandyan traditional drum & fire dancing', 'Walk the scenic Kandy Lake path'],
    activities: 'Cultural tours, nature walks, spice garden visits, lake walks.',
    hotels: 'The Grand Kandyan, Earls Regency, Amaya Hills'
  },
  ella: {
    title: 'Ella',
    tag: 'Misty Highlands',
    desc: 'A peaceful, misty mountain village surrounded by lush tea fields, pine forests, and dramatic rocky gaps. Ideal for hiking, exploring cascades, and riding the legendary scenic railway.',
    img: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    bestTime: 'January to April',
    weather: '16°C - 23°C (Cool & Fresh)',
    stay: '2 - 3 Days',
    highlights: ['Walk the historic Nine Arch Bridge tracks', 'Hike Little Adam\'s Peak at sunrise', 'Climb Ella Rock for panoramic views', 'Visit the misty Ravana Waterfalls'],
    activities: 'Hiking, scenic train riding, tea factory tours, zip-lining.',
    hotels: '98 Acres Resort & Spa, Hide Ella, EKHO Ella'
  },
  yala: {
    title: 'Yala National Park',
    tag: 'Wildlife Safaris',
    desc: 'The crown jewel of Sri Lanka\'s wildlife, Yala is a vast scrub jungle bordering the ocean. It is famous for hosting one of the highest leopard densities in the world, alongside wild elephants, sloth bears, and peacock flocks.',
    img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    bestTime: 'February to June (Dry season)',
    weather: '29°C - 33°C (Hot & Sunny)',
    stay: '1 - 2 Days',
    highlights: ['Track leopards on a 4x4 safari drive', 'Spot wild elephants and sloth bears', 'See mugger crocodiles and rich birdlife', 'Walk the untouched beach dunes'],
    activities: '4x4 game drives, wildlife photography, luxury glamping.',
    hotels: 'Wild Coast Tented Lodge, Jetwing Yala, Cinnamon Wild Yala'
  },
  galle: {
    title: 'Galle Fort',
    tag: 'Colonial Heritage',
    desc: 'A living museum, Galle Fort is a 16th-century Dutch-colonial fortified city jutting into the Indian Ocean. Inside, you\'ll find cobblestone streets, boutique hotels, trendy cafes, and historic ramparts.',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    bestTime: 'November to April',
    weather: '27°C - 31°C (Warm & Ocean Breeze)',
    stay: '2 Days',
    highlights: ['Walk the historic sea ramparts at sunset', 'Visit the iconic Galle Lighthouse', 'Explore Dutch Reformed Church details', 'Shop boutique gems and local arts'],
    activities: 'Walking tours, boutique shopping, heritage trails, cycling.',
    hotels: 'Amangalla, Galle Fort Hotel, Le Grand Galle'
  },
  mirissa: {
    title: 'Mirissa',
    tag: 'Tropical Paradise',
    desc: 'A beautiful crescent beach lined with coconut palms. Famous for golden sands, cozy beach shacks, surfing, and as a prime starting point for ocean whale-watching cruises.',
    img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80',
    bestTime: 'November to April',
    weather: '27°C - 30°C (Sunny & Coastal)',
    stay: '2 Days',
    highlights: ['Climb Coconut Tree Hill for photo ops', 'Go Blue Whale & Dolphin watching', 'Snorkel with sea turtles in Parrot Rock bay', 'Relax at beachfront seafood grills'],
    activities: 'Whale watching, surfing, snorkeling, beach yoga.',
    hotels: 'Triple O Six, Lantern Boutique Hotel, Mandara Resort'
  },
  bentota: {
    title: 'Bentota',
    tag: 'Golden Sands',
    desc: 'A serene beach town famous for water sports and pristine golden sands. Bordered by the ocean and a wide estuary, it offers river safaris and premium beachfront resorts.',
    img: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    bestTime: 'November to April',
    weather: '28°C - 31°C (Tropical & Sunny)',
    stay: '2 Days',
    highlights: ['Enjoy jet skiing, banana boats & windsurfing', 'Take a mangrove river safari on Madu Ganga', 'Visit Geoffrey Bawa\'s beautiful Lunuganga Estate', 'See sea turtle hatcheries'],
    activities: 'Water sports, river cruises, architecture tours, spa treatments.',
    hotels: 'Cinnamon Bentota Beach, Taj Bentota Resort & Spa, Saman Villas'
  },
  trincomalee: {
    title: 'Trincomalee',
    tag: 'East Coast Beach',
    desc: 'A beautiful eastern coastal resort town boasting deep natural harbors and white-sand shores. Home to the historical clifftop Koneswaram Temple and excellent coral marine life.',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    bestTime: 'May to September',
    weather: '29°C - 34°C (Sunny & Dry)',
    stay: '2 - 3 Days',
    highlights: ['Snorkel Pigeon Island Marine Sanctuary corals', 'Visit clifftop Nallur Koneswaram Temple', 'Sunbathe on Nilaveli & Uppuveli beaches', 'Spot blue whales in Trinco bay'],
    activities: 'Snorkeling, scuba diving, temple tours, whale watching.',
    hotels: 'Anilana Nilaveli, Jungle Beach by Uga, Trinco Blu by Cinnamon'
  },
  'arugam-bay': {
    title: 'Arugam Bay',
    tag: 'Surfer Haven',
    desc: 'A laid-back surfing village on the east coast, Arugam Bay is ranked among the top ten surf points in the world. Features beach parties, surf lessons, and nearby safari wetlands.',
    img: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    bestTime: 'May to September',
    weather: '28°C - 33°C (Dry & Breezy)',
    stay: '3 Days',
    highlights: ['Surf the famous Main Point break', 'Spot wild elephants at Kumana National Park', 'Watch sunrise at Elephant Rock point', 'Take a lagoon safari tour in Kottukal'],
    activities: 'Surfing, wildlife tracking, lagoon safaris, beach parties.',
    hotels: 'Kottukal Beach House, Hideaway Resort, Blue Wave Hotel'
  },
  jaffna: {
    title: 'Jaffna',
    tag: 'Northern Culture',
    desc: 'Located at the northernmost tip of the island, Jaffna offers a distinct, rich culture with majestic Hindu temples, historic colonial forts, and a unique local spice palette.',
    img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    bestTime: 'December to March',
    weather: '26°C - 31°C (Warm & Breezy)',
    stay: '2 Days',
    highlights: ['Explore golden Nallur Kandaswamy Temple', 'Walk the ramparts of Jaffna Dutch Fort', 'Visit the hot springs at Keerimalai', 'Take a boat to remote Delft Island'],
    activities: 'Heritage tours, boat rides, local culinary tastings.',
    hotels: 'Jetwing Jaffna, North Gate by Destination, The Valampuri'
  },
  anuradhapura: {
    title: 'Anuradhapura',
    tag: 'Ancient Ruins',
    desc: 'Sri Lanka\'s first ancient capital, Anuradhapura is a sacred city hosting massive brick-dome stupas and monasteries dating back over 2,500 years. Home of the sacred Bodhi tree.',
    img: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    bestTime: 'December to March, July to September',
    weather: '29°C - 33°C (Warm & Sunny)',
    stay: '2 Days',
    highlights: ['Pray at the ancient Jaya Sri Maha Bodhi fig tree', 'Marvel at massive Ruwanwelisaya Stupa domes', 'Climb Mihintale Peak, cradle of Buddhism', 'Explore ruins of Brazen Palace'],
    activities: 'Archaeology tours, cycling, sacred pilgrimages.',
    hotels: 'Ulagalla by Uga, Heritage Hotel, Sanctuary at Tissawewa'
  },
  polonnaruwa: {
    title: 'Polonnaruwa',
    tag: 'Medieval Capital',
    desc: 'The second ancient capital of Sri Lanka, Polonnaruwa is a well-preserved archaeological park showcasing medieval palaces, royal pools, and grand stone-carved Buddha statues.',
    img: './sigiriya1.jpg',
    bestTime: 'December to March, July to September',
    weather: '28°C - 32°C (Warm & Sunny)',
    stay: '1 - 2 Days',
    highlights: ['See the Gal Vihara stone Buddha carvings', 'Cycle through the ancient Royal Palace ruins', 'Marvel at the Vatadage circular stone relic house', 'Observe wild monkeys at the ruins'],
    activities: 'Bicycle touring, archaeological hikes, wildlife viewing.',
    hotels: 'Sandalwood Resort, Ekho Lake House, Deer Park Hotel'
  },
  'horton-plains': {
    title: 'Horton Plains',
    tag: 'Mountain Hiking',
    desc: 'A cold, windy highland plateau covered in montane cloud forests and grasslands. Offers incredible biodiversity and features World\'s End, a drop of over 880 meters.',
    img: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    bestTime: 'January to April',
    weather: '10°C - 18°C (Cold & Foggy)',
    stay: '1 Day (Day trip)',
    highlights: ['Hike the 9km loop across plains', 'Stand at World\'s End clifftop drop', 'View the cascading Baker\'s Waterfalls', 'Spot endemic Sambar Deer'],
    activities: 'Hiking, trekking, nature photography, bird watching.',
    hotels: 'Jetwing Warwick Gardens, Grand Hotel (in Nuwara Eliya)'
  },
  udawalawe: {
    title: 'Udawalawe National Park',
    tag: 'Elephant Reserves',
    desc: 'Centered around a giant reservoir, Udawalawe is a flat scrub plain famous for providing guaranteed wild elephant sightings, alongside buffaloes, deer, and diverse birds.',
    img: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80',
    bestTime: 'December to April, July to September',
    weather: '28°C - 32°C (Warm & Breezy)',
    stay: '1 Day (Safari)',
    highlights: ['Spot herds of elephants by the reservoir', 'Visit the Elephant Transit Home nursery', 'Observe eagles, hornbills, and peacocks', 'Take a scenic lake boat ride'],
    activities: '4x4 elephant safaris, bird watching, nature education.',
    hotels: 'Grand Udawalawe Safari Resort, Kalu\'s Hideaway, Centauria Wild'
  }
};

const MONSOON_DATA = {
  jan: {
    title: 'January Weather Forecast',
    desc: 'The island enjoys superb winter weather. The southwest coasts are dry and sunny. Excellent for beach stays and safari tracking.',
    sunny: 'Southern Beaches (Galle, Mirissa), Ella, Kandy, Sigiriya',
    wet: 'Northeast Coast (Trincomalee, Jaffna) - Showers clearing up'
  },
  feb: {
    title: 'February Weather Forecast',
    desc: 'Considered one of the dryest and best months to visit Sri Lanka island-wide. Low humidity and clear skies everywhere.',
    sunny: 'All Regions (Galle, Sigiriya, Yala Safaris, Ella Highlands)',
    wet: 'None - Beautiful dry weather across the island'
  },
  mar: {
    title: 'March Weather Forecast',
    desc: 'Warm and sunny dry season continues. Temperatures rise, making beach waters warm and excellent for snorkeling or diving.',
    sunny: 'Southern Coast, Sigiriya ruins, Ella tea fields, Kandy',
    wet: 'Northeast Coast - Highly dry, occasional brief afternoon showers'
  },
  apr: {
    title: 'April Weather Forecast',
    desc: 'Sinhala & Tamil New Year month. Hot and humid. Inter-monsoonal month bringing light afternoon thunderstorms but clear sunny mornings.',
    sunny: 'Nuwara Eliya (cool relief), Southern Beaches, Cultural Triangle',
    wet: 'Highland trekking trails in late afternoon'
  },
  may: {
    title: 'May Weather Forecast',
    desc: 'The Southwest monsoon (Yala) begins, bringing heavy rainfall to Galle, Colombo, and Weligama. The East Coast stays dry and sunny.',
    sunny: 'Trincomalee Beaches, Jaffna, Arugam Bay (surfing starts)',
    wet: 'Galle Fort, Colombo, Southern Coast beaches (Heavy surf)'
  },
  jun: {
    title: 'June Weather Forecast',
    desc: 'Southwest monsoon remains active. The East Coast offers hot and dry weather with peak beach snorkeling and surfing.',
    sunny: 'Trincomalee (Nilaveli), Pigeon Island, Jaffna, Pasikudah',
    wet: 'Southern Coast, Colombo, Central Highlands (windy & wet)'
  },
  jul: {
    title: 'July Weather Forecast',
    desc: 'Northeast beaches and ancient cultural cities are dry and sunny. Great time to see Sigiriya and cycle around Polonnaruwa ruins.',
    sunny: 'Trincomalee, Jaffna, Sigiriya ruins, Minneriya safaris',
    wet: 'Southern beaches (Galle, Mirissa) - Rough seas'
  },
  aug: {
    title: 'August Weather Forecast',
    desc: 'Mid-summer dry spell brings clear skies to the north-center and east. Kandy Esala Perahera pageant takes place this month.',
    sunny: 'Kandy (Pageant season), Trincomalee, Sigiriya, Jaffna',
    wet: 'Southern coastal waters (Galle, Hikkaduwa) - Rough swimming'
  },
  sep: {
    title: 'September Weather Forecast',
    desc: 'Monsoon transitions. Increased rainfall along the southwest coast, while the east coast begins to see the end of its sunny season.',
    sunny: 'Trincomalee (mornings), Sigiriya, Jaffna Peninsula',
    wet: 'Ella Highlands, Galle, Colombo (humid afternoon showers)'
  },
  oct: {
    title: 'October Weather Forecast',
    desc: 'Wettest month of the year. Inter-monsoonal storms bring rain and lightning across the entire island. Best for spa & museum stays.',
    sunny: 'Colombo (indoor shopping & dining), Anuradhapura (mornings)',
    wet: 'All Regions - High probability of rain island-wide'
  },
  nov: {
    title: 'November Weather Forecast',
    desc: 'Northeast monsoon (Maha) begins, bringing rain to Trincomalee and Jaffna. Meanwhile, the southwest coasts begin drying up.',
    sunny: 'Southern Coast, Galle Fort, Colombo, Mirissa beaches',
    wet: 'Trincomalee, Jaffna, Northeast Coast (heavy rains)'
  },
  dec: {
    title: 'December Weather Forecast',
    desc: 'Peak tourist winter season begins. Golden beaches in the south are sunny and warm. Cool misty mornings in the highlands.',
    sunny: 'Southern Beaches, Galle Fort, Ella Highlands, Yala Safaris',
    wet: 'Northeast coast (Trincomalee, Jaffna) - Showers fading'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- Luxury Intro Preloader Controller ---
  const introLoader = document.getElementById('intro-loader');
  if (introLoader) {
    let dismissed = false;
    const dismissIntro = (immediate = false) => {
      if (dismissed) return;
      dismissed = true;
      if (immediate) {
        introLoader.style.display = 'none';
        introLoader.classList.add('hide');
      } else {
        introLoader.classList.add('hide');
        setTimeout(() => {
          introLoader.style.display = 'none';
        }, 1200);
      }
    };

    // User can click anywhere or press any key to skip immediately
    introLoader.addEventListener('click', () => dismissIntro(false));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        dismissIntro(false);
      }
    });

    // Check if the user already experienced the intro in this tab session
    const hasSeenIntro = sessionStorage.getItem('kindred_intro_seen');
    if (hasSeenIntro) {
      dismissIntro(true);
    } else {
      try { sessionStorage.setItem('kindred_intro_seen', 'true'); } catch (e) {}
      // Show full branded reveal for 2.2 seconds, then smoothly slide away
      setTimeout(() => {
        dismissIntro(false);
      }, 2200);
    }

    // Safety fallback: guaranteed to never block page longer than 2.8s
    setTimeout(() => {
      dismissIntro(false);
    }, 2800);
  }

  // --- Wanderlust Hero Interactive Controllers ---
  // Configuration for Authentic Sri Lanka Travel Options
  const HERO_SEARCH_TABS = {
    flights: {
      labelFrom: 'From (Pick-up)',
      labelTo: 'To (Destination)',
      labelDates: 'Travel Dates',
      datesValue: 'Oct 20 – Oct 28',
      datesPlaceholder: 'Travel dates',
      btnText: 'Search Chauffeur & Transfers',
      showSwap: true,
      optionsFrom: [
        { value: 'Bandaranaike Intl Airport (CMB)', text: 'Bandaranaike Intl Airport (CMB)', selected: true },
        { value: 'Colombo City / Negombo', text: 'Colombo City / Negombo' },
        { value: 'Kandy Royal Citadel', text: 'Kandy Royal Citadel' },
        { value: 'Galle Dutch Fort', text: 'Galle Dutch Fort' },
        { value: 'Mirissa & Weligama Bay', text: 'Mirissa & Weligama Bay' },
        { value: 'Ella & Central Highlands', text: 'Ella & Central Highlands' },
        { value: 'Mattala Rajapaksa Airport (HRI)', text: 'Mattala Rajapaksa Airport (HRI)' },
        { value: 'Bentota / Beruwala', text: 'Bentota / Beruwala' }
      ],
      optionsTo: [
        { value: 'Sigiriya & Cultural Triangle', text: 'Sigiriya & Cultural Triangle', selected: true },
        { value: 'Ella & Tea Highlands (Nine Arch)', text: 'Ella & Tea Highlands (Nine Arch)' },
        { value: 'Yala National Park (Wildlife Safari)', text: 'Yala National Park (Wildlife Safari)' },
        { value: 'Galle Dutch Fort & South Coast', text: 'Galle Dutch Fort & South Coast' },
        { value: 'Mirissa Beach & Whale Watching', text: 'Mirissa Beach & Whale Watching' },
        { value: 'Kandy & Temple of the Tooth', text: 'Kandy & Temple of the Tooth' },
        { value: 'Nuwara Eliya & Horton Plains', text: 'Nuwara Eliya & Horton Plains' },
        { value: 'Trincomalee & Nilaveli Coast', text: 'Trincomalee & Nilaveli Coast' },
        { value: 'All-Island Chauffeur Circuit', text: 'All-Island Chauffeur Circuit' }
      ]
    },
    hotels: {
      labelFrom: 'Destination Region',
      labelTo: 'Stay Collection / Tier',
      labelDates: 'Check-In Dates',
      datesValue: 'Oct 20 – Oct 28',
      datesPlaceholder: 'Check-in to check-out',
      btnText: 'Search Luxury Stays & Villas',
      showSwap: false,
      optionsFrom: [
        { value: 'all', text: 'All Sri Lanka Regions', selected: true },
        { value: 'Sigiriya & Dambulla', text: 'Sigiriya & Dambulla (Kandalama)' },
        { value: 'Ella & Central Highlands', text: 'Ella & Highlands (98 Acres, Tea Trails)' },
        { value: 'Galle Fort & Weligama', text: 'Galle Fort & Weligama (Amangalla)' },
        { value: 'Yala & Wild Coast', text: 'Yala & Wild Coast (Wild Coast Tented Lodge)' },
        { value: 'Tangalle & Bentota', text: 'Tangalle & Bentota (Amanwella, Anantara)' },
        { value: 'Kandy & Knuckles', text: 'Kandy & Knuckles (Santani Wellness)' },
        { value: 'Trincomalee', text: 'Trincomalee (Uga Jungle Beach)' }
      ],
      optionsTo: [
        { value: 'all', text: 'All Luxury Sanctuaries & Suites', selected: true },
        { value: 'luxury-hotel', text: 'Luxury 5★ Hotels' },
        { value: 'boutique-hotel', text: 'Boutique & Heritage Bungalows' },
        { value: 'villa', text: 'Private Luxury Villas' },
        { value: 'beach-resort', text: 'Beachfront Resorts' },
        { value: 'eco-glamping', text: 'Eco Lodges & Safari Glamping' }
      ]
    },
    experiences: {
      labelFrom: 'Signature Tour Package',
      labelTo: 'Experience Focus / Theme',
      labelDates: 'Duration / Dates',
      datesValue: '5–7 Days (Classic Ceylon)',
      datesPlaceholder: 'Trip duration or dates',
      btnText: 'Search Curated Packages',
      showSwap: false,
      optionsFrom: [
        { value: 'classic-highlights', text: 'Classic Sri Lanka Highlights (5 Days)', selected: true },
        { value: 'highlands-surf', text: 'Signature Highlands & Surf (7 Days)' },
        { value: 'grand-island', text: 'The Grand Island Sanctuary (10 Days)' },
        { value: 'romance-honeymoon', text: 'Tropical Romance Honeymoon (8 Days)' },
        { value: 'safari-odyssey', text: 'Big Game Safari Odyssey (8 Days)' },
        { value: 'sacred-kingdoms', text: 'Sacred Kingdoms Heritage Path (6 Days)' },
        { value: 'signature-luxury', text: 'Ceylon Signature Luxury Charter (8 Days)' },
        { value: 'family-adventure', text: 'Island Family Adventure (9 Days)' },
        { value: 'coastal-paradise', text: 'Coastal Paradise & Surf Holiday (8 Days)' },
        { value: 'quick-cultural', text: 'Quick Cultural Heritage Explorer (3 Days)' }
      ],
      optionsTo: [
        { value: 'all', text: 'All Island Highlights & Themes', selected: true },
        { value: 'heritage', text: 'Ancient Citadels & UNESCO Heritage' },
        { value: 'hills', text: 'Misty Highlands & Tea Country Train' },
        { value: 'wildlife', text: 'Wild Leopard & Elephant Safaris' },
        { value: 'beaches', text: 'Golden Coast Beaches & Ocean Surfing' },
        { value: 'colonial', text: 'Colonial Ramparts & Architecture' }
      ]
    }
  };

  // Helper to re-populate select options safely
  function populateHeroSelect(selectElement, optionsList) {
    if (!selectElement || !Array.isArray(optionsList)) return;
    selectElement.innerHTML = '';
    optionsList.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.value;
      el.textContent = opt.text;
      if (opt.selected) el.selected = true;
      selectElement.appendChild(el);
    });
  }

  // 1. "Where to next?" Tab Switcher
  const bookingTabs = document.querySelectorAll('.booking-tab');
  const inputFrom = document.getElementById('input-from');
  const inputTo = document.getElementById('input-to');
  const labelFrom = document.getElementById('label-from');
  const labelTo = document.getElementById('label-to');
  const labelDates = document.getElementById('label-dates');
  const inputDates = document.getElementById('input-dates');
  const inputTravelers = document.getElementById('input-travelers');
  const searchBtnText = document.getElementById('btn-hero-search-text');
  const swapBtn = document.getElementById('swap-locs-btn');
  const wanderlustSearchForm = document.getElementById('wanderlust-search-form');
  let activeTabType = 'flights';

  if (bookingTabs.length > 0) {
    bookingTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        bookingTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabType = tab.getAttribute('data-tab') || 'flights';
        activeTabType = tabType;
        const config = HERO_SEARCH_TABS[tabType];
        if (!config) return;

        if (labelFrom) labelFrom.textContent = config.labelFrom;
        if (labelTo) labelTo.textContent = config.labelTo;
        if (labelDates) labelDates.textContent = config.labelDates;
        if (inputDates) {
          inputDates.value = config.datesValue;
          inputDates.placeholder = config.datesPlaceholder;
        }
        if (searchBtnText) searchBtnText.textContent = config.btnText;
        if (swapBtn) swapBtn.style.display = config.showSwap ? 'inline-flex' : 'none';

        populateHeroSelect(inputFrom, config.optionsFrom);
        populateHeroSelect(inputTo, config.optionsTo);
      });
    });
  }

  // 2. Location Swap Button (for Transports tab)
  if (swapBtn && inputFrom && inputTo) {
    swapBtn.addEventListener('click', () => {
      const valFrom = inputFrom.value;
      const valTo = inputTo.value;

      // Ensure both selects contain the other's value before switching
      let optToInFrom = Array.from(inputFrom.options).find(o => o.value === valTo);
      if (!optToInFrom) {
        inputFrom.add(new Option(valTo, valTo));
      }
      let optFromInTo = Array.from(inputTo.options).find(o => o.value === valFrom);
      if (!optFromInTo) {
        inputTo.add(new Option(valFrom, valFrom));
      }

      inputFrom.value = valTo;
      inputTo.value = valFrom;

      swapBtn.style.transform = 'rotate(180deg)';
      setTimeout(() => { swapBtn.style.transform = ''; }, 300);
    });
  }

  // 3. Search Form Submit Router
  if (wanderlustSearchForm) {
    wanderlustSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fromVal = inputFrom ? inputFrom.value : '';
      const toVal = inputTo ? inputTo.value : '';
      const datesVal = inputDates ? inputDates.value : '';
      const guestsVal = inputTravelers ? inputTravelers.value : '2';

      if (activeTabType === 'flights') {
        // Transports / Chauffeur: Route to plan.html with chauffeur logistics pre-configured
        const params = new URLSearchParams({
          service: 'Chauffeur Service',
          from: fromVal,
          dest: toVal,
          dates: datesVal,
          guests: guestsVal
        });
        window.location.href = `plan.html?${params.toString()}`;
      } else if (activeTabType === 'hotels') {
        // Hotels: Route to hotels.html with region and collection filter
        const params = new URLSearchParams();
        if (fromVal && fromVal !== 'all') params.set('region', fromVal);
        if (toVal && toVal !== 'all') params.set('type', toVal);
        params.set('guests', guestsVal);
        if (datesVal) params.set('dates', datesVal);
        window.location.href = `hotels.html?${params.toString()}`;
      } else if (activeTabType === 'experiences') {
        // Packages / Experiences: Route to packages.html with package focus
        const params = new URLSearchParams({
          pkg: fromVal,
          guests: guestsVal
        });
        if (toVal && toVal !== 'all') params.set('theme', toVal);
        if (datesVal) params.set('duration', datesVal);
        window.location.href = `packages.html?${params.toString()}`;
      }
    });
  }

  // 3. Popular Destinations Mini Carousel Navigation
  const carPrevBtn = document.getElementById('car-prev-btn');
  const carNextBtn = document.getElementById('car-next-btn');
  const popCardsTrack = document.getElementById('pop-dest-cards');

  if (popCardsTrack) {
    if (carPrevBtn) {
      carPrevBtn.addEventListener('click', () => {
        popCardsTrack.scrollBy({ left: -160, behavior: 'smooth' });
      });
    }
    if (carNextBtn) {
      carNextBtn.addEventListener('click', () => {
        popCardsTrack.scrollBy({ left: 160, behavior: 'smooth' });
      });
    }
  }

  // 4. Cinema Video Showcase Modal
  const videoTrigger = document.getElementById('hero-video-trigger');
  const videoOverlay = document.getElementById('video-modal-overlay');
  const videoCloseBtn = document.getElementById('video-modal-close');
  const videoFrame = document.getElementById('hero-video-frame');
  const originalVideoSrc = videoFrame ? videoFrame.src : '';

  const openVideoModal = () => {
    if (!videoOverlay) return;
    videoOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (videoFrame && originalVideoSrc) {
      videoFrame.src = originalVideoSrc.includes('autoplay') ? originalVideoSrc : originalVideoSrc + (originalVideoSrc.includes('?') ? '&' : '?') + 'autoplay=1';
    }
  };

  const closeVideoModal = () => {
    if (!videoOverlay) return;
    videoOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (videoFrame) {
      videoFrame.src = originalVideoSrc;
    }
  };

  if (videoTrigger) videoTrigger.addEventListener('click', openVideoModal);
  if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);
  if (videoOverlay) {
    videoOverlay.addEventListener('click', (e) => {
      if (e.target === videoOverlay) closeVideoModal();
    });
  }

  // 5. Interactive Destination Pin Trigger
  const pinCove = document.getElementById('hero-pin-cove');
  if (pinCove) {
    pinCove.addEventListener('click', () => {
      window.location.href = 'destinations.html?dest=Mirissa';
    });
  }

  // 6. Quick Search Trigger in Navbar
  const navSearchTrigger = document.getElementById('nav-search-trigger');
  if (navSearchTrigger && inputTo) {
    navSearchTrigger.addEventListener('click', () => {
      inputTo.focus();
      inputTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // --- 1. Sticky Navbar & Mobile Menu ---
  const navbar = document.querySelector('.navbar');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isOpen = navLinks.classList.contains('active');
      mobileMenuBtn.innerHTML = isOpen 
        ? '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  // --- 2. Destinations Cards & Modals ---
  const modalOverlay = document.getElementById('modal-overlay');
  let openDestModalById = null;

  if (modalOverlay) {
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalInquireBtn = document.getElementById('modal-inquire-btn');
    const listContainer = modalOverlay.querySelector('.highlights-list');

    openDestModalById = function(destId) {
      const data = DESTINATION_DETAILS[destId];
      if (!data) return;

      // Populate Modal safely
      const imgNode = modalOverlay.querySelector('.modal-img');
      if (imgNode) {
        imgNode.src = data.img;
        imgNode.alt = data.title;
      }

      const titleNode = modalOverlay.querySelector('.modal-header-info h3');
      if (titleNode) titleNode.textContent = data.title;

      const tagNode = modalOverlay.querySelector('.modal-header-info .dest-card-tag');
      if (tagNode) tagNode.textContent = data.tag;

      const bestTimeNode = modalOverlay.querySelector('.modal-meta-grid .meta-item:nth-child(1) .meta-value');
      if (bestTimeNode) bestTimeNode.textContent = data.bestTime;

      const weatherNode = modalOverlay.querySelector('.modal-meta-grid .meta-item:nth-child(2) .meta-value');
      if (weatherNode) weatherNode.textContent = data.weather;

      const stayNode = modalOverlay.querySelector('.modal-meta-grid .meta-item:nth-child(3) .meta-value');
      if (stayNode) stayNode.textContent = data.stay;

      const descNode = modalOverlay.querySelector('.modal-description');
      if (descNode) descNode.textContent = data.desc;

      // Populate Highlights safely
      if (listContainer) {
        listContainer.innerHTML = '';
        data.highlights.forEach(highlight => {
          const li = document.createElement('li');
          li.innerHTML = `<svg class="highlight-bullet" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="color: var(--seafoam); flex-shrink: 0;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> <span>${highlight}</span>`;
          listContainer.appendChild(li);
        });
      }

      // Wire Modal Action Buttons
      if (modalInquireBtn) {
        modalInquireBtn.href = `contact.html?dest=${encodeURIComponent(data.title)}&theme=${encodeURIComponent(data.tag || '')}`;
      }
      const modalPlanBtn = modalOverlay.querySelector('#modal-plan-btn');
      if (modalPlanBtn) {
        modalPlanBtn.href = `plan.html?dest=${encodeURIComponent(data.title)}&interests=${encodeURIComponent(data.tag || '')}&notes=${encodeURIComponent('Inquiring about destination: ' + data.title)}`;
      }

      // Show Modal
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.dest-card').forEach(card => {
      card.addEventListener('click', () => {
        const destId = card.getAttribute('data-dest');
        if (destId) openDestModalById(destId);
      });
    });

    const closeModal = () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'unset';
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    if (modalInquireBtn) {
      modalInquireBtn.addEventListener('click', (e) => {
        const target = document.getElementById('inquiry-section');
        if (target) {
          e.preventDefault();
          closeModal();
          
          // Auto-prefill destination name into the inquiry form's notes
          const modalTitle = modalOverlay.querySelector('.modal-header-info h3');
          const notesTextarea = document.querySelector('#wizard-form textarea[name="notes"]');
          if (modalTitle && notesTextarea) {
            const destName = modalTitle.textContent.trim();
            const currentVal = notesTextarea.value.trim();
            const prefix = `Inquiring about destination: ${destName}.`;
            if (!currentVal.includes(prefix)) {
              notesTextarea.value = (prefix + "\n" + currentVal).trim();
            }
          }
          
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // If not on index.html with #inquiry-section, allow standard navigation to contact.html?dest=...
      });
    }
  }

  // --- 2B. Pinterest Timed Card Opening Showcase ("Unveil Sri Lanka's Wonders") ---
  const wondersViewport = document.getElementById('wonders-viewport');
  if (wondersViewport) {
    const WONDERS_SLIDES = [
      {
        id: 'sigiriya',
        eyebrow: 'Cultural Triangle • UNESCO Heritage',
        title: 'SIGIRIYA<br>CITADEL',
        desc: 'Rise above emerald jungle canopies to the legendary 5th-century palace fortress of King Kasyapa, crowning a sheer 200-meter monolith adorned with celestial frescoes and ancient royal water gardens.',
        backdrop: './sigiriya1.jpg',
        pills: ['5th-Century Fortress', '200m Monolith', 'Mirror Wall Frescoes'],
        inquireDest: 'Sigiriya'
      },
      {
        id: 'ella',
        eyebrow: 'Misty Highlands • Tea Terraces',
        title: 'ELLA<br>NINE ARCH',
        desc: 'Journey through emerald green tea plantations and cool mountain mist along the historic railway viaduct, hiking verdant peaks and discovering roaring waterfalls.',
        backdrop: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1600&q=85',
        pills: ['Scenic Mountain Train', 'Tea Country Trails', 'Ravana Waterfalls'],
        inquireDest: 'Ella'
      },
      {
        id: 'yala',
        eyebrow: 'Wildlife Reserve • Leopard Haven',
        title: 'YALA<br>LEOPARDS',
        desc: 'Traverse untouched scrublands bordering the Indian Ocean in search of the elusive Sri Lankan leopard, roaming wild elephant herds, sloth bears, and vibrant bird sanctuaries.',
        backdrop: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=85',
        pills: ['Highest Leopard Density', 'Wild Elephants', 'Luxury Glamping'],
        inquireDest: 'Yala'
      },
      {
        id: 'galle',
        eyebrow: 'Southern Coast • Dutch Heritage',
        title: 'GALLE<br>DUTCH FORT',
        desc: 'Stroll cobblestone corridors along centuries-old ocean ramparts, discovering chic boutique jewelers, historic lighthouses, and golden sunset viewpoints over crashing ocean breakers.',
        backdrop: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
        pills: ['16th-Century Ramparts', 'Ocean Lighthouse', 'Boutique Heritage'],
        inquireDest: 'Galle'
      },
      {
        id: 'kandy',
        eyebrow: 'Royal Citadel • Spiritual Heart',
        title: 'KANDY<br>SACRED TOOTH',
        desc: 'Experience sacred tranquility at Sri Dalada Maligawa nestled beside the misty lake, surrounded by tropical rain forested peaks, royal botanical gardens, and traditional Kandyan dance traditions.',
        backdrop: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=85',
        pills: ['Temple of the Tooth', 'Botanical Sanctuaries', 'Kandyan Ceremonies'],
        inquireDest: 'Kandy'
      },
      {
        id: 'mirissa',
        eyebrow: 'Tropical Coast • Ocean Sanctuary',
        title: 'MIRISSA<br>BLUE COVE',
        desc: 'Set sail into turquoise blue waters alongside majestic blue whales and playful spinner dolphins, before unwinding beneath leaning coconut palms on golden crescent sands.',
        backdrop: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1600&q=85',
        pills: ['Blue Whale Watching', 'Coconut Tree Hill', 'Turtle Snorkeling'],
        inquireDest: 'Mirissa'
      }
    ];

    let currentWondersIdx = 0;
    const totalSlides = WONDERS_SLIDES.length;
    const backdropEl = document.getElementById('wonders-backdrop');
    const eyebrowEl = document.getElementById('wonders-eyebrow-text');
    const titleEl = document.getElementById('wonders-display-title');
    const descEl = document.getElementById('wonders-display-desc');
    const pillsEl = document.getElementById('wonders-meta-pills');
    const bookmarkBtn = document.getElementById('wonders-bookmark-btn');
    const discoverBtn = document.getElementById('wonders-discover-btn');
    const prevBtn = document.getElementById('wonders-prev-btn');
    const nextBtn = document.getElementById('wonders-next-btn');
    const timerBar = document.getElementById('wonders-timer-bar');
    const counterNum = document.getElementById('wonders-counter-num');
    const previewCards = document.querySelectorAll('.wonders-preview-card');
    const cardsScroll = document.getElementById('wonders-cards-scroll');

    const CYCLE_DURATION = 6000; // 6 seconds per timed card cycle
    let timerStartTime = null;
    let timerAnimFrame = null;
    let isPaused = false;

    function renderSlide(index, animateText = true) {
      currentWondersIdx = (index + totalSlides) % totalSlides;
      const slide = WONDERS_SLIDES[currentWondersIdx];
      if (!slide) return;

      // Update Backdrop smoothly
      if (backdropEl) {
        backdropEl.style.backgroundImage = `url('${slide.backdrop}')`;
      }

      // Smooth text transition
      if (animateText && titleEl && descEl) {
        titleEl.style.opacity = '0';
        titleEl.style.transform = 'translateY(8px)';
        descEl.style.opacity = '0';

        setTimeout(() => {
          if (eyebrowEl) eyebrowEl.textContent = slide.eyebrow;
          titleEl.innerHTML = slide.title;
          descEl.textContent = slide.desc;
          if (pillsEl) {
            pillsEl.innerHTML = slide.pills.map(p => `<span class="meta-pill">${p}</span>`).join('');
          }
          titleEl.style.opacity = '1';
          titleEl.style.transform = 'translateY(0)';
          descEl.style.opacity = '1';
        }, 160);
      } else {
        if (eyebrowEl) eyebrowEl.textContent = slide.eyebrow;
        if (titleEl) titleEl.innerHTML = slide.title;
        if (descEl) descEl.textContent = slide.desc;
        if (pillsEl) {
          pillsEl.innerHTML = slide.pills.map(p => `<span class="meta-pill">${p}</span>`).join('');
        }
      }

      // Update Bookmark Link
      if (bookmarkBtn) {
        bookmarkBtn.href = `contact.html?dest=${encodeURIComponent(slide.inquireDest)}`;
        bookmarkBtn.title = `Quick inquiry about ${slide.inquireDest}`;
      }

      // Update Slide Counter
      if (counterNum) {
        counterNum.textContent = String(currentWondersIdx + 1).padStart(2, '0');
      }

      // Update Active Card in Deck
      previewCards.forEach((card, idx) => {
        if (idx === currentWondersIdx) {
          card.classList.add('active');
          if (cardsScroll) {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        } else {
          card.classList.remove('active');
        }
      });

      // Reset and restart timer
      resetTimer();
    }

    function runTimer(timestamp) {
      if (!timerStartTime) timerStartTime = timestamp;
      if (!isPaused) {
        const elapsed = timestamp - timerStartTime;
        const progress = Math.min((elapsed / CYCLE_DURATION) * 100, 100);
        if (timerBar) {
          timerBar.style.width = `${progress}%`;
        }
        if (elapsed >= CYCLE_DURATION) {
          renderSlide(currentWondersIdx + 1);
          return;
        }
      }
      timerAnimFrame = requestAnimationFrame(runTimer);
    }

    function resetTimer() {
      if (timerAnimFrame) cancelAnimationFrame(timerAnimFrame);
      timerStartTime = null;
      if (timerBar) timerBar.style.width = '0%';
      timerAnimFrame = requestAnimationFrame(runTimer);
    }

    // Prev / Next Button Controls
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        renderSlide(currentWondersIdx - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        renderSlide(currentWondersIdx + 1);
      });
    }

    // Preview Card Click Events
    previewCards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (currentWondersIdx === idx) {
          // If already active, trigger the full destination details modal
          if (typeof openDestModalById === 'function') {
            openDestModalById(WONDERS_SLIDES[idx].id);
          }
        } else {
          renderSlide(idx);
        }
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          renderSlide(idx);
        }
      });
    });

    // Discover Location Button -> Triggers Modal
    if (discoverBtn) {
      discoverBtn.addEventListener('click', () => {
        const currentSlide = WONDERS_SLIDES[currentWondersIdx];
        if (currentSlide && typeof openDestModalById === 'function') {
          openDestModalById(currentSlide.id);
        }
      });
    }

    // Pause on Hover
    wondersViewport.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    wondersViewport.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Start auto cycle
    resetTimer();
  }

  // --- 3. Interactive SVG Route Map ---
  const mapPins = document.querySelectorAll('.map-pin');
  const mapInfoPlaceholder = document.getElementById('map-info-placeholder');
  const mapInfoContent = document.getElementById('map-info-content');

  if (mapPins.length > 0 && mapInfoContent) {
    mapPins.forEach(pin => {
      pin.addEventListener('click', () => {
        // Toggle Active States
        mapPins.forEach(p => p.classList.remove('active'));
        pin.classList.add('active');

        const locId = pin.getAttribute('data-location');
        const data = MAP_DESTINATIONS[locId];
        if (!data) return;

        // Populate Info Panel safely
        const tagNode = mapInfoContent.querySelector('.map-info-tag');
        if (tagNode) tagNode.textContent = data.tag;

        const titleNode = mapInfoContent.querySelector('.map-info-title');
        if (titleNode) titleNode.textContent = data.name;

        const descNode = mapInfoContent.querySelector('.map-info-desc');
        if (descNode) descNode.textContent = data.desc;

        const tempNode = mapInfoContent.querySelector('.map-info-stats .map-stat-value');
        if (tempNode) tempNode.textContent = data.temp;

        const altNodes = mapInfoContent.querySelectorAll('.map-info-stats .map-stat-value');
        if (altNodes && altNodes.length > 1) {
          altNodes[1].textContent = data.altitude;
        }

        const sightNode = mapInfoContent.querySelector('.map-stat-value-sight');
        if (sightNode) sightNode.textContent = data.attraction;

        // Show Info Panel Content
        if (mapInfoPlaceholder) mapInfoPlaceholder.style.display = 'none';
        mapInfoContent.style.display = 'block';
      });
    });
  }

  // --- 4. Itinerary Tabs Selector ---
  const itineraryTabs = document.querySelectorAll('.itinerary-tab');
  const itineraryDetails = document.querySelectorAll('.itinerary-details');

  if (itineraryTabs.length > 0 && itineraryDetails.length > 0) {
    const switchItinerary = (id) => {
      itineraryTabs.forEach(tab => {
        if (tab.getAttribute('data-itin') === id) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      itineraryDetails.forEach(detail => {
        if (detail.id === id) {
          detail.classList.add('active');
        } else {
          detail.classList.remove('active');
        }
      });
    };

    itineraryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const itinId = tab.getAttribute('data-itin');
        switchItinerary(itinId);
      });
    });

    window.switchItinerary = switchItinerary; // Expose globally
  }

  // --- 5. Hero Quick Search Integrator ---
  const searchForm = document.getElementById('hero-search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destination = searchForm.querySelector('select[name="destination"]').value;
      const style = searchForm.querySelector('select[name="style"]').value;
      const duration = searchForm.querySelector('select[name="duration"]').value;

      // Smart routing prioritizing duration parameters
      let targetItin = 'classic-7';
      if (duration === 'short') {
        targetItin = 'classic-7';
      } else if (duration === 'medium') {
        targetItin = 'wildlife-10';
      } else if (duration === 'long') {
        targetItin = 'grand-14';
      } else {
        // Fallback matching if duration is set to "Any"
        if (destination === 'wildlife' || style === 'safari' || destination === 'hills' || style === 'adventure') {
          targetItin = 'wildlife-10';
        } else if (destination === 'cultural' || style === 'cultural') {
          targetItin = 'grand-14';
        }
      }

      if (window.switchItinerary) {
        window.switchItinerary(targetItin);
      }

      // Scroll to section with 90px sticky header offset safety margin
      const target = document.getElementById('itinerary-section');
      if (target) {
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }

  // --- 6. Travel Guide Accordions ---
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;
        if (!item || !content) return;
        const isActive = item.classList.contains('active');

        // Close all accordions
        document.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('active');
          const c = i.querySelector('.accordion-content');
          if (c) c.style.maxHeight = '0';
        });

        // Toggle current accordion
        if (!isActive) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });

    // Open first accordion by default
    const firstAccordion = document.querySelector('.accordion-item');
    if (firstAccordion) {
      firstAccordion.classList.add('active');
      const firstContent = firstAccordion.querySelector('.accordion-content');
      if (firstContent) {
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
      }
    }
  }

  // --- 7. Multi-step Trip Customizer Form Wizard ---
  const wizardForm = document.getElementById('wizard-form');
  if (wizardForm) {
    let currentStep = 1;
    const totalSteps = 3;
    const formSteps = document.querySelectorAll('.form-step');
    const wizardStepNodes = document.querySelectorAll('.wizard-step');
    const prevBtn = document.getElementById('wizard-prev-btn');
    const nextBtn = document.getElementById('wizard-next-btn');
    const successState = document.getElementById('wizard-success');

    // Parse URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlPackage = urlParams.get('package');
    const urlDuration = urlParams.get('duration');
    const urlBudget = urlParams.get('budget');
    const urlInterests = urlParams.get('interests');
    const urlGuests = urlParams.get('guests');
    const urlNotes = urlParams.get('notes');

    // Pre-fill package into notes/special requests
    const notesTextarea = wizardForm.querySelector('textarea[name="notes"]');
    if (notesTextarea) {
      let prefilledNotes = "";
      if (urlPackage) {
        prefilledNotes += `Inquiring about package: ${urlPackage}.\n`;
      }
      if (urlNotes) {
        prefilledNotes += `${urlNotes}\n`;
      }
      if (prefilledNotes) {
        notesTextarea.value = prefilledNotes.trim();
      }
    }

    // Pre-fill duration select
    const durationSelect = wizardForm.querySelector('select[name="duration"]');
    if (durationSelect && urlDuration) {
      let durationVal = urlDuration.replace(/\s*days?/i, '').trim();
      if (['5-7', '8-10', '11-14', '15+'].includes(durationVal)) {
        durationSelect.value = durationVal;
      }
    }

    // Pre-fill budget select
    const budgetSelect = wizardForm.querySelector('select[name="budget"]');
    if (budgetSelect && urlBudget) {
      if (['budget', 'midrange', 'luxury'].includes(urlBudget)) {
        budgetSelect.value = urlBudget;
      }
    }

    // Pre-fill guests select
    const guestsSelect = wizardForm.querySelector('select[name="guests"]');
    if (guestsSelect && urlGuests) {
      if (['1', '2', '3-5', '6+'].includes(urlGuests)) {
        guestsSelect.value = urlGuests;
      } else if (urlGuests.toLowerCase() === 'group') {
        guestsSelect.value = '6+';
      }
    }

    // Pre-fill interests checkboxes
    if (urlInterests) {
      const interestCheckboxes = wizardForm.querySelectorAll('input[name="interest"]');
      const lowerInterests = urlInterests.toLowerCase();
      interestCheckboxes.forEach(cb => {
        const val = cb.value.toLowerCase();
        if (lowerInterests.includes(val) || val.includes(lowerInterests) || (val === 'wildlife' && lowerInterests.includes('safari'))) {
          cb.checked = true;
        }
      });
    }

    // Check if we have pre-fill data from the calculator
    const prefillPackage = localStorage.getItem('booking_prefill_package');
    const prefillGuests = localStorage.getItem('booking_prefill_guests');
    const prefillTier = localStorage.getItem('booking_prefill_tier');

    if (prefillPackage || prefillGuests || prefillTier) {
      // Pre-fill duration select
      const durationSelect = wizardForm.querySelector('select[name="duration"]');
      if (durationSelect && prefillPackage) {
        if (prefillPackage === 'classic-7') durationSelect.value = '5-7';
        else if (prefillPackage === 'wildlife-10') durationSelect.value = '8-10';
        else if (prefillPackage === 'grand-14') durationSelect.value = '11-14';
        else if (prefillPackage === 'beach-5') durationSelect.value = '5-7';
      }

      // Pre-fill guests select
      const guestsSelect = wizardForm.querySelector('select[name="guests"]');
      if (guestsSelect && prefillGuests) {
        const numGuests = parseInt(prefillGuests);
        if (numGuests === 1) guestsSelect.value = '1';
        else if (numGuests === 2) guestsSelect.value = '2';
        else if (numGuests >= 3 && numGuests <= 5) guestsSelect.value = '3-5';
        else if (numGuests >= 6) guestsSelect.value = '6+';
      }

      // Pre-fill budget select
      const budgetSelect = wizardForm.querySelector('select[name="budget"]');
      if (budgetSelect && prefillTier) {
        if (prefillTier === 'value') budgetSelect.value = 'budget';
        else if (prefillTier === 'premium') budgetSelect.value = 'midrange';
        else if (prefillTier === 'luxury') budgetSelect.value = 'luxury';
      }

      // Clear the local storage prefill
      localStorage.removeItem('booking_prefill_package');
      localStorage.removeItem('booking_prefill_guests');
      localStorage.removeItem('booking_prefill_tier');
    }

    const updateWizard = () => {
      // Update step containers visibility
      formSteps.forEach(stepPanel => {
        const stepIdx = parseInt(stepPanel.getAttribute('data-step'));
        if (stepIdx === currentStep) {
          stepPanel.classList.add('active');
        } else {
          stepPanel.classList.remove('active');
        }
      });

      // Update step node bubbles styling
      wizardStepNodes.forEach(node => {
        const stepVal = parseInt(node.getAttribute('data-value'));
        if (stepVal === currentStep) {
          node.className = 'wizard-step active';
        } else if (stepVal < currentStep) {
          node.className = 'wizard-step completed';
        } else {
          node.className = 'wizard-step';
        }
      });

      // Prev Button toggle
      if (prevBtn) {
        prevBtn.style.display = (currentStep === 1) ? 'none' : 'inline-flex';
      }

      // Next/Submit Button content change
      if (nextBtn) {
        if (currentStep === totalSteps) {
          nextBtn.innerHTML = `<span>Submit Inquiry</span> <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;
        } else {
          nextBtn.innerHTML = `<span>Next Step</span> <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
        }
      }
    };

    const validateStep = (stepNum) => {
      let isValid = true;
      if (stepNum === 1) {
        const dateInput = wizardForm.querySelector('input[name="startDate"]');
        if (dateInput) {
          const errorSpan = dateInput.nextElementSibling;
          if (!dateInput.value) {
            if (errorSpan) {
              errorSpan.textContent = 'Please select a tentative start date.';
              errorSpan.style.display = 'block';
            }
            isValid = false;
          } else {
            if (errorSpan) errorSpan.style.display = 'none';
          }
        }
      }
      if (stepNum === 3) {
        const nameInput = wizardForm.querySelector('input[name="name"]');
        const emailInput = wizardForm.querySelector('input[name="email"]');
        const countryInput = wizardForm.querySelector('input[name="country"]');
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate Name
        if (nameInput) {
          if (!nameInput.value.trim()) {
            if (nameInput.nextElementSibling) {
              nameInput.nextElementSibling.textContent = 'Full name is required.';
              nameInput.nextElementSibling.style.display = 'block';
            }
            isValid = false;
          } else {
            if (nameInput.nextElementSibling) nameInput.nextElementSibling.style.display = 'none';
          }
        }

        // Validate Email
        if (emailInput) {
          if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            if (emailInput.nextElementSibling) {
              emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
              emailInput.nextElementSibling.style.display = 'block';
            }
            isValid = false;
          } else {
            if (emailInput.nextElementSibling) emailInput.nextElementSibling.style.display = 'none';
          }
        }

        // Validate Country
        if (countryInput) {
          if (!countryInput.value.trim()) {
            if (countryInput.nextElementSibling) {
              countryInput.nextElementSibling.textContent = 'Country is required.';
              countryInput.nextElementSibling.style.display = 'block';
            }
            isValid = false;
          } else {
            if (countryInput.nextElementSibling) countryInput.nextElementSibling.style.display = 'none';
          }
        }
      }
      return isValid;
    };

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (!validateStep(currentStep)) return;

        if (currentStep < totalSteps) {
          currentStep++;
          updateWizard();
        } else {
          // Form Submitted! Show Success state
          const userNameInput = wizardForm.querySelector('input[name="name"]');
          const userEmailInput = wizardForm.querySelector('input[name="email"]');
          const userCountryInput = wizardForm.querySelector('input[name="country"]');
          const userStartDateInput = wizardForm.querySelector('input[name="startDate"]');
          const userDurationSelect = wizardForm.querySelector('select[name="duration"]');
          const userGuestsSelect = wizardForm.querySelector('select[name="guests"]');
          const userBudgetSelect = wizardForm.querySelector('select[name="budget"]');
          const userNotesTextarea = wizardForm.querySelector('textarea[name="notes"]');
          
          const userName = userNameInput ? userNameInput.value.trim() : '';
          const userEmail = userEmailInput ? userEmailInput.value.trim() : '';
          const userCountry = userCountryInput ? userCountryInput.value.trim() : '';
          const userStartDate = userStartDateInput ? userStartDateInput.value : '';
          const userDuration = userDurationSelect ? userDurationSelect.value : '5-7';
          const userGuests = userGuestsSelect ? userGuestsSelect.value : '2';
          const userBudget = userBudgetSelect ? userBudgetSelect.value : 'midrange';
          const userNotes = userNotesTextarea ? userNotesTextarea.value.trim() : '';

          // Parse checked interests
          const selectedInterests = [];
          wizardForm.querySelectorAll('input[name="interest"]:checked').forEach(cb => {
            selectedInterests.push(cb.value);
          });

          // Cost estimation math
          let dailyRate = 120; // Default
          if (userBudget === 'budget') dailyRate = 75;
          if (userBudget === 'luxury') dailyRate = 250;
          
          let tripDays = 7; // Default
          if (userDuration === '5-7') tripDays = 6;
          if (userDuration === '8-10') tripDays = 9;
          if (userDuration === '11-14') tripDays = 12;
          if (userDuration === '15+') tripDays = 16;
          
          let guestMultiplier = 2; // Default
          if (userGuests === '1') guestMultiplier = 1;
          if (userGuests === '3-5') guestMultiplier = 4;
          if (userGuests === '6+') guestMultiplier = 8;
          
          const totalCost = dailyRate * tripDays * guestMultiplier;

          // Assemble booking object
          const newBooking = {
            id: 'BK-' + Math.floor(1000 + Math.random() * 9000),
            name: userName,
            email: userEmail,
            country: userCountry,
            startDate: userStartDate,
            duration: userDuration + ' Days',
            guests: (userGuests === '1' ? 'Solo Traveler' : userGuests === '2' ? 'Couple (2)' : userGuests === '3-5' ? 'Small Group (3-5)' : 'Large Group (6+)'),
            budget: userBudget.charAt(0).toUpperCase() + userBudget.slice(1) + ' Tier',
            interests: selectedInterests.map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(', '),
            notes: userNotes,
            cost: totalCost,
            status: 'Pending',
            dateCreated: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
          };

          // Append to local bookings pool
          try {
            let bookings = JSON.parse(localStorage.getItem('kindred_bookings') || '[]');
            bookings.push(newBooking);
            localStorage.setItem('kindred_bookings', JSON.stringify(bookings));
          } catch (e) {
            console.error('Error saving booking to localStorage:', e);
          }

          // Auto-trigger client confirmation email sending
          const isEmailJSConfigured = typeof emailjs !== 'undefined' && 
                                      EMAILJS_CONFIG.publicKey && 
                                      EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
                                      EMAILJS_CONFIG.serviceId && 
                                      EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
                                      EMAILJS_CONFIG.templateId && 
                                      EMAILJS_CONFIG.templateId !== 'YOUR_CLIENT_TEMPLATE_ID';

          if (isEmailJSConfigured) {
            // Send background email silently via EmailJS
            emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
              booking_id: newBooking.id,
              client_name: newBooking.name,
              client_email: newBooking.email,
              start_date: newBooking.startDate ? newBooking.startDate : 'Flexible',
              duration: newBooking.duration,
              guests: newBooking.guests,
              budget: newBooking.budget,
              interests: newBooking.interests ? newBooking.interests : 'Custom Explorer',
              notes: newBooking.notes ? newBooking.notes : 'None',
              cost: newBooking.cost.toLocaleString(),
              status: newBooking.status
            }).then(function(response) {
              console.log('CLIENT EMAIL SUCCESS! Background email sent via EmailJS.', response.status, response.text);
            }, function(error) {
              console.error('CLIENT EMAIL FAILURE! Falling back to FormSubmit...', error);
              triggerFormSubmitEmail(newBooking);
            });
          } else {
            // Send via free FormSubmit.co background API!
            triggerFormSubmitEmail(newBooking);
          }

          function triggerFormSubmitEmail(booking) {
            console.log('Attempting silent background email delivery to agency at hello@kindredtravels.lk');
            
            fetch("https://formsubmit.co/ajax/hello@kindredtravels.lk", {
              method: "POST",
              headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify({
                "_subject": `New custom trip planning request - Ref: ${booking.id}`,
                "Reference ID": booking.id,
                "Client Name": booking.name,
                "Client Email": booking.email,
                "email": booking.email, // Required by FormSubmit for Autoresponder
                "_replyto": booking.email, // Allows direct replying to the client
                "Travel Date": booking.startDate ? booking.startDate : 'Flexible Dates',
                "Duration": booking.duration,
                "Group Size": booking.guests,
                "Budget Standard": booking.budget,
                "Selected Themes": booking.interests ? booking.interests : 'Custom Explorer',
                "Estimated Quote Cost": `$${booking.cost.toLocaleString()}`,
                "Special Requests & Notes": booking.notes ? booking.notes : 'None',
                "_autoresponder": `Dear ${booking.name},\n\nThank you for reaching out to Kindred Travels. We have successfully received your custom Sri Lankan tour planning request!\n\nHere is a summary of your inquiry details:\n----------------------------------------\nReference ID: ${booking.id}\nTravel Date: ${booking.startDate ? booking.startDate : 'Flexible Dates'}\nDuration: ${booking.duration}\nTravelers: ${booking.guests}\nBudget Tier: ${booking.budget}\nSelected Themes: ${booking.interests ? booking.interests : 'Custom Explorer'}\nEstimated Cost: $${booking.cost.toLocaleString()}\nSpecial Requests: ${booking.notes ? booking.notes : 'None'}\n----------------------------------------\n\nOur local travel specialists in Colombo are already crafting your custom route. We will reach out to you with your personalized day-by-day path and hotel recommendations shortly.\n\nWarm regards,\nThe Kindred Travels Team\nGalle Road, Colombo 03, Sri Lanka\nhello@kindredtravels.lk | +94 11 234 5678`,
                "_honey": "", // Anti-spam honeypot
                "_template": "table"
              })
            })
            .then(res => res.json())
            .then(data => {
              console.log('FormSubmit.co API Success:', data);
            })
            .catch(err => {
              console.error('FormSubmit background mail failed (failing silently - stored locally):', err);
            });
          }
          
          if (successState) {
            const h3Node = successState.querySelector('h3');
            if (h3Node) h3Node.textContent = `Thank You, ${userName}!`;
            const mailNode = successState.querySelector('.confirm-email');
            if (mailNode) mailNode.textContent = userEmail;
            successState.classList.add('active');
          }
          wizardForm.style.display = 'none';
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          updateWizard();
        }
      });
    }

    // Inquiry Form restart reset
    const resetBtn = document.getElementById('wizard-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        wizardForm.reset();
        currentStep = 1;
        if (successState) successState.classList.remove('active');
        wizardForm.style.display = 'block';
        updateWizard();
      });
    }

    updateWizard();
  }

  // --- SUBPAGE 1: Destinations Grid Filter ---
  const chips = document.querySelectorAll('.filter-chips .chip');
  const destItems = document.querySelectorAll('.destinations-subpage-grid .dest-item');

  if (chips.length > 0 && destItems.length > 0) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        // Toggle active chip
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const filter = chip.getAttribute('data-filter');
        destItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.classList.add('show');
          } else {
            item.classList.remove('show');
          }
        });
      });
    });
  }

  // --- SUBPAGE 2: Itinerary Pricing Calculator ---
  const calcPackage = document.getElementById('calc-package');
  const calcGuests = document.getElementById('calc-guests');
  const calcGuestsLabel = document.getElementById('calc-guests-label');
  const calcTotalNode = document.getElementById('calc-total');
  const calcPerPersonNode = document.getElementById('calc-per-person');
  const calcBookBtn = document.getElementById('calc-book-btn');

  if (calcPackage && calcGuests && calcTotalNode && calcPerPersonNode) {
    const updateCalculator = () => {
      const guests = parseInt(calcGuests.value);
      if (calcGuestsLabel) calcGuestsLabel.textContent = `${guests} ${guests === 1 ? 'Guest' : 'Guests'}`;

      const selectedOpt = (calcPackage.options && calcPackage.selectedIndex >= 0) 
        ? calcPackage.options[calcPackage.selectedIndex] 
        : null;
      if (!selectedOpt) return;
      const basePrice = parseFloat(selectedOpt.getAttribute('data-base')) || 500;

      // Guest multiplier (bulk discounts)
      let guestMultiplier = 1.0;
      if (guests === 1) guestMultiplier = 1.25; // solo supplement
      else if (guests >= 3 && guests <= 5) guestMultiplier = 0.92;
      else if (guests >= 6) guestMultiplier = 0.84;

      // Accommodation tier multiplier
      const tierInput = document.querySelector('input[name="calc-tier"]:checked');
      const tier = tierInput ? tierInput.value : 'premium';
      let tierMultiplier = 1.0;
      if (tier === 'value') tierMultiplier = 0.75;
      else if (tier === 'luxury') tierMultiplier = 1.70;

      const perPersonCost = Math.round(basePrice * guestMultiplier * tierMultiplier);
      const totalCost = perPersonCost * guests;

      calcTotalNode.textContent = `$${totalCost.toLocaleString()}`;
      calcPerPersonNode.textContent = `Based on $${perPersonCost.toLocaleString()} per person`;
    };

    calcPackage.addEventListener('change', updateCalculator);
    calcGuests.addEventListener('input', updateCalculator);
    document.querySelectorAll('input[name="calc-tier"]').forEach(radio => {
      radio.addEventListener('change', updateCalculator);
    });

    if (calcBookBtn) {
      calcBookBtn.addEventListener('click', (e) => {
        const pkg = calcPackage.value;
        const guests = calcGuests.value;
        const tierInput = document.querySelector('input[name="calc-tier"]:checked');
        const tier = tierInput ? tierInput.value : 'premium';

        let mappedTier = 'midrange';
        if (tier === 'value') mappedTier = 'value';
        if (tier === 'luxury') mappedTier = 'luxury';

        let mappedPkg = 'classic-highlights';
        if (pkg === 'classic-7') mappedPkg = 'classic-highlights';
        else if (pkg === 'wildlife-10') mappedPkg = 'safari-odyssey';
        else if (pkg === 'grand-14') mappedPkg = 'grand-island';
        else if (pkg === 'beach-5') mappedPkg = 'coastal-paradise';

        calcBookBtn.href = `plan.html?pkg=${mappedPkg}&guests=${guests}&tier=${mappedTier}`;
      });
    }

    // Run once on load to initialize
    updateCalculator();
  }

  // --- SUBPAGE 3: Guide Panel Tabs ---
  const guideTabBtns = document.querySelectorAll('.guide-tab-btn');
  const guidePanels = document.querySelectorAll('.guide-panel');

  if (guideTabBtns.length > 0 && guidePanels.length > 0) {
    guideTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        guideTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-tab');
        guidePanels.forEach(panel => {
          if (panel.id === targetId) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });
  }

  // --- SUBPAGE 4: Monsoon Monthly Weather Selector ---
  const monthBtns = document.querySelectorAll('.month-btn');
  const monsoonTitle = document.getElementById('monsoon-month-title');
  const monsoonDesc = document.getElementById('monsoon-month-desc');
  const monsoonSunny = document.getElementById('monsoon-sunny-regions');
  const monsoonWet = document.getElementById('monsoon-wet-regions');

  if (monthBtns.length > 0 && monsoonTitle && monsoonDesc && monsoonSunny && monsoonWet) {
    monthBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        monthBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const monthKey = btn.getAttribute('data-month');
        const data = MONSOON_DATA[monthKey];
        if (!data) return;

        monsoonTitle.textContent = data.title;
        monsoonDesc.textContent = data.desc;
        monsoonSunny.textContent = data.sunny;
        monsoonWet.textContent = data.wet;

        // Custom styling highlight based on rain presence
        const resultCard = document.getElementById('monsoon-result');
        if (resultCard) {
          if (monthKey === 'oct') {
            resultCard.style.borderLeft = '4px solid #c0392b';
          } else if (monthKey === 'feb' || monthKey === 'jan' || monthKey === 'dec') {
            resultCard.style.borderLeft = '4px solid var(--accent-gold)';
          } else {
            resultCard.style.borderLeft = 'none';
          }
        }
      });
    });
  }

  // --- SUBPAGE 5: Checklist persistence in LocalStorage ---
  const checklistCheckboxes = document.querySelectorAll('.packing-item input[type="checkbox"]');
  if (checklistCheckboxes.length > 0) {
    // Load saved states
    checklistCheckboxes.forEach((checkbox, idx) => {
      const savedState = localStorage.getItem(`packed_item_${idx}`);
      if (savedState === 'true') {
        checkbox.checked = true;
      }

      checkbox.addEventListener('change', () => {
        localStorage.setItem(`packed_item_${idx}`, checkbox.checked);
      });
    });
  }

  // --- 8. Reveal On Scroll Animations ---
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120; // threshold trigger offset

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on page load to reveal top assets
    setTimeout(revealOnScroll, 300);
  }

  // --- 9. Global Language Switcher Logic ---
  const langSelector = document.querySelector('.lang-selector');
  if (langSelector) {
    const langBtn = langSelector.querySelector('.lang-btn span');
    const langLinks = langSelector.querySelectorAll('.lang-dropdown a');
    
    langLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class
        langLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const langName = link.textContent.trim();
        let langCode = 'EN';
        if (langName === 'Deutsch') langCode = 'DE';
        else if (langName === 'Français') langCode = 'FR';
        else if (langName === 'Español') langCode = 'ES';
        else if (langName === '中文') langCode = 'ZH';
        else if (langName === '日本語') langCode = 'JA';
        else if (langName === 'Sinhala') langCode = 'SI';
        
        if (langBtn) {
          langBtn.textContent = langCode;
        }
        
        // Show a premium glassmorphic toast notification
        showLanguageToast(langName);
      });
    });
  }

  function showLanguageToast(langName) {
    // Check if toast already exists
    let toast = document.getElementById('lang-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'lang-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: rgba(11, 47, 39, 0.9);
        border: 1px solid var(--accent-gold);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        color: var(--white);
        padding: 16px 24px;
        font-family: var(--font-sans);
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.5px;
        z-index: 9999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        gap: 12px;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      `;
      document.body.appendChild(toast);
    }
    
    toast.innerHTML = `
      <svg width="18" height="18" fill="none" stroke="var(--accent-gold)" stroke-width="2.5" viewBox="0 0 24 24" style="animation: spin 1.5s linear infinite;"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h22"></path></svg>
      <span>Translating page to <strong>${langName}</strong>...</span>
      <style>
        @keyframes spin { 100% { transform: rotate(360deg); } }
      </style>
    `;
    
    // Animate in
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
    }, 50);
    
    // Animate out after 2.5 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(20px)';
    }, 2800);
  }

  // --- Highlight active navigation link dynamically ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navSelectorMap = {
    'index.html': '.nav-home',
    'about.html': '.nav-about',
    'destinations.html': '.nav-destinations',
    'packages.html': '.nav-packages',
    'safari.html': '.nav-safari',
    'services.html': '.nav-services',
    'hotels.html': '.nav-hotels',
    'guide.html': '.nav-guide',
    'gallery.html': '.nav-gallery',
    'testimonials.html': '.nav-testimonials',
    'blog.html': '.nav-blog',
    'faq.html': '.nav-faq',
    'contact.html': '.nav-contact',
    'plan.html': '.nav-plan'
  };

  const activeSelector = navSelectorMap[currentPath];
  if (activeSelector) {
    const activeLink = document.querySelector(`.nav-links ${activeSelector}`);
    if (activeLink) {
      activeLink.classList.add('active');
      // If inside dropdown, also highlight parent trigger
      const dropdownWrapper = activeLink.closest('.nav-dropdown-wrapper');
      if (dropdownWrapper) {
        const trigger = dropdownWrapper.querySelector('.nav-dropdown-trigger');
        if (trigger) trigger.classList.add('active');
      }
    }
  }

  // --- Mobile Dropdown toggle ---
  const dropdownTrigger = document.querySelector('.nav-dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.innerWidth <= 992) {
        dropdownTrigger.parentElement.classList.toggle('active');
      }
    });
  }
});
