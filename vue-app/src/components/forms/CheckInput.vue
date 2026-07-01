<template>
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
</template>

<script>
    export default{
        name: 'CheckInput',
        props: ["value", "name", "label", "required", "checked"],
    }
</script>