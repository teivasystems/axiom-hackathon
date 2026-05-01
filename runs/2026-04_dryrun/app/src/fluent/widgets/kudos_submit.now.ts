import { SPWidget } from '@servicenow/sdk/core'

export const kudos_submit_widget = SPWidget({
    $id: Now.ID['w0'],
    name: 'Kudos Submit Widget',
    id: 'x-9274-kudos-submit',
    description: 'Allows employees to submit a kudos to a colleague.',
    category: 'custom',
    serverScript: Now.include('../../server/kudos_submit_server.js'),
    clientScript: Now.include('../../server/kudos_submit_client.js'),
    htmlTemplate: `
<div class="kudos-submit panel panel-default">
  <div class="panel-heading"><h3 class="panel-title">Give Kudos</h3></div>
  <div class="panel-body">

    <div ng-if="c.submitted" class="alert alert-success">
      Kudos submitted! <a ng-click="c.reset()">Give another</a>
    </div>

    <form ng-if="!c.submitted" ng-submit="c.submit()">
      <div class="alert alert-danger" ng-if="c.error">{{c.error}}</div>

      <div class="form-group">
        <label>Recipient</label>
        <input type="text" class="form-control" ng-model="c.form.receiver"
               placeholder="Colleague sys_id or use people picker" />
      </div>

      <div class="form-group">
        <label>Category</label>
        <select class="form-control" ng-model="c.form.category"
                ng-options="cat.value as cat.label for cat in c.data.categories">
          <option value="">— Select —</option>
        </select>
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea class="form-control" rows="4" ng-model="c.form.message"
                  placeholder="What did they do that deserves recognition?"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit Kudos</button>
    </form>

  </div>
</div>
`,
    customCss: `
.kudos-submit .panel-heading { background: #1a6496; color: #fff; }
.kudos-submit .btn-primary   { background: #1a6496; border-color: #1a6496; }
`,
})
