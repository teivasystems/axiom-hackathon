import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4d92741c456b4634b55079618b96d6a1'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '8dc5ad47c7cb43d4958fc063f9f49595'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '0ef7959a52ca48f78da95bc3c1217965'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '43f20eaf364644e4834925facb434973'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '6587e6754f6b44d38a321aeed4882cca'
                    }
                }
            }
        }
    }
}
