import { defineStore } from "pinia"
import { Names } from "./store_name"

export const userMessageStore = defineStore(Names.userMessageStore, {
  state: () => {
    return {
      userInfo: {}
    }
  },

  getters: {
    // getTableBm: (state) => {
    //   return () => state.treeNodeData[state.mbdmNow].bm || ""
    // }
  },

  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    }
  }
})
