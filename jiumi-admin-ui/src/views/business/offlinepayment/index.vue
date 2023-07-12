<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="queryParams.userName" placeholder="请输入用户名" clearable size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="绑定号码" prop="userPhone">
        <el-input v-model="queryParams.userPhone" placeholder="请输入绑定号码" clearable size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="订单编号" prop="orderCode">
        <el-input v-model="queryParams.orderCode" placeholder="请输入订单编号" clearable size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="下单时间" prop="orderTime">
        <el-date-picker v-model="queryParams.orderTimeAry" size="small" style="width: 240px"
                        value-format="yyyy-MM-dd" type="daterange" range-separator="-" start-placeholder="开始日期"
                        end-placeholder="结束日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="关键字" prop="remark">
        <el-input v-model="queryParams.remark" placeholder="请输入关键字，可查询备注信息" clearable size="small"
                  @keyup.enter.native="handleQuery" />
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
          v-hasPermi="['business:order:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange"
              show-summary :summary-method="getSummaries">
      <el-table-column label="编号" align="center" type="index" />
      <el-table-column label="门店" align="center" prop="shopName" />
      <el-table-column label="购买用户" align="center" prop="userName" />
      <el-table-column label="绑定号码" align="center" prop="userPhone" />
      <el-table-column label="订单编号" align="center" prop="orderCode" />
      <el-table-column label="下单时间" align="center" prop="orderTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.orderTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <!--      <el-table-column label="订单类型" align="center" prop="orderType" />-->
      <el-table-column label="总金额" align="center" prop="sumAmount" />
      <el-table-column label="余额支付" align="center" prop="payment1" />
      <el-table-column label="产品账户支付" align="center" prop="payment2" />
      <el-table-column label="现金支付" align="center" prop="payment3" />
      <el-table-column label="银行卡支付" align="center" prop="payment4" />
      <el-table-column label="挂账支付" align="center" prop="payment5" />
      <el-table-column label="免费支付" align="center" prop="payment6" />
      <el-table-column label="微信支付" align="center" prop="payment7" />
      <el-table-column label="支付宝支付" align="center" prop="payment8" />
      <el-table-column label="支付时间" align="center" prop="payTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.payTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" align="center" prop="orderStatus" :formatter="orderStatusFormat" />
      <el-table-column label="备注信息" align="center" prop="remark" />
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改订单信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="80%" append-to-body :close-on-click-modal="false" >
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="用户ID" prop="userId">
              <el-input v-model="form.userId" placeholder="请输入用户ID" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="购买用户" prop="userName">
              <el-input v-model="form.userName" placeholder="请输入购买用户" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="商品名称" prop="productName">
              <el-input v-model="form.productName" placeholder="请输入商品名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="订单编号" prop="orderCode">
              <el-input v-model="form.orderCode" placeholder="请输入订单编号" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="下单时间" prop="orderTime">
              <el-date-picker clearable size="small"
                              v-model="form.orderTime"
                              type="datetime"
                              value-format="yyyy-MM-dd HH:mm:ss"
                              placeholder="选择下单时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="微信支付下单号" prop="outTradeNo">
              <el-input v-model="form.outTradeNo" placeholder="请输入微信支付下单号" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="消费类型" prop="consumeType">
              <el-select v-model="form.consumeType" placeholder="请选择消费类型">
                <el-option
                  v-for="dict in consumeTypeOptions"
                  :key="dict.dictValue"
                  :label="dict.dictLabel"
                  :value="dict.dictValue"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="订单类型" prop="orderType">
              <el-select v-model="form.orderType" placeholder="请选择订单类型">
                <el-option
                  v-for="dict in orderTypeOptions"
                  :key="dict.dictValue"
                  :label="dict.dictLabel"
                  :value="dict.dictValue"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="订单金额" prop="orderAmount">
              <el-input v-model="form.orderAmount" placeholder="请输入订单金额" />
            </el-form-item>

          </el-col>
          <el-col :span="12">
            <el-form-item label="运费" prop="freightAmount">
              <el-input v-model="form.freightAmount" placeholder="请输入运费" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="总金额" prop="sumAmount">
              <el-input v-model="form.sumAmount" placeholder="请输入总金额" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="支付类型" prop="payType">
              <el-select v-model="form.payType" placeholder="请选择支付类型">
                <el-option
                  v-for="dict in payTypeOptions"
                  :key="dict.dictValue"
                  :label="dict.dictLabel"
                  :value="parseInt(dict.dictValue)"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="支付时间" prop="payTime">
              <el-date-picker clearable size="small"
                              v-model="form.payTime"
                              type="datetime"
                              value-format="yyyy-MM-dd HH:mm:ss"
                              placeholder="选择支付时间">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="订单状态">
              <el-radio-group v-model="form.orderStatus">
                <el-radio
                  v-for="dict in orderStatusOptions"
                  :key="dict.dictValue"
                  :label="dict.dictValue"
                >{{dict.dictLabel}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="物流单号" prop="logisticsCode">
              <el-input v-model="form.logisticsCode" placeholder="请输入物流单号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="物流类型" prop="logisticsType">
              {{form.logisticsType}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="收货人姓名" prop="takeUser">
              <el-input v-model="form.takeUser" placeholder="请输入收货人姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="收货人手机号" prop="takePhone">
              <el-input v-model="form.takePhone" placeholder="请输入收货人手机号" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="收货人地址" prop="takeAddress">
              <el-input v-model="form.takeAddress" placeholder="请输入收货人地址" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-row v-if="form.orderItemList.length>0">
        <el-table :data="form.orderItemList"  >
          <el-table-column label="序号" align="center" type="index"/>
          <el-table-column label="商品名称" align="center" prop="productName" />
          <el-table-column label="图片" align="center" prop="goodsImg" >
            <template slot-scope="scope">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.goodsImg"
                :fit="fit"></el-image>
            </template>
          </el-table-column>
          <el-table-column label="商品数量" align="center" prop="goodsNum" />
          <el-table-column label="商品价格" align="center" prop="price" />
          <el-table-column label="规格" align="center" prop="skuAttr" />
        </el-table>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {listOrder, getOrder, delOrder, addOrder, updateOrder, exportOrder, updateSebdOrder} from "@/api/business/order";
import {getOrderItemFinanceList} from "../../../api/business/itemorder";

export default {
  name: "Order",
  data() {
    return {
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
      // 订单信息表格数据
      orderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 消费类型01线上消费02线上消费字典
      consumeTypeOptions: [],
      // 订单类型01商品02充值字典
      orderTypeOptions: [],
      // 支付类型01余额支付02微信支付字典
      payTypeOptions: [],
      // 订单状态00取消订单01待支付02已支付03已发货04已收货(已完成)字典
      orderStatusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        userName: null,
        productName: null,
        orderCode: null,
        orderTime: null,
        outTradeNo: null,
        consumeType: "02",
        orderType: null,
        orderAmount: null,
        freightAmount: null,
        sumAmount: null,
        payType: null,
        payTime: null,
        orderStatus: null,
        logisticsCode: null,
        logisticsType: null,
        takeUser: null,
        takePhone: null,
        takeAddress: null,
      },
      // 表单参数
      form: {
        orderItemList:[]
      },
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("order_info_consume_type").then(response => {
      this.consumeTypeOptions = response.data;
    });
    this.getDicts("sys_order_type").then(response => {
      this.orderTypeOptions = response.data;
    });
    this.getDicts("order_info_pay_type").then(response => {
      this.payTypeOptions = response.data;
    });
    this.getDicts("sys_item_order_status").then(response => {
      this.orderStatusOptions = response.data;
    });
  },
  methods: {
    /** 查询订单信息列表 */
    getList() {
      this.loading = true;
      getOrderItemFinanceList(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 消费类型字典翻译
    consumeTypeFormat(row, column) {
      return this.selectDictLabel(this.consumeTypeOptions, row.consumeType);
    },
    // 订单类型充值字典翻译
    orderTypeFormat(row, column) {
      return this.selectDictLabel(this.orderTypeOptions, row.orderType);
    },
    // 支付类型字典翻译
    payTypeFormat(row, column) {
      return this.selectDictLabel(this.payTypeOptions, row.payType);
    },
    // 订单状态字典翻译
    orderStatusFormat(row, column) {
      console.log(this.orderStatusOptions,'orderStatusOptions')
      return this.selectDictLabel(this.orderStatusOptions, row.orderStatus);
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
        userId: null,
        userName: null,
        productName: null,
        orderCode: null,
        orderTime: null,
        outTradeNo: null,
        consumeType: "02",
        orderType: null,
        orderAmount: null,
        freightAmount: null,
        sumAmount: null,
        payType: null,
        payTime: null,
        orderStatus: "0",
        logisticsCode: null,
        logisticsType: null,
        takeUser: null,
        takePhone: null,
        takeAddress: null,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null,
        orderItemList:[]
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
      this.title = "添加订单信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改订单信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateOrder(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addOrder(this.form).then(response => {
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
      this.$confirm('是否确认删除订单信息编号为"' + ids + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function() {
        return delOrder(ids);
      }).then(() => {
        this.getList();
        this.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有订单信息数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.exportLoading = true;
        return exportOrder(queryParams);
      }).then(response => {
        this.download(response.msg);
        this.exportLoading = false;
      }).catch(() => {});
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 2) {
          sums[index] = '总价';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value)) && column.property!='userPhone' && column.property!='orderStatus' && column.property!='remark') {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += ' 元';
        } else {
          sums[index] = '';
        }
      });

      return sums;
    }
  }
};
</script>
