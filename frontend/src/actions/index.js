export const signin = (tk) => {
    return {
        type: 'SIGNIN_SUCCESS',
        payload: tk
    }
}