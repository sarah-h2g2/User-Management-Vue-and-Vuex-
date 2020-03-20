<template>
   <div>
     <h1>Name: {{name}}</h1>
     <p>Email: {{email}}</p>
     </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      name: { 
        type: String,
        required: true
      },
      email: { 
        type: String,
        required: true
      }
    },
  }
</script>