import React, { useState ,useContext} from "react";
import "./Profile.css";
import { AppContext } from "../../Contex/AppContext";


const Profile = () => {
  const { user, loading } = useContext(AppContext);

  // Show spinner while loading
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'  // Full screen height
      }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>

    );
  }
  // alert(JSON.stringify(user))

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    about:
      "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.",
    company: "Lueilwitz, Wisoky and Leuschke",
    job: "Forex Trader",
    country: "USA",
    address: user.location,
    phone: user.phone,
    email: user.email,
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

                  {/* <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-settings"
                    >
                      Settings
                    </button>
                  </li> */}

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
                    {/* <h5 className="card-title">About</h5>
                    <p className="small fst-italic">{formData.about}</p> */}
                     
                     <br /> <br />

                    <h5 className="card-title">Profile Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Full Name</div>
                      <div className="col-lg-9 col-md-8">
                        {user.name}
                      </div>
                    </div>

                  
                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">company name</div>
                      <div className="col-lg-9 col-md-8">{user.organisation_name}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">company email</div>
                      <div className="col-lg-9 col-md-8">{user.organisation_email}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">company Phone</div>
                      <div className="col-lg-9 col-md-8">{user.organisation_phone}</div>
                    </div>

                    {/* <div className="row">
                      <div className="col-lg-3 col-md-4 label">Country</div>
                      <div className="col-lg-9 col-md-8">
                        {formData.country}
                      </div>
                    </div> */}

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Address</div>
                      <div className="col-lg-9 col-md-8">
                        {user.location} {user.country}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">{user.phone}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">{user.email}</div>
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
                           Image
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="fullName"
                            type="file"
                            className="form-control"
                            id="fullName"
                            value={formData.image}
                            onChange={handleChange}
                          />
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
                          htmlFor="company"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Organisation Name
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="company"
                            type="text"
                            className="form-control"
                            id="company"
                            value={user.organisation_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="company"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Organisation Phone
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="company"
                            type="text"
                            className="form-control"
                            id="company"
                            value={user.organisation_phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label
                          htmlFor="company"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Organisation Email
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="company"
                            type="text"
                            className="form-control"
                            id="company"
                            value={user.organisation_email}
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
                            value={user.country}
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
                            value={user.location}
                            onChange={handleChange}
                          />
                        </div>
                      </div>


                      <div className="row mb-3">
                        <label
                          htmlFor="address"
                          className="col-md-4 col-lg-3 col-form-label"
                        >
                          Country
                        </label>
                        <div className="col-md-8 col-lg-9">
                          <input
                            name="address"
                            type="text"
                            className="form-control"
                            id="address"
                            value={user.country}
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
