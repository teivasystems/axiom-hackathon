import '@servicenow/sdk/global'
import { Dashboard } from '@servicenow/sdk/core'
import { missionControlWorkspace } from './workspace.now'

// ─── HTML report content — one per tab ───────────────────────────────────────

const htmlOverview = `<style>
  .axmc * { box-sizing: border-box; }
  .axmc { font-family: "Segoe UI", system-ui, sans-serif; color: #1e293b; padding: 24px; background: #f1f5f9; }
  .axmc .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 14px; }
  .axmc .row { display: grid; gap: 20px; margin-bottom: 24px; }
  .axmc .row-3 { grid-template-columns: repeat(3, 1fr); }
  .axmc .card { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .axmc .card-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 16px; }
  .axmc .chart-wrap { position: relative; height: 220px; }
  .axmc .legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
  .axmc .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #475569; }
  .axmc .legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  @media (max-width: 900px) { .axmc .row-3 { grid-template-columns: 1fr; } }
</style>
<div class="axmc">
  <div class="section-label">System-wide Status</div>
  <div class="row row-3">
    <div class="card">
      <div class="card-title">Zones by Status</div>
      <div class="chart-wrap"><canvas id="axmc_chartZones"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Safe (4)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>At Risk (2)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Evacuated (1)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div>Closed (1)</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Rescue by Priority</div>
      <div class="chart-wrap"><canvas id="axmc_chartRescue"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Critical (6)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>High (9)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6"></div>Medium (8)</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Triage Classifications</div>
      <div class="chart-wrap"><canvas id="axmc_chartTriage"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Cleared (45)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>Medical (28)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Quarantine (7)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div>Manual Review (20)</div>
      </div>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    var d = { cutout: '68%', plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false };
    new Chart(document.getElementById('axmc_chartZones'), { type: 'doughnut', data: { labels: ['Safe','At Risk','Evacuated','Closed'], datasets: [{ data: [4,2,1,1], backgroundColor: ['#22c55e','#f59e0b','#ef4444','#6b7280'], borderWidth: 0, hoverOffset: 6 }] }, options: d });
    new Chart(document.getElementById('axmc_chartRescue'), { type: 'doughnut', data: { labels: ['Critical','High','Medium'], datasets: [{ data: [6,9,8], backgroundColor: ['#ef4444','#f59e0b','#3b82f6'], borderWidth: 0, hoverOffset: 6 }] }, options: d });
    new Chart(document.getElementById('axmc_chartTriage'), { type: 'doughnut', data: { labels: ['Cleared','Medical Attention','Quarantine','Manual Review'], datasets: [{ data: [45,28,7,20], backgroundColor: ['#22c55e','#f59e0b','#ef4444','#6b7280'], borderWidth: 0, hoverOffset: 6 }] }, options: d });
  })();
</script>`

const htmlZones = `<style>
  .axmc * { box-sizing: border-box; }
  .axmc { font-family: "Segoe UI", system-ui, sans-serif; color: #1e293b; padding: 24px; background: #f1f5f9; }
  .axmc .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 14px; }
  .axmc .row { display: grid; gap: 20px; margin-bottom: 24px; }
  .axmc .row-3 { grid-template-columns: repeat(3, 1fr); }
  .axmc .row-1 { grid-template-columns: 1fr; }
  .axmc .card { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .axmc .card-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 16px; }
  .axmc .kpi-val { font-size: 52px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
  .axmc .kpi-label { font-size: 12px; color: #64748b; }
  .axmc .chart-wrap { position: relative; height: 220px; }
  .axmc .chart-wrap-tall { position: relative; height: 280px; }
  .axmc .legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
  .axmc .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #475569; }
  .axmc .legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .axmc .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .axmc .badge-safe { background: #dcfce7; color: #15803d; }
  .axmc .badge-at_risk { background: #fef3c7; color: #b45309; }
  .axmc .badge-evacuated { background: #fee2e2; color: #b91c1c; }
  .axmc .badge-closed { background: #f1f5f9; color: #475569; }
  .axmc table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .axmc th { text-align: left; padding: 8px 12px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: .06em; border-bottom: 1px solid #e2e8f0; }
  .axmc td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
  .axmc tr:last-child td { border-bottom: none; }
  .axmc .progress-bar { height: 8px; border-radius: 4px; background: #e2e8f0; overflow: hidden; margin-bottom: 2px; }
  .axmc .progress-fill { height: 100%; border-radius: 4px; }
  @media (max-width: 900px) { .axmc .row-3 { grid-template-columns: 1fr; } }
</style>
<div class="axmc">
  <div class="section-label">Zone Summary</div>
  <div class="row row-3">
    <div class="card"><div class="card-title">Active Zones</div><div class="kpi-val" style="color:#2563eb">7</div><div class="kpi-label">of 8 total zones operational</div></div>
    <div class="card"><div class="card-title">At-Risk Zones</div><div class="kpi-val" style="color:#f59e0b">2</div><div class="kpi-label">Approaching capacity threshold (&gt;= 90%)</div></div>
    <div class="card">
      <div class="card-title">By Status</div>
      <div class="chart-wrap"><canvas id="axmc_chartZoneStatus"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Safe (4)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>At Risk (2)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Evacuated (1)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div>Closed (1)</div>
      </div>
    </div>
  </div>
  <div class="section-label">Headcount by Zone</div>
  <div class="row row-1">
    <div class="card">
      <div class="card-title">Headcount vs Capacity — All Zones</div>
      <div class="chart-wrap-tall"><canvas id="axmc_chartHeadcount"></canvas></div>
      <div class="legend" style="margin-top:16px">
        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;border-radius:2px"></div>Current Headcount</div>
        <div class="legend-item"><div class="legend-dot" style="background:#e2e8f0;border-radius:2px"></div>Remaining Capacity</div>
      </div>
    </div>
  </div>
  <div class="section-label">Zone Detail</div>
  <div class="row row-1">
    <div class="card">
      <table>
        <thead><tr><th>Zone</th><th>District</th><th>Status</th><th>Headcount / Capacity</th><th>Fill %</th></tr></thead>
        <tbody>
          <tr><td><strong>Zone Alpha</strong></td><td>Downtown</td><td><span class="badge badge-safe">Safe</span></td><td>145 / 200</td><td><div class="progress-bar"><div class="progress-fill" style="width:72.5%;background:#22c55e"></div></div><small style="color:#64748b">72%</small></td></tr>
          <tr><td><strong>Zone Bravo</strong></td><td>The Strip</td><td><span class="badge badge-at_risk">At Risk</span></td><td>182 / 200</td><td><div class="progress-bar"><div class="progress-fill" style="width:91%;background:#f59e0b"></div></div><small style="color:#64748b">91%</small></td></tr>
          <tr><td><strong>Zone Charlie</strong></td><td>Summerlin</td><td><span class="badge badge-safe">Safe</span></td><td>89 / 150</td><td><div class="progress-bar"><div class="progress-fill" style="width:59%;background:#22c55e"></div></div><small style="color:#64748b">59%</small></td></tr>
          <tr><td><strong>Zone Delta</strong></td><td>Henderson</td><td><span class="badge badge-safe">Safe</span></td><td>67 / 180</td><td><div class="progress-bar"><div class="progress-fill" style="width:37%;background:#22c55e"></div></div><small style="color:#64748b">37%</small></td></tr>
          <tr><td><strong>Zone Echo</strong></td><td>North Las Vegas</td><td><span class="badge badge-evacuated">Evacuated</span></td><td>0 / 120</td><td><div class="progress-bar"><div class="progress-fill" style="width:0%;background:#ef4444"></div></div><small style="color:#64748b">0%</small></td></tr>
          <tr><td><strong>Zone Foxtrot</strong></td><td>East Las Vegas</td><td><span class="badge badge-at_risk">At Risk</span></td><td>156 / 180</td><td><div class="progress-bar"><div class="progress-fill" style="width:86.7%;background:#f59e0b"></div></div><small style="color:#64748b">87%</small></td></tr>
          <tr><td><strong>Zone Golf</strong></td><td>Spring Valley</td><td><span class="badge badge-safe">Safe</span></td><td>112 / 160</td><td><div class="progress-bar"><div class="progress-fill" style="width:70%;background:#22c55e"></div></div><small style="color:#64748b">70%</small></td></tr>
          <tr><td><strong>Zone Hotel</strong></td><td>Enterprise</td><td><span class="badge badge-closed">Closed</span></td><td>0 / 140</td><td><div class="progress-bar"><div class="progress-fill" style="width:0%;background:#6b7280"></div></div><small style="color:#64748b">0%</small></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    new Chart(document.getElementById('axmc_chartZoneStatus'), { type: 'doughnut', data: { labels: ['Safe','At Risk','Evacuated','Closed'], datasets: [{ data: [4,2,1,1], backgroundColor: ['#22c55e','#f59e0b','#ef4444','#6b7280'], borderWidth: 0, hoverOffset: 6 }] }, options: { cutout: '68%', plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false } });
    new Chart(document.getElementById('axmc_chartHeadcount'), { type: 'bar', data: { labels: ['Downtown','The Strip','Summerlin','Henderson','North LV','East LV','Spring Valley','Enterprise'], datasets: [{ label: 'Headcount', data: [145,182,89,67,0,156,112,0], backgroundColor: ['#22c55e','#f59e0b','#22c55e','#22c55e','#ef4444','#f59e0b','#22c55e','#6b7280'], borderRadius: 4, stack: 's' }, { label: 'Remaining', data: [55,18,61,113,120,24,48,140], backgroundColor: '#e2e8f0', borderRadius: 4, stack: 's' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, grid: { color: '#f1f5f9' }, ticks: { stepSize: 50 }, max: 220 } } } });
  })();
</script>`

