<template>
    <div>
        <b-row class="header-row">
            <b-col cols="6"> <h1>Logo</h1></b-col>
            <b-col cols="6" class="controls">
                <b-btn class="login-btn" variant="primary">Login</b-btn>
                <b-btn class="signup-btn" variant="primary">SignUp</b-btn>
            </b-col>
        </b-row>

        <br />

        <b-container>
            <div>
                <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                
                <b-form-group
                    id="input-group-1"
                    label="Name"
                    label-for="input-1">
                    <b-form-input
                        id="input-1"
                        v-model.trim="name"
                        @input="setName($event.target.value)"></b-form-input>
                </b-form-group>
                </div>
                    
                <div class="error" v-if="!$v.name.required">Field is required</div>
                <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
                <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
                    
                    <b-form-group
                    id="input-group-1"
                    label="Age"
                    label-for="input-2">
                    <b-form-input
                        id="input-2"
                        :value="age" 
                        @change="setAge($event.target.value)"
                    ></b-form-input>
                </b-form-group>
                </div>
                <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
            </div>
        </b-container>

        <br />

        <b-row class="footer-row">
            <b-col cols="12" class="footercontrols">
                <p>Terms & Conditions | Contact Us | FAQ </p>
            </b-col>
        </b-row>
    </div>
</template>
<script>

import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    name: 'Router',
    data() {
    return {
      name: '',
      age: 0
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  },

  methods: {
    setName(value) {
      this.name = value
      this.$v.name.$touch()
    },
    setAge(value) {
      this.age = value
      this.$v.age.$touch()
    }
  }
}
</script>
<style scoped>
.header-row, .footer-row {
    background-color: #563D7C;
}

.controls {
    text-align: right;
}

.footercontrols {
    text-align: center;
    margin-top: 10px;
    color: white;
}

.login-btn, .signup-btn {
    margin: 6px 6px;
}

.header-row h1 {
    color: white;
}
.error {
    color: red;
}

</style>
