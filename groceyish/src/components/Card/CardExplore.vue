<template>
  <div
    class="grid content-end h-[194px] w-[153px] rounded-[3px] py-[19px] relative"
    :style="{ 'background-color': Color }"
  >
    <div
      class="h-[101px] w-[101px] absolute left-1/2 transform -translate-x-1/2 top-[12px]"
    >
      <img :src="require(`../../assets/explorecategories/${this.data.ItemPic}.png`)">
    </div>
    <div class="w-full text-center space-y-[5px]">
      <p class="text-lg font-semibold text-primary">{{this.data.ItemName}}</p>
      <p class="text-sm font-medium text-secondary-gray">{{this.data.Total}} Items</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-explore',
  props: {
    data: {
      type: String,
      required: false
    },
    Color: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped>
.orange {
  background-color: #feefea;
}
.purple {
  background-color: #fff3ff;
}
.green {
  background-color: #f2fce4;
}
.yellow {
  background-color: #fffceb;
}
</style>
