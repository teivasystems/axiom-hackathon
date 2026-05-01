import { SPWidget } from '@servicenow/sdk/core'

export const kudos_feed_widget = SPWidget({
    $id: Now.ID['w1'],
    name: 'Kudos Feed Widget',
    id: 'x-9274-kudos-feed',
    description: 'Displays team kudos feed and Claude AI-generated digest.',
    category: 'custom',
    serverScript: Now.include('../../server/kudos_feed_server.js'),
    htmlTemplate: `
<div class="kudos-feed">

  <div class="digest-block panel panel-info" ng-if="c.data.digest">
    <div class="panel-heading"><h4>AI Team Digest</h4></div>
    <div class="panel-body">{{c.data.digest}}</div>
  </div>
  <div class="digest-block panel panel-default" ng-if="!c.data.digest">
    <div class="panel-body text-muted">Digest unavailable — check back shortly.</div>
  </div>

  <h4 class="feed-title">Team Kudos (last 30 days)</h4>

  <div class="alert alert-info" ng-if="c.data.kudos_count === 0">
    No kudos yet — be the first to recognise a colleague!
  </div>

  <div class="kudos-card panel panel-default" ng-repeat="k in c.data.kudos">
    <div class="panel-body">
      <span class="badge kudos-category">{{c.data.category_labels[k.category] || k.category}}</span>
      <strong>{{k.giver}}</strong> → <strong>{{k.receiver}}</strong>
      <p class="kudos-message">{{k.message}}</p>
      <small class="text-muted">{{k.created_on}}</small>
    </div>
  </div>

</div>
`,
    customCss: `
.kudos-feed { padding: 12px; }
.feed-title  { margin: 16px 0 8px; }
.kudos-card  { margin-bottom: 10px; }
.kudos-category { background: #1a6496; margin-right: 8px; }
.kudos-message  { margin: 6px 0 2px; }
.digest-block   { margin-bottom: 20px; }
`,
})
