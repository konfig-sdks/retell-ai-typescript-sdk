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
 * @interface CallBase
 */
export interface CallBase {
    /**
     * Unique id of the call. Used to identify in LLM websocket and used to authenticate in audio websocket.
     * @type {string}
     * @memberof CallBase
     */
    'call_id': string;
    /**
     * Corresponding agent id of this call.
     * @type {string}
     * @memberof CallBase
     */
    'agent_id': string;
    /**
     * Where the audio websocket would connect from would determine the format / protocol of websocket messages, and would determine how our server read audio bytes and send audio bytes.:  - `web`: The protocol defined by Retell, commonly used for connecting from web frontend. Also useful for those who want to manipulate audio bytes directly.  - `twilio`: The [websocket protocol](https://www.twilio.com/docs/voice/twiml/stream#message-media) defined by Twilio, used when your system uses Twilio, and supplies Retell audio websocket url to Twilio.
     * @type {string}
     * @memberof CallBase
     */
    'audio_websocket_protocol': CallBaseAudioWebsocketProtocolEnum;
    /**
     * The audio encoding of the call. The following formats are supported:   - `s16le` 16 bit linear PCM audio, the native format for web audio capture and playback.  - `mulaw` non-linear audio encoding technique used in telephony. Commonly used by Twilio.
     * @type {string}
     * @memberof CallBase
     */
    'audio_encoding': CallBaseAudioEncodingEnum;
    /**
     * Sample rate of the conversation, the input and output audio bytes will all conform to this rate. Check the audio source, audio format, and voice used for the agent to select one that works. supports value ranging from [8000, 48000]. Note for Twilio `mulaw` encoding, the sample rate has to be 8000.  - `s16le` sample rate recommendation (natively supported, lowest latency):    - elevenlabs voices: 16000, 22050, 24000, 44100.   - openai voices: 24000.    - deepgram voices: 8000, 16000, 24000, 32000, 48000.
     * @type {number}
     * @memberof CallBase
     */
    'sample_rate': number;
    /**
     * Status of call.  - `registered`: Call id issued, ready to make a call using this id.  - `ongoing`: Call connected and ongoing.  - `ended`: The underlying websocket has ended for the call. Either user or agent hanged up, or call transferred.   - `error`: Call encountered error.
     * @type {string}
     * @memberof CallBase
     */
    'call_status': CallBaseCallStatusEnum;
    /**
     * Begin timestamp (milliseconds since epoch) of the call.
     * @type {number}
     * @memberof CallBase
     */
    'start_timestamp': number;
    /**
     * If users stay silent for a period, end the call. By default, it is set to 600,000 ms (10 min). The minimum value allowed is 10,000 ms (10 s).
     * @type {number}
     * @memberof CallBase
     */
    'end_call_after_silence_ms'?: number;
    /**
     * The caller number. This field is storage purpose only, set this if you want the call object to contain it so that it\'s easier to reference it. Not used for processing, when we connect to your LLM websocket server, you can then get it from the call object.
     * @type {string}
     * @memberof CallBase
     */
    'from_number'?: string;
    /**
     * The callee number. This field is storage purpose only, set this if you want the call object to contain it so that it\'s easier to reference it. Not used for processing, when we connect to your LLM websocket server, you can then get it from the call object.
     * @type {string}
     * @memberof CallBase
     */
    'to_number'?: string;
    /**
     * An abtriary object for storage purpose only. You can put anything here like your own id for the call, twilio SID, internal customer id. Not used for processing, when we connect to your LLM websocket server, you can then get it from the call object.
     * @type {object}
     * @memberof CallBase
     */
    'metadata'?: object;
    /**
     * Add optional dynamic variables in key value pairs of string that injects into your Retell LLM prompt and tool description. Only applicable for Retell LLM.
     * @type {{ [key: string]: any; }}
     * @memberof CallBase
     */
    'retell_llm_dynamic_variables'?: { [key: string]: any; };
}

type CallBaseAudioWebsocketProtocolEnum = 'web' | 'twilio'
type CallBaseAudioEncodingEnum = 's16le' | 'mulaw'
type CallBaseCallStatusEnum = 'registered' | 'ongoing' | 'ended' | 'error'


