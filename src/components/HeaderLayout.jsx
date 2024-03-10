import Header from  "./Header"


function HeaderFoooterLayout({ children }) {
  return (
    <div>
    <Header />
    { children }
    
    </div>
  )
}

export default HeaderFoooterLayout