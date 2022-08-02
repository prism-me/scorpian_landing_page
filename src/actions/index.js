import {
  SUBMIT_CONTACT,
  POST_PROMO
} from "../constants/types.js";

export const submitContact = contactData => {
  return {
    type: SUBMIT_CONTACT,
    contactData,
  };
};

export const postPromo = promoData => {
  return {
    type: POST_PROMO,
    promoData,
  };
};



