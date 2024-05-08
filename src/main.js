import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

//primevue
import PrimeVue from "primevue/config";

// Add theme for app
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

// Add icons for app
import 'primeicons/primeicons.css';

// Add primeflex for app
import 'primeflex/primeflex.css';


// Add UI Components for application
import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import Row from "primevue/row";

import router from "./router/index.js";
import InputGroup from "primevue/inputgroup";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import InputGroupAddon from "primevue/inputgroupaddon";
import Image from "primevue/image";
import i18n from "./i18n.js";
import SelectButton from "primevue/selectbutton";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";


const app =createApp(App);

app.use(PrimeVue, {ripple: true})
    .use(DialogService)
    .use(ConfirmationService)
    .use(ToastService)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-row',Row)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-toolbar', Toolbar)
    .component('pv-input-group',InputGroup)
    .component('pv-input-text',InputText)
    .component('pv-input-number',InputNumber)
    .component('pv-input-group-addon',InputGroupAddon)
    .component('pv-image',Image)
    .component('pv-select-button',SelectButton)
    .use(router)
    .use(i18n)
    .mount('#app')


