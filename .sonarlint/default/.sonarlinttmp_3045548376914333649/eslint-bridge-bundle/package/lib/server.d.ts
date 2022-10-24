/// <reference types="node" />
import 'module-alias/register';
import http from 'http';
/**
 * Starts the bridge
 *
 * The bridge is an Express.js web server that exposes several services
 * through a REST API. Once started, the bridge first begins by loading
 * any provided rule bundles and then waits for incoming requests.
 *
 * Communication between two ends is entirely done with the JSON format.
 *
 * Although a web server, the bridge is not exposed to the outside world
 * but rather exclusively communicate either with the JavaScript plugin
 * which embeds it or directly with SonarLint.
 *
 * @param port the port to listen to
 * @param host the host to listen to
 * @param shutdownTimeout timeout in ms to shut down the server since last request
 * @returns an http server
 */
export declare function start(port?: number, host?: string, shutdownTimeout?: number): Promise<http.Server>;
