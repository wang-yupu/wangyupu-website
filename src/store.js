import { ref } from 'vue'

const isPageLoading = ref(false)

// 仓库信息
export const lastProdCommitSHA = ref("????????")
export const lastProdCommitTime = ref("????????")
// 同步
fetch("https://api.github.com/repos/wang-yupu/wangyupu-website/branches/main").then(async (resp)=>{
    const json = await resp.json()
    lastProdCommitSHA.value = json.commit.sha.slice(0,8)
    lastProdCommitTime.value = json.commit.commit.author.date
})
export default isPageLoading