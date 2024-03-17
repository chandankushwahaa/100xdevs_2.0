import TailwindCSS from "./_01Tailwind";
import Cards from "./_02Card";

function App() {

  return (
    <>
      < TailwindCSS/>
      <br /> <br />
      < Cards title="Amount Pending" amount="23,450" orderCount={12} />
    </>
  )
}

export default App
