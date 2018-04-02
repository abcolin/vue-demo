<template>
  <div class="selection-component">
    <div class="selection-show" @click="toggleDrop">
      <span>{{ selections[nowIndex].label }}</span>
      <div class="arrow"></div>
    </div>
    <div class="selection-list" v-if="isDrop">
      <ul>
        <li v-for="(item, index) in selections"
        :key="index"
        @click="chooseSelection(index)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bus } from '../../bus'

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
      isDrop: false,
      nowIndex: 0
    }
  },
  mounted () {
    bus.$on('reset-select', () => {
      this.isDrop = false
    })
  },
  methods: {
    toggleDrop (e) {
      e.stopPropagation()
      bus.$emit('reset-select')
      this.isDrop = !this.isDrop
    },
    chooseSelection (index) {
      this.nowIndex = index
      // this.isDrop = false
      this.$emit('on-change', this.selections[this.nowIndex])
    }
  }
}
</script>

<style lang="scss" scoped>
.selection-component {
  position: relative;
  display: inline-block;
  .selection-show {
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
    .arrow {
      position: absolute;
      top: 10px;
      right: 6px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #e3e3e3;
      width: 0;
      height: 0;
    }
  }
  .selection-list {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
    li {
      padding: 5px 15px 5px 10px;
      border-left: 1px solid #e3e3e3;
      border-right: 1px solid #e3e3e3;
      cursor: pointer;
      background: #fff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        background: #e3e3e3;
      }
    }
  }
}
</style>
