<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="门店" prop="shopId">
        <el-select v-model="queryParams.shopId" placeholder="请选择门店" clearable filterable>
          <el-option
            v-for="dict in shopinfoList"
            :key="dict.id"
            :label="dict.shopName"
            :value="dict.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户" prop="userId">
        <el-select v-model="queryParams.userId" placeholder="请选择用户" clearable filterable>
          <el-option
            v-for="dict in userList"
            :key="dict.userId"
            :label="dict.userName"
            :value="dict.userId"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <h3>合计消费金额：{{totalAmount}}</h3>
    <el-table  :data="orderStatisticsList" :span-method="objectSpanMethod" >
      <el-table-column label="门店ID" align="center" prop="shopId"/>
      <el-table-column label="门店名称" align="center" prop="shopName"/>
      <el-table-column label="用户ID" align="center"  prop="userId"  />
      <el-table-column label="用户名称" align="center"  prop="userName" />
      <el-table-column label="人员数量" align="center" prop="shopUserCount"/>
      <el-table-column label="消费类型" align="center"  prop="consumeType"  />
      <el-table-column label="消费金额" align="center" prop="totalConsumeTypeAmount"/>
      <el-table-column label="总消费金额" align="center"   prop="totalOrderAmount"  />
    </el-table>


  </div>
</template>

<script>
import { listStatistics } from "@/api/business/statistics";
import { listShopinfo} from "@/api/shop/shopinfo";
import { listUser} from "@/api/system/user";


export default {
  name: "OrderStatistics",
  data() {
    return {
      userList:[],
      totalAmount:0.00,
      showSearch:true,
      shopinfoList:[],
      queryParams:{
        shopId:null,
        userId:null,
        pageNum: 1,
        pageSize: 10,
        userName: null,
        rechargeTime: null,
      },
      orderStatisticsList:[]
    };
  },
  created() {
    this.getList();
    this.getShopList()
    this.getUserList()
  },
  methods: {
    getUserList(){
      listUser({userType:"02"}).then(res=>{
        this.userList = res.rows;
      })
    },
    /** 查询门店列表 */
    getShopList() {
      listShopinfo({}).then(response => {
        this.shopinfoList = response.rows;
      });
    },
    getList: function () {
      let tmpList = []
      listStatistics(this.queryParams).then(res => {
         tmpList = res.data;
        let shopRowsMap = {};
        let userRowsMap = {};
        //计算每个门店有总共有几条记录
        this.totalAmount=0.00;
        for (let i = 0; i < tmpList.length; i++) {
          this.totalAmount+=parseFloat(tmpList[i].totalConsumeTypeAmount);
          if (!shopRowsMap.hasOwnProperty(tmpList[i].shopId)) {
            shopRowsMap[tmpList[i].shopId] = 1;
          } else {
            shopRowsMap[tmpList[i].shopId] = shopRowsMap[tmpList[i].shopId] + 1;
          }
          let userKey = tmpList[i].shopId + '$' + tmpList[i].userId;
          if (!userRowsMap.hasOwnProperty(userKey)) {
            userRowsMap[userKey] = 1;
          } else {
            userRowsMap[userKey] = userRowsMap[userKey] + 1;
          }
        }
        let shopRowsMapKeys = Object.keys(shopRowsMap);
        for (let item of tmpList) {
          let isFind = shopRowsMapKeys.find(k => k == item.shopId);
          if (isFind) {
            item['shopRowCount'] = shopRowsMap[item.shopId];
            delete shopRowsMap[item.shopId];
          }
        }

        let userRowsMapKeys = Object.keys(userRowsMap);
        for (let item of tmpList) {
          userRowsMapKeys.forEach((keyItem) => {
            let arr = keyItem.split("$");
            if(item.shopId == arr[0] && item.userId == arr[1]){
              item['userRowCount'] = userRowsMap[keyItem];
              delete userRowsMap[keyItem];
            }
          })
        }
        this.orderStatisticsList = tmpList;
      });
    },

    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    /**合并表格*/
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      // // //合并订单编号列
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 4 || columnIndex === 7) {
        if (row.shopRowCount >= 1) {
          return {
            rowspan: row.shopRowCount,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
      if (columnIndex === 2 || columnIndex === 3) {
        if (row.userRowCount >= 1) {
          return {
            rowspan: row.userRowCount,
            colspan: 1
          };
        }
        else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }

    },
  }
};
</script>
<style scoped="scoped">
</style>
