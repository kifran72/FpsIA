const login = async () =>
{
    let username = $( '#username' ).val();
    let password = $( '#password' ).val();

    try
    {
        const data = await $.post( '/login', {
            username: username,
            password: password
        } ).then( resp =>
        {
            toastr.success(`Bienvenue ${data.session.name}`);
            setTimeout( () =>
            {
                window.location.href = '/';
            }, 2500 );
        });
        
    } catch ( e )
    {
        console.error( e );
   }
};