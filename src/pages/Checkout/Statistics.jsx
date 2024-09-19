import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from "../../Contex/AppContext";
import "./Statistics.css";

const Statistics = () => {
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
  return (
    <div className="row my-5">
      <div className="col-lg-4 ">
        <div className="card info-card sales-card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Sales <span>| Today</span>
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-cart"></i>
              </div>
              <div className="ps-3">
                <h6>145</h6>
                <span className="text-success small pt-1 fw-bold">12%</span>
                <span className="text-muted small pt-2 ps-1">increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 ">
        <div className="card info-card revenue-card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Revenue <span>| This Month</span>
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-currency-dollar"></i>
              </div>
              <div className="ps-3">
                <h6>$3,264</h6>
                <span className="text-success small pt-1 fw-bold">8%</span>
                <span className="text-muted small pt-2 ps-1">increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 ">
        <div className="card info-card customers-card">
          <div className="filter">
            <a className="icon" href="#" data-bs-toggle="dropdown">
              <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <li className="dropdown-header text-start">
                <h6>Filter</h6>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  Today
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <h5 className="card-title">
              Last <span>Transaction</span>
            </h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-people"></i>
              </div>
              <div className="ps-3">
                {/* <h6>Sh {user.last_transaction.toLocaleString('en-UG', { minimumFractionDigits: 0 })}</h6> */}
                <h6>{user?user.last_transaction:0}</h6>
                <span className="text-danger small pt-1 fw-bold">12%</span>
                <span className="text-muted small pt-2 ps-1">decrease</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-2 ">
        <div className="card info-card customers-card">
          <div className="card-body">
            <h5 className="card-title">My Balance</h5>

            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-coin"></i>
              </div>
              <div className="ps-3">
              {/* <h6>Sh {user.account_balance.toLocaleString('en-UG', { minimumFractionDigits: 0 })} </h6> */}
              <h6>{user?user.account_balance:0}</h6>

                <span className="text-danger small pt-1 fw-bold">12%</span>
                <span className="text-muted small pt-2 ps-1">increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
