import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    apoc_app_menu: {
                        table: 'sys_app_application'
                        id: '1dd62048eddb4a4fab13c729fc54aa90'
                    }
                    apoc_applicability: {
                        table: 'sys_ux_applicability'
                        id: 'e7e07098c6d04d2bbc5365292b883094'
                    }
                    apoc_dash_civ_h1: {
                        table: 'par_dashboard_widget'
                        id: '774b2796e95a4a57b885a1d15a94c4cb'
                        deleted: true
                    }
                    apoc_dash_civ_info: {
                        table: 'par_dashboard_widget'
                        id: 'e64e04d755ed400c8410328ab4c3a320'
                        deleted: true
                    }
                    apoc_dash_civ_viz_stub: {
                        table: 'par_dashboard_widget'
                        id: '0cd2f9c0adfd4ba9825336cfab1363c1'
                        deleted: true
                    }
                    apoc_dash_mission_h1: {
                        table: 'par_dashboard_widget'
                        id: '050ae24af69b4f91bb8b9cc077af5c77'
                        deleted: true
                    }
                    apoc_dash_mission_links: {
                        table: 'par_dashboard_widget'
                        id: 'ee4bbe7e4a8848339fc86e17e7f05634'
                        deleted: true
                    }
                    apoc_dash_mission_viz_stub: {
                        table: 'par_dashboard_widget'
                        id: '53ce64c76cfc40cfa44f1f6fb7b0b813'
                        deleted: true
                    }
                    apoc_dash_quar_h1: {
                        table: 'par_dashboard_widget'
                        id: 'e3f99f93e886458aba74baefec4dd6c4'
                        deleted: true
                    }
                    apoc_dash_quar_info: {
                        table: 'par_dashboard_widget'
                        id: '6ef34bf1855247e19402cfd94ff83a3b'
                        deleted: true
                    }
                    apoc_dash_quar_viz_stub: {
                        table: 'par_dashboard_widget'
                        id: 'f25d43b668314dcd85e9d8a95497aae2'
                        deleted: true
                    }
                    apoc_dash_rescue_h1: {
                        table: 'par_dashboard_widget'
                        id: 'd7e9e70c44bc41be8119c86f1d2ece43'
                        deleted: true
                    }
                    apoc_dash_rescue_info: {
                        table: 'par_dashboard_widget'
                        id: '49ea42816fd44e73b307de51ceb2d1b8'
                        deleted: true
                    }
                    apoc_dash_rescue_viz_stub: {
                        table: 'par_dashboard_widget'
                        id: 'bc5821ef36aa4683bd5bf6d8368dfe1c'
                        deleted: true
                    }
                    apoc_dash_supply_h1: {
                        table: 'par_dashboard_widget'
                        id: '174d771543ee495f98a89663849b0054'
                        deleted: true
                    }
                    apoc_dash_supply_info: {
                        table: 'par_dashboard_widget'
                        id: '98404f6b11174fe5a942a9e84460f1f4'
                        deleted: true
                    }
                    apoc_dash_supply_viz_stub: {
                        table: 'par_dashboard_widget'
                        id: '88b6834e180446b8bc4a17f39b417d86'
                        deleted: true
                    }
                    apoc_dash_tab_civilian: {
                        table: 'par_dashboard_tab'
                        id: '1f224433f723482dadb30283c1b4f2ba'
                    }
                    apoc_dash_tab_mission: {
                        table: 'par_dashboard_tab'
                        id: '59763e7664d640d290965e87d5b60e80'
                    }
                    apoc_dash_tab_overview: {
                        table: 'par_dashboard_tab'
                        id: '48f1bba9d4f8446986ed06a5d832756b'
                        deleted: false
                    }
                    apoc_dash_tab_quarantine: {
                        table: 'par_dashboard_tab'
                        id: '273886400fa9438aa4be28f054fbf7b5'
                    }
                    apoc_dash_tab_rescue: {
                        table: 'par_dashboard_tab'
                        id: '16d5240349154f688424b37696e4303b'
                    }
                    apoc_dash_tab_supply: {
                        table: 'par_dashboard_tab'
                        id: '24d5c930eb344bf9b2ffcc6b0de968a3'
                    }
                    apoc_dash_tab_zones: {
                        table: 'par_dashboard_tab'
                        id: 'bc03a48028034bb1a7d9c87d3fef3d87'
                    }
                    apoc_dash_w_civ_pending: {
                        table: 'par_dashboard_widget'
                        id: 'dbabec8c7bc641b1855a9d08634c3906'
                        deleted: true
                    }
                    apoc_dash_w_heading: {
                        table: 'par_dashboard_widget'
                        id: 'b2772e2edaac431fa4f8d771b4064ee6'
                        deleted: true
                    }
                    apoc_dash_w_quarantine_open: {
                        table: 'par_dashboard_widget'
                        id: '07f465f9621045ec82b095ad8d49cb41'
                        deleted: true
                    }
                    apoc_dash_w_rescue_open: {
                        table: 'par_dashboard_widget'
                        id: '7bc9813667364b68a27b2cbe525cbded'
                        deleted: true
                    }
                    apoc_dash_w_rescue_priority: {
                        table: 'par_dashboard_widget'
                        id: '8d9cea56a3aa4eca82fc9ba7e9138a2b'
                        deleted: true
                    }
                    apoc_dash_w_zone_status: {
                        table: 'par_dashboard_widget'
                        id: '03ed72c454c14b97b671150820af4c40'
                        deleted: true
                    }
                    apoc_dash_w_zones_active: {
                        table: 'par_dashboard_widget'
                        id: '6ddde478877a48729058389ae1fd89dd'
                        deleted: true
                    }
                    apoc_dash_zones_h1: {
                        table: 'par_dashboard_widget'
                        id: '8e132b187ea04f508250dc48853a7135'
                        deleted: true
                    }
                    apoc_dash_zones_info: {
                        table: 'par_dashboard_widget'
                        id: '374b64ea2292493b9ba473feadd678ef'
                        deleted: true
                    }
                    apoc_dash_zones_viz_stub: {
                        table: 'par_dashboard_widget'
                        id: '8f9178c4f3fe488ab434f23e59b718c2'
                        deleted: true
                    }
                    apoc_list_menu_config: {
                        table: 'sys_ux_list_menu_config'
                        id: '36f602fef4964db184a62f983ab53206'
                    }
                    apoc_lm_cat_civilian: {
                        table: 'sys_ux_list_category'
                        id: '21c52bfef6a4413cb436f5d8184357d9'
                    }
                    apoc_lm_cat_mission: {
                        table: 'sys_ux_list_category'
                        id: '416a6c7909134478b21311f725ef06dc'
                    }
                    apoc_lm_cat_ops: {
                        table: 'sys_ux_list_category'
                        id: 'b9333186854f47d09d3c9ffa92b8842a'
                    }
                    apoc_lm_cat_quarantine: {
                        table: 'sys_ux_list_category'
                        id: 'bae0f4ce17cd4c2493633c99101c20aa'
                    }
                    apoc_lm_cat_rescue: {
                        table: 'sys_ux_list_category'
                        id: 'cc6fc0624fa646d085b90f01e5512d8e'
                    }
                    apoc_lm_cat_supply: {
                        table: 'sys_ux_list_category'
                        id: 'aa51db9ed2b44d67be910cc8ed3ea988'
                    }
                    apoc_lm_civ_all: {
                        table: 'sys_ux_list'
                        id: '7f07e8f741454a2eaa0acf7e96153c33'
                    }
                    apoc_lm_civ_all_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'a679a877d94245e6aa30b526a566a4b0'
                    }
                    apoc_lm_civ_manual: {
                        table: 'sys_ux_list'
                        id: 'b99c40f6f2b1405e96169ac0c4db869c'
                    }
                    apoc_lm_civ_manual_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '27666f679cc647948fed9ef25fbb7612'
                    }
                    apoc_lm_civ_pending: {
                        table: 'sys_ux_list'
                        id: '6f1091c16b49475cab618b0d31a08cb1'
                    }
                    apoc_lm_civ_pending_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '65528e98a3da4c20acf193d7ffd6e2c4'
                    }
                    apoc_lm_civ_quar_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '3fee61d2111348b38e0406b6a3c3aa3e'
                    }
                    apoc_lm_civ_quarantine: {
                        table: 'sys_ux_list'
                        id: '1a52bbe49bb94c4c8792bfd470d2fcf6'
                    }
                    apoc_lm_mission_allzones: {
                        table: 'sys_ux_list'
                        id: 'ac880920103b4cab96bfe27268549236'
                    }
                    apoc_lm_mission_allzones_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'f2837cc9a14844538f8fb86db0681394'
                    }
                    apoc_lm_mission_rescue: {
                        table: 'sys_ux_list'
                        id: '3dce6271b8dc445ca003eee1d73d8583'
                    }
                    apoc_lm_mission_rescue_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'f7ffce1438054364a77a93ef886aa2c8'
                    }
                    apoc_lm_mission_triage: {
                        table: 'sys_ux_list'
                        id: '041fe4461be04386842991d6c9d2f8c3'
                    }
                    apoc_lm_mission_triage_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '860dc797d93e4491b212b93d3850b6ed'
                    }
                    apoc_lm_quar_all: {
                        table: 'sys_ux_list'
                        id: 'af187b10e6374cacbbd6e6a655a5197e'
                    }
                    apoc_lm_quar_all_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '73f584f907424fefb657b209c5f98bca'
                    }
                    apoc_lm_quar_open: {
                        table: 'sys_ux_list'
                        id: '93256b63a8724940b252307bb4edc1b6'
                    }
                    apoc_lm_quar_open_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '27085153bcbd4cffba38036d5305d703'
                    }
                    apoc_lm_quar_review: {
                        table: 'sys_ux_list'
                        id: 'e48c30b41e2846d4a55f1b27094f1628'
                    }
                    apoc_lm_quar_review_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '8a1da60e2a294007b8730c1b7d88f628'
                    }
                    apoc_lm_rescue_all: {
                        table: 'sys_ux_list'
                        id: 'e506a51b52ea447f94e01b05b49a0650'
                    }
                    apoc_lm_rescue_all_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'a931fcba775a42179ad33eab1c21891d'
                    }
                    apoc_lm_rescue_crit_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'efa7a6822bcf4fe58caab9e33652aa25'
                    }
                    apoc_lm_rescue_critical: {
                        table: 'sys_ux_list'
                        id: 'c142124d69584268a82b3b36fe9fe80d'
                    }
                    apoc_lm_rescue_open: {
                        table: 'sys_ux_list'
                        id: 'b994c30bae4d49eaa497bf56381b44d8'
                    }
                    apoc_lm_rescue_open_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '490a10cf98224db48179290da8d05335'
                    }
                    apoc_lm_rescue_unassigned: {
                        table: 'sys_ux_list'
                        id: '63ad12e501d546ecb310e3e07c2212a7'
                    }
                    apoc_lm_rescue_unassigned_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '29e862ba1f62443ba9c2f18c43db07e4'
                    }
                    apoc_lm_supply_all: {
                        table: 'sys_ux_list'
                        id: '926ecee4a7ed4a43bc46d0e859ca1f89'
                    }
                    apoc_lm_supply_all_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '038c10d07bce4cd69bdae280d552bfaf'
                    }
                    apoc_lm_supply_low: {
                        table: 'sys_ux_list'
                        id: 'a118a8598bc24373a5aa2bf5cc943f79'
                    }
                    apoc_lm_supply_low_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'ccf53590bb384f8387df2980fcd52b4c'
                    }
                    apoc_lm_zones_active: {
                        table: 'sys_ux_list'
                        id: 'a257c9fb83d5401486a559c4096c527f'
                    }
                    apoc_lm_zones_active_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '63ecee5e3279467e907a11031b06e6c5'
                    }
                    apoc_lm_zones_all: {
                        table: 'sys_ux_list'
                        id: '11f190e41e6f4c5c81dcc2a112e22237'
                    }
                    apoc_lm_zones_all_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'b3e42cc0531143b3b60ee2fe9012f29d'
                    }
                    apoc_lm_zones_atrisk: {
                        table: 'sys_ux_list'
                        id: 'c3f15831653e47d1bd346bdbb93f910f'
                    }
                    apoc_lm_zones_atrisk_app: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '51ba9eb4c93e4705a329562368e59069'
                    }
                    apoc_mission_control_acl: {
                        table: 'sys_security_acl'
                        id: 'db19789884d44dc287f20bc0a2c6f0ee'
                    }
                    apoc_mission_control_dashboard: {
                        table: 'par_dashboard'
                        id: 'ef7098db3fc04f1a8909612070967661'
                    }
                    apoc_mission_control_workspace: {
                        table: 'sys_ux_page_registry'
                        id: '0247d1acf05a4510a4055d2eca4a7436'
                    }
                    apoc_mission_control_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: '53395a080d01414f9d3dde6274fd5897'
                    }
                    apoc_mission_control_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: '8a81bc9b06d543088a7ad2c99ef6938d'
                    }
                    apoc_mission_control_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: '903288fb466243fb91844047ec25ba87'
                    }
                    apoc_mission_control_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '02739de427ff4d6fb7a393a16d383761'
                    }
                    'apoc_mission_control_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: '63dfd3dc2df743fd8401c0e9e17170af'
                    }
                    apoc_mission_control_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '63e6ce7b2bf34df092f1224998eb99bd'
                    }
                    apoc_mission_control_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '82ef78f807814284b52bef991ce53a02'
                    }
                    apoc_mission_control_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: 'dff1a2a71b8f44df850b3bf1a0936747'
                    }
                    apoc_mission_control_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '276baa86740d4772acb94a93aa6fe99d'
                    }
                    apoc_mission_control_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: 'c297a6b8d26240f09ed12e31bab5029a'
                    }
                    apoc_mission_control_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'd7ff3eca3836429aa3fdcab683fa3b6e'
                    }
                    apoc_mission_control_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: 'dfa897df222840bcac523eae11a52563'
                    }
                    apoc_mission_control_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: 'caf777151cdf4b399446871d06a5ad31'
                    }
                    apoc_mission_control_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: '21b8b1b0577749e9ad4d34e8da493c2d'
                    }
                    apoc_mission_control_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: '2cff73a7f80f4026bf707877df632185'
                    }
                    apoc_mission_control_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: '39990f09b2cf4422b3a7fad120d092ef'
                    }
                    apoc_mission_control_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: '11e6e979e6ef45d29673496c73bf0f67'
                    }
                    'apoc_mission_control_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '2b52277ceed24320886b6e813ef78d9b'
                    }
                    apoc_mission_control_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: '790e420c56834e838497a6cc9dc193ff'
                    }
                    apoc_mission_control_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: '9da3d25b562745269e5aae4778d41ec4'
                    }
                    apoc_mission_control_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: '744da1bb841c44de9dc1629842e04ee7'
                    }
                    'apoc_mission_control_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: 'c12568bbe6a141689c599989b1e610ee'
                    }
                    apoc_mod_civilians: {
                        table: 'sys_app_module'
                        id: '600c7c50ba7d454b92571c6e9fcc3bfc'
                    }
                    apoc_mod_mission_control: {
                        table: 'sys_app_module'
                        id: '49aa33ef8a6f42089bf076678f13a9a0'
                    }
                    apoc_mod_quarantine: {
                        table: 'sys_app_module'
                        id: 'd959f4a67aff43068301b199fef858de'
                    }
                    apoc_mod_rescue: {
                        table: 'sys_app_module'
                        id: '42ca24cbc5cb4bbfa8fd2f0eea422ec9'
                    }
                    apoc_mod_rescue_new: {
                        table: 'sys_app_module'
                        id: '55da6b27bd664651a9e4067a146e7c00'
                    }
                    apoc_mod_sep_admin: {
                        table: 'sys_app_module'
                        id: 'da9fa8f9c97843a9b1ba22978492462a'
                    }
                    apoc_mod_sep_civilian: {
                        table: 'sys_app_module'
                        id: 'f7424146c2444dbeb433c11874976985'
                    }
                    apoc_mod_sep_mission: {
                        table: 'sys_app_module'
                        id: '55523deaac5046389fba73cc581d3d72'
                    }
                    apoc_mod_sep_ops: {
                        table: 'sys_app_module'
                        id: '29ddeadb84174197b5af29f7ffd7f8dc'
                    }
                    apoc_mod_supply: {
                        table: 'sys_app_module'
                        id: 'abdd65111a5b43d0ae3b0d3ccb794812'
                    }
                    apoc_mod_triage_pending: {
                        table: 'sys_app_module'
                        id: 'd673ce5c952b484ea50d50cbc0eccca4'
                    }
                    apoc_mod_zone_new: {
                        table: 'sys_app_module'
                        id: '79e07f1a70fd45069ed35ee5d2612cb1'
                    }
                    apoc_mod_zones: {
                        table: 'sys_app_module'
                        id: '1238e17adc4244e8bbc171f3ac06ff9f'
                    }
                    apoc_nav_category: {
                        table: 'sys_app_category'
                        id: '8ff5796350d941af9bf2caa4e0f516df'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '639ed5e163cd4fab9980c40db44028d2'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '8373157788b744aea614ea331a3c02b9'
                    }
                    civilian_001_jane: {
                        table: 'x_snc_apocalypse_0_civilian'
                        id: 'd99ce872458144d399b4f71785bce6a4'
                    }
                    civilian_002_ray: {
                        table: 'x_snc_apocalypse_0_civilian'
                        id: '5b3957d76eca46f1a4cc027e77dae6e2'
                    }
                    civilian_003_marcus: {
                        table: 'x_snc_apocalypse_0_civilian'
                        id: '57816e09302f44a884b3e09251e1f24b'
                    }
                    civilian_004_sofia: {
                        table: 'x_snc_apocalypse_0_civilian'
                        id: '816fa664b0db47ba9d5621c82fa87438'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '0823659d30e34c719ad0714b27696b38'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '9083da7c4247416a9009512450c1046b'
                    }
                    rescue_001: {
                        table: 'x_snc_apocalypse_0_rescue'
                        id: '7a3e050328dc49b09fc923f4688bfe80'
                    }
                    rescue_002: {
                        table: 'x_snc_apocalypse_0_rescue'
                        id: '8addc36d484a4faba2d23f0e21885577'
                    }
                    rescue_003: {
                        table: 'x_snc_apocalypse_0_rescue'
                        id: '323295ad2f3149a3b9145f980b8cc7c7'
                    }
                    rpt_civilian_by_source: {
                        table: 'sys_report'
                        id: '72a53faf11b744ad81035054cef4e5aa'
                    }
                    rpt_civilian_by_status: {
                        table: 'sys_report'
                        id: 'f89b811d9dbd404eab8ad0d99353b4da'
                    }
                    rpt_civilian_by_triage: {
                        table: 'sys_report'
                        id: '30cb382628cb4ae3bb21a4a1f43d8073'
                    }
                    rpt_civilian_pending_count: {
                        table: 'sys_report'
                        id: '9a476a6430864343997538be5327da51'
                    }
                    rpt_civilian_quarantine_count: {
                        table: 'sys_report'
                        id: '6ca48084c661420c9cf5a6123689ee59'
                    }
                    rpt_mc_rescue_priority: {
                        table: 'sys_report'
                        id: '67d056a8547641d1b6b7cfbfb23634c1'
                    }
                    rpt_mc_triage_class: {
                        table: 'sys_report'
                        id: 'ed367f425b4748a9afcaba7406fbd98d'
                    }
                    rpt_mc_zones_status: {
                        table: 'sys_report'
                        id: '61969ecc84a047808137ea4fa2d050d0'
                    }
                    rpt_quarantine_by_status: {
                        table: 'sys_report'
                        id: '14dde9b3a64d47099867cb7f182e277d'
                    }
                    rpt_quarantine_by_zone: {
                        table: 'sys_report'
                        id: 'f5c358f25394475e8d687de03aa7dc4b'
                    }
                    rpt_quarantine_open_count: {
                        table: 'sys_report'
                        id: '3f8ab53302e84b1ba709becc5a05e22c'
                    }
                    rpt_rescue_by_priority: {
                        table: 'sys_report'
                        id: 'a2ac1914dee2432ca7650670cdda536d'
                    }
                    rpt_rescue_by_type: {
                        table: 'sys_report'
                        id: '718fe0cba6b240a582208b5fe2f59f69'
                    }
                    rpt_rescue_critical_count: {
                        table: 'sys_report'
                        id: 'fe8c3a5e2498449a9a5093ac1e666f61'
                    }
                    rpt_rescue_open_count: {
                        table: 'sys_report'
                        id: '714b1a123aa64124b8af5cb5df57498c'
                    }
                    rpt_rescue_unassigned_count: {
                        table: 'sys_report'
                        id: 'da681e10528d411fbae9ca161d1e4850'
                    }
                    rpt_supply_by_status: {
                        table: 'sys_report'
                        id: 'f8a25301efcf49b494f291cbd7ca3f5a'
                    }
                    rpt_supply_by_type: {
                        table: 'sys_report'
                        id: '17d05f6c0c5541dd9e8d9c02ab070918'
                    }
                    rpt_supply_critical_count: {
                        table: 'sys_report'
                        id: 'd7fbb5f7419440749c2df85c6d14eb39'
                    }
                    rpt_zones_active_count: {
                        table: 'sys_report'
                        id: '66753805c9314022af6d68d805100222'
                    }
                    rpt_zones_atrisk_count: {
                        table: 'sys_report'
                        id: 'a9b5d1eee9bb4c62b8663eda42b17af8'
                    }
                    rpt_zones_by_status: {
                        table: 'sys_report'
                        id: '998c4b85a77644f487a16126dc38dc2f'
                    }
                    rpt_zones_headcount_bar: {
                        table: 'sys_report'
                        id: 'fdb5537028894abb848df2872d7a315b'
                    }
                    si_rescue_assign: {
                        table: 'sys_script_include'
                        id: 'f7afa06d74aa4249b17d2d096054a167'
                    }
                    si_triage_ai: {
                        table: 'sys_script_include'
                        id: 'c13e13c2d49e47d58d42ad6318daea6f'
                        deleted: false
                    }
                    si_zone_helper: {
                        table: 'sys_script_include'
                        id: 'e5b6be026bd1494a95d3ce52536f45da'
                    }
                    sk_civilian_triage: {
                        table: 'sys_one_extend_capability'
                        id: 'fca04f7d4e3845e6aaa1251299812af9'
                    }
                    sk_civilian_triage__output_error: {
                        table: 'sys_one_extend_definition_attribute'
                        id: 'f134997c827843acaf9da0b99e2bd703'
                    }
                    sk_civilian_triage__output_errorcode: {
                        table: 'sys_one_extend_definition_attribute'
                        id: 'b563417da69b487f8abb2c4dd06f15fc'
                    }
                    sk_civilian_triage__output_provider: {
                        table: 'sys_one_extend_definition_attribute'
                        id: '67354b02b3b645a19860fac5e8be8e0e'
                    }
                    sk_civilian_triage__output_response: {
                        table: 'sys_one_extend_definition_attribute'
                        id: 'ce0e81a3f70f4c8f9f5ecedbfa6556ef'
                    }
                    sk_civilian_triage__output_status: {
                        table: 'sys_one_extend_definition_attribute'
                        id: '5812d3bb210a44c9a44ac97239cf1cd7'
                    }
                    sk_triage_input_symptoms: {
                        table: 'sys_one_extend_definition_attribute'
                        id: 'a00624990d884b54bd5f75a9fa2f0cfe'
                    }
                    sk_triage_prompt_v1: {
                        table: 'sys_generative_ai_config'
                        id: '73c70b171a344938913fb8b5eae6a0fb'
                    }
                    sk_triage_user_access: {
                        table: 'sys_security_acl'
                        id: '588bca8cd0e24013ae2b790a5ede696f'
                    }
                    sp_col_map: {
                        table: 'sp_column'
                        id: '8cafeafd280c44358baaee3a754ba5af'
                    }
                    sp_col_register: {
                        table: 'sp_column'
                        id: '66fc20a2748e45cc9095d2622ade60ef'
                    }
                    sp_col_zones: {
                        table: 'sp_column'
                        id: 'e9c2657524bf4d6394eedf77ad27e8d9'
                    }
                    sp_cont_map: {
                        table: 'sp_container'
                        id: 'c44b762b81e34915bf03bd8f95b37500'
                    }
                    sp_cont_register: {
                        table: 'sp_container'
                        id: 'af50dbadec09430cb1975f878b65f370'
                    }
                    sp_cont_zones: {
                        table: 'sp_container'
                        id: 'd355e5982fcd4178a5e2ac3966fccedf'
                    }
                    sp_inst_map: {
                        table: 'sp_instance'
                        id: '75819ea8487249feb06618b7016015b9'
                    }
                    sp_inst_register: {
                        table: 'sp_instance'
                        id: 'd857935857694033b2bdf5604fca8898'
                    }
                    sp_inst_zone_grid: {
                        table: 'sp_instance'
                        id: 'dfc6ec2dc4cb41ea955c9189fc948109'
                    }
                    sp_portal_apoc: {
                        table: 'sp_portal'
                        id: '5b59bb60a49d433e952f6ad305da4fbb'
                    }
                    sp_row_map: {
                        table: 'sp_row'
                        id: '6f64c9ab83c94a5a9873b4014258f009'
                    }
                    sp_row_register: {
                        table: 'sp_row'
                        id: 'e6262a321ada49238007da4e2bdae6d4'
                    }
                    sp_row_zones: {
                        table: 'sp_row'
                        id: '51617ec18bb441acb59038a92869c8f8'
                    }
                    sp_theme_apoc: {
                        table: 'sp_theme'
                        id: 'd591d079177147b9bfb6c3e21048b693'
                    }
                    sp_widget_district_map: {
                        table: 'sp_widget'
                        id: 'a6fac874dfb54dbda8addb28f766f44f'
                    }
                    sp_widget_register: {
                        table: 'sp_widget'
                        id: '8d08aec66e46442eb6f94e080dc764a6'
                    }
                    sp_widget_zone_grid: {
                        table: 'sp_widget'
                        id: 'f7bf5478b301415fab8112b7d8dfa19d'
                    }
                    src_server_ApocRescueAssign_server_js: {
                        table: 'sys_module'
                        id: '9772305261f34595bc87dbcc3e4b6545'
                    }
                    src_server_ApocTriageAI_server_js: {
                        table: 'sys_module'
                        id: '7f32897270364278a27253cd3c02aab6'
                    }
                    src_server_ApocZoneHelper_server_js: {
                        table: 'sys_module'
                        id: '24da9942ea364a36b06f81bac5357d48'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'bc7cc8c955e843d1baa6068489cc5342'
                    }
                    'src_server_sp-district-map_client_js': {
                        table: 'sys_module'
                        id: '501bb17b629f4f69b57c2c8b4255c5a2'
                    }
                    'src_server_sp-district-map_server_js': {
                        table: 'sys_module'
                        id: '2bdd059e91fa457d9d5e3d66112c2c25'
                    }
                    'src_server_sp-register_client_js': {
                        table: 'sys_module'
                        id: '7ae14839bee340a98c1db8759b4384a4'
                    }
                    'src_server_sp-register_server_js': {
                        table: 'sys_module'
                        id: '5b08c695fb0f4aeea826f7643840c40d'
                    }
                    'src_server_sp-zone-grid_client_js': {
                        table: 'sys_module'
                        id: '9504ab3108ef4eb3a9356af564f203bc'
                    }
                    'src_server_sp-zone-grid_server_js': {
                        table: 'sys_module'
                        id: '3c5e70773a6c40aabfa8e277ef85275a'
                    }
                    zone_a_strip: {
                        table: 'x_snc_apocalypse_0_zone'
                        id: '1a82a354cf314feda4046d24734b076d'
                    }
                    zone_b_fremont: {
                        table: 'x_snc_apocalypse_0_zone'
                        id: 'be5f6e2b868844e995e66a610d819fc3'
                    }
                    zone_c_henderson: {
                        table: 'x_snc_apocalypse_0_zone'
                        id: '5d34fa32cfe94b978bbd839587d26ae2'
                    }
                    zone_d_summerlin: {
                        table: 'x_snc_apocalypse_0_zone'
                        id: 'b8d0c3d1510545788eb779987bf20fc3'
                    }
                    zone_e_northlv: {
                        table: 'x_snc_apocalypse_0_zone'
                        id: 'ac6f86bd783f402c8b199ef8ca552a63'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '00c18a051e3a47bc97c74b7723516bcb'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'request_type'
                            value: 'medical_emergency'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '01cde95c41064eca96da590cf20b1266'
                        key: {
                            sys_ui_form: {
                                id: '6f62397ae8dc471682800f8caddfec64'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '020f5c83b4494876a9fba53b32370f43'
                        key: {
                            list_id: {
                                id: 'f7be785c0c8742e4bfd480e7a588c259'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supply_type'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '022b2d860c224b0ca6c5fd2370985b5d'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            caption: 'Civilian Information'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '03eb64f3f951404a96d77718162377e5'
                        key: {
                            resource_mapping: {
                                id: 'afd4777bbc34466cae0650828e993c78'
                                key: {
                                    parent_capability: 'fca04f7d4e3845e6aaa1251299812af9'
                                    resource_capability: '51d095f77f211210210ca65c4d866591'
                                    resource_name: 'SanitizeInput'
                                }
                            }
                            resource_attribute_name: '0bd1117b7f211210210ca65c4d8665ed'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '04f4bb913bad4789ad960913efebc598'
                        key: {
                            list_id: {
                                id: '921aa4c4a826492283698492a0cefdbc'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'triage_class'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '053e258df8a24b468967cfd473f7290f'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0683831fb17f4cbf9fc5faecfd7f24bf'
                        key: {
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '06c87261a0c541209e07bd512623c045'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '081070af1bfa4f2c915e67fb7efd7492'
                        key: {
                            sys_ui_form: {
                                id: 'd0bbdf90b88f4179918a001b0da59dfd'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5b135748d3224224a16886053b17fed8'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Public Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_attribute_mapping'
                        id: '08112f96544b431ea436a1b41fcf901f'
                        key: {
                            resource_mapping: {
                                id: 'afd4777bbc34466cae0650828e993c78'
                                key: {
                                    parent_capability: 'fca04f7d4e3845e6aaa1251299812af9'
                                    resource_capability: '51d095f77f211210210ca65c4d866591'
                                    resource_name: 'SanitizeInput'
                                }
                            }
                            resource_attribute_name: 'a3911d3b7f211210210ca65c4d86651b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '08f40dc8097845a98d4510640ef43b90'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_status'
                            value: 'available'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '096f5cd4fe0843e89c51a7b780eb3782'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_status'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0b1a4d2f22894951b3b648556adb93ad'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            caption: 'Capacity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '0b3e48e4200a4168b32e94599bcb1ca3'
                        key: {
                            sys_ui_form: {
                                id: '6f62397ae8dc471682800f8caddfec64'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '7cbc719fc4c2470ca1d1e85c7c18b924'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0b896e5cbf594f2ebcb53c43ce8f651b'
                        key: {
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'opened_at'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0c998c2f7cd246e181e75a7a78fe1d2f'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0cc766d4b7e5431abac100b89d35d9d4'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0fa92e74fac24c0485beb3d013a256f3'
                        key: {
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'confirmed_by'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '109b91cbc9af4188a10de8f7538a7ef2'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '111ac58c4e6e403693fea17510580c69'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12fe0f63ccd94bd6ad6862c8ed792b99'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: '132c1af4715f4b25963e05bef240b915'
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            experience: '0247d1acf05a4510a4055d2eca4a7436'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1489d49ea83c4f36888247d11ecc4374'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_type'
                            value: 'food'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '14ec1d33c17544e8867b1642e34f0fcd'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'zone'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '16a3d9b56b034f809b87cac3c2876097'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_commander'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1764f649e7ed42529f46b85bc2bb334a'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone_requested'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '17795b7cc2bc430baf4de1307b565d60'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            caption: 'Triage Classification'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '18a1fb6a7cf24e8ab470d1201af6d82d'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contact_info'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '18aa25f67df647928b3a3d9f0c68b88d'
                        key: {
                            list_id: {
                                id: '67a5e8a501b54ef4af82acfb198be161'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'capacity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1a0a53e89d4b4e849581715789ebeaf9'
                        key: {
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '1abf4459ad654dfda5b2770669db9123'
                        key: {
                            list_id: {
                                id: '921aa4c4a826492283698492a0cefdbc'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b7d9bea3bcd49f6bc4322105a5f0094'
                        key: {
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1cdbd1f92a4e47bdabaf204bc18813a4'
                        key: {
                            sys_ui_section: {
                                id: '0b1a4d2f22894951b3b648556adb93ad'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Capacity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'capacity'
                            position: '1'
                        }
                    },
                    {
                        table: 'sn_nowassist_skill_config_status'
                        id: '1d5f82e0d9ef4abb84508e9668d13f74'
                        key: {
                            skill_config: {
                                id: 'a07659b6c87748c988cff571e7bb278d'
                                key: {
                                    skill_id: 'fca04f7d4e3845e6aaa1251299812af9'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1dacaae7f05c43fe96e6e92f1ee7a75d'
                        key: {
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '224da22a6c9c479e93f618581aae7aae'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'case_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '229a0547e21c4e3cb9709768b8d516ac'
                        key: {
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '22b24e604c8f4544887a6d84681ab619'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'full_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '23fe3570f441480ab01efbb2f3973760'
                        key: {
                            list_id: {
                                id: '67a5e8a501b54ef4af82acfb198be161'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'zone_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2431249085b24833a8a2d89e6a9c4211'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'contact_info'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2463fc4cfc8a41d79a8493da754774a9'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24988c4e36d14768aca98c1c6ae5fa9a'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_reasoning'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '262424ddd44e449290ad4557b1c62ee5'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            caption: 'Request Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '27343988beb040b2876423845a04607c'
                        key: {
                            list_id: {
                                id: '921aa4c4a826492283698492a0cefdbc'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'civilian_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '27ff787997ab483cad773b1e52f627b5'
                        key: {
                            sys_ui_section: {
                                id: '7cbc719fc4c2470ca1d1e85c7c18b924'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '292643e3b8d749f78678871fddbf0c21'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '299cdc4ccdfa4645aa74d5ea949c414f'
                        key: {
                            sys_ui_section: {
                                id: '0b1a4d2f22894951b3b648556adb93ad'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Capacity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2ae808ab7df747ccb73b307b52c602b5'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_class'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b004ae790bc4f8ca0d25e04a4250592'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c1e1c51c3704a5da4875a20573503c7'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_class'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2dd10636f14e41eea4fa31bb9faec485'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'civilian'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '304c9537d8ff47f0b719f1dc65fb3817'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_one_extend_capability_definition'
                        id: '324b9a5531af491eb3cbacbc6f59ee83'
                        key: {
                            capability: 'fca04f7d4e3845e6aaa1251299812af9'
                            api: '936e514a53b3b110f028ddeeff7b128c'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_edge'
                        id: '3252e14d13ef41ab83d91505e2e3a574'
                        key: {
                            internal_name: 'SanitizeInput__ApocCivilianTriage'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '33eeb606481343159eb5cc1c890afe2f'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '33f6211431c8483fb37307c70d51f858'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'civilian_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '33fc2b3bcee24c9badc80196b999524d'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3707198bdef64f08be677710671eca2b'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'request_type'
                            value: 'person_trapped'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '388e11f2847148b6a5e4821f23604934'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_source'
                            value: 'manual_override'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39d6b9733b4d42948578ee24299a222b'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '39fdc8c127c7400fbde98663cd8f17e0'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'request_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_gen_ai_skill_config'
                        id: '3a54a60fd63048ed913cbc6d5c517ae2'
                        key: {
                            skill_id: '490bfb7d7f1149efb4e32fe8ba732e14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3ab2042b0e1a4135b6077f7da560951c'
                        key: {
                            sys_ui_section: {
                                id: '5b135748d3224224a16886053b17fed8'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Public Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'public_notes'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3af20abf922b4839b5f18a7eb8e638f8'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_mapping'
                        id: '3bbb502e3d404823bc6122b180d01f59'
                        key: {
                            parent_capability: 'fca04f7d4e3845e6aaa1251299812af9'
                            resource_capability: 'fca04f7d4e3845e6aaa1251299812af9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3c3f92c566d34dfaa7463c973467de9d'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'civilian_status'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3d9febd23c7a4f79ac8c205f2eabd2cf'
                        key: {
                            list_id: {
                                id: '921aa4c4a826492283698492a0cefdbc'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'triage_source'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3e2a52cb2d2e4f4199140aa6153924c2'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f71b30236b1415191ae91fbe79f8ea7'
                        key: {
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '3f992b1a80d143b49e40b5f4d98442c5'
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            dashboard_tab: '16d5240349154f688424b37696e4303b'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3fe2bca59de24b16b7b126398a219503'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'zone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3feef17e217548b89c25f4d4633ee3d2'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '40b95f7d631f4eaa8260d1364f34079b'
                        key: {
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'case_status'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40fb9d3483c14fbc8ddbc9b99d64916c'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '417dbe50a8824aca94c9a1615fa33997'
                        key: {
                            sys_ui_form: {
                                id: '6f62397ae8dc471682800f8caddfec64'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '41961fd611c145ffa1c2ba9998d6cf2e'
                        key: {
                            sys_ui_section: {
                                id: '0b1a4d2f22894951b3b648556adb93ad'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Capacity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '42b9172c6b78423f88565fcedf520345'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone_assigned'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '42fc8d013ddd4754870a2b65f190d7f2'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '43035c96a9e1439bb30993750ea83ed8'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4318e4d2bd0740ef811a189b55b7e07f'
                        key: {
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'district'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '45651b6e55594278833ef31912806e3f'
                        key: {
                            sys_ui_section: {
                                id: '7cbc719fc4c2470ca1d1e85c7c18b924'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4676461f1b5e406bb3024b545e33cd3e'
                        key: {
                            sys_ui_section: {
                                id: 'b91936686938460c957e20c6fa665251'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Symptom Report'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'symptom_text'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_gen_ai_skill'
                        id: '490bfb7d7f1149efb4e32fe8ba732e14'
                        key: {
                            skill_document: 'fca04f7d4e3845e6aaa1251299812af9'
                            skill_table: 'sys_one_extend_capability'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49c8dcf21de44be4ab8e0f360ff8d4d1'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '4be73addad7141d0931728d978360b99'
                        key: {
                            sys_ui_form: {
                                id: '6dd2ce0ae5a2490891de42a4f5e3f13f'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e6dde7a05c042f9bbbb8e39fab24de3'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'confirmed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '4f98c287bd5a4f319f95f0c3d879995b'
                        key: {
                            list_id: {
                                id: 'f7be785c0c8742e4bfd480e7a588c259'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supply_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '50e08e1e8496485f9a8bb6b0402e95da'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '552038d00d2b42b596e9016506a221c2'
                        key: {
                            sys_security_acl: 'db19789884d44dc287f20bc0a2c6f0ee'
                            sys_user_role: {
                                id: '6a92c5ce06d5464ab9d0ab8461481dfb'
                                key: {
                                    name: 'x_snc_apocalypse_0.operator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '55a94f9f9a2848558bda872c177858c7'
                        key: {
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '55d217b016ae43e58886e1f7acea1982'
                        key: {
                            sys_ui_form: {
                                id: '9bbf0eedd09d4d89b283579e4f528299'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '5643873e37194c69bafd50b3eb086634'
                        key: {
                            list_id: {
                                id: 'f7be785c0c8742e4bfd480e7a588c259'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'zone'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '5785e98d89324d5a9907d220475eee5e'
                        key: {
                            sys_ui_form: {
                                id: 'd0bbdf90b88f4179918a001b0da59dfd'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58440e9724ce40c8b5e915ed5934498d'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '585da1e56d4042b8bfa82c4d5d68a74a'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_status'
                            value: 'evacuated'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '58d2bde844ed4aae92dd8456ea144831'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '58e3c126e3884757960129d238569055'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            caption: 'Supply Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '5aca9d7bae6b46f7a287bbbb9dd50103'
                        key: {
                            sys_ui_form: {
                                id: '06c87261a0c541209e07bd512623c045'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a2d7cfb3730e4c8b8ccddb7883380122'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5b135748d3224224a16886053b17fed8'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            caption: 'Public Information'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5bf4dcd1dd4d4d7f9c79c3dddddc5ed8'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sn_nowassist_skill_config_var_set'
                        id: '5c1572e167464726991fb777c099f0e2'
                        key: {
                            name: 'View trigger'
                            skill_config: {
                                id: 'a07659b6c87748c988cff571e7bb278d'
                                key: {
                                    skill_id: 'fca04f7d4e3845e6aaa1251299812af9'
                                }
                            }
                            config_type: 'b89b1f0b7f821210076726d6ac86650e'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5c1f9466a9f44de98322287e864b94aa'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_type'
                            value: 'water'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5db5733a70e24c7bb318fb4048cc4a2e'
                        key: {
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5dc90b6b14b54d0e8bffbb1d574a5aa2'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5dd8e0d2dced4ea6a4fdde56b02d8cca'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_type'
                            value: 'medical'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '60b5a5b21d074756a4d043d4b8c6dd89'
                        key: {
                            sys_ui_form: {
                                id: 'd0bbdf90b88f4179918a001b0da59dfd'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '0b1a4d2f22894951b3b648556adb93ad'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Capacity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '62217de99c034b979072dae7b56506ef'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '63798e4c3bd64bfc803128fa94f37466'
                        key: {
                            list_id: {
                                id: 'd0ef44c9e50347c08e183d7ef0ee1ba5'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'civilian'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '64abc60919fe41b3b456e54aa0f70aee'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'location_detail'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_gen_ai_feature_mapping'
                        id: '650385ff94df42e084ab3b8688ed1dfc'
                        key: {
                            feature_name: 'ApocCivilianTriage'
                            document: 'fca04f7d4e3845e6aaa1251299812af9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '651f12f322764840b3ea18a50f0b3996'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_source'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '65920234b9cb4c309b2a23df0464edf3'
                        key: {
                            id: 'apoc-zones'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '6609c4c4557846a1982a85c60189410d'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '668c7a565780451cad1246176aa9a95e'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_class'
                            value: 'cleared'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '67a5e8a501b54ef4af82acfb198be161'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '683fc696cfcc4756ac4fcd0e8bb6696c'
                        key: {
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '695ed87edb9c4eb9b8fb42532babf36d'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_commander'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6987601ad51849ae89ccc0957f4cb4ae'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'case_status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69c123fff20a4ff89872198824e1cda6'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'capacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '6a92c5ce06d5464ab9d0ab8461481dfb'
                        key: {
                            name: 'x_snc_apocalypse_0.operator'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '6afdb63ae6884ff481aa2846b34667c8'
                        key: {
                            list_id: {
                                id: '67a5e8a501b54ef4af82acfb198be161'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'district'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '6dd2ce0ae5a2490891de42a4f5e3f13f'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6e108a8d239745cb845634ed39c97ab9'
                        key: {
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6e59079b2ee54d689a7d121f7030c588'
                        key: {
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6edf240f0d6749839c071808156ff2d1'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'civilian_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6f1f98b28eb7434fa23dfd07b2dc6083'
                        key: {
                            sys_ui_section: {
                                id: '7cbc719fc4c2470ca1d1e85c7c18b924'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '6f62397ae8dc471682800f8caddfec64'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '6f8e546d8683466fb3049bca358bcbca'
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            dashboard_tab: 'bc03a48028034bb1a7d9c87d3fef3d87'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6faa0048228247469b38124f7c3afabe'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_source'
                            value: 'ai'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7033963790344f99a3573e89bf075fd3'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'zone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '71e401ab34fd4abeb1dbc3bee1958a6d'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'request_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '727fe8da7ac24870abc2a158508d545a'
                        key: {
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '745d7cab1dcb44bc92403925715fd0e5'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '749aa9e49e884a8d89323f9680a2e273'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_status'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7552775f790a47069a01b931021f8dfc'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            caption: 'Location'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '76320373637f449d961e83271435208d'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '7769d1b46ee141738c5b2bb7e7e0b10f'
                        key: {
                            id: 'apoc-map'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            caption: 'Case Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '787ad5eace12463e991275ca72dd0706'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'capacity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c795c63b3604b32b06db14a0a768541'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'full_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7cbc719fc4c2470ca1d1e85c7c18b924'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            caption: 'Assignment'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7e505b0be1e645c791c0f274186d6207'
                        key: {
                            list_id: {
                                id: 'f7be785c0c8742e4bfd480e7a588c259'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'supply_name'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7f24dfdaea3e48bdbcd13a70ee5fd7ad'
                        key: {
                            list_id: {
                                id: '67a5e8a501b54ef4af82acfb198be161'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7f6a5be0300843668228e2c64a2f214b'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '809e3c40e4b14627a7bbc95ce68553cb'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'symptom_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '80cf79cbfea94424b0417082afb3ad59'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                        }
                    },
                    {
                        table: 'sys_agent_access_role_configuration'
                        id: '817541abb3684712830d9e8178cd71f8'
                        key: {
                            agent: 'a07659b6c87748c988cff571e7bb278d'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81cf650b416845008833c6db52003825'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'confirmed_by'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8208643fa6934aac858690a32d9f9c51'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '829048b607814c6c89388b8292267372'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_status'
                            value: 'depleted'
                        }
                    },
                    {
                        table: 'sn_nowassist_skill_config_var_set'
                        id: '836d15e7f99a46de8e6f0fd177c2b82e'
                        key: {
                            name: '__delivery_step__'
                            skill_config: {
                                id: 'a07659b6c87748c988cff571e7bb278d'
                                key: {
                                    skill_id: 'fca04f7d4e3845e6aaa1251299812af9'
                                }
                            }
                            config_type: '7dfdff5893b64210aa5730f164891837'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '860bbdeaa42c4f66afaf74fcfac05600'
                        key: {
                            list_id: {
                                id: 'f7be785c0c8742e4bfd480e7a588c259'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'quantity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '86447e88c49746619f2f3e612d284df6'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_status'
                            value: 'at_risk'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '872f5e42fca943749c19864b8bae228a'
                        deleted: false
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            dashboard_tab: '48f1bba9d4f8446986ed06a5d832756b'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8ae142c7c1e04276b3114f920ab034c2'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'civilian_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d5ed55cc5ff40abb44791d10b486bae'
                        key: {
                            sys_ui_section: {
                                id: '7cbc719fc4c2470ca1d1e85c7c18b924'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assignment_group'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8ddf5d2914044f2da5f339fd1f007fd5'
                        key: {
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8eaeb6413789431f80d6f0caddbd068c'
                        key: {
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'civilian'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '8f41726960fe4bccaa01e9634863c480'
                        key: {
                            sys_ui_form: {
                                id: '6f62397ae8dc471682800f8caddfec64'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'a39c5d9bd56244bda4d9291498adb277'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8fe7e2a3621d457899a90cd35f39b173'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'district'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '90efbbd72f274a52803fa919af980e33'
                        key: {
                            id: 'apoc-register'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '90fbeb3991f64dc68440fd51eb1eab25'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'supply_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9112e4fdd8d34d6982f413e02ad79e16'
                        key: {
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '916ce92983df45d9b8c9764ab2779360'
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            dashboard_tab: '1f224433f723482dadb30283c1b4f2ba'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '919d3486d42f446d8b338a7cbffedc75'
                        key: {
                            list_id: {
                                id: 'd0ef44c9e50347c08e183d7ef0ee1ba5'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'case_status'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '921aa4c4a826492283698492a0cefdbc'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '92e2cb06b96a4569ba547421d1bc11e4'
                        key: {
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'location_detail'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_gen_ai_skill_applicability'
                        id: '92e3388875b3438d8c60e353e6584c7d'
                        key: {
                            skill_id: '490bfb7d7f1149efb4e32fe8ba732e14'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '93cef2ea6be14b01af693f013e9f6ad1'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '9486ceeb1843431da277d8a4bc081f23'
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            dashboard_tab: '59763e7664d640d290965e87d5b60e80'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94cabbeb545d43879e9ae34557239b38'
                        key: {
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '975f461742f9417cab125401525a81f5'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'public_notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '97f6ffec222c4b51ac60fdf90f481582'
                        key: {
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'triage_class'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98ee494bce3148c9a47ca945030472e4'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '992be89a409848bd8925d928319c6359'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'civilian'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9a3a5b2cc2434d598577227aa8194bd4'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9a792832945241e9a9a37cc50b4d3aa0'
                        key: {
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9aefb8f170af4f02aa113645398a8337'
                        key: {
                            list_id: {
                                id: 'd0ef44c9e50347c08e183d7ef0ee1ba5'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'zone'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9b06321af5744ae0ab617177e162aece'
                        key: {
                            sys_ui_section: {
                                id: 'a39c5d9bd56244bda4d9291498adb277'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9bbf0eedd09d4d89b283579e4f528299'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9ec571c6a74f499692fb56b7f7d80f63'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9ee606a41973467da500e43ca8b76302'
                        key: {
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'triage_reasoning'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9fa1ef64622e4ceea039118205c77a0a'
                        key: {
                            sys_ui_section: {
                                id: '0b1a4d2f22894951b3b648556adb93ad'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Capacity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'headcount'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '9fa24fd384e84d2da536e47f65e8c1d3'
                        key: {
                            sys_ui_form: {
                                id: '06c87261a0c541209e07bd512623c045'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a00895624a6b482fb55f324f042ec1f9'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_status'
                        }
                    },
                    {
                        table: 'sn_nowassist_skill_config'
                        id: 'a07659b6c87748c988cff571e7bb278d'
                        key: {
                            skill_id: 'fca04f7d4e3845e6aaa1251299812af9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a1a0b64a45e845d296024d9b77fee45f'
                        key: {
                            sys_ui_section: {
                                id: '77ff55a4ebc74a1cb85c4d13b98fd7a6'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    caption: 'Case Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a260bad5490846f28056098b0cf9f6d7'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'zone'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a2d7cfb3730e4c8b8ccddb7883380122'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            caption: 'Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'a378efa89f64463dbd447f091139b075'
                        key: {
                            document_key: {
                                id: '836d15e7f99a46de8e6f0fd177c2b82e'
                                key: {
                                    name: '__delivery_step__'
                                    skill_config: {
                                        id: 'a07659b6c87748c988cff571e7bb278d'
                                        key: {
                                            skill_id: 'fca04f7d4e3845e6aaa1251299812af9'
                                        }
                                    }
                                    config_type: '7dfdff5893b64210aa5730f164891837'
                                }
                            }
                            variable: 'ab5ef79893b64210aa5730f16489185a'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'a39c5d9bd56244bda4d9291498adb277'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            caption: 'Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a4e825831ac64468b171b8cba8018939'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6888594dd1448419561ddfff41e2f5c'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'full_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a6a2d3a480144e01a2ed70f4b89284bf'
                        key: {
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone_status'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a730f638992f4441ad127f7cd74d4979'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'case_status'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a903c45396874626883df13030fb0532'
                        key: {
                            list_id: {
                                id: '921aa4c4a826492283698492a0cefdbc'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'sys_created_on'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'a9a6a03f8fca4a2ba3532f30860a7ee8'
                        key: {
                            sys_ui_form: {
                                id: 'd0bbdf90b88f4179918a001b0da59dfd'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'c5562431b96248bda62ff9de47da0e88'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'aae660e1a369494482a8a8d78a174316'
                        key: {
                            role: {
                                id: '6a92c5ce06d5464ab9d0ab8461481dfb'
                                key: {
                                    name: 'x_snc_apocalypse_0.operator'
                                }
                            }
                            contains: {
                                id: 'ae5e39e625774a8f8cef5bf223624791'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ad45095aa7864d82acf9a0ad26fefa49'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'zone'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ad5c98d321c84a92ad6c854f281f3caf'
                        key: {
                            list_id: {
                                id: '67a5e8a501b54ef4af82acfb198be161'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'headcount'
                        }
                    },
                    {
                        table: 'sys_one_extend_resource_mapping'
                        id: 'afd4777bbc34466cae0650828e993c78'
                        key: {
                            parent_capability: 'fca04f7d4e3845e6aaa1251299812af9'
                            resource_capability: '51d095f77f211210210ca65c4d866591'
                            resource_name: 'SanitizeInput'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b000bcfe8f364f0eb083aa6e993d5bad'
                        key: {
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b26f7e14cdf44e80adcddaedc8b6d52c'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'civilian_status'
                            value: 'triaged'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b3e481a3d0e049eabbf7945c25ef312b'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            caption: 'Zone Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_gen_ai_strategy_mapping'
                        id: 'b3f6537281964baeb6ccc1cc07d82716'
                        key: {
                            strategy: 'CAPABILITY_EXECUTION'
                            feature: {
                                id: '650385ff94df42e084ab3b8688ed1dfc'
                                key: {
                                    feature_name: 'ApocCivilianTriage'
                                    document: 'fca04f7d4e3845e6aaa1251299812af9'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b439097cf3d7445fb76805123f2aae3a'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b49cd1f21a85496da6b9ebbbdca1fdac'
                        key: {
                            sys_ui_form: {
                                id: '06c87261a0c541209e07bd512623c045'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'b91936686938460c957e20c6fa665251'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Symptom Report'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7421ff5f7ce4e57a93a07b0d26c92ed'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'b7661ac192aa402eb293211b90013a0b'
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            dashboard_tab: '273886400fa9438aa4be28f054fbf7b5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b78016950fab4009ab90fa784e2d7dca'
                        key: {
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone_commander'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7dc87574ba64c39a2cd644b0889feab'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'district'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b91936686938460c957e20c6fa665251'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            caption: 'Symptom Report'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b9a0685432834f5f84d4d2fa3e590358'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'civilian_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_generative_ai_prompt_config'
                        id: 'baf7e68bafc946b0a14710bc789780bc'
                        key: {
                            ai_config: '73c70b171a344938913fb8b5eae6a0fb'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb8d9068536547d9b5629b2ed4dce0dd'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'headcount'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd55b77b9f5a4badae1cb2253c446dc7'
                        key: {
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd6135ea03f647d7b47b949296ea172d'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'quantity'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bec8a34fd4124f0987e09015d440512c'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'beef54ad534c49a290d6f6739b591250'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'civilian_status'
                            value: 'redirected'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c016db7100a6450d936db9bfde08a705'
                        key: {
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c0c16bade613474882c1adc9680bf7cb'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'civilian_status'
                            value: 'placed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c1fe7eaa518f4de6afa97c08b3aba755'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'zone_requested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_one_extend_definition_config'
                        id: 'c3e558a5de694485aed8a39d0f2bb803'
                        key: {
                            definition: {
                                id: '324b9a5531af491eb3cbacbc6f59ee83'
                                key: {
                                    capability: 'fca04f7d4e3845e6aaa1251299812af9'
                                    api: '936e514a53b3b110f028ddeeff7b128c'
                                }
                            }
                            capability: 'fca04f7d4e3845e6aaa1251299812af9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c4229adb27dc41bfb8e3ce703371ae51'
                        key: {
                            sys_ui_section: {
                                id: '022b2d860c224b0ca6c5fd2370985b5d'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Civilian Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c4e01d7eac8541b1a942e78374f556fa'
                        key: {
                            sys_ui_section: {
                                id: '7cbc719fc4c2470ca1d1e85c7c18b924'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Assignment'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c4e32ad507bf470d92c61ea89f2e3bfd'
                        key: {
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'zone'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'c52c5e8bb50f485d815ce5cc50de3d09'
                        key: {
                            list_id: {
                                id: '921aa4c4a826492283698492a0cefdbc'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'full_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5424a0479c242dbafc367bf39eb4333'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'c5562431b96248bda62ff9de47da0e88'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            caption: 'Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c5bfda5262de4714904ee0429918743e'
                        key: {
                            sys_ui_form: {
                                id: '06c87261a0c541209e07bd512623c045'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'c6a7c47827f84de8be7227a89ed4c9df'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'ca748d31ceec410ebbdecd1693540813'
                        key: {
                            category: 'x_snc_apocalypse_0_civilian'
                            prefix: 'APC'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'caa1062c6b724b8a9b134f565ea0961c'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'ce17ec8c666c4fc28932cd0c494ede83'
                        key: {
                            category: 'x_snc_apocalypse_0_quarantine'
                            prefix: 'QRN'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cf5312d7c94346ac9ef0c005f38342ed'
                        key: {
                            sys_ui_section: {
                                id: 'a2d7cfb3730e4c8b8ccddb7883380122'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd04ba54a662f4b51a45745088846661a'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'public_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'd0bbdf90b88f4179918a001b0da59dfd'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd0d572882d574777bb5e443c0355d9c5'
                        key: {
                            document_key: {
                                id: '5c1572e167464726991fb777c099f0e2'
                                key: {
                                    name: 'View trigger'
                                    skill_config: {
                                        id: 'a07659b6c87748c988cff571e7bb278d'
                                        key: {
                                            skill_id: 'fca04f7d4e3845e6aaa1251299812af9'
                                        }
                                    }
                                    config_type: 'b89b1f0b7f821210076726d6ac86650e'
                                }
                            }
                            variable: '5c5623df7f025210076726d6ac8665f9'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'd0ef44c9e50347c08e183d7ef0ee1ba5'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd570091d099449578863bc31bdc02994'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'zone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd66c896980024718802d119c1c167451'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'symptom_text'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd6853fe3283e427fa0d155c4f7673e91'
                        key: {
                            sys_ui_section: {
                                id: 'b3e481a3d0e049eabbf7945c25ef312b'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Zone Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd69d8651c1d44014907bd30a9f252306'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd7c4cf7226e74dff8825eaff02ea7231'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_class'
                            value: 'quarantine'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd7d810c97c9e43f5acfd140afad81092'
                        key: {
                            sys_ui_section: {
                                id: '0b1a4d2f22894951b3b648556adb93ad'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Capacity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'd8e08f67aba14a649b6370445e5783c0'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'daa5ff66a96d4f9eb053d5b2e035cb83'
                        key: {
                            sys_ui_section: {
                                id: '17795b7cc2bc430baf4de1307b565d60'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    caption: 'Triage Classification'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'triage_source'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'dc909522146e497692a07ef347f7c8fd'
                        key: {
                            list_id: {
                                id: 'd0ef44c9e50347c08e183d7ef0ee1ba5'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'de968b2f9ef948ed834a7c108c7cf5fd'
                        key: {
                            list_id: {
                                id: '67a5e8a501b54ef4af82acfb198be161'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df671b0c96e64a608fd9b6f2e335a32e'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'location_detail'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0d4aa5ed4dd4d4a9d1da082e4278999'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'zone_assigned'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0d71fda2f2a440e8770782641dabdb6'
                        key: {
                            name: 'x_snc_apocalypse_0_quarantine'
                            element: 'case_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e18b854c48224223966c029e03063c13'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e376d82be4164917a4a7e830b23f2894'
                        key: {
                            sys_ui_section: {
                                id: 'c5562431b96248bda62ff9de47da0e88'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'e39b8ff996a545cbb6f745c44771f152'
                        key: {
                            category: 'x_snc_apocalypse_0_rescue'
                            prefix: 'RES'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e5505c6e3a474f65b8a1b0619f420023'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e76adab2abfc498e861486f44ce55199'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e83db66e2e4149a5a45d67152e6da7ea'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'zone_assigned'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e9847c23fea6474ab1e90426d4917a51'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'supply_type'
                            value: 'shelter'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'eac8b90d4ef046fb9babfbbf68b2a54c'
                        key: {
                            list_id: {
                                id: 'd0ef44c9e50347c08e183d7ef0ee1ba5'
                                key: {
                                    name: 'x_snc_apocalypse_0_quarantine'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb2a4bf317cf4b36bf3f47ab496215c9'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'contact_info'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eb420c8cd9eb45198c1da10e2ca71247'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ec50240d26564b74a94f9da055d9f955'
                        key: {
                            sys_ui_section: {
                                id: '262424ddd44e449290ad4557b1c62ee5'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Request Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'ed1c5cc26c0947ea94babfcd75ee3cfd'
                        key: {
                            category: 'x_snc_apocalypse_0_zone'
                            prefix: 'ZONE'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eded54a5f0af420d9c9b90e6b9769bc7'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ee943ac0508d4e24a81e860f13557f73'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ef1b6c1d2384437e8e97c81f5c2bb0ed'
                        key: {
                            list_id: {
                                id: 'd8e08f67aba14a649b6370445e5783c0'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'zone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ef7272cc145a48b18555b3ad2f77e44e'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_class'
                            value: 'medical'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efbe0049f093412792f1e37686d1ca24'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'zone_requested'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f0710063a3cd4419ab03f36806027a0f'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_source'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: 'f1503666c4e44d6e924f5270bf5a17b9'
                        key: {
                            dashboard: 'ef7098db3fc04f1a8909612070967661'
                            dashboard_tab: '24d5c930eb344bf9b2ffcc6b0de968a3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f1bca386126549d9948c73f91cd7aca5'
                        key: {
                            sys_ui_section: {
                                id: '7552775f790a47069a01b931021f8dfc'
                                key: {
                                    name: 'x_snc_apocalypse_0_rescue'
                                    caption: 'Location'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f2d28448ea8e433a8a76ae4cabbcde85'
                        key: {
                            list_id: {
                                id: '921aa4c4a826492283698492a0cefdbc'
                                key: {
                                    name: 'x_snc_apocalypse_0_civilian'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'zone_requested'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f33c1cf67f33448f98105d1029e5470c'
                        key: {
                            name: 'x_snc_apocalypse_0_rescue'
                            element: 'request_type'
                            value: 'structural'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f56530052c254501b8515db1e3f944f8'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'zone_status'
                            value: 'safe'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f77bb6509d9049a19ba9bf3aad96f3d8'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_class'
                            value: 'manual_review'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'f7be785c0c8742e4bfd480e7a588c259'
                        key: {
                            name: 'x_snc_apocalypse_0_supply'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f96ad9d2db1d4343b341b708489077dd'
                        key: {
                            sys_ui_section: {
                                id: '58e3c126e3884757960129d238569055'
                                key: {
                                    name: 'x_snc_apocalypse_0_supply'
                                    caption: 'Supply Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9d14715daa8424fb7329669234757de'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_reasoning'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc57504fcf20485fbafe9ef23bf457e9'
                        key: {
                            name: 'x_snc_apocalypse_0_zone'
                            element: 'headcount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc64cbe6aaef495a9838368104552979'
                        key: {
                            name: 'x_snc_apocalypse_0_civilian'
                            element: 'triage_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'ff89f91c22ea4f12b10db6c756e8f457'
                        key: {
                            list_id: {
                                id: '67a5e8a501b54ef4af82acfb198be161'
                                key: {
                                    name: 'x_snc_apocalypse_0_zone'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'zone_commander'
                        }
                    },
                ]
            }
        }
    }
}
