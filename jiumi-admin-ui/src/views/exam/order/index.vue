<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="购买用户" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入购买用户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="订单编号" prop="orderCode">
        <el-input
          v-model="queryParams.orderCode"
          placeholder="请输入订单编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="下单时间">
        <el-date-picker
          v-model="daterangeOrderTime"
          size="small"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="订单状态" prop="orderStatus">
        <el-select v-model="queryParams.orderStatus" placeholder="请选择订单状态" clearable size="small">
          <el-option
            v-for="dict in orderStatusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['exam:order:add']"
        >新增
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['exam:order:edit']"
        >修改
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['exam:order:remove']"
        >删除
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['exam:order:export']"
        >导出
        </el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange"
              :span-method="objectSpanMethod"
    >
      <el-table-column label="序号" align="center" type="index"/>
      <el-table-column label="订单编号" align="center" prop="orderCode"/>
      <el-table-column label="商品名称" align="center" prop="itemProductName"/>
      <el-table-column label="下单时间" align="center" prop="orderTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.orderTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="购买用户" align="center" prop="userName"/>
      <el-table-column label="订单金额" align="center" prop="price"/>
      <el-table-column label="运费" align="center" prop="freightAmount"/>
      <el-table-column label="总金额" align="center" prop="sumAmount"/>
      <el-table-column label="订单状态" align="center" prop="orderStatus" :formatter="orderStatusFormat" />
       <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-query"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['exam:order:edit']"
          >详情
          </el-button>
          <el-button
            size="mini"
            type="text"
            v-if="scope.row.productType  == '04' && scope.row.commentStatus == '02'"
            icon="el-icon-edit"
            @click="handleSend(scope.row)"
            v-hasPermi="['exam:order:edit']"
          >发货
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改订单对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="700px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="商品名称" prop="productName">
          <el-input v-model="form.itemProductName" placeholder="请输入商品名称"/>
        </el-form-item>
        <el-form-item label="订单编号">
          <el-input v-model="form.orderCode" placeholder="请输入订单编号"/>
        </el-form-item>
        <el-form-item label="下单时间" prop="orderTime">
          <el-date-picker clearable size="small"
                          v-model="form.orderTime"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="选择下单时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="购买用户" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入购买用户"/>
        </el-form-item>
        <el-form-item label="订单金额" prop="orderAmount">
          <el-input v-model="form.price" placeholder="请输入订单金额"/>
        </el-form-item>
        <el-form-item label="运费" prop="freightAmount">
          <el-input v-model="form.freightAmount" placeholder="请输入运费"/>
        </el-form-item>
        <el-form-item label="订单状态" prop="orderStatus">
          <el-select v-model="form.orderStatus" placeholder="请选择订单状态">
            <el-option
              v-for="dict in orderStatusOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发货快递" prop="logisticsCode">
          <el-input v-model="form.logisticsType" placeholder="请输入发货快递"/>
        </el-form-item>
        <el-form-item label="物流单号" prop="logisticsCode">
          <el-input v-model="form.logisticsCode" placeholder="请输入物流单号"/>
        </el-form-item>
        <el-form-item label="收货人姓名" prop="takeUser">
          <el-input v-model="form.takeUser" placeholder="请输入收货人姓名"/>
        </el-form-item>
        <el-form-item label="收货人手机号" prop="takePhone">
          <el-input v-model="form.takePhone" placeholder="请输入收货人手机号"/>
        </el-form-item>
        <el-form-item label="收货人地址" prop="takeAddress">
          <el-input v-model="form.takeAddress" placeholder="请输入收货人地址"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="title" :visible.sync="openPublish" width="700px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="收货人姓名" prop="takeUser">
          <el-input v-model="form.takeUser" placeholder="请输入收货人姓名" readonly/>
        </el-form-item>
        <el-form-item label="收货人手机号" prop="takePhone">
          <el-input v-model="form.takePhone" placeholder="请输入收货人手机号" readonly/>
        </el-form-item>
        <el-form-item label="收货人地址" prop="takeAddress">
          <el-input v-model="form.takeAddress" placeholder="请输入收货人地址" readonly/>
        </el-form-item>
        <el-form-item label="发货快递" prop="logisticsType">
          <el-select v-model="form.logisticsType" placeholder="请选择发货快递">
            <el-option
              v-for="dict in logisticsTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="快递单号" prop="logisticsCode">
          <el-input v-model="form.logisticsCode" placeholder="请输入快递单号"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">提 交</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {listOrderDetails, getOrder, delOrder, addOrder, updateOrder, exportOrder} from "@/api/exam/order";
