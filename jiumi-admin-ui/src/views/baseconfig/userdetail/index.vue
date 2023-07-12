<template>
  <div class="app-container">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="基本信息" name="first">
        <div style="padding-bottom: 10px;">
          <el-descriptions class="margin-top" :column="2" border>
            <el-descriptions-item>
              <template slot="label">
                用户头像
              </template>
              <img :src="userInfo.avatar"></img>
            </el-descriptions-item>

            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户ID
              </template>
              {{ userInfo.userId }}
            </el-descriptions-item>

            <el-descriptions-item>
              <template slot="label">
                用户名称
              </template>
              {{ userInfo.userName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                用户昵称
              </template>
              {{ userInfo.nickName }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                绑定号码
              </template>
              {{ userInfo.phonenumber || '暂无' }}
            </el-descriptions-item>

            <el-descriptions-item>
              <template slot="label">
                注册日期
              </template>
              {{ userInfo.createTime }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                最后登录时间
              </template>
              {{ userInfo.loginDate||'暂无' }}
            </el-descriptions-item>



            <el-descriptions-item>
              <template slot="label">
                账户余额
              </template>
              {{ userInfo.accountAmount }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                用户状态
              </template>
              {{ userInfo.status == 0? '正常':(
							userInfo.status == 1?'冻结':'异常') }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                用户备注
              </template>
              {{userInfo.remark  }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-tab-pane>
    </el-tabs>
    <h3>邮寄地址</h3>
    <!-- <el-table v-loading="loading" :data="posts" :height="posts.length>6?'300': ''"> -->
    <el-table v-loading="loading" :data="addressInfo" :height="addressInfoHeight">
      <el-table-column label="姓名" align="center" prop="userName"/>
      <el-table-column label="电话" align="center" prop="phone"/>
      <el-table-column label="地址" align="center" prop="address"/>
      <el-table-column label="是否默认" align="center" prop="defaultAddress">
				<template slot-scope="scope">
					<!-- {{scope}} -->
					<span style="color: #1890FF;">{{scope.row.defaultAddress==1?'默认地址':'否'}}</span>
				</template>
			</el-table-column>
    </el-table>
    <h3>订单信息</h3>
    <el-table  :data="orderList" >
      <el-table-column label="序号" align="center"  type="index"/>
      <el-table-column label="用户ID" align="center" prop="userId" />
      <el-table-column label="购买用户" align="center" prop="userName" />
      <el-table-column label="商品名称" align="center" prop="productName" />
      <el-table-column label="订单编号" align="center" prop="orderCode" />
      <el-table-column label="下单时间" align="center" prop="orderTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.orderTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="消费类型" align="center" prop="consumeType" :formatter="consumeTypeFormat" />
      <el-table-column label="订单类型" align="center" prop="orderType" :formatter="orderTypeFormat" />
      <el-table-column label="订单金额" align="center" prop="orderAmount" />
      <el-table-column label="运费" align="center" prop="freightAmount" />
      <el-table-column label="总金额" align="center" prop="sumAmount" />
      <el-table-column label="支付时间" align="center" prop="payTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.payTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" align="center" prop="orderStatus" :formatter="orderStatusFormat" />
      <el-table-column label="物流单号" align="center" prop="logisticsCode" />
      <el-table-column label="物流类型" align="center" prop="logisticsType" />
      <el-table-column label="收货人姓名" align="center" prop="takeUser" />
      <el-table-column label="收货人手机号" align="center" prop="takePhone" />
      <el-table-column label="收货人地址" align="center" prop="takeAddress" />
    </el-table>
    <h3>线下项目订单信息</h3>
    <el-table v-loading="loading" :data="itemorderList" >
      <el-table-column label="编号" align="center" type="index" />
      <el-table-column label="门店" align="center" prop="shopName" />
      <el-table-column label="购买用户" align="center" prop="userName" />
      <el-table-column label="绑定号码" align="center" prop="userPhone" />
      <el-table-column label="订单编号" align="center" prop="orderCode" />
      <el-table-column label="下单时间" align="center" prop="orderTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.orderTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <!--      <el-table-column label="订单类型" align="center" prop="orderType" />-->
      <el-table-column label="总金额" align="center" prop="sumAmount" />
      <el-table-column label="余额支付" align="center" prop="payment1" />
      <el-table-column label="产品账户支付" align="center" prop="payment2" />
      <el-table-column label="现金支付" align="center" prop="payment3" />
      <el-table-column label="银行卡支付" align="center" prop="payment4" />
      <el-table-column label="挂账支付" align="center" prop="payment5" />
      <el-table-column label="免费支付" align="center" prop="payment6" />
      <el-table-column label="微信支付" align="center" prop="payment7" />
      <el-table-column label="支付宝支付" align="center" prop="payment8" />
      <el-table-column label="支付时间" align="center" prop="payTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.payTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="订单状态" align="center" prop="orderStatus" :formatter="orderStatusFormat" />
      <el-table-column label="备注信息" align="center" prop="remark" />
    </el-table>
  </div>
</template>

<script>
import {listUser, getUser, delUser, addUser, updateUser, exportUser} from "@/api/baseconfig/user";
import {isNumberStr} from "@/utils";

export default {
  name: "userdetail",
  data() {
    return {
      consumeTypeOptions:[],
      orderTypeOptions:[],
      payTypeOptions:[],
      orderStatusOptions:[],
      activeName: 'first',
      // 遮罩层
      userInfo:{},
      examInfo:[],
			addressInfo: [],
      loading: true,
			addressInfoHeight: undefined,
			examInfoHeight: undefined,
      bashPath:process.env.VUE_APP_BASE_API,
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
      orderList: [],
      itemorderList: [],
      comboList: [],
      browerList: [],
      searchList: [],
      statusOptions: [],
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
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        userName: [
          {required: true, message: "用户账号不能为空", trigger: "blur"}
        ],
        nickName: [
          {required: true, message: "用户昵称不能为空", trigger: "blur"}
        ],
      }
    };
  },
	computed: {
	},
  created() {

    const userId = this.$route.query && this.$route.query.userId;
    if (userId && isNumberStr(userId)) {
      this.loading=true;
      getUser(userId).then(response => {
				if(response.code == 200) {
					this.userInfo = response.data;
          this.itemorderList = response.orderItemInfos;
          this.orderList = response.orderInfos;
					this.addressInfo = response.addressInfo;
					if(this.addressInfo.length > 6) this.addressInfo.height = 300
          this.loading=false;
				}
       });
    }

    this.getDicts("sys_order_status").then(response => {
      this.orderStatusOptions = response.data;
    });
    this.getDicts("sys_order_type").then(response => {
      this.orderTypeOptions = response.data;
    });

    this.getDicts("order_info_consume_type").then(response => {
      this.consumeTypeOptions = response.data;
    });
    this.getDicts("order_info_pay_type").then(response => {
      this.payTypeOptions = response.data;
    });
    this.getDicts("sys_order_status").then(response => {
      this.statusOptions = response.data;
    });
  },
  methods: {
    // 消费类型字典翻译
    consumeTypeFormat(row, column) {
      return this.selectDictLabel(this.consumeTypeOptions, row.consumeType);
    },
    // 订单类型充值字典翻译
    orderTypeFormat(row, column) {
      return this.selectDictLabel(this.orderTypeOptions, row.orderType);
    },
    // 支付类型字典翻译
    payTypeFormat(row, column) {
      return this.selectDictLabel(this.payTypeOptions, row.payType);
    },
    // 订单状态字典翻译
    orderStatusFormat(row, column) {
      return this.selectDictLabel(this.orderStatusOptions, row.orderStatus);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
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
        remark: null
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
      this.daterangeCreateTime = [];
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.userId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    // 订单状态字典翻译
    statusFormat(row, column) {
      return this.selectDictLabel(this.statusOptions, row.status);
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加用户信息";
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
      const userIds = row.userId || this.ids;
      this.$confirm('是否确认删除用户信息编号为"' + userIds + '"的数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        return delUser(userIds);
      }).then(() => {
        this.getList();
        this.msgSuccess("删除成功");
      }).catch(() => {
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
      }).catch(() => {
      });
    }
  }
};
</script>
