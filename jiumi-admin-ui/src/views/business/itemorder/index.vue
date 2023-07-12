<template>
	<div class="app-container">
		<el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="queryParams.userName" placeholder="请输入用户名" clearable size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
			<el-form-item label="绑定号码" prop="userPhone">
				<el-input v-model="queryParams.userPhone" placeholder="请输入绑定号码" clearable size="small"
					@keyup.enter.native="handleQuery" />
			</el-form-item>
			<el-form-item label="订单编号" prop="orderCode">
				<el-input v-model="queryParams.orderCode" placeholder="请输入订单编号" clearable size="small"
					@keyup.enter.native="handleQuery" />
			</el-form-item>
      <el-form-item label="项目" prop="itemId">
        <el-select v-model="queryParams.itemId" placeholder="请选择" clearable filterable>
          <el-option
            v-for="item in shopItemAllList"
            :key="item.id"
            :label=" item.itemName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产品" prop="goodsId">
        <el-select v-model="queryParams.goodsId" placeholder="请选择" clearable filterable>
          <el-option
            v-for="item in goodsSkuList"
            :key="item.id"
            :label=" item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
			<el-form-item label="下单时间" prop="orderTime">
				<el-date-picker v-model="queryParams.orderTimeAry" size="small" style="width: 240px"
					value-format="yyyy-MM-dd" type="daterange" range-separator="-" start-placeholder="开始日期"
					end-placeholder="结束日期"></el-date-picker>
			</el-form-item>
			<el-form-item label="订单状态" prop="orderStatus">
				<el-select v-model="queryParams.orderStatus" placeholder="请选择订单状态" clearable size="small">
					<el-option v-for="dict in orderStatusOptions" :key="dict.dictValue" :label="dict.dictLabel"
						:value="dict.dictValue" />
				</el-select>
			</el-form-item>
      <el-form-item label="关键字" prop="remark">
        <el-input v-model="queryParams.remark" placeholder="请输入关键字，可查询备注信息" clearable size="small"
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
			<el-form-item>
				<el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
				<el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
			</el-form-item>
		</el-form>

		<el-row :gutter="10" class="mb8">
			<el-col :span="1.5">
				<el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd"
					v-hasPermi="['business:itemorder:add']">新增</el-button>
			</el-col>
			<!--      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['business:itemorder:edit']"
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
          v-hasPermi="['business:itemorder:remove']"
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
          v-hasPermi="['business:itemorder:export']"
        >导出</el-button>
      </el-col>-->
			<right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
		</el-row>

		<el-table v-loading="loading" :data="itemorderList" :row-class-name="tableRowClassName"
			@selection-change="handleSelectionChange"   show-summary :summary-method="getSummaries">
			<el-table-column type="selection" width="55" align="center" />
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
			<el-table-column label="账户余额" align="center" prop="accountAmount" />
			<el-table-column label="订单总金额" align="center" prop="sumAmount" />
			<el-table-column label="次卡抵扣" align="center" prop="cardAmount" />
			<el-table-column label="余额支付" align="center" prop="payment1" />
      <el-table-column label="账户剩余金额" align="center" prop="accountAmount" >
        <template slot-scope="scope">
          <span>{{ scope.row.accountAmount?(scope.row.accountAmount-scope.row.payment1):0 }}</span>
        </template>
      </el-table-column>
			<el-table-column label="产品账户支付" align="center" prop="payment2" />
			<el-table-column label="现金支付" align="center" prop="payment3" />
			<el-table-column label="银行卡支付" align="center" prop="payment4" />
			<el-table-column label="挂账支付" align="center" prop="payment5" />
			<el-table-column label="免费支付" align="center" prop="payment6" />
			<el-table-column label="微信支付" align="center" prop="payment7" />
			<el-table-column label="支付宝支付" align="center" prop="payment8" />
			<el-table-column label="大众点评抵扣" align="center" prop="payment9" />
			<el-table-column label="支付时间" align="center" prop="payTime" width="180">
				<template slot-scope="scope">
					<span>{{ parseTime(scope.row.payTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
				</template>
			</el-table-column>
			<el-table-column label="订单状态" align="center" prop="orderStatus" :formatter="orderStatusFormat" />
			<el-table-column label="备注信息" align="center" prop="remark" />
			<el-table-column label="操作" align="center" class-name="small-padding fixed-width" fixed="right">
				<template slot-scope="scope">
					<el-button size="mini" type="text" icon="el-icon-info" @click="handleUpdate(scope.row,false)"
						v-hasPermi="['business:itemorder:edit']">详情</el-button>
					<el-button size="mini" type="text" icon="el-icon-edit" v-show="scope.row.orderStatus==='01'"
						@click="handleUpdate(scope.row,true)" v-hasPermi="['business:itemorder:edit']">编辑</el-button>
					<el-button size="mini" type="text" icon="el-icon-success" v-show="scope.row.orderStatus==='03'"
						@click="handlePayment(scope.row)" v-hasPermi="['business:itemorder:edit']">已结</el-button>
					<el-button size="mini" type="text" icon="el-icon-printer" v-show="scope.row.orderStatus==='02'"
						@click="handlePrint(scope.row, 1)">小票</el-button>
					<el-button size="mini" type="text" v-show="scope.row.orderStatus==='01'" icon="el-icon-delete"
						@click="handleDelete(scope.row)" v-hasPermi="['business:itemorder:remove']">删除</el-button>
          <el-button size="mini" type="text" v-show="scope.row.orderStatus==='02'" icon="el-icon-s-tools"
                     @click="handleResetOrder(scope.row,true)">调整撤单</el-button>
				</template>
			</el-table-column>
		</el-table>

		<pagination v-show="total>0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
			@pagination="getList" />

		<!-- 添加或修改项目订单管理对话框 -->
		<el-dialog :title="title" :visible.sync="open" width="1200px" append-to-body :close-on-click-modal="false" :show-close="false">
			<el-form ref="form" :model="form" :rules="rules" label-width="200px">
				<el-form-item label="绑定号码" prop="userPhone">
					<el-input v-model="form.userPhone" placeholder="请输入绑定号码" style="width:400px">
						<el-button slot="append" icon="el-icon-search" @click="queryCurrentUserFun"
							v-show="currentUserInfo.userId==null">查询用户</el-button>
					</el-input>
          <strong style="color: red;">{{form.otherShop?('该用户属于其他分店：'+form.otherShop):''}}</strong>
				</el-form-item>
				<el-form-item label="购买用户" prop="userName">
					<strong>{{form.userName}}--{{form.vipInfo}}</strong>
				</el-form-item>
        <el-form-item label="次卡信息" v-show="form.cardInfo">
					<strong><div v-html="form.cardInfo"></div></strong>
				</el-form-item>
				<el-form-item label="订单编号" prop="orderCode">
					<strong>{{form.orderCode}}</strong>
				</el-form-item>
				<el-divider content-position="center"><strong>* 消费项目</strong></el-divider>
				<el-row :gutter="10" class="mb8">
					<el-col :span="1.5">
						<el-button type="primary" icon="el-icon-plus" size="mini" v-show="showSaveButton"
							@click="handleAddOmsOrderItemDetail">添加</el-button>
					</el-col>
					<el-col :span="1.5">
						<el-button type="danger" icon="el-icon-delete" size="mini" v-show="showSaveButton"
							@click="handleDeleteOmsOrderItemDetail">删除</el-button>
					</el-col>
				</el-row>
				<el-table :data="orderItemList" :row-class-name="rowOmsOrderItemDetailIndex"
					@selection-change="handleOmsOrderItemDetailSelectionChange" ref="orderItemDetail">
					<el-table-column type="selection" width="50" align="center" />
					<el-table-column label="序号" align="center" prop="index" width="50" />
					<el-table-column label="项目名称" prop="consumerId">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consumer" placeholder="请输入消费项目" size="small"
								@change="()=>shopItemChangeFun(scope.row)" value-key="id">
								<el-option v-for="dict in shopItemList" :key="dict.id" :label="dict.name"
									:value="dict" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="单价" prop="price" width="60px">
						<template slot-scope="scope">
							<strong>{{scope.row.consumer.price}}</strong>
						</template>
					</el-table-column>
					<el-table-column label="数量" prop="num">
						<template slot-scope="scope">
							<el-input-number v-model="scope.row.num" :step="1" :min="1" placeholder="请输入数量"
								style="width:100px" @change="()=>shopItemChangeFun(scope.row,1)"
								controls-position="right" />
						</template>
					</el-table-column>
					<el-table-column label="次卡剩余" prop="cardNum">
						<template slot-scope="scope">
							<strong>{{scope.row.consumer.lastTimes}}</strong>
						</template>
					</el-table-column>
					<el-table-column label="划卡次数" prop="cardNum">
						<template slot-scope="scope">
							<el-input-number v-model="scope.row.cardNum" :step="1" :min="0"
								:max="scope.row.consumer.lastTimes" @change="()=>shopItemChangeFun(scope.row,2)"
								style="width:100px" controls-position="right" placeholder="请输入划卡次数" />
						</template>
					</el-table-column>
					<el-table-column label="技师" prop="consultant1">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consultant1" placeholder="请输入技师A" size="small">
								<el-option v-for="dict in consultantList" :key="dict.userId" :label="dict.nickName"
									:value="dict.userId" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="最终金额" prop="finalAmount">
						<template slot-scope="scope">
							<el-input-number v-model="scope.row.finalAmount" :min="0" placeholder="请输入最终金额"
								style="width:120px" controls-position="right" />
						</template>
					</el-table-column>
				</el-table>
				<el-divider content-position="center"><strong>* 消费产品</strong></el-divider>
				<el-row :gutter="10" class="mb8">
					<el-col :span="1.5">
						<el-button type="primary" icon="el-icon-plus" size="mini" v-show="showSaveButton"
							@click="handleAddItemProductDetail">添加</el-button>
					</el-col>
					<el-col :span="1.5">
						<el-button type="danger" icon="el-icon-delete" size="mini" v-show="showSaveButton"
							@click="handleDeleteItemProductDetail">删除</el-button>
					</el-col>
				</el-row>
				<el-table :data="orderProductList" :row-class-name="rowItemProductDetailIndex"
					@selection-change="handleItemProductDetailSelectionChange" ref="omsOrderProductDetail">
					<el-table-column type="selection" width="50" align="center" />
					<el-table-column label="序号" align="center" prop="index" width="50" />
					<el-table-column label="产品名称" prop="consumerId">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consumer" placeholder="请输入消费项目" size="small"
								@change="()=>productChangeFun(scope.row)" value-key="id">
								<el-option v-for="dict in goodsSkuList" :key="dict.id" :label="dict.name"
									:value="dict" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="单价" prop="price" width="60px">
						<template slot-scope="scope">
							<strong>{{scope.row.consumer.price}}</strong>
						</template>
					</el-table-column>
					<el-table-column label="数量" prop="num">
						<template slot-scope="scope">
							<el-input-number v-model="scope.row.num" :step="1" :min="1"
								@change="()=>productChangeFun(scope.row)" placeholder="请输入数量" style="width:100px"
								controls-position="right" />
						</template>
					</el-table-column>
					<el-table-column label="方案" prop="consultant1">
						<template slot-scope="scope">
							<el-select v-model="scope.row.subType" placeholder="请选择方案" size="small">
								<el-option label="方案1" value="sub1" />
								<el-option label="方案2" value="sub2" />
								<el-option label="方案3" value="sub3" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="技师A" prop="consultant1">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consultant1" placeholder="请输入技师A" size="small">
								<el-option v-for="dict in consultantList" :key="dict.userId" :label="dict.nickName"
									:value="dict.userId" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="分佣" prop="consultant1Amount">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consultant1Amount" placeholder="请输入技师A佣金" size="small">
								<el-option v-for="(dict,index) in scope.row.consumer[scope.row.subType]" :key="index"
									:label="dict.label" :value="dict.value" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="技师B" prop="consultant2">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consultant2" placeholder="请输入技师B" size="small"
								:disabled="scope.row.subType==='sub1'">
								<el-option v-for="dict in consultantList" :key="dict.userId" :label="dict.nickName"
									:value="dict.userId" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="分佣" prop="consultant2Amount">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consultant2Amount" placeholder="请输入技师B佣金" size="small"
								:disabled="scope.row.subType==='sub1'">
								<el-option v-for="(dict,index) in  scope.row.consumer[scope.row.subType]" :key="index"
									:label="dict.label" :value="dict.value" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="技师C" prop="consultant3">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consultant3" placeholder="请输入技师C" size="small"
								:disabled="scope.row.subType==='sub1' || scope.row.subType==='sub2'">
								<el-option v-for="dict in consultantList" :key="dict.userId" :label="dict.nickName"
									:value="dict.userId" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="分佣" prop="consultant3Amount">
						<template slot-scope="scope">
							<el-select v-model="scope.row.consultant3Amount" placeholder="请输入技师C佣金" size="small"
								:disabled="scope.row.subType==='sub1' || scope.row.subType==='sub2'">
								<el-option v-for="(dict,index) in  scope.row.consumer[scope.row.subType]" :key="index"
									:label="dict.label" :value="dict.value" />
							</el-select>
						</template>
					</el-table-column>
					<el-table-column label="最终金额" prop="finalAmount">
						<template slot-scope="scope">
							<el-input-number v-model="scope.row.finalAmount" :min="0" placeholder="请输入最终金额"
								style="width:100px" controls-position="right" />
						</template>
					</el-table-column>
				</el-table>
				<el-form-item label="下单时间" prop="orderTime">
					<el-date-picker clearable size="small" v-model="form.orderTime" type="datetime"
						value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择下单时间">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="总金额" prop="sumAmount">
					<el-input v-model="form.sumAmount" placeholder="请输入总金额" />
          <div v-show="!orderStatusBtn" style="color:red;">已支付金额:<strong>{{currentOrderAmount}}</strong>,{{currentOrderAmount>form.sumAmount?'还需退还：'+(currentOrderAmount-form.sumAmount).toFixed(1):'还需支付：'+(form.sumAmount-currentOrderAmount).toFixed(1)}}</div>
				  <div v-show="!showSaveButton && form.cardAmount>0"><strong>次卡抵消: {{form.cardAmount}}</strong></div>
        </el-form-item>
        <el-row v-show="!orderStatusBtn && currentOrderAmount>form.sumAmount">
          <el-col :span="12">
            <el-form-item label="退回账户余额" prop="backPayment1">
              <el-input-number v-model="form.backPayment1" :min="0" :step="1" controls-position="right"
                               placeholder="请输入退回金额" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="退回产品账户余额" prop="backPayment2">
              <el-input-number v-model="form.backPayment2" :min="0" :step="1" controls-position="right"
                               placeholder="请输入退回金额" />
            </el-form-item>
          </el-col>
        </el-row>
				<el-row>
					<el-col :span="2">
						<strong> * 支付方式</strong>
					</el-col>
					<el-col :span="10">
						<el-form-item :label="userBanlanceLabel" prop="payment1">
							<el-input-number v-model="form.payment1" :min="0" :step="1"
								:max="orderStatusBtn?currentUserInfo.accountAmount:(currentUserInfo.accountAmount+currentOrderPayment1)" controls-position="right" placeholder="请输入余额支付" />
						</el-form-item>
						<el-form-item :label="userProBanlanceLabel" prop="payment2">
							<el-input-number v-model="form.payment2" :min="0" :step="1"
								:max="orderStatusBtn?currentUserInfo.productBalance:(currentUserInfo.productBalance+currentOrderPayment2)" controls-position="right"
								placeholder="请输入产品账户支付" />
						</el-form-item>
						<el-form-item label="现金支付" prop="payment3">
							<el-input-number v-model="form.payment3" :min="0" :step="1" controls-position="right"
								placeholder="请输入现金支付" />
						</el-form-item>
						<el-form-item label="银行卡支付" prop="payment4">
							<el-input-number v-model="form.payment4" :min="0" :step="1" controls-position="right"
								placeholder="请输入银行卡支付" />
						</el-form-item>
						<el-form-item label="挂账支付" prop="payment5">
							<el-input-number v-model="form.payment5" :min="0" :step="1" controls-position="right"
								placeholder="请输入挂账支付" />
						</el-form-item>
						<el-form-item label="免费支付" prop="payment6">
							<el-input-number v-model="form.payment6" :min="0" :step="1" controls-position="right"
								placeholder="请输入免费支付" />
						</el-form-item>
						<el-form-item label="微信支付" prop="payment7">
							<el-input-number v-model="form.payment7" :min="0" :step="1" controls-position="right"
								placeholder="请输入微信支付" />
						</el-form-item>
						<el-form-item label="支付宝支付" prop="payment8">
							<el-input-number v-model="form.payment8" :min="0" :step="1" controls-position="right"
								placeholder="请输入支付宝支付" />
						</el-form-item>
            <el-form-item label="大众点评抵扣金额" prop="payment9">
              <el-input-number v-model="form.payment9" :min="0" :step="1" controls-position="right"
                               placeholder="请输入大众点评抵扣金额" />
            </el-form-item>
					</el-col>
				</el-row>

				<el-form-item label="订单状态" v-show="orderStatusBtn">
					<el-radio-group v-model="form.orderStatus">
						<el-radio v-for="dict in orderStatusOptions" :key="dict.dictValue" :label="dict.dictValue">
							{{dict.dictLabel}}
						</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="备注信息" prop="remark">
					<el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
				</el-form-item>
				<el-form-item label="附件">
					<fileUpload v-model="form.orderFile" />
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click="submitForm" v-show="showSaveButton">确 定</el-button>
				<el-button @click="cancel">取 消</el-button>
			</div>
		</el-dialog>

		<el-dialog title="打印小票" :visible.sync="dialogVisible" width="20%" :before-close="handleClose">
			<div id="printMe" style="font: 11px 黑体,Arial Narrow,HELVETICA;line-height: 20px;">
				<h3 class="text-center" style="font-size: 22px;">FYAN复颜</h3>
				<div>
					<div>尊敬的{{form.userName}}先生/女士:</div>
					<div>卡号: {{form.orderCode}}</div>
					<div>时间: {{form.payTime}}</div>
					<div v-if="orderItemList.length != 0">
						<div style="display: flex;">
							<div style="width: 35%;">项目名称</div>
							<div style="width: 20%;">数量</div>
							<div style="width: 20%;">单价</div>
							<div style="width: 25%;">折后价</div>
						</div>
						<div style="display: flex;" v-for="item in orderItemList">
							<div style="width: 35%;">{{item.consumerName }}</div>
							<div style="width: 20%;">{{item.num}}</div>
							<div style="width: 20%;">{{item.consumer.price}}</div>
							<div style="width: 25%;">{{item.finalAmount}}</div>
						</div>
					</div>
          <div v-if="orderProductList.length != 0">
            <div style="display: flex;">
              <div style="width: 35%;">产品名称</div>
              <div style="width: 20%;">数量</div>
              <div style="width: 20%;">单价</div>
              <div style="width: 25%;">折后价</div>
            </div>
            <div style="display: flex;" v-for="item in orderProductList">
              <div style="width: 35%;">{{item.consumerName }}</div>
              <div style="width: 20%;">{{item.num}}</div>
              <div style="width: 20%;">{{item.price}}</div>
              <div style="width: 25%;">{{item.finalAmount}}</div>
            </div>
          </div>
          <div>初期余额: {{form.accountAmount?form.accountAmount:currentUserInfo.accountAmount}}</div>
					<div>账户余额支付: {{form.payment1}}</div>
					<div>产品账户支付: {{form.payment2}}</div>
					<div>现金支付: {{form.payment3}}</div>
					<div>银行卡支付: {{form.payment4}}</div>
					<div>挂账支付: {{form.payment5}}</div>
					<div>免费支付: {{form.payment6}}</div>
					<div>微信支付: {{form.payment7}}</div>
					<div>支付宝支付: {{form.payment8}}</div>
					<div>大众点评抵扣金额: {{form.payment9}}</div>
					<div>次卡抵消: {{form.cardAmount}}</div>
					<div>订单合计: {{form.sumAmount+form.cardAmount}}</div>
          <div>基本账户现存余额: {{form.accountAmount?(form.accountAmount-form.payment1):currentUserInfo.accountAmount}}</div>
          <div>产品账户现存余额: {{currentUserInfo.productBalance}}</div>
          <div>挂账金额: {{form.payment5}}</div>
          <div>次卡剩余情况: {{form.numberCard}}</div>
					<div>特别提示: 护肤品为私人用品</div>
					<div>售后无质量问题概不退换，谢谢。</div>
					<div>会员签字确认:</div>
					<div style="margin-top: 100px;">
						<div>
              FYAN复颜欢迎您的光临！！！
						</div>
						<div>地址：{{shopInfo.address}}</div>
						<div>电话：{{shopInfo.phone}}</div>
					</div>
				</div>
			</div>
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" v-print="'#printMe'">打 印</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import {
		listItemorder,
		getItemorder,
		delItemorder,
		addItemorder,
		updateItemorder,
		exportItemorder,
		getUserByPhone,
		paymentItemorder
	} from "@/api/business/itemorder";
  import {
    allListItem, listItem
  } from "../../../api/shop/item";
	import {
		getAllGoodsSkuList
	} from "../../../api/goods/sku";
  import {
    getShopAllConstualt,
    getUsersByRoleKey
  } from "../../../api/system/user";
	import {
		parseTime
	} from "../../../utils/ruoyi";
	import {
		isNumberStr
	} from "../../../utils";
  import {resetItemorder} from "../../../api/business/itemorder";
  import {listShopinfo} from "../../../api/shop/shopinfo";

	export default {
		name: "Itemorder",
		data() {
			return {
				dialogVisible: false,
				// 遮罩层
				loading: true,
				// 导出遮罩层
				exportLoading: false,
				// 选中数组
				ids: [],
				itemorderList: [],
				// 子表选中数据
				checkedOrderItemDetail: [],
				checkedOrderProductDetail: [],
				// 非单个禁用
				single: true,

				showSaveButton: true,
        orderStatusBtn:true,
				// 非多个禁用
				multiple: true,
				// 显示搜索条件
				showSearch: true,
				// 总条数
				total: 0,
				currentUserId: 1,
				currentUserInfo: {},
				userBanlanceLabel: '卡结算：账户余额(0.00):',
				userProBanlanceLabel: '   产品账户(0.00):',
        currentOrderAmount:0,
        currentOrderPayment1:0,
        currentOrderPayment2:0,
				// 项目订单管理表格数据
				shopItemList: [],
				goodsSkuList: [],
				consultantList: [],
				// 项目订单详情表格数据
				orderItemList: [],
				orderProductList: [],
        shopinfoList: [],
        shopItemAllList: [],
				// 弹出层标题
				title: "",
				// 是否显示弹出层
				open: false,
				// 订单状态字典
				orderStatusOptions: [],
				// 查询参数
				queryParams: {
					pageNum: 1,
					applyId: null,
					orderTimeAry: [],
					pageSize: 10,
					userPhone: null,
          userName: null,
					orderCode: null,
					orderTime: null,
					outTradeNo: null,
					orderType: null,
          remark: null,
					payTime: null,
					orderStatus: null,
          itemId: null,
          goodsId: null,
					params: {}
				},
				shopInfo:{},
				// 表单参数
				form: {
					orderTime: new Date()
				},
				// 表单校验
				rules: {},
				orderInfo: {},
				printObj: {//打印
				  id: "printMe",
				  popTitle: "打印模板",
				  extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
				  openCallback (vue) {},
				  closeCallback (vue) {},
				  }
			};
		},
		watch: {
			orderItemList: {
				handler: function(val) {
					let sumTotal = 0;
					this.orderItemList.forEach(item => {
						sumTotal += item.finalAmount;
					});
					this.orderProductList.forEach(item => {
						sumTotal += item.finalAmount;
					});
					this.form.sumAmount = sumTotal;
				},
				deep: true
			},
			orderProductList: {
				handler: function(val) {
					let sumTotal = 0;
					this.orderItemList.forEach(item => {
						sumTotal += item.finalAmount;
					});
					this.orderProductList.forEach(item => {
						sumTotal += item.finalAmount;
					});
					this.form.sumAmount = sumTotal;
				},
				deep: true
			}
		},
		created() {
			const applyId = this.$route.query && this.$route.query.applyId;
			console.log(applyId);
			if (applyId && isNumberStr(applyId)) {
				this.queryParams.applyId = applyId;
			}
			this.getConsultantList();
			this.getAllItemList();
			this.getShopItemsAll();
			this.getAllSkuList();
			this.getList();
			this.getDicts("sys_item_order_status").then(response => {
				this.orderStatusOptions = response.data;
			});
		},
		methods: {
			/** 查询项目订单管理列表 */
			getList() {
				this.loading = true;
				if (this.queryParams.orderTimeAry) {
					this.queryParams.params.beginTime = this.queryParams.orderTimeAry[0];
					this.queryParams.params.endTime = this.queryParams.orderTimeAry[1];
				} else {
					this.queryParams.params.beginTime = '';
					this.queryParams.params.endTime = '';
				}
				listItemorder(this.queryParams).then(response => {
					this.itemorderList = response.rows;
					this.total = response.total;
					this.loading = false;
				});
			},

			getAllItemList() {
				allListItem({
					userId: this.currentUserId
				}).then(response => {
					this.shopItemList = response.data;
				});
			},

      getShopItemsAll(){
        listItem({}).then(res=>{
          this.shopItemAllList = res.rows;
        })
      },


			getAllSkuList() {
				getAllGoodsSkuList().then(response => {
					this.goodsSkuList = response.data;
				});
			},

			getConsultantList() {
        getShopAllConstualt().then(res => {
					this.consultantList = res.data;
				})
			},
			// 订单状态字典翻译
			orderStatusFormat(row, column) {
				return this.selectDictLabel(this.orderStatusOptions, row.orderStatus);
			},
			// 取消按钮
			cancel() {
				this.open = false;
				this.orderStatusBtn = true;
        this.currentUserInfo={};
        this.currentOrderAmount=0;
        this.currentOrderPayment1=0;
        this.currentOrderPayment2=0;
				this.reset();
			},
			// 表单重置
			reset() {
				this.form = {
					id: null,
					shopId: null,
					userId: null,
					userName: null,
					userPhone: null,
					orderCode: null,
          otherShop: null,
					orderTime: new Date(),
					outTradeNo: null,
					orderType: null,
					sumAmount: 0,
					payType: null,
          backPayment1:null,
          backPayment2:null,
					payment1: null,
					payment2: null,
					payment3: null,
					payment4: null,
					payment5: null,
					payment6: null,
					payment7: null,
					payment8: null,
					payment9: null,
          cardAmount: null,
					payTime: null,
					orderStatus: "01",
					remark: null,
					orderFile: null,
					createTime: null,
					createBy: null,
					updateTime: null,
					updateBy: null,
					vipInfo: null
				};
				this.orderItemList = [];
				this.currentUserId = null;
				this.currentUserInfo = {};
				this.orderProductList = [];
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
			//重点提案督办标红
			tableRowClassName({
				row
			}) {

				if (row.orderStatus === '03') {
					return 'warning-row'
				}
				return ''
			},
			/** 新增按钮操作 */
			handleAdd() {
				this.reset();
				this.open = true;
				this.title = "添加项目订单管理";
			},
			/** 修改按钮操作 */
			handleUpdate(row, flag) {
				this.reset();
				this.showSaveButton = flag;
				const id = row.id || this.ids
				getItemorder(id).then(response => {
					this.form = response.orderItem;
					this.orderItemList = response.orderItemList;
					this.orderProductList = response.orderProductList;
					this.queryCurrentUserFun();
					this.open = true;
					this.title = flag ? "修改项目订单管理" : "项目订单详情";
				});
			},

      handleResetOrder(row, flag) {
				this.reset();
				this.showSaveButton = flag;
				const id = row.id || this.ids
				getItemorder(id).then(response => {
					this.form = response.orderItem;
					this.currentOrderAmount=response.orderItem.sumAmount;
					this.currentOrderPayment1=response.orderItem.payment1;
					this.currentOrderPayment2=response.orderItem.payment2;
					if(this.form.orderStatus==='02'){
					  this.orderStatusBtn=false;
          }else{
            this.orderStatusBtn=true;
          }
					this.form.backPayment1=0;
					this.form.backPayment2=0;
					this.orderItemList = response.orderItemList;
					this.orderProductList = response.orderProductList;
					this.queryCurrentUserFun();
					this.open = true;
					this.title = flag ? "调整撤销项目订单" : "项目订单详情";
				});
			},
			handlePrint(info = {}, type = 1) {
				console.log(type == 1);
				if (type == 1) {
					this.dialogVisible = true;
					const id = info.id || this.ids
					getItemorder(id).then(response => {
						this.form = response.orderItem;
            this.form.numberCard = response.numberCard;
						this.orderItemList = response.orderItemList;
						this.orderProductList = response.orderProductList;
						this.shopInfo = response.shopInfo
						this.queryCurrentUserFun();
					});

				} else {
					this.msgSuccess("功能正在建设中");
				}
			},

			handlePayment(row) {
				this.$confirm('是否确认编号为["' + row.orderCode + '"]的订单欠款金额 [￥' + row.payment5 + '] 全部结清?', "警告", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning"
				}).then(function() {
					return paymentItemorder(row.id);
				}).then(() => {
					this.getList();
					this.msgSuccess("操作成功");
				}).catch(() => {});
			},
			/** 提交按钮 */
			submitForm() {
				this.$refs["form"].validate(valid => {
					if (valid) {
						this.form.orderTime = parseTime(this.form.orderTime, '{y}-{m}-{d} {h}:{i}:{s}')
						this.form.orderItemList = this.orderItemList;
						this.form.orderProductList = this.orderProductList;
            let sumAmount = this.form.payment1 + this.form.payment2 + this.form.payment3 + this.form
              .payment4 + this.form.payment5 + this.form.payment6 + this.form.payment7 + this.form
              .payment8+ this.form.payment9;
						if (this.form.id != null) {
						  if(this.orderStatusBtn){
                if (sumAmount != this.form.sumAmount) {
                  this.msgError("支付金额与总金额不符，请认真填写！");
                  return false;
                }
                updateItemorder(this.form).then(response => {
                  this.msgSuccess("修改成功");
                  this.open = false;
                  this.getList();
                });
              }else{
						    let payAmount=this.form.sumAmount+this.form.backPayment1+this.form.backPayment2;
                if (sumAmount != payAmount) {
                  this.msgError("支付金额与总金额不符，请认真填写！");
                  return false;
                }
                resetItemorder(this.form).then(response => {
                  this.msgSuccess("设置订单成功");
                  this.open = false;
                  this.orderStatusBtn = true;
                  this.getList();
                });
              }

						} else {
							addItemorder(this.form).then(response => {
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
				const ids = row.id;
				this.$confirm('是否确认删除项目订单管理编号为"' + ids + '"的数据项?', "警告", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning"
				}).then(function() {
					return delItemorder(ids);
				}).then(() => {
					this.getList();
					this.msgSuccess("删除成功");
				}).catch(() => {});
			},
			/** 项目订单详情序号 */
			rowOmsOrderItemDetailIndex({
				row,
				rowIndex
			}) {
				row.index = rowIndex + 1;
			},
			/** 项目订单详情添加按钮操作 */
			handleAddOmsOrderItemDetail() {
				let obj = {};
				obj.consumerType = 1;
				obj.consumerId = "";
				obj.consumer = {};
				obj.price = 0;
				obj.num = "";
				obj.cardNum = "";
				obj.consultant1 = "";
				obj.consultant1Amount = "";
				obj.consultant2 = "";
				obj.consultant2Amount = "";
				obj.consultant3 = "";
				obj.consultant3Amount = "";
				obj.finalAmount = 0;
				this.orderItemList.push(obj);
			},
			/** 项目订单详情删除按钮操作 */
			handleDeleteOmsOrderItemDetail() {
				if (this.checkedOrderItemDetail.length == 0) {
					this.$alert("请先选择要删除的项目订单详情数据", "提示", {
						confirmButtonText: "确定",
					});
				} else {
					this.orderItemList.splice(this.checkedOrderItemDetail[0].index - 1, 1);
				}
			},
			/** 单选框选中数据 */
			handleOmsOrderItemDetailSelectionChange(selection) {
				if (selection.length > 1) {
					this.$refs.orderItemDetail.clearSelection();
					this.$refs.orderItemDetail.toggleRowSelection(selection.pop());
				} else {
					this.checkedOrderItemDetail = selection;
				}
			},

			rowItemProductDetailIndex({
				row,
				rowIndex
			}) {
				row.index = rowIndex + 1;
			},

			handleAddItemProductDetail(d) {
				let obj = {};
				obj.consumerType = 2;
				obj.consumerId = "";
				obj.consumer = {};
				obj.price = 0;
				obj.num = "";
				obj.cardNum = "";
				obj.subType = "sub1";
				obj.consultant1 = "";
				obj.consultant1Amount = "";
				obj.consultant2 = "";
				obj.consultant2Amount = "";
				obj.consultant3 = "";
				obj.consultant3Amount = "";
				obj.finalAmount = 0;
				this.orderProductList.push(obj);
			},
			/** 项目订单详情删除按钮操作 */
			handleDeleteItemProductDetail() {
				if (this.checkedOrderProductDetail.length == 0) {
					this.$alert("请先选择要删除的项目订单详情数据", "提示", {
						confirmButtonText: "确定",
					});
				} else {
					this.orderProductList.splice(this.checkedOrderProductDetail[0].index - 1, 1);
				}
			},
			/** 单选框选中数据 */
			handleItemProductDetailSelectionChange(selection) {
				if (selection.length > 1) {
					this.$refs.omsOrderProductDetail.clearSelection();
					this.$refs.omsOrderProductDetail.toggleRowSelection(selection.pop());
				} else {
					this.checkedOrderProductDetail = selection;
				}
			},
			/** 导出按钮操作 */
			handleExport() {
				const queryParams = this.queryParams;
				this.$confirm('是否确认导出所有项目订单管理数据项?', "警告", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning"
				}).then(() => {
					this.exportLoading = true;
					return exportItemorder(queryParams);
				}).then(response => {
					this.download(response.msg);
					this.exportLoading = false;
				}).catch(() => {});
			},

			shopItemChangeFun(row, type) {
				let price = row.consumer.discountPrice;
				let num = row.num;
				let cardNum = row.cardNum;
				if (cardNum > num && type === 2) {
					row.cardNum = 0;
				}
				cardNum = row.cardNum;
				row.cardId = row.consumer.cardId;
				row.finalAmount = price * (num - cardNum);
				row.consumerId = row.consumer.id;
			},
			productChangeFun(row) {
				let price = row.consumer.price;
				let num = row.num;
				row.consumerId = row.consumer.id;
				row.finalAmount = price * num;
			},
			queryCurrentUserFun() {
				getUserByPhone(this.form.userPhone).then(response => {
					if (!response.userInfo) {
						this.msgError("用户信息不存在");
						return false;
					}
					this.currentUserInfo = response.userInfo;
					let vipInfo = response.vipInfo;
					if (vipInfo) {
						this.form.vipInfo = '(' + vipInfo.vipName + ',优惠比例:' + (vipInfo.discount) + ')';
					}
          let cardInfo = response.numberCard;
          if (cardInfo) {
            this.form.cardInfo =cardInfo;
          }else{
            this.form.cardInfo =null;
          }
					this.form.userName = this.currentUserInfo.nickName;
					if (!this.form.orderCode) {
						this.form.orderCode = response.orderCode;
					}
					if (!this.form.otherShop) {
						this.form.otherShop = response.otherShop;
					}
					this.form.userId = this.currentUserInfo.userId;
					this.currentUserId = this.currentUserInfo.userId;
					this.userBanlanceLabel = '卡结算：账户余额(' + this.currentUserInfo.accountAmount + ')';
					this.userProBanlanceLabel = '   产品账户(' + this.currentUserInfo.productBalance + ')';
					this.getAllItemList();
				});
			},

			handleClose(done) {
				done();
			},
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 2) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value)) && column.property!='userPhone' && column.property!='orderStatus' && column.property!='remark') {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = '';
          }
        });

        return sums;
      }
		}
	};
</script>
<style>
	.el-table .warning-row {
		color: red !important;
	}
	  @media print{
	    body{
	      border: solid 1px #fff;
	    }
	  }
</style>
