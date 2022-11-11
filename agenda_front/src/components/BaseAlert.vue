<template>
    <div :class="baseClass">
     <slot/>

     <button @click="onClick()">
        X
     </button>
    </div>
</template>

<script>

export default {
    props:['variant'],
    computed: {
        baseClass(){
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : '',                
            ]
        }
    },
    methods:{
        onClick(){
            this.$emit('close');
        }
    }
}
</script>

<style scoped>

.alert{
    display: flex;
    justify-content: space-between;    
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: #ddd;
}


.alert-success{
    background: #42b983;
    color: #FFF;
}

.alert-danger{
    background: red;
    color: #FFF;
}
</style>