const htmlRescue = `<style>
  .axmc * { box-sizing: border-box; }
  .axmc { font-family: "Segoe UI", system-ui, sans-serif; color: #1e293b; padding: 24px; background: #f1f5f9; }
  .axmc .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 14px; }
  .axmc .row { display: grid; gap: 20px; margin-bottom: 24px; }
  .axmc .row-3 { grid-template-columns: repeat(3, 1fr); }
  .axmc .row-2 { grid-template-columns: repeat(2, 1fr); }
  .axmc .row-1 { grid-template-columns: 1fr; }
  .axmc .card { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .axmc .card-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 16px; }
  .axmc .kpi-val { font-size: 52px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
  .axmc .kpi-label { font-size: 12px; color: #64748b; }
  .axmc .kpi-sub { font-size: 11px; color: #94a3b8; margin-top: 4px; }
  .axmc .chart-wrap { position: relative; height: 240px; }
  .axmc .legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
  .axmc .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #475569; }
  .axmc .legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .axmc .sla-chip { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; white-space: nowrap; }
  .axmc .sla-green { background: #dcfce7; color: #15803d; }
  .axmc .sla-amber { background: #fef3c7; color: #b45309; }
  .axmc .sla-red { background: #fee2e2; color: #b91c1c; }
  .axmc table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .axmc th { text-align: left; padding: 8px 12px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: .06em; border-bottom: 1px solid #e2e8f0; }
  .axmc td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: middle; }
  .axmc tr:last-child td { border-bottom: none; }
  @media (max-width: 900px) { .axmc .row-3, .axmc .row-2 { grid-template-columns: 1fr; } }
</style>
<div class="axmc">
  <div class="section-label">Rescue Counts</div>
  <div class="row row-3">
    <div class="card"><div class="card-title">Open Requests</div><div class="kpi-val" style="color:#2563eb">23</div><div class="kpi-label">Active rescue operations</div><div class="kpi-sub">&#8593; 3 in last hour</div></div>
    <div class="card"><div class="card-title">Critical Priority</div><div class="kpi-val" style="color:#ef4444">6</div><div class="kpi-label">15-min SLA window</div><div class="kpi-sub">2 approaching breach</div></div>
    <div class="card"><div class="card-title">Unassigned</div><div class="kpi-val" style="color:#f59e0b">4</div><div class="kpi-label">Awaiting team dispatch</div><div class="kpi-sub">Oldest: 8 min ago</div></div>
  </div>
  <div class="section-label">Breakdown</div>
  <div class="row row-2">
    <div class="card">
      <div class="card-title">By Priority</div>
      <div class="chart-wrap"><canvas id="axmc_chartPriority"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Critical — 6</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>High — 9</div>
        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6"></div>Medium — 8</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">By Request Type</div>
      <div class="chart-wrap"><canvas id="axmc_chartType"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#6366f1"></div>Person Trapped — 8</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Medical Emergency — 7</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>Structural — 5</div>
        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div>Other — 3</div>
      </div>
    </div>
  </div>
  <div class="section-label">Active Rescue Requests — Critical &amp; High</div>
  <div class="row row-1">
    <div class="card">
      <table>
        <thead><tr><th>Number</th><th>Zone</th><th>Type</th><th>Priority</th><th>Assigned Team</th><th>SLA Status</th><th>Opened</th></tr></thead>
        <tbody>
          <tr><td><strong>RES0001023</strong></td><td>Zone Bravo — The Strip</td><td>Medical Emergency</td><td><span style="color:#ef4444;font-weight:700">Critical</span></td><td>Alpha Rescue Team</td><td><span class="sla-chip sla-red">&#9888; Breaching in 3 min</span></td><td>12 min ago</td></tr>
          <tr><td><strong>RES0001024</strong></td><td>Zone Foxtrot — East LV</td><td>Person Trapped</td><td><span style="color:#ef4444;font-weight:700">Critical</span></td><td>Bravo Rescue Team</td><td><span class="sla-chip sla-amber">&#9201; 7 min remaining</span></td><td>8 min ago</td></tr>
          <tr><td><strong>RES0001025</strong></td><td>Zone Alpha — Downtown</td><td>Structural</td><td><span style="color:#ef4444;font-weight:700">Critical</span></td><td><em style="color:#94a3b8">Unassigned</em></td><td><span class="sla-chip sla-amber">&#9201; 11 min remaining</span></td><td>4 min ago</td></tr>
          <tr><td><strong>RES0001018</strong></td><td>Zone Bravo — The Strip</td><td>Person Trapped</td><td><span style="color:#f59e0b;font-weight:700">High</span></td><td>Charlie Rescue Team</td><td><span class="sla-chip sla-green">&#10003; 22 min remaining</span></td><td>8 min ago</td></tr>
          <tr><td><strong>RES0001019</strong></td><td>Zone Foxtrot — East LV</td><td>Medical Emergency</td><td><span style="color:#f59e0b;font-weight:700">High</span></td><td><em style="color:#94a3b8">Unassigned</em></td><td><span class="sla-chip sla-green">&#10003; 28 min remaining</span></td><td>2 min ago</td></tr>
          <tr><td><strong>RES0001020</strong></td><td>Zone Alpha — Downtown</td><td>Other</td><td><span style="color:#f59e0b;font-weight:700">High</span></td><td>Delta Rescue Team</td><td><span class="sla-chip sla-green">&#10003; 18 min remaining</span></td><td>12 min ago</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    new Chart(document.getElementById('axmc_chartPriority'), { type: 'doughnut', data: { labels: ['Critical','High','Medium'], datasets: [{ data: [6,9,8], backgroundColor: ['#ef4444','#f59e0b','#3b82f6'], borderWidth: 0, hoverOffset: 6 }] }, options: { cutout: '68%', plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false } });
    new Chart(document.getElementById('axmc_chartType'), { type: 'bar', data: { labels: ['Person Trapped','Medical Emergency','Structural','Other'], datasets: [{ data: [8,7,5,3], backgroundColor: ['#6366f1','#ef4444','#f59e0b','#6b7280'], borderRadius: 6, barPercentage: 0.55 }] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: '#f1f5f9' }, ticks: { stepSize: 2 } }, y: { grid: { display: false } } } } });
  })();
</script>`

