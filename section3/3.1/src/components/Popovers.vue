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

        <b-container fluid>
            <b-row class="text-center">
            <b-col md="3" class="py-3">
                <b-button v-b-popover.hover.top="{title:'Popover Header', content:'Popover Content'}" variant="primary">Top</b-button>
            </b-col>

            <b-col md="3" class="py-3">
                <b-button v-b-popover.hover.right="'Popover!'" variant="primary">Right</b-button>
            </b-col>

            <b-col md="3" class="py-3">
                <b-button v-b-popover.hover.left="'Popover!'" variant="primary">Left</b-button>
            </b-col>

            <b-col md="3" class="py-3">
                <b-button v-b-popover.hover.bottom="'ToolTip!'" variant="primary">Bottom</b-button>
            </b-col>
            </b-row>
        </b-container>

        <b-row class="footer-row">
            <b-col cols="12" class="footercontrols">
                <p>Terms & Conditions | Contact Us | FAQ </p>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name: 'Popovers'
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
