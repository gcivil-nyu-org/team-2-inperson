<script>
    export default {
        name: "SimCard",
        props: ["schoolData"],
    }
</script>

<template>
    <div class="card-container">
        <div class="simple-img-container">
            <img class="simple-img" :src="schoolData.img"/>
        </div>
        <div style="width: 100%; diplay: flex; flex-wrap: wrap; justify-content:flex-end; padding: 15px;">
            <div class="simple-school-name">
                {{schoolData.name}}
            </div>
            <div class="simple-school-borough">
                {{schoolData.borough}}
            </div>
        </div>
        <div style="width: 100%; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; padding: 15px;">
            <template v-for="dimension in schoolData.dimensions" :key="dimension">
                <div class="dimension-row">
                    <div class="dimension-name">{{dimension.name}}</div>
                    <div class="dimension-value">{{dimension.value}}</div>
                </div>
            </template>
        </div>
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
    height: 480px;
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