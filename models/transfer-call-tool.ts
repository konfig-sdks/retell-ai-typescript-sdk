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
 * @interface TransferCallTool
 */
export interface TransferCallTool {
    /**
     * Describes when to transfer the call.
     * @type {string}
     * @memberof TransferCallTool
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TransferCallTool
     */
    'type': TransferCallToolTypeEnum;
    /**
     * Name of the tool. Must be unique within all tools available to LLM at any given time (general tools + state tools + state edges).
     * @type {string}
     * @memberof TransferCallTool
     */
    'name': string;
    /**
     * The number to transfer to in E.164 format (a + and country code, then the phone number with no space or other special characters). For example, +16175551212.
     * @type {string}
     * @memberof TransferCallTool
     */
    'number': string;
}

type TransferCallToolTypeEnum = 'transfer_call'


