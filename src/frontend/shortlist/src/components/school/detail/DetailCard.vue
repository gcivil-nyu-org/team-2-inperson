<script>
/*
import SimPic from "../SimpleView/SimPic.vue"
import SimTitle from "../SimpleView/SimTitle.vue"
*/
import DetailProps from "../detail/DetailProps.vue"

export default {
  name: "DetailCard",
  components: { DetailProps },
}

</script>

<template>
    <div class="detail-card-container">
        <h4 class="detail-title">Detail View</h4>
        <DetailProps></DetailProps>
    </div>
    
</template>

<style scoped>
.detail-card-container {
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
.detail-title {
    align-self: center;
    letter-spacing: 0;
    margin-right: 1px;
    min-height: 50px;
    text-align: center;
    width: 398px;
}
</style>