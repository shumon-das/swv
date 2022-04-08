<template>
        <!-- <button @click="clickk">Click</button> -->
    <div>
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" responsiveLayout="scroll">
            <Column :rowReorder="true" headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Users } from '../DB/users.js'

export default defineComponent({
   data() {
        return {
            columns: null,
            products:[]
        }
    },
    productService: null,
    created() {

        this.products = Users.getAllUsers()
        this.columns = [
            {field: 'id', header: 'ID'},
            {field: 'name', header: 'Name'},
            {field: 'username', header: 'Username'},
            {field: 'email', header: 'Email'},
            {field: 'address', header: 'Address'},
            {field: 'street', header: 'Street'},
            {field: 'suite', header: 'Suite'},
            {field: 'city', header: 'City'},
            {field: 'zipcode', header: 'Zipcode'}
        ];
    },
    methods: {
        onColReorder() {
            this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        },
        onRowReorder(event) {
            this.products = event.value;
            this.$toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
        }
    }
})
</script>
