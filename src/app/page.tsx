import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/header/Header";
import Hero from "./Components/herosection/Hero";
import Feature from "./Components/feature/Feature";
import AnalyticsSection from "./Components/analytics/Analytics";
import Testimonial from "./Components/testimonial/Testimonial";
import GetStart from "./Components/getstart/getStart";
import Footer from "./Components/footer/Footer";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero/>
      <Feature/>
      <AnalyticsSection/>
      <Testimonial/>
      <GetStart/>
      <Footer/>
    </main>
  );
}