const htmlCivilian = `<style>
  .axmc * { box-sizing: border-box; }
  .axmc { font-family: "Segoe UI", system-ui, sans-serif; color: #1e293b; padding: 24px; background: #f1f5f9; }
  .axmc .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 14px; }
  .axmc .row { display: grid; gap: 20px; margin-bottom: 24px; }
  .axmc .row-3 { grid-template-columns: repeat(3, 1fr); }
  .axmc .row-2 { grid-template-columns: repeat(2, 1fr); }
  .axmc .row-1 { grid-template-columns: 1fr; }
  .axmc .card { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .axmc .card-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 16px; }
  .axmc .kpi-val { font-size: 52px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
  .axmc .kpi-label { font-size: 12px; color: #64748b; }
  .axmc .kpi-sub { font-size: 11px; color: #94a3b8; margin-top: 4px; }
  .axmc .chart-wrap { position: relative; height: 220px; }
  .axmc .legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
  .axmc .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #475569; }
  .axmc .legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .axmc .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .axmc .badge-quarantine { background: #fee2e2; color: #b91c1c; }
  .axmc .badge-ai { background: #f0fdf4; color: #15803d; }
  .axmc .badge-manual { background: #fef3c7; color: #92400e; }
  .axmc table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .axmc th { text-align: left; padding: 8px 12px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: .06em; border-bottom: 1px solid #e2e8f0; }
  .axmc td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: middle; }
  .axmc tr:last-child td { border-bottom: none; }
  .axmc .btn-confirm { background: #2563eb; color: #fff; border: none; border-radius: 5px; padding: 4px 12px; font-size: 12px; cursor: pointer; font-weight: 600; }
  .axmc .btn-override { background: #fff; color: #ef4444; border: 1px solid #ef4444; border-radius: 5px; padding: 4px 12px; font-size: 12px; cursor: pointer; font-weight: 600; }
  @media (max-width: 900px) { .axmc .row-3, .axmc .row-2 { grid-template-columns: 1fr; } }
</style>
<div class="axmc">
  <div class="section-label">Intake Counts</div>
  <div class="row row-3">
    <div class="card"><div class="card-title">Pending Triage</div><div class="kpi-val" style="color:#6d28d9">18</div><div class="kpi-label">Awaiting operator review</div><div class="kpi-sub">&#8593; 5 in last 30 min</div></div>
    <div class="card"><div class="card-title">Quarantine Cases</div><div class="kpi-val" style="color:#ef4444">7</div><div class="kpi-label">Routed to isolation</div><div class="kpi-sub">All cases open</div></div>
    <div class="card">
      <div class="card-title">By Intake Status</div>
      <div class="chart-wrap"><canvas id="axmc_chartStatus"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#7c3aed"></div>Pending (18)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6"></div>Triaged (42)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Placed (31)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f97316"></div>Redirected (9)</div>
      </div>
    </div>
  </div>
  <div class="section-label">Classification Breakdown</div>
  <div class="row row-2">
    <div class="card">
      <div class="card-title">By Triage Class</div>
      <div class="chart-wrap"><canvas id="axmc_chartTriageClass"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Cleared (45)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>Medical Attention (28)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Quarantine (7)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div>Manual Review (20)</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">AI vs Manual Classification</div>
      <div class="chart-wrap"><canvas id="axmc_chartAIManual"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#2563eb"></div>AI Classified (78) — 78%</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>Manual Override (22) — 22%</div>
      </div>
    </div>
  </div>
  <div class="section-label">Pending Intake Queue — Awaiting Operator Confirmation</div>
  <div class="row row-1">
    <div class="card">
      <table>
        <thead><tr><th>Number</th><th>Name</th><th>Zone Assigned</th><th>AI Classification</th><th>AI Reasoning</th><th>Source</th><th>Actions</th></tr></thead>
        <tbody>
          <tr><td><strong>CIV0000412</strong></td><td>Maria Santos</td><td>Zone Charlie — Summerlin</td><td><span class="badge badge-quarantine">Quarantine</span></td><td style="font-size:12px;color:#475569;max-width:200px">High fever, difficulty breathing — possible exposure risk.</td><td><span class="badge badge-ai">AI</span></td><td style="white-space:nowrap"><button class="btn-confirm">Confirm</button> &nbsp;<button class="btn-override">Override</button></td></tr>
          <tr><td><strong>CIV0000413</strong></td><td>James Nkosi</td><td>Zone Alpha — Downtown</td><td><span class="badge" style="background:#dcfce7;color:#15803d">Cleared</span></td><td style="font-size:12px;color:#475569;max-width:200px">Minor cuts, no systemic symptoms reported.</td><td><span class="badge badge-ai">AI</span></td><td style="white-space:nowrap"><button class="btn-confirm">Confirm</button> &nbsp;<button class="btn-override">Override</button></td></tr>
          <tr><td><strong>CIV0000414</strong></td><td>Lisa Chen</td><td>Zone Golf — Spring Valley</td><td><span class="badge" style="background:#fef3c7;color:#b45309">Medical</span></td><td style="font-size:12px;color:#475569;max-width:200px">Chest pain and dizziness — requires medical assessment.</td><td><span class="badge badge-ai">AI</span></td><td style="white-space:nowrap"><button class="btn-confirm">Confirm</button> &nbsp;<button class="btn-override">Override</button></td></tr>
          <tr><td><strong>CIV0000415</strong></td><td>Robert Webb</td><td>Zone Delta — Henderson</td><td><span class="badge badge-quarantine">Quarantine</span></td><td style="font-size:12px;color:#475569;max-width:200px">Severe rash, recent contact with confirmed case.</td><td><span class="badge badge-ai">AI</span></td><td style="white-space:nowrap"><button class="btn-confirm">Confirm</button> &nbsp;<button class="btn-override">Override</button></td></tr>
          <tr><td><strong>CIV0000416</strong></td><td>Ana Morales</td><td>Zone Foxtrot — East LV</td><td><span class="badge" style="background:#f1f5f9;color:#475569">Manual Review</span></td><td style="font-size:12px;color:#475569;max-width:200px">AI unavailable at time of submission — classify manually.</td><td><span class="badge badge-manual">Manual</span></td><td style="white-space:nowrap"><button class="btn-override" style="color:#2563eb;border-color:#2563eb">Classify</button></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    new Chart(document.getElementById('axmc_chartStatus'), { type: 'doughnut', data: { labels: ['Pending','Triaged','Placed','Redirected'], datasets: [{ data: [18,42,31,9], backgroundColor: ['#7c3aed','#3b82f6','#22c55e','#f97316'], borderWidth: 0, hoverOffset: 6 }] }, options: { cutout: '68%', plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false } });
    new Chart(document.getElementById('axmc_chartTriageClass'), { type: 'bar', data: { labels: ['Cleared','Medical Attention','Quarantine','Manual Review'], datasets: [{ data: [45,28,7,20], backgroundColor: ['#22c55e','#f59e0b','#ef4444','#6b7280'], borderRadius: 6, barPercentage: 0.55 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#f1f5f9' }, ticks: { stepSize: 10 } } } } });
    new Chart(document.getElementById('axmc_chartAIManual'), { type: 'doughnut', data: { labels: ['AI Classified','Manual Override'], datasets: [{ data: [78,22], backgroundColor: ['#2563eb','#f59e0b'], borderWidth: 0, hoverOffset: 6 }] }, options: { cutout: '68%', plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false } });
  })();
</script>`

