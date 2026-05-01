import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    at0: {
                        table: 'sys_atf_test'
                        id: '304ba7ce91dc4bffb18965d6a53ab97e'
                    }
                    at1: {
                        table: 'sys_atf_step'
                        id: '68d0fb1ef82d4ea7b5eceda0a5d05057'
                    }
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
                    fl0: {
                        table: 'sys_hub_flow'
                        id: '7d1aff527faa46ccabdb9dc06bd9eff0'
                    }
                    fl0_log: {
                        table: 'sys_hub_action_instance_v2'
                        id: '6e5ee0cca22f4a11893700184f973f4b'
                    }
                    fl0_trig: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '2659f921aa9341348062db0573bacd95'
                    }
                    fl1: {
                        table: 'sys_hub_flow'
                        id: '650ebf9008404983a82f3b506ebd2528'
                    }
                    fl1_log: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9fd16612278e4449b5b7ac5a01281585'
                    }
                    fl1_lookup: {
                        table: 'sys_hub_action_instance_v2'
                        id: '11c41de52a294985a6f524b2529e994d'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '43f20eaf364644e4834925facb434973'
                    }
                    si0: {
                        table: 'sys_script_include'
                        id: '64b8c84b2dff40cdbe71913a9eaa281d'
                    }
                    si1: {
                        table: 'sys_script_include'
                        id: '1786763eac8c408cb95044e7b15c843e'
                    }
                    src_server_ClaudeDigest_js: {
                        table: 'sys_module'
                        id: '844f8480664840efb1c79648497ec334'
                    }
                    src_server_kudos_feed_server_js: {
                        table: 'sys_module'
                        id: '59c5a360ac9c4325b699ae9d85d20126'
                    }
                    src_server_kudos_submit_client_js: {
                        table: 'sys_module'
                        id: '13548225f34145b18c9391461f3a62f5'
                    }
                    src_server_kudos_submit_server_js: {
                        table: 'sys_module'
                        id: 'b6b4ab4ee77b4bc2b2cce9f1eb48fd9d'
                    }
                    src_server_KudosService_js: {
                        table: 'sys_module'
                        id: '5312d3834e9b4e3797ca032473829fd1'
                    }
                    src_server_KudosService_ts: {
                        table: 'sys_module'
                        id: '9cdadbccfa96406cb70525c64a6282fc'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '6587e6754f6b44d38a321aeed4882cca'
                    }
                    w0: {
                        table: 'sp_widget'
                        id: 'e1611a9bfe27440391bfb4a801c023d6'
                    }
                    w1: {
                        table: 'sp_widget'
                        id: '4c58a4746e674ef8b8fbe1cf22edb3e7'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '108d408943ec4ae186915997136ce5ed'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '13cd2b4530014cca8cf055eb8af6e9f4'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '2dc9146bdd1e4342b607e5e002596196'
                        key: {
                            document_key: '68d0fb1ef82d4ea7b5eceda0a5d05057'
                            variable: '989d9e235324220002c6435723dc3484'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6285b316bc8b4a4b9d2bff083c19f26f'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_giver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63a7b05be65d4dbb8f249e30f5eae9f4'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_message'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '67c884a0a3bc4031984cb07dc5817ba6'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7611fe407ba04e92bff37e0b43aca10b'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_digest_text'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89cf4abe5d6c4ed690ab6a54bfcc2fa4'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_receiver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8af8363546fb4bbfb37fad4043f2a7f3'
                        key: {
                            document_key: '68d0fb1ef82d4ea7b5eceda0a5d05057'
                            variable: '42f2564b73031300440211d8faf6a777'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8af8b983a6564cab989e07bd7397fa8b'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_receiver'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8dcf67f563e14928a131372d2c4593fc'
                        key: {
                            name: 'x_9274_kudos_entry'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: '9d2e6956bf534bf69490f76e3378df68'
                        key: {
                            field: 'script'
                            id: '68d0fb1ef82d4ea7b5eceda0a5d05057'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cf71019457d343cd81d1e4df019e322a'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_digest_text'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd03feed978fc4cdb9b09a598c41a8bed'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_category'
                            value: 'innovation'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd15df6b218c54e308bb58a7ee1dc1772'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_category'
                            value: 'teamwork'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dd67925b36b0468bacf86f48f1136c5a'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'debe9183abce40b89bcd9b272d9e8a10'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_category'
                            value: 'above_beyond'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eb460c6422b740139c4b2b4ab1f5a0b1'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f70b820f184b484db131190f5af1e55a'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_category'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f726c9023ce74f88a0e6aa42f4e618a3'
                        key: {
                            name: 'x_9274_kudos_entry'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fc05ed54dfb0453a9e994457eb56172c'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_category'
                            value: 'recognition'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc7a97c742974cab8e3cd36417082913'
                        key: {
                            name: 'x_9274_kudos_entry'
                            element: 'u_giver'
                        }
                    },
                ]
            }
        }
    }
}
