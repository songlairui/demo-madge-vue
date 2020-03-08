const path = require('path')
const meta = require('../cache.json')

// const needToDevelop = ['modules/de/views/modeling/ModelList.vue']
const needToDevelop = [
  //   'store/getters.js',
  //   'store/index.js',
  //   'common/store/index.js',
  //   'common/store/modules/foundation/index.js',
  'common/styles/mdm-ui.scss',
  'common/views/layout/components/Breadcrumb/index.vue',
  'common/views/layout/components/Sidebar/NavMenu.vue',
  'common/views/layout/components/Sidebar/SidebarItem.vue',
  'common/views/layout/components/Sidebar/index.vue',
  'common/views/layout/components/Sidebar/v-menu-item.js',
  'common/views/sys/dashboard/index.vue',
  // "modules/datahub/views/authentication/DHAuthenticationList.vue",
  // "modules/datahub/views/authentication/DHAuthenticationTable.vue",
  // "modules/datahub/views/authentication/NewOrUpdateDHAuthentication.vue",
  // "modules/datahub/views/authentication/model/HttpTokenModel.vue",
  // "modules/datahub/views/authentication/model/OauthBearerModel.vue",
  // "modules/datahub/views/authentication/model/StaticToken.vue",
  // "modules/datahub/views/consumer/model/WebServiceConsumerModel.vue",
  // "modules/datahub/views/datasource/DataSourceList.vue",
  // "modules/datahub/views/datasource/DataSourceTable.vue",
  // "modules/datahub/views/datasource/NewOrUpdateDataSource.vue",
  // "modules/datahub/views/file/ExcelFileUpload.vue",
  // "modules/datahub/views/logwarning/LogWarningList.vue",
  // "modules/datahub/views/logwarning/LogWarningTable.vue",
  // "modules/datahub/views/logwarning/NewOrUpdateLogWarning.vue",
  // "modules/datahub/views/messagetrans/MessageTransList.vue",
  // "modules/datahub/views/messagetrans/MessageTransTable.vue",
  // "modules/datahub/views/modelmanage/ModelList.vue",
  // "modules/datahub/views/modelmanage/NewOrUpdateConsumer.vue",
  // "modules/datahub/views/modelmanage/NewOrUpdateProducer.vue",
  // "modules/datahub/views/modelmanage/NewOrUpdateTopic.vue",
  // "modules/datahub/views/modelmanage/basic.vue",
  // "modules/datahub/views/modelmanage/callback.vue",
  // "modules/datahub/views/modelmanage/container.vue",
  // "modules/datahub/views/modelmanage/counter.vue",
  // "modules/datahub/views/modelmanage/log.vue",
  // "modules/datahub/views/modelmanage/mapping.vue",
  // "modules/datahub/views/modelmanage/notice.vue",
  // "modules/datahub/views/modelmanage/preprocess.vue",
  // "modules/datahub/views/modelmanage/props.vue",
  // "modules/datahub/views/modelmanage/remark.vue",
  // "modules/datahub/views/modelmanage/router.vue",
  // "modules/datahub/views/operationoverview/OperationOverviewList.vue",
  // "modules/datahub/views/operationoverview/OperationOverviewTable.vue",
  // "modules/datahub/views/operationoverview/overview.vue",
  // "modules/datahub/views/operationoverview/overviewChart.vue",
  // "modules/datahub/views/operationsituation/MsgTransList.vue",
  // "modules/datahub/views/operationsituation/MsgTransTable.vue",
  // "modules/datahub/views/operationsituation/OperationList.vue",
  // "modules/datahub/views/operationsituation/OperationTable.vue",
  // "modules/datahub/views/operationsituation/OperationTaskList.vue",
  // "modules/datahub/views/operationsituation/TaskTable.vue",
  // "modules/datahub/views/parameter/NewOrUpdateParameter.vue",
  // "modules/datahub/views/parameter/ParameterList.vue",
  // "modules/datahub/views/parameter/ParameterTable.vue",
  // "modules/datahub/views/producer/component/AlarmComponent.vue",
  // "modules/datahub/views/producer/component/CallbackComponent.vue",
  // "modules/datahub/views/producer/component/FailRetryComponent.vue",
  // "modules/datahub/views/producer/component/TimerIntervalComponent.vue",
  // "modules/datahub/views/producer/model/CallbackWebServiceModel.vue",
  // "modules/datahub/views/producer/model/ColumnTable.vue",
  // "modules/datahub/views/producer/model/ExcelFile.vue",
  // "modules/datahub/views/producer/model/HttpModel.vue",
  // "modules/datahub/views/producer/model/ParameterTable.vue",
  // "modules/datahub/views/producer/model/ProducerDBLinkModel.vue",
  // "modules/datahub/views/producer/model/ServerAPI.vue",
  // "modules/datahub/views/producer/model/WebServiceModel.vue",
  // "modules/datahub/views/schedulebatch/NewOrUpdateScheduleBatch.vue",
  // "modules/datahub/views/schedulebatch/ScheduleBatchList.vue",
  // "modules/datahub/views/schedulebatch/ScheduleBatchTable.vue",
  // "modules/datahub/views/schedulejob/NewOrUpdateScheduleJob.vue",
  // "modules/datahub/views/schedulejob/ScheduleJobList.vue",
  // "modules/datahub/views/schedulejob/ScheduleJobTable.vue",
  // "modules/datahub/views/schedulelog/ScheduleLogList.vue",
  // "modules/datahub/views/schedulelog/ScheduleLogTable.vue",
  // "modules/datahub/views/systemcheck/NewOrUpdateSystemCheck.vue",
  // "modules/datahub/views/systemcheck/SystemCheckList.vue",
  // "modules/datahub/views/systemcheck/SystemCheckResultList.vue",
  // "modules/datahub/views/systemcheck/SystemCheckResultTable.vue",
  // "modules/datahub/views/systemcheck/SystemCheckTable.vue",
  'modules/datapub/views/api/ApiDescription.vue',
  'modules/datapub/views/api/ApiList.vue',
  'modules/datapub/views/api/ApiTable.vue',
  'modules/datapub/views/api/NewOrUpdateApi.vue',
  'modules/datapub/views/api/NewOrUpdateApiS1.vue',
  'modules/datapub/views/api/NewOrUpdateApiS2.vue',
  'modules/datapub/views/api/NewOrUpdateApiS3.vue',
  'modules/datapub/views/api/NewOrUpdateApiS4.vue',
  'modules/datapub/views/apimonitor/ApiMonitorList.vue',
  'modules/datapub/views/apimonitor/ApiRateChart.vue',
  'modules/datapub/views/category/DPCategoryList.vue',
  'modules/datapub/views/category/DPCategoryTable.vue',
  'modules/datapub/views/category/NewOrUpdateDPCategory.vue',
  'modules/datapub/views/dataset/DPDataSetList.vue',
  'modules/datapub/views/dataset/DPDataSetTable.vue',
  'modules/datapub/views/dataset/NewOrUpdateDPDataSet.vue',
  'modules/datapub/views/datasource/DPDataSourceList.vue',
  'modules/datapub/views/datasource/DPDataSourceTable.vue',
  'modules/datapub/views/datasource/NewOrUpdateDPDataSource.vue',
  'modules/datapub/views/function/DPFunctionList.vue',
  'modules/datapub/views/function/DPFunctionTable.vue',
  'modules/datapub/views/function/NewOrUpdateDPFunction.vue',
  'modules/datapub/views/requestOverview/DPRequestOverviewList.vue',
  'modules/datapub/views/requestOverview/overview.vue',
  'modules/datapub/views/requestOverview/overviewChart.vue',
  'modules/datapub/views/requestlog/DPRequestLogList.vue',
  'modules/datapub/views/requestlog/DPRequestLogTable.vue',
  'modules/de/views/Main.vue',
  // "modules/de/views/bpm/BpmDataForm.vue",
  // "modules/de/views/bpm/BpmModelForm.vue",
  // "modules/de/views/bpm/FlowBindEdit.vue",
  // "modules/de/views/bpm/FlowBindList.vue",
  // "modules/de/views/bpm/FlowChooseDialog.vue",
  // "modules/de/views/bpm/FlowParamDialog.vue",
  // "modules/de/views/bpm/OrgFlowList.vue",
  // "modules/de/views/businesstheme/BusinessThemeList.vue",
  // "modules/de/views/clean/CleanDataEdit.vue",
  // "modules/de/views/clean/CleanDataLink.vue",
  // "modules/de/views/clean/CleanDataList.vue",
  // "modules/de/views/clean/CleanDataView.vue",
  // "modules/de/views/clean/CleanModelEdit.vue",
  // "modules/de/views/clean/CleanModelList.vue",
  // "modules/de/views/clean/LinkedDataList.vue",
  // "modules/de/views/clean/LinkedDataView.vue",
  // "modules/de/views/clean/components/LinkCleanDataList.vue",
  // "modules/de/views/clean/components/LinkModelDataList.vue",
  // "modules/de/views/company/CompanyList.vue",
  // "modules/de/views/company/CompanyTable.vue",
  // "modules/de/views/company/DataList.vue",
  // "modules/de/views/company/NewOrUpdateCompany.vue",
  'modules/de/views/components/DataForm/edit.vue',
  'modules/de/views/components/DataForm/form-input-group.vue',
  'modules/de/views/components/DataForm/form-item-content.vue',
  'modules/de/views/components/DataForm/internal-property.vue',
  'modules/de/views/components/DataForm/model-dialog.vue',
  'modules/de/views/components/DataForm/view.vue',
  'modules/de/views/components/DataList/index.vue',
  'modules/de/views/components/DataList/search.vue',
  'modules/de/views/components/DataList/table.vue',
  'modules/de/views/components/DataList/tree-table.vue',
  'modules/de/views/components/DataList/tree.vue',
  'modules/de/views/dashboard/index.vue',
  'modules/de/views/datamaint/CateTemplateEdit.vue',
  'modules/de/views/datamaint/CateTemplateView.vue',
  'modules/de/views/datamaint/DataEdit.vue',
  'modules/de/views/datamaint/DataHistoryList.vue',
  'modules/de/views/datamaint/DataList.vue',
  'modules/de/views/datamaint/DataView.vue',
  'modules/de/views/datamaint/components/CateGroupPreview.vue',
  'modules/de/views/datamaint/components/CateTemplateConstraintEdit.vue',
  'modules/de/views/datamaint/components/CateTemplateConstraintView.vue',
  'modules/de/views/datamaint/components/CateTemplateFormGroupEdit.vue',
  'modules/de/views/datamaint/components/CateTemplateFormGroupPreview.vue',
  'modules/de/views/datamaint/components/CateTemplatePropEdit.vue',
  'modules/de/views/datamaint/components/CateTemplatePropView.vue',
  'modules/de/views/datamaint/components/CustomExport.vue',
  'modules/de/views/datamaint/components/DataExport.vue',
  'modules/de/views/datamaint/components/SelectorDialogContent.vue',
  'modules/de/views/datamaint/components/UserList.vue',
  'modules/de/views/datamaint/components/UserTable.vue',
  'modules/de/views/datamaint/group/DataEdit.vue',
  'modules/de/views/datamaint/group/DataList.vue',
  // "modules/de/views/distribution/DataAndLogTable.vue",
  // "modules/de/views/distribution/DataCollectionList.vue",
  // "modules/de/views/distribution/DataCollectionTable.vue",
  // "modules/de/views/distribution/DataCollectionTaskList.vue",
  // "modules/de/views/distribution/DataCollectionView.vue",
  // "modules/de/views/distribution/DataDetailLastList.vue",
  // "modules/de/views/distribution/DataDetailLastTable.vue",
  // "modules/de/views/distribution/DataDistributionGroupList.vue",
  // "modules/de/views/distribution/DataDistributionGroupTable.vue",
  // "modules/de/views/distribution/DataDistributionGroupView.vue",
  // "modules/de/views/distribution/DataDistributionList.vue",
  // "modules/de/views/distribution/DataDistributionTable.vue",
  // "modules/de/views/distribution/DataDistributionView.vue",
  // "modules/de/views/distribution/DistributionGroupLogList.vue",
  // "modules/de/views/distribution/DistributionGroupLogTable.vue",
  // "modules/de/views/distribution/DistributionLogList.vue",
  // "modules/de/views/distribution/DistributionLogTable.vue",
  // "modules/de/views/distribution/NewOrUpdateDataCollection.vue",
  // "modules/de/views/distribution/NewOrUpdateDataDistribution.vue",
  // "modules/de/views/distribution/NewOrUpdateDataDistributionGroup.vue",
  // "modules/de/views/distribution/NewOrUpdateDataDistribution_BK.vue",
  // "modules/de/views/distribution/propertyFilter.vue",
  // "modules/de/views/exchange/DataExportTaskList.vue",
  // "modules/de/views/exchange/DataExportTaskTable.vue",
  // "modules/de/views/exchange/SourceModelEdit.vue",
  // "modules/de/views/exchange/SourceModelList.vue",
  // "modules/de/views/exchange/SourcePropertyMapEdit.vue",
  // "modules/de/views/exchange/SourcePropertyMapList.vue",
  // "modules/de/views/group/hyProject/DataEdit.vue",
  // "modules/de/views/group/hyProject/DataList.vue",
  // "modules/de/views/group/hyProject/components/ProjectBatchForm.vue",
  // "modules/de/views/group/hyProject/components/ProjectBlockForm.vue",
  // "modules/de/views/group/hyProject/components/ProjectItemForm.vue",
  // "modules/de/views/group/hyProject/components/ProjectItemList.vue",
  // "modules/de/views/group/hyProject/components/ProjectItemNav.vue",
  // "modules/de/views/group/hyProject/components/ProjectItemNavSpecTable.vue",
  // "modules/de/views/group/hyProject/components/ProjectItemNavTable.vue",
  // "modules/de/views/group/hyProject/components/ProjectItemSubmenu.vue",
  // "modules/de/views/group/hyProject/components/ProjectPhase.vue",
  // "modules/de/views/group/hyProject/components/ProjectPhaseForm.vue",
  // "modules/de/views/group/hyProject/components/ProjectProcess.vue",
  // "modules/de/views/group/hyProject/components/ProjectStageForm.vue",
  // "modules/de/views/group/hyProject/components/ProjectTableExpand.vue",
  // "modules/de/views/group/mtproject/BehaviorList.vue",
  // "modules/de/views/group/mtproject/NewOrUpdateModelGroup.vue",
  // "modules/de/views/group/mtproject/components/mdm-json.vue",
  // "modules/de/views/group/project/DataEdit.vue",
  // "modules/de/views/group/project/DataList.vue",
  // "modules/de/views/group/project/components/ProjectItemForm.vue",
  // "modules/de/views/group/project/components/ProjectItemList.vue",
  // "modules/de/views/group/project/components/ProjectItemNav.vue",
  // "modules/de/views/group/project/components/ProjectItemSubmenu.vue",
  // "modules/de/views/group/project/components/ProjectPhase.vue",
  // "modules/de/views/group/project/components/ProjectPhaseForm.vue",
  // "modules/de/views/group/project/components/ProjectProcess.vue",
  // "modules/de/views/group/project/components/ProjectStageForm.vue",
  'modules/de/views/modeling/ModelAdd.vue',
  'modules/de/views/modeling/ModelEdit.vue',
  'modules/de/views/modeling/ModelList.vue',
  'modules/de/views/modeling/TabDetailFrame.vue',
  'modules/de/views/modeling/components/CustomModelGroupDialog.vue',
  'modules/de/views/modeling/components/ModelBasicEdit.vue',
  'modules/de/views/modeling/components/ModelConstraintList.vue',
  'modules/de/views/modeling/components/ModelGroupDialog.vue',
  'modules/de/views/modeling/components/ModelPageColumnPreview.vue',
  'modules/de/views/modeling/components/ModelPageGroupPreview.vue',
  'modules/de/views/modeling/components/ModelPageList.vue',
  'modules/de/views/modeling/components/ModelParameterEdit.vue',
  'modules/de/views/modeling/components/ModelPropertyEdit.vue',
  'modules/de/views/modeling/components/ModelSnRuleList.vue',
  'modules/de/views/modeling/components/customForm/CustomModelPageColumnPreview.vue',
  'modules/de/views/modeling/components/customForm/CustomModelPageGroupPreview.vue',
  'modules/de/views/modeling/components/customForm/CustomModelPageList.vue',
  'modules/de/views/modeling/components/permission/PermBasic.vue',
  'modules/de/views/modeling/components/permission/PermCategory.vue',
  'modules/de/views/modeling/components/permission/PermDisplayColumn.vue',
  'modules/de/views/modeling/components/permission/PermOrganization.vue',
  'modules/de/views/modeling/components/permission/PermProperty.vue',
  'modules/de/views/modeling/components/permission/components/PermOrgDefault.vue',
  'modules/de/views/modeling/components/permission/components/PermRoleList.vue',
  'modules/de/views/modeling/components/permission/components/PermRoleTable.vue',
  'modules/de/views/modeling/components/permission/components/PermUserList.vue',
  'modules/de/views/modeling/components/permission/components/PermUserTable.vue',
  'modules/de/views/modeling/components/permission/components/treeTableCheckbox/index.vue',
  // "modules/de/views/quality/QualityExecuteLogDetail.vue",
  // "modules/de/views/quality/QualityExecuteLogList.vue",
  // "modules/de/views/quality/QualityModelEdit.vue",
  // "modules/de/views/quality/QualityModelEdit_old.vue",
  // "modules/de/views/quality/QualityModelList.vue",
  // "modules/de/views/quality/QualityReportList.vue",
  // "modules/de/views/quality/QualityReportView.vue",
  // "modules/de/views/quality/QualityTaskEdit.vue",
  // "modules/de/views/quality/QualityTaskList.vue",
  'modules/de/views/view/ViewEdit.vue',
  'modules/de/views/view/ViewList.vue',
  'modules/de/views/view/components/ViewApi.vue',
  'modules/de/views/view/components/ViewColumn.vue',
  'modules/de/views/view/components/ViewFormGroup.vue',
  'modules/de/views/view/components/ViewFormGroupPreview.vue',
  'modules/de/views/workbench/mytask/ExcelDataImport.vue'
]

