<template>
  <div class="dashboard-editor-container">


    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="shopName"
          label="统计信息"
          align="center"
          width="150">
        </el-table-column>
        <el-table-column label="今日" align="center">
          <el-table-column
            prop="addNumD"
            label="新增会员"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="buyNumD"
            label="消费笔数"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="buyAmountD"
            align="center"
            label="消费金额"
            width="300">
          </el-table-column>
          <el-table-column
            prop="chargeAmountD"
            label="充值金额"
            align="center"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column label="本月" align="center">
          <el-table-column
            prop="addNumM"
            label="新增会员"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="buyNumM"
            label="消费笔数"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="buyAmountM"
            label="消费金额"
            align="center"
            width="300">
          </el-table-column>
          <el-table-column
            prop="chargeAmountM"
            label="充值金额"
            align="center"
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table>
    </el-row>


  </div>
</template>

<script>



import {queryShopAnalysisData} from "../api/shop/shopinfo";

export default {
  name: 'Index',
  components: {
  },
  data() {
    return {
      loading:false,
      tableData: [],
      queryParams:{}
    }
  },
  created() {
    this.getList();
  },
  methods: {
     getList() {
        this.loading = true;
         queryShopAnalysisData(this.queryParams).then(response => {
           this.tableData = response.data;
           this.loading = false;
         });
     }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
