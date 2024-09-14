import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    about:
      "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
    company: "Lueilwitz, Wisoky and Leuschke",
    job: "Forex Trader",
    country: "USA",
    address: "A108 Adam Street, New York, NY 535022",
    phone: "(436) 486-3538 x29071",
    email: "k.anderson@example.com",
    twitter: "https://twitter.com/#",
    facebook: "https://facebook.com/#",
    instagram: "https://instagram.com/#",
    linkedin: "https://linkedin.com/#",
    currentPassword: "",
    newPassword: "",
    renewPassword: "",
    changesMade: true,
    newProducts: true,
    proOffers: false,
    securityNotify: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <main id="main" className="main">
      <section className="section profile mb-5">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }/images/partners/features-1.png`}
                  alt="Profile"
                  className="rounded-circle"
                />
                <h2>{formData.fullName}</h2>
                <h3>{formData.job}</h3>
                <div className="social-links mt-2">
                  <a href={formData.twitter} className="twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href={formData.facebook} className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href={formData.instagram} className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href={formData.linkedin} className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Overview
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                    >
                      Edit Profile
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-settings"
                    >
                      Settings
                    </button>
                  </li>

                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content pt-2">
                  <div
                    className="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <h5 className="card-title">About</h5>
                    <p className="small fst-italic">{formData.about}</p>

                    <h5 className="card-title">Profile Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Full Name</div>
                      <div className="col-lg-9 col-md-8">
                        {formData.fullName}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Company</div>
                      <div className="col-lg-9 col-md-8">
                        {formData.company}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Job</div>
                      <div className="col-lg-9 col-md-8">{formData.job}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Country</div>
                      <div className="col-lg-9 col-md-8">
                        {formData.country}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Address</div>
                      <div className="col-lg-9 col-md-8">
                        {formData.address}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">{formData.phone}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">{formData.email}</div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade profile-edit pt-3"
                    id="profile-edit"
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <label
                          htmlFor="profileImage"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Profile Image
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <img
                            src={`${
                              import.meta.env.BASE_URL
                            }/images/partners/features-1.png`}
                          />
                          <div className="pt-2">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm"
                              title="Upload new profile image"
                            >
                              <i className="bi bi-upload"></i>
                            </a>
                            <a
                              href="#"
                              className="btn btn-danger btn-sm ms-2"
                              title="Remove my profile image"
                            >
                              <i className="bi bi-trash"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="fullName"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Full Name
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="fullName"
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="about"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          About
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <textarea
                            name="about"
                            className="form-control"
                            id="about"
                            value={formData.about}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="company"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Company
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="company"
                            type="text"
                            className="form-control"
                            id="company"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="job"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Job
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="job"
                            type="text"
                            className="form-control"
                            id="job"
                            value={formData.job}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="country"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Country
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="country"
                            type="text"
                            className="form-control"
                            id="country"
                            value={formData.country}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="address"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Address
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="address"
                            type="text"
                            className="form-control"
                            id="address"
                            value={formData.address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="phone"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Phone
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="phone"
                            type="text"
                            className="form-control"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="email"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="twitter"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Twitter Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="twitter"
                            type="text"
                            className="form-control"
                            id="twitter"
                            value={formData.twitter}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="facebook"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Facebook Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="facebook"
                            type="text"
                            className="form-control"
                            id="facebook"
                            value={formData.facebook}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="instagram"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Instagram Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="instagram"
                            type="text"
                            className="form-control"
                            id="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="linkedin"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Linkedin Profile
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="linkedin"
                            type="text"
                            className="form-control"
                            id="linkedin"
                            value={formData.linkedin}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="tab-pane fade pt-3" id="profile-settings">
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <label
                          htmlFor="changesMade"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Email Me When A New Product Is Available
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <div className="form-check">
                            <input
                              name="changesMade"
                              type="checkbox"
                              className="form-check-input"
                              id="changesMade"
                              checked={formData.changesMade}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="changesMade"
                            >
                              Yes, please!
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="newProducts"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Send Me Updates About New Products
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <div className="form-check">
                            <input
                              name="newProducts"
                              type="checkbox"
                              className="form-check-input"
                              id="newProducts"
                              checked={formData.newProducts}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="newProducts"
                            >
                              Yes, please!
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="proOffers"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Get Pro Offers
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <div className="form-check">
                            <input
                              name="proOffers"
                              type="checkbox"
                              className="form-check-input"
                              id="proOffers"
                              checked={formData.proOffers}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="proOffers"
                            >
                              Yes, please!
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="securityNotify"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Security Notify
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <div className="form-check">
                            <input
                              name="securityNotify"
                              type="checkbox"
                              className="form-check-input"
                              id="securityNotify"
                              checked={formData.securityNotify}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="securityNotify"
                            >
                              Yes, please!
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>

                  <div
                    className="tab-pane fade pt-3"
                    id="profile-change-password"
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="row mb-3">
                        <label
                          htmlFor="currentPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Current Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="currentPassword"
                            type="password"
                            className="form-control"
                            id="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="newPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          New Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="newPassword"
                            type="password"
                            className="form-control"
                            id="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="renewPassword"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Re-enter New Password
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="renewPassword"
                            type="password"
                            className="form-control"
                            id="renewPassword"
                            value={formData.renewPassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                          Change Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