const htmlSupply = `<style>
  .axmc * { box-sizing: border-box; }
  .axmc { font-family: "Segoe UI", system-ui, sans-serif; color: #1e293b; padding: 24px; background: #f1f5f9; }
  .axmc .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 14px; }
  .axmc .row { display: grid; gap: 20px; margin-bottom: 24px; }
  .axmc .row-2 { grid-template-columns: repeat(2, 1fr); }
  .axmc .row-1 { grid-template-columns: 1fr; }
  .axmc .card { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .axmc .card-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 16px; }
  .axmc .kpi-val { font-size: 52px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
  .axmc .kpi-label { font-size: 12px; color: #64748b; }
  .axmc .kpi-sub { font-size: 11px; color: #94a3b8; margin-top: 4px; }
  .axmc .chart-wrap { position: relative; height: 220px; }
  .axmc .chart-wrap-tall { position: relative; height: 300px; }
  .axmc .legend { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }
  .axmc .legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: #475569; }
  .axmc .legend-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .axmc .alert-banner { background: #fee2e2; border: 1px solid #fca5a5; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; font-size: 13px; color: #7f1d1d; font-weight: 500; display: flex; align-items: center; gap: 8px; }
  .axmc .badge { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; }
  .axmc .badge-avail { background: #dcfce7; color: #15803d; }
  .axmc .badge-low { background: #fef3c7; color: #b45309; }
  .axmc .badge-depleted { background: #fee2e2; color: #b91c1c; }
  .axmc .progress-bar { height: 8px; border-radius: 4px; background: #e2e8f0; overflow: hidden; margin-bottom: 2px; }
  .axmc .progress-fill { height: 100%; border-radius: 4px; }
  .axmc table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .axmc th { text-align: left; padding: 8px 12px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: .06em; border-bottom: 1px solid #e2e8f0; }
  .axmc td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; vertical-align: middle; }
  .axmc tr:last-child td { border-bottom: none; }
  @media (max-width: 900px) { .axmc .row-2 { grid-template-columns: 1fr; } }
</style>
<div class="axmc">
  <div class="alert-banner">&#9888; <strong>3 supply items critically depleted</strong> — Medical kits at Zone Bravo, Water reserves at Zone Foxtrot, Shelter supplies at Zone Echo. Immediate resupply required.</div>
  <div class="section-label">Supply Summary</div>
  <div class="row row-2">
    <div class="card"><div class="card-title">Low or Depleted Items</div><div class="kpi-val" style="color:#ef4444">12</div><div class="kpi-label">Require immediate resupply</div><div class="kpi-sub">3 critical &middot; 9 low</div></div>
    <div class="card">
      <div class="card-title">By Status</div>
      <div class="chart-wrap"><canvas id="axmc_chartSupplyStatus"></canvas></div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Available (34)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Depleted (12)</div>
      </div>
    </div>
  </div>
  <div class="section-label">Quantity by Supply Type</div>
  <div class="row row-1">
    <div class="card">
      <div class="card-title">Total Quantity in Stock — By Type &amp; Zone</div>
      <div class="chart-wrap-tall"><canvas id="axmc_chartQuantity"></canvas></div>
      <div class="legend" style="margin-top:16px">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e;border-radius:2px"></div>Food (units)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6;border-radius:2px"></div>Water (litres)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444;border-radius:2px"></div>Medical (kits)</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b;border-radius:2px"></div>Shelter (units)</div>
      </div>
    </div>
  </div>
  <div class="section-label">Supply Inventory Detail</div>
  <div class="row row-1">
    <div class="card">
      <table>
        <thead><tr><th>Item</th><th>Type</th><th>Zone</th><th>Quantity</th><th>Status</th><th>Stock Level</th></tr></thead>
        <tbody>
          <tr><td><strong>MRE Rations</strong></td><td>Food</td><td>Zone Alpha — Downtown</td><td>180</td><td><span class="badge badge-avail">Available</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:90%;background:#22c55e"></div></div></td></tr>
          <tr><td><strong>MRE Rations</strong></td><td>Food</td><td>Zone Bravo — The Strip</td><td>60</td><td><span class="badge badge-low">Low</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:30%;background:#f59e0b"></div></div></td></tr>
          <tr><td><strong>Bottled Water</strong></td><td>Water</td><td>Zone Alpha — Downtown</td><td>240</td><td><span class="badge badge-avail">Available</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:80%;background:#22c55e"></div></div></td></tr>
          <tr><td><strong>Bottled Water</strong></td><td>Water</td><td>Zone Foxtrot — East LV</td><td>0</td><td><span class="badge badge-depleted">Depleted</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div></td></tr>
          <tr><td><strong>First Aid Kit</strong></td><td>Medical</td><td>Zone Bravo — The Strip</td><td>0</td><td><span class="badge badge-depleted">Depleted</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div></td></tr>
          <tr><td><strong>First Aid Kit</strong></td><td>Medical</td><td>Zone Charlie — Summerlin</td><td>48</td><td><span class="badge badge-avail">Available</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:60%;background:#22c55e"></div></div></td></tr>
          <tr><td><strong>Emergency Tent</strong></td><td>Shelter</td><td>Zone Echo — North LV</td><td>0</td><td><span class="badge badge-depleted">Depleted</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:0%"></div></div></td></tr>
          <tr><td><strong>Emergency Tent</strong></td><td>Shelter</td><td>Zone Delta — Henderson</td><td>30</td><td><span class="badge badge-avail">Available</span></td><td><div class="progress-bar"><div class="progress-fill" style="width:75%;background:#22c55e"></div></div></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    new Chart(document.getElementById('axmc_chartSupplyStatus'), { type: 'doughnut', data: { labels: ['Available','Depleted'], datasets: [{ data: [34,12], backgroundColor: ['#22c55e','#ef4444'], borderWidth: 0, hoverOffset: 6 }] }, options: { cutout: '68%', plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false } });
    new Chart(document.getElementById('axmc_chartQuantity'), { type: 'bar', data: { labels: ['Downtown','The Strip','Summerlin','Henderson','North LV','East LV','Spring Valley','Enterprise'], datasets: [{ label: 'Food', data: [180,60,85,95,0,30,110,0], backgroundColor: '#22c55e', borderRadius: 3, stack: 's' }, { label: 'Water', data: [240,120,140,160,0,0,90,0], backgroundColor: '#3b82f6', borderRadius: 3, stack: 's' }, { label: 'Medical', data: [30,0,48,20,12,10,25,0], backgroundColor: '#ef4444', borderRadius: 3, stack: 's' }, { label: 'Shelter', data: [20,15,0,30,0,5,10,0], backgroundColor: '#f59e0b', borderRadius: 3, stack: 's' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, grid: { color: '#f1f5f9' }, ticks: { stepSize: 100 } } } } });
  })();
</script>`

