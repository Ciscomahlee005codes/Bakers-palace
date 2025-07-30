import React, { useEffect, useState, useRef } from "react";
import "./Profile.css";
import ProfileImg from "../../assets/main-profile.png";
import { useAuth } from "../../Context/AuthContext";
import { FaStar, FaUser, FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";

const Profile = () => {
  const [openId, setOpenId] = useState(null);
  const [showPrankPopup, setShowPrankPopup] = useState(false);

  const { currentUser } = useAuth();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [profileImage, setProfileImage] = useState(ProfileImg);
  const fileInputRef = useRef(null);

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      localStorage.setItem("profileImage", base64Image);
      setProfileImage(base64Image);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    } else {
      const storedUser = localStorage.getItem("bakers-user");
      if (storedUser) {
        setUserData(JSON.parse(storedUser));
      }
    }

    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, [currentUser]);

  const accordionData = [
    {
      id: "first",
      title: "Profile Details",
      icon: <FaUser />,
      content: (
        <form>
          <input type="text" value={userData.name} readOnly />
          <input type="email" value={userData.email} readOnly />
        </form>
      ),
    },
    {
      id: "second",
      title: "Address",
      icon: <FaLocationDot />,
      content: <p>{userData.address || "No address provided"}</p>,
    },
    {
      id: "third",
      title: "Baker's Reward Point",
      icon: <GiAchievement />,
      content: (
        <div id="cont">
          <b>You Have:</b>
          <div className="points">
            <FaStar style={{ color: "goldenrod" }} /> 14.5 Baker's Point
          </div>
          <div className="cash">
            <button onClick={() => setShowPrankPopup(true)}>CashOut</button>
          </div>
        </div>
      ),
    },
    {
      id: "fourth",
      title: "Get Help",
      icon: <IoMdHelp />,
      content: <p>For help, contact us at support@bakers.com</p>,
    },
  ];

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-content">
          <div className="img-container" onClick={handleImageClick}>
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div className="upload-icon">
              <FaPlus />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
             <div className="user-basic-info">
              <h3>{userData.name || "No Name"}</h3>
              <p>{userData.email || "No Email"}</p>
            </div>
            <div className="b-points">
              <FaStar style={{ color: "goldenrod" }} /> 14.5 Baker's Point
            </div>

          </div>

          <div className="personal-container">
            <ul className="accordion">
              {accordionData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <li key={item.id}>
                    <div
                      className="label"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <span className="label-text">
                        {item.icon} {item.title}
                      </span>
                      <FaChevronRight
                        className={`arrow-icon ${isOpen ? "rotate" : ""}`}
                      />
                    </div>
                    <div className={`content ${isOpen ? "open" : ""}`}>
                      {isOpen && item.content}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {showPrankPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Aboy Country Hard U dey find reward😂?</p>
            <button onClick={() => setShowPrankPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
