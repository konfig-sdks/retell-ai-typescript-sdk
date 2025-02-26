/*
Retell SDK

API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.

The version of the OpenAPI document: 1.0.0
Contact: founders@retellai.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StateEdge } from './state-edge';
import { Tool } from './tool';

/**
 * 
 * @export
 * @interface State
 */
export interface State {
    /**
     * Name of the state, must be unique for each state.
     * @type {string}
     * @memberof State
     */
    'name': string;
    /**
     * Prompt of the state, will be appended to the system prompt of LLM.    - System prompt = general prompt + state prompt.
     * @type {string}
     * @memberof State
     */
    'state_prompt'?: string;
    /**
     * Edges of the state define how and what state can be reached from this state.
     * @type {Array<StateEdge>}
     * @memberof State
     */
    'edges'?: Array<StateEdge>;
    /**
     * A list of tools specific to this state the model may call (to get external knowledge, call API, etc). You can select from some common predefined tools like end call, transfer call, etc; or you can create your own custom tool (last option) for the LLM to use.   - Tools of LLM = general tools + state tools + state transitions
     * @type {Array<Tool>}
     * @memberof State
     */
    'tools'?: Array<Tool>;
}

