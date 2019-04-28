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

            <div class="text-center my-3">
                <b-button v-b-tooltip.hover.html="tipData">Hover+click</b-button>
                <b-button v-b-tooltip.hover.html="tipMethod">Methods</b-button>            
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
export default {
    name: 'Tooltip',
    data() {
        return {
            tipData: 'Tooltip <em>Message</em>'
        }
    },
    methods: {
        tipMethod(){
            return '<strong>' + new Date() + '</strong>';
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

</style>
