import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'TESTING',
    },
})

describe('Pruebas en notes', () => {
    test('debe crear una nueva nota startNewNote', () => {
        // await store.dispatch(startNewNote());
    });
});
 