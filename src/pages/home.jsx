import HomeHeader from "../components/HomeHeader";
import Plans from "../components/Plans";
import Mission from "../components/Mission";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

export default function Home() {
    return (
      <>
        <HomeHeader/>
        <Plans/>
        <Mission/>
        <Feed/>
        <Footer/>
      </>
    );
  }
