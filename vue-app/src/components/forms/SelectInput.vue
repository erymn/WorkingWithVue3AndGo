<template>
    <div class="mb-3">
            <label v-bind:for="name" class="form-label">{{label}}</label>
            <select :id="name" class="form-select" :name="name" :required="required">
                <option v-for="opt in items" :value="opt.value" :key="opt.value">
                    {{opt.text}}
                </option>
            </select>
        </div>
</template>

<script>
    export default{
        name: 'SelectInput',
        props: ["items", "name", "label", "required"],
    }
</script>