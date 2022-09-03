import React from "react";
import "./ZohoBannerForm.scss";

function ZohoBannerForm() {
  return (
    <div
      id="crmWebToEntityForm"
      class="zcwf_lblRight crmWebToEntityForm"
      style={{
        backgroundColor: "#ffffffbf",
        color: "black",
        // maxWidth: "420px",
        maxWidth: "100%",
      }}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <META HTTP-EQUIV="content-type" CONTENT="text/html;charset=UTF-8" /> */}
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads5461540000000383487"
        method="POST"
        onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5461540000000383487()'
        accept-charset="UTF-8"
      >
        <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="ad6c2965ac4155acf3411bb5160120b56c09cd02e6ba7855d5243687ce542d7a"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="5ff54183823cde0b03b0d1e23d35048a5afd4f5f452d68836b08fbb1c3c6a45c"
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="actionType"
          value="TGVhZHM="
        />
        <input
          type="text"
          style={{ display: "none" }}
          name="returnURL"
          // value="http&#x3a;&#x2f;&#x2f;www.Scorpionrealeastate.com"
          value="http://scorpionproperty.prismcloudhosting.com/"
        />

        <div class="zcwf_title" style={{ maxWidth: "600px" }}>
          Register your Interest
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="First_Name">
              First Name<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              id="First_Name"
              name="First Name"
              maxlength="40"
              required
            />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Last_Name">
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              id="Last_Name"
              name="Last Name"
              maxlength="80"
              required
            />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              ftype="email"
              id="Email"
              name="Email"
              maxlength="100"
              required
            />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Mobile">
              Mobile<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              id="Mobile"
              name="Mobile"
              maxlength="30"
              required
            />
            <div class="zcwf_col_help" style={{ display: "none" }}>
              {" "}
              <span
                title="&#x2b;91 xxxxxxxxxx"
                style={{
                  cursor: "pointer",
                  width: "16px",
                  height: "16px",
                  display: "inline-block",
                  background: "#fff",
                  border: "1px solid #ccc",
                  color: "#ccc",
                  textAlign: "center",
                  fontSize: "11px",
                  lineHeight: "16px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                }}
                onclick="tooltipShow5461540000000383487(this)"
              >
                ?
              </span>
              <div class="zcwf_tooltip_over" style={{ display: "none" }}>
                <span class="zcwf_tooltip_ctn">&#x2b;91 xxxxxxxxxx</span>
              </div>
            </div>
          </div>
        </div>
        <div class="zcwf_row wfrm_fld_dpNn" style={{ display: "none" }}>
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Lead_Source">Lead Source</label>
          </div>
          <div class="zcwf_col_fld">
            <select
              class="zcwf_col_fld_slt"
              id="Lead_Source"
              name="Lead Source"
            >
              <option value="-None-">-None-</option>
              <option value="Advertisement">Advertisement</option>
              <option selected value="Prism&#x20;Landing&#x20;Page">
                Prism Landing Page
              </option>
              <option value="Cold&#x20;Call">Cold Call</option>
              <option value="Employee&#x20;Referral">Employee Referral</option>
              <option value="External&#x20;Referral">External Referral</option>
              <option value="Online&#x20;Store">Online Store</option>
              <option value="Twitter">Twitter</option>
              <option value="Facebook">Facebook</option>
              <option value="Google&#x2b;">Google&#x2b;</option>
              <option value="Partner">Partner</option>
              <option value="Public&#x20;Relations">Public Relations</option>
              <option value="Sales&#x20;Email&#x20;Alias">
                Sales Email Alias
              </option>
              <option value="Seminar&#x20;Partner">Seminar Partner</option>
              <option value="Internal&#x20;Seminar">Internal Seminar</option>
              <option value="Trade&#x20;Show">Trade Show</option>
              <option value="Web&#x20;Download">Web Download</option>
              <option value="Web&#x20;Research">Web Research</option>
              <option value="Chat">Chat</option>
            </select>
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div
            class="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="LEADCF3">
              What are you looking for? <span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div class="zcwf_col_fld">
            <input
              type="text"
              id="LEADCF3"
              name="LEADCF3"
              maxlength="255"
              required
            />
            <div class="zcwf_col_help"></div>
          </div>
        </div>
        <div class="zcwf_row">
          <div class="zcwf_col_lab"></div>
          <div class="zcwf_col_fld" style={{ textAlign: "center" }}>
            <input
              type="submit"
              id="formsubmit"
              class="formsubmit zcwf_button"
              value="Submit"
              title="Submit"
            />
            <input
              type="reset"
              class="zcwf_button"
              name="reset"
              value="Reset"
              title="Reset"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default ZohoBannerForm;
