import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderData } from "../../redux/OrderReducer/action";
import axios from "axios";
function OrderTable() {
  const order = useSelector((store) => store.orderReducer.orders);
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  function getUserInfo(userId) {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/auth/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    dispatch(getOrderData);
  }, []);

  return (
    <>
      <div className="table-container">
        <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0">
          <div class="container-fluid px-0">
            <div
              class="d-flex justify-content-between w-100"
              id="navbarSupportedContent"
            >
              <div class="d-flex align-items-center">
                <form class="navbar-search form-inline" id="navbar-search-main">
                  <div class="input-group input-group-merge search-bar">
                    <span class="input-group-text" id="topbar-addon">
                      <svg
                        class="icon icon-xs"
                        x-description="Heroicon name: solid/search"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="topbarInputIconLeft"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="topbar-addon"
                    />
                  </div>
                </form>
              </div>

              <ul class="navbar-nav align-items-center">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link text-dark notification-bell unread dropdown-toggle"
                    data-unread-notifications="true"
                    href="."
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                  >
                    <svg
                      class="icon icon-sm text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>
                  </a>
                  <div class="dropdown-menu dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                    <div class="list-group list-group-flush">
                      <a
                        href="."
                        class="text-center text-primary fw-bold border-bottom border-light py-3"
                      >
                        Notifications
                      </a>
                      <a
                        href="."
                        class="list-group-item list-group-item-action border-bottom"
                      >
                        <div class="row align-items-center">
                          <div class="col-auto">
                            {" "}
                            <img
                              alt=""
                              src="assets/img/profile-picture-1.jpg"
                              class="avatar-md rounded"
                            />
                          </div>
                          <div class="col ps-0 ms-2">
                            <div class="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 class="h6 mb-0 text-small">Jose Leos</h4>
                              </div>
                              <div class="text-end">
                                <small class="text-danger">
                                  a few moments ago
                                </small>
                              </div>
                            </div>
                            <p class="font-small mt-1 mb-0">
                              Added you to an event "Project stand-up" tomorrow
                              at 12:30 AM.
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="."
                        class="list-group-item list-group-item-action border-bottom"
                      >
                        <div class="row align-items-center">
                          <div class="col-auto">
                            {" "}
                            <img
                              alt=""
                              src="assets/img/profile-picture-2.jpg"
                              class="avatar-md rounded"
                            />
                          </div>
                          <div class="col ps-0 ms-2">
                            <div class="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 class="h6 mb-0 text-small">Neil Sims</h4>
                              </div>
                              <div class="text-end">
                                <small class="text-danger">2 hrs ago</small>
                              </div>
                            </div>
                            <p class="font-small mt-1 mb-0">
                              You've been assigned a task for "Awesome new
                              project".
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="."
                        class="list-group-item list-group-item-action border-bottom"
                      >
                        <div class="row align-items-center">
                          <div class="col-auto">
                            {" "}
                            <img
                              alt=""
                              src="assets/img/profile-picture-3.jpg"
                              class="avatar-md rounded"
                            />
                          </div>
                          <div class="col ps-0 m-2">
                            <div class="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 class="h6 mb-0 text-small">
                                  Roberta Casas
                                </h4>
                              </div>
                              <div class="text-end">
                                <small>5 hrs ago</small>
                              </div>
                            </div>
                            <p class="font-small mt-1 mb-0">
                              Tagged you in a document called "Financial plans",
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="."
                        class="list-group-item list-group-item-action border-bottom"
                      >
                        <div class="row align-items-center">
                          <div class="col-auto">
                            {" "}
                            <img
                              alt=""
                              src="assets/img/profile-picture-4.jpg"
                              class="avatar-md rounded"
                            />
                          </div>
                          <div class="col ps-0 ms-2">
                            <div class="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 class="h6 mb-0 text-small">Joseph Garth</h4>
                              </div>
                              <div class="text-end">
                                <small>1 d ago</small>
                              </div>
                            </div>
                            <p class="font-small mt-1 mb-0">
                              New message: "Hey, what's up? All set for the
                              presentation?"
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="."
                        class="list-group-item list-group-item-action border-bottom"
                      >
                        <div class="row align-items-center">
                          <div class="col-auto">
                            {" "}
                            <img
                              alt=""
                              src="assets/img/profile-picture-5.jpg"
                              class="avatar-md rounded"
                            />
                          </div>
                          <div class="col ps-0 ms-2">
                            <div class="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 class="h6 mb-0 text-small">Rohit Kumar</h4>
                              </div>
                              <div class="text-end">
                                <small>2 hrs ago</small>
                              </div>
                            </div>
                            <p class="font-small mt-1 mb-0">
                              New message: "We need to improve the UI/UX for the
                              landing page."
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="."
                        class="dropdown-item text-center fw-bold rounded-bottom py-3"
                      >
                        <svg
                          class="icon icon-xxs text-gray-400 me-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        View all
                      </a>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown ms-lg-3">
                  <a
                    class="nav-link dropdown-toggle pt-1 px-0"
                    href="."
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div class="media d-flex align-items-center">
                      <img
                        class="avatar rounded-circle"
                        alt=""
                        src="assets/img/profile-picture-3.jpg"
                      />
                      <div class="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                        <span class="mb-0 font-small fw-bold text-gray-900">
                          Rohit Kumar
                        </span>
                      </div>
                    </div>
                  </a>
                  <div class="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                    <a class="dropdown-item d-flex align-items-center" href=".">
                      <svg
                        class="dropdown-icon text-gray-400 me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      My Profile
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href=".">
                      <svg
                        class="dropdown-icon text-gray-400 me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Settings
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href=".">
                      <svg
                        class="dropdown-icon text-gray-400 me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Messages
                    </a>
                    <a class="dropdown-item d-flex align-items-center" href=".">
                      <svg
                        class="dropdown-icon text-gray-400 me-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Support
                    </a>
                    <div role="separator" class="dropdown-divider my-1"></div>
                    <a class="dropdown-item d-flex align-items-center" href=".">
                      <svg
                        class="dropdown-icon text-danger me-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        ></path>
                      </svg>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="py-4">
          <div class="d-flex justify-content-between w-100 flex-wrap">
            <div class="mb-3 mb-lg-0">
              <h1 class="h4">Orders Table</h1>
            </div>
          </div>
        </div>
        <div class="card border-0 shadow mb-4">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0 rounded">
                <thead class="thead-light">
                  <tr>
                    <th class="border-0 rounded-start">Product Title</th>
                    <th class="border-0">User ID</th>
                    <th class="border-0 rounded-end">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.length > 0 &&
                    order.map((item) => {
                      return (
                        <tr key={item._id}>
                          <td>
                            <b className="small">{item.product_title}</b>
                          </td>
                          <td>
                            <p
                              className="small text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#userModal"
                              onClick={() => getUserInfo(item.userID)}
                              style={{ cursor: "pointer" }}
                            >
                              {item.userID}
                            </p>
                          </td>

                          <td>
                            <p className="small">{item.final_price}</p>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="userModal"
        tabindex="-1"
        aria-labelledby="userModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="userModalLabel">
                User Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="table-responsive">
                <table class="table table-centered table-nowrap mb-0 rounded">
                  <thead class="thead-light">
                    <tr>
                      <th class="border-0 rounded-start">User Name</th>
                      <th class="border-0">User Email</th>
                      <th class="border-0 rounded-end">User Mobile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={user._id}>
                      <td>
                        <p className="small">{user.name}</p>
                      </td>
                      <td>
                        <p className="small">{user.email}</p>
                      </td>
                      <td>
                        <p className="small">{user.mobile_no}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTable;