import {getItem,updateItem} from "@/api/exam/item";

export default {
  name: "Order",
  data() {
    return {
      //发货弹窗
      openPublish: false,
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 订单表格数据
      orderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 下单时间时间范围
      daterangeOrderTime: [],
      // 订单状态字典
      orderStatusOptions: [],
      // 物流类型字典
      logisticsTypeOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userName: null,
        orderCode: null,
        orderTime: null,
        orderStatus: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {},
    };
  },
  created() {
    this.getList();
    this.getDicts("sys_order_status").then(response => {
      this.orderStatusOptions = response.data;
    });
    this.getDicts("sys_logistics_type").then(response => {
      this.logisticsTypeOptions = response.data;
    });
  },
  methods: {

    /**合并表格*/
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      /*// //合并订单编号列
      if (columnIndex === 1 || columnIndex == 3 || columnIndex == 4 || columnIndex == 6 || columnIndex == 7) {
        if (row.rowCount >= 1) {
          return {
            rowspan: row.rowCount,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }*/
    },
    /** 查询订单列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeOrderTime && '' != this.daterangeOrderTime) {
        this.queryParams.params["beginOrderTime"] = this.daterangeOrderTime[0];
        this.queryParams.params["endOrderTime"] = this.daterangeOrderTime[1];
      }
      listOrderDetails(this.queryParams).then(response => {
        this.orderList = response.rows;
        //判断当前页面中一个订单有几个商品
        let map = {};
        for (let i = 0; i < this.orderList.length; i++) {
          if (!map.hasOwnProperty(this.orderList[i].id)) {
            map[this.orderList[i].id] = 1;
          } else {
            map[this.orderList[i].id] = map[this.orderList[i].id] + 1;
          }
        }
        //获取key
        let arrKeys = Object.keys(map);
        for (let item of this.orderList) {
          let isFind = arrKeys.find(k => k == item.id);
          if (isFind) {
            item['rowCount'] = map[item.id];
            delete map[item.id];
          }
        }
        this.total = response.total;
        this.loading = false;
      });
    },
    // 订单状态字典翻译
    orderStatusFormat(row, column) {
      if(row.productType == '04') {
        let ret = "";
        if (row.commentStatus == '01') {
          ret = "未点评";
        } else if (row.commentStatus == '02') {
          ret = "点评中";
        } else if (row.commentStatus == '03') {
          ret = "已点评";
        }
        return ret;
      }else{
        return this.selectDictLabel(this.orderStatusOptions, row.orderStatus);
      }
    },
    // 物流类型字典翻译
    logisticsTypeFormat(row, column) {
      return this.selectDictLabel(this.logisticsTypeOptions, row.logisticsType);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.openPublish = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        userId: null,
        userName: null,
        productName: null,
        orderCode: null,
        orderTime: null,
        orderAmount: null,
        freightAmount: null,
        sumAmount: null,
        payTime: null,
        orderStatus: null,
        logisticsCode: null,
        logisticsType: null,
        takeUser: null,
        takePhone: null,
        takeAddress: null,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.daterangeOrderTime = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加订单";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      this.form = row;
      console.log(this.form);
      this.title = "订单详情";
      this.open = true;
    },
    //发货
    handleSend(row) {
      this.form = row;
      this.title = "订单发货";
      this.openPublish = true;
    },
    /** 提交发货按钮 */
    submitForm() {
      let itemData = {
        id:this.form.itemId,
        commentStatus:"03", //已点评
        remarkPerson:this.$store.state.user.name
      };
      let orderData = {
        id:this.form.id,
        logisticsCode:this.form.logisticsCode,
        logisticsType:this.form.logisticsType,
        orderStatus:"03" // 订单已完成
      };
      updateItem(itemData).then(res => {
          updateOrder(orderData).then(res2=>{
              this.$message(res2.msg);
              this.cancel();
              this.getList();
          })
      })
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除订单编号为"' + ids + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        return delOrder(ids);
      }).then(() => {
        this.getList();
        this.msgSuccess("删除成功");
      }).catch(() => {
      });
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有订单数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.exportLoading = true;
        return exportOrder(queryParams);
      }).then(response => {
        this.download(response.msg);
        this.exportLoading = false;
      }).catch(() => {
      });
    }
  }
};
</script>
