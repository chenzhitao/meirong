<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
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
      <el-form-item label="结算店铺" prop="paymentSourceShop">
        <el-select v-model="queryParams.paymentSourceShop" placeholder="请输入结算店铺" clearable filterable>
          <el-option
            v-for="dict in shopinfoList"
            :key="dict.id"
            :label="dict.shopName"
            :value="dict.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="结算状态" prop="paymentStatus">
        <el-select v-model="queryParams.paymentStatus" placeholder="请选择结算状态" clearable size="small">
          <el-option
            v-for="dict in paymentStatusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="结算时间">
        <el-date-picker
          v-model="daterangePaymentTime"
          size="small"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
		  :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['finance:payment:export']"
        >导出</el-button>
      </el-col>
      <el-col :span="4"><strong>合计结算金额：{{totalAmount}} 元</strong></el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="paymentList" @selection-change="handleSelectionChange">
      <el-table-column label="编号" align="center" type="index" />
      <el-table-column label="订单ID" align="center" prop="orderId" />
      <el-table-column label="订单编号" align="center" prop="orderCode" />
      <el-table-column label="订单用户" align="center" prop="orderUser" />
      <el-table-column label="下单时间" align="center" prop="orderTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.orderTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="下单店铺名称" align="center" prop="operateSourceShopName" />
      <el-table-column label="结算店铺名称" align="center" prop="paymentSourceShopName" />
      <el-table-column label="结算状态" align="center" prop="paymentStatus" :formatter="paymentStatusFormat" />
      <el-table-column label="结算用户" align="center" prop="paymentUser" />
      <el-table-column label="结算时间" align="center" prop="paymentTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.paymentTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="结算金额" align="center" prop="paymentAmount" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            v-show="scope.row.paymentStatus==='01'"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['finance:payment:edit']"
          >结算</el-button>
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

    <!-- 添加或修改跨店结算对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="110px">
        <el-form-item label="订单ID" prop="orderId">
          <el-input v-model="form.orderId" placeholder="请输入订单ID" readonly disabled/>
        </el-form-item>
        <el-form-item label="订单编号" prop="orderCode">
          <el-input v-model="form.orderCode" placeholder="请输入订单编号" readonly/>
        </el-form-item>
        <el-form-item label="下单时间" prop="orderTime">
          <el-input v-model="form.orderTime" placeholder="下单时间" readonly/>
        </el-form-item>
        <el-form-item label="下单店铺" prop="operateSourceShopName">
          <el-input v-model="form.operateSourceShopName" placeholder="请输入下单店铺名称" readonly/>
        </el-form-item>
        <el-form-item label="结算店铺" prop="paymentSourceShopName">
          <el-input v-model="form.paymentSourceShopName" placeholder="请输入结算店铺名称" readonly/>
        </el-form-item>
        <el-form-item label="结算金额" prop="paymentAmount">
          <el-input v-model="form.paymentAmount" placeholder="请输入结算金额" readonly/>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入备注"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">结  算</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listPayment, getPayment, delPayment, addPayment, updatePayment, exportPayment } from "@/api/finance/payment";
import {listShopinfo} from "../../../api/shop/shopinfo";

export default {
  name: "Payment",
  data() {
    return {
      // 遮罩层
      loading: true,
      totalAmount:0.00,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      ids: [],
      shopinfoList: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 跨店结算表格数据
      paymentList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 下单时间时间范围
      daterangeOrderTime: [],
      // 结算状态字典
      paymentStatusOptions: [],
      // 结算时间时间范围
      daterangePaymentTime: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderCode: null,
        orderTime: null,
        paymentSourceShop: null,
        paymentStatus: null,
        paymentTime: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getShopList();
    this.getList();
    this.getDicts("sys_payment_status").then(response => {
      this.paymentStatusOptions = response.data;
    });
  },
  methods: {
    getShopList() {
      listShopinfo({}).then(response => {
        this.shopinfoList = response.rows;
      });
    },
    /** 查询跨店结算列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeOrderTime && '' != this.daterangeOrderTime) {
        this.queryParams.params["beginOrderTime"] = this.daterangeOrderTime[0]+' 00:00:00';
        this.queryParams.params["endOrderTime"] = this.daterangeOrderTime[1]+' 23:59:59';
      }
      if (null != this.daterangePaymentTime && '' != this.daterangePaymentTime) {
        this.queryParams.params["beginPaymentTime"] = this.daterangePaymentTime[0]+' 00:00:00';
        this.queryParams.params["endPaymentTime"] = this.daterangePaymentTime[1]+' 23:59:59';
      }
      this.totalAmount=0.00;
      listPayment(this.queryParams).then(response => {
        this.paymentList = response.rows;
        this.paymentList.forEach(order=>{
          this.totalAmount+=parseFloat(order.paymentAmount);
        })
        this.total = response.total;
        this.loading = false;
      });
    },
    // 结算状态字典翻译
    paymentStatusFormat(row, column) {
      return this.selectDictLabel(this.paymentStatusOptions, row.paymentStatus);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        orderId: null,
        orderCode: null,
        orderTime: null,
        operateSourceShop: null,
        paymentSourceShop: null,
        operateSourceShopName: null,
        paymentStatus: null,
        paymentUser: null,
        paymentSourceShopName: null,
        paymentTime: null,
        paymentAmount: null,
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
      this.daterangePaymentTime = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加跨店结算";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getPayment(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "跨店订单结算";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updatePayment(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addPayment(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除跨店结算编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delPayment(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有跨店结算数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportPayment(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
