import React from "react";
import "./Sidebar.css";
import zen from "./zen.png";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate=useNavigate();
  // dashboard page
  const dashboardPage=()=>{
    navigate('/portal/dashboard')
  }
  // query page
  const queryPage=()=>{
    navigate('/portal/queries')
  }
  // portfolioPage
  const portfolioPage=()=>{
    navigate('/portal/portfolio')
  }
   // capstonePage
   const capstonePage=()=>{
    navigate('/portal/capstone')
  }
  // All Queries
  const allQueryPage=()=>{
    navigate('/portal/allQuery')
  }
   // requirmentPage
   const requirmentPage=()=>{
    navigate('/portal/requirment')
  }
  // interviewPage
  const interviewPage=()=>{
    navigate('/portal/interview')
  }
  // certificatePage
  const certificatePage=()=>{
    navigate('/portal/certificate')
  }
   // My Application
   const myApplicationPage=()=>{
    navigate('/portal/myApplication')
  }
   // Testimonial
   const TestimonialPage=()=>{
    navigate('/portal/testimonial')
  }
   // LeaveApplication
   const leaveApplicationPage=()=>{
    navigate('/portal/leaveApplication')
  }
  const chat=()=>{
    navigate('/chat')
  }
   
 
  return (
    <nav className="side-navbar">
      <ul className="sidebar-ul">
        <div className="logo">
          <Link className="sidebar-link">
            <img src={zen} alt="" />
          </Link>
        </div>
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bxs-notepad bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={dashboardPage}>
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link to="/portal/queries" className="sidebar-link">
            <i
              class="bx bxs-book-content bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={queryPage}>
              Queries
            </span>
          </Link>
        </li>
        <li>
          <Link to="/portal/queries" className="sidebar-link">
            <i
              class="bx bxs-book-content bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={allQueryPage}>
              My Queries
            </span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link">
            <i class="bx bxs-conversation bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={chat}>
              Connect Mentor
            </span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bxs-report bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={portfolioPage}>
              Portfolio
            </span>
          </Link>
        </li>
       
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bx-notepad bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={capstonePage}>
              Capstone
            </span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link">
          <i
              class="bx bxs-report bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={requirmentPage}>
              Requirments
            </span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bx-notepad bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={interviewPage}>
              Interview Task
            </span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bx-notepad bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={myApplicationPage}>
              My Applications
            </span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bx-notepad bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={leaveApplicationPage}>
              Leave Application
            </span>
          </Link>
        </li>
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bx-notepad bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={TestimonialPage}>
              Testimonial
            </span>
          </Link>
        </li>
                
        <li>
          <Link className="sidebar-link">
            <i
              class="bx bxs-user-badge bx-sm bx-flashing-hover"
              style={{ color: "#555A8F" }}
            ></i>
            <span className="nav-item" style={{ color: "#555A8F" }} onClick={certificatePage}>
              Certificate
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
