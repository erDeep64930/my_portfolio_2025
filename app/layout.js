// import localFont from "next/font/local";
import "./globals.css";
import {Dancing_Script , Raleway , Roboto} from "next/font/google";
const robot = Roboto({
  subsets:['latin'],
  weight:['100','300','500'],
  variable:'--font-roboto',
})

const dance = Dancing_Script({
  subsets:["latin"],
  weight:["400"],
  variable:"--font-dance"
})

const rale = Raleway({
  subsets:["latin"],
  weight:["100","200","300","400","500","700"],
  variable:"--font-rale"
})



export const metadata = {
  title: "React | Data Scientist",
  description: "React Developer && Data Scientist ",
  icons: {
    icon: "/favicon.png",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dance.variable} ${rale.variable} ${robot.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
