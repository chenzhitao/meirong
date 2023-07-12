<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="用户姓名" prop="userId">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入用户ID"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="入账时间">
        <el-date-picker
          v-model="daterangeIncomeTime"
          size="small"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
<!--      <el-form-item label="入账类型" prop="incomeType">-->
<!--        <el-select v-model="queryParams.incomeType" placeholder="请选择入账类型" clearable size="small">-->
<!--          <el-option-->
<!--            v-for="dict in incomeTypeOptions"-->
<!--            :key="dict.dictValue"-->
<!--            :label="dict.dictLabel"-->
<!--            :value="dict.dictValue"-->
<!--          />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
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
<!--          v-hasPermi="['finance:imcomeDetail:add']"-->
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
<!--          v-hasPermi="['finance:imcomeDetail:edit']"-->
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
<!--          v-hasPermi="['finance:imcomeDetail:remove']"-->
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
          v-hasPermi="['finance:imcomeDetail:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="imcomeDetailList" @selection-change="handleSelectionChange">
      <el-table-column label="编号" align="center" type="index" />
      <el-table-column label="用户姓名" align="center" prop="userName" />
      <el-table-column label="账户金额" align="center" prop="accountAmount" />
      <el-table-column label="入账金额" align="center" prop="incomeAmount" />
      <el-table-column label="入账时间" align="center" prop="incomeTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.incomeTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
<!--      <el-table-column label="入账类型" align="center" prop="incomeType" :formatter="incomeTypeFormat" />-->
      <el-table-column label="入账描述" align="center" prop="incomeDesc" />
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改用户入账记录对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="form.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="账户金额" prop="accountAmount">
          <el-input v-model="form.accountAmount" placeholder="请输入账户金额" />
        </el-form-item>
        <el-form-item label="入账金额" prop="incomeAmount">
          <el-input v-model="form.incomeAmount" placeholder="请输入入账金额" />
        </el-form-item>
        <el-form-item label="入账时间" prop="incomeTime">
          <el-date-picker clearable size="small"
            v-model="form.incomeTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择入账时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="入账类型" prop="incomeType">
          <el-select v-model="form.incomeType" placeholder="请选择入账类型">
            <el-option
              v-for="dict in incomeTypeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入账描述" prop="incomeDesc">
          <el-input v-model="form.incomeDesc" placeholder="请输入入账描述" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listImcomeDetail, getImcomeDetail, delImcomeDetail, addImcomeDetail, updateImcomeDetail, exportImcomeDetail } from "@/api/finance/imcomeDetail";

export default {
  name: "ImcomeDetail",
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
      // 用户入账记录表格数据
      imcomeDetailList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 入账时间时间范围
      daterangeIncomeTime: [],
      // 入账类型字典
      incomeTypeOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        incomeTime: null,
        incomeType: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("sys_income_type").then(response => {
      this.incomeTypeOptions = response.data;
    });
  },
  methods: {
    /** 查询用户入账记录列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeIncomeTime && '' != this.daterangeIncomeTime) {
        this.queryParams.params["beginIncomeTime"] = this.daterangeIncomeTime[0];
        this.queryParams.params["endIncomeTime"] = this.daterangeIncomeTime[1];
      }
      listImcomeDetail(this.queryParams).then(response => {
        this.imcomeDetailList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 入账类型字典翻译
    incomeTypeFormat(row, column) {
      return this.selectDictLabel(this.incomeTypeOptions, row.incomeType);
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
        accountAmount: null,
        incomeAmount: null,
        incomeTime: null,
        incomeType: null,
        incomeDesc: null,
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
      this.daterangeIncomeTime = [];
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
      this.title = "添加用户入账记录";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getImcomeDetail(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "详情";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateImcomeDetail(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addImcomeDetail(this.form).then(response => {
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
      this.$confirm('是否确认删除用户入账记录编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delImcomeDetail(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有用户入账记录数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportImcomeDetail(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
