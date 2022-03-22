import React from "react";
import "./ZohoBannerForm.scss";


function ZohoBannerForm() {

    return (
        <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: "#ffffffbf", color: "black", maxWidth: "420px" }}>
            <form action='https://crm.zoho.com/crm/WebToLeadForm' name='WebToLeads5200448000000432042' method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5200448000000432042()' accept-charset='UTF-8'>
                <input type='text' style={{ display: "none" }} name='xnQsjsdp' value='22c852729e96c7ad7066616f422dead1bdebdf45daecdbff6851ba9bb4bbd4a6' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: "none" }} name='xmIwtLD' value='d3e32f7b53c1c7240f0dcd5fb75b7203796009a8c52d612ac3addb798dac9097' />
                <input type='text' style={{ display: "none" }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: "none" }} name='returnURL' value='https&#x3a;&#x2f;&#x2f;rozellarealestate.com&#x2f;thankyou.html' />

                <div className='zcwf_title' style={{ maxWidth: "420px", color: "black", textAlign: "center" }}>Contact Us</div>

                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: "12px", fontFamily: "Arial" }}>
                        <label for='First_Name'>First Name<span style={{ color: "red" }}>*</span></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='First_Name' name='First Name' maxlength='40'
                            required
                        />
                        <div className='zcwf_col_help'></div>
                    </div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: "12px", fontFamily: "Arial" }}>
                        <label for='Last_Name'>Last Name<span style={{ color: "red" }}>*</span></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='Last_Name' name='Last Name' maxlength='80'
                            required
                        />
                        <div className='zcwf_col_help'></div>
                    </div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: "12px", fontFamily: "Arial" }}>
                        <label for='Email'>Email<span style={{ color: "red" }}>*</span></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='email' ftype='email' id='Email' name='Email' maxlength='100'
                            required
                        />
                        <div className='zcwf_col_help'></div>
                    </div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: "12px", fontFamily: "Arial" }}>
                        <label for='Phone'>Phone<span style={{ color: "red" }}>*</span></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='Phone' name='Phone' maxlength='30'
                            required
                        />
                        <div className='zcwf_col_help'></div>
                    </div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: "12px", fontFamily: "Arial" }}>
                        <label for='LEADCF1'>Budget<span style={{ color: "red" }}>*</span></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <input type='text' id='LEADCF1' name='LEADCF1' maxlength='255'
                            required
                        />
                        <div className='zcwf_col_help'></div>
                    </div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: "12px", fontFamily: "Arial" }}>
                        <label for='LEADCF2'>What are you looking for?<span style={{ color: "red" }}>*</span></label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <textarea id='LEADCF2' name='LEADCF2'
                            required
                        />
                        <div className='zcwf_col_help'></div>
                    </div>
                </div>
                <div className='zcwf_row wfrm_fld_dpNn'>
                    <div className='zcwf_col_lab' style={{ fontSize: "12px", fontFamily: "Arial" }}>
                        <label for='Lead_Source'>Lead Source</label>
                    </div>
                    <div className='zcwf_col_fld'>
                        <select className='zcwf_col_fld_slt' id='Lead_Source' name='Lead Source'  >
                            <option value='-None-'>-None-</option>
                            <option value='Advertisement'>Advertisement</option>
                            <option selected value='Cold&#x20;Call'>Cold Call</option>
                            <option value='Employee&#x20;Referral'>Employee Referral</option>
                            <option value='External&#x20;Referral'>External Referral</option>
                            <option value='Online&#x20;Store'>Online Store</option>
                            <option value='Twitter'>Twitter</option>
                            <option value='Facebook'>Facebook</option>
                            <option value='Partner'>Partner</option>
                            <option value='Google&#x2b;'>Google&#x2b;</option>
                            <option value='Public&#x20;Relations'>Public Relations</option>
                            <option value='Sales&#x20;Email&#x20;Alias'>Sales Email Alias</option>
                            <option value='Seminar&#x20;Partner'>Seminar Partner</option>
                            <option value='Internal&#x20;Seminar'>Internal Seminar</option>
                            <option value='Trade&#x20;Show'>Trade Show</option>
                            <option value='Web&#x20;Download'>Web Download</option>
                            <option value='Web&#x20;Research'>Web Research</option>
                            <option value='Chat'>Chat</option>
                        </select>
                        <div className='zcwf_col_help'></div>
                    </div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'></div>
                    <div className='zcwf_col_fld' style={{ width: "50%" }}>
                        <input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit' style={{ float: "left" }} />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ZohoBannerForm;