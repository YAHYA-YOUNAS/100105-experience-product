/* eslint-disable no-unused-vars */

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaSpider } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import OccurenceModal from "./components/Modal";
import Spinner from "./components/spinner";
import CardComponent from "./components/pageCard";


const Crawler = () => {
  const [pagesUrl, setPagesUrl] = useState({});
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [occurrence, setOccurrence] = useState(null);
  const [showOccurrence, setShowOccurrence] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [responseReceived, setResponseReceived] = useState(false);

  const buttonLinks = [
   0,1,2,3,4,5,6,7,8,9,10
  ];

  const [loadingGetOccurence, setLoadingOccurence] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    web_url: "",
    info_request: {
      pages_url: ["about", "contact", "careers", "services", "products"],
    },
    email: "",
    // email: "dowell@dowellresearch.uk"
  });

  const handleSendEmail = async (htmlContent) => {
    try {
      // setLoading(true);
      const response = await axios.post(
        `https://100085.pythonanywhere.com/api/email/`,
        {
          toname: "Dowell UX Living Lab",
          // toemail: "dowell@dowellresearch.uk",
          toemail: formValues.email,
          subject: `${formValues.email
            } result from DoWell Website Crawler on ${new Date()}`,
          email_content: htmlContent,
        }
      );
      // Set the emailSent state to true when the email is sent
      setEmailSent(true);
      console.log(response);
    } catch (error) {
      setEmailSent(false);
      console.log(error?.response?.data?.web_url);
    }
  };

  const handleOccurrence = async () => {
    let response = null;
    setLoadingOccurence(true);
    // Prepare the data to send to the backend
    try {
      response = await axios.get(
        `https://100105.pythonanywhere.com/api/v3/experience_database_services/?type=get_user_email&product_number=UXLIVINGLAB005&email=${formValues.email}`
      );
      if (response.data.occurrences === 0) {
        await axios.post(
          `https://100105.pythonanywhere.com/api/v3/experience_database_services/?type=register_user`,
          {
            product_number: "UXLIVINGLAB005",
            email: formValues.email,
          }
        );
      }
      setLoadingOccurence(false);
      setOccurrence(response.data.occurrences);
      setShowOccurrence(true);
      setModalOpen(true);
      console.log("ShowModal", modalOpen);
    } catch (e) {
      setLoadingOccurence(false);
      console.log("Error", e);
    }
  };

  const handleButtonClick = async (index) => {
    setLoadingIndex(index);
    try {
      const response = await axios.get(`https://100035.pythonanywhere.com/addons/create-response/?workspace_id=653637a4950d738c6249aa9a&username=CustomerSupport&scale_id=66138dcbed3a1e7dcda71ca7&item=${index}`);
      console.log(response);
      setResponseReceived(true);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Unable to record your response, Please try again later');
    } finally {
      setLoadingIndex(null);
    }
  };

  const handleFormData = async () => {
    const formDataToSend = {
      web_url: `https://${formValues.web_url}`,
      info_request: formValues.info_request,
      email: formValues.email,
      occurrences: occurrence,
    };
    //    console.log("form data", formDataToSend);
    setLoading(true);

    axios
      .post(
        `https://uxlivinglab100106.pythonanywhere.com/api/website-info-extractor/?main=${true}`,
        formDataToSend
      )
      .then((response) => {
        setLoading(false);
        setShowOccurrence(false);
        setPagesUrl(response?.data?.meta_data?.pages_url);

        const isObjectEmpty =
          Object.keys(response?.data?.meta_data?.pages_url).length === 0;

        if (isObjectEmpty) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }

        const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dowell Website Crawler</title>
          </head>
          <body>
            <div style="font-family: Helvetica, Arial, sans-serif; min-width: 100px; overflow: auto; line-height: 2">
              <div style="margin: 50px auto; width: 70%; padding: 20px 0">
                <div style="border-bottom: 1px solid #eee">
                  <a href="#" style="font-size: 1.2em; color: #00466a; text-decoration: none; font-weight: 600">Dowell UX Living Lab</a>
                </div>
                <p style="font-size: 1.1em">Email : ${formValues.email}</p>
                <p style="font-size: 1.1em">Website Link : ${formValues.web_url
          }</p>
                <p style="font-size: 1.1em">Pages</p> ${" "}
                <ul>
                  ${Object.entries(response?.data?.meta_data?.pages_url)
            .map(
              ([page, link]) =>
                `<li key=${page}>${page} : ${link
                  ? `<a href=${link}>${link}</a>`
                  : "No link available"
                }</li>`
            )
            .join("")}
                </ul>
              </div>
            </div>
          </body>
        </html>
      `;

        handleSendEmail(htmlContent);
      })
      .catch((error) => {
        setLoading(false);
        setShowOccurrence(false);
        console.log(error?.response?.data?.web_url);
        if (error?.response?.data?.error) {
          toast.warning(error?.response?.data?.error);
        }
        if (error?.response?.data?.web_url) {
          toast.error("Enter a valid URL");
        } else {
          toast.error(error?.message);
        }
      });
  };

  const handleScrapeWebsiteInfo = async (e) => {
    e.preventDefault();
    // if (!showOccurrence) {
    handleOccurrence();

    // }

    //console.log("new response", response);
    // if (showOccurrence) {
    //   handleFormData();
    // }
  };

  const urlsData = pagesUrl
    ? Object.entries(pagesUrl).map(([name, url]) => ({ name, url }))
    : [];

  const handleClearFields = () => {
    setFormValues({
      web_url: "",
      info_request: {
        pages_url: ["about", "contact", "careers", "services", "products"],
      },
    });
  };

  return (
    <div className='page-container'>
      <div style={{ width: "100%", height: "100%" }}>
        <div className="">
          <div className='container'>
            {showOccurrence && modalOpen && (
              <OccurenceModal
                email={formValues?.email}
                showModal={modalOpen}
                setOpenModal={setModalOpen}
                showOccurrence={showOccurrence}
                occurrence={occurrence}
                handleFormData={handleFormData}
              />
            )}
            <div className='row justify-content-center mt-1'>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem 0",
                }}
              >
                <img
                  src='https://www.uxlivinglab.org/wp-content/uploads/2023/10/image_1-3.png'
                  alt='Dowell Logo'
                  className='crawler-logo'
                />
              </div>

              <hr className='col-md-11 px-12' />

              <div className='col-md-12 p-2' style={{ textAlign: "center" }}>
                <h1 className='w-full mb-4 justify-content-center align-items-center'>
                  Welcome to Website Crawler
                </h1>

                <p className='subTitle'>
                  {" "}
                  The ultimate tool for effortlessly extracting valuable data
                  from any website with our user-friendly interface and advanced
                  web scraping techniques.{" "}
                </p>

                <form onSubmit={handleScrapeWebsiteInfo}>
                  <div className='input-group mb-3 flex flex-row border border-gray-300 rounded-md flex-nowrap'>
                    <span
                      // style={{
                      //   fontWeight: "bold",
                      // }}
                      // className='input-group-text'
                      className='form-span inline-block'
                    >
                      https://
                    </span>
                    <input
                      type='text'
                      className='input-text-form '
                      value={formValues.web_url}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          web_url: e.target.value.toLowerCase(),
                        })
                      }
                      placeholder='Enter Website Url'
                    />
                  </div>

                  <div className='mb-3 border border-gray-300 rounded-md'>
                    <input
                      type='email'
                      className='input-text-form'
                      value={formValues.email}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          email: e.target.value,
                        })
                      }
                      placeholder='dowell@dowellresearch.uk'
                    />
                  </div>

                  <div className='btn-container-bottom'>
                    <button
                      type='button'
                      className='btn'
                      style={{
                        color: "#fff",
                        backgroundColor: "#d9bf18",
                        marginRight: "0.5rem", // Add some right margin for spacing
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "0.7rem",
                        paddingRight: "0.7rem",
                        borderRadius: "8px",
                      }}
                      onClick={handleClearFields}
                    >
                      Reset
                    </button>

                    <button
                      type='submit'
                      className='btn'
                      style={{
                        color: "#fff",
                        backgroundColor:
                          occurrence >= 6 ? `#198754` : `#005734`,
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        paddingLeft: "0.7rem",
                        paddingRight: "0.7rem",
                        borderRadius: "8px",
                      }}
                      disabled={!formValues.web_url || loading}
                    >
                      {console.log("occurrence", occurrence)}
                      {<FaSpider style={{ marginRight: "0.5rem" }} />}
                      {!formValues.web_url ? (
                        "Enter Web Url"
                      ) : // : !formValues.email
                        // ? "Enter Your Email"
                        loadingGetOccurence ? (
                          <div className='spinner-border spinner-border-sm' role='status'>
                            <span className='sr-only'></span>
                          </div>
                        ) : loading ? (
                          "Crawling..."
                        ) : (
                          `Crawl`
                        )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {loading ? (
              <div className='d-flex mt-3 justify-content-center align-items-center'>
                <div
                  className='spinner-border green-spinner'
                  role='status'
                ></div>
              </div>
            ) : urlsData.length > 0 ? (
              <div className='row'>
                {urlsData.map((item, index) => (
                  <div className='col-12' key={index}>
                    <div className='card mb-4 rounded'>
                      <CardComponent
                        page={item}
                        email={
                          !formValues.email
                            ? "dowell@dowellresearch.uk"
                            : formValues.email
                        }
                      />
                    </div>
                  </div>
                ))}
                <div className="bg-gray-100 py-2 rounded-lg">
                  <h2 className="text-base text-center font-semibold">
                    On a scale of 0-10, how likely are you to recommend the product to a
                    friend or a colleague?
                  </h2>
                  {responseReceived ? (
                    <div className="text-center text-xl text-green-700 font-semibold">Thanks for your response!</div>
                  ) : (
                    <div className="flex-none grid grid-cols-11">
                      {buttonLinks.map((index) => (
                        <button
                          key={index}
                          className="text-center button"
                          onClick={() => handleButtonClick(index)}
                          disabled={loadingIndex === index}
                        >
                          {loadingIndex === index ? (
                            <div className="spinner"></div>
                          ) : (
                            index
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : empty ? (
              <div className='container d-flex flex-column align-items-center justify-content-center'>
                <FaExclamationCircle size={50} color='red' />{" "}
                {/* Adjust size and color as needed */}
                <h2 className='mt-3'>Pages Not Found</h2>
                <p className='text-muted'>
                  The requested pages could not be found.
                </p>
              </div>
            ) : (
              ""
            )
            }
            <div className='bottom-img-display'>
              <a href='https://visitorbadge.io/status?path=https%3A%2F%2Fll05-ai-dowell.github.io%2Fdowellwebsitecrawler%2F'>
                <img
                  style={{ width: "100px", height: "auto" }}
                  src='https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fll05-ai-dowell.github.io%2Fdowellwebsitecrawler%2F&labelColor=%23458204&countColor=%23555555&style=plastic&labelStyle=upper'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crawler;
