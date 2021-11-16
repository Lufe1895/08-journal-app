import { types } from "../../types/types"

describe('Pruebas con los tipos', () => {
    test('Debe tener estos tipos', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
            uiStartLoading: '[UI] Start loading',
            uiFinishLoading: '[UI] Finish loading',

            notesAddNew: '[Notes] New Note',
            noteActive: '[Notes] Set Active Note',
            notesLoad: '[Notes] Load Notes',
            noteUpdate: '[Notes] Update Note',
            noteFileUrl: '[Notes] Update Image Url',
            noteDelete: '[Notes] Delete Note',
            notesLogoutClean: '[Notes] Logout Clean',
        });
    })

})
