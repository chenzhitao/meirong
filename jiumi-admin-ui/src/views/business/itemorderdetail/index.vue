<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="订单id" prop="orderId">
        <el-input
          v-model="queryParams.orderId"
          placeholder="请输入订单id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="消费类型1消费项目2消费产品" prop="consumerType">
        <el-select v-model="queryParams.consumerType" placeholder="请选择消费类型1消费项目2消费产品" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="消费产品ID类型为1就是消费项目ID类型为2就是消费产品ID" prop="consumerId">
        <el-input
          v-model="queryParams.consumerId"
          placeholder="请输入消费产品ID类型为1就是消费项目ID类型为2就是消费产品ID"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="单价" prop="price">
        <el-input
          v-model="queryParams.price"
          placeholder="请输入单价"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="数量" prop="num">
        <el-input
          v-model="queryParams.num"
          placeholder="请输入数量"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="划卡次数" prop="cardNum">
        <el-input
          v-model="queryParams.cardNum"
          placeholder="请输入划卡次数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="技师A" prop="consultant1">
        <el-input
          v-model="queryParams.consultant1"
          placeholder="请输入技师A"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="技师A佣金" prop="consultant1Amount">
        <el-input
          v-model="queryParams.consultant1Amount"
          placeholder="请输入技师A佣金"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="技师B" prop="consultant2">
        <el-input
          v-model="queryParams.consultant2"
          placeholder="请输入技师B"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="技师B佣金" prop="consultant2Amount">
        <el-input
          v-model="queryParams.consultant2Amount"
          placeholder="请输入技师B佣金"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="技师C" prop="consultant3">
        <el-input
          v-model="queryParams.consultant3"
          placeholder="请输入技师C"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="技师C佣金" prop="consultant3Amount">
        <el-input
          v-model="queryParams.consultant3Amount"
          placeholder="请输入技师C佣金"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="最终金额" prop="finalAmount">
        <el-input
          v-model="queryParams.finalAmount"
          placeholder="请输入最终金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
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
          v-hasPermi="['business:itemorderdetail:add']"
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
          v-hasPermi="['business:itemorderdetail:edit']"
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
          v-hasPermi="['business:itemorderdetail:remove']"
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
          v-hasPermi="['business:itemorderdetail:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="itemorderdetailList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="订单id" align="center" prop="orderId" />
      <el-table-column label="消费类型1消费项目2消费产品" align="center" prop="consumerType" />
      <el-table-column label="消费产品ID类型为1就是消费项目ID类型为2就是消费产品ID" align="center" prop="consumerId" />
      <el-table-column label="单价" align="center" prop="price" />
      <el-table-column label="数量" align="center" prop="num" />
      <el-table-column label="划卡次数" align="center" prop="cardNum" />
      <el-table-column label="技师A" align="center" prop="consultant1" />
      <el-table-column label="技师A佣金" align="center" prop="consultant1Amount" />
      <el-table-column label="技师B" align="center" prop="consultant2" />
      <el-table-column label="技师B佣金" align="center" prop="consultant2Amount" />
      <el-table-column label="技师C" align="center" prop="consultant3" />
      <el-table-column label="技师C佣金" align="center" prop="consultant3Amount" />
      <el-table-column label="最终金额" align="center" prop="finalAmount" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['business:itemorderdetail:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['business:itemorderdetail:remove']"
          >删除</el-button>
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

    <!-- 添加或修改项目订单详情对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="订单id" prop="orderId">
          <el-input v-model="form.orderId" placeholder="请输入订单id" />
        </el-form-item>
        <el-form-item label="消费类型1消费项目2消费产品" prop="consumerType">
          <el-select v-model="form.consumerType" placeholder="请选择消费类型1消费项目2消费产品">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="消费产品ID类型为1就是消费项目ID类型为2就是消费产品ID" prop="consumerId">
          <el-input v-model="form.consumerId" placeholder="请输入消费产品ID类型为1就是消费项目ID类型为2就是消费产品ID" />
        </el-form-item>
        <el-form-item label="单价" prop="price">
          <el-input v-model="form.price" placeholder="请输入单价" />
        </el-form-item>
        <el-form-item label="数量" prop="num">
          <el-input v-model="form.num" placeholder="请输入数量" />
        </el-form-item>
        <el-form-item label="划卡次数" prop="cardNum">
          <el-input v-model="form.cardNum" placeholder="请输入划卡次数" />
        </el-form-item>
        <el-form-item label="技师A" prop="consultant1">
          <el-input v-model="form.consultant1" placeholder="请输入技师A" />
        </el-form-item>
        <el-form-item label="技师A佣金" prop="consultant1Amount">
          <el-input v-model="form.consultant1Amount" placeholder="请输入技师A佣金" />
        </el-form-item>
        <el-form-item label="技师B" prop="consultant2">
          <el-input v-model="form.consultant2" placeholder="请输入技师B" />
        </el-form-item>
        <el-form-item label="技师B佣金" prop="consultant2Amount">
          <el-input v-model="form.consultant2Amount" placeholder="请输入技师B佣金" />
        </el-form-item>
        <el-form-item label="技师C" prop="consultant3">
          <el-input v-model="form.consultant3" placeholder="请输入技师C" />
        </el-form-item>
        <el-form-item label="技师C佣金" prop="consultant3Amount">
          <el-input v-model="form.consultant3Amount" placeholder="请输入技师C佣金" />
        </el-form-item>
        <el-form-item label="最终金额" prop="finalAmount">
          <el-input v-model="form.finalAmount" placeholder="请输入最终金额" />
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
import { listItemorderdetail, getItemorderdetail, delItemorderdetail, addItemorderdetail, updateItemorderdetail, exportItemorderdetail } from "@/api/business/itemorderdetail";

export default {
  name: "Itemorderdetail",
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
      // 项目订单详情表格数据
      itemorderdetailList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderId: null,
        consumerType: null,
        consumerId: null,
        price: null,
        num: null,
        cardNum: null,
        consultant1: null,
        consultant1Amount: null,
        consultant2: null,
        consultant2Amount: null,
        consultant3: null,
        consultant3Amount: null,
        finalAmount: null
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
  },
  methods: {
    /** 查询项目订单详情列表 */
    getList() {
      this.loading = true;
      listItemorderdetail(this.queryParams).then(response => {
        this.itemorderdetailList = response.rows;
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
        orderId: null,
        consumerType: null,
        consumerId: null,
        price: null,
        num: null,
        cardNum: null,
        consultant1: null,
        consultant1Amount: null,
        consultant2: null,
        consultant2Amount: null,
        consultant3: null,
        consultant3Amount: null,
        finalAmount: null
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
      this.title = "添加项目订单详情";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getItemorderdetail(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改项目订单详情";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateItemorderdetail(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addItemorderdetail(this.form).then(response => {
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
      this.$confirm('是否确认删除项目订单详情编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delItemorderdetail(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有项目订单详情数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportItemorderdetail(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
