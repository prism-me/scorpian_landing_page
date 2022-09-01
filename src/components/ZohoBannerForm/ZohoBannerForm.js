import React from "react";
import "./ZohoBannerForm.scss";

function ZohoBannerForm() {
  return (
    <div
      id="crmWebToEntityForm"
      className="zcwf_lblLeft crmWebToEntityForm"
      style={{
        backgroundColor: "#ffffffbf",
        color: "black",
        maxWidth: "420px",
      }}
    >
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name={`WebToLeads5200448000001156513`}
        method="POST"
        onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5200448000001156513()'
        accept-charset="UTF-8"
      >
        <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="22c852729e96c7ad7066616f422dead1bdebdf45daecdbff6851ba9bb4bbd4a6"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="d3e32f7b53c1c7240f0dcd5fb75b72038accd1497e058dcffbed24c5939cb5ab"
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
          value="https&#x3a;&#x2f;&#x2f;investin.rozellarealestate.com&#x2f;thankyou.html"
        />
        <div
          className="zcwf_title"
          style={{ maxWidth: "420px", color: "black", textAlign: "center" }}
        >
          CONTACT SCORPION
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="First_Name">
              First Name<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <input
              type="text"
              id="First_Name"
              name="First Name"
              maxlength="40"
            />
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Last_Name">
              Last Name<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <input type="text" id="Last_Name" name="Last Name" maxlength="80" />
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <input
              type="text"
              ftype="email"
              id="Email"
              name="Email"
              maxlength="100"
            />
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="LEADCF6">
              Country Code<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <select className="zcwf_col_fld_slt" id="LEADCF6" name="LEADCF6">
              <option value="-None-">-None-</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Aland&#x20;Islands">Aland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American&#x20;Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua&#x20;and&#x20;Barbuda">
                Antigua and Barbuda
              </option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruban">Aruban</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia&#x20;and&#x20;Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet&#x20;Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British&#x20;Indian&#x20;Ocean&#x20;Territory">
                British Indian Ocean Territory
              </option>
              <option value="British&#x20;Virgin&#x20;Islands">
                British Virgin Islands
              </option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina&#x20;Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape&#x20;Verde">Cape Verde</option>
              <option value="Cayman&#x20;Islands">Cayman Islands</option>
              <option value="Central&#x20;African&#x20;Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas&#x20;Island">Christmas Island</option>
              <option value="Cocos&#x20;Islands">Cocos Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Cook&#x20;Islands">Cook Islands</option>
              <option value="Costa&#x20;Rica">Costa Rica</option>
              <option value="Cote&#x20;d&#x27;Ivoire">
                Cote d&#x27;Ivoire
              </option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech&#x20;Republic">Czech Republic</option>
              <option value="Democratic&#x20;Republic&#x20;of&#x20;the&#x20;Congo">
                Democratic Republic of the Congo
              </option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican&#x20;Republic">
                Dominican Republic
              </option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El&#x20;Salvador">El Salvador</option>
              <option value="Equatorial&#x20;Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland&#x20;Islands">Falkland Islands</option>
              <option value="Faroe&#x20;Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French&#x20;Guiana">French Guiana</option>
              <option value="French&#x20;Polynesia">French Polynesia</option>
              <option value="French&#x20;Southern&#x20;Territories">
                French Southern Territories
              </option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="GuineaBissau">GuineaBissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard&#x20;Island&#x20;and&#x20;McDonald&#x20;Islands">
                Heard Island and McDonald Islands
              </option>
              <option value="Honduras">Honduras</option>
              <option value="Hong&#x20;Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall&#x20;Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands&#x20;Antilles">
                Netherlands Antilles
              </option>
              <option value="New&#x20;Caledonia">New Caledonia</option>
              <option value="New&#x20;Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk&#x20;Island">Norfolk Island</option>
              <option value="North&#x20;Korea">North Korea</option>
              <option value="North&#x20;Macedonia">North Macedonia</option>
              <option value="Northern&#x20;Ireland">Northern Ireland</option>
              <option value="Northern&#x20;Mariana&#x20;Islands">
                Northern Mariana Islands
              </option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua&#x20;New&#x20;Guinea">
                Papua New Guinea
              </option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto&#x20;Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Republic&#x20;of&#x20;the&#x20;Congo">
                Republic of the Congo
              </option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint&#x20;Helena">Saint Helena</option>
              <option value="Saint&#x20;Kitts&#x20;and&#x20;Nevis">
                Saint Kitts and Nevis
              </option>
              <option value="Saint&#x20;Lucia">Saint Lucia</option>
              <option value="Saint&#x20;Pierre&#x20;and&#x20;Miquelon">
                Saint Pierre and Miquelon
              </option>
              <option value="Saint&#x20;Vincent&#x20;and&#x20;the&#x20;Grenadines">
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa">Samoa</option>
              <option value="San&#x20;Marino">San Marino</option>
              <option value="Sao&#x20;Tome&#x20;and&#x20;Principe">
                Sao Tome and Principe
              </option>
              <option value="Saudi&#x20;Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Serbia&#x20;and&#x20;Montenegro">
                Serbia and Montenegro
              </option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra&#x20;Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon&#x20;Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South&#x20;Africa">South Africa</option>
              <option value="South&#x20;Georgia&#x20;and&#x20;the&#x20;South&#x20;Sandwich&#x20;Islands">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="South&#x20;Korea">South Korea</option>
              <option value="Spain">Spain</option>
              <option value="Sri&#x20;Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard&#x20;and&#x20;Jan&#x20;Mayen">
                Svalbard and Jan Mayen
              </option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-Leste">Timor-Leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad&#x20;and&#x20;Tobago">
                Trinidad and Tobago
              </option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks&#x20;and&#x20;Caicos&#x20;Islands">
                Turks and Caicos Islands
              </option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United&#x20;Arab&#x20;Emirates">
                United Arab Emirates
              </option>
              <option value="United&#x20;Kingdom">United Kingdom</option>
              <option value="United&#x20;States">United States</option>
              <option value="United&#x20;States&#x20;Minor&#x20;Outlying&#x20;Islands">
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican">Vatican</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin&#x20;Islands">Virgin Islands</option>
              <option value="Wallis&#x20;and&#x20;Futuna">
                Wallis and Futuna
              </option>
              <option value="Western&#x20;Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Phone">
              Phone<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <input type="text" id="Phone" name="Phone" maxlength="30" />
            <div className="zcwf_col_help">
              {" "}
              <span
                title="With Country Code Exe&#x3a; 00971 XX"
                style={{
                  cursor: "pointer",
                  width: "16px",
                  height: "16px",
                  display: "none",
                  background: "#fff",
                  border: "1px solid #ccc",
                  color: "#ccc",
                  textAlign: "center",
                  fontSize: "11px",
                  lineHeight: "16px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                }}
                onclick="tooltipShow5200448000001156513(this)"
              >
                ?
              </span>
              <div className="zcwf_tooltip_over" style={{ display: "none" }}>
                <span className="zcwf_tooltip_ctn">
                  With Country Code Exe&#x3a; 00971 XX
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="LEADCF1">
              Budget<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <input type="text" id="LEADCF1" name="LEADCF1" maxlength="255" />
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row wfrm_fld_dpNn">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="Lead_Source">Lead Source</label>
          </div>
          <div className="zcwf_col_fld">
            <select
              className="zcwf_col_fld_slt"
              id="Lead_Source"
              name="Lead Source"
            >
              <option value="-None-">-None-</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Chat">Chat</option>
              <option value="Employee&#x20;Referral">Employee Referral</option>
              <option value="Event">Event</option>
              <option value="External&#x20;&#x2f;Third-Party&#x20;Referral">
                External &#x2f;Third-Party Referral
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Google">Google</option>
              <option value="Inbound&#x20;Lead">Inbound Lead</option>
              <option selected value="Landing&#x20;Page">
                Landing Page
              </option>
              <option value="Outbound&#x20;&#x2f;&#x20;Cold&#x20;Call">
                Outbound &#x2f; Cold Call
              </option>
              <option value="Sales&#x20;Email&#x20;Alias">
                Sales Email Alias
              </option>
              <option value="Social&#x20;Media">Social Media</option>
              <option value="Trade&#x20;Show&#x20;&#x2f;&#x20;Exhibition">
                Trade Show &#x2f; Exhibition
              </option>
              <option value="Twitter">Twitter</option>
              <option value="Website">Website</option>
            </select>
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row">
          <div
            className="zcwf_col_lab"
            style={{ fontSize: "12px", fontFamily: "'Montserrat'" }}
          >
            <label for="LEADCF2">
              What are you looking for?<span style={{ color: "red" }}>*</span>
            </label>
          </div>
          <div className="zcwf_col_fld">
            <textarea id="LEADCF2" name="LEADCF2"></textarea>
            <div className="zcwf_col_help"></div>
          </div>
        </div>
        <div className="zcwf_row">
          <div className="zcwf_col_lab"></div>
          <div className="zcwf_col_fld">
            <input
              type="submit"
              id="formsubmit"
              className="formsubmit zcwf_button"
              value="Submit"
              title="Submit"
            />
            <input
              type="reset"
              className="zcwf_button"
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
