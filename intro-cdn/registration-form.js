const RegistrationForm = {
    props: ["items"],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input required="required" label="First Name" type="text" name="first-name"></text-input>
            <text-input label="Last Name" type="text" name="last-name"></text-input>
            <text-input required="required" label="Email" type="email" name="email"></text-input>
            <text-input required="required" label="Password" type="password" name="password"></text-input>
            <select-input label="Favourite Color" name="color" :items="items"></select-input>
            <check-input label="I Setuju dengan S & K" required="required"></check-input>
            <hr>
            <input type="submit" class="btn btn-outline-primary" value="Register" />
        </form>
    `,
    components: {
        'text-input': TextInput,
        'select-input': SelectInput,
        'check-input': CheckInput
    },
    mounted() {
        (() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        })()
    }
}