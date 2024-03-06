import Footer from "./Footer";
import Header from  "./Header"


function HeaderFoooterLayout({ children }) {
  return (
    <div>
    <Header />
    { children }
    <Footer />
    </div>
  )
}

export default HeaderFoooterLayout