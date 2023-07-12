<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="次卡" prop="cardId">
        <el-select v-model="queryParams.cardId" placeholder="请选择次卡" clearable size="small">
          <el-option
            v-for="dict in allCardList"
            :key="dict.id"
            :label="dict.name"
            :value="dict.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="用户手机号" prop="userPhone">
        <el-input
          v-model="queryParams.userPhone"
          placeholder="请输入用户手机号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="购买时间" prop="buyTime">
        <el-date-picker
          v-model="queryParams.buyTimeAry"
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
          type="success"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleOrderAdd"
        >新增次卡订单</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['finance:numbercard:add']"
        >新增次卡记录</el-button>
      </el-col>
      <!--  <el-col :span="1.5">
          <el-button
            type="success"
            plain
            icon="el-icon-edit"
            size="mini"
            :disabled="single"
            @click="handleUpdate"
            v-hasPermi="['finance:numbercard:edit']"
          >修改</el-button>
        </el-col>
        <el-col :span="1.5">
          <el-button
            type="danger"
            plain
            icon="el-icon-delete"
            size="mini"
            :disabled="multiple"
            @click="handleDelete"
            v-hasPermi="['finance:numbercard:remove']"
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
            v-hasPermi="['finance:numbercard:export']"
          >导出</el-button>
        </el-col>-->
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="numbercardList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" type="index" />
      <el-table-column label="用户" align="center" prop="userPhone" />
      <el-table-column label="次卡名称" align="center" prop="cardName" />
      <el-table-column label="订单编号" align="center" prop="orderCode" />
      <el-table-column label="购买时间" align="center" prop="buyTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.buyTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="生效时间" align="center" prop="beginTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.beginTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="截至时间" align="center" prop="endTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.endTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="总次数" align="center" prop="totalTimes" />
      <el-table-column label="使用次数" align="center" prop="useTimes" />
      <el-table-column label="剩余次数" align="center" prop="lastTimes" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['finance:numbercard:edit']"
          >修改</el-button>
                <el-button
                  size="mini"
                  type="text"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.row)"
                  v-hasPermi="['finance:numbercard:remove']"
                >删除</el-button><br/>
          <router-link :to="'/finance/cardhistory?userId=' + scope.row.userId+'&cardId='+ scope.row.id" class="link-type">详情
          </router-link>
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

    <!-- 添加或修改购买次卡记录对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="次卡" prop="cardId">
          <el-select v-model="form.cardId" placeholder="请选择次卡" clearable size="small" :disabled="form.id" @change="formCardChangeFun">
            <el-option
              v-for="dict in allCardList"
              :key="dict.id"
              :label="dict.name"
              :value="dict.id"
            />
          </el-select>
          <strong v-show="form.cardId && !form.userId">{{'有效期'+form.days+'天'}}</strong>
        </el-form-item>
        <el-form-item label="购买时间" prop="buyTime">
          <el-date-picker clearable size="small"
            v-model="form.buyTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择购买时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="生效时间" prop="beginTime">
          <el-date-picker clearable size="small"
            v-model="form.beginTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择生效时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="截至时间" prop="endTime">
          <el-date-picker clearable size="small"
            v-model="form.endTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择截至时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="总次数" prop="totalTimes">
          <el-input v-model="form.totalTimes" placeholder="请输入总次数" />
        </el-form-item>
        <el-form-item label="使用次数" prop="useTimes">
          <el-input v-model="form.useTimes" placeholder="请输入使用次数" />
        </el-form-item>
        <el-form-item label="剩余次数" prop="lastTimes">
          <el-input v-model="form.lastTimes" placeholder="请输入剩余次数" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>


    <el-dialog :title="title" :visible.sync="orderOpen" width="1200px" append-to-body :close-on-click-modal="false">
      <el-form ref="orderForm" :model="orderForm" :rules="orderRules" label-width="200px">
        <el-form-item label="绑定号码" prop="userPhone">
          <el-input v-model="orderForm.userPhone" placeholder="请输入绑定号码" style="width:400px">
            <el-button slot="append" icon="el-icon-search" @click="queryCurrentUserFun"
                       v-show="currentUserInfo.userId==null">查询用户</el-button>
          </el-input>
          <strong style="color: red;">{{orderForm.otherShop?('该用户属于其他分店：'+orderForm.otherShop):''}}</strong>
        </el-form-item>
        <el-form-item label="购买用户" prop="userName">
          <strong>{{orderForm.userName}}--{{orderForm.vipInfo}}</strong>
        </el-form-item>
        <el-form-item label="次卡信息" v-show="orderForm.cardInfo">
          <strong><div v-html="orderForm.cardInfo"></div></strong>
        </el-form-item>
        <el-form-item label="订单编号" prop="orderCode">
          <strong>{{orderForm.orderCode}}</strong>
        </el-form-item>
        <el-divider content-position="center"><strong>* 选择次卡</strong></el-divider>
        <el-form-item label="次卡" prop="cardId">
          <el-select v-model="orderForm.cardDetail" placeholder="请选择次卡" clearable size="small" value-key="id">
            <el-option
              v-for="dict in allCardList"
              :key="dict.id"
              :label="dict.name"
              :value="dict"
            />
          </el-select>
          <div v-show="orderForm.cardDetail.id"><strong>{{'适用项目：'+orderForm.cardDetail.shopItemName+'，有效期：'+orderForm.cardDetail.day+'天，使用次数：'+orderForm.cardDetail.num+',价格：'+orderForm.cardDetail.price}}</strong></div>
        </el-form-item>
        <el-form-item label="下单时间" prop="orderTime">
          <el-date-picker clearable size="small" v-model="orderForm.orderTime" type="datetime"
                          value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择下单时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="总金额" prop="sumAmount">
          <el-input v-model="orderForm.sumAmount" placeholder="请输入总金额" />
        </el-form-item>
        <el-row>
          <el-col :span="2">
            <strong> * 支付方式</strong>
          </el-col>
          <el-col :span="10">
            <el-form-item :label="userBanlanceLabel" prop="payment1">
              <el-input-number v-model="orderForm.payment1" :min="0" :step="1"
                               :max="currentUserInfo.accountAmount" controls-position="right" placeholder="请输入余额支付" />
            </el-form-item>
            <el-form-item :label="userProBanlanceLabel" prop="payment2">
              <el-input-number v-model="orderForm.payment2" :min="0" :step="1"
                               :max="currentUserInfo.productBalance" controls-position="right"
                               placeholder="请输入产品账户支付" />
            </el-form-item>
            <el-form-item label="现金支付" prop="payment3">
              <el-input-number v-model="orderForm.payment3" :min="0" :step="1" controls-position="right"
                               placeholder="请输入现金支付" />
            </el-form-item>
            <el-form-item label="银行卡支付" prop="payment4">
              <el-input-number v-model="orderForm.payment4" :min="0" :step="1" controls-position="right"
                               placeholder="请输入银行卡支付" />
            </el-form-item>
            <el-form-item label="挂账支付" prop="payment5">
              <el-input-number v-model="orderForm.payment5" :min="0" :step="1" controls-position="right"
                               placeholder="请输入挂账支付" />
            </el-form-item>
            <el-form-item label="免费支付" prop="payment6">
              <el-input-number v-model="orderForm.payment6" :min="0" :step="1" controls-position="right"
                               placeholder="请输入免费支付" />
            </el-form-item>
            <el-form-item label="微信支付" prop="payment7">
              <el-input-number v-model="orderForm.payment7" :min="0" :step="1" controls-position="right"
                               placeholder="请输入微信支付" />
            </el-form-item>
            <el-form-item label="支付宝支付" prop="payment8">
              <el-input-number v-model="orderForm.payment8" :min="0" :step="1" controls-position="right"
                               placeholder="请输入支付宝支付" />
            </el-form-item>
            <el-form-item label="大众点评抵扣金额" prop="payment9">
              <el-input-number v-model="orderForm.payment9" :min="0" :step="1" controls-position="right"
                               placeholder="请输入大众点评抵扣金额" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="订单状态">
          <el-radio-group v-model="orderForm.orderStatus">
            <el-radio v-for="dict in orderStatusOptions" :key="dict.dictValue" :label="dict.dictValue">
              {{dict.dictLabel}}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注信息" prop="remark">
          <el-input v-model="orderForm.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="附件">
          <fileUpload v-model="orderForm.orderFile" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitOrderForm">确 定</el-button>
        <el-button @click="orderCancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listNumbercard, getNumbercard, delNumbercard, addNumbercard, updateNumbercard, exportNumbercard } from "@/api/finance/numbercard";
