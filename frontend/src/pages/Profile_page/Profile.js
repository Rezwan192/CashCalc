import React, { useState } from "react";
import "./Profile.css";
import profile from "../../assets/images/Profile_Page_icon/Male User.png";
import image1 from "../../assets/images/Profile_Page_icon/photo.png";
import edit from "../../assets/images/Profile_Page_icon/Edit.png";

const Profile = () => {
  const [condition, setCondition] = useState("none");

  const hideForm = () => {
    document.querySelector('.FormPart').style.visibility = 'hidden';
  };

  const ShowUpdateImageForm = () => {
    document.querySelector('.FormPart').style.visibility = 'initial';
    document.querySelector('.FormPart').style.marginTop = '-30%';

    setCondition('ShowUpdatePhotoForm');
  };

  const ShowUpdateUsernameForm = () => {
    document.querySelector('.FormPart').style.visibility = 'initial';
    setCondition('ShowUpdateUsernameForm');
  };

  const ShowUpdatAccountInformationForm = () => {
    document.querySelector('.FormPart').style.visibility = 'initial';
    document.querySelector('.FormPart').style.marginTop = '-40%';

    setCondition('ShowUpdateAccountInformationForm');
  };

  return (
    <div>
      <h2>Profile</h2>
      <div className="ContentPart">
        <div className="Personal_info">
          <div className="image-container">
            <img src={profile} className="image1" alt="Profile"></img>
            <img
              src={image1}
              className="image2"
              alt="Image"
              onClick={ShowUpdateImageForm}
            ></img>
          </div>
          <div className="detail">
            Username
            <img
              className="edit"
              src={edit}
              width="24px"
              height="24px"
              alt="Edit"
              onClick={ShowUpdateUsernameForm}
            ></img>
          </div>
        </div>

        <div className="account_information">
          <div className="headPart">
            Account Information
            <img
              className="edit_accountInformation"
              src={edit}
              width="24px"
              height="24px"
              alt="Edit Account Information"
              onClick={ShowUpdatAccountInformationForm}
            ></img>
          </div>
          <div className="info">
            <div className="items">Email</div>
            <div className="items">abc@gmail.com</div>
            <div className="items">Password</div>
            <div className="items">********</div>
          </div>
        </div>
      </div>
      <div className="FormPart">
        {condition === "ShowUpdatePhotoForm" && (
          <div className="update-photo">
            <div className="space">
              <label htmlFor="fileInput" className="custom-file-upload">
                Choose file
              </label>
              <input type="file" id="fileInput" />
            </div>
            <div className="upload_section">
              <div className="Upload">Upload</div>
              <div className="Cancel" onClick={hideForm}>
                Cancel
              </div>
            </div>
          </div>
        )}
        {condition === 'ShowUpdateUsernameForm' && (
          <div className="update-Username">
            <div className="contents">
              <span>New Username</span>
              <input className="space username"></input>
              <div className="upload_section">
                <div className="Upload">Save</div>
                <div className="Cancel" onClick={hideForm}>
                  Cancel
                </div>
              </div>
            </div>
          </div>
        )}
        {condition === "ShowUpdateAccountInformationForm" && (
            <div className="update-accountInformation">
          <div className="contents">
              <span>New Email</span>
              <input className="space Email"></input>
              <span>New Password</span>
              <input type='password' className="space NewPassword"></input>
              <span>Retype Password</span>
              <input type='password' className="space retypePassword"></input>
              <div className="upload_section">
                <div className="Upload">Save</div>
                <div className="Cancel" onClick={hideForm}>
                  Cancel
                </div>
              </div>
            </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