const whomINeed = function(entries, deps = {}) {
  entries.forEach((entry) => {
    const nextDeps = meta[entry] || []
    const nextPayload = nextDeps.filter((key) => !deps[key])
    nextDeps.forEach((key) => {
      deps[key] = (deps[key] || 0) + 1
    })
    whomINeed(nextPayload, deps)
  })
  return deps
}

const flatLimit = function(entries) {
  const traceMeta = {}
  const traceMetaMore = {}
  const deps = {}
  entries.forEach((item) => {
    const snapDeps = { ...deps }
    const beforeKeys = Object.keys(deps)
    const initLength = beforeKeys.length
    whomINeed([item], snapDeps)
    const afterKeys = Object.keys(snapDeps)
    const nextLength = afterKeys.length
    Object.assign(deps, snapDeps)
    traceMeta[item] = nextLength - initLength
    traceMetaMore[item] = afterKeys.filter((key) => !beforeKeys.includes(key))
  })
  return { deps, traceMeta, traceMetaMore }
}

const whoRelyonMe = function(me) {
  return Object.entries(meta)
    .filter(([key, deps]) => deps.includes(me))
    .map(([key]) => key)
}

const whoRelyonMeR = function(entries) {
  let pool = {}
  let tasks = [...entries]
  while (tasks.length) {
    let nextTasks = []
    tasks.forEach((file) => {
      const upfiles = whoRelyonMe(file)
      pool[file] = upfiles.length + (pool[file] || 1)
      nextTasks.push(...upfiles)
    })
    tasks = [...new Set(nextTasks)].filter((item) => !pool[item])
  }
  return pool
}
const whoRelyonMeRPlacing = function(entries, deps = {}) {
  entries.forEach((entry) => {
    const nextDeps = whoRelyonMe(entry)
    const nextPayload = nextDeps.filter((key) => !deps[key])
    nextDeps.forEach((key) => {
      deps[key] = (deps[key] || 0) + 1
    })
    whoRelyonMeRPlacing(nextPayload, deps)
  })
  return deps
}

