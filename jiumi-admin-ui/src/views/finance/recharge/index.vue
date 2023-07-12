<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入用户名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="入账时间">
        <el-date-picker
          v-model="daterangeRechargeTime"
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
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="primary"-->
<!--          plain-->
<!--          icon="el-icon-plus"-->
<!--          size="mini"-->
<!--          @click="handleAdd"-->
<!--          v-hasPermi="['finance:recharge:add']"-->
<!--        >新增</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="success"-->
<!--          plain-->
<!--          icon="el-icon-edit"-->
<!--          size="mini"-->
<!--          :disabled="single"-->
<!--          @click="handleUpdate"-->
<!--          v-hasPermi="['finance:recharge:edit']"-->
<!--        >修改</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="danger"-->
<!--          plain-->
<!--          icon="el-icon-delete"-->
<!--          size="mini"-->
<!--          :disabled="multiple"-->
<!--          @click="handleDelete"-->
<!--          v-hasPermi="['finance:recharge:remove']"-->
<!--        >删除</el-button>-->
<!--      </el-col>-->
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
		  :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['finance:recharge:export']"
        >导出</el-button>
      </el-col>
      <el-col :span="4"><strong>合计充值金额：{{totalAmount}} 元</strong></el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="rechargeList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="编号" align="center" type="index" />
      <el-table-column label="用户名" align="center" prop="userName" />
      <el-table-column label="手机号" align="center" prop="phonenumber" />
      <el-table-column label="账户金额" align="center" prop="accountAmount" />
      <el-table-column label="充值金额" align="center" prop="rechargeAmount" >
      </el-table-column>
      <el-table-column label="账户类型" align="center" prop="rechargeType" >
        <template slot-scope="scope">
          <span>{{scope.row.rechargeType===0?'基本账户':'产品账户'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="支付类型" align="center" prop="paymentType" :formatter="paymentTypefmatFun"></el-table-column>
      <el-table-column label="vip变更等级" align="center" prop="vipLevel" />
      <el-table-column label="入账时间" align="center" prop="rechargeTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.rechargeTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="入账描述" align="center" prop="rechargeDesc" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width" fixed="right">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-printer"
                     @click="handlePrint(scope.row, 1)">小票</el-button>
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

    <!-- 添加或修改用户充值记录对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="账户金额" prop="accountAmount">
          <el-input v-model="form.accountAmount" placeholder="请输入账户金额" />
        </el-form-item>
        <el-form-item label="入账金额" prop="rechargeAmount">
          <el-input v-model="form.rechargeAmount" placeholder="请输入入账金额" />
        </el-form-item>
        <el-form-item label="vip变更等级" prop="vipLevel">
          <el-input v-model="form.vipLevel" placeholder="请输入vip变更等级" />
        </el-form-item>
        <el-form-item label="入账时间" prop="rechargeTime">
          <el-date-picker clearable size="small"
            v-model="form.rechargeTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择入账时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="入账描述" prop="rechargeDesc">
          <el-input v-model="form.rechargeDesc" placeholder="请输入入账描述" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>


    <el-dialog title="打印小票" :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
      <div id="printMe" style="font: 11px 黑体,Arial Narrow,HELVETICA;line-height: 20px;">
        <h3 class="text-center" style="font-size: 22px;">小象美业</h3>
        <div>
          <div>尊敬的{{form.userName}}先生/女士:</div>
          <div>充值时间: {{form.rechargeTime}}</div>
          <div>充值账户类型: {{form.rechargeType===0?'基本账户':'产品账户'}}</div>
          <div>支付类型: {{paymentTypefmatFun(form)}}</div>
          <div>充值前账户金额: {{form.accountAmount-form.rechargeAmount}}</div>
          <div>充值金额: {{form.rechargeAmount}}</div>
          <div>充值后账户金额: {{form.accountAmount}}</div>
          <div>特别提示: 护肤品为私人用品</div>
          <div>售后无质量问题概不退换，谢谢。</div>
          <div>会员签字确认:</div>
          <div style="margin-top: 60px;">
            <div>
              小象美业欢迎您的光临！！！
            </div>
            <div>地址：{{form.address}}</div>
            <div>电话：{{form.phone}}</div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" v-print="'#printMe'">打 印</el-button>
			</span>
    </el-dialog>
  </div>
</template>

<script>
import { listRecharge, getRecharge, delRecharge, addRecharge, updateRecharge, exportRecharge } from "@/api/finance/recharge";
import {isNumberStr} from "../../../utils";

export default {
  name: "Recharge",
  data() {
    return {
      // 遮罩层
      totalAmount:0.00,
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      paymentTypeOptions: [],
      ids: [],
      dialogVisible:false,
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户充值记录表格数据
      rechargeList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 入账时间时间范围
      daterangeRechargeTime: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId:null,
        userName: null,
        rechargeTime: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    const userId = this.$route.query && this.$route.query.userId;
    if (userId && isNumberStr(userId)) {
      this.queryParams.userId=userId;
    }
    this.getList();
    this.getDicts("sys_recharge_payment_type").then(response => {
      this.paymentTypeOptions = response.data;
    });
  },
  methods: {
    /** 查询用户充值记录列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeRechargeTime && '' != this.daterangeRechargeTime) {
        this.queryParams.params["beginRechargeTime"] = this.daterangeRechargeTime[0];
        this.queryParams.params["endRechargeTime"] = this.daterangeRechargeTime[1];
      }
      this.totalAmount=0.00;
      listRecharge(this.queryParams).then(response => {
        this.rechargeList = response.rows;
        this.rechargeList.forEach(order=>{
          this.totalAmount+=parseFloat(order.rechargeAmount);
        })
        this.total = response.total;
        this.loading = false;
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
        userName: null,
        accountAmount: null,
        rechargeAmount: null,
        vipLevel: null,
        paymentType: null,
        rechargeTime: null,
        rechargeDesc: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null
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
      this.daterangeRechargeTime = [];
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
      this.title = "添加用户充值记录";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getRecharge(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改用户充值记录";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateRecharge(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addRecharge(this.form).then(response => {
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
      this.$confirm('是否确认删除用户充值记录编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delRecharge(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有用户充值记录数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportRecharge(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    },
    paymentTypefmatFun(row, column){
      if(row.paymentType){
        return this.selectDictLabel(this.paymentTypeOptions, row.paymentType);
      }else{
        return '';
      }

    },
    handleClose(done) {
      done();
    },
    handlePrint(info = {}, type = 1) {
      console.log(type == 1);
      if (type == 1) {
        this.dialogVisible = true;
        const id = info.id || this.ids
        getRecharge(id).then(response => {
          this.form = response.data;
        });

      } else {
        this.msgSuccess("功能正在建设中");
      }
    },
  }
};
</script>
