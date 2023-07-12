<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="门店" prop="shopId">

        <el-select v-model="queryParams.shopId" placeholder="请选择" clearable filterable>
          <el-option
            v-for="item in shopinfoList"
            :key="item.id"
            :label=" item.shopName"
            :value="item.id"
          ></el-option>
        </el-select>

      </el-form-item>
      <el-form-item label="项目" prop="itemId">
        <el-select v-model="queryParams.itemId" placeholder="请选择" clearable filterable>
          <el-option
            v-for="item in shopItemList"
            :key="item.id"
            :label=" item.itemName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申请用户" prop="applyUserId">
        <el-input
          v-model="queryParams.applyUserName"
          placeholder="请输入申请用户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="申请时间">
        <el-date-picker
          v-model="daterangeApplyTime"
          size="small"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="预约状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择预约状态" clearable size="small">
          <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>


    <el-table v-loading="loading" :data="applyList" @selection-change="handleSelectionChange">
      <el-table-column label="序号" align="center" type="index"/>
      <el-table-column label="门店" align="center" prop="shopName"  />
      <el-table-column label="项目" align="center" prop="itemName"  />
      <el-table-column label="申请用户" align="center" prop="applyUserName"   />
      <el-table-column label="申请时间" align="center" prop="applyTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.applyTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="预约顾问" align="center" prop="applyConsultantName"   />
      <el-table-column label="预约状态" align="center" prop="status" :formatter="statusFormat" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            v-show="scope.row.status==='01'"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['business:apply:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            v-show="scope.row.status==='01' || scope.row.status==='04'"
            icon="el-icon-edit"
            @click="handleConfirm(scope.row)"
          >确认接待</el-button>
					<a :href="'/order/itemorder?applyId=' + scope.row.id" class="link-type">   <el-button
              size="mini"
              type="text"
              icon="el-icon-search"
            >订单详情</el-button></a>
<!--          <router-link :to="'/order/itemorder?applyId=' + scope.row.id" class="link-type">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-search"
            >订单详情</el-button>
          </router-link> -->
<!--          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['business:apply:remove']"
          >删除</el-button>-->
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

    <!-- 添加或修改门店项目预约对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="30%" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="门店ID" prop="shopId">
          <el-select v-model="form.shopId" placeholder="请选择门店" clearable size="small" disabled>
            <el-option
              v-for="dict in shopinfoList"
              :key="parseInt(dict.id)"
              :label="dict.shopName"
              :value="parseInt(dict.id)"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="项目" prop="itemId">
          <el-select v-model="form.itemId" placeholder="请选择项目" clearable size="small" disabled>
            <el-option
              v-for="dict in shopItemList"
              :key="parseInt(dict.id)"
              :label="dict.itemName"
              :value="parseInt(dict.id)"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="申请用户" prop="applyUserId">
          <el-select v-model="form.applyUserId" placeholder="申请用户" clearable size="small" disabled>
            <el-option
              v-for="dict in userList"
              :key="parseInt(dict.userId)"
              :label="dict.userName"
              :value="parseInt(dict.userId)"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="申请时间" prop="applyTime" >
          <el-date-picker clearable size="small" disabled
            v-model="form.applyTime"
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择申请时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="预约顾问" prop="applyConsultant">
          <el-select v-model="form.applyConsultant" placeholder="预约顾问" clearable size="small">
            <el-option
              v-for="dict in consultantUserList"
              :key="parseInt(dict.userId)"
              :label="dict.userName"
              :value="parseInt(dict.userId)"
            />
          </el-select>
        </el-form-item>
<!--        <el-form-item label="预约状态">-->
<!--          <el-radio-group v-model="form.status" disabled>-->
<!--            <el-radio-->
<!--              v-for="dict in statusOptions"-->
<!--              :key="dict.dictValue"-->
<!--              :label="dict.dictValue"-->
<!--            >{{dict.dictLabel}}</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listApply, getApply, delApply, addApply, updateApply, exportApply,resiveApplyUser } from "@/api/business/apply";
import { listShopinfo} from "@/api/shop/shopinfo";
import {
  listItem
} from "@/api/shop/item";

import { listUser,getConsultantUserListByShopId} from "@/api/system/user";
export default {
  name: "Apply",
  data() {
    return {
      consultantUserList:[],
      shopItemList:[],
      userList:[],
      shopinfoList:[],
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
      // 门店项目预约表格数据
      applyList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 申请时间时间范围
      daterangeApplyTime: [],
      // 预约状态字典
      statusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        shopId: null,
        itemId: null,
        applyUserId: null,
        applyTime: null,
        status: null,
        applyUserName:null
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
    this.getDicts("sys_item_apply_status").then(response => {
      this.statusOptions = response.data;
    });
    this.getShopList();
    this.getUserList()
    this.getShopItems();

  },
  methods: {
    getShopItems(){
      listItem({}).then(res=>{
        this.shopItemList = res.rows;
      })
    },
    getUserList(){
      listUser({userType:"02"}).then(res=>{
        this.userList = res.rows;
      })
    },
    /** 查询门店列表 */
    getShopList() {
       listShopinfo({}).then(response => {
        this.shopinfoList = response.rows;
      });
    },
    /** 查询门店项目预约列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeApplyTime && '' != this.daterangeApplyTime) {
        this.queryParams.params["beginApplyTime"] = this.daterangeApplyTime[0];
        this.queryParams.params["endApplyTime"] = this.daterangeApplyTime[1];
      }
      listApply(this.queryParams).then(response => {
        this.applyList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 预约状态字典翻译
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
        shopId: null,
        itemId: null,
        applyUserId: null,
        applyTime: null,
        applyConsultant: null,
        status: "0",
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
      this.daterangeApplyTime = [];
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
      this.title = "添加门店项目预约";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getApply(id).then(response => {
        this.form = response.data;
        getConsultantUserListByShopId(this.form.shopId,this.form.itemId).then(res=>{
          this.consultantUserList = res.data;
          this.open = true;
        })

        this.title = "修改门店项目预约";
      });

    },

    handleConfirm(row){
      let userId=row.applyUserId;
      let userInfo=this.userList.find(u=>u.userId===userId);
      let that=this;
      this.$confirm('是否确认接待客户【' + userInfo.userName + '】?', "提示信息", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function() {
        return resiveApplyUser(row.id);
      }).then(() => {
        this.msgSuccess("操作成功");
        that.getList();
      }).catch(() => {});
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateApply(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addApply(this.form).then(response => {
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
      this.$confirm('是否确认删除门店项目预约编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delApply(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有门店项目预约数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportApply(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    }
  }
};
</script>
