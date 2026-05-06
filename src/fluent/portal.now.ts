import '@servicenow/sdk/global'
import { ServicePortal, SPTheme, SPPage, SPWidget } from '@servicenow/sdk/core'

// ─── Theme ────────────────────────────────────────────────────────────────────

const apocTheme = SPTheme({
    $id: Now.ID['sp_theme_apoc'],
    name: 'ApocalypseNow Dark',
    customCss: `
        $brand-primary: #dc2626;
        $body-bg: #0f0f0f;
        $navbar-default-bg: #111111;
        $navbar-default-border: #1f1f1f;
        $navbar-default-color: #f5f5f5;
        $navbar-default-link-color: #d1d5db;
        $navbar-default-link-active-color: #ef4444;
        $text-color: #f5f5f5;
        $link-color: #ef4444;
    `,
})

// ─── Widgets ──────────────────────────────────────────────────────────────────

const zoneGridWidget = SPWidget({
    $id: Now.ID['sp_widget_zone_grid'],
    id: 'apoc-zone-grid',
    name: 'Apoc Zone Grid',
    description: 'Live evacuation zone status board with capacity bars. Auto-refreshes every 30s.',
    serverScript: Now.include('../server/sp-zone-grid.server.js'),
    clientScript: Now.include('../server/sp-zone-grid.client.js'),
    htmlTemplate: Now.include('../server/sp-zone-grid.html'),
    customCss: Now.include('../server/sp-zone-grid.css'),
    public: true,
})

const districtMapWidget = SPWidget({
    $id: Now.ID['sp_widget_district_map'],
    id: 'apoc-district-map',
    name: 'Apoc District Map',
    description: 'Live Las Vegas district map with colour-coded zone statuses, active alerts, and civilian CTA. Auto-refreshes every 15s.',
    serverScript: Now.include('../server/sp-district-map.server.js'),
    clientScript: Now.include('../server/sp-district-map.client.js'),
    htmlTemplate: Now.include('../server/sp-district-map.html'),
    customCss: Now.include('../server/sp-district-map.css'),
    public: true,
})

const registerWidget = SPWidget({
    $id: Now.ID['sp_widget_register'],
    id: 'apoc-register-form',
    name: 'Apoc Civilian Register',
    description: 'Public self-registration form for civilians. Creates x_snc_apocalypse_0_civilian record.',
    serverScript: Now.include('../server/sp-register.server.js'),
    clientScript: Now.include('../server/sp-register.client.js'),
    htmlTemplate: Now.include('../server/sp-register.html'),
    customCss: Now.include('../server/sp-register.css'),
    public: true,
})

// ─── Pages ────────────────────────────────────────────────────────────────────

SPPage({
    pageId: 'apoc-map',
    title: 'Las Vegas District Status Map',
    public: true,
    containers: [
        {
            $id: Now.ID['sp_cont_map'],
            order: 1,
            rows: [
                {
                    $id: Now.ID['sp_row_map'],
                    order: 1,
                    columns: [
                        {
                            $id: Now.ID['sp_col_map'],
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: Now.ID['sp_inst_map'],
                                    widget: districtMapWidget,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

const zonesPage = SPPage({
    pageId: 'apoc-zones',
    title: 'Evacuation Zone Status',
    public: true,
    containers: [
        {
            $id: Now.ID['sp_cont_zones'],
            order: 1,
            rows: [
                {
                    $id: Now.ID['sp_row_zones'],
                    order: 1,
                    columns: [
                        {
                            $id: Now.ID['sp_col_zones'],
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: Now.ID['sp_inst_zone_grid'],
                                    widget: zoneGridWidget,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

const registerPage = SPPage({
    pageId: 'apoc-register',
    title: 'Civilian Registration',
    public: true,
    containers: [
        {
            $id: Now.ID['sp_cont_register'],
            order: 1,
            rows: [
                {
                    $id: Now.ID['sp_row_register'],
                    order: 1,
                    columns: [
                        {
                            $id: Now.ID['sp_col_register'],
                            sizeSm: 12,
                            order: 1,
                            instances: [
                                {
                                    $id: Now.ID['sp_inst_register'],
                                    widget: registerWidget,
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

// ─── Portal ───────────────────────────────────────────────────────────────────

ServicePortal({
    $id: Now.ID['sp_portal_apoc'],
    urlSuffix: 'apoc',
    title: 'ApocalypseNow — Emergency Response',
    theme: apocTheme,
    homePage: zonesPage,
    // zonesPage and registerPage referenced here so they are included in the build
    loginPage: registerPage,
})
