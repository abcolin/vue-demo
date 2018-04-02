<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
      v-for="(item, index) in selections"
      :key="index"
      @click="toggleSelection(index)"
      :title="item.label"
      :class="{active: checkActive(index)}"
      >{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: () => [{
        label: 'test',
        value: 0
      }]
    }
  },
  data () {
    return {
      nowIndexes: [0]
    }
  },
  methods: {
    toggleSelection (index) {
      if (this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index)
      } else {
        let _index = this.nowIndexes.indexOf(index)
        this.nowIndexes.splice(_index, 1)
      }
      let nowObjArray = this.nowIndexes.map((idx) => {
        return this.selections[idx]
      })
      this.$emit('on-change', nowObjArray)
    },
    checkActive (index) {
      return this.nowIndexes.indexOf(index) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>
.chooser-component {
  position: relative;
  display: inline-block;
  .chooser-list li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    &.active {
      border-color: #4fc08d;
      background: #4fc08d;
      color: #fff;
    }
  }
}
</style>
