const en_US = {
  business_group: 'Business Group',
  search_placeholder: 'Search',
  nodata: 'No Data',
  btn: {
    add: 'Add',
    create: 'Create',
    modify: 'Modify',
    delete: 'Delete',
    clone: 'Clone',
    detail: 'Detail',
    execute: 'Execute',
    export: 'Export',
    import: 'Import',
    save: 'Save',
    ok: 'Ok',
    cancel: 'Cancel',
    view: 'View',
    more: 'More',
    back: 'Back',
    edit: 'Edit',
    submit: 'Submit',
    operations: 'Operations',
    testAndSave: 'Save & Test',
    batch_operations: 'Batch Operations',
    batch_delete: 'Batch Delete',
    batch_clone: 'Batch Clone',
    batch_modify: 'Batch Modify',
    batch_export: 'Batch Export',
    batch_import: 'Batch Import',
    test: 'Test',
  },
  table: {
    name: 'Name',
    ident: 'Ident',
    tag: 'Tag',
    update_at: 'Updated',
    update_by: 'Updated by',
    create_at: 'Created',
    create_by: 'Created by',
    status: 'Status',
    enabled: 'Enabled',
    note: 'Note',
    operations: 'Operations',
    total: 'Total {{total}} items',
  },
  datasource: {
    prod: 'Type',
    name: 'Datasource',
    type: 'Source Type',
    id: 'Datasource',
    id_required: 'Please select a datasource',
    empty_modal: {
      title: 'Please contact the administrator to configure the datasource',
      btn1: 'Go to configure',
      btn2: 'OK',
    },
  },
  confirm: {
    delete: 'Are you sure to delete?',
    clone: 'Are you sure to clone?',
    save: 'Are you sure to save?',
  },
  success: {
    submit: 'Submitted Successfully',
    modify: 'Modified Successfully',
    edit: 'Edited Successfully',
    create: 'Created Successfully',
    add: 'Added Successfully',
    delete: 'Deleted Successfully',
    clone: 'Cloned Successfully',
    sort: 'Sorted Successfully',
    import: 'Imported Successfully',
    save: 'Saved Successfully',
  },
  error: {
    clone: 'Cloning Failed',
    import: 'Import Failed',
  },
  time: {
    millisecond: 'Millisecond',
    second: 'Second',
    minute: 'Minute',
    hour: 'Hour',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  severity: {
    1: 'S1',
    2: 'S2',
    3: 'S3',
  },

  tpl: 'Self-healing',
  'tpl.create': 'Create',
  'tpl.tag.bind': 'Bind tags',
  'tpl.tag.unbind': 'Unbind tags',
  'tpl.tag.bind.title': 'Batch bind tags',
  'tpl.tag.bind.success': 'Successfully binded',
  'tpl.tag.bind.field': 'tags',
  'tpl.tag.unbind.title': 'Batch unbind tags',
  'tpl.tag.unbind.field': 'tags',
  'tpl.tag.unbind.success': 'Successfully unbinded',
  'tpl.node.modify': 'Modify node',
  'tpl.node.modify.title': 'Batch modify node',
  'tpl.batch.modify.group': 'Batch modify group',
  'tpl.title': 'Title',
  'tpl.title.tpl.help': 'Describe the role of the template',
  'tpl.title.task.help': 'Describe the role of the task',
  'tpl.tags': 'Tags',
  'tpl.tags.help': 'Used for classification',
  'tpl.creator': 'Creator',
  'tpl.last_updator': 'Last updator',
  'tpl.last_updated': 'Last updated',
  'tpl.account.help': 'Execute account, use root with caution',
  'tpl.batch.help': 'Concurrency, default is 0, indicating full concurrent execution, 1 means sequential execution, 2 means that each time two execute',
  'tpl.tolerance.help': 'Tolerate several machines failing, the default is 0, which means no tolerance, once failed, immediately suspend',
  'tpl.timeout.help': 'Timeout for stand-alone script execution, in seconds',
  'tpl.pause.help': 'Pause after completed',
  'tpl.host.help': 'List of hosts to be executed',
  'tpl.host.help2': 'Pre-requisite: categraf needs to be deployed on the target machine, and the ibex configuration enable is set to true',
  'tpl.host.filter_btn': 'Filter hosts',
  'tpl.script.help': 'Script content to be executed',
  'tpl.args.help': 'Parameters attached to the script, separated by double commas, such as arg1,,arg2,,arg3',
  'tpl.modify': 'Modify the template',
  'tpl.create.task': 'Create a new task',
  'tpl.callback': 'Self-healing callback address',

  task: 'Execution History',
  'task.create': 'Create task',
  'task.title': 'Title',
  'task.done': 'Done',
  'task.clone': 'Clone',
  'task.meta': 'Meta',
  'task.creator': 'Creator',
  'task.created': 'Created',
  'task.only.mine': 'Just mine',
  'task.host': 'Host',
  'task.status': 'Status',
  'task.output': 'Output',
  'task.refresh': 'Refresh',
  'task.control.params': 'Control params',
  'task.account': 'Account',
  'task.batch': 'Batch',
  'task.tolerance': 'Tolerance',
  'task.timeout': 'Timeout',
  'task.script': 'Script',
  'task.script.args': 'Script params',
  'task.pause': 'Pause',
  'task.host.list': 'Host list',
  'task.clone.new': 'Clone a new task',
  'task.temporary.create': 'Create temporary task',
  'task.save.temporarily': 'Save temporarily',
  'task.save.execute': 'Save and execute',
  'task.tip.title': 'Tips',
  'task.tip.content':
    'If your role is an administrator, you can execute the script on any machine; otherwise, you can only execute the script on the machines under the business group with administrative rights',

  'last.7.days': 'Last 7 days',
  'last.15.days': 'Last 15 days',
  'last.30.days': 'Last 30 days',
  'last.60.days': 'Last 60 days',
  'last.90.days': 'Last 90 days',

  'msg.submit.success': 'Successfully submited',
  'msg.modify.success': 'Successfully modified',
  'msg.create.success': 'Successfully created',
  'msg.add.success': 'Successfully created',
  'msg.delete.success': 'Successfully deleted',
  'msg.clone.success': 'Successfully cloned',
  'msg.clone.error': 'Cloning failed',
  'msg.sort.success': 'Successfully sorted',
};
export default en_US;