import Header from "../components/Header";
import logo from "../assets/images/logo-red.png"
import ArtistsContent from "../components/Artists";


export default function Artists() {
    return (
      <>
      <Header title="Our Artists" image={logo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis eos at, officia quae iusto nesciunt dicta voluptates voluptatum laborum dolores?
      </Header>
      <ArtistsContent />
      </>
    )
  }