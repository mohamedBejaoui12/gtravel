export const destinations = [
 {code:'CDG',city:'Paris',country:'France',price:489,image:'paris',description:'A little romance. A world of discovery.',tag:'THE CITY OF LIGHT',duration:145},
 {code:'IST',city:'Istanbul',country:'Türkiye',price:599,image:'istanbul',description:'Where continents meet and stories begin.',tag:'BETWEEN TWO WORLDS',duration:165},
 {code:'FCO',city:'Rome',country:'Italy',price:429,image:'rome',description:'Timeless streets, extraordinary moments.',tag:'THE ETERNAL CITY',duration:85},
 {code:'DXB',city:'Dubai',country:'United Arab Emirates',price:1290,image:'dubai',description:'A new perspective on extraordinary.',tag:'BEYOND EXPECTATION',duration:345},
 {code:'BCN',city:'Barcelona',country:'Spain',price:559,image:'barcelona',description:'Art, sea, and the rhythm of the city.',tag:'MEDITERRANEAN SOUL',duration:105},
 {code:'LHR',city:'London',country:'United Kingdom',price:799,image:'london',description:'Iconic sights. Unexpected discoveries.',tag:'ENDLESS POSSIBILITIES',duration:190},
 {code:'RAK',city:'Marrakech',country:'Morocco',price:649,image:'marrakech',description:'Lose yourself in the colors of the medina.',tag:'A SENSORY ESCAPE',duration:180},
 {code:'MLE',city:'Maldives',country:'Maldives',price:2490,image:'maldives',description:'Find your own shade of paradise.',tag:'BAREFOOT LUXURY',duration:690}
];
export const airports = [{code:'TUN',city:'Tunis',country:'Tunisia'},...destinations];
export const airlines = ['Tunisair','Nouvelair','Air France','Turkish Airlines','ITA Airways','Lufthansa'];
export type Search = {from:string;to:string;depart:string;returnDate:string;round:boolean;passengers:number;cabin:string};
export type Flight = {id:string;from:string;to:string;airline:string;price:number;minutes:number;stops:number;hour:number;baggage:boolean;refundable:boolean};
export const flights:Flight[] = destinations.flatMap((d,i)=>Array.from({length:4},(_,j)=>({id:`GT${i}${j}`,from:'TUN',to:d.code,airline:airlines[(i+j)%6],price:d.price+j*113,minutes:d.duration+(j>1?130+j*30:0),stops:j>1?1:0,hour:6+j*4,baggage:j!==1,refundable:j===3})));
export const money=(n:number)=>new Intl.NumberFormat('fr-TN',{maximumFractionDigits:0}).format(n)+' DT';
export const city=(code:string)=>airports.find(a=>a.code===code)?.city||code;
export function matchFlights(s:Search){return flights.filter(f=>(f.from===s.from&&f.to===s.to)||(f.from===s.to&&f.to===s.from)).map(f=>({...f,from:s.from,to:s.to,price:Math.round(f.price*({Economy:1,'Premium Economy':1.45,Business:2.4,'First Class':3.8}[s.cabin]||1))}));}
export function fare(f:Flight,s:Search){const base=f.price*s.passengers*(s.round?2:1);const taxes=Math.round(base*.12);const service=25*s.passengers;return {base,taxes,service,total:base+taxes+service};}
export const dateAfter=(days:number)=>{const d=new Date();d.setDate(d.getDate()+days);return d.toISOString().slice(0,10)};
