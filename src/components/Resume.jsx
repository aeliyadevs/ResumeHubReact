import ExpItem from "./ExpItem";
import EudItem from "./EduItem";
import ProjItem from "./ProjItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { readRequest } from "./ApiCallHandler";

function Resume() {
  const navigate = useNavigate();

  if (Cookies.get("userId")) {
    var userId = Cookies.get("userId");
  }

  const [userData, setUserData] = useState([]);

  const [eduData, setEduData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [projData, setProjData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  const fetchSkills = async () => {
    await readRequest("Skills/" + userId)
      .then((res) => {
        setSkillsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchEducations = async () => {
    await readRequest("Educations/" + userId)
      .then((res) => {
        setEduData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchExperiences = async () => {
    await readRequest("Experiences/" + userId)
      .then((res) => {
        setExpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchProjects = async () => {
    await readRequest("Projects/" + userId)
      .then((res) => {
        setProjData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    var user = localStorage.getItem("userInfo");
    setUserData(JSON.parse(user));

    fetchSkills();
    fetchEducations();
    fetchExperiences();
    fetchProjects();

    // fetching skills data
    axios
      .get(`https://localhost:7244/api/Skills/${userId}`, {
        headers: {
          Authorization: "Authorize",
        },
      })
      .then((res) => {
        setSkillsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    Cookies.remove("userId");
    navigate("/login");
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="main-wrapper d-flex justify-content-center pt-5 pb-5">
        <div className="row content-area">
          <div className="col-md-5 px-4">
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h1 className="name">
                  {userData.firstName} <br />
                  <span>{userData.lastName}</span>
                </h1>
                <h4 className="designation">{userData.designation}</h4>
              </div>
              <div className="social-links">
                <ul>
                  <li>
                    <a href={userData.linkedIn} target="_blank">
                      <img src="/images/linkedin.png" alt="" srcSet="" />
                    </a>
                  </li>
                  <li>
                    <a href={userData.github} target="_blank">
                      <img src="/images/github.png" alt="" srcSet="" />
                    </a>
                  </li>

                  <li>
                    <a href={userData.website} target="_blank">
                      <img src="/images/web.png" alt="" srcSet="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>Contact Info</h2>
                <ul>
                  <li>
                    <a href="tel:980-307-9279">
                      <i className="fa-solid fa-phone"></i>
                      {userData.phone}
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa-solid fa-location-dot"></i>
                      {userData.currentAddress}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:aeliyadevs@gmail.com">
                      <i className="fa-solid fa-envelope"></i>
                      {userData.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>Basic Info</h2>
                <ul>
                  <div className="row">
                    <div className="col-5">
                      <li>DOB</li>
                    </div>
                    <div className="col-7">
                      <li>{userData.dob}</li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <li>Gender</li>
                    </div>
                    <div className="col-7">
                      <li>{userData.gender}</li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <li>Address</li>
                    </div>
                    <div className="col-7">
                      <li>{userData.permanentAddress}</li>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <li>Alt. Contact</li>
                    </div>
                    <div className="col-7">
                      <li>{userData.altPhone}</li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>About Me</h2>
                <p>{userData.intro}</p>
              </div>
            </div>
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>Skills</h2>
                <ul>
                  {skillsData.map((skill) => (
                    <li key={skill.skillId}>{skill.skillTitle}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>Language</h2>
                <ul>
                  <li>Nepali</li>
                  <li>English</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="col-md-7 px-4">
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>Education</h2>
                {eduData.map((edu) => (
                  <EudItem
                    key={edu.educationId}
                    title={edu.educationLevel}
                    desc={edu.institute}
                    address={edu.instituteAddress}
                  />
                ))}
              </div>
            </div>
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>Experience</h2>
                {expData.map((exp) => (
                  <ExpItem
                    key={exp.experienceId}
                    title={exp.position}
                    desc={exp.company}
                    address={exp.companyAddress}
                    focus={exp.techStack}
                    right={exp.endDate ? exp.endDate.split("-")[0] : "Current"}
                  />
                ))}
              </div>
            </div>
            <div className="wrapper-box">
              <div className="wrapper-content">
                <h2>Projects</h2>
                {projData.map((proj) => (
                  <ProjItem
                    key={proj.projectId}
                    title={proj.title}
                    desc={proj.description}
                    focus={proj.technology}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resume;
