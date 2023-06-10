import Container from "../components/layout/Container";
import SideNav from "../components/layout/SideNav";
import StudentState from "../context/student/StudentState";
import LecturerState from "../context/lecturer/LecturerState";
import VenuesState from "../context/venues/VenuesState";
import GroupState from "../context/timetable/group/GroupState";
import "../styles/globals.css";
import ExamState from "../context/timetable/exam/ExamState";
import AuthState from "../context/auth/AuthState";

function MyApp({ Component, pageProps }) {
  const type = "lecturer";
  if (type === "lecturer") {
    return (
      <AuthState>
        <LecturerState>
          <VenuesState>
            <div className="app flex w-[100%]">
              <div className="justify-start w-[24%] bg-main-400 fixed">
                <SideNav type="lecturer" />
              </div>
              <Container>
                <Component {...pageProps} />
              </Container>
            </div>
          </VenuesState>
        </LecturerState>
      </AuthState>
    );
  } else if (type === "student") {
    return (
      <AuthState>
        <StudentState>
          <GroupState>
            <ExamState>
              <VenuesState>
                <div className="app flex w-[100%]">
                  <div className="justify-start relative w-[24%] bg-main-400">
                    <SideNav type="lecturer" />
                  </div>
                  <Container>
                    <Component {...pageProps} />
                  </Container>
                </div>
              </VenuesState>
            </ExamState>
          </GroupState>
        </StudentState>
      </AuthState>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
