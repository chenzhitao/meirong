<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="分类名称" prop="typeName">
        <el-input
          v-model="queryParams.typeName"
          placeholder="请输入分类名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入商品名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="请选择商品状态" clearable size="small">
          <el-option
            v-for="dict in statusOptions"
            :key="dict.dictValue"
            :label="dict.dictLabel"
            :value="dict.dictValue"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否推荐首页" prop="referrerFlag">
        <el-select v-model="queryParams.referrerFlag" placeholder="请选择是否推荐首页" clearable size="small">
          <el-option
            v-for="dict in referrerFlagOptions"
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
          v-hasPermi="['goods:goodsinfo:add']"
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
          v-hasPermi="['goods:goodsinfo:edit']"
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
          v-hasPermi="['goods:goodsinfo:remove']"
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
          v-hasPermi="['goods:goodsinfo:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="goodsinfoList" @selection-change="handleSelectionChange">
       <el-table-column label="序号" align="center" type="index" />
      <el-table-column label="商品名称" align="center" prop="name" />
      <el-table-column label="所属类别" align="center" prop="typeName" />
      <el-table-column label="首页是否推荐" align="center" prop="referrerFlag" >
        <template slot-scope="scope">
          {{scope.row.referrerFlag==='Y'?'是':'否'}}
        </template>
      </el-table-column>
      <el-table-column label="商品价格" align="center"  prop="price" />
      <el-table-column label="线上返佣比例" align="center"  prop="sharePercent" />
      <el-table-column label="线下返佣类型" align="center"  prop="rebateRatioType" >
        <template slot-scope="scope">
          {{scope.row.rebateRatioType===1?'比例':'金额'}}
        </template>
      </el-table-column>
      <el-table-column label="线下返佣" align="center"  prop="rebateRatio" />
      <el-table-column label="商品状态" align="center" prop="status" :formatter="statusFormat" />
      <el-table-column label="销售方式" align="center"  prop="onlineFlag" >
        <template slot-scope="scope">
          {{scope.row.onlineFlag==='Y'?'线上':'线下'}}
        </template>
      </el-table-column>
      <el-table-column label="推荐序号" align="center" prop="sortNo" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['goods:goodsinfo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['goods:goodsinfo:remove']"
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

    <!-- 添加或修改商品管理对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="1000px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
           <el-form-item label="商品名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入商品名称" />
        </el-form-item>
        <el-form-item label="商品分类" prop="typeId">
          <el-select v-model="form.typeId" placeholder="请选择商品分类">
            <el-option v-for="item in typeOptions" :label="item.typeName" :value="Number(item.id)" :key="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="线上返佣比例" prop="sharePercent">
          <el-input-number :precision="2" :step="0.01" :min="0" :max="1"   v-model="form.sharePercent" placeholder="请输入线上返佣比例" controls-position="right"/>
          <strong>(单位：百分比小数,线上小程序商城推广商品返佣比例)</strong>
        </el-form-item>
        <el-form-item label="线下返佣类型" prop="rebateRatioType" >
          <el-radio-group v-model="form.rebateRatioType" @change="setSubCommissionFun">
            <el-radio  :label="1">比例</el-radio>
            <el-radio  :label="2">金额</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="线下返佣设置" prop="rebateRatio">
          <el-input-number :precision="2" :step="0.01" :min="0"   v-model="form.rebateRatio" @change="setSubCommissionFun" placeholder="请输入返佣设置" controls-position="right"/>
          <strong>(单位：{{form.rebateRatioType===1?'百分比小数,0.01就是1%':'数字'}})</strong>
        </el-form-item>
        <el-form-item label="分配分佣(方案1)" prop="subCommissiona">
          <el-input-number :precision="2" :step="0.01" :min="0"  :disabled="true"  v-model="form.sub1Commissiona" placeholder="请输入返佣A设置" controls-position="right"/>&nbsp;&nbsp;(单位：{{form.rebateRatioType===1?'百分比小数,0.01就是1%':'数字'}})</strong>
        </el-form-item>
        <el-form-item label="分配分佣(方案2)" prop="subCommissiona">
          <el-input-number :precision="2" :step="0.01" :min="0"   v-model="form.sub2Commissiona" placeholder="请输入返佣A设置" controls-position="right"/>&nbsp;&nbsp;
          <el-input-number :precision="2" :step="0.01" :min="0"   v-model="form.sub2Commissionb" placeholder="请输入返佣C设置" controls-position="right"/><strong>(单位：{{form.rebateRatioType===1?'百分比小数,0.01就是1%':'数字'}})</strong>
        </el-form-item>
        <el-form-item label="分配分佣(方案3)" prop="subCommissiona">
          <el-input-number :precision="2" :step="0.01" :min="0"   v-model="form.sub3Commissiona" placeholder="请输入返佣A设置" controls-position="right"/>&nbsp;&nbsp;
          <el-input-number :precision="2" :step="0.01" :min="0"   v-model="form.sub3Commissionb" placeholder="请输入返佣B设置" controls-position="right"/>&nbsp;&nbsp;
          <el-input-number :precision="2" :step="0.01" :min="0"   v-model="form.sub3Commissionc" placeholder="请输入返佣C设置" controls-position="right"/><strong>(单位：{{form.rebateRatioType===1?'百分比小数,0.01就是1%':'数字'}})</strong>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="4">
          商品规格参数：
          </el-col>
          <el-col :span="6">
            规格:
          </el-col>
          <el-col :span="6">
            价格:
          </el-col>
          <el-col :span="4">
            库存:
          </el-col>
            <el-col :span="2">
              操作
            </el-col>
        </el-row>
        <el-form-item
          v-for="(item, index) in form.goodsSku"
          :label="'规格参数' + (index+1)"
          :key="index.key"
          :rules="{
            required: true, message: '规格参数不能为空', trigger: 'blur'
          }"
        >
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input v-model="item.skuName" placeholder="请输入商品规格"></el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="item.price" placeholder="请输入商品价格"></el-input>
          </el-col>
          <el-col :span="6">
            <el-input v-model="item.stockNum" placeholder="请输入商品库存"></el-input>
          </el-col>
          <template v-if="index != 0">
            <el-col :span="2">
             <el-button @click.prevent="removeSku(item)">删除</el-button>
            </el-col>
          </template>
        </el-row>
  </el-form-item>
      <div style="display: flex;justify-content: center">
        <el-button @click="addSku"  type="text"  icon="el-icon-plus">添加规格参数</el-button>
      </div>
        <el-form-item label="商品简介" prop="description">
          <el-input v-model="form.description" type="textarea" :rows="6" placeholder="请输入内容"  show-word-limit maxlength="450"/>
        </el-form-item>
        <el-form-item label="商品头图"  prop="headerImg">
          <imageUpload v-model="form.headerImg" :limit="1"/>
        </el-form-item>
        <el-form-item label="详情图片" prop="detailImg">
          <imageUpload v-model="form.detailImg"/>
        </el-form-item>
        <el-form-item label="商品详情" prop="detail">
          <editor v-model="form.detail" :min-height="192" :height="500"/>
        </el-form-item>
        <el-form-item label="首页是否推荐">
          <el-radio-group v-model="form.referrerFlag">
            <el-radio
              v-for="dict in referrerFlagOptions"
              :key="dict.dictValue"
              :label="dict.dictValue"
            >{{dict.dictLabel}}</el-radio>
          </el-radio-group>
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
        <el-form-item label="排序序号" prop="sortNo">
          <el-input v-model="form.sortNo" type="number" placeholder="请输入排序序号" />
        </el-form-item>
        <el-form-item label="商品状态">
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
import { listGoodsinfo, getGoodsinfo, delGoodsinfo, addGoodsinfo, updateGoodsinfo, exportGoodsinfo } from "@/api/goods/goodsinfo";
import {listType} from "@/api/goods/type"
import {delSku} from "../../../api/goods/sku";
export default {
  name: "Goodsinfo",
  data() {
    return {
      typeOptions: [],
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
      // 商品管理表格数据
      goodsinfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 首页是否推荐字典
      onlineFlagOptions: [],
      referrerFlagOptions: [],
      // 商品状态字典
      statusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        typeName: null,
        name: null,
        status: null,
      },
      // 表单参数
      form: {
        rebateRatioType:1
      },
      // 表单校验
      rules: {
        name: [
          { required: true, message: "商品名称不能为空", trigger: "blur" }
        ],
        typeId: [
          { required: true, message: "商品类型不能为空", trigger: "blur" }
        ],
        sharePercent: [
          { required: true, message: "返佣比例不能为空", trigger: "blur" }
        ],
        rebateRatio: [
          { required: true, message: "线下返佣设置不能为空", trigger: "blur" },
          { type: 'number',min: 0.001,message: '线下返佣设置必须大于 0 ！',trigger: 'blur'}
        ],
        description: [
          { required: true, message: "商品简介不能为空", trigger: "blur" }
        ],
        headerImg: [
          { required: true, message: "商品头图不能为空", trigger: "blur" }
        ],
        detailImg: [
          { required: true, message: "商品详情图片不能为空", trigger: "blur" }
        ],
        detail: [
          { required: true, message: "商品详情不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();
    this.getDicts("sys_yes_no").then(response => {
      this.referrerFlagOptions = response.data;
      this.onlineFlagOptions = response.data;
    });
    this.getDicts("sys_goods_status").then(response => {
      this.statusOptions = response.data;
    });
    this.getGoodsTypeList();

  },
  methods: {
    getGoodsTypeList(){
      listType({}).then(res => {
        this.typeOptions = res.rows;

      })
    },
    /** 查询商品管理列表 */
    getList() {
      this.loading = true;
      listGoodsinfo(this.queryParams).then(response => {
        this.goodsinfoList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 首页是否推荐字典翻译
    referrerFlagFormat(row, column) {
      return this.selectDictLabel(this.referrerFlagOptions, row.referrerFlag);
    },
    // 商品状态字典翻译
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
        typeId: null,
        typeName: null,
        name: null,
        description: null,
        headerImg: null,
        detailImg: null,
        detail: null,
        referrerFlag: "Y",
        onlineFlag: "Y",
        rebateRatioType: 1,
        sortNo: 0,
        status: "01",
        sub1Commissiona:0,
        sub2Commissiona:0,
        sub2Commissionb:0,
        sub3Commissiona:0,
        sub3Commissionb:0,
        sub3Commissionc:0,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null,
        goodsSku: [{
          "skuName": "",
          "price": 0.00,
          "stockNum": 0
        }],
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
      this.title = "添加商品管理";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getGoodsinfo(id).then(response => {
        this.form = response.data;
        console.log(this.form)
        this.open = true;
        this.title = "修改商品管理";
      });
    },
    setSubCommissionFun(){
      let rebatType=this.form.rebateRatioType;
      let sumTotal=this.form.rebateRatio;
      if(rebatType===1){
        if(sumTotal>=1){
          this.msgError("线下返佣类型为比例时，线下返佣设置不能大于等于1");
          this.form.rebateRatio=null;
          this.form.sub1Commissiona=null;
          return false;
        }
        this.form.sub1Commissiona=1.00;
      }
      else if(rebatType===2){
        this.form.sub1Commissiona=sumTotal;
      }

    },
    /** 提交按钮 */
    submitForm() {
      if(this.form.typeId !== null ) {
        let type = this.typeOptions.find(item => item.id == this.form.typeId);
        this.form.typeName = type.typeName
      }
      this.$refs["form"].validate(valid => {
        if (valid) {
          let sumTotal=this.form.sub3Commissiona+this.form.sub3Commissionb+this.form.sub3Commissionc;
          sumTotal=sumTotal.toFixed(2);
          let sub2Total=this.form.sub2Commissiona+this.form.sub2Commissionb;
          sub2Total=sub2Total.toFixed(2);
          if(sub2Total!=this.form.sub1Commissiona){
            this.msgError("方案2分配分佣之合必须满足返佣设置");
            return false;
          }
          if(sumTotal!=this.form.sub1Commissiona){
            this.msgError("方案3分配分佣之合必须满足返佣设置");
            return false;
          }
          if (this.form.id != null) {
            updateGoodsinfo(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addGoodsinfo(this.form).then(response => {
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
      this.$confirm('是否确认删除商品管理编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delGoodsinfo(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有商品管理数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.exportLoading = true;
          return exportGoodsinfo(queryParams);
        }).then(response => {
          this.download(response.msg);
          this.exportLoading = false;
        }).catch(() => {});
    },
      removeSku(item) {
        var index = this.form.goodsSku.indexOf(item);
        if(item.id){
          this.$confirm('是否确认删除规格为"' + item.skuName + '"的数据项?', "警告", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(function() {
            return delSku(item.id);
          }).then(() => {
            if (index !== -1) {
              this.form.goodsSku.splice(index, 1)
            }
            this.msgSuccess("删除成功");
          }).catch(() => {});
        }
        else{
          if (index !== -1) {
            this.form.goodsSku.splice(index, 1)
          }
        }

      },
      addSku() {
        this.form.goodsSku.push({
          "skuName": "",
          "price": 0.00,
          "stockNum": 0,
          key: Date.now()
        });
      }
  }
};
</script>
