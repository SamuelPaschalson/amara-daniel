const img = (n) => `/images/photo-${String(n).padStart(2, '0')}.webp`;

export const weddingData = {
  couple: { partnerOne: 'Amanda', partnerTwo: 'Nnanyelugo', initials: 'A & N' },
  dateISO: '2026-12-19T11:00:00+01:00',
  date: '19 December 2026',
  dateShort: '19.12.2026',
  day: 'Saturday',
  venue: "St. Piran's Anglican Church",
  location: 'Jos, Nigeria',
  mapUrl: "https://www.google.com/maps/search/?api=1&query=St.%20Piran's%20Anglican%20Church%20Jos%20Nigeria",
  heroImage: img(1),
  featuredImage: img(2),
  audioUrl: '/audio/ambient.mp3',
  nav: [
    ['Our Story', '/#story'],
    ['The Couple', '/#couple'],
    ['Wedding', '/#wedding'],
    ['Schedule', '/#schedule'],
    ['Gallery', '/#gallery'],
    ['Travel', '/#travel'],
  ],
  storyIntro: {
    eyebrow: 'Our Journey',
    title: 'Two Doctors, One Island, Forever.',
    body: 'Seven chapters of quiet glances, playful algorithms, fake birthday parties, and answered prayers.'
  },
  story: [
    {
      num: '01',
      roman: 'I',
      kicker: 'Chapter One · Two Lives, One Place',
      title: 'Two Lives, One Island',
      paragraphs: [
        'Our story quietly began across the seas in the UK, where we were both deep in hospital corridors, surviving long NHS rotas, and pursuing our lifelong dreams as doctors.',
        'Two completely separate lives, moving at full speed through clinics, on-call bleepers, and ward rounds—blissfully unaware that destiny was quietly orchestrating the moment our worlds would collide.'
      ],
      image: img(3),
      alt: 'Amanda and Nnanyelugo sharing a warm, gentle smile'
    },
    {
      num: '02',
      roman: 'II',
      kicker: 'Chapter Two · The First Notice',
      title: 'The Silent Reconnaissance',
      paragraphs: [
        'Long before we ever officially met, exchanged a greeting, or shared a room, an eagle eye had already noticed her on Facebook.',
        'Call it keen clinical observation or an undeniable spark from afar, but what began as an innocent glance would eventually evolve into an adventure neither of us could have ever anticipated.'
      ],
      image: img(15),
      alt: 'Nnanyelugo looking thoughtfully sideways while holding Amanda’s hand'
    },
    {
      num: '03',
      roman: 'III',
      kicker: 'Chapter Three · A Little Help',
      title: 'Cupid & The Mutual Friend',
      paragraphs: [
        'Every great love story has a helper—someone who spots the chemistry before it even ignites and gives the universe a gentle push. Ours arrived in the form of a wonderful mutual friend.',
        'With that little nudge of encouragement, the dominoes began to fall:'
      ],
      timelineSteps: [
        'A Facebook follow became an Instagram request.',
        'The request sparked a late-night conversation.',
        'The conversation turned into an invitation.',
        'And she took a leap of faith and said yes.'
      ],
      image: img(18),
      alt: 'Amanda and Nnanyelugo embracing with joyful laughter'
    },
    {
      num: '04',
      roman: 'IV',
      kicker: 'Chapter Four · Where It All Began',
      title: 'Lattes, Banter & Nervous Smiles',
      paragraphs: [
        'Our first date was delightfully unassuming—a warm café corner, steaming cups, a few nervous smiles, and an effortless conversation that made hours slip away unnoticed.',
        'One date quickly melted into another. Between demanding hospital rotations, spontaneous late-night calls, and unpredictable days, we became each other’s constant.',
        'Slowly and naturally, we became much more than a couple. We became best friends, each other’s deepest sounding board, and the safe harbour we could always count on.'
      ],
      image: img(4),
      objectPosition: 'center 46%',
      alt: 'Amanda and Nnanyelugo laughing during their portrait session'
    },
    {
      num: '05',
      roman: 'V',
      kicker: 'Chapter Five · The Proposal',
      title: 'The Niece’s Party That Wasn’t',
      paragraphs: [
        'She was told they were heading out for an intimate family celebration for her niece. She arrived with smiles, gifts, and absolutely zero suspicions—completely unaware that he had spent weeks orchestrating the sweetest covert operation of his life.',
        'Surrounded by family holding their collective breath, he took her hands, spoke straight from his heart, and got down on one knee.',
        'Through joyful tears, stunned laughter, and a room full of cheering loved ones, she said yes to spending forever together.'
      ],
      image: img(17),
      alt: 'Amanda showing her engagement ring with radiant happiness beside Nnanyelugo'
    },
    {
      num: '06',
      roman: 'VI',
      kicker: 'Chapter Six · Us',
      title: 'Behind The Stethoscopes',
      paragraphs: [
        'Beyond hospital wards and clinical scrubs, we are simply two best friends deeply in love with doing life together.',
        'We love spending quality time together, spontaneous date nights, discovering new food spots, packing suitcases for new adventures, laughing until our stomachs hurt, and just reveling in each other’s company.',
        'We admire each other’s tender kindness, quiet strength, fierce ambition, and unwavering devotion to family.'
      ],
      tags: ['Quality Time', 'Date Nights', 'World Travel', 'Unfiltered Laughter', 'Ambition & Grace', 'Family First'],
      image: img(19),
      alt: 'Amanda and Nnanyelugo dressed in modern Ankara traditional attire'
    },
    {
      num: '07',
      roman: 'VII',
      kicker: 'Chapter Seven · The Beginning of Forever',
      title: 'Our Prayer & Forever',
      paragraphs: [
        'As we begin this sacred chapter together, our deepest prayer is that God remains at the very centre of our marriage, our home, and every step we take.',
        'We pray for a lifetime of steadfast love, enduring friendship, unwavering faith, contagious laughter, mutual growth, and countless beautiful memories.'
      ],
      epilogue: [
        'From a Facebook follow…',
        'to an Instagram request…',
        'to a café date…',
        'to becoming best friends…',
        'to saying yes to forever.'
      ],
      closingNote: 'This is our love story. And this is only the beginning.',
      image: img(21),
      alt: 'Nnanyelugo giving Amanda a tender kiss on the cheek'
    }
  ],
  coupleProfiles: [
    {
      name: 'Amanda',
      role: 'The Bride',
      text: 'A physician with a radiant heart, lover of good books, travel, and quiet moments of joy. Her kindness, strength, and infectious smile bring light into every room.',
      image: img(6)
    },
    {
      name: 'Nnanyelugo',
      role: 'The Groom',
      text: 'A dedicated doctor, eternal optimist, and thoughtful soul. He combines sharp ambition with deep devotion, always ready with an encouraging word and a warm embrace.',
      image: img(7)
    }
  ],
  events: [
    { title: 'Solemnization', time: '11:00 AM', place: "St. Piran's Anglican Church" },
    { title: 'Cocktail Welcome', time: '1:30 PM', place: 'Mees Palace' },
    { title: 'Reception & Banquet', time: '2:00 PM', place: 'Mees Palace' }
  ],
  schedule: [
    ['10:30 AM', 'Guests Arrive & Seating'],
    ['11:00 AM', 'Holy Matrimony'],
    ['01:30 PM', 'Cocktail Hour'],
    ['02:00 PM', 'Grand Reception'],
    ['03:30 PM', 'First Dance'],
    ['04:00 PM', 'Toasts & Celebration'],
    ['07:00 PM', 'Afterparty & Last Dance']
  ],
  gallery: [
    1, 15, 2, 17, 8, 16, 9, 18, 10, 19, 11, 20, 12, 21, 13, 14, 3, 4, 5, 6, 7
  ].map((n, i) => ({
    src: img(n),
    alt: `Amanda and Nnanyelugo wedding portrait ${i + 1}`
  })),
  hotels: [
    { name: 'Crispan Suites', area: 'Rayfield · Jos', price: '₦₦₦', text: 'A polished city stay with modern luxury rooms and convenient access to the celebration venue.', url: 'https://www.google.com/maps/search/?api=1&query=Crispan%20Suites%20Jos' },
    { name: 'Jos Continental Hotel', area: 'Rayfield Road · Jos', price: '₦₦₦', text: 'Comfortable rooms, generous shared spaces, and a central location for wedding guests.', url: 'https://www.google.com/maps/search/?api=1&query=Jos%20Continental%20Hotel' },
    { name: 'Hill Station Hotel', area: 'Old Airport Road · Jos', price: '₦₦', text: 'A longstanding Jos retreat with relaxed scenic grounds and easy city access.', url: 'https://www.google.com/maps/search/?api=1&query=Hill%20Station%20Hotel%20Jos' }
  ],
  dressColors: [
    ['Burgundy', '#751f35'],
    ['Champagne Gold', '#c7a36a'],
    ['Rose Gold', '#b76e79']
  ],
  faqs: [
    ['What time should I arrive?', 'Please arrive by 10:30 AM so you have time to be seated comfortably before the service begins at 11:00 AM.'],
    ['Is the ceremony indoors or outdoors?', 'The church service will take place inside St. Piran\'s Anglican Church, followed by our reception at Mees Palace.'],
    ['Is there parking at the venue?', 'Yes, complimentary and attended parking is available at both St. Piran\'s and Mees Palace.'],
    ['Can I bring a plus one?', 'Your invitation indicates whether a plus-one has been reserved for you. Please let us know their name when completing your RSVP.'],
    ['Are children invited?', 'While we adore your little ones, our celebration is an adults-only event unless explicitly stated on your invitation.'],
    ['What should I wear?', 'Formal elegance: Burgundy, Champagne Gold, and Rose Gold are the colors of the day. Feel free to wear contemporary or traditional formal attire.'],
    ['Where can I stay in Jos?', 'We have listed our top recommended hotels in the Travel section, with options located close to the venues.'],
    ['Who can I contact for questions?', 'Feel free to reach out to our wedding planning team or leave a message through the guestbook!']
  ]
};
