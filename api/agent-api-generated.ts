/* tslint:disable */
/* eslint-disable */
/*
Retell SDK

API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.

The version of the OpenAPI document: 1.0.0
Contact: founders@retellai.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AgentCreateNewAgentRequest } from '../models';
// @ts-ignore
import { AgentResponse } from '../models';
// @ts-ignore
import { BaseAgent } from '../models';
// @ts-ignore
import { CallEstablishConnection401Response } from '../models';
// @ts-ignore
import { CallEstablishConnection422Response } from '../models';
// @ts-ignore
import { CallEstablishConnection500Response } from '../models';
// @ts-ignore
import { CallEstablishConnectionResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AgentApi - axios parameter creator
 * @export
 */
export const AgentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new agent
         * @param {AgentCreateNewAgentRequest} agentCreateNewAgentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewAgent: async (agentCreateNewAgentRequest: AgentCreateNewAgentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'agentCreateNewAgentRequest' is not null or undefined
            assertParamExists('createNewAgent', 'agentCreateNewAgentRequest', agentCreateNewAgentRequest)
            const localVarPath = `/create-agent`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: agentCreateNewAgentRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/create-agent',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(agentCreateNewAgentRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an existing agent
         * @param {string} agentId Unique id of the agent to be deleted.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExistingAgent: async (agentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'agentId' is not null or undefined
            assertParamExists('deleteExistingAgent', 'agentId', agentId)
            const localVarPath = `/delete-agent/{agent_id}`
                .replace(`{${"agent_id"}}`, encodeURIComponent(String(agentId !== undefined ? agentId : `-agent_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/delete-agent/{agent_id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/list-agents`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/list-agents',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve details of a specific agent
         * @param {string} agentId Unique id of the agent to be retrieved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (agentId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'agentId' is not null or undefined
            assertParamExists('getDetails', 'agentId', agentId)
            const localVarPath = `/get-agent/{agent_id}`
                .replace(`{${"agent_id"}}`, encodeURIComponent(String(agentId !== undefined ? agentId : `-agent_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/get-agent/{agent_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an existing agent
         * @param {string} agentId Unique id of the agent to be updated.
         * @param {BaseAgent} baseAgent 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExistingAgent: async (agentId: string, baseAgent: BaseAgent, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'agentId' is not null or undefined
            assertParamExists('updateExistingAgent', 'agentId', agentId)
            // verify required parameter 'baseAgent' is not null or undefined
            assertParamExists('updateExistingAgent', 'baseAgent', baseAgent)
            const localVarPath = `/update-agent/{agent_id}`
                .replace(`{${"agent_id"}}`, encodeURIComponent(String(agentId !== undefined ? agentId : `-agent_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: baseAgent,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/update-agent/{agent_id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(baseAgent, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AgentApi - functional programming interface
 * @export
 */
export const AgentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AgentApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new agent
         * @param {AgentApiCreateNewAgentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewAgent(requestParameters: AgentApiCreateNewAgentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AgentResponse>> {
            const agentCreateNewAgentRequest: AgentCreateNewAgentRequest = requestParameters;
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewAgent(agentCreateNewAgentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete an existing agent
         * @param {AgentApiDeleteExistingAgentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteExistingAgent(requestParameters: AgentApiDeleteExistingAgentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteExistingAgent(requestParameters.agentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AgentResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieve details of a specific agent
         * @param {AgentApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: AgentApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AgentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.agentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an existing agent
         * @param {AgentApiUpdateExistingAgentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateExistingAgent(requestParameters: AgentApiUpdateExistingAgentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AgentResponse>> {
            const baseAgent: BaseAgent = {
                llm_websocket_url: requestParameters.llm_websocket_url,
                voice_id: requestParameters.voice_id,
                voice_temperature: requestParameters.voice_temperature,
                voice_speed: requestParameters.voice_speed,
                responsiveness: requestParameters.responsiveness,
                enable_backchannel: requestParameters.enable_backchannel,
                ambient_sound: requestParameters.ambient_sound,
                agent_name: requestParameters.agent_name,
                language: requestParameters.language,
                webhook_url: requestParameters.webhook_url,
                boosted_keywords: requestParameters.boosted_keywords,
                format_text: requestParameters.format_text,
                optOutSensitiveDataStorage: requestParameters.optOutSensitiveDataStorage
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateExistingAgent(requestParameters.agentId, baseAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AgentApi - factory interface
 * @export
 */
export const AgentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AgentApiFp(configuration)
    return {
        /**
         * Create a new agent
         * @param {AgentApiCreateNewAgentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewAgent(requestParameters: AgentApiCreateNewAgentRequest, options?: AxiosRequestConfig): AxiosPromise<AgentResponse> {
            return localVarFp.createNewAgent(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an existing agent
         * @param {AgentApiDeleteExistingAgentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteExistingAgent(requestParameters: AgentApiDeleteExistingAgentRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteExistingAgent(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all agents
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(options?: AxiosRequestConfig): AxiosPromise<Array<AgentResponse>> {
            return localVarFp.getAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve details of a specific agent
         * @param {AgentApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: AgentApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<AgentResponse> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an existing agent
         * @param {AgentApiUpdateExistingAgentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateExistingAgent(requestParameters: AgentApiUpdateExistingAgentRequest, options?: AxiosRequestConfig): AxiosPromise<AgentResponse> {
            return localVarFp.updateExistingAgent(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewAgent operation in AgentApi.
 * @export
 * @interface AgentApiCreateNewAgentRequest
 */
export type AgentApiCreateNewAgentRequest = {
    
} & AgentCreateNewAgentRequest

/**
 * Request parameters for deleteExistingAgent operation in AgentApi.
 * @export
 * @interface AgentApiDeleteExistingAgentRequest
 */
export type AgentApiDeleteExistingAgentRequest = {
    
    /**
    * Unique id of the agent to be deleted.
    * @type {string}
    * @memberof AgentApiDeleteExistingAgent
    */
    readonly agentId: string
    
}

/**
 * Request parameters for getDetails operation in AgentApi.
 * @export
 * @interface AgentApiGetDetailsRequest
 */
export type AgentApiGetDetailsRequest = {
    
    /**
    * Unique id of the agent to be retrieved.
    * @type {string}
    * @memberof AgentApiGetDetails
    */
    readonly agentId: string
    
}

/**
 * Request parameters for updateExistingAgent operation in AgentApi.
 * @export
 * @interface AgentApiUpdateExistingAgentRequest
 */
export type AgentApiUpdateExistingAgentRequest = {
    
    /**
    * Unique id of the agent to be updated.
    * @type {string}
    * @memberof AgentApiUpdateExistingAgent
    */
    readonly agentId: string
    
} & BaseAgent

/**
 * AgentApiGenerated - object-oriented interface
 * @export
 * @class AgentApiGenerated
 * @extends {BaseAPI}
 */
export class AgentApiGenerated extends BaseAPI {
    /**
     * Create a new agent
     * @param {AgentApiCreateNewAgentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentApiGenerated
     */
    public createNewAgent(requestParameters: AgentApiCreateNewAgentRequest, options?: AxiosRequestConfig) {
        return AgentApiFp(this.configuration).createNewAgent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete an existing agent
     * @param {AgentApiDeleteExistingAgentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentApiGenerated
     */
    public deleteExistingAgent(requestParameters: AgentApiDeleteExistingAgentRequest, options?: AxiosRequestConfig) {
        return AgentApiFp(this.configuration).deleteExistingAgent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all agents
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentApiGenerated
     */
    public getAll(options?: AxiosRequestConfig) {
        return AgentApiFp(this.configuration).getAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve details of a specific agent
     * @param {AgentApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentApiGenerated
     */
    public getDetails(requestParameters: AgentApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return AgentApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an existing agent
     * @param {AgentApiUpdateExistingAgentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgentApiGenerated
     */
    public updateExistingAgent(requestParameters: AgentApiUpdateExistingAgentRequest, options?: AxiosRequestConfig) {
        return AgentApiFp(this.configuration).updateExistingAgent(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
