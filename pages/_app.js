import Container from "../components/layout/Container";
import Navbar from "../components/layout/Navbar";
import SideNav from "../components/layout/SideNav";
import StudentState from "../context/student/StudentState";
import VenuesState from "../context/venues/VenuesState"
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StudentState>
      <VenuesState>
        <div className="app flex w-[100%]">
          <div className="justify-start relative w-[24%] bg-main-400">
            <SideNav />
          </div>
          <Container>
            <Component {...pageProps} />
          </Container>
        </div>
      </VenuesState>
    </StudentState>
  );
}

export default MyApp;
