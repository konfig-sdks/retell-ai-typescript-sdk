<div align="left">

[![Visit Retell ai](./header.png)](https://retellai.com)

# [Retell ai](https://retellai.com)<a id="retell-ai"></a>

API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`retellai.agent.createNewAgent`](#retellaiagentcreatenewagent)
  * [`retellai.agent.deleteExistingAgent`](#retellaiagentdeleteexistingagent)
  * [`retellai.agent.getAll`](#retellaiagentgetall)
  * [`retellai.agent.getDetails`](#retellaiagentgetdetails)
  * [`retellai.agent.updateExistingAgent`](#retellaiagentupdateexistingagent)
  * [`retellai.call.establishConnection`](#retellaicallestablishconnection)
  * [`retellai.call.getDetails`](#retellaicallgetdetails)
  * [`retellai.call.getDetails_0`](#retellaicallgetdetails_0)
  * [`retellai.call.makeConnection`](#retellaicallmakeconnection)
  * [`retellai.phoneNumber.getAllNumbers`](#retellaiphonenumbergetallnumbers)
  * [`retellai.phoneNumber.getDetails`](#retellaiphonenumbergetdetails)
  * [`retellai.phoneNumber.purchaseNumberAndBindAgent`](#retellaiphonenumberpurchasenumberandbindagent)
  * [`retellai.phoneNumber.removePhoneNumber`](#retellaiphonenumberremovephonenumber)
  * [`retellai.phoneNumber.updateRetellLlm`](#retellaiphonenumberupdateretellllm)
  * [`retellai.retell.deleteLlm`](#retellairetelldeletellm)
  * [`retellai.retell.getLlmDetails`](#retellairetellgetllmdetails)
  * [`retellai.retell.newLlm`](#retellairetellnewllm)
  * [`retellai.retell.updateLlm`](#retellairetellupdatellm)
  * [`retellai.retellLLM.listAll`](#retellairetellllmlistall)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Retell%20AI&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { RetellAi } from "retell-ai-typescript-sdk";

const retellai = new RetellAi({
  // Defining the base path is optional and defaults to https://api.retellai.com
  // basePath: "https://api.retellai.com",
  accessToken: "ACCESS_TOKEN",
});

const createNewAgentResponse = await retellai.agent.createNewAgent({
  llm_websocket_url: "wss://your-websocket-endpoint",
  voice_id: "11labs-Adrian",
  voice_temperature: 1,
  voice_speed: 1,
  responsiveness: 1,
  enable_backchannel: true,
  ambient_sound: "coffee-shop",
  agent_name: "Jarvis",
  language: "en-US",
  webhook_url: "https://webhook-url-here",
  boosted_keywords: ["retell", "kroger"],
  format_text: true,
  optOutSensitiveDataStorage: true,
});

console.log(createNewAgentResponse);
```

## Reference<a id="reference"></a>


### `retellai.agent.createNewAgent`<a id="retellaiagentcreatenewagent"></a>

Create a new agent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAgentResponse = await retellai.agent.createNewAgent({
  llm_websocket_url: "wss://your-websocket-endpoint",
  voice_id: "11labs-Adrian",
  voice_temperature: 1,
  voice_speed: 1,
  responsiveness: 1,
  enable_backchannel: true,
  ambient_sound: "coffee-shop",
  agent_name: "Jarvis",
  language: "en-US",
  webhook_url: "https://webhook-url-here",
  boosted_keywords: ["retell", "kroger"],
  format_text: true,
  optOutSensitiveDataStorage: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### llm_websocket_url: `string`<a id="llm_websocket_url-string"></a>

The URL we will establish LLM websocket for getting response, usually your server. Check out [LLM WebSocket](https://raw.githubusercontent.com) for more about request format (sent from us) and response format (send to us).

##### voice_id: `string`<a id="voice_id-string"></a>

Unique voice id used for the agent. Find list of available voices and their preview in Dashboard.

##### voice_temperature: `number`<a id="voice_temperature-number"></a>

Controls how stable the voice is. Value ranging from [0,2]. Lower value means more stable, and higher value means more variant speech generation. Currently this setting only applies to `11labs` voices. If unset, default value 1 will apply.

##### voice_speed: `number`<a id="voice_speed-number"></a>

Controls speed of voice. Value ranging from [0.5,2]. Lower value means slower speech, while higher value means faster speech rate. If unset, default value 1 will apply.

##### responsiveness: `number`<a id="responsiveness-number"></a>

Controls how responsive is the agent. Value ranging from [0,1]. Lower value means less responsive agent (wait more, respond slower), while higher value means faster exchanges (respond when it can). If unset, default value 1 will apply.

##### enable_backchannel: `boolean`<a id="enable_backchannel-boolean"></a>

Controls whether the agent would backchannel (agent interjects the speaker with phrases like \\\"yeah\\\", \\\"uh-huh\\\" to signify interest and engagement). Backchannel when enabled tends to show up more in longer user utterances. If not set, agent will not backchannel.

##### ambient_sound: `string`<a id="ambient_sound-string"></a>

If set, will add ambient environment sound to the call to make experience more realistic. Currently supports the following options:  - `coffee-shop`: Coffee shop ambience with people chatting in background. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/coffee-shop.wav)  - `convention-hall`: Convention hall ambience, with some echo and people chatting in background. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/convention-hall.wav)  - `summer-outdoor`: Summer outdoor ambience with cicada chirping. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/summer-outdoor.wav)  - `mountain-outdoor`: Mountain outdoor ambience with birds singing. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/mountain-outdoor.wav)   Set to string `null` to remove ambient sound from this agent. 

##### agent_name: `string`<a id="agent_name-string"></a>

The name of the agent. Only used for your own reference.

##### language: `string`<a id="language-string"></a>

`Beta feature, use with caution.`   This setting specifies the agent\\\'s operational language, including base language and dialect. Speech recognition considers both elements, but text-to-speech currently only recognizes the base language.    For instance, selecting `en-GB` optimizes speech recognition for British English, yet text-to-speech output will be in standard English. If dialect-specific text-to-speech is required, please contact us for support.   - `11lab voices`: supports English(en), German(de), Spanish(es), Hindi(hi), Portuguese(pt)   - `openAI voices`: supports English(en), German(de), Spanish(es), Hindi(hi), Portuguese(pt), Japanese(ja)   - `deepgram voices`: supports English(en) 

##### webhook_url: `string`<a id="webhook_url-string"></a>

The webhook for agent to listen to call events. See what events it would get at [webhook doc](https://raw.githubusercontent.com). If set, will binds webhook events for this agent to the specified url, and will ignore the account level webhook for this agent. Set to string `null` to remove webhook url from this agent.

##### boosted_keywords: `string`[]<a id="boosted_keywords-string"></a>

Provide a customized list of keywords to bias the transcriber model, so that these words are more likely to get transcribed. Commonly used for names, brands, street, etc.

##### format_text: `boolean`<a id="format_text-boolean"></a>

Whether to format the transcribed text with inverse text normalization. It transforms the spoken form of text into written form for entities like phone number, email address, street address, etc. For example, \\\"february fourth twenty twenty two\\\" can be converted into \\\"february 4th 2022\\\". If not set, the default is true.

##### optOutSensitiveDataStorage: `boolean`<a id="optoutsensitivedatastorage-boolean"></a>

Disable transcripts and recordings storage for enhanced privacy. Access transcripts securely via webhooks.

#### 🔄 Return<a id="🔄-return"></a>

[AgentResponse](./models/agent-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/create-agent` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.agent.deleteExistingAgent`<a id="retellaiagentdeleteexistingagent"></a>

Delete an existing agent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteExistingAgentResponse = await retellai.agent.deleteExistingAgent({
  agentId: "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### agentId: `string`<a id="agentid-string"></a>

Unique id of the agent to be deleted.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete-agent/{agent_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.agent.getAll`<a id="retellaiagentgetall"></a>

List all agents

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await retellai.agent.getAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[AgentResponse](./models/agent-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/list-agents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.agent.getDetails`<a id="retellaiagentgetdetails"></a>

Retrieve details of a specific agent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await retellai.agent.getDetails({
  agentId: "16b980523634a6dc504898cda492e939",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### agentId: `string`<a id="agentid-string"></a>

Unique id of the agent to be retrieved.

#### 🔄 Return<a id="🔄-return"></a>

[AgentResponse](./models/agent-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/get-agent/{agent_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.agent.updateExistingAgent`<a id="retellaiagentupdateexistingagent"></a>

Update an existing agent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExistingAgentResponse = await retellai.agent.updateExistingAgent({
  agentId: "16b980523634a6dc504898cda492e939",
  llm_websocket_url: "wss://your-websocket-endpoint",
  voice_id: "11labs-Adrian",
  voice_temperature: 1,
  voice_speed: 1,
  responsiveness: 1,
  enable_backchannel: true,
  ambient_sound: "coffee-shop",
  agent_name: "Jarvis",
  language: "en-US",
  webhook_url: "https://webhook-url-here",
  boosted_keywords: ["retell", "kroger"],
  format_text: true,
  optOutSensitiveDataStorage: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### agentId: `string`<a id="agentid-string"></a>

Unique id of the agent to be updated.

##### llm_websocket_url: `string`<a id="llm_websocket_url-string"></a>

The URL we will establish LLM websocket for getting response, usually your server. Check out [LLM WebSocket](https://raw.githubusercontent.com) for more about request format (sent from us) and response format (send to us).

##### voice_id: `string`<a id="voice_id-string"></a>

Unique voice id used for the agent. Find list of available voices and their preview in Dashboard.

##### voice_temperature: `number`<a id="voice_temperature-number"></a>

Controls how stable the voice is. Value ranging from [0,2]. Lower value means more stable, and higher value means more variant speech generation. Currently this setting only applies to `11labs` voices. If unset, default value 1 will apply.

##### voice_speed: `number`<a id="voice_speed-number"></a>

Controls speed of voice. Value ranging from [0.5,2]. Lower value means slower speech, while higher value means faster speech rate. If unset, default value 1 will apply.

##### responsiveness: `number`<a id="responsiveness-number"></a>

Controls how responsive is the agent. Value ranging from [0,1]. Lower value means less responsive agent (wait more, respond slower), while higher value means faster exchanges (respond when it can). If unset, default value 1 will apply.

##### enable_backchannel: `boolean`<a id="enable_backchannel-boolean"></a>

Controls whether the agent would backchannel (agent interjects the speaker with phrases like \\\"yeah\\\", \\\"uh-huh\\\" to signify interest and engagement). Backchannel when enabled tends to show up more in longer user utterances. If not set, agent will not backchannel.

##### ambient_sound: `string`<a id="ambient_sound-string"></a>

If set, will add ambient environment sound to the call to make experience more realistic. Currently supports the following options:  - `coffee-shop`: Coffee shop ambience with people chatting in background. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/coffee-shop.wav)  - `convention-hall`: Convention hall ambience, with some echo and people chatting in background. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/convention-hall.wav)  - `summer-outdoor`: Summer outdoor ambience with cicada chirping. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/summer-outdoor.wav)  - `mountain-outdoor`: Mountain outdoor ambience with birds singing. [Listen to Ambience](https://retell-utils-public.s3.us-west-2.amazonaws.com/mountain-outdoor.wav)   Set to string `null` to remove ambient sound from this agent. 

##### agent_name: `string`<a id="agent_name-string"></a>

The name of the agent. Only used for your own reference.

##### language: `string`<a id="language-string"></a>

`Beta feature, use with caution.`   This setting specifies the agent\\\'s operational language, including base language and dialect. Speech recognition considers both elements, but text-to-speech currently only recognizes the base language.    For instance, selecting `en-GB` optimizes speech recognition for British English, yet text-to-speech output will be in standard English. If dialect-specific text-to-speech is required, please contact us for support.   - `11lab voices`: supports English(en), German(de), Spanish(es), Hindi(hi), Portuguese(pt)   - `openAI voices`: supports English(en), German(de), Spanish(es), Hindi(hi), Portuguese(pt), Japanese(ja)   - `deepgram voices`: supports English(en) 

##### webhook_url: `string`<a id="webhook_url-string"></a>

The webhook for agent to listen to call events. See what events it would get at [webhook doc](https://raw.githubusercontent.com). If set, will binds webhook events for this agent to the specified url, and will ignore the account level webhook for this agent. Set to string `null` to remove webhook url from this agent.

##### boosted_keywords: `string`[]<a id="boosted_keywords-string"></a>

Provide a customized list of keywords to bias the transcriber model, so that these words are more likely to get transcribed. Commonly used for names, brands, street, etc.

##### format_text: `boolean`<a id="format_text-boolean"></a>

Whether to format the transcribed text with inverse text normalization. It transforms the spoken form of text into written form for entities like phone number, email address, street address, etc. For example, \\\"february fourth twenty twenty two\\\" can be converted into \\\"february 4th 2022\\\". If not set, the default is true.

##### optOutSensitiveDataStorage: `boolean`<a id="optoutsensitivedatastorage-boolean"></a>

Disable transcripts and recordings storage for enhanced privacy. Access transcripts securely via webhooks.

#### 🔄 Return<a id="🔄-return"></a>

[AgentResponse](./models/agent-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/update-agent/{agent_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.call.establishConnection`<a id="retellaicallestablishconnection"></a>

Register Call To Get CallId To Establish Connection

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const establishConnectionResponse = await retellai.call.establishConnection({
  agent_id: "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD",
  audio_websocket_protocol: "twilio",
  audio_encoding: "s16le",
  sample_rate: 24000,
  end_call_after_silence_ms: 600000,
  from_number: "12137771234",
  to_number: "12137771235",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### agent_id: `string`<a id="agent_id-string"></a>

Unique id of agent used for the call. Your agent would contain the LLM Websocket url used for this call.

##### audio_websocket_protocol: `string`<a id="audio_websocket_protocol-string"></a>

Where the audio websocket would connect from would determine the format / protocol of websocket messages, and would determine how our server read audio bytes and send audio bytes.:  - `web`: The protocol defined by Retell, commonly used for connecting from web frontend. Also useful for those who want to manipulate audio bytes directly.  - `twilio`: The [websocket protocol](https://www.twilio.com/docs/voice/twiml/stream#message-media) defined by Twilio, used when your system uses Twilio, and supplies Retell audio websocket url to Twilio.

##### audio_encoding: `string`<a id="audio_encoding-string"></a>

The audio encoding of the call. The following formats are supported:   - `s16le` 16 bit linear PCM audio, the native format for web audio capture and playback.  - `mulaw` non-linear audio encoding technique used in telephony. Commonly used by Twilio.

##### sample_rate: `number`<a id="sample_rate-number"></a>

Sample rate of the conversation, the input and output audio bytes will all conform to this rate. Check the audio source, audio format, and voice used for the agent to select one that works. supports value ranging from [8000, 48000]. Note for Twilio `mulaw` encoding, the sample rate has to be 8000.  - `s16le` sample rate recommendation (natively supported, lowest latency):    - elevenlabs voices: 16000, 22050, 24000, 44100.   - openai voices: 24000.    - deepgram voices: 8000, 16000, 24000, 32000, 48000.

##### end_call_after_silence_ms: `number`<a id="end_call_after_silence_ms-number"></a>

If users stay silent for a period, end the call. By default, it is set to 600,000 ms (10 min). The minimum value allowed is 10,000 ms (10 s).

##### from_number: `string`<a id="from_number-string"></a>

The caller number. This field is storage purpose only, set this if you want the call object to contain it so that it\\\'s easier to reference it. Not used for processing, when we connect to your LLM websocket server, you can then get it from the call object.

##### to_number: `string`<a id="to_number-string"></a>

The callee number. This field is storage purpose only, set this if you want the call object to contain it so that it\\\'s easier to reference it. Not used for processing, when we connect to your LLM websocket server, you can then get it from the call object.

##### metadata: `object`<a id="metadata-object"></a>

An abtriary object for storage purpose only. You can put anything here like your own id for the call, twilio SID, internal customer id. Not used for processing, when we connect to your LLM websocket server, you can then get it from the call object.

##### retell_llm_dynamic_variables: `{ [key: string]: any; }`<a id="retell_llm_dynamic_variables--key-string-any-"></a>

Add optional dynamic variables in key value pairs of string that injects into your Retell LLM prompt and tool description. Only applicable for Retell LLM.

#### 🔄 Return<a id="🔄-return"></a>

[CallBase](./models/call-base.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/register-call` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.call.getDetails`<a id="retellaicallgetdetails"></a>

Retrieve details of a specific call

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await retellai.call.getDetails({
  callId: "119c3f8e47135a29e65947eeb34cf12d",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### callId: `string`<a id="callid-string"></a>

The call id to retrieve call history for.

#### 🔄 Return<a id="🔄-return"></a>

[CallDetail](./models/call-detail.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/get-call/{call_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.call.getDetails_0`<a id="retellaicallgetdetails_0"></a>

Retrieve call details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetails_0Response = await retellai.call.getDetails_0({
  sortOrder: "descending",
  limit: 1000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filterCriteria: [`CallGetDetailsFilterCriteriaParameter`](./models/call-get-details-filter-criteria-parameter.ts)<a id="filtercriteria-callgetdetailsfiltercriteriaparametermodelscall-get-details-filter-criteria-parameterts"></a>

##### sortOrder: `'ascending' | 'descending'`<a id="sortorder-ascending--descending"></a>

The calls will be sorted by `start_timestamp`, whether to return the calls in ascending or descending order.

##### limit: `number`<a id="limit-number"></a>

Limit the number of calls returned.

#### 🔄 Return<a id="🔄-return"></a>

[CallDetail](./models/call-detail.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/list-calls` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.call.makeConnection`<a id="retellaicallmakeconnection"></a>

Create a new phone call

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const makeConnectionResponse = await retellai.call.makeConnection({
  phone_number: {
    from: "14157774444",
    to: "12137774445",
  },
  override_agent_id: "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phone_number: [`CallMakeConnectionRequestPhoneNumber`](./models/call-make-connection-request-phone-number.ts)<a id="phone_number-callmakeconnectionrequestphonenumbermodelscall-make-connection-request-phone-numberts"></a>

##### override_agent_id: `string`<a id="override_agent_id-string"></a>

For this particular call, override the agent used with this agent id. This does not bind the agent to this number, this is for one time override.

##### retell_llm_dynamic_variables: `{ [key: string]: any; }`<a id="retell_llm_dynamic_variables--key-string-any-"></a>

Add optional dynamic variables in key value pairs of string that injects into your Retell LLM prompt and tool description. Only applicable for Retell LLM.

#### 🔄 Return<a id="🔄-return"></a>

[CallBase](./models/call-base.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/create-phone-call` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.phoneNumber.getAllNumbers`<a id="retellaiphonenumbergetallnumbers"></a>

List all phone numbers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllNumbersResponse = await retellai.phoneNumber.getAllNumbers();
```

#### 🔄 Return<a id="🔄-return"></a>

[PhoneNumberResponse](./models/phone-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/list-phone-numbers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.phoneNumber.getDetails`<a id="retellaiphonenumbergetdetails"></a>

Retrieve details of a specific phone number

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await retellai.phoneNumber.getDetails({
  phoneNumber: "14157774444",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phoneNumber: `string`<a id="phonenumber-string"></a>

BCP 47 format of the number (+country code, then number with no space, no special characters), used as the unique identifier for phone number APIs.

#### 🔄 Return<a id="🔄-return"></a>

[PhoneNumberResponse](./models/phone-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/get-phone-number/{phone_number}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.phoneNumber.purchaseNumberAndBindAgent`<a id="retellaiphonenumberpurchasenumberandbindagent"></a>

Buy a new phone number & Bind an agent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const purchaseNumberAndBindAgentResponse =
  await retellai.phoneNumber.purchaseNumberAndBindAgent({
    agent_id: "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD",
    area_code: 415,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### agent_id: `string`<a id="agent_id-string"></a>

Unique id of agent to bind to newly obtained number. The number will automatically use the agent when doing inbound / outbound calls.

##### area_code: `number`<a id="area_code-number"></a>

Area code of the number to obtain. Format is a 3 digit integer. Currently only supports US area code.

#### 🔄 Return<a id="🔄-return"></a>

[PhoneNumberResponse](./models/phone-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/create-phone-number` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.phoneNumber.removePhoneNumber`<a id="retellaiphonenumberremovephonenumber"></a>

Delete an existing phone number

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePhoneNumberResponse = await retellai.phoneNumber.removePhoneNumber({
  phoneNumber: "14157774444",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phoneNumber: `string`<a id="phonenumber-string"></a>

BCP 47 format of the number (+country code, then number with no space, no special characters), used as the unique identifier for phone number APIs.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete-phone-number/{phone_number}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.phoneNumber.updateRetellLlm`<a id="retellaiphonenumberupdateretellllm"></a>

Update an existing Retell LLM

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRetellLlmResponse = await retellai.phoneNumber.updateRetellLlm({
  phoneNumber: "14157774444",
  agent_id: "agent_id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### agent_id: `string`<a id="agent_id-string"></a>

Unique id of agent to bind to number. The number will automatically use the agent when doing inbound / outbound calls.

##### phoneNumber: `string`<a id="phonenumber-string"></a>

BCP 47 format of the number (+country code, then number with no space, no special characters), used as the unique identifier for phone number APIs.

#### 🔄 Return<a id="🔄-return"></a>

[PhoneNumberResponse](./models/phone-number-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/update-phone-number/{phone_number}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.retell.deleteLlm`<a id="retellairetelldeletellm"></a>

Delete an existing Retell LLM

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteLlmResponse = await retellai.retell.deleteLlm({
  llmId: "oBeDLoLOeuAbiuaMFXRtDOLriTJ5tSxD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### llmId: `string`<a id="llmid-string"></a>

Unique id of the Retell LLM to be deleted.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete-retell-llm/{llm_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.retell.getLlmDetails`<a id="retellairetellgetllmdetails"></a>

Retrieve details of a specific Retell LLM

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLlmDetailsResponse = await retellai.retell.getLlmDetails({
  llmId: "16b980523634a6dc504898cda492e939",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### llmId: `string`<a id="llmid-string"></a>

Unique id of the Retell LLM to be retrieved.

#### 🔄 Return<a id="🔄-return"></a>

[RetellLLMResponse](./models/retell-llmresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/get-retell-llm/{llm_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.retell.newLlm`<a id="retellairetellnewllm"></a>

Create a new Retell LLM

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const newLlmResponse = await retellai.retell.newLlm({
  general_prompt: "You are ...",
  general_tools: [null],
  states: [
    {
      name: "information_collection",
      state_prompt: "## Task\nYou will follow the steps below...",
    },
  ],
  starting_state: "information_collection",
  begin_message: "Hey I am a virtual assistant calling from Retell Hospital.",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### general_prompt: `string`<a id="general_prompt-string"></a>

General prompt that\\\'s appended to system prompt no matter what state the agent is in.   - System prompt (with state) = general prompt + state prompt.  - System prompt (no state) = general prompt.

##### general_tools: [`Tool`](./models/tool.ts)[]<a id="general_tools-toolmodelstoolts"></a>

A list of tools the model may call (to get external knowledge, call API, etc). You can select from some common predefined tools like end call, transfer call, etc; or you can create your own custom tool (last option) for the LLM to use.   - Tools of LLM (with state) = general tools + state tools + state transitions  - Tools of LLM (no state) = general tools

##### states: [`State`](./models/state.ts)[]<a id="states-statemodelsstatets"></a>

States of the LLM. This is to help reduce prompt length and tool choices when the call can be broken into distinct states. With shorter prompts and less tools, the LLM can better focus and follow the rules, minimizing hallucination. If this field is not set, the agent would only have general prompt and general tools (essentially one state).

##### starting_state: `string`<a id="starting_state-string"></a>

Name of the starting state. Required if states is not empty.

##### begin_message: `string`<a id="begin_message-string"></a>

First utterance said by the agent in the call. If not set, LLM will dynamically generate a message. If set to \\\"\\\", agent will wait for user to speak first.

#### 🔄 Return<a id="🔄-return"></a>

[RetellLLMResponse](./models/retell-llmresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/create-retell-llm` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.retell.updateLlm`<a id="retellairetellupdatellm"></a>

Update an existing Retell LLM

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLlmResponse = await retellai.retell.updateLlm({
  llmId: "16b980523634a6dc504898cda492e939",
  general_prompt: "You are ...",
  general_tools: [null],
  states: [
    {
      name: "information_collection",
      state_prompt: "## Task\nYou will follow the steps below...",
    },
  ],
  starting_state: "information_collection",
  begin_message: "Hey I am a virtual assistant calling from Retell Hospital.",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### llmId: `string`<a id="llmid-string"></a>

Unique id of the Retell LLM to be updated.

##### general_prompt: `string`<a id="general_prompt-string"></a>

General prompt that\\\'s appended to system prompt no matter what state the agent is in.   - System prompt (with state) = general prompt + state prompt.  - System prompt (no state) = general prompt.

##### general_tools: [`Tool`](./models/tool.ts)[]<a id="general_tools-toolmodelstoolts"></a>

A list of tools the model may call (to get external knowledge, call API, etc). You can select from some common predefined tools like end call, transfer call, etc; or you can create your own custom tool (last option) for the LLM to use.   - Tools of LLM (with state) = general tools + state tools + state transitions  - Tools of LLM (no state) = general tools

##### states: [`State`](./models/state.ts)[]<a id="states-statemodelsstatets"></a>

States of the LLM. This is to help reduce prompt length and tool choices when the call can be broken into distinct states. With shorter prompts and less tools, the LLM can better focus and follow the rules, minimizing hallucination. If this field is not set, the agent would only have general prompt and general tools (essentially one state).

##### starting_state: `string`<a id="starting_state-string"></a>

Name of the starting state. Required if states is not empty.

##### begin_message: `string`<a id="begin_message-string"></a>

First utterance said by the agent in the call. If not set, LLM will dynamically generate a message. If set to \\\"\\\", agent will wait for user to speak first.

#### 🔄 Return<a id="🔄-return"></a>

[RetellLLMResponse](./models/retell-llmresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/update-retell-llm/{llm_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `retellai.retellLLM.listAll`<a id="retellairetellllmlistall"></a>

List all retell LLM

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await retellai.retellLLM.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[RetellLLMResponse](./models/retell-llmresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/list-retell-llms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
