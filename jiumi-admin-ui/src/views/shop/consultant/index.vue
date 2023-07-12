<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="门店" prop="shopId">
        <el-select v-model="queryParams.shopId" placeholder="请选择门店" clearable filterable>
          <el-option
            v-for="dict in shopinfoList"
            :key="dict.id"
            :label="dict.shopName"
            :value="dict.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table v-loading="loading" :data="sultantList" @selection-change="handleSelectionChange">
      <el-table-column label="序号" align="center" type="index"/>
      <el-table-column label="用户名称" align="center" prop="nickName" />
      <el-table-column label="绑定号码" align="center" prop="phonenumber" />
      <el-table-column label="所属门店" align="center" prop="sourceShop" :formatter="shopFomatter"/>
      <el-table-column label="技师等级" align="center" prop="consultantRankName" />
      <el-table-column label="是否推广用户" align="center" prop="inviteFlag" >
        <template slot-scope='scope'>
          {{scope.row.inviteFlag == 'Y'?'是':'否'}}
        </template>
      </el-table-column>
      <el-table-column label="用户状态" align="center" prop="status">
        <template slot-scope='scope'>
          {{scope.row.status == 0?'正常':'冻结'}}
        </template>
      </el-table-column>
      <el-table-column label="注册时间" align="center" prop="createTime" width="180" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="'/user/userdetail?userId=' + scope.row.userId" class="link-type">详情
          </router-link>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >设置技师等级</el-button>
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

    <!-- 添加或修改项目顾问对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="顾问姓名" prop="userName">
          <strong>{{form.nickName}}</strong>
        </el-form-item>
        <el-form-item label="技师等级" prop="consultantRank">
          <el-select v-model="form.consultantRank" placeholder="请选择">
            <el-option
              v-for="item in allConstantRankList"
              :key="item.levelId+''"
              :label="item.levelName"
              :value="item.levelId">
            </el-option>
          </el-select>
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
  listItemconsultant,
  getItemconsultant,
  delItemconsultant,
  addItemconsultant,
  updateItemconsultant,
  exportItemconsultant,
  listAllconsultant
} from "@/api/shop/itemconsultant";
import {listShopinfo} from "@/api/shop/shopinfo";
import {getUser, updateUserConsultantRank} from "../../../api/baseconfig/user";
import {queryAllRankList} from "../../../api/shop/rank";

export default {
  name: "consultant",
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
      // 项目顾问表格数据
      sultantList: [],
      allConstantRankList: [],
      shopinfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        shopId: null,
        itemId: null,
      },
      // 表单参数
      form: {
        userId:null,
        userName:null,
        consultantRank:null

      },
      // 表单校验
      rules: {
        consultantRank: [{
          required: true,
          message: '请选择技师等级',
          trigger: 'blur'
        }]
      }
    };
  },
  created() {
    this.getAllConstantList();
    this.getShopList();
    this.getList();
  },
  methods: {
    /** 查询门店列表 */
    getShopList() {
      listShopinfo({}).then(response => {
        this.shopinfoList = response.rows;
      });
    },

    getAllConstantList() {
      queryAllRankList().then(response => {
        this.allConstantRankList = response.data;
      });
    },
    /** 查询项目顾问列表 */
    getList() {
      this.loading = true;
      listAllconsultant(this.queryParams).then(response => {
        this.sultantList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    shopFomatter(row){
      if(row.sourceShop){
        let str='';
        let shopArray=row.sourceShop.split(",");
        shopArray.forEach(s=>{
          this.shopinfoList.findIndex(shop=>{
            if(shop.id===s){
              if(str!=''){
                str+=','+shop.shopName;
              }else{
                str=shop.shopName;
              }
            }
          })
        })
        return str;
      }else{
        return '';
      }

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
        shopId: null,
        itemId: null,
        consultantId: null,
        createTime: null
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
      this.title = "添加项目顾问";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const userId = row.userId;
      getUser(userId).then(response => {
        if(response.code == 200) {
          this.userInfo = response.data;
          this.form= this.userInfo;
          this.open = true;
          this.title = "设置顾问等级";
        }
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          updateUserConsultantRank(this.form).then(response => {
            this.msgSuccess("设置成功");
            this.open = false;
            this.getList();
          });
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除项目顾问编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delItemconsultant(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有项目顾问数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportItemconsultant(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