import {queryAllCardList} from "../../../api/goods/card";
import {addNumberCardorder, editNumberCardorder, getUserByPhone, resetItemorder} from "../../../api/business/itemorder";
import {parseTime} from "../../../utils/ruoyi";

export default {
  name: "Numbercard",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      orderStatusOptions: [],
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 购买次卡记录表格数据
      allCardList: [],
      numbercardList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      orderOpen: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        buyTimeAry:[],
        userId: null,
        cardId: null,
        buyTime: null,
        beginTime: null,
        endTime: null,
        params:{}
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        userId: [
          { required: true, message: "用户ID不能为空", trigger: "blur" }
        ],
        cardId: [
          { required: true, message: "次卡不能为空", trigger: "blur" }
        ],
        beginTime: [
          { required: true, message: "开始日期不能为空", trigger: "blur" }
        ],
        endTime: [
          { required: true, message: "截止日期不能为空", trigger: "blur" }
        ],
      } ,
      userBanlanceLabel: '卡结算：账户余额(0.00):',
      userProBanlanceLabel: '   产品账户(0.00):',
      currentUserInfo:{},
      orderForm: {
        cardDetail:{}
      },
      // 表单校验
      orderRules: {
      }
    };
  },
  created() {
    this.getAllCardList();
    this.getList();
    this.getDicts("sys_item_order_status").then(response => {
      this.orderStatusOptions = response.data;
    });
  },
  methods: {
    /** 查询购买次卡记录列表 */
    getList() {
      this.loading = true;
      listNumbercard(this.queryParams).then(response => {
        this.numbercardList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },

    getAllCardList() {
      queryAllCardList().then(response => {
        this.allCardList = response.data;
      });
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
        cardId: null,
        buyTime: new Date(),
        beginTime: new Date(),
        endTime: null,
        totalTimes: null,
        useTimes: null,
        lastTimes: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        days:0
      };
      this.resetForm("form");
    },

    resetOrderForm() {
      this.orderForm = {
        cardDetail:{},
        id: null,
        shopId: null,
        userId: null,
        userName: null,
        userPhone: null,
        orderCode: null,
        otherShop: null,
        orderTime: new Date(),
        outTradeNo: null,
        orderType: null,
        sumAmount: 0,
        payment1: null,
        payment2: null,
        payment3: null,
        payment4: null,
        payment5: null,
        payment6: null,
        payment7: null,
        payment8: null,
        payment9: null,
        payTime: null,
        orderStatus: "01",
        remark: null,
        orderFile: null,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null,
        vipInfo: null
      };
      this.currentUserInfo={};
      this.resetForm("orderForm");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      if(this.queryParams.buyTimeAry){
        this.queryParams.params.beginTime=this.queryParams.buyTimeAry[0]?this.queryParams.buyTimeAry[0]:'';
        this.queryParams.params.endTime=this.queryParams.buyTimeAry[1]?this.queryParams.buyTimeAry[1]:'';
      }
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
      this.title = "添加购买次卡记录";
    },

    handleOrderAdd() {
      this.resetOrderForm();
      this.orderOpen = true;
      this.title = "添加次卡订单";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getNumbercard(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改购买次卡记录";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateNumbercard(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addNumbercard(this.form).then(response => {
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
      this.$confirm('是否确认删除购买次卡记录编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delNumbercard(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有购买次卡记录数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportNumbercard(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    },
    queryCurrentUserFun() {
      getUserByPhone(this.orderForm.userPhone).then(response => {
        if (!response.userInfo) {
          this.msgError("用户信息不存在");
          return false;
        }
        this.currentUserInfo = response.userInfo;
        let vipInfo = response.vipInfo;
        if (vipInfo) {
          this.orderForm.vipInfo = '(' + vipInfo.vipName + ',优惠比例:' + (vipInfo.discount) + ')';
        }
        let cardInfo = response.numberCard;
        if (cardInfo) {
          this.orderForm.cardInfo =cardInfo;
        }else{
          this.orderForm.cardInfo =null;
        }
        this.orderForm.userName = this.currentUserInfo.nickName;
        if (!this.orderForm.orderCode) {
          this.orderForm.orderCode = response.orderCode;
        }
        if (!this.orderForm.otherShop) {
          this.orderForm.otherShop = response.otherShop;
        }
        this.orderForm.userId = this.currentUserInfo.userId;
        this.currentUserId = this.currentUserInfo.userId;
        this.userBanlanceLabel = '卡结算：账户余额(' + this.currentUserInfo.accountAmount + ')';
        this.userProBanlanceLabel = '   产品账户(' + this.currentUserInfo.productBalance + ')';
      });
    },

    orderCancel(){
      this.resetOrderForm();
      this.orderOpen = false;
    },
    submitOrderForm() {
      this.$refs["orderForm"].validate(valid => {
        if (valid) {
          this.orderForm.cardId=this.orderForm.cardDetail.id;
          this.orderForm.orderTime = parseTime(this.orderForm.orderTime, '{y}-{m}-{d} {h}:{i}:{s}')
          let sumAmount = this.orderForm.payment1 + this.orderForm.payment2 + this.orderForm.payment3 + this.orderForm
            .payment4 + this.orderForm.payment5 + this.orderForm.payment6 + this.orderForm.payment7 + this.orderForm
            .payment8+ this.orderForm.payment9;
          if (this.orderForm.id != null) {
              if (sumAmount != this.orderForm.sumAmount) {
                this.msgError("支付金额与总金额不符，请认真填写！");
                return false;
              }
            editNumberCardorder(this.orderForm).then(response => {
                this.msgSuccess("修改成功");
                this.orderOpen = false;
                this.getList();
              });

          } else {
            addNumberCardorder(this.orderForm).then(response => {
              this.msgSuccess("新增成功");
              this.orderOpen = false;
              this.getList();
            });
          }
        }
      });
    },

    formCardChangeFun(val){
     let cindex= this.allCardList.findIndex(card=>card.id===val);
      let selCard=this.allCardList[cindex];
      this.form.totalTimes=selCard.num;
      this.form.days=selCard.day;
      this.form.useTimes=0;
      this.form.lastTimes=selCard.num;
    }
  }
};
</script>
