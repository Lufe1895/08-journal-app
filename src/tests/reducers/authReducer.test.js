import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authreducer', () => {
    test('Debe de realizar el login', () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'ABC',
                displayName: 'Luis'
            }
        }
        const state = authReducer(initState, action);
    
        expect(state).toEqual({
            uid: 'ABC',
            name: 'Luis'
        })
    });

    test('Debe de realizar el logout', () => {
        const initState = {
            uid: 'ABC',
            displayName: 'Luis'
        };
        const action = {
            type: types.logout
        }
        const state = authReducer(initState, action);
    
        expect(state).toEqual({});
    });
    
    test('No debe de hacer cambios', () => {
        const initState = {
            uid: 'ABC',
            displayName: 'Luis'
        };
        const action = {
            type: 'asdasdasd'
        }
        const state = authReducer(initState, action);
    
        expect(state).toEqual(initState);
    });
})
