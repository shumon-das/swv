<template>
    <header>
        <Breadcrumb :home="home" :model="items">
            <template #item="{item}">
                <!-- <a class="breadcrumb-a" :href="item.url">{{item.label}}</a> -->
                <router-link :to="'/' + item.url">{{item.label}}</router-link>
                <!-- <router-link :to="'/user/' + user.id"><i class="fa fa-eye"></i></router-link> -->
            </template>
        </Breadcrumb>
    </header>
</template>

<script lang="ts">
export default {
    data(){
        return {
            home : {icon: 'pi pi-home', to: '/'},
            items : [
                {label: 'Risk', url: "risk"},
                {label: 'Control', url: "control"},
                {label: 'Action', url: "action"},
                {label: 'Indicator', url: "indicator"},
                {label: 'Risk Event', url: "re"},
                {label: 'Data Table', url: "datatable"}
            ]
        }
    }
}
</script>
