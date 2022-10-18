<script>
    export default {
        name: "DetailCard",
        props: ["schoolDetailData"],
    }
</script>

<template>
    <div class="card-container">
        <div class="card-header">
            <a href="https://stuy.enschool.org/"><div class="detail-school-name">
                {{schoolDetailData.name}}
            </div></a>
            <div class="detail-school-borough">
                {{schoolDetailData.borough}}
            </div>
        </div>
        <!-- <div class="column_wrapper"> -->
        <div class = "dimension-rows">
            <template v-for="dimension in schoolDetailData.dimensions" :key="dimension">
                <div class="dimension-row">
                    <div class="dimension-name">{{dimension.name}}</div>
                    <div class="dimension-value">{{dimension.value}}</div>
                </div>
            </template>
        </div>
        <!-- </div> -->
    </div>
</template>

<style scoped>

.dimension-name {
    font-family: "Aleo";
    font-weight: bold;
    font-size: 14px;
    border-bottom: 1px solid #779886;
}

.dimension-rows {
    width: 100%; 
    display: flex; 
    flex-wrap: wrap; 
    justify-content: 
    space-between; 
    align-items: center; 
    padding: 15px;
}

.dimension-value {
    font-family: sans-serif;
    font-size: 14px;
    margin-left: 5px;
    padding-bottom: 5px;
}

.dimension-row {
    width: 10000%;
    margin-bottom: 2px;
}

.detail-school-name {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
    font-size: 18px;
    font-family: "Libre Baskerville" ;
}

.detail-school-borough {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
}

.card-container {
    width: 400px;
    height: 500px; 
    margin: auto; 
    border-radius: 20px;
    padding: 40px;
    overflow-y:auto;
    box-sizing: border-box;
    background: #ecf0f3;
    box-shadow: 14px 14px 20px #779886, -14px -14px 20px white;
    font-family: "Aleo";
}

.card-header {
    width: 100%; 
    display: flex; 
    flex-wrap: wrap; 
    justify-content:flex-end; 
    padding: 15px
}
/* 
.column_wrapper {
  column-count: 2;
} */
</style>