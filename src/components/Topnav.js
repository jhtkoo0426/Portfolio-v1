import TopnavLinks from "./TopnavLinks"

const Topnav = ({ title }) => {
  return (
    <section>
      <h1>Topnav {title}</h1>
      <TopnavLinks link="https://google.com"></TopnavLinks>
    </section>
  )
}

export default Topnav