const htmlQuarantine = `<style>
  .axmc * { box-sizing: border-box; }
  .axmc { font-family: "Segoe UI", system-ui, sans-serif; color: #1e293b; padding: 24px; background: #f1f5f9; }
  .axmc .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 14px; }
  .axmc .row { display: grid; gap: 20px; margin-bottom: 24px; }
  .axmc .row-2 { grid-template-columns: repeat(2, 1fr); }
  .axmc .row-1 { grid-template-columns: 1fr; }
  .axmc .card { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .axmc .card-title { font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 16px; }
  .axmc .kpi-val { font-size: 52px; font-weight: 700; line-height: 1; margin-bottom: 6px; }
  .axmc .kpi-label { font-size: 12px; color: #64748b; }
  .axmc .kpi-sub { font-size: 11px; color: #94a3b8; margin-top: 4px; }
  .axmc .stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 16px; }
  .axmc .stat-box { background: #f8fafc; border-radius: 8px; padding: 12px 16px; }
  .axmc .stat-box-val { font-size: 28px; font-weight: 700; }
  .axmc .stat-box-label { font-size: 11px; color: #64748b; margin-top: 2px; }
  .axmc .chart-wrap-tall { position: relative; height: 280px; }
  .axmc .badge-open { display: inline-block; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; background: #fee2e2; color: #b91c1c; }
  .axmc table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .axmc th { text-align: left; padding: 8px 12px; font-size: 11px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: .06em; border-bottom: 1px solid #e2e8f0; }
  .axmc td { padding: 10px 12px; border-bottom: 1px solid #f1f5f9; }
  .axmc tr:last-child td { border-bottom: none; }
  @media (max-width: 900px) { .axmc .row-2 { grid-template-columns: 1fr; } }
</style>
<div class="axmc">
  <div class="section-label">Quarantine Summary</div>
  <div class="row row-2">
    <div class="card">
      <div class="card-title">Open Quarantine Cases</div>
      <div class="kpi-val" style="color:#ef4444">7</div>
      <div class="kpi-label">Active isolation cases</div>
      <div class="kpi-sub">All cases status: Open</div>
      <div class="stat-grid">
        <div class="stat-box"><div class="stat-box-val" style="color:#ef4444">7</div><div class="stat-box-label">Total Open</div></div>
        <div class="stat-box"><div class="stat-box-val" style="color:#6b7280">0</div><div class="stat-box-label">Resolved</div></div>
        <div class="stat-box"><div class="stat-box-val" style="color:#2563eb">4</div><div class="stat-box-label">AI Flagged</div></div>
        <div class="stat-box"><div class="stat-box-val" style="color:#f59e0b">3</div><div class="stat-box-label">Operator Confirmed</div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">By Status</div>
      <div style="display:flex;align-items:center;justify-content:center;flex-direction:column;height:calc(100% - 36px)">
        <div style="font-size:72px;font-weight:800;color:#ef4444;line-height:1">100%</div>
        <div style="font-size:14px;font-weight:600;color:#ef4444;margin-top:8px;text-transform:uppercase;letter-spacing:.05em">Open</div>
        <div style="font-size:12px;color:#94a3b8;margin-top:6px">No lifecycle transitions — stub only</div>
        <div style="margin-top:20px;background:#fee2e2;border-radius:8px;padding:10px 20px;display:flex;align-items:center;gap:8px">
          <span style="font-size:18px">&#128308;</span>
          <span style="font-size:13px;color:#7f1d1d;font-weight:500">7 cases require containment monitoring</span>
        </div>
      </div>
    </div>
  </div>
  <div class="section-label">By Zone</div>
  <div class="row row-1">
    <div class="card">
      <div class="card-title">Quarantine Cases by Zone</div>
      <div class="chart-wrap-tall"><canvas id="axmc_chartByZone"></canvas></div>
    </div>
  </div>
  <div class="section-label">Quarantine Case List</div>
  <div class="row row-1">
    <div class="card">
      <table>
        <thead><tr><th>Case Number</th><th>Civilian</th><th>Zone</th><th>Opened At</th><th>Triage Source</th><th>Status</th></tr></thead>
        <tbody>
          <tr><td><strong>QUA0000001</strong></td><td>Chen, Wei</td><td>Zone Bravo — The Strip</td><td>2026-05-05 07:14</td><td>AI Classified</td><td><span class="badge-open">Open</span></td></tr>
          <tr><td><strong>QUA0000002</strong></td><td>Okafor, Nnamdi</td><td>Zone Bravo — The Strip</td><td>2026-05-05 07:31</td><td>Operator Confirmed</td><td><span class="badge-open">Open</span></td></tr>
          <tr><td><strong>QUA0000003</strong></td><td>Reyes, Carmen</td><td>Zone Bravo — The Strip</td><td>2026-05-05 08:02</td><td>AI Classified</td><td><span class="badge-open">Open</span></td></tr>
          <tr><td><strong>QUA0000004</strong></td><td>Williams, Darnell</td><td>Zone Foxtrot — East LV</td><td>2026-05-05 07:55</td><td>Operator Confirmed</td><td><span class="badge-open">Open</span></td></tr>
          <tr><td><strong>QUA0000005</strong></td><td>Petrov, Aleksei</td><td>Zone Foxtrot — East LV</td><td>2026-05-05 08:18</td><td>AI Classified</td><td><span class="badge-open">Open</span></td></tr>
          <tr><td><strong>QUA0000006</strong></td><td>Santos, Maria</td><td>Zone Echo — North LV</td><td>2026-05-05 08:45</td><td>Operator Confirmed</td><td><span class="badge-open">Open</span></td></tr>
          <tr><td><strong>QUA0000007</strong></td><td>Johnson, Marcus</td><td>Zone Alpha — Downtown</td><td>2026-05-05 09:10</td><td>AI Classified</td><td><span class="badge-open">Open</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    new Chart(document.getElementById('axmc_chartByZone'), { type: 'bar', data: { labels: ['The Strip','East Las Vegas','North Las Vegas','Downtown','Summerlin','Henderson','Spring Valley','Enterprise'], datasets: [{ label: 'Cases', data: [3,2,1,1,0,0,0,0], backgroundColor: ['#ef4444','#ef4444','#ef4444','#ef4444','#e2e8f0','#e2e8f0','#e2e8f0','#e2e8f0'], borderRadius: 6, barPercentage: 0.55 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#f1f5f9' }, ticks: { stepSize: 1, precision: 0 }, min: 0, max: 4 } } } });
  })();
</script>`

