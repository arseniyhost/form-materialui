const GET_FORM_DATA = 'state/formData/GET_FORM_DATA';

let initState = {
    formData: null
}

const formDataReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_FORM_DATA: {
            return {
                ...state, formData: action.dataForm
            }
        }

        default: {
            return state
        }
    }
}

export const getFormData = (dataForm) => ({ type: GET_FORM_DATA, dataForm });

export default formDataReducer;