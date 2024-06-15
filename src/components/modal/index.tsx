import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const tabsData = [
  {
    label: "Sign Up",
    content: "",
  },
  {
    label: "Log In",
    content: "",
  },
];
const Modal = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [loginData, setLoginData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loginFailed, setLoginFailed] = useState(false);
  const [signUpFailed, setSignUpFailed] = useState(false);
  const [singUpData, setSingUpData] = useState({
    "name": "",
    "number": "",
    "expiryYear": "",
    "expiryMonth": "",
    "cvc": "",
    "email": ""

  });

  const submitLogin = async (e: any) => {
    e.preventDefault();
    console.log("submitted data", loginData);

    try {
      const response = await axios.post('http://localhost:5257/Login', loginData);
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("token", response.data.token);
        setShowModal(false);
        navigate("/home");
        setLoginFailed(false);
      } else {
        setLoginFailed(true);
        console.error('No token received');
      }
    } catch (error: any) {
      setLoginFailed(true);
      var msg = error.response.data;
      console.error('Error during login', msg);
    }
  };

  const submutSignUp = async (e: any) => {
    e.preventDefault();
    console.log("submitted data", singUpData);

    try {
      const response = await axios.post('http://localhost:5257/stripe/customer', singUpData);


      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("token", response.data.token);
        setShowModal(false);
        navigate("/home");
        setSignUpFailed(false);
      } else {
        setSignUpFailed(true);
        console.error('No token received');
      }
    } catch (error) {
      setSignUpFailed(true);
      console.error('Error during login', error);
    }
  };


  return (
    <>
      <button
        className="bg-none text-blue outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Go Premium
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center mt-10 items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-2 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-1 flex-auto">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-200 py-0 rounded-full">
                      x
                    </span>
                  </button>
                  <div className="flex space-x-3 border-b">
                    {/* Loop through tab data and render button for each. */}
                    {tabsData.map((tab, idx) => {
                      return (
                        <button
                          key={idx}
                          className={`w-1/2 py-2 border-b-4 transition-colors duration-300 ${idx === activeTabIndex
                            ? "border-teal-500"
                            : "border-transparent hover:border-gray-200"
                            }`}
                          // Change the active tab on click.
                          onClick={() => setActiveTabIndex(idx)}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                  {/* Show active tab content. */}
                  <div className="pt-4">
                    {activeTabIndex === 0 ? (
                      <form onSubmit={submutSignUp}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-2 w-full">
                        {signUpFailed && (
                          <div className="text-red-500">
                            User already exists.
                          </div>
                        )}
                        <div className="flex">
                          <div className="w-1/2 mr-2">
                            <label className="block text-black text-sm font-bold mb-1">
                              Name
                            </label>
                            <input onChange={(e) =>
                              setSingUpData({
                                ...singUpData,

                                name: e.target.value,
                              })
                            } className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                          </div>
                          <div className="w-1/2 ml-2">
                            <label className="block text-black text-sm font-bold mb-1">
                              Email
                            </label>
                            <input onChange={(e) =>
                              setSingUpData({
                                ...singUpData,

                                email: e.target.value,
                              })}
                              className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                          </div>
                        </div>
                        <div className="border border-gray-300 p-3 mt-3">
                          <div className="flex">
                            <div className="w-full">
                              <label className="block text-black text-sm font-bold mb-1">
                                Card Number
                              </label>
                              <input
                                type="number"
                                placeholder="1234 1234 1234 1234"
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                onChange={(e) =>
                                  setSingUpData({
                                    ...singUpData,

                                    number: e.target.value,
                                  })}
                              />
                            </div>
                          </div>
                          <div className="flex">
                            <div className="w-1/2 mr-2">
                              <label className="block text-black text-sm font-bold mb-1">
                                Expiration
                              </label>
                              <input
                                type="text"
                                placeholder="MM/YYYY"
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                onChange={(e) =>
                                  setSingUpData({
                                    ...singUpData,

                                    expiryYear: e.target.value?.split("/")[1],
                                    expiryMonth: e.target.value?.split("/")[0],
                                  })}
                              />
                            </div>
                            <div className="w-1/2 ml-2">
                              <label className="block text-black text-sm font-bold mb-1">
                                CVC
                              </label>
                              <input
                                type="number"
                                placeholder="CVC"
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                onChange={(e) =>
                                  setSingUpData({
                                    ...singUpData,

                                    cvc: e.target.value,
                                  })}
                              />
                            </div>
                          </div>
                          <div className="flex">
                            <div className="w-full">
                              <label className="block text-black text-sm font-bold mb-1">
                                Name
                              </label>
                              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-white bg-teal-500 active:bg-teal-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"

                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    ) : (
                      <form
                        onSubmit={submitLogin}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-2 w-full min-w-80"
                      >
                        {loginFailed && (
                          <div className="text-red-500">
                            Invalid username or password.
                          </div>
                        )}
                        <div className="w-full">
                          <label className="block text-black text-sm font-bold mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Email"
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                email: e.target.value,
                                userName: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <div className="w-full">
                          <label className="block text-black text-sm font-bold mb-1">
                            Password
                          </label>
                          <input
                            type="password"
                            placeholder="Password"
                            className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                            onChange={(e) =>
                              setLoginData({
                                ...loginData,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-white bg-teal-500 active:bg-teal-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
