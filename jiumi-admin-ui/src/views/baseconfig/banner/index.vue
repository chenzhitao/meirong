<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="banner类别" prop="bannerCategory">
        <el-select v-model="queryParams.bannerCategory" placeholder="请选择banner类别" clearable size="small">
          <el-option v-for="dict in bannerCategoryOptions" :key="dict.dictValue" :label="dict.dictLabel"
            :value="dict.dictValue" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd"
          v-hasPermi="['baseconfig:banner:add']">新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="success" plain icon="el-icon-edit" size="mini" :disabled="single" @click="handleUpdate"
          v-hasPermi="['baseconfig:banner:edit']">修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger" plain icon="el-icon-delete" size="mini" :disabled="multiple" @click="handleDelete"
          v-hasPermi="['baseconfig:banner:remove']">删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="warning" plain icon="el-icon-download" size="mini" :loading="exportLoading"
          @click="handleExport" v-hasPermi="['baseconfig:banner:export']">导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="bannerList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="轮播ID" align="center" prop="id" />
      <el-table-column label="标题" align="center" prop="bannerName" />
      <el-table-column label="banner类别" align="center" prop="bannerCategory" :formatter="bannerCategoryFormat" />
      <el-table-column label="图片路径" align="center" prop="imgUrl">
        <template slot-scope="scope">
          <el-image fit="cover" :src="scope.row.imgUrl" style="width: 100px"></el-image>
        </template>
      </el-table-column>
      <el-table-column label="排序" align="center" prop="sortNum" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)"
            v-hasPermi="['baseconfig:banner:edit']">修改</el-button>
          <el-button size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row)"
            v-hasPermi="['baseconfig:banner:remove']">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
      @pagination="getList" />

    <!-- 添加或修改轮播图对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="650px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="标题" prop="bannerName">
          <el-input v-model="form.bannerName" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="banner类别" prop="bannerCategory">
          <el-select v-model="form.bannerCategory" placeholder="请选择banner类别">
            <el-option v-for="dict in bannerCategoryOptions" :key="dict.dictValue" :label="dict.dictLabel"
              :value="dict.dictValue"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="图片路径">
          <imageUpload v-model="form.imgUrl" />
        </el-form-item>
        <el-form-item label="排序" prop="sortNum">
          <el-input v-model="form.sortNum" type="number" placeholder="请输入排序" />
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
    listBanner,
    getBanner,
    delBanner,
    addBanner,
    updateBanner,
    exportBanner
  } from "@/api/baseconfig/banner";

  export default {
    name: "Banner",
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
        // 轮播图表格数据
        bannerList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // banner类别字典
        bannerCategoryOptions: [],
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          bannerCategory: null,
        },
        // 表单参数
        form: {},
        // 表单校验
        rules: {
          bannerName: [{
            required: true,
            message: '请输入标题',
            trigger: 'blur'
          }],
          bannerCategory: [{
            required: true,
            message: '请选择banner类别',
            trigger: 'change'
          }],
          imgUrl:[{
            required: true,
            message: '请上传图片',
            trigger: 'blur'
          }]
        }
      };
    },
    created() {
      this.getList();
      this.getDicts("sys_banner_type").then(response => {
        this.bannerCategoryOptions = response.data;
      });
    },
    methods: {
      /** 查询轮播图列表 */
      getList() {
        this.loading = true;
        listBanner(this.queryParams).then(response => {
          this.bannerList = response.rows;
          this.total = response.total;
          this.loading = false;
        });
      },
      // banner类别字典翻译
      bannerCategoryFormat(row, column) {
        return this.selectDictLabel(this.bannerCategoryOptions, row.bannerCategory);
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
          bannerName: null,
          bannerCategory: null,
          imgUrl: null,
          sortNum: null,
          updateDate: null,
          createDate: null
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
        this.single = selection.length !== 1
        this.multiple = !selection.length
      },
      /** 新增按钮操作 */
      handleAdd() {
        this.reset();
        this.open = true;
        this.title = "添加轮播图";
      },
      /** 修改按钮操作 */
      handleUpdate(row) {
        this.reset();
        const id = row.id || this.ids
        getBanner(id).then(response => {
          this.form = response.data;
          this.open = true;
          this.title = "修改轮播图";
        });
      },
      /** 提交按钮 */
      submitForm() {
        this.$refs["form"].validate(valid => {
          if (valid) {
            if (this.form.id != null) {
              updateBanner(this.form).then(response => {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              });
            } else {
              addBanner(this.form).then(response => {
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
        this.$confirm('是否确认删除轮播图编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delBanner(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
      },
      /** 导出按钮操作 */
      handleExport() {
        const queryParams = this.queryParams;
        this.$confirm('是否确认导出所有轮播图数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportBanner(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
      }
    }
  };
</script>
