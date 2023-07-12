<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="用户账号" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="请输入用户账号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="phonenumber">
        <el-input
          v-model="queryParams.phonenumber"
          placeholder="请输入手机号码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="帐号状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择帐号状态" clearable size="small">
          <el-option label="正常" value="0" />
          <el-option label="停用" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          v-model="daterangeCreateTime"
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
        <el-button type="primary"  icon="el-icon-plus" size="mini" @click="handleAdd">新增</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="userList" border type='index'>
      <el-table-column label="序号" align="center" type="index"/>
      <el-table-column label="用户ID" align="center" prop="userId" />
      <el-table-column label="用户名称" align="center" prop="userName" />
      <el-table-column label="用户昵称" align="center" prop="nickName" />
      <el-table-column label="绑定号码" align="center" prop="phonenumber" />
      <el-table-column label="用户状态" align="center" prop="status">
        <template slot-scope='scope'>
          {{scope.row.status == 0?'正常':'冻结'}}
        </template>
      </el-table-column>
      <el-table-column label="绑定号码" align="center" prop="userType"  >
        <template slot-scope='scope'>
          {{scope.row.userType === '02'?'线上':'线下'}}
        </template>
      </el-table-column>

      <!--      <el-table-column label="用户ID" align="center" prop="userId" />-->
      <el-table-column label="注册时间" align="center" prop="createTime" width="180" />
      <el-table-column label="充值金额" align="center" prop="rechargeAmount" />
      <el-table-column label="可提现金额" align="center" prop="incomeAmount" />
      <el-table-column label="账户余额" align="center" prop="accountAmount" />
      <el-table-column label="产品账户余额" align="center" prop="productBalance" />
<!--      <el-table-column label="冻结金额" align="center" prop="freezeAmount" />-->
      <el-table-column label="VIP等级" align="center" prop="vipLevel" />
      <el-table-column label="是否推广用户" align="center" prop="inviteFlag" >
        <template slot-scope='scope'>
          {{scope.row.inviteFlag == 'Y'?'是':'否'}}
        </template>
      </el-table-column>
      <el-table-column label="产品账户" align="center" prop="productAccount" >
        <template slot-scope='scope'>
          {{scope.row.productAccount === '1'?'开通':'未开通'}}
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="'/user/userdetail?userId=' + scope.row.userId" class="link-type">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-search"
            >详情</el-button>
          </router-link>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-s-promotion"
            @click="handleRecharge(scope.row)"
          >充值</el-button>
          <el-button
            size="mini"
            type="text"
            @click="handleOpenProductAccount(scope.row)"
            v-if="scope.row.productAccount==='0'"
          >开通</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-setting"
            @click="handleSetInvite(scope.row)"
          >{{scope.row.inviteFlag == 'Y'?'取消推广用户':'设置为推广用户'}}</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-medal-1"
            @click="handleSetVipLevel(scope.row)"
          >设置VIP等级</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-setting"
            @click="handleSetInfo(scope.row)"
          >设置昵称</el-button>
          <router-link :to="'/finance/recharge?userId=' + scope.row.userId" class="link-type">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-s-unfold"
            >充值记录</el-button>
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

    <!-- 添加或修改用户信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="form.userName" placeholder="请输入用户名称" />
        </el-form-item>
        <el-form-item label="用户备注" prop="nickName">
          <el-input v-model="form.nickName" placeholder="请输入用户备注" />
        </el-form-item>
        <el-form-item label="绑定号码" prop="phonenumber">
          <el-input v-model="form.phonenumber" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="帐号状态" prop="status">
          <el-select v-model="form.status" placeholder="帐号状态" clearable filterable>
            <el-option value="0" label="正常"></el-option>
            <el-option value="1" label="冻结"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="产品账户" prop="productAccount">
          <el-select v-model="form.productAccount" placeholder="产品账户" clearable filterable>
            <el-option value="1" label="开通"></el-option>
            <el-option value="0" label="不开通"></el-option>
          </el-select>
        </el-form-item><el-form-item label="所属门店" prop="sourceShop">
          <el-select v-model="form.sourceShop" placeholder="所属门店" :disabled="!isAdmin" clearable filterable>
            <el-option
            v-for="item in shopinfoList"
            :key="item.id"
            :label=" item.shopName"
            :value="item.id"
          ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="引流技师" prop="referrerUserId">

          <el-select v-model="form.referrerUserId" placeholder="请选择引流技师" clearable filterable>
            <el-option
              v-for="item in consultantUserList"
              :key="item.userId"
              :label=" item.userName"
              :value="item.userId"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog :title="title" :visible.sync="openRecharge" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form2" :model="form2" :rules="rules2" label-width="80px">
        <el-form-item label="充值账户" prop="rechargeType">
