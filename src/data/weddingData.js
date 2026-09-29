const img = (n) => `/images/photo-${String(n).padStart(2,'0')}.webp`;
export const weddingData = {
  couple:{partnerOne:'Amara',partnerTwo:'Daniel',initials:'A & D'},
  dateISO:'2027-04-18T16:00:00+01:00', date:'18 April 2027', dateShort:'18.04.2027', day:'Saturday',
  venue:'The Olive Grove Estate', location:'Abuja, Nigeria', mapUrl:'https://www.google.com/maps/search/?api=1&query=Abuja%20Nigeria',
  heroImage:img(1), featuredImage:img(2), audioUrl:'/audio/ambient.mp3',
  nav:[['Our Story','/#story'],['Wedding','/#wedding'],['Schedule','/#schedule'],['Gallery','/#gallery'],['Travel','/#travel']],
  story:[
    {year:'2019',kicker:'The beginning',title:'How We Met',text:'A missed turn, a crowded bookshop, and one last seat at the café. Daniel asked if it was taken. Amara said, “Not yet.” Neither of them knew how much those two words would change.',image:img(3)},
    {year:'2021',kicker:'The adventure',title:'The First Date',text:'What was meant to be a quick dinner became a long walk under Abuja’s evening sky—full of laughter, shared playlists, and the comfortable feeling of having known each other for years.',image:img(4)},
    {year:'2026',kicker:'The promise',title:'The Proposal',text:'At golden hour, beneath an olive tree and surrounded by their closest people, Daniel asked the easiest question of their lives. Amara’s answer arrived before he had finished.',image:img(5)}
  ],
  coupleProfiles:[
    {name:'Amara',role:'Bride',text:'A collector of beautiful sentences, slow Sundays, and reasons to celebrate. She brings warmth to every room.',image:img(6)},
    {name:'Daniel',role:'Groom',text:'An eternal optimist, thoughtful host, and maker of excellent playlists. He always saves the last dance.',image:img(7)}
  ],
  events:[
    {title:'Ceremony',time:'4:00 PM',place:'The Olive Grove Estate'},
    {title:'Cocktail Hour',time:'5:00 PM',place:'Garden Terrace'},
    {title:'Reception',time:'6:30 PM',place:'The Grand Pavilion'}
  ],
  schedule:[['03:30 PM','Guests Arrive'],['04:00 PM','Ceremony'],['05:00 PM','Cocktail Hour'],['06:30 PM','Dinner'],['08:00 PM','First Dance'],['09:00 PM','Celebration'],['11:30 PM','Last Dance']],
  gallery:[1,2,8,9,10,11,12,13,14,3,4,5].map((n,i)=>({src:img(n),alt:`Amara and Daniel engagement portrait ${i+1}`})),
  hotels:[
    {name:'The Meridian Abuja',area:'Maitama · 18 min away',price:'₦₦₦',text:'Contemporary rooms, a quiet pool, and an easy drive to the estate.',url:'https://www.google.com/maps/search/?api=1&query=hotels%20Maitama%20Abuja'},
    {name:'Cedar House',area:'Asokoro · 14 min away',price:'₦₦',text:'An intimate boutique stay with a leafy courtyard and relaxed service.',url:'https://www.google.com/maps/search/?api=1&query=hotels%20Asokoro%20Abuja'},
    {name:'The Capital Suites',area:'Central Area · 24 min away',price:'₦₦₦',text:'Spacious suites for longer stays, close to the city’s main landmarks.',url:'https://www.google.com/maps/search/?api=1&query=hotels%20Central%20Area%20Abuja'}
  ],
  dressColors:[['Burgundy','#751f35'],['Champagne Gold','#c7a36a'],['Rose Gold','#b76e79']],
  faqs:[
    ['What time should I arrive?','Please arrive by 3:30 PM so you have time to be seated before the ceremony begins at 4:00 PM.'],
    ['Is the ceremony outdoors?','Yes. The ceremony is planned for the olive lawn. We recommend comfortable shoes for grass.'],
    ['Is there parking?','Complimentary, attended parking is available at the estate. Follow the signs from the main gate.'],
    ['Can I bring a plus one?','Your invitation will indicate whether a guest has been included. Please add their name to your RSVP.'],
    ['Are children invited?','We adore your little ones, but our celebration is an adults-only evening unless noted on your invitation.'],
    ['What should I wear?','Garden formal: elegant, effortless, and comfortable for an evening outdoors. The palette is inspiration, not a requirement.'],
    ['Where can I stay?','Our three recommended hotels are listed in the Travel section, with options across Maitama, Asokoro, and Central Area.'],
    ['What happens if it rains?','The ceremony and cocktail hour will move to the covered pavilion. The celebration will continue beautifully.']
  ]
};
