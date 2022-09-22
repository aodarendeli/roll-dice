// export const setModal = (value) => {
//   return {
//     type: 'SET_MODAL',
//     payload: value,
//   }
// }

// export const setDefaultModal = (value) => {
//   return {
//     type: 'SET_DEFAULT_MODAL',
//     payload: value,
//   }
// }

// export const setSuccessModal = (value) => {
//   return {
//     type: 'SET_DEFAULT_MODAL',
//     payload: {
//       icon: require('../../assets/images/success.svg').default,
//       button: 'Tamam',
//       ...value,
//     },
//   }
// }

// export const setErrorModal = (value, history) => {
//   let payload = {
//     icon: require('../../assets/images/error.svg').default,
//     button: 'TAMAM',
//     ...value,
//   }

//   if (!value || !value.title) payload.title = ''

//   if (!value || !value.message) payload.message = 'Beklenmedik bir hata oluştu.'

//   if (history) {
//     payload.cancel = 'Ana Sayfaya Dön'
//     payload.onCancel = () => history.push('/')
//   }

//   return {
//     type: 'SET_DEFAULT_MODAL',
//     payload,
//   }
// }

// export const setWarningModal = (value) => {
//   return {
//     type: 'SET_DEFAULT_MODAL',
//     payload: {
//       icon: require('../../assets/images/warning.svg').default,
//       button: 'TAMAM',
//       ...value,
//     },
//   }
// }
