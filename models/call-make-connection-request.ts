/*
Retell SDK

API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.

The version of the OpenAPI document: 1.0.0
Contact: founders@retellai.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CallMakeConnectionRequestPhoneNumber } from './call-make-connection-request-phone-number';

/**
 * 
 * @export
 * @interface CallMakeConnectionRequest
 */
export interface CallMakeConnectionRequest {
    /**
     * 
     * @type {CallMakeConnectionRequestPhoneNumber}
     * @memberof CallMakeConnectionRequest
     */
    'phone_number': CallMakeConnectionRequestPhoneNumber;
    /**
     * For this particular call, override the agent used with this agent id. This does not bind the agent to this number, this is for one time override.
     * @type {string}
     * @memberof CallMakeConnectionRequest
     */
    'override_agent_id'?: string;
    /**
     * Add optional dynamic variables in key value pairs of string that injects into your Retell LLM prompt and tool description. Only applicable for Retell LLM.
     * @type {{ [key: string]: any; }}
     * @memberof CallMakeConnectionRequest
     */
    'retell_llm_dynamic_variables'?: { [key: string]: any; };
}

