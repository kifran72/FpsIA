const signup = async () =>
{
    let username = $( '#username' ).val();
    let password = $( '#password' ).val();
    let testUsername, testPassword;
    username === '' ? toastr.error( "Le nom d'utilisateur de doit pas être vide" ) : testUsername = true ;
    password === '' ? toastr.error("Le mot de passe de doit pas être vide") : testPassword = true ;
  
    if ( testUsername && testPassword)
    {
        try
        {
            const data = await $.post( '/signup', {
                username: username,
                password: password
            } ).then( resp =>
            {
                toastr.success(`Bienvenue ${resp.session.name}`);
                setTimeout( () =>
                {
                    window.location.href = '/';
                }, 2500 );
            });
            
        } catch ( e )
        {
            console.error( e );
        }
    }
};
