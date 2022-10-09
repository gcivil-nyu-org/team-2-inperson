<!-- This is used to form the stack cards design-->

<script>
export default {
  name: "SimCardEmpty",
  
}
</script>

<template>
    <div class="empty-card-container">
    </div>
    
</template>

<style scoped>
.empty-card-container {
    /*align-items: flex-start;*/
    /*background-color: var(--white); */
    background-color: white;
    border: 1px none;
    margin-left:auto;
    margin-right:auto;
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000040;
    display: flex;
    height: 480px;
    width: 400px;
    min-width: 300px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

}
</style>