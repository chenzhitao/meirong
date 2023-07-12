<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="选择门店" prop="shopId">

        <el-select v-model="queryParams.shopId" placeholder="请选择" clearable filterable>
          <el-option
            v-for="item in shopinfoList"
            :key="item.id"
            :label=" item.shopName"
            :value="item.id"
          ></el-option>
        </el-select>

      </el-form-item>
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
      <el-form-item label="下单时间" prop="orderTime">
        <el-date-picker clearable size="small"
          v-model="queryParams.orderTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择下单时间">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="订单状态" prop="orderStatus">
        <el-select v-model="queryParams.orderStatus" placeholder="请选择订单状态" clearable size="small">
          <el-option value="01" label="待付款"></el-option>
          <el-option value="02" label="待收货"></el-option>
          <el-option value="03" label="已完成"></el-option>
<!--          <el-option-->
<!--            v-for="dict in orderStatusOptions"-->
<!--            :key="dict.dictValue"-->
<!--            :label="dict.dictLabel"-->
<!--            :value="dict.dictValue"-->
<!--          />-->
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
<!--      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['business:order:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['business:order:edit']"
        >修改</el-button>
      </el-col>-->
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['business:order:remove']"
        >删除</el-button>
      </el-col>
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
      <el-col :span="4"><strong>合计消费金额：{{totalAmount}} 元</strong></el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>
    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" type="index" />
      <el-table-column label="购买用户" align="center" prop="userName" />
      <el-table-column label="商品名称" align="center" prop="productName" />
      <el-table-column label="订单编号" align="center" prop="orderCode" />
      <el-table-column label="下单时间" align="center" prop="orderTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.orderTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="微信支付下单号" align="center" prop="outTradeNo" />
      <el-table-column label="订单类型" align="center" prop="orderType" :formatter="orderTypeFormat">
      </el-table-column>
      <el-table-column label="消费类型" align="center" prop="consumeType" :formatter="consumeTypeFormat" />
      <el-table-column label="订单类型" align="center" prop="orderType" :formatter="orderTypeFormat" />
      <el-table-column label="订单金额" align="center" prop="orderAmount" />
      <el-table-column label="运费" align="center" prop="freightAmount" />
      <el-table-column label="总金额" align="center" prop="sumAmount" />
      <el-table-column label="支付类型" align="center" prop="payType" :formatter="payTypeFormat" />
      <el-table-column label="支付时间" align="center" prop="payTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.payTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" align="center" prop="orderStatus" :formatter="statusFormat"/>
      <el-table-column label="订单状态" align="center" prop="orderStatus" :formatter="orderStatusFormat" />
      <el-table-column label="物流单号" align="center" prop="logisticsCode" />
      <el-table-column label="物流类型" align="center" prop="logisticsType" />
      <el-table-column label="收货人姓名" align="center" prop="takeUser" />
      <el-table-column label="收货人手机号" align="center" prop="takePhone" />
      <el-table-column label="收货人地址" align="center" prop="takeAddress" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-info"
            @click="handleOrderDetail(scope.row)"
          >详情</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['business:order:remove']"
          >删除</el-button>
          <el-button
            size="mini"
            v-show="scope.row.orderStatus==='02'"
            type="text"
            icon="el-icon-edit"
            @click="handleSendGoods(scope.row)"
          >发货</el-button>
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

    <!-- 添加或修改订单信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="物流类型" prop="logisticsType">
          <el-select v-model="form.logisticsType" placeholder="请选择物流类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="物流单号" prop="logisticsCode">
          <el-input v-model="form.logisticsCode" placeholder="请输入物流单号" />
        </el-form-item>
        <el-form-item label="收货人姓名" prop="takeUser">
          <el-input v-model="form.takeUser" placeholder="请输入收货人姓名" :disabled="true"/>
        </el-form-item>
        <el-form-item label="收货人手机号" prop="takePhone">
          <el-input v-model="form.takePhone" placeholder="请输入收货人手机号"  :disabled="true"/>
        </el-form-item>
        <el-form-item label="收货人地址" prop="takeAddress">
          <el-input v-model="form.takeAddress" placeholder="请输入收货人地址"  :disabled="true"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="发货" :visible.sync="openPublish" width="700px" append-to-body :close-on-click-modal="false">
      <el-form ref="sendForm" :model="sendForm" :rules="rules" label-width="100px">
        <el-form-item label="收货人姓名" prop="takeUser">
          <el-input v-model="sendForm.takeUser" placeholder="请输入收货人姓名" readonly/>
        </el-form-item>
        <el-form-item label="收货人手机号" prop="takePhone">
          <el-input v-model="sendForm.takePhone" placeholder="请输入收货人手机号" readonly/>
        </el-form-item>
        <el-form-item label="收货人地址" prop="takeAddress">
          <el-input v-model="sendForm.takeAddress" placeholder="请输入收货人地址" readonly/>
        </el-form-item>
        <el-form-item label="发货快递" prop="logisticsType">
          <el-select v-model="sendForm.logisticsType" placeholder="请选择发货快递">
            <el-option
              v-for="dict in logisticsTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="快递单号" prop="logisticsCode">
          <el-input v-model="sendForm.logisticsCode" placeholder="请输入快递单号"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitSendForm">提 交</el-button>
        <el-button @click="sendCancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="订单详情" :visible.sync="detailOpen" width="750px" append-to-body :close-on-click-modal="false">
      <el-table v-loading="loading" :data="orderItemList" @selection-change="handleSelectionChange">
        <el-table-column label="编号" align="center" type="index" />
        <el-table-column label="商品名称" align="center" prop="productName" />
        <el-table-column label="商品图片" align="center" prop="imgUrl">
          <template slot-scope="scope">
            <el-image fit="cover" :src="scope.row.goodsImg" style="width: 60px"></el-image>
          </template>
        </el-table-column>
        <el-table-column label="sku" align="center" prop="skuAttr" />
        <el-table-column label="购买数量" align="center" prop="goodsNum" />
        <el-table-column label="商品价格" align="center" prop="price" />
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailOpen=false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {listOrder, getOrder, delOrder, addOrder, updateOrder, exportOrder, updateSebdOrder} from "@/api/business/order";
import {listOrderItem} from "../../../api/business/orderItem";
import {listShopinfo} from "../../../api/shop/shopinfo";

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
      totalAmount: 0.00,
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      openPublish: false,
      // 总条数
      total: 0,
      sendForm:{
        takeUser:undefined,
        takePhone:undefined,
        takeAddress:undefined,
        logisticsType:undefined,
        logisticsCode:undefined
      },
      // 订单表格数据
      // 订单信息表格数据
      orderList: [],
      logisticsTypeOptions: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      detailOpen: false,
      shopinfoList: [],
      orderItemList: [],
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
        consumeType: null,
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
      form: {},
      // 表单校验
      rules: {
        logisticsType: [{
          required: true,
          message: '请选择快递类型',
          trigger: 'blur'
        }],
        logisticsCode: [{
          required: true,
          message: '请选择快递单号',
          trigger: 'blur'
        }],
      }
    };
  },
  created() {
    this.getDicts("sys_logistics_type").then(response => {
      this.logisticsTypeOptions = response.data;
    });
    this.getShopList();
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
    this.getDicts("sys_order_status").then(response => {
      this.orderStatusOptions = response.data;
    });
  },
  methods: {
    statusFormat(row){
      return this.selectDictLabel(this.orderStatusOptions, row.orderStatus);
    },

    /** 查询订单列表 */
    getList() {
      this.loading = true;
      this.totalAmount=0.00;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.orderList.forEach(order=>{
          this.totalAmount+=parseFloat(order.sumAmount);
        })
        this.total = response.total;
        this.loading = false;
      });
    },

    getShopList() {
      listShopinfo({}).then(response => {
        this.shopinfoList = response.rows;
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
      return this.selectDictLabel(this.orderStatusOptions, row.orderStatus);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },

    sendCancel() {
      this.openPublish = false;
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
        consumeType: null,
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

    submitSendForm(){
      this.$refs["sendForm"].validate(valid => {
        if (valid) {
          updateSebdOrder(this.sendForm).then(response => {
            this.msgSuccess("操作成功");
            this.openPublish = false;
            this.getList();
          });
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
    handleSendGoods(row){
      this.openPublish=true;
      this.sendForm.id=row.id;
      this.sendForm.takeUser=row.takeUser;
      this.sendForm.takePhone=row.takePhone;
      this.sendForm.takeAddress=row.takeAddress;
      this.sendForm.logisticsType='';
      this.sendForm.logisticsCode='';
    },
    handleOrderDetail(row){
      this.detailOpen=true;
      listOrderItem({orderId:row.id}).then(response => {
        this.orderItemList = response.rows;
        this.loading = false;
      });
    }
  }
};
</script>
