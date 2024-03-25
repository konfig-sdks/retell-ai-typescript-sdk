/*
Retell SDK

API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.

The version of the OpenAPI document: 1.0.0
Contact: founders@retellai.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * End to end latency (from user stops talking to agent start talking) tracking of the call, available after call ends. This latency does not account for the network trip time from Retell server to user frontend.
 * @export
 * @interface CallDetailAllOfE2eLatency
 */
export interface CallDetailAllOfE2eLatency {
    /**
     * 50 percentile of end to end latency.
     * @type {number}
     * @memberof CallDetailAllOfE2eLatency
     */
    'p50'?: number;
    /**
     * 90 percentile of end to end latency.
     * @type {number}
     * @memberof CallDetailAllOfE2eLatency
     */
    'p90'?: number;
    /**
     * 95 percentile of end to end latency.
     * @type {number}
     * @memberof CallDetailAllOfE2eLatency
     */
    'p95'?: number;
    /**
     * 99 percentile of end to end latency.
     * @type {number}
     * @memberof CallDetailAllOfE2eLatency
     */
    'p99'?: number;
    /**
     * Maximum end to end latency in the call.
     * @type {number}
     * @memberof CallDetailAllOfE2eLatency
     */
    'max'?: number;
    /**
     * Minimum end to end latency in the call.
     * @type {number}
     * @memberof CallDetailAllOfE2eLatency
     */
    'min'?: number;
    /**
     * Number of turn change. We track latency every time turn change between user and agent.
     * @type {number}
     * @memberof CallDetailAllOfE2eLatency
     */
    'num'?: number;
}

