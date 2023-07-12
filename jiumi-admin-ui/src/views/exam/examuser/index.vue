<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="所属考试" prop="examId">
        <el-select v-model="queryParams.examId" placeholder="请选择考试ID" clearable size="small">
          <el-option
            v-for="dict in examIdOptions"
            :key="dict.id"
            :label="dict.examName"
            :value="dict.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="报名考点" prop="centreId">
        <el-select v-model="queryParams.centreId" placeholder="请选择报名考点" clearable size="small">
          <el-option
            v-for="dict in centreIdOptions"
            :key="dict.id"
            :label="dict.name"
            :value="dict.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input
          v-model="queryParams.phone"
          placeholder="人手机号"
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
          icon="el-icon-s-tools"
          size="mini"
          @click="handleAdd"
        >随机分配</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-setting"
          size="mini"
          @click="handleAddSd"
        >手动分配</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
        >签到表下载</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
        >考号下载</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="examuserList" >
      <el-table-column type="index"label="编号" width="55" align="center" />
      <el-table-column label="所属考试" align="center" prop="examName" />
      <el-table-column label="考点名称" align="center" prop="centreName" />
      <el-table-column label="考生姓名" align="center" prop="userName" />
      <el-table-column label="考生手机号" align="center" prop="phone" />
      <el-table-column label="所属考场" align="center" prop="roomName" />
      <el-table-column label="考生考号" align="center" prop="examCode" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
          >详情</el-button>
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

    <!-- 添加或修改考试信息对话框 -->
    <el-dialog title="随机分配" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="所属考试" prop="examId">
          <el-select v-model="form.examId" placeholder="请选择考试ID" clearable size="small">
            <el-option
              v-for="dict in examIdOptions"
              :key="dict.id"
              :label="dict.examName"
              :value="dict.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择考点" prop="centreId">
          <el-select v-model="form.centreId"
                     @change="centreChangeFun"
                     placeholder="请选择考点">
            <el-option
              v-for="dict in centreIdOptions"
              :key="dict.id"
              :label="dict.name"
              :value="dict.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择考场" prop="roomId">
          <el-select v-model="form.roomId" placeholder="请选择考场">
            <el-option
              v-for="dict in roomIdOptions"
              :key="dict.id"
              :label="dict.name"
              :value="dict.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考场人数">
          <label>40人</label>
        </el-form-item>
        <el-form-item label="考点报名总数">
          <label>{{ centerNum }}人</label>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="手动分配" :visible.sync="sdopen" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="sdform" :model="sdform" :rules="sdrules" label-width="120px">
        <el-form-item label="所属考试" prop="examId">
          <el-select v-model="sdform.examId" placeholder="请选择考试ID" clearable size="small">
            <el-option
              v-for="dict in examIdOptions"
              :key="dict.id"
              :label="dict.examName"
              :value="dict.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择考点" prop="centreId">
          <el-select v-model="sdform.centreId"
                     @change="centreChangeFun"
                     placeholder="请选择考点">
            <el-option
              v-for="dict in centreIdOptions"
              :key="dict.id"
              :label="dict.name"
              :value="dict.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择考场" prop="roomId">
          <el-select v-model="sdform.roomId" placeholder="请选择考场">
            <el-option
              v-for="dict in roomIdOptions"
              :key="dict.id"
              :label="dict.name"
              :value="dict.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考场人数">
          <label>40人</label>
        </el-form-item>
        <el-form-item label="考点报名总数">
          <label>{{ centerNum }}人</label>
        </el-form-item>
        <el-form-item label="" label-width="0px">
          <el-table v-loading="loading" :data="selectUserList" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="考生姓名" align="center" prop="userName" />
            <el-table-column label="考生手机号" align="center" prop="phone" />
          </el-table>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitFormSd">确 定</el-button>
        <el-button @click="cancelSd">取 消</el-button>
      </div>
    </el-dialog>

    <el-dialog title="考生详情" :visible.sync="infoOpen" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="infoform" :model="infoform"label-width="120px">
        <el-form-item label="* 所属考试: " prop="examId">
           <label>{{infoform.examName}}</label>
        </el-form-item>
        <el-form-item label="* 所属考点: " prop="examId">
          <label>{{infoform.centreName}}</label>
        </el-form-item>
        <el-form-item label="* 所属考场: " prop="examId">
          <label>{{infoform.roomName}}</label>
        </el-form-item>
        <el-form-item label="* 考场位置: " prop="examId">
          <label>{{infoform.roomAddress}}</label>
        </el-form-item>
        <el-form-item label="* 考生姓名: " prop="examId">
          <label>{{infoform.userName}}</label>
        </el-form-item>
        <el-form-item label="* 考生电话: " prop="examId">
          <label>{{infoform.phone}}</label>
        </el-form-item>
        <el-form-item label="* 考生考号: " prop="examId">
          <label>{{infoform.examCode}}</label>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelSdInfo">关  闭</el-button>
      </div>
    </el-dialog>

    <!-- 添加或修改考试信息对话框 -->
    <el-dialog title="签到表下载" :visible.sync="signopen" width="500px" append-to-body :close-on-click-modal="false">
      <el-form ref="signform" :model="signform"  label-width="120px">
        <el-form-item label="所属考试" prop="examId">
          <el-select v-model="signform.examId" placeholder="请选择考试ID" clearable size="small">
            <el-option
              v-for="dict in examIdOptions"
              :key="dict.id"
              :label="dict.examName"
              :value="dict.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择考点" prop="centreId">
          <el-select v-model="signform.centreId"
                     @change="centreChangeFun"
                     placeholder="请选择考点">
            <el-option
              v-for="dict in centreIdOptions"
              :key="dict.id"
              :label="dict.name"
              :value="dict.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择考场" prop="roomId">
          <el-select v-model="signform.roomId" placeholder="请选择考场">
            <el-option
              v-for="dict in roomIdOptions"
              :key="dict.id"
              :label="dict.name"
              :value="dict.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitDownForm">下  载</el-button>
        <el-button @click="signcancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  listExamuser,
  getExamuser,
  delExamuser,
  addExamuser,
  updateExamuser,
  exportExamuser,
  setExamuser, getExamNum, getExamUserList, setExamuserSd
} from "@/api/exam/examuser";

