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

.dimension-name {
    font-family: "Aleo";
    font-weight: bold;
    border-bottom: 1px solid #779886;

}

.dimension-value {
    font-family: sans-serif;
    margin-left: 5px;
}

.dimension-row {
    width: 100%;
    margin-bottom: 10px;
}

.simple-school-name {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: bold;
    font-size: 18px;
    font-family: "Libre Baskerville" ;
}

.simple-school-borough {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 14px;
}
.simple-img-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.simple-img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 10px;
    border: 2px solid #779886;
}

.card-container {
  width: 400px;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #779886, -14px -14px 20px white;
  font-family: "Aleo";
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