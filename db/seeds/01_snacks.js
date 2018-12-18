const TABLE_NAME = 'snacks'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      name: 'Corn Dog',
      description: 'Leberkas jowl prosciutto pork loin. Pig meatloaf porchetta cow strip steak shoulder ground round short loin tail spare ribs sausage doner pancetta. Salami leberkas pork, pancetta shoulder beef ribs brisket boudin filet mignon. Corned beef shank jowl t-bone, strip steak cow short loin pork chop biltong meatloaf short ribs turducken.',
      img: 'http://www.foodnfocus.com/wp-content/uploads/2013/08/IMG_6890.jpg',
      price: 3.00,
      isPerishable: true
    },
    {
      id: 2,
      name: 'Turkey and Pesto Panini',
      description: 'Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.',
      img: 'http://www.shutterbean.com/wp-content/uploads/2013/01/turkeypestopepperpanini6832.jpg',
      price: 4.00,
      isPerishable: true
    },
    {
      id: 3,
      name: 'Mozzarella Sticks',
      description: 'Spare ribs strip steak turkey meatball doner, pork belly shankle pastrami sausage porchetta pancetta bacon turducken. Drumstick salami rump, tongue venison capicola short loin buffalo beef ribs. Jerky ball tip kielbasa biltong tenderloin kevin flank porchetta chuck fatback pork sirloin beef ribs bacon. Alcatra capicola filet mignon tongue cow. Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!',
      img: 'https://tarasmulticulturaltable.com/wp-content/uploads/2018/01/Baked-Mozzarella-Sticks-2-of-5-1024x681.jpg',
      price: 4.00,
      isPerishable: true
    },
    {
      id: 4,
      name: 'Poutine',
      description: 'Leberkas jowl prosciutto pork loin. Pig meatloaf porchetta cow strip steak shoulder ground round short loin tail spare ribs sausage doner pancetta. Salami leberkas pork, pancetta shoulder beef ribs brisket boudin filet mignon. Corned beef shank jowl t-bone, strip steak cow short loin pork chop biltong meatloaf short ribs turducken.',
      img: 'https://images-gmi-pmc.edge-generalmills.com/5ffeb759-379c-48f4-944b-4824d9f5803b.jpg',
      price: 4.00,
      isPerishable: true
    },
    {
      id: 5,
      name: 'Mac n Cheese Balls',
      description: 'Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.',
      img: 'https://assets3.thrillist.com/v1/image/1799113/size/tmg-facebook_social.jpg',
      price: 5.00,
      isPerishable: true
    },
    {
      id: 6,
      name: 'Bearclaw',
      description: 'HOT! Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.',
      img: 'https://cdn.shopify.com/s/files/1/0183/6721/products/bear_claw_4pk_shop_1_1024x1024.jpg',
      price: 5.00,
      isPerishable: true
    },
    {
      id: 7,
      name: 'Baby Carrots served with Ranch Dressing',
      description: 'Leberkas jowl prosciutto pork loin. Pig meatloaf porchetta cow strip steak shoulder ground round short loin tail spare ribs sausage doner pancetta. Salami leberkas pork, pancetta shoulder beef ribs brisket boudin filet mignon. Corned beef shank jowl t-bone, strip steak cow short loin pork chop biltong meatloaf short ribs turducken.',
      img: 'http://d2droglu4qf8st.cloudfront.net/2015/08/231144/Glazed-Baby-Carrots_ExtraLarge1000_ID-1124435.jpg',
      price: 1.00,
      isPerishable: true
    },
    {
      id: 8,
      name: 'Onion Rings with Ketchup',
      description: 'Spicy jalapeno bacon ipsum dolor amet capicola picanha filet mignon t-bone meatloaf. Flank turducken pork chop, jowl pork belly bacon beef shoulder t-bone sausage tail chicken meatloaf short loin. Sausage shoulder pork, kielbasa swine spare ribs turducken short ribs porchetta andouille pork belly drumstick hamburger ribeye. Porchetta short loin short ribs, prosciutto doner jowl bresaola shank turducken venison tail kevin ball tip buffalo cupim. Jerky porchetta sausage andouille, turkey fatback shankle. Ham hock drumstick pork belly, meatball short ribs beef ribs ground round bacon andouille porchetta pig.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flickr_pancakejess_677476794--Onion_rings.jpg',
      price: 5.00,
      isPerishable: true
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
