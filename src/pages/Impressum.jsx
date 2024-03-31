

function Impressum() {
  console.log(import.meta.env.VITE_TEST)
  return (
    <div>
    <h2>Mista</h2>
    <h2>{import.meta.env.VITE_TEST}</h2>
    </div>
  )
}

export default Impressum