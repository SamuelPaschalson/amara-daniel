const img = (n) => `/images/photo-${String(n).padStart(2,'0')}.webp`;
export const weddingData = {
  couple:{partnerOne:'Amanda',partnerTwo:'Nnanyelugo',initials:'A & N'},
  dateISO:'2026-12-19T11:00:00+01:00', date:'19 December 2026', dateShort:'19.12.2026', day:'Saturday',
  venue:"St. Piran's Anglican Church", location:'Jos, Nigeria', mapUrl:"https://www.google.com/maps/search/?api=1&query=St.%20Piran's%20Anglican%20Church%20Jos%20Nigeria",
  heroImage:img(1), featuredImage:img(2), audioUrl:'/audio/ambient.mp3',
  nav:[['Our Story','/#story'],['Wedding','/#wedding'],['Schedule','/#schedule'],['Gallery','/#gallery'],['Travel','/#travel']],
  story:[
    {year:'2019',kicker:'The beginning',title:'How We Met',text:'A missed turn, a crowded bookshop, and one last seat at the café. Nnanyelugo asked if it was taken. Amanda said, “Not yet.” Neither of them knew how much those two words would change.',image:img(3)},
    {year:'2021',kicker:'The adventure',title:'The First Date',text:'What was meant to be a quick dinner became a long walk under Jos’ evening sky—full of laughter, shared playlists, and the comfortable feeling of having known each other for years.',image:img(4)},
    {year:'2026',kicker:'The promise',title:'The Proposal',text:'At golden hour, surrounded by their closest people, Nnanyelugo asked the easiest question of their lives. Amanda’s answer arrived before he had finished.',image:img(5)}
  ],
  coupleProfiles:[
    {name:'Amanda',role:'Bride',text:'A collector of beautiful sentences, slow Sundays, and reasons to celebrate. She brings warmth to every room.',image:img(6)},
    {name:'Nnanyelugo',role:'Groom',text:'An eternal optimist, thoughtful host, and maker of excellent playlists. He always saves the last dance.',image:img(7)}
  ],
  events:[
    {title:'Ceremony',time:'11:00 AM',place:"St. Piran's Anglican Church"},
    {title:'Cocktail Welcome',time:'1:30 PM',place:'Mees Palace'},
    {title:'Reception',time:'2:00 PM',place:'Mees Palace'}
  ],
  schedule:[['10:30 AM','Guests Arrive'],['11:00 AM','Ceremony'],['01:30 PM','Cocktail Welcome'],['02:00 PM','Reception'],['03:30 PM','First Dance'],['04:00 PM','Celebration'],['07:00 PM','Last Dance']],
  gallery:[1,2,8,9,10,11,12,13,14,3,4,5].map((n,i)=>({src:img(n),alt:`Amanda and Nnanyelugo engagement portrait ${i+1}`})),
  hotels:[
    {name:'Crispan Suites',area:'Rayfield · Jos',price:'₦₦₦',text:'A polished city stay with modern rooms and convenient access to the celebration.',url:'https://www.google.com/maps/search/?api=1&query=Crispan%20Suites%20Jos'},
    {name:'Jos Continental Hotel',area:'Rayfield Road · Jos',price:'₦₦₦',text:'Comfortable rooms, generous shared spaces, and a central location for wedding guests.',url:'https://www.google.com/maps/search/?api=1&query=Jos%20Continental%20Hotel'},
    {name:'Hill Station Hotel',area:'Old Airport Road · Jos',price:'₦₦',text:'A longstanding Jos retreat with relaxed grounds and easy city access.',url:'https://www.google.com/maps/search/?api=1&query=Hill%20Station%20Hotel%20Jos'}
  ],
  dressColors:[['Burgundy','#751f35'],['Champagne Gold','#c7a36a'],['Rose Gold','#b76e79']],
  faqs:[
    ['What time should I arrive?','Please arrive by 10:30 AM so you have time to be seated before the ceremony begins at 11:00 AM.'],
    ['Is the ceremony outdoors?','Yes. The ceremony is planned for the olive lawn. We recommend comfortable shoes for grass.'],
    ['Is there parking?','Complimentary, attended parking is available at the estate. Follow the signs from the main gate.'],
    ['Can I bring a plus one?','Your invitation will indicate whether a guest has been included. Please add their name to your RSVP.'],
    ['Are children invited?','We adore your little ones, but our celebration is an adults-only evening unless noted on your invitation.'],
    ['What should I wear?','Garden formal: elegant, effortless, and comfortable for an evening outdoors. The palette is inspiration, not a requirement.'],
    ['Where can I stay?','Our three recommended hotels are listed in the Travel section, with options across Maitama, Asokoro, and Central Area.'],
    ['What happens if it rains?','The ceremony and cocktail hour will move to the covered pavilion. The celebration will continue beautifully.']
  ]
};
