import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'GTravel — Your Journey, Elevated',description:'Explore extraordinary destinations from Tunisia. A premium interactive travel booking demonstration with transparent prices in Tunisian Dinars.',icons:{icon:'/logo-icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" dir="ltr"><body>{children}</body></html>}
