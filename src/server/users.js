 const users = [
   {
     id: 1,
     name: "Leanne Graham",
     username: "Bret",
     email: "Sincere@april.biz",
     image:
       "https://cdn.vox-cdn.com/thumbor/7V215zr-UJu7J1bwwvzwggmk6WA=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19216621/000124.jpg",
     address: {
       street: "Kulas Light",
       suite: "Apt. 556",
       city: "Gwenborough",
       zipcode: "92998-3874",
       geo: {
         lat: "-37.3159",
         lng: "81.1496",
       },
     },
     phone: "1-770-736-8031 x56442",
     website: "hildegard.org",
     company: {
       name: "Romaguera-Crona",
       catchPhrase: "Multi-layered client-server neural-net",
       bs: "harness real-time e-markets",
     },
   },
   {
     id: 2,
     image:
       "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
     name: "Ervin Howell",
     username: "Antonette",
     email: "Shanna@melissa.tv",
     address: {
       street: "Victor Plains",
       suite: "Suite 879",
       city: "Wisokyburgh",
       zipcode: "90566-7771",
       geo: {
         lat: "-43.9509",
         lng: "-34.4618",
       },
     },
     phone: "010-692-6593 x09125",
     website: "anastasia.net",
     company: {
       name: "Deckow-Crist",
       catchPhrase: "Proactive didactic contingency",
       bs: "synergize scalable supply-chains",
     },
   },
   {
     id: 3,
     image:
       "https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg",
     name: "Clementine Bauch",
     username: "Samantha",
     email: "Nathan@yesenia.net",
     address: {
       street: "Douglas Extension",
       suite: "Suite 847",
       city: "McKenziehaven",
       zipcode: "59590-4157",
       geo: {
         lat: "-68.6102",
         lng: "-47.0653",
       },
     },
     phone: "1-463-123-4447",
     website: "ramiro.info",
     company: {
       name: "Romaguera-Jacobson",
       catchPhrase: "Face to face bifurcated interface",
       bs: "e-enable strategic applications",
     },
   },
   {
     id: 4,
     image:
       "https://pm1.narvii.com/6749/628c9d4908fdb2e86d673c65be06ef848b45d08ev2_hq.jpg",
     name: "Patricia Lebsack",
     username: "Karianne",
     email: "Julianne.OConner@kory.org",
     address: {
       street: "Hoeger Mall",
       suite: "Apt. 692",
       city: "South Elvis",
       zipcode: "53919-4257",
       geo: {
         lat: "29.4572",
         lng: "-164.2990",
       },
     },
     phone: "493-170-9623 x156",
     website: "kale.biz",
     company: {
       name: "Robel-Corkery",
       catchPhrase: "Multi-tiered zero tolerance productivity",
       bs: "transition cutting-edge web services",
     },
   },
   {
     id: 5,
     image:
       "https://i.pinimg.com/564x/e8/b2/71/e8b271169214323595f5155a649884d2--web-development-generators.jpg",
     name: "Chelsey Dietrich",
     username: "Kamren",
     email: "Lucio_Hettinger@annie.ca",
     address: {
       street: "Skiles Walks",
       suite: "Suite 351",
       city: "Roscoeview",
       zipcode: "33263",
       geo: {
         lat: "-31.8129",
         lng: "62.5342",
       },
     },
     phone: "(254)954-1289",
     website: "demarco.info",
     company: {
       name: "Keebler LLC",
       catchPhrase: "User-centric fault-tolerant solution",
       bs: "revolutionize end-to-end systems",
     },
   },
   {
     id: 6,
     image: "https://randomuser.me/api/portraits/men/81.jpg",
     name: "Mrs. Dennis Schulist",
     username: "Leopoldo_Corkery",
     email: "Karley_Dach@jasper.info",
     address: {
       street: "Norberto Crossing",
       suite: "Apt. 950",
       city: "South Christy",
       zipcode: "23505-1337",
       geo: {
         lat: "-71.4197",
         lng: "71.7478",
       },
     },
     phone: "1-477-935-8478 x6430",
     website: "ola.org",
     company: {
       name: "Considine-Lockman",
       catchPhrase: "Synchronised bottom-line interface",
       bs: "e-enable innovative applications",
     },
   },
   {
     id: 7,
     image: "https://randomuser.me/api/portraits/men/27.jpg",
     name: "Kurtis Weissnat",
     username: "Elwyn.Skiles",
     email: "Telly.Hoeger@billy.biz",
     address: {
       street: "Rex Trail",
       suite: "Suite 280",
       city: "Howemouth",
       zipcode: "58804-1099",
       geo: {
         lat: "24.8918",
         lng: "21.8984",
       },
     },
     phone: "210.067.6132",
     website: "elvis.io",
     company: {
       name: "Johns Group",
       catchPhrase: "Configurable multimedia task-force",
       bs: "generate enterprise e-tailers",
     },
   },
   {
     id: 8,
     image:
       "https://uiuxjobsboard.com/random-users-generator/images/imageF11.jpg",
     name: "Nicholas Runolfsdof",
     username: "Maxime_Nienow",
     email: "Sherwood@rosamond.me",
     address: {
       street: "Ellsworth Summit",
       suite: "Suite 729",
       city: "Aliyaview",
       zipcode: "45169",
       geo: {
         lat: "-14.3990",
         lng: "-120.7677",
       },
     },
     phone: "586.493.6943 x140",
     website: "jacynthe.com",
     company: {
       name: "Abernathy Group",
       catchPhrase: "Implemented secondary concept",
       bs: "e-enable extensible e-tailers",
     },
   },
   {
     id: 9,
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9U_yJRVYMZX4I-rliowO8_qW4e-Ms_VrnbHCiFzVKVVRTmtHGAZKRN7dijPNHVfBZFE&usqp=CAU",
     name: "Glenna Reichert",
     username: "Delphine",
     email: "Chaim_McDermott@dana.io",
     address: {
       street: "Dayna Park",
       suite: "Suite 449",
       city: "Bartholomebury",
       zipcode: "76495-3109",
       geo: {
         lat: "24.6463",
         lng: "-168.8889",
       },
     },
     phone: "(775)976-6794 x41206",
     website: "conrad.com",
     company: {
       name: "Yost and Sons",
       catchPhrase: "Switchable contextually-based project",
       bs: "aggregate real-time technologies",
     },
   },
   {
     id: 10,
     image: "https://s3media.247sports.com/Uploads/Assets/769/656/9656769.jpg",
     name: "Clementina DuBuque",
     username: "Moriah.Stanton",
     email: "Rey.Padberg@karina.biz",
     address: {
       street: "Kattie Turnpike",
       suite: "Suite 198",
       city: "Lebsackbury",
       zipcode: "31428-2261",
       geo: {
         lat: "-38.2386",
         lng: "57.2232",
       },
     },
     phone: "024-648-3804",
     website: "ambrose.net",
     company: {
       name: "Hoeger LLC",
       catchPhrase: "Centralized empowering task-force",
       bs: "target end-to-end models",
     },
   },
 ];

export default users;