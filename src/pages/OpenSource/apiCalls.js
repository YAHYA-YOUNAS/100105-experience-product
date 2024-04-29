const userId = "6609779a515d70e845415e56";
const productNumber = "UXLIVINGLAB003";
const licenseApiKey = "4f0bd662-8456-4b2e-afa6-293d4135facf";
const organizationId = "660977971246678bcaee8c07";
const licencesApiUrl = "https://100080.pythonanywhere.com/api/public/licenses/";
const userDetailsUrl = "https://100105.pythonanywhere.com/api/v3/experience_database_services/?type=experienced_service_user_details";
const registerUserUrl = "https://100105.pythonanywhere.com/api/v3/experience_database_services/?type=register_user";
const redeemCouponUrl = "https://100105.pythonanywhere.com/api/v3/experience_database_services/?type=redeem_coupon";
const validateEmailUrl = "https://100085.pythonanywhere.com/api/v1/mail/4f0bd662-8456-4b2e-afa6-293d4135facf/?type=validate";
const userEmailInfoUrl = "https://100105.pythonanywhere.com/api/v3/experience_database_services/?type=get_user_email&product_number=UXLIVINGLAB003&email=";
const updateUserUsageUrl = "https://100105.pythonanywhere.com/api/v3/experience_database_services/?type=update_user_usage&product_number=UXLIVINGLAB003&email=";
const recommendationScaleUrl = "https://100035.pythonanywhere.com/addons/create-response/?workspace_id=653637a4950d738c6249aa9a&username=CustomerSupport&scale_id=660f9ed21c5298e063026a7a&value=";

// Email global variables
const name = "User";
const fromName = "DoWell UX Living Lab";
const fromEmail = "uxlivinglab@dowellresearch.sg";
const subject = "Open Source License Compatability";
const sendEmailUrl = "https://100085.pythonanywhere.com/api/v1/mail/4f0bd662-8456-4b2e-afa6-293d4135facf/?type=send-email";

// Get all licenses from the API
export const getLicenses = async () => {
    try {
      const response = await fetch(licencesApiUrl, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + licenseApiKey
        }
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const jsonData = await response.json();
      const sortedData = jsonData.data.sort((a, b) => a.softwarelicense.license_name.localeCompare(b.softwarelicense.license_name));
      return sortedData;
    } catch (error) {
      console.log(error.message);
    }
};

// Validate user email from the API
export const validateEmail = async (email) => {
    try {
      const response = await fetch(validateEmailUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name : "",
          fromName : "",
          fromEmail : "",
          subject : "",
          body : ""
        }),
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error.message);
    }
};

// Get user email info from the API
export const getUserEmailInfo = async (email) => {
    try {
      const response = await fetch(userEmailInfoUrl + email, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error.message);
    }
};

// Register an user from the API
export const registerUser = async (email) => {
    try {
      const response = await fetch(registerUserUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_number : productNumber,
          email
        }),
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const jsonData = await response.json();
      if (response.status === 201) {
        console.log("User Registered");
      } else {
        console.log(jsonData.message);
      }
    } catch (error) {
      console.log(error.message);
    }
};

// Get user details from the API
export const getUserDetails = async (email, occurrences) => {
  try {
    const response = await fetch(userDetailsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        product_number : productNumber,
        occurrences
      }),
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error.message);
  }
};

// Check compatibility from the API
export const checkCompatibility = async (firstLicenseEventId, secondLicenseEventId) => {
    try {
      const response = await fetch(licencesApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + licenseApiKey
        },
        body: JSON.stringify({
          action_type: "check-compatibility",
          license_event_id_one: firstLicenseEventId,
          license_event_id_two: secondLicenseEventId,
          user_id: userId,                                            
          organization_id: organizationId
        })
      });
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error.message);
    }
};

// Update user usage from the API
export const updateUserUsage = async (email, occurrences) => {
    try {
        const response = await fetch(updateUserUsageUrl + email + '&occurrences=' + occurrences, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

// Send email from the API
export const sendEmail = async (email, emailBody) => {
  try {
    const response = await fetch(sendEmailUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name,
        fromName,
        fromEmail,
        subject,
        body : emailBody
      }),
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error.message);
  }
};

// Redeem coupon from the API
export const redeemCoupon = async (email, coupon) => {
    try {
        const response = await fetch(redeemCouponUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                coupon,
                product_number : productNumber
            }),
        });
        if (!response.ok && response.status !== 401) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error.message);
    }
};

 // Scale API Call
export const scaleAPI = async (index) => {
  try {
    const response = await fetch(recommendationScaleUrl + index, {
      method: 'GET'
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return true;
  } catch (error) {
    console.log(error.message);
  }
};
