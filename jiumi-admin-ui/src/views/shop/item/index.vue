<template>
  <div class="app-container">
    <el-form
      :model="queryParams"
      ref="queryForm"
      :inline="true"
      v-show="showSearch"
      label-width="98px"
    >
      <el-form-item label="项目名称" prop="itemName">
        <el-input
          v-model="queryParams.itemName"
          placeholder="请输入项目名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="项目品类" prop="type">
        <el-select
          v-model="queryParams.type"
          placeholder="请选择项目品类"
          clearable
          size="small"
        >
          <el-option
            v-for="dict in typeOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否线上销售" prop="onlineFlag">
        <el-select v-model="queryParams.onlineFlag" placeholder="请选择销售方式" clearable size="small">
          <el-option
            v-for="dict in onlineFlagOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="项目状态" prop="status">
        <el-select
          v-model="queryParams.status"
          placeholder="请选择项目状态"
          clearable
          size="small"
        >
          <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
          >重置</el-button
        >
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
          v-hasPermi="['shop:item:add']"
          >新增</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['shop:item:edit']"
          >修改</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['shop:item:remove']"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['shop:item:export']"
          >导出</el-button
        >
      </el-col>
      <right-toolbar
        :showSearch.sync="showSearch"
        @queryTable="getList"
      ></right-toolbar>
    </el-row>

    <el-table
      v-loading="loading"
      :data="itemList"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="项目名称" align="center" prop="itemName" />
      <el-table-column
        label="项目品类"
        align="center"
        prop="type"
        :formatter="typeFormat"
      />
      <el-table-column label="项目简介"  align="center" prop="itemRemark" show-overflow-tooltip/>
      <el-table-column label="项目价格" align="center" prop="itemPrice" >
        <template slot-scope="scope">
          <span  >￥{{scope.row.itemPrice}}</span>
        </template>
      </el-table-column>
      <el-table-column label="返佣比例" align="center"  prop="sharePercent" />
      <el-table-column
        label="是否推荐"
        align="center"
        prop="referrerFlag"
        :formatter="referrerFlagFormat"
      />
      <el-table-column label="销售方式" align="center"  prop="onlineFlag" >
        <template slot-scope="scope">
          {{scope.row.onlineFlag==='Y'?'线上':'线下'}}
        </template>
      </el-table-column>
      <el-table-column label="项目排序" align="center" prop="sortNo" />
      <el-table-column
        label="项目状态"
        align="center"
        prop="status"
        :formatter="statusFormat"
      />
      <el-table-column
        label="操作"
        align="center"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="scope">

              <el-button
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleOff(scope.row)"
              v-hasPermi="['shop:item:off']"
              >{{scope.row.status==='01'?'下架':'上架'}}</el-button>

          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['shop:item:edit']"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['shop:item:remove']"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改项目管理对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="900px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="项目名称" prop="itemName">
          <el-input v-model="form.itemName" placeholder="请输入项目名称" />
        </el-form-item>
        <el-form-item label="项目品类" prop="type">
          <el-select v-model="form.type" placeholder="请选择项目品类">
            <el-option
              v-for="dict in typeOptions"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="返佣类型" prop="shareRateType" >
          <el-radio-group v-model="form.shareRateType">
            <el-radio  :label="1">比例</el-radio>
            <el-radio  :label="2">金额</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="等级1返佣" prop="sharePercent1">
          <el-input-number :precision="2" :step="0.01" :min="0" :max="form.shareRateType===1?1:99999"  v-model="form.sharePercent1"  controls-position="right"/>
          {{form.shareRateType===1?'请输入返佣比例(值在0-1之间,例如:0.05)':'请输入返佣金额,值大于0'}}
        </el-form-item>
        <el-form-item label="等级2返佣" prop="sharePercent2">
          <el-input-number :precision="2" :step="0.01" :min="0" :max="form.shareRateType===1?1:99999"  v-model="form.sharePercent2"  controls-position="right" />
          {{form.shareRateType===1?'请输入返佣比例(值在0-1之间,例如:0.05)':'请输入返佣金额,值大于0'}}
        </el-form-item>
        <el-form-item label="等级3返佣" prop="sharePercent3">
          <el-input-number :precision="2" :step="0.01" :min="0" :max="form.shareRateType===1?1:99999"  v-model="form.sharePercent3"  controls-position="right" />
          {{form.shareRateType===1?'请输入返佣比例(值在0-1之间,例如:0.05)':'请输入返佣金额,值大于0'}}
        </el-form-item>
        <el-form-item label="等级4返佣" prop="sharePercent4">
          <el-input-number :precision="2" :step="0.01" :min="0" :max="form.shareRateType===1?1:99999"  v-model="form.sharePercent4"  controls-position="right" />
          {{form.shareRateType===1?'请输入返佣比例(值在0-1之间,例如:0.05)':'请输入返佣金额,值大于0'}}
        </el-form-item>
        <el-form-item label="项目简介" prop="itemRemark">
          <el-input v-model="form.itemRemark" type="textarea" placeholder="请输入项目简介" />
        </el-form-item>
        <el-form-item label="项目价格" prop="itemPrice">
          <el-input v-model="form.itemPrice" placeholder="请输入项目价格" type="number" />
        </el-form-item>
        <el-form-item label="是否线上销售">
          <el-radio-group v-model="form.onlineFlag">
            <el-radio
              v-for="dict in onlineFlagOptions"
              :key="dict.dictValue"
              :label="dict.dictValue"
            >{{dict.dictLabel}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目排序" prop="sortNo">
          <el-input v-model="form.sortNo" placeholder="请输入项目排序" type="number" />
        </el-form-item>
<!--        <el-form-item label="项目VIP价格" prop="itemVipPrice">-->
<!--          <el-input-->
<!--            v-model="form.itemVipPrice"-->
<!--            placeholder="请输入项目VIP价格"-->
<!--          />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="银行卡权益" prop="bankDiscount">-->
<!--          <el-input-->
<!--            v-model="form.bankDiscount"-->
<!--            placeholder="请输入银行卡权益"-->
<!--          />-->
<!--        </el-form-item>-->
        <el-form-item label="项目头图" >
          <imageUpload v-model="form.headerImg" :limit="1" />
        </el-form-item>
        <el-form-item label="详情图片">
          <imageUpload v-model="form.detailImg" />
        </el-form-item>
        <el-form-item label="项目描述">
          <editor v-model="form.itemDetail" :min-height="192" />
        </el-form-item>

        <el-form-item label="是否推荐">
          <el-radio-group v-model="form.referrerFlag">
            <el-radio
              v-for="dict in referrerFlagOptions"
              :key="dict.dictValue"
              :label="dict.dictValue"
              >{{ dict.dictLabel }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目状态">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictValue"
              >{{ dict.dictLabel }}</el-radio
            >
          </el-radio-group>
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
import {
  listItem,
  getItem,
  delItem,
  addItem,
  updateItem,
  exportItem,
  handleOff
} from "@/api/shop/item";

export default {
  name: "Item",
  data() {
    return {

      // 首页是否推荐字典
      onlineFlagOptions: [],
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
      // 项目管理表格数据
      itemList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 项目品类字典
      typeOptions: [],
      // 是否推荐字典
      referrerFlagOptions: [],
      // 项目状态字典
      statusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        itemName: null,
        type: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        itemName: [
          { required: true, message: "项目名称不能为空", trigger: "blur" }
        ],
        type: [
          { required: true, message: "项目类型不能为空", trigger: "blur" }
        ],
        sharePercent1: [
          { required: true, message: "等级1返佣比例不能为空", trigger: "blur" }
        ],
        sharePercent2: [
          { required: true, message: "等级2返佣比例不能为空", trigger: "blur" }
        ],
        itemPrice: [
          { required: true, message: "项目价格", trigger: "blur" }
        ]
      },

       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
    };
  },
  created() {
    this.getList();
    this.getDicts("sys_shop_item_type").then((response) => {
      this.typeOptions = response.data;
    });
    this.getDicts("sys_yes_no").then((response) => {
      this.referrerFlagOptions = response.data;
      this.onlineFlagOptions = response.data;
    });
    this.getDicts("sys_shop_item_status").then((response) => {
      this.statusOptions = response.data;
    });
  },
  methods: {
    /** 查询项目管理列表 */
    getList() {
      this.loading = true;
      listItem(this.queryParams).then((response) => {
        this.itemList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 项目品类字典翻译
    typeFormat(row, column) {
      return this.selectDictLabel(this.typeOptions, row.type);
    },
    // 是否推荐字典翻译
    referrerFlagFormat(row, column) {
      return this.selectDictLabel(this.referrerFlagOptions, row.referrerFlag);
    },
    // 项目状态字典翻译
    statusFormat(row, column) {
      console.log(this.statusOptions,'this.statusOptions')
      return this.selectDictLabel(this.statusOptions, row.status);
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
        itemName: null,
        type: null,
        itemRemark: null,
        itemPrice: null,
        itemVipPrice: null,
        bankDiscount: null,
        headerImg: null,
        detailImg: null,
        itemDetail: null,
        referrerFlag: "Y",
        sortNo: 0,
        status: "01",
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null,
        onlineFlag: "Y",
        shareRateType:1,
        sharePercent1:0,
        sharePercent2:0,
        sharePercent3:0,
        sharePercent4:0
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
      this.ids = selection.map((item) => item.id);
      this.single = selection.length !== 1;
      this.multiple = !selection.length;
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加项目管理";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids;
      getItem(id).then((response) => {
        this.form = response.data;
        this.open = true;
        this.title = "修改项目管理";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.form.id != null) {
            updateItem(this.form).then((response) => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addItem(this.form).then((response) => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 提交按钮 */
    handleOff(row) {
      this.$confirm('确认下架吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        handleOff(row.id).then((response) => {
          this.msgSuccess("修改成功");
          this.open = false;
          this.getList();
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm(
        '是否确认删除项目管理编号为"' + ids + '"的数据项?',
        "警告",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(function () {
          return delItem(ids);
        })
        .then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
        .catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm("是否确认导出所有项目管理数据项?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.exportLoading = true;
          return exportItem(queryParams);
        })
        .then((response) => {
          this.download(response.msg);
          this.exportLoading = false;
        })
        .catch(() => {});
    }
  },
};
</script>
