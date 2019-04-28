<template>
    <div class="formcomp">
        <b-form id="loginform" @submit="onSubmit" @reset="onReset">
            <b-form-group
                id="input-group-1"
                label="Email Address"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
            <b-form-input
                id="input-1"
                type="email"
                required
                placeholder="Enter email"
                v-model="form.email"
            ></b-form-input>
            </b-form-group>

            <b-form-group id="input-form-group-3" label="Food:" label-for="input-3">
                <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                ></b-form-select>
            </b-form-group>

            <b-form-group id="input-form-group-2">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-2">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group>

            <b-form-group id="input-form-group-4" label="Options:" label-for="input-4">
                <b-form-radio v-model="selected" name="some-radios" value="A">Option A</b-form-radio>
                <b-form-radio v-model="selected" name="some-radios" value="B">Option B</b-form-radio>
            </b-form-group>

            <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter Something..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>


            <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file..."
                drop-placeholder="Drop file here ..."
            ></b-form-file>


            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>
    </div>
</template>
<script>
export default {
    name: 'FormComponent',
    data(){
        return {
            form: {
                email:'',
                food:'',
                checked: [],
                selected: '',
                text:'',
                file:''
            },
            foods: [{text:'Select One', value:null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn']
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onRest(evt){
            evt.preventDefault()
            //Reset form values
            this.form.email = ''
            this.form.checked = []
            this.form.food = null
            this.form.selected = ''
            this.form.text = ''
            this.form.file =''
        }
    }
}
</script>
<style scoped>
    .formcomp {
        width: 500px;
        margin: 50px 30%;
    }
</style>
