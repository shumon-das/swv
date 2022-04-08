import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"    
import Breadcrumb from "primevue/breadcrumb" 
import ToastService from 'primevue/toastservice' 
import Button from 'primevue/button'      
import Toast from 'primevue/toast'   
import InputText from 'primevue/inputtext'            //icons


import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';  

const app = createApp(App)

app.use(router)
   .use(PrimeVue)
   .use(ToastService)

app.component('Breadcrumb', Breadcrumb)   
app.component('Button', Button)   
app.component('Toast', Toast)   
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('InputText', InputText)

app.mount('#app')
