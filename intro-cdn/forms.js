const TextInput = {
            props: {
                name: String,
                type: String,
                label: String,
                placeholder: String,
                required: String,
                min: String,
                max: String,
                value: String,
                
            },
            template: `
                <div class="mb-3">
                    <label v-bind:for="name" class="form-label">{{label}}</label>
                    <input
                        :type="type"
                        :name="name"
                        :placeholder="placeholder"
                        :required="required"
                        :min="min"
                        :max="max"
                        :value="value"
                        :autocomplete="name + '-new'"
                        class="form-control"/>
                </div>
            `
        }

const SelectInput = {
    props: ["items", "name", "label", "required"],
    template: `
        <div class="mb-3">
            <label v-bind:for="name" class="form-label">{{label}}</label>
            <select :id="name" class="form-select" :name="name" :required="required">
                <option v-for="opt in items" :value="opt.value">
                    {{opt.text}}
                </option>
            </select>
        </div>
    `
}

const CheckInput = {
    props: ["value", "name", "label", "required", "checked"],
    template: `
        <div class="form-check">
            <input
                        type="checkbox"
                        :name="name"
                        :required="required"
                        :value="value"
                        :id="name"
                        :checked="checked"
                        class="form-check-input"/>
            <label class="form-check-label" :for="name">
                {{label}}
            </label>
        </div>
    `
}