<!--          <el-input v-model="form2.rechargeType" placeholder="请输入充值账户" />-->
          <el-select v-model="form2.rechargeType" placeholder="请选择充值账户">
            <el-option label="基本账户" value="0" />
            <el-option label="产品账户" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="充值类型" prop="paymentType">
          <el-select v-model="form2.paymentType" placeholder="请选择充值账户">
            <el-option :label="type.dictLabel" :value="type.dictValue" :key="type.id"  v-for="type in paymentTypeOptions"/>
          </el-select>
        </el-form-item>
        <el-form-item label="充值金额" prop="rechargeAmount">
          <el-input-number  v-model="form2.rechargeAmount"  :step="1" placeholder="请输入充值金额" controls-position="right"/>
        </el-form-item>
        <el-form-item label="备注信息" prop="remark">
          <el-input v-model="form2.remark" type="textarea" placeholder="请输入备注信息" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm2">充 值</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="设置VIP等级" :visible.sync="openSetVipLevel" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form3" :model="form3" :rules="rules3" label-width="80px">
        <el-form-item label="用户姓名" prop="userName">
          <strong>{{form3.userName}}</strong>
        </el-form-item>
        <el-form-item label="VIP等级" prop="vipLevel">
          <el-select v-model="form3.vipLevel" placeholder="请选择VIP等级">
            <el-option key="0" label="无"  value="0"></el-option>
            <el-option
              v-for="item in vipInfoList"
              :key="item.vipLevel+''"
              :label="item.vipName"
              :value="item.vipLevel">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm3">保  存</el-button>
        <el-button @click="cancel3">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="设置用户昵称" :visible.sync="setUserInfoFlag" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form4" :model="form4" :rules="rules4" label-width="80px">
        <el-form-item label="用户姓名" >
          <strong>{{form4.userName}}</strong>
        </el-form-item>
        <el-form-item label="用户昵称" prop="nickName">
          <el-input v-model="form4.nickName"  placeholder="请输入用户昵称" />
        </el-form-item>
        <el-form-item label="用户备注" prop="remark">
          <el-input v-model="form4.remark" type="textarea" placeholder="请输入备注信息" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm4">保  存</el-button>
        <el-button @click="cancel4">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  listUser,
  setUserRecharge,
  addUser,
  updateUser,
  getUserProfile,
  getConsultantUserListByShopId,
  getConsultantUserList,
  getConsultantUserListByShopId2,
  openUserProductAccount
} from "@/api/system/user";
import {setInviteUser} from "@/api/baseconfig/user";
import { listShopinfo} from "@/api/shop/shopinfo";
import {getAllViplist} from "../../../api/business/vip";
import {getUser} from "../../../api/baseconfig/user";
import {setUserVipLevel} from "../../../api/system/user";
export default {
  name: "User",
  data() {
    return {
      openRecharge:false,
      openSetVipLevel:false,
      setUserInfoFlag:false,
      isAdmin:false,
      paymentTypeOptions:[],
      shopinfoList:[],
      //顾问列表
      consultantUserList:[],
      vipInfoList:[],
      loginUser:{},
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
      // 用户信息表格数据
      userList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 创建时间时间范围
      daterangeCreateTime: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userName: null,
        phonenumber: null,
        status: null,
        createTime: null,
      },
      form2:{},
      form3:{},
      form4:{},
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        userName: [
          { required: true, message: "用户名称不能为空", trigger: "blur" }
        ],
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" }
        ],
        phonenumber: [
          { required: true, message: "绑定号码不能为空", trigger: "blur" }
        ],
        status: [
          { required: true, message: "账号状态不能为空", trigger: "blur" }
        ],
        productAccount: [
          { required: true, message: "产品账户不能为空", trigger: "blur" }
        ],
        sourceShop: [
          { required: true, message: "所属门店不能为空", trigger: "blur" }
        ],
      },
      rules2: {
        rechargeType: [
          { required: true, message: "请选择充值账户", trigger: "blur" }
        ],
        paymentType: [
          { required: true, message: "请选择充值类型", trigger: "blur" }
        ],
        rechargeAmount: [
          { required: true, message: "请输入充值金额", trigger: "blur" }
        ],
        remark: [
          { required: true, message: "请输入备注信息", trigger: "blur" }
        ]
      },
      rules4:{
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();
    getUserProfile().then(res=>{
      this.loginUser = res.data;
    }) ;
    getAllViplist().then(res=>{
      this.vipInfoList = res.data;
    })
    listShopinfo({}).then(res=>{
      this.shopinfoList = res.rows;
    })
    this.getDicts("sys_recharge_payment_type").then(response => {
      this.paymentTypeOptions = response.data;
    });
  },
  methods: {
    /** 查询用户信息列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeCreateTime && '' != this.daterangeCreateTime) {
        this.queryParams.params["beginCreateTime"] = this.daterangeCreateTime[0];
        this.queryParams.params["endCreateTime"] = this.daterangeCreateTime[1];
      }
      this.queryParams.userTypes='01,02';
      listUser(this.queryParams).then(response => {
        this.userList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.openRecharge = false;
      this.reset();
    },

    cancel3(){
      this.openSetVipLevel=false;
      this.resetForm("form3");
      this.resetForm("form4");
    },
    cancel4(){
      this.setUserInfoFlag=false;
      this.resetForm("form4");
    },
    // 表单重置
    reset() {
      this.form = {
        userId: null,
        deptId: null,
        weixinOpenId: null,
        userName: null,
        nickName: null,
        userType: null,
        userTypes:null,
        email: null,
        phonenumber: null,
        sex: null,
        avatar: null,
        password: null,
        vipLevel: null,
        status: "0",
        delFlag: null,
        loginIp: null,
        loginDate: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null,
        referrerUserId: null,
        productAccount:null,
        productBalance:null,
        rechargeType: null,
      };
      this.resetForm("form");
      this.form2 = {
        remark:null,
        userId :null,
        paymentType:null,
        productAccount: null,
        rechargeAmount: null
      };

      this.resetForm("form2");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.daterangeCreateTime = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.userId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加客户信息";

      if(this.loginUser.roles != null && this.loginUser.roles.length>0){
        let obj = this.loginUser.roles.find(item => item.roleKey === 'admin');
        if(obj !== undefined){
          this.isAdmin = true;
        }else{
          this.form.sourceShop = this.loginUser.sourceShop;
        }
      }
      if(this.isAdmin){
        //管理员查询全部顾问
        getConsultantUserList().then(res=>{
          this.consultantUserList =res.data;
        })
      }else{
        getConsultantUserListByShopId2(this.loginUser.sourceShop,null).then(res=>{
          this.consultantUserList =res.data;
        })
      }
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const userId = row.userId || this.ids
      getUser(userId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改用户信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.userId != null) {
            updateUser(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            //线下用户
            this.form.userType='01'
            this.form.password='123456'
            addUser(this.form).then(response => {
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
      const userName = row.userName;
      this.$confirm('您确认冻结名为"' + userName + '"的用户吗?', "警告", {
          confirmButtonText: "冻结",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delUser(userName);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },

    handleRecharge(row){
      this.openRecharge = true;
      this.title = "账户充值";
      this.form.remark = null;
      this.form2 = {
        remark:null,
        userId : row.userId,
        rechargeType:'0',
        productAccount: null,
        rechargeAmount: null
      }
    },
    submitForm2(){
      this.$refs["form2"].validate(valid => {
        if (valid) {
          setUserRecharge(this.form2).then(response => {
            this.openRecharge = false;
            this.msgSuccess("操作成功");
            this.getList();
          });
        }
      });
    },
    submitForm3(){
      this.$refs["form3"].validate(valid => {
        if (valid) {
          setUserVipLevel(this.form3).then(response => {
            this.openSetVipLevel = false;
            this.msgSuccess("操作成功");
            this.getList();
          });
        }
      });
    },
    submitForm4(){
      this.$refs["form4"].validate(valid => {
        if (valid) {
          updateUser(this.form4).then(response => {
            this.setUserInfoFlag = false;
            this.msgSuccess("操作成功");
            this.getList();
          });
        }
      });
    },
    handleOpenProductAccount(row){
      openUserProductAccount(row.userId).then(res=>{
        this.msgSuccess("操作成功");
        this.getList();
      })
    },
    handleSetInvite(row) {
      const userName = row.userName;
      this.$confirm('您确认设置名为"' + userName + '"的用户为推广用户吗?', "警告", {
          confirmButtonText: "设置",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return setInviteUser(row.userId);
        }).then(() => {
          this.getList();
          this.msgSuccess("设置成功");
        }).catch(() => {});
    },
    handleSetVipLevel(row) {
      this.openSetVipLevel=true;
      getUser(row.userId).then(response => {
        this.form3 = response.data;
      });
    },
    handleSetInfo(row) {
      this.setUserInfoFlag=true;
      getUser(row.userId).then(response => {
        this.form4 = response.data;
      });
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有用户信息数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.exportLoading = true;
        return exportUser(queryParams);
      }).then(response => {
        this.download(response.msg);
        this.exportLoading = false;
      }).catch(() => {});
    }
  }
};
</script>
