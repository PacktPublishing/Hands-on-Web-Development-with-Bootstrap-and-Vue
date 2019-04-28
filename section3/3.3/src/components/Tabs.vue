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

            <b-card no-body>
                <b-tabs pills card vertical>
                <b-tab title="Tab 1" active>
                    <b-card-text>

                        <b-table id="tabel1" :items="items" striped hover :fields="fields"></b-table> 

                    </b-card-text>
                </b-tab>
                <b-tab title="Tab 2">
                    <b-card-text>
                        <b-progress :value="counter" :max="max" show-progress animated >

                        </b-progress>
                    </b-card-text>
                </b-tab>
                <b-tab title="Tab 3"><b-card-text>Tab Contents 3</b-card-text></b-tab>
                </b-tabs>
            </b-card>

        </b-container>

        <br />

        <b-container>

            <div>
                <b-tabs>
                    <b-tab active>
                    <template slot="title">
                        <b-spinner type="grow" small></b-spinner> I'm <i>Custom</i> <strong>Title</strong>
                    </template>
                    <p class="p-3">Tab Contents 1</p>
                    </b-tab>

                    <b-tab>
                    <template slot="title">
                        <b-spinner type="border" small></b-spinner> Tab 2
                    </template>
                    <p class="p-3">Tab Contents 2</p>
                    </b-tab>
                </b-tabs>
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
    name: 'Home',
    data() {
        return {
            max:100,
            counter: 45,
            fields: [ {key:'first_name', sortable: true}, 'last_name', 'age'],
            items: [
                { age: 40, first_name:'Dickerson', last_name:'Macdonal', _cellVariants: {
                    age: 'info', first_name: 'warning'
                }},
                { age: 21, first_name:'Larsen', last_name:'Shaw'},
                { age: 89, first_name:'Geneva', last_name:'Wilson', _rowVariant:'danger'},
                { age: 38, first_name:'Jami', last_name:'Carney'},
            ]
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
