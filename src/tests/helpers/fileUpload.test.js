var cloudinary = require('cloudinary').v2;
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'do1sqcaba', 
    api_key: '349883517686148', 
    api_secret: 'NcLFYX5JC85a480T5sZDQgtu3CQ',
});

describe('Pruebas en fileUpload', () => {
    test('Debe cargar un archivo y retornar un URL', async() => {
        const res = await fetch('https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg');
        const blob = await res.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length-1].replace('.jpg', '');

        await cloudinary.api.delete_resources(imageId, {}, () => {});
    });

    test('Debe retornar un error', async() => {
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
})
