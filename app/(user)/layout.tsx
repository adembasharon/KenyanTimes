import "../../src/app/page.module.css"
import Header from "../../Components/header/header"
import Footer from "../../Components/Footer/footer"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
<Footer/>
        {children}</body>
    </html>
  )
}