const htmlMission = `<style>
  .axmc * { box-sizing: border-box; }
  .axmc { font-family: "Segoe UI", system-ui, sans-serif; color: #1e293b; padding: 24px; background: #f1f5f9; }
  .axmc .section-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; color: #94a3b8; margin-bottom: 14px; }
  .axmc .row { display: grid; gap: 20px; margin-bottom: 24px; }
  .axmc .row-3 { grid-template-columns: repeat(3, 1fr); }
  .axmc .row-1 { grid-template-columns: 1fr; }
  .axmc .card { background: #fff; border-radius: 10px; border: 1px solid #e2e8f0; padding: 20px 24px; box-shadow: 0 1px 3px rgba(0,0,0,.05); }
  .axmc .card-title { font-size: 13px; font-weight: 700; color: #1e293b; padding-bottom: 12px; margin-bottom: 16px; border-bottom: 2px solid; display: flex; align-items: center; gap: 8px; }
  .axmc .card-title.zones { border-color: #22c55e; }
  .axmc .card-title.rescue { border-color: #ef4444; }
  .axmc .card-title.triage { border-color: #6366f1; }
  .axmc .card-title.log { border-color: #e2e8f0; }
  .axmc .status-row { display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap; }
  .axmc .status-chip { flex: 1; min-width: 70px; padding: 10px 8px; border-radius: 8px; text-align: center; }
  .axmc .status-chip-val { font-size: 22px; font-weight: 700; line-height: 1; }
  .axmc .status-chip-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; margin-top: 3px; }
  .axmc .chip-safe { background: #f0fdf4; color: #15803d; }
  .axmc .chip-atrisk { background: #fffbeb; color: #b45309; }
  .axmc .chip-evac { background: #fef2f2; color: #b91c1c; }
  .axmc .chip-closed { background: #f8fafc; color: #475569; }
  .axmc .chip-critical { background: #fef2f2; color: #b91c1c; }
  .axmc .chip-high { background: #fffbeb; color: #b45309; }
  .axmc .chip-medium { background: #eff6ff; color: #1d4ed8; }
  .axmc .chip-cleared { background: #f0fdf4; color: #15803d; }
  .axmc .chip-medical { background: #fffbeb; color: #b45309; }
  .axmc .chip-quarantine { background: #fef2f2; color: #b91c1c; }
  .axmc .chip-manual { background: #f8fafc; color: #475569; }
  .axmc .chart-wrap-sm { position: relative; height: 130px; }
  .axmc .legend-sm { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
  .axmc .legend-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #475569; }
  .axmc .legend-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .axmc .metric-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #f1f5f9; }
  .axmc .metric-row:last-child { border-bottom: none; }
  .axmc .metric-label { font-size: 12px; color: #475569; }
  .axmc .metric-val { font-size: 16px; font-weight: 700; }
  .axmc .commander-banner { background: linear-gradient(135deg,#1e293b 0%,#0f172a 100%); color: #fff; border-radius: 10px; padding: 20px 28px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; }
  .axmc .commander-banner h2 { font-size: 15px; font-weight: 700; letter-spacing: .03em; }
  .axmc .commander-banner p { font-size: 12px; color: #94a3b8; margin-top: 3px; }
  .axmc .incident-level { padding: 6px 16px; border-radius: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; background: #ef4444; color: #fff; }
  .axmc .event-log { font-size: 12px; }
  .axmc .event-item { display: flex; gap: 12px; padding: 9px 0; border-bottom: 1px solid #f1f5f9; align-items: flex-start; }
  .axmc .event-item:last-child { border-bottom: none; }
  .axmc .event-time { color: #94a3b8; white-space: nowrap; min-width: 46px; padding-top: 1px; }
  .axmc .event-dot { width: 8px; height: 8px; border-radius: 50%; margin-top: 3px; flex-shrink: 0; }
  .axmc .event-text { color: #475569; flex: 1; }
  @media (max-width: 900px) { .axmc .row-3 { grid-template-columns: 1fr; } .axmc .commander-banner { flex-direction: column; gap: 12px; } }
</style>
<div class="axmc">
  <div class="commander-banner">
    <div>
      <h2>&#9888; INCIDENT ACTIVE — Las Vegas Emergency Operations</h2>
      <p>Commander: Col. James Hartley &nbsp;|&nbsp; Declared: 2026-05-05 04:30 UTC &nbsp;|&nbsp; Duration: 5h 12m</p>
    </div>
    <div>
      <div style="font-size:11px;color:#94a3b8;margin-bottom:4px">Incident Level</div>
      <span class="incident-level">Level 3 — Major</span>
    </div>
  </div>
  <div class="section-label">Zones &middot; Rescue &middot; Triage Summary</div>
  <div class="row row-3">
    <div class="card">
      <div class="card-title zones">&#128506; Zone Status</div>
      <div class="status-row">
        <div class="status-chip chip-safe"><div class="status-chip-val">4</div><div class="status-chip-label">Safe</div></div>
        <div class="status-chip chip-atrisk"><div class="status-chip-val">2</div><div class="status-chip-label">At Risk</div></div>
        <div class="status-chip chip-evac"><div class="status-chip-val">1</div><div class="status-chip-label">Evac'd</div></div>
        <div class="status-chip chip-closed"><div class="status-chip-val">1</div><div class="status-chip-label">Closed</div></div>
      </div>
      <div class="chart-wrap-sm"><canvas id="axmc_chartZoneM6"></canvas></div>
      <div class="legend-sm">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Safe</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>At Risk</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Evacuated</div>
        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div>Closed</div>
      </div>
      <div class="metric-row" style="margin-top:12px"><span class="metric-label">Total Headcount</span><span class="metric-val" style="color:#2563eb">751</span></div>
      <div class="metric-row"><span class="metric-label">Zones at threshold</span><span class="metric-val" style="color:#f59e0b">2</span></div>
    </div>
    <div class="card">
      <div class="card-title rescue">&#128680; Rescue Operations</div>
      <div class="status-row">
        <div class="status-chip chip-critical"><div class="status-chip-val">6</div><div class="status-chip-label">Critical</div></div>
        <div class="status-chip chip-high"><div class="status-chip-val">9</div><div class="status-chip-label">High</div></div>
        <div class="status-chip chip-medium"><div class="status-chip-val">8</div><div class="status-chip-label">Medium</div></div>
      </div>
      <div class="chart-wrap-sm"><canvas id="axmc_chartRescueM6"></canvas></div>
      <div class="legend-sm">
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Critical</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>High</div>
        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6"></div>Medium</div>
      </div>
      <div class="metric-row" style="margin-top:12px"><span class="metric-label">Open requests</span><span class="metric-val" style="color:#2563eb">23</span></div>
      <div class="metric-row"><span class="metric-label">Unassigned</span><span class="metric-val" style="color:#ef4444">4</span></div>
      <div class="metric-row"><span class="metric-label">SLA breaches (active)</span><span class="metric-val" style="color:#ef4444">1</span></div>
    </div>
    <div class="card">
      <div class="card-title triage">&#127973; Triage Summary</div>
      <div class="status-row">
        <div class="status-chip chip-cleared"><div class="status-chip-val">45</div><div class="status-chip-label">Cleared</div></div>
        <div class="status-chip chip-medical"><div class="status-chip-val">28</div><div class="status-chip-label">Medical</div></div>
        <div class="status-chip chip-quarantine"><div class="status-chip-val">7</div><div class="status-chip-label">Quar.</div></div>
        <div class="status-chip chip-manual"><div class="status-chip-val">20</div><div class="status-chip-label">Manual</div></div>
      </div>
      <div class="chart-wrap-sm"><canvas id="axmc_chartTriageM6"></canvas></div>
      <div class="legend-sm">
        <div class="legend-item"><div class="legend-dot" style="background:#22c55e"></div>Cleared</div>
        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div>Medical</div>
        <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div>Quarantine</div>
        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div>Manual</div>
      </div>
      <div class="metric-row" style="margin-top:12px"><span class="metric-label">Total registered</span><span class="metric-val" style="color:#2563eb">100</span></div>
      <div class="metric-row"><span class="metric-label">Pending operator review</span><span class="metric-val" style="color:#6d28d9">18</span></div>
      <div class="metric-row"><span class="metric-label">AI classification rate</span><span class="metric-val" style="color:#22c55e">78%</span></div>
    </div>
  </div>
  <div class="section-label">Recent Activity Log</div>
  <div class="row row-1">
    <div class="card">
      <div class="card-title log">&#128203; System Events — Last 60 Minutes</div>
      <div class="event-log">
        <div class="event-item"><span class="event-time">09:41</span><div class="event-dot" style="background:#ef4444"></div><span class="event-text"><strong>SLA BREACH WARNING</strong> — RES0001023 (Critical) approaching 15-min breach in 3 min. Zone Bravo — The Strip.</span></div>
        <div class="event-item"><span class="event-time">09:38</span><div class="event-dot" style="background:#f59e0b"></div><span class="event-text"><strong>ZONE STATUS</strong> — Zone Foxtrot (East Las Vegas) headcount reached 87% capacity. FL-2 auto-flip threshold at 90%.</span></div>
        <div class="event-item"><span class="event-time">09:35</span><div class="event-dot" style="background:#6366f1"></div><span class="event-text"><strong>QUARANTINE CASE</strong> — QUA0000007 created for CIV0000416 (Marcus Johnson). AI classification: Quarantine. Awaiting operator confirmation.</span></div>
        <div class="event-item"><span class="event-time">09:31</span><div class="event-dot" style="background:#22c55e"></div><span class="event-text"><strong>RESCUE DISPATCHED</strong> — RES0001022 assigned to Delta Rescue Team. Priority: High. Zone Alpha — Downtown.</span></div>
        <div class="event-item"><span class="event-time">09:18</span><div class="event-dot" style="background:#ef4444"></div><span class="event-text"><strong>NEW RESCUE REQUEST</strong> — RES0001025 created. Type: Structural. Priority: Critical. Zone Alpha — Downtown. No team available.</span></div>
        <div class="event-item"><span class="event-time">09:10</span><div class="event-dot" style="background:#3b82f6"></div><span class="event-text"><strong>CIVILIAN REGISTERED</strong> — 5 new civilian intakes processed. 3 cleared, 1 quarantine, 1 manual review.</span></div>
        <div class="event-item"><span class="event-time">08:55</span><div class="event-dot" style="background:#ef4444"></div><span class="event-text"><strong>SUPPLY ALERT</strong> — Medical kits depleted at Zone Bravo — The Strip. Resupply request generated.</span></div>
        <div class="event-item"><span class="event-time">08:42</span><div class="event-dot" style="background:#f59e0b"></div><span class="event-text"><strong>ZONE STATUS</strong> — Zone Bravo (The Strip) headcount reached 91% — status automatically flipped to AT RISK by FL-2.</span></div>
      </div>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
  (function() {
    var o = { cutout: '65%', plugins: { legend: { display: false } }, responsive: true, maintainAspectRatio: false };
    new Chart(document.getElementById('axmc_chartZoneM6'), { type: 'doughnut', data: { labels: ['Safe','At Risk','Evacuated','Closed'], datasets: [{ data: [4,2,1,1], backgroundColor: ['#22c55e','#f59e0b','#ef4444','#6b7280'], borderWidth: 0, hoverOffset: 4 }] }, options: o });
    new Chart(document.getElementById('axmc_chartRescueM6'), { type: 'doughnut', data: { labels: ['Critical','High','Medium'], datasets: [{ data: [6,9,8], backgroundColor: ['#ef4444','#f59e0b','#3b82f6'], borderWidth: 0, hoverOffset: 4 }] }, options: o });
    new Chart(document.getElementById('axmc_chartTriageM6'), { type: 'doughnut', data: { labels: ['Cleared','Medical','Quarantine','Manual'], datasets: [{ data: [45,28,7,20], backgroundColor: ['#22c55e','#f59e0b','#ef4444','#6b7280'], borderWidth: 0, hoverOffset: 4 }] }, options: o });
  })();
</script>`

