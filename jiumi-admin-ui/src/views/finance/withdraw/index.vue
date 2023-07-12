<template>
	<div class="app-container">
		<el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="100px">
			<el-form-item label="提现人姓名" prop="userName">
				<el-input v-model="queryParams.userName" placeholder="请输入提现人姓名" clearable size="small"
					@keyup.enter.native="handleQuery" />
			</el-form-item>
			<el-form-item label="申请时间">
				<el-date-picker v-model="daterangeApplyTime" size="small" style="width: 240px" value-format="yyyy-MM-dd"
					type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="申请状态" prop="applyStatus">
				<el-select v-model="queryParams.applyStatus" placeholder="请选择申请状态" clearable size="small">
					<el-option v-for="dict in applyStatusOptions" :key="dict.dictValue" :label="dict.dictLabel"
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
				<el-button type="warning" plain icon="el-icon-download" size="mini" :loading="exportLoading"
					@click="handleExport" v-hasPermi="['finance:withdraw:export']">导出</el-button>
			</el-col>
      <el-col :span="4"><strong>合计金额：{{totalAmount}} 元</strong></el-col>
			<right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
		</el-row>

		<el-table v-loading="loading" :data="withdrawList" @selection-change="handleSelectionChange">
			<el-table-column label="编号" align="center" type="index" />
			<el-table-column label="提现人姓名" align="center" prop="userName" />
			<el-table-column label="账户金额" align="center" prop="accountAmount" />
			<el-table-column label="提现金额" align="center" prop="withdrawAmount" />
			<el-table-column label="申请时间" align="center" prop="applyTime" width="180">
				<template slot-scope="scope">
					<span>{{ parseTime(scope.row.applyTime, '{y}-{m}-{d}') }}</span>
				</template>
			</el-table-column>
			<el-table-column label="申请状态" align="center" prop="applyStatus" :formatter="applyStatusFormat" />
			<el-table-column label="审核人" align="center" prop="approveUser" />
			<el-table-column label="审核时间" align="center" prop="approveTime" width="180">
				<template slot-scope="scope">
					<span>{{ parseTime(scope.row.approveTime, '{y}-{m}-{d}') }}</span>
				</template>
			</el-table-column>
			<el-table-column label="拒绝原因" align="center" prop="backReason" />
			<el-table-column label="操作" align="center" class-name="small-padding fixed-width">
				<template slot-scope="scope">
					<el-button size="mini" type="text" v-show="scope.row.applyStatus==='01'" icon="el-icon-edit"
						@click="handleUpdate(scope.row)" v-hasPermi="['finance:withdraw:edit']">审核</el-button>
					<el-button size="mini" type="text" v-show="scope.row.applyStatus==='02'" icon="el-icon-success"
						@click="handlePayment(scope.row,1)">打款</el-button>
					<!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['finance:withdraw:remove']"
          >删除</el-button>-->
				</template>
			</el-table-column>
		</el-table>

		<pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
			@pagination="getList" />

		<!-- 添加或修改用户提现记录对话框 -->
		<el-dialog :title="title" :visible.sync="open" width="650px" append-to-body :close-on-click-modal="false">
			<el-form ref="form" :model="form" :rules="rules" label-width="100px">
				<el-form-item label="提现人姓名">
					{{form.userName}}
				</el-form-item>
				<el-form-item label="提现金额">
					{{form.withdrawAmount}}
				</el-form-item>
				<el-form-item label="支付方式">
					<template v-if="form.payType == 1">支付宝</template>
					<template v-else-if="form.payType == 2">银行卡</template>
				</el-form-item>
				<el-form-item label="支付信息">
					<template v-if="form.payType == 1">
						支付宝账号: {{form.alipayAccount}}
					</template>
					<template v-else-if="form.payType == 2">
						<div>银行名称: {{form.bankName}}</div>
						<div>银行账号: {{form.bankAccount}}</div>
					</template>
				</el-form-item>
				<el-form-item label="申请时间" prop="applyTime">
					<el-date-picker clearable size="small" disabled v-model="form.applyTime" type="date"
						value-format="yyyy-MM-dd" placeholder="选择申请时间">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="申请状态" prop="applyStatus">
					<el-select v-model="form.applyStatus" placeholder="请选择申请状态">
						<el-option label="审核通过" value="02"></el-option>
						<el-option label="提现拒绝" value="03"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="拒绝原因" prop="backReason" v-show="form.applyStatus==='03'">
					<el-input v-model="form.backReason" type="textarea" placeholder="请输入拒绝原因" />
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="submitForm">确 定</el-button>
				<el-button @click="cancel">取 消</el-button>
			</div>
		</el-dialog>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
			<el-form label-width="100px">
				<el-form-item label="提现人姓名">
					{{infos.userName}}
				</el-form-item>
				<el-form-item label="提现金额">
					{{infos.withdrawAmount}}
				</el-form-item>
				<el-form-item label="支付方式">
					<template v-if="infos.payType == 1">支付宝</template>
					<template v-else-if="infos.payType == 2">银行卡</template>
				</el-form-item>
				<el-form-item label="支付信息">
					<template v-if="infos.payType == 1">
						支付宝账号: {{infos.alipayAccount}}
					</template>
					<template v-else-if="infos.payType == 2">
						<div>银行名称: {{infos.bankName}}</div>
						<div>银行账号: {{infos.bankAccount}}</div>
					</template>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="handlePayment({},2)">确 定 打 款</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import {
		listWithdraw,
		getWithdraw,
		delWithdraw,
		addWithdraw,
		updateWithdraw,
		exportWithdraw,
		paymentWithdrawAmount
	} from "@/api/finance/withdraw";

	export default {
		name: "Withdraw",
		data() {
			return {
				dialogVisible: false,
        totalAmount:0.00,
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
				// 用户提现记录表格数据
				withdrawList: [],
				// 弹出层标题
				title: "",
				// 是否显示弹出层
				open: false,
				// 申请时间时间范围
				daterangeApplyTime: [],
				// 申请状态字典
				applyStatusOptions: [],
				// 查询参数
				queryParams: {
					pageNum: 1,
					pageSize: 10,
					userName: null,
					applyTime: null,
					applyStatus: null,
					approveTime: null,
				},
				// 表单参数
				form: {},
				// 表单校验
				rules: {
					applyStatus: [{
						required: true,
						message: "请选择审核类型",
						trigger: "blur"
					}],
				},
				infos: {}
			};
		},
		created() {
			this.getList();
			this.getDicts("sys_withdraw_apply_status").then(response => {
				this.applyStatusOptions = response.data;
			});
		},
		methods: {
			/** 查询用户提现记录列表 */
			getList() {
				this.loading = true;
				this.queryParams.params = {};
				if (null != this.daterangeApplyTime && '' != this.daterangeApplyTime) {
					this.queryParams.params["beginApplyTime"] = this.daterangeApplyTime[0];
					this.queryParams.params["endApplyTime"] = this.daterangeApplyTime[1];
				}
        this.totalAmount=0.00;
				listWithdraw(this.queryParams).then(response => {
					this.withdrawList = response.rows;
          this.withdrawList.forEach(order=>{
            this.totalAmount+=parseFloat(order.withdrawAmount);
          })
					this.total = response.total;
					this.loading = false;
				});
			},
			// 申请状态字典翻译
			applyStatusFormat(row, column) {
				return this.selectDictLabel(this.applyStatusOptions, row.applyStatus);
			},
			// 取消按钮
			cancel() {
				this.open = false;
				this.reset();
			},
			handleClose() {},
			// 表单重置
			reset() {
				this.form = {
					id: null,
					userId: null,
					userName: null,
					accountAmount: null,
					withdrawAmount: null,
					applyTime: null,
					applyStatus: null,
					approveUser: null,
					approveTime: null,
					backReason: null,
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
				this.daterangeApplyTime = [];
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
				this.title = "审核用户提现";
			},
			/** 修改按钮操作 */
			handleUpdate(row) {
				this.reset();
				const id = row.id || this.ids
				getWithdraw(id).then(response => {
					this.form = response.data;
					this.form.applyStatus = undefined;
					this.open = true;
					this.title = "审核用户提现";
				});
			},
			handlePayment(row, type = 1) {

				if (type == 1) {
					this.infos = row
					console.log(this.infos);
					this.dialogVisible = true
				} else {
					let row = this.infos
					this.$confirm('是否确认给提现用户【' + row.userName + '】支付款项【' + row.withdrawAmount + '】元?', "警告", {
						confirmButtonText: "确定",
						cancelButtonText: "取消",
						type: "warning"
					}).then(function() {
						return paymentWithdrawAmount(row.id);
					}).then(() => {
						this.getList();
						this.dialogVisible = false
						this.msgSuccess("操作成功");
					}).catch(() => {});
				}
			},
			/** 提交按钮 */
			submitForm() {
				this.$refs["form"].validate(valid => {
					if (valid) {
						if (this.form.id != null) {
							if (this.form.applyStatus === '03') {
								if (!this.form.backReason) {
									this.msgError('请填写拒绝原因')
									return false;
								}
							}
							updateWithdraw(this.form).then(response => {
								this.msgSuccess("修改成功");
								this.open = false;
								this.getList();
							});
						} else {
							this.msgError('请填写需要审核的提现记录')
							return false;
						}
					}
				});
			},
			/** 删除按钮操作 */
			handleDelete(row) {
				const ids = row.id || this.ids;
				this.$confirm('是否确认删除用户提现记录编号为"' + ids + '"的数据项?', "警告", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning"
				}).then(function() {
					return delWithdraw(ids);
				}).then(() => {
					this.getList();
					this.msgSuccess("删除成功");
				}).catch(() => {});
			},
			/** 导出按钮操作 */
			handleExport() {
				const queryParams = this.queryParams;
				this.$confirm('是否确认导出所有用户提现记录数据项?', "警告", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning"
				}).then(() => {
					this.exportLoading = true;
					return exportWithdraw(queryParams);
				}).then(response => {
					this.download(response.msg);
					this.exportLoading = false;
				}).catch(() => {});
			}
		}
	};
</script>
