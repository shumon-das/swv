<template>
    <div>
        <h1>PrimeFaces Responsive Design</h1>
        <div class="grid">
            <div class="col-12 md:col-6 p-fluid">
                <div class="card">
                    <h5>InputText</h5>
                    <div class="grid formgrid">
                        <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="Default"></InputText>
                        </div>
                        <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="Disabled" :disabled="true"></InputText>
                        </div>
                        <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                            <InputText type="text" placeholder="Invalid" class="p-invalid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>                
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    
})
</script>

<style scoped >

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
}    

</style>  
