/*
Retell SDK

API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.

The version of the OpenAPI document: 1.0.0
Contact: founders@retellai.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface RetellLLMResponseAllOf
 */
export interface RetellLLMResponseAllOf {
    /**
     * Unique id of Retell LLM.
     * @type {string}
     * @memberof RetellLLMResponseAllOf
     */
    'llm_id'?: string;
    /**
     * The LLM Websocket URL constructed from unique id of Retell LLM. Used in agent API to create / update agent.
     * @type {string}
     * @memberof RetellLLMResponseAllOf
     */
    'llm_websocket_url'?: string;
}