const upperLimit = function(entries) {
  const traceMeta = {}
  const traceMetaMore = {}
  const deps = {}
  entries.forEach((item) => {
    const snapDeps = { ...deps }
    const beforeKeys = Object.keys(deps)
    const initLength = beforeKeys.length
    whoRelyonMeRPlacing([item], snapDeps)
    const afterKeys = Object.keys(snapDeps)
    const nextLength = afterKeys.length
    Object.assign(deps, snapDeps)
    traceMeta[item] = nextLength - initLength
    traceMetaMore[item] = afterKeys.filter((key) => !beforeKeys.includes(key))
  })
  return { deps, traceMeta, traceMetaMore }
}

function main() {
  const BASE_PATH = '/Users/songlairui/gitlab/mdm-front/src/'
  // return whoRelyonMeR('common/router/lazyLoading.local.js')
  // return whoRelyonMeR('modules/de/views/modeling/components/ModelPropertyEdit.vue')
  // return whoRelyonMeR('common/mixins/index.js')
  const {
    deps: subFiles,
    traceMeta: { ...subTrace }
  } = flatLimit(needToDevelop)

  const {
    deps: upperFiles,
    traceMeta: { ...upperTrace }
  } = upperLimit([...Object.keys(subFiles), ...needToDevelop])

  {
    // debug info
    const upperFileSorts = Object.entries(upperTrace)
      .sort(([, count1], [, count2]) => count2 - count1)
      .slice(0, 10)
    console.info(
      `TOP ${upperFileSorts.length} deps\n${upperFileSorts
        .map(([file, count]) => ` ${count}\t${file}`)
        .join('\n')}`
    )
  }
  {
    // debug info
    const fileSorts = Object.entries(subTrace)
      .sort(([, count1], [, count2]) => count2 - count1)
      .slice(0, 10)
    console.info(
      `TOP ${fileSorts.length} deps\n${fileSorts
        .map(([file, count]) => ` ${count}\t${file}`)
        .join('\n')}`
    )
  }
  const filesToExclude = Object.assign({}, upperFiles, subFiles) // 合并要排除的文件
  const allFiles = Object.keys(meta)
  const filesToDll = allFiles
    .filter((item) => !filesToExclude[item])
    .map((item) => path.resolve(BASE_PATH, item))
  // console.info(filesToExclude)
  const fs = require('fs')
  // fs.writeFileSync('filesToDev.json', JSON.stringify(filesToExclude, null, 1))
  fs.writeFileSync('target-upper.json', JSON.stringify(upperFiles, null, 1))
  const filesAddition = { ...subFiles }
  //   Object.keys(filesUpper).forEach((key) => {
  //     delete filesAddition[key]
  //   })
  fs.writeFileSync('target-addi.json', JSON.stringify(filesAddition, null, 1))
  fs.writeFileSync('dll-entries.json', JSON.stringify(filesToDll, null, 1))
  //   process.exit(1)
  return filesToDll
}
console
  .info
  // main()
  ()

module.exports = main

main.needToDevelop = needToDevelop
main.flatLimit = flatLimit
main.whomINeed = whomINeed
