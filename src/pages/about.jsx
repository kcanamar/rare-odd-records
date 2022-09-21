import Header from "../components/Header";
import HeaderImage from "../assets/images/logo-red.png"
import AboutContent from "../components/About";

export default function About() {
    return (
      <>
      <Header title="About Us" image={HeaderImage}>
      
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat at deserunt officia quasi! Fuga minima amet, nemo eos ea aperiam incidunt asperiores accusamus. Odio eius, dolorem eaque necessitatibus ex quasi!
       
      </Header>
      <AboutContent />
      </>
    );
  }