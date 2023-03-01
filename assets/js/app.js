let  cl = console.log;

let info = ["Jhone", "jhon@gmail.com", 1234567890];

/* let [fname, email, contact] = info; */
/* cl(fname, email, contact) */


/* let fname = info[0]
let email = info[1]
let contact = info[2] */


let [fname, , contact] = info; //map the value according to index num 
cl(fname,contact)


let info2 = "Kapil Dev, Cricket, 1983";
let [cap, sportsname, year] = info2.split(", ");
cl(cap, sportsname, year)


let team = ["Dada", "Yuvi", "Sachin", "Viru", "Virat", "Kumbale"]

//cap
//vc
//players

let [cap1, vc, ...players] =team;
cl(cap1, vc, players)