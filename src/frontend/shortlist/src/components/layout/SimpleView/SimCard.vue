<script>
/*
import SimPic from "../SimpleView/SimPic.vue"
import SimTitle from "../SimpleView/SimTitle.vue"
*/

export default {
  name: "SimCard",
  components: { /*SimPic, SimTitle*/ },
}

</script>

<template>
    <div class="card-container">
        <img class="img-top-card" src="../../../images/img-top-card.png" 
        alt="img-top-card" />
        <h4 class="title">Stuyvesant High School</h4>
        <!--
        <v-img 
            lazy-src="../../../images/img-top-card.png"
            max-height = "200px"
            max-width = "300px"
            src="../../../images/img-top-card.png"
        ></v-img>
        -->
    </div>
    
</template>

<style scoped>
.card-container {
    /*align-items: flex-start;*/
    /*background-color: var(--white); */
    background-color: white;
    border: 1px none;
    margin-left:auto;
    margin-right:auto;
    border-radius: 8px;
    box-shadow: 0px 4px 4px #00000040;
    display: flex;
    height: 450px;
    width: 400px;
    min-width: 300px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

}
.img-top-card {
    height:250px;
    width:380px;
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    
}
.title {
    align-self: center;
    letter-spacing: 0;
    margin-right: 1px;
    min-height: 50px;
    text-align: center;
    width: 398px;
}
</style>