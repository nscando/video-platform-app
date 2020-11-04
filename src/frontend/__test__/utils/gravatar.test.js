import gravatar from '../../utils/gravatar';

test('Gravatar Function Test', () => {
     const email = 'nicolas@prueba.com';
     const gravatarUrl = 'http://gravatar.com/avatar/af1a77ee65813b7ca8ac9d985df178e2';

     expect(gravatarUrl).toEqual(gravatar(email));
})