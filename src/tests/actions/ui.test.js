import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas en UI', () => {
    test('Deben funcionar todas las acciones', () => {
        const action = setError('AJIO!!!');
        expect(action).toEqual({ 
            type: types.uiSetError,
            payload: 'AJIO!!!',
        });

        const removeErrorAction = removeError();
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError,
        })

        const startLoadingAction = startLoading();
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading,
        })

        const finishLoadingAction = finishLoading();
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading,
        })
    });
});
