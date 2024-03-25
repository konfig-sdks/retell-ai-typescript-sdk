type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/create-agent-POST': {
        parameters: [
            {
                name: 'llm_websocket_url'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'voice_temperature'
            },
            {
                name: 'voice_speed'
            },
            {
                name: 'responsiveness'
            },
            {
                name: 'enable_backchannel'
            },
            {
                name: 'ambient_sound'
            },
            {
                name: 'agent_name'
            },
            {
                name: 'language'
            },
            {
                name: 'webhook_url'
            },
            {
                name: 'boosted_keywords'
            },
            {
                name: 'format_text'
            },
            {
                name: 'optOutSensitiveDataStorage'
            },
        ]
    },
    '/delete-agent/{agent_id}-DELETE': {
        parameters: [
            {
                name: 'agent_id'
            },
        ]
    },
    '/list-agents-GET': {
        parameters: [
        ]
    },
    '/get-agent/{agent_id}-GET': {
        parameters: [
            {
                name: 'agent_id'
            },
        ]
    },
    '/update-agent/{agent_id}-PATCH': {
        parameters: [
            {
                name: 'agent_id'
            },
            {
                name: 'llm_websocket_url'
            },
            {
                name: 'voice_id'
            },
            {
                name: 'voice_temperature'
            },
            {
                name: 'voice_speed'
            },
            {
                name: 'responsiveness'
            },
            {
                name: 'enable_backchannel'
            },
            {
                name: 'ambient_sound'
            },
            {
                name: 'agent_name'
            },
            {
                name: 'language'
            },
            {
                name: 'webhook_url'
            },
            {
                name: 'boosted_keywords'
            },
            {
                name: 'format_text'
            },
            {
                name: 'optOutSensitiveDataStorage'
            },
        ]
    },
    '/register-call-POST': {
        parameters: [
            {
                name: 'agent_id'
            },
            {
                name: 'audio_websocket_protocol'
            },
            {
                name: 'audio_encoding'
            },
            {
                name: 'sample_rate'
            },
            {
                name: 'end_call_after_silence_ms'
            },
            {
                name: 'from_number'
            },
            {
                name: 'to_number'
            },
            {
                name: 'metadata'
            },
            {
                name: 'retell_llm_dynamic_variables'
            },
        ]
    },
    '/get-call/{call_id}-GET': {
        parameters: [
            {
                name: 'call_id'
            },
        ]
    },
    '/list-calls-GET': {
        parameters: [
            {
                name: 'filter_criteria'
            },
            {
                name: 'sort_order'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/create-phone-call-POST': {
        parameters: [
            {
                name: 'phone_number'
            },
            {
                name: 'override_agent_id'
            },
            {
                name: 'retell_llm_dynamic_variables'
            },
        ]
    },
    '/list-phone-numbers-GET': {
        parameters: [
        ]
    },
    '/get-phone-number/{phone_number}-GET': {
        parameters: [
            {
                name: 'phone_number'
            },
        ]
    },
    '/create-phone-number-POST': {
        parameters: [
            {
                name: 'agent_id'
            },
            {
                name: 'area_code'
            },
        ]
    },
    '/delete-phone-number/{phone_number}-DELETE': {
        parameters: [
            {
                name: 'phone_number'
            },
        ]
    },
    '/update-phone-number/{phone_number}-PATCH': {
        parameters: [
            {
                name: 'agent_id'
            },
            {
                name: 'phone_number'
            },
        ]
    },
    '/delete-retell-llm/{llm_id}-DELETE': {
        parameters: [
            {
                name: 'llm_id'
            },
        ]
    },
    '/get-retell-llm/{llm_id}-GET': {
        parameters: [
            {
                name: 'llm_id'
            },
        ]
    },
    '/create-retell-llm-POST': {
        parameters: [
            {
                name: 'general_prompt'
            },
            {
                name: 'general_tools'
            },
            {
                name: 'states'
            },
            {
                name: 'starting_state'
            },
            {
                name: 'begin_message'
            },
        ]
    },
    '/update-retell-llm/{llm_id}-PATCH': {
        parameters: [
            {
                name: 'llm_id'
            },
            {
                name: 'general_prompt'
            },
            {
                name: 'general_tools'
            },
            {
                name: 'states'
            },
            {
                name: 'starting_state'
            },
            {
                name: 'begin_message'
            },
        ]
    },
    '/list-retell-llms-GET': {
        parameters: [
        ]
    },
}