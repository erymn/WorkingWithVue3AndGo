const RegistrationForm = {
    data() {
        return {
            addressSameChecked: true,
        }
    },
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

            <text-input required="required" label="Address" type="text" name="address"></text-input>
            <text-input required="required" label="City/Town" type="text" name="city"></text-input>
            <text-input required="required" label="State/Province" type="text" name="province"></text-input>
            <text-input required="required" label="Zip/Postal" type="text" name="zip"></text-input>
            
            <check-input v-on:click="addressSame" label="Mailing Address Same" checked="true" v-model="addressSameChecked"></check-input>
            
            <div v-if="addressSameChecked === false">
                <div class="mt-3">
                    <text-input label="Mailing Address" type="text" name="mailing-address"></text-input>
                    <text-input label="Mailing City/Town" type="text" name="mailing-city"></text-input>
                    <text-input label="Mailing State/Province" type="text" name="mailing-province"></text-input>
                    <text-input label="Mailing Zip/Postal" type="text" name="mailing-zip"></text-input>
                </div>
            </div>
            
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
    methods: {
        addressSame() {
            console.log("address same fired")
            if(this.addressSameChecked === true){
                console.log("was checked on click")
                this.addressSameChecked = false;
            }else{
                console.log("was unchecked on click")
                this.addressSameChecked = true;
            }
        }
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