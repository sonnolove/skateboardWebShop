function createProducts() {
   if (localStorage.getItem('product') == null) {
      let product = [
         {
            id: 1,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s1.jpg",
            category: 'Best sale',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 2,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s2.jpg",
            category: 'Longboard Decks',
            price: 460000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 3,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s3.jpg",
            category: 'Best sale',
            price: 550000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 4,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s4.jpg",
            category: 'Longboard Decks',
            price: 890000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 5,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s5.jpg",
            category: 'Best sale',
            price: 950000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 6,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s6.jpg",
            category: 'Skateboard decks',
            price: 650000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 7,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s7.jpg",
            category: 'Skateboard decks',
            price: 440000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 8,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s8.jpg",
            category: 'Longboard Decks',
            price: 300000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 9,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s9.jpg",
            category: 'Skateboard decks',
            price: 900000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 10,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s10.jpg",
            category: 'Skateboard decks',
            price: 700000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 11,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s11.jpg",
            category: 'Best sale',
            price: 870000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 12,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s12.jpg",
            category: 'Best sale',
            price: 65000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 13,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s13.jpg",
            category: 'Best sale',
            price: 560000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 14,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s14.jpg",
            category: 'Longboard Decks',
            price: 780000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 15,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s15.jpg",
            category: 'Skateboard Wheels',
            price: 550000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 16,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s16.jpg",
            category: 'Skateboard Wheels',
            price: 990000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 17,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s17.jpg",
            category: 'Skateboard Wheels',
            price: 900000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 18,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s18.jpg",
            category: 'Skateboard Wheels',
            price: 430000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 19,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s19.jpg",
            category: 'Skateboard Wheels',
            price: 400000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 20,
            status: 1,
            title: 'Santa Croz',
            img: "./img/products/s20.jpg",
            category: 'Skateboard Wheels',
            price: 990000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 21,
            status: 1,
            title: 'Gonex Skateboard Elbow Pads Knee Pads with Wrist Guards for Kids Youth Adult',
            img: "./img/products/p1.jpg",
            category: 'Protective',
            price: 550000,
            desc: 'Gonex Skateboard Elbow Pads Knee Pads with Wrist Guards for Kids Youth Adult.'
         },
         {
            id: 22,
            status: 1,
            title: 'Kids 3x2 skating scooter skateboard protectors set play - black',
            img: "./img/products/p2.jpg",
            category: 'Protective',
            price: 750000,
            desc: 'Kids 3x2 skating scooter skateboard protectors set play - black.'
         },
         {
            id: 23,
            status: 1,
            title: 'S1 Lifer Helmet Glitter',
            img: "./img/products/p3.jpg",
            category: 'Protective',
            price: 650000,
            desc: 'S1 Lifer Helmet Glitter.'
         },
         {
            id: 24,
            status: 1,
            title: 'TSG Evolution Helmet',
            img: "./img/products/p4.jpg",
            category: 'Protective',
            price: 550000,
            desc: 'TSG Evolution Helmet.'
         },
         {
            id: 25,
            status: 1,
            title: 'BANWOOD SKATEBOARD PROTECTIVE GEAR',
            img: "./img/products/p5.jpg",
            category: 'Protective',
            price: 300000,
            desc: 'BANWOOD SKATEBOARD PROTECTIVE GEAR.'
         },


      ]
      //  console.log(product);
      //  localStorage.getItem('product', (product));

      localStorage.getItem('product', JSON.stringify(product));


   }

}

window.onload = createProducts();