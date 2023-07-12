<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="次卡名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入次卡名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="关联项目" prop="shopItemId">
      <el-select v-model="queryParams.shopItemId" placeholder="请选择关联项目" @change="handleQuery" clearable filterable>
        <el-option
          v-for="dict in itemList"
          :key="dict.id"
          :label="dict.itemName"
          :value="dict.id"
        ></el-option>
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
          v-hasPermi="['goods:BaseNumberCard:add']"
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
          v-hasPermi="['goods:BaseNumberCard:edit']"
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
          v-hasPermi="['goods:BaseNumberCard:remove']"
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
          v-hasPermi="['goods:BaseNumberCard:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="BaseNumberCardList" @selection-change="handleSelectionChange">
      <el-table-column type="index" label="序号"align="center" />
      <el-table-column label="次卡ID" align="center" prop="id" />
      <el-table-column label="次卡名称" align="center" prop="name" />
      <el-table-column label="次卡有效期" align="center" prop="day" >
        <template slot-scope="scope">
        {{scope.row.day}}天
        </template>
      </el-table-column>
      <el-table-column label="关联项目" align="center" prop="shopItemId"  :formatter="shopItemIdFormat" />
      <el-table-column label="次卡次数" align="center" prop="num" >
        <template slot-scope="scope">
          {{scope.row.num}}次
        </template>
      </el-table-column>
      <el-table-column label="次卡价格" align="center" prop="price" />
      <el-table-column label="原价" align="center" prop="baseShopItem.itemPrice" />
      <el-table-column label="上架状态" align="center" prop="status"  :formatter="statusFormat" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            v-if="scope.row.status === '01'"
            @click="handleDown(scope.row)"
            v-hasPermi="['goods:BaseNumberCard:down']"
          ><svg-icon icon-class="xiajia"/>下架</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['goods:BaseNumberCard:edit']"
          >编辑</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['goods:BaseNumberCard:remove']"
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

    <!-- 添加或修改次卡对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="50%" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="130px">
        <el-form-item label="次卡名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入次卡名称" />
        </el-form-item>
        <el-form-item label="次卡有效期" prop="day">
          <el-input v-model="form.day" placeholder="请输入次卡有效期"   type="number"/>
        </el-form-item>
        <el-form-item label="关联项目" prop="shopItemId">
          <el-select v-model="form.shopItemId" placeholder="请选择关联项目" clearable filterable>
            <el-option
              v-for="dict in itemList"
              :key="dict.id"
              :label="dict.itemName"
              :value="parseInt(dict.id)"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="次卡次数" prop="num">
          <el-input v-model="form.num" placeholder="请输入次卡次数" type="number"/>
        </el-form-item>
        <el-form-item label="次卡价格" prop="price">
          <el-input v-model="form.price" placeholder="请输入次卡价格"   type="number"/>
        </el-form-item>
        <el-form-item label="上架状态" prop="status">
            <el-select v-model="form.status" placeholder="上架状态" clearable filterable>
              <el-option value="" label="请选择上架状态"></el-option>
              <el-option
                v-for="dict in statusOptions"
                :key="dict.dictValue"
                :label="dict.dictLabel"
                :value="dict.dictValue"
              ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="项目分类" prop="goodsTypeId">
          <el-select v-model="form.goodsTypeId" placeholder="请选择项目分类" clearable filterable>
            <el-option
              v-for="dict in typeList"
              :key="dict.id"
              :label="dict.typeName"
              :value="parseInt(dict.id)"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="次卡简介" prop="introduction">
          <el-input v-model="form.introduction" type="textarea" placeholder="请输入次卡简介" />
        </el-form-item>
        <el-form-item label="次卡头图" prop="headImg">
          <ImageUpload  v-model="form.headImg"  :limit="1" ></ImageUpload>
        </el-form-item>
        <el-form-item label="详情图片" prop="detailsImg">
          <ImageUpload  v-model="form.detailsImg" :limit="1" ></ImageUpload>
        </el-form-item>

        <el-form-item label="次卡详情" prop="details">
          <editor v-model="form.details" :min-height="192" placeholder="请输入次卡详情"/>
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
import { listBaseNumberCard, getBaseNumberCard, delBaseNumberCard, addBaseNumberCard, updateBaseNumberCard, exportBaseNumberCard ,handleCardDown} from "@/api/goods/card";
import { listItem } from '@/api/shop/item'
import { listType } from '@/api/goods/type'
export default {
  name: "BaseNumberCard",
  data() {
    return {
      itemList:[],
      typeList:[],
      statusOptions:[
        {
          dictValue:'01',
          dictLabel:'上架'
        },
        {
          dictValue:'02',
          dictLabel:'下架'
        }
      ],
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
      // 次卡表格数据
      BaseNumberCardList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: null,
        day: null,
        shopItemId: null,
        num: null,
        price: null,
        status: null,
        goodsTypeId: null,
        introduction: null,
        headImg: null,
        detailsImg: null,
        details: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        name: [
          { required: true, message: "次卡名称不能为空", trigger: "blur" }
        ],
        day: [
          { required: true, message: "有效期限不能为空", trigger: "blur" }
        ],
        shopItemId: [
          { required: true, message: "关联项目不能为空", trigger: "blur" }
        ],
        num: [
          { required: true, message: "次卡次数不能为空", trigger: "blur" }
        ],
        price: [
          { required: true, message: "次卡价格不能为空", trigger: "blur" }
        ],
        status: [
          { required: true, message: "上架状态不能为空", trigger: "change" }
        ],
        goodsTypeId: [
          { required: true, message: "商品分类不能为空", trigger: "blur" }
        ],
        headImg: [
          { required: true, message: "次卡头图不能为空", trigger: "blur" }
        ],
        detailsImg: [
          { required: true, message: "详情图片不能为空", trigger: "blur" }
        ],
        details: [
          { required: true, message: "次卡详情不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {

    this.getList();
    listItem({}).then(res=>{
      this.itemList = res.rows
    })
    listType({}).then(res=>{
      this.typeList = res.rows;
    })
  },
  methods: {
    statusFormat(row){
      return this.selectDictLabel(this.statusOptions, row.status);
    },
    shopItemIdFormat(row){
       let obj = this.itemList.find(item => item.id == row.shopItemId) ;
       return obj != undefined? obj.itemName:row.shopItemId;

    },
    /** 查询次卡列表 */
    getList() {
      this.loading = true;
      listBaseNumberCard(this.queryParams).then(response => {
        this.BaseNumberCardList = response.rows;
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
        name: null,
        day: null,
        shopItemId: null,
        num: null,
        price: null,
        status: "",
        goodsTypeId: null,
        introduction: null,
        headImg: null,
        detailsImg: null,
        details: null,
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
      this.title = "添加次卡";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getBaseNumberCard(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改次卡";
      });
    },
    handleDown(row) {
      const id = row.id
      handleCardDown(id).then(response => {
        this.msgSuccess("下架成功");
        this.getList();
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateBaseNumberCard(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addBaseNumberCard(this.form).then(response => {
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
      this.$confirm('是否确认删除次卡编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delBaseNumberCard(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有次卡数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportBaseNumberCard(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
