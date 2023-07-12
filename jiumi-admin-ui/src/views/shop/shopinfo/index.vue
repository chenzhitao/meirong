<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="店铺名称" prop="shopName">
        <el-input
          v-model="queryParams.shopName"
          placeholder="请输入店铺名称"
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
          v-hasPermi="['shop:shopinfo:add']"
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
          v-hasPermi="['shop:shopinfo:edit']"
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
          v-hasPermi="['shop:shopinfo:remove']"
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
          v-hasPermi="['shop:shopinfo:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="shopinfoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="门店名称" align="center" prop="shopName" />
      <el-table-column label="地址" align="center" prop="address" />
      <el-table-column label="联系人" align="center" prop="contact" />
      <el-table-column label="联系电话" align="center" prop="phone" />
      <el-table-column label="状态" align="center" prop="status" :formatter="statusFormat" />
      <el-table-column label="添加时间" align="center" prop="createTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['shop:shopinfo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['shop:shopinfo:remove']"
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

    <!-- 添加或修改门店对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="900px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="门店名称" prop="shopName">
          <el-input v-model="form.shopName" placeholder="请输入店铺名称" />
        </el-form-item>
        <el-form-item label="主管人员" prop="contact">
          <el-select v-model="form.contact" filterable clearable placeholder="请输入主管名称">
            <el-option v-for="item in directorList" :value="''+item.userId" :label="item.userName" :key="''+item.userId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入联系电话" />
        </el-form-item>
        <el-form-item label="详情地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入地址" />
        </el-form-item>
        <el-form-item label="上架项目">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleItemSelectionChange"
          >
            <el-table-column prop="itemName" label="项目名称" width="120">
            </el-table-column>
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column label="顾问配置">
              <template slot-scope="scope">
                <el-select v-model="scope.row.consultantList" multiple placeholder="请选择">
                  <el-option

                    v-for="item in consultantList"
                    :key="item.userId+''"
                    :label="item.nickName"
                    :value="item.userId+''">
                  </el-option>
                </el-select>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in statusOptions"
              :key="dict.dictValue"
              :label="dict.dictValue"
            >{{dict.dictLabel}}</el-radio>
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
import { listShopinfo, getShopinfo, delShopinfo, addShopinfo, updateShopinfo, exportShopinfo } from "@/api/shop/shopinfo";
import {getUsersByRoleKey} from "@/api/system/user"
import {
  listItem
} from "@/api/shop/item";
export default {
  name: "Shopinfo",
  data() {
    return {
      itemIds: [],
      tableData: [],
      directorList: [],
      consultantList: [],
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
      // 门店表格数据
      shopinfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 状态字典
      statusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        shopName: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        shopName: [{
          required: true,
          message: '请输入店铺名称',
          trigger: 'blur'
        }],
        contact: [{
          required: true,
          message: '请选择主管人员',
          trigger: 'change'
        }],
        phone: [{
          required: true,
          message: '请填写联系方式',
          trigger: 'blur'
        }],
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("sys_yes_no").then(response => {
      this.statusOptions = response.data;
    });
    this.getDirectorList();
    this.getConsultantList();
    this.getTableDataList();

  },
  methods: {
    getTableDataList(){
      listItem().then(res => {
        this.tableData = res.rows
      })
    },

    getDirectorList(){
      getUsersByRoleKey("director").then(res=>{
        this.directorList = res.data;
      })
    },
    getConsultantList(){
      getUsersByRoleKey("consultant").then(res=>{
        this.consultantList = res.data;
      })
    },
    /** 查询门店列表 */
    getList() {
      this.loading = true;
      listShopinfo(this.queryParams).then(response => {
        this.shopinfoList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 状态字典翻译
    statusFormat(row, column) {
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
        shopName: null,
        shopDetail: null,
        address: null,
        contact: null,
        phone: null,
        status: "Y",
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null,
        baseShopItemConsultantList: []
      };
      this.itemIds = []
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
    //项目多选中的数据
    handleItemSelectionChange(selectionItem){
       this.itemIds = selectionItem.map(item => item.id)
     },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加门店";
      this.getTableDataList();
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      var that = this;
      that.reset();
      const id = row.id || that.ids
      getShopinfo(id).then(response => {
        that.form = response.data;
        that.open = true;
        that.title = "修改门店";
        //回显数据开始
        let existsId = [];
        for(let item of  that.form.baseShopItemConsultantList ) {
          existsId.push(''+item.itemId)
        }
        if(existsId.length>0){
          that.$nextTick(() => {
            if (that.$refs.multipleTable) {
              that.$refs.multipleTable.clearSelection();
            }
            that.tableData.forEach(row => {
                if(existsId.includes(row.id)){
                  that.$refs.multipleTable.toggleRowSelection(row, true) // 回显
                  that.form.baseShopItemConsultantList.forEach(
                    it => {
                      if( it.itemId==row.id){
                        row.consultantList = it.consultantId.split(",")
                        console.log(it.itemId ,'it.itemId ',row)
                      }
                    }
                  )
                }
            });
          });
        }
        //回显数据结束
       });
    },
    /** 提交按钮 */
    submitForm() {
      let baseShopItemConsultantList = []
      //获取顾问配置数据
      this.tableData.forEach(item =>{
          if(this.itemIds.includes(item.id)) {
            let obj = {
              itemId:item.id,
              consultantId:item.consultantList.length>0?item.consultantList.join(","):''
            }
            baseShopItemConsultantList.push(obj)
          }
      })

      this.form.baseShopItemConsultantList = baseShopItemConsultantList;
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateShopinfo(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addShopinfo(this.form).then(response => {
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
      this.$confirm('是否确认删除门店编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delShopinfo(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有门店数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportShopinfo(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
