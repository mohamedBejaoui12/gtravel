import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'GTravel — Your Journey, Elevated',description:'Plan your journey with GTravel: tailor-made travel, organized Omra programs, honeymoons and couples’ escapes from Tunisia. An interactive agency demonstration with prices in DT.',icons:{icon:'/logo-icon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" dir="ltr"><body>{children}</body></html>}
