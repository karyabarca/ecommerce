
document.addEventListener('DOMContentLoaded', () => {

    (async () => {

        const {
            value: email
        } = await Swal.fire({
            title: 'Ingresa tu correo electrónico',
            input: 'email',
            inputLabel: 'Correo electrónico:',
            inputPlaceholder: 'Ingresa tu correo electrónico'
        })

        if (email) {
            Swal.fire(`Correo ingresado: ${email}`)
            localStorage.setItem('correo',`Correo ingresado: ${email}` )
        }

    })()

})