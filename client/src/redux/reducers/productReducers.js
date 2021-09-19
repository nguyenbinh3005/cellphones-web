import * as actionTypes from '../constants/productConstants';

// import galaxys21_ultraS from '../../images/galaxys21_ultraS.png';
// import galaxys21_ultraL from '../../images/galaxys21_ultraL.png';
// import iphone_12S from '../../images/iphone_12S.png';
// import iphone_12L from '../../images/iphone_12L.png';
// import redmi_note10_proS from '../../images/redmi_note10_proS.png';
// import redmi_note10_proL from '../../images/redmi_note10_proL.png';
// import galaxy_a72S from '../../images/galaxy_a72S.png';
// import galaxy_a72L from '../../images/galaxy_a72L.png';
// import fold3_5gS from '../../images/fold3_5gS.png';
// import fold3_5gL from '../../images/fold3_5gL.png';

// const initialState = {
//   products: [
//     {
//       id: '1',
//       title: 'samsung-galaxy-s21-ultra',
//       name: 'Samsung Galaxy S21 Ultra 5G',
//       price: '24.900.000 VND',
//       imageS: galaxys21_ultraS,
//       imageL: galaxys21_ultraL,
//     },
//     {
//       id: '2',
//       title: 'iphone-12',
//       name: 'iPhone 12 I Chính hãng VN/A',
//       price: '19.000.000 VND',
//       imageS: iphone_12S,
//       imageL: iphone_12L,
//     },
//     {
//       id: '3',
//       title: 'xiaomi-redmi-note-10-pro',
//       name: 'Xiaomi Redmi Note 10 Pro 8GB',
//       price: '6.650.000 VND',
//       imageS: redmi_note10_proS,
//       imageL: redmi_note10_proL,
//     },
//     {
//       id: '4',
//       title: 'samsung-galaxy-a72',
//       name: 'Samsung Galaxy A72',
//       price: '9.950.000 VND',
//       imageS: galaxy_a72S,
//       imageL: galaxy_a72L,
//     },
//     {
//       id: '5',
//       title: 'samsung-galaxy-z-fold-3',
//       name: 'Samsung Galaxy Z Fold3 5G',
//       price: '41.990.000 VND',
//       imageS: fold3_5gS,
//       imageL: fold3_5gL,
//     },
//   ],
// };

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
