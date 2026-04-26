# UI Builder + Service Portal — Skill Reference
**Jordan | Claude Code | Team AXIOM**
> SDK build loop and deploy cycle: see `CLAUDE.md`. This file covers UI patterns only.

---

## Pick One — Do Not Mix

| Tool | Best for | Complexity | Speed to build |
|---|---|---|---|
| **UI Builder** | Modern workspace / agent UX, data-heavy views | Higher | Slower |
| **Service Portal** | Anonymous forms, simple employee UX, mobile-friendly | Lower | Faster |

**Hackathon rule:** Decide at T+0 and commit. Do not start in Service Portal and switch to UI Builder mid-build. The patterns are incompatible.

**Default recommendation:** Service Portal for anonymous input forms (fast, well-understood). UI Builder for admin/facilitator dashboards (richer components).

---

## Service Portal

### Widget Structure

```javascript
// Server Script — runs on server, populates data object
(function() {
    // data object is shared between server and client
    data.session_id  = $sp.getParameter('session_id') || input.session_id;
    data.items       = [];
    data.session     = {};

    if (!data.session_id) return;

    // Load session
    var sessionGr = new GlideRecord('x_axiom_retroapp_retro_session');
    if (sessionGr.get(data.session_id)) {
        data.session = {
            name:  sessionGr.getValue('name'),
            state: sessionGr.getValue('state')
        };
    }

    // Load items
    var itemGr = new GlideRecord('x_axiom_retroapp_retro_item');
    itemGr.addQuery('session', data.session_id);
    itemGr.orderByDesc('sys_created_on');
    itemGr.setLimit(100);
    itemGr.query();
    while (itemGr.next()) {
        data.items.push({
            sysId:    itemGr.getUniqueValue(),
            content:  itemGr.getValue('content'),
            category: itemGr.getValue('category')
        });
    }
})();
```

```javascript
// Client Controller — AngularJS, runs in browser
function($scope, $http, spUtil) {
    var c = this;

    // data from server is available on c.data
    c.newItem = { content: '', category: 'went_well' };

    c.submitItem = function() {
        if (!c.newItem.content) return;

        // Call server script with input object
        spUtil.update($scope).then(function(response) {
            c.data = response;  // server refreshes data
        });

        // OR use $http for REST calls
        $http.post('/api/x_axiom_retroapp/retro/submit', {
            session_id: c.data.session_id,
            content:    c.newItem.content,
            category:   c.newItem.category
        }).then(function(response) {
            c.newItem.content = '';         // clear input
            spUtil.addInfoMessage('Item submitted!');
        }).catch(function(err) {
            spUtil.addErrorMessage('Submission failed. Try again.');
        });
    };
}
```

### Widget HTML Template

```html
<!-- Categories are fixed for retro: went_well, to_improve, action_item -->
<div class="retro-submit">
  <h3>{{c.data.session.name}}</h3>

  <!-- Category selector -->
  <div class="btn-group" role="group">
    <button type="button"
      ng-class="{'btn-primary': c.newItem.category === 'went_well', 'btn-default': c.newItem.category !== 'went_well'}"
      class="btn"
      ng-click="c.newItem.category = 'went_well'">
      ✅ Went Well
    </button>
    <button type="button"
      ng-class="{'btn-warning': c.newItem.category === 'to_improve', 'btn-default': c.newItem.category !== 'to_improve'}"
      class="btn"
      ng-click="c.newItem.category = 'to_improve'">
      🔧 To Improve
    </button>
  </div>

  <!-- Input -->
  <textarea ng-model="c.newItem.content"
    placeholder="Add your feedback..."
    class="form-control"
    rows="3">
  </textarea>

  <button ng-click="c.submitItem()"
    ng-disabled="!c.newItem.content"
    class="btn btn-primary">
    Submit
  </button>

  <!-- Item list -->
  <div ng-repeat="item in c.data.items">
    <span class="label" ng-class="{'label-success': item.category === 'went_well', 'label-warning': item.category === 'to_improve'}">
      {{item.category}}
    </span>
    {{item.content}}
  </div>
</div>
```

### spUtil — Key Methods

```javascript
spUtil.update($scope)               // re-run server script, refresh data
spUtil.addInfoMessage('text')       // green toast notification
spUtil.addErrorMessage('text')      // red toast notification
spUtil.refresh()                    // full page refresh (use sparingly)
$sp.getParameter('param_name')      // read URL query parameter (server side)
```

---

## Service Portal — Portal Page Setup

```
Navigation: Service Portal → Pages → New

Page ID:  retro_submit    ← used in URL: /sp?id=retro_submit&session_id=...
Title:    Submit Retro Item
Layout:   1 column

Add widget to page:
  Widget: [your widget name]
  Options: {}               ← pass static options here if needed
```

**URL pattern for anonymous access:**
```
https://<instance>.service-now.com/sp?id=retro_submit&session_id=<sys_id>
```

---

## UI Builder (If Chosen Over Service Portal)

### Core Concepts

```
Experience  → top-level app (e.g. "Retro Facilitator")
Page        → route within the experience (e.g. "/session/{id}")
Component   → reusable UI block on a page
Data resource → data binding (Table API, Scripted, Flow trigger)
```

### Page Parameters

```javascript
// Define page parameters in page properties
// Parameter name: session_id
// Type: String

// Access in component event handler:
@context.props.session_id
// OR in data resource:
{session_id: @context.props.session_id}
```

### Data Resource — Table API

```
Data resource type: Look up records
Table: x_axiom_retroapp_retro_item
Conditions: session | is | @context.props.session_id
Fields: content, category, sys_created_on
Order by: sys_created_on desc
Limit: 100
```

### Client State Parameters

```javascript
// Client state = local UI state (like React state)
// NOT persisted, NOT in URL

// Define in page: clientState.selectedCategory = 'all'

// Use in component binding:
@state.selectedCategory

// Update via event handler (UB Action):
Set value: clientState.selectedCategory = 'went_well'
```

### Component Events → Flow Trigger

```
On button click → Trigger flow
Flow: Submit Retro Item
Inputs:
  session_id → @context.props.session_id
  content    → @state.inputContent
  category   → @state.selectedCategory
On success: Refresh data resource
On error:   Show error toast
```

---

## Yokohama UI Gotchas

| Issue | Detail |
|---|---|
| UI Builder scope | Experience must be created in your scoped app scope |
| Service Portal scope | Portal and pages are typically in global scope — widgets in your app scope |
| Anonymous access | Service Portal supports it natively; UI Builder requires explicit role assignment |
| Mobile | Service Portal is more mobile-friendly out of the box |
| Component library | UI Builder uses Now Design System components — don't import external CSS |
| Deployment | UI Builder pages deploy via now-sdk Fluent format in `src/fluent/` |
| Portal widgets | Deploy as XML via `src/fluent/` — widget server/client/HTML/CSS in separate fields |

---

## Decision Checklist at T+0

```
[ ] Is the primary user anonymous (no login)?     → Service Portal
[ ] Is the primary user a logged-in facilitator?  → Either (Service Portal simpler)
[ ] Do we need real-time updates?                 → Service Portal + polling
[ ] Is the design spec mobile-first?              → Service Portal
[ ] Do we have more than 3 hours for UI?          → UI Builder ok
[ ] Less than 3 hours for UI?                     → Service Portal only
```
