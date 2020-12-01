// import CourseCard from "../../components/CourseCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../pages/home/components/Banner";
import Feature from "./components/Feature";
import FeedBack from "./components/FeedBack";
import Registration from "./components/Registration";
import SectionCourse from "./components/SectionCourse"
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        {/*start header*/}
        <Header></Header>
        {/*end header*/}
        {/*start banner-top*/}
        <Banner></Banner>
        {/*end banner top*/}
        {/*start home-course*/}
        <SectionCourse></SectionCourse>
        {/*end home-course*/}
        {/*start home-feature*/}
        <Feature></Feature>
        {/*end home-feature*/}
        <FeedBack></FeedBack>
        {/*start home-team*/}
        <Team></Team>
        {/*end home-team*/}
        {/*start home-registration*/}
        <Registration></Registration>
        {/*end home-registration*/}
        {/*start footer*/}
        <Footer></Footer>
        {/*end footer*/}
      </div>
    </>
  );
}