// ─── Dashboard ────────────────────────────────────────────────────────────────

Dashboard({
    $id: Now.ID['apoc_mission_control_dashboard'],
    name: 'Mission Control Overview',
    tabs: [
        {
            $id: Now.ID['apoc_dash_tab_overview'],
            name: 'Overview',
            widgets: [{
                $id: Now.ID['apoc_rpt_html_overview'],
                component: 'rich-text',
                componentProps: { content: htmlOverview },
                height: 80,
                width: 24,
                position: { x: 0, y: 0 },
            }],
        },
        {
            $id: Now.ID['apoc_dash_tab_zones'],
            name: 'M1 — Zone Management',
            widgets: [{
                $id: Now.ID['apoc_rpt_html_zones'],
                component: 'rich-text',
                componentProps: { content: htmlZones },
                height: 100,
                width: 24,
                position: { x: 0, y: 0 },
            }],
        },
        {
            $id: Now.ID['apoc_dash_tab_rescue'],
            name: 'M2 — Rescue Dispatch',
            widgets: [{
                $id: Now.ID['apoc_rpt_html_rescue'],
                component: 'rich-text',
                componentProps: { content: htmlRescue },
                height: 100,
                width: 24,
                position: { x: 0, y: 0 },
            }],
        },
        {
            $id: Now.ID['apoc_dash_tab_civilian'],
            name: 'M3 — Civilian Intake',
            widgets: [{
                $id: Now.ID['apoc_rpt_html_civilian'],
                component: 'rich-text',
                componentProps: { content: htmlCivilian },
                height: 120,
                width: 24,
                position: { x: 0, y: 0 },
            }],
        },
        {
            $id: Now.ID['apoc_dash_tab_supply'],
            name: 'M4 — Supply Chain',
            widgets: [{
                $id: Now.ID['apoc_rpt_html_supply'],
                component: 'rich-text',
                componentProps: { content: htmlSupply },
                height: 120,
                width: 24,
                position: { x: 0, y: 0 },
            }],
        },
        {
            $id: Now.ID['apoc_dash_tab_quarantine'],
            name: 'M5 — Quarantine',
            widgets: [{
                $id: Now.ID['apoc_rpt_html_quarantine'],
                component: 'rich-text',
                componentProps: { content: htmlQuarantine },
                height: 110,
                width: 24,
                position: { x: 0, y: 0 },
            }],
        },
        {
            $id: Now.ID['apoc_dash_tab_mission'],
            name: 'M6 — Mission Control',
            widgets: [{
                $id: Now.ID['apoc_rpt_html_mission'],
                component: 'rich-text',
                componentProps: { content: htmlMission },
                height: 120,
                width: 24,
                position: { x: 0, y: 0 },
            }],
        },
    ],
    visibilities: [{
        $id: Now.ID['apoc_dash_visibility'],
        experience: missionControlWorkspace,
    }],
    permissions: [],
})