export default {
  name: "Examuser",
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
      centerNum:0,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 考试信息表格数据
      examuserList: [],
      selectUserList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      sdopen: false,
      infoOpen: false,
      signopen: false,
      // 考试ID字典
      examIdOptions: [],
      // 报名考点字典
      centreIdOptions: [],
      // 考场ID字典
      roomIdOptions: [],
      // 考生状态字典
      statusOptions: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        examId: null,
        phone: null,
        centreId: null,
        roomId: null,
        examCode: null,
        examScore: null,
        status: null,
      },
      // 表单参数
      form: {},
      sdform: {},
      infoform: {},
      signform: {},
      // 表单校验
      rules: {
        examId: [
          { required: true, message: "所属考试不能为空", trigger: "blur" }
        ],
        centreId: [
          { required: true, message: "考点不能为空", trigger: "blur" }
        ],
        roomId: [
          { required: true, message: "考场不能为空", trigger: "blur" }
        ]
      },
      sdrules: {
        examId: [
          { required: true, message: "所属考试不能为空", trigger: "blur" }
        ],
        centreId: [
          { required: true, message: "考点不能为空", trigger: "blur" }
        ],
        roomId: [
          { required: true, message: "考场不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();
    this.getExamList();
    this.getCentreList();
    this.getDicts("sys_examuser_status").then(response => {
      this.statusOptions = response.data;
    });
  },
  methods: {
    /** 查询考试信息列表 */
    getList() {
      this.loading = true;
      listExamuser(this.queryParams).then(response => {
        this.examuserList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },

    getExamUserList(examId,centreId){
      var param={
        centreId:centreId,
        examId:examId,
        status:'01'
      }
      getExamUserList(param).then(response => {
        this.selectUserList = response.data;
      });
    },

    getExamList(){
      listExamInfo({}).then(response => {
        this.examIdOptions = response.rows;
      });
    },
    getCentreList(){
      listCentre({}).then(response => {
        this.centreIdOptions = response.rows;
      });
    },
    centreChangeFun(centreId){
      let param={
        centreId:centreId
      };
      listRoom(param).then(response => {
        this.roomIdOptions = response.rows;
      });
      getExamNum(centreId).then(response => {
        this.centerNum = response.centreNum;
      });
      this.getExamUserList(this.sdform.examId,centreId);
    },
    // 考试ID字典翻译
    examIdFormat(row, column) {
      return this.selectDictLabel(this.examIdOptions, row.examId);
    },
    // 报名考点字典翻译
    centreIdFormat(row, column) {
      return this.selectDictLabel(this.centreIdOptions, row.centreId);
    },
    // 考场ID字典翻译
    roomIdFormat(row, column) {
      return this.selectDictLabel(this.roomIdOptions, row.roomId);
    },
    // 考生状态字典翻译
    statusFormat(row, column) {
      return this.selectDictLabel(this.statusOptions, row.status);
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    signcancel() {
      this.signopen = false;
    },
    cancelSd() {
      this.sdopen = false;
      this.sdReset();
    },
    cancelSdInfo() {
      this.infoOpen = false;
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        centerId: null,
        roomId: null
      };
      this.resetForm("form");
    },

    sdReset() {
      this.sdform = {
        id: null,
        centerId: null,
        roomId: null,
        personIds:[]
      };
      this.resetForm("sdform");
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
      this.title = "添加考试信息";
    },
    handleAddSd() {
      this.sdReset();
      this.sdopen = true;
      this.selectUserList=[];
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      const id = row.id || this.ids
      getExamuser(id).then(response => {
        this.infoform = response.data;
        this.infoOpen = true;
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          let roomId=this.form.roomId;
          let index=this.roomIdOptions.findIndex(v => v.id === roomId)
          this.form.roomName=this.roomIdOptions[index].name;
          setExamuser(this.form).then(response => {
            this.msgSuccess("操作成功");
            this.open = false;
            this.getList();
          });
        }
      });
    },

    submitFormSd() {
      if(this.ids.length===0){
        this.msgError("请选择需要分配的考生");
        return false;
      }
      this.$refs["sdform"].validate(valid => {
        if (valid) {
          this.sdform.personIds=this.ids;
          setExamuserSd(this.sdform).then(response => {
            this.msgSuccess("操作成功");
            this.sdopen = false;
            this.getExamUserList(this.sdform.examId,this.sdform.centreId);
            this.getList();
          });
        }
      });
    },

    submitDownForm(){
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有考试信息数据项?', "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.exportLoading = true;
        return exportExamuser(queryParams);
      }).then(response => {
        this.download(response.msg);
        this.exportLoading = false;
        this.signopen=false;
      }).catch(() => {});
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除考试信息编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delExamuser(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.signopen=true;
    }
  }
};
</script>
