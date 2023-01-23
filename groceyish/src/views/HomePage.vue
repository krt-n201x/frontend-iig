<template>
  <div class="h-screen grid place-content-center">
    <div class="overflow-scroll no-scrollbar">
    <div class="max-w-[1200px] min-w-fit flex space-x-[22px]">
      <div v-for="data in this.ExploreCategories" :key="data.id" :data="data">
        <card-explore :data="data" :Color="data.CardColor" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import CardExplore from '@/components/Card/CardExplore.vue'

export default {
  name: 'Home-Page',
  data() {
    return {
      ExploreCategories: [
        {
          id: 1,
          ItemName: 'Peach',
          Total: '20',
          CardColor: '#FEEFEA',
          ItemPic: 'image3'
        },
        {
          id: 2,
          ItemName: 'Vegetables',
          Total: '220',
          CardColor: '#FFF3FF',
          ItemPic: 'image4'
        },
        {
          id: 3,
          ItemName: 'strawberry',
          Total: '10',
          CardColor: '#F2FCE4',
          ItemPic: 'image5'
        },
        {
          id: 4,
          ItemName: 'Apple',
          Total: '40',
          CardColor: '#FEEFEA',
          ItemPic: 'image6'
        },
        {
          id: 5,
          ItemName: 'Orange',
          Total: '23',
          CardColor: '#ECFFEC',
          ItemPic: 'image7'
        },
        {
          id: 6,
          ItemName: 'Potato',
          Total: '3',
          CardColor: '#FFFCEB',
          ItemPic: 'image8'
        },
        {
          id: 7,
          ItemName: 'Carrot',
          Total: '9',
          CardColor: '#DEF9EC',
          ItemPic: 'image9'
        }
      ],
      color: { color: true }
    }
  },
  components: {
    CardExplore
  }
}
</script>

<style scoped></style>
