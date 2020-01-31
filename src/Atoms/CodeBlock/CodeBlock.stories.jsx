/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import React from 'react'
import styled from 'styled-components'

import CodeBlock from './index'

import markdown from './README.md'

export default {
  title: 'Atoms/CodeBlock',
}

const Wrapper = styled.div`
  height: 600px;
  width: 800px;
`

export const codeBlock = () => (
  <Wrapper>
    <CodeBlock>
      {`
93.180.71.3 - - [17/May/2015:08:05:32 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
93.180.71.3 - - [17/May/2015:08:05:23 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
80.91.33.133 - - [17/May/2015:08:05:24 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
217.168.17.5 - - [17/May/2015:08:05:34 +0000] "GET /downloads/product_1 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.8.10.3)"
217.168.17.5 - - [17/May/2015:08:05:09 +0000] "GET /downloads/product_2 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.8.10.3)"
93.180.71.3 - - [17/May/2015:08:05:57 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
217.168.17.5 - - [17/May/2015:08:05:02 +0000] "GET /downloads/product_2 HTTP/1.1" 404 337 "-" "Debian APT-HTTP/1.3 (0.8.10.3)"
217.168.17.5 - - [17/May/2015:08:05:42 +0000] "GET /downloads/product_1 HTTP/1.1" 404 332 "-" "Debian APT-HTTP/1.3 (0.8.10.3)"
80.91.33.133 - - [17/May/2015:08:05:01 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
93.180.71.3 - - [17/May/2015:08:05:27 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
217.168.17.5 - - [17/May/2015:08:05:12 +0000] "GET /downloads/product_2 HTTP/1.1" 200 3316 "-" "-"
188.138.60.101 - - [17/May/2015:08:05:49 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:14 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
46.4.66.76 - - [17/May/2015:08:05:45 +0000] "GET /downloads/product_1 HTTP/1.1" 404 318 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
93.180.71.3 - - [17/May/2015:08:05:26 +0000] "GET /downloads/product_1 HTTP/1.1" 404 324 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
91.234.194.89 - - [17/May/2015:08:05:22 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:07 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
37.26.93.214 - - [17/May/2015:08:05:38 +0000] "GET /downloads/product_2 HTTP/1.1" 404 319 "-" "Go 1.1 package http"
188.138.60.101 - - [17/May/2015:08:05:25 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
93.180.71.3 - - [17/May/2015:08:05:11 +0000] "GET /downloads/product_1 HTTP/1.1" 404 340 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
46.4.66.76 - - [17/May/2015:08:05:02 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
62.75.198.179 - - [17/May/2015:08:05:06 +0000] "GET /downloads/product_2 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:55 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
173.203.139.108 - - [17/May/2015:08:05:53 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
210.245.80.75 - - [17/May/2015:08:05:32 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
46.4.83.163 - - [17/May/2015:08:05:52 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
91.234.194.89 - - [17/May/2015:08:05:18 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
31.22.86.126 - - [17/May/2015:08:05:24 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
217.168.17.5 - - [17/May/2015:08:05:25 +0000] "GET /downloads/product_1 HTTP/1.1" 200 3301 "-" "-"
80.91.33.133 - - [17/May/2015:08:05:50 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
173.203.139.108 - - [17/May/2015:08:05:03 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:35 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
5.83.131.103 - - [17/May/2015:08:05:51 +0000] "GET /downloads/product_1 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
80.91.33.133 - - [17/May/2015:08:05:59 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
200.6.73.40 - - [17/May/2015:08:05:42 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:48 +0000] "GET /downloads/product_1 HTTP/1.1" 404 324 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
93.180.71.3 - - [17/May/2015:08:05:58 +0000] "GET /downloads/product_1 HTTP/1.1" 404 337 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
62.75.198.179 - - [17/May/2015:08:05:39 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
50.57.209.92 - - [17/May/2015:08:05:41 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
188.138.60.101 - - [17/May/2015:08:05:48 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
46.4.66.76 - - [17/May/2015:08:05:02 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
50.57.209.92 - - [17/May/2015:08:05:25 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
91.239.186.133 - - [17/May/2015:08:05:04 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:08 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:04 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
93.190.71.150 - - [17/May/2015:08:05:33 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
91.234.194.89 - - [17/May/2015:08:05:57 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
46.4.83.163 - - [17/May/2015:08:05:20 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:39 +0000] "GET /downloads/product_1 HTTP/1.1" 404 335 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
54.187.216.43 - - [17/May/2015:08:05:07 +0000] "GET /downloads/product_2 HTTP/1.1" 200 951 "-" "urlgrabber/3.9.1 yum/3.4.3"
50.57.209.92 - - [17/May/2015:08:05:59 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:02 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
173.203.139.108 - - [17/May/2015:08:05:07 +0000] "GET /downloads/product_1 HTTP/1.1" 404 332 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
5.83.131.103 - - [17/May/2015:08:05:31 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
173.203.139.108 - - [17/May/2015:08:05:14 +0000] "GET /downloads/product_1 HTTP/1.1" 404 334 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:46 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
50.57.209.92 - - [17/May/2015:08:05:01 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:41 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
37.26.93.214 - - [17/May/2015:08:05:52 +0000] "GET /downloads/product_2 HTTP/1.1" 200 3318 "-" "Go 1.1 package http"
23.23.226.37 - - [17/May/2015:08:05:19 +0000] "GET /downloads/product_2 HTTP/1.1" 200 2578 "-" "urlgrabber/3.9.1 yum/3.4.3"
93.180.71.3 - - [17/May/2015:08:05:20 +0000] "GET /downloads/product_1 HTTP/1.1" 404 339 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
173.203.139.108 - - [17/May/2015:08:05:56 +0000] "GET /downloads/product_1 HTTP/1.1" 404 331 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
62.75.198.179 - - [17/May/2015:08:05:13 +0000] "GET /downloads/product_2 HTTP/1.1" 404 346 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
31.22.86.126 - - [17/May/2015:08:05:10 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
50.57.209.92 - - [17/May/2015:08:05:58 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
91.239.186.133 - - [17/May/2015:08:05:11 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
46.4.66.76 - - [17/May/2015:08:05:00 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
200.6.73.40 - - [17/May/2015:08:05:23 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:13 +0000] "GET /downloads/product_1 HTTP/1.1" 404 336 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
93.190.71.150 - - [17/May/2015:08:05:35 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
91.234.194.89 - - [17/May/2015:08:05:26 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:18 +0000] "GET /downloads/product_1 HTTP/1.1" 404 333 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:23 +0000] "GET /downloads/product_1 HTTP/1.1" 404 340 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
217.168.17.5 - - [17/May/2015:08:05:27 +0000] "GET /downloads/product_2 HTTP/1.1" 404 339 "-" "Debian APT-HTTP/1.3 (0.8.10.3)"
46.4.83.163 - - [17/May/2015:08:05:54 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:25 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
50.57.209.92 - - [17/May/2015:08:05:56 +0000] "GET /downloads/product_2 HTTP/1.1" 404 340 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:52 +0000] "GET /downloads/product_1 HTTP/1.1" 404 334 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
188.138.60.101 - - [17/May/2015:08:05:04 +0000] "GET /downloads/product_2 HTTP/1.1" 404 340 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:11 +0000] "GET /downloads/product_1 HTTP/1.1" 404 324 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
134.119.20.172 - - [17/May/2015:08:05:26 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:29 +0000] "GET /downloads/product_1 HTTP/1.1" 404 331 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:44 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
91.121.161.213 - - [17/May/2015:08:05:14 +0000] "GET /downloads/product_2 HTTP/1.1" 200 490 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:17 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
80.91.33.133 - - [17/May/2015:08:05:27 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
37.26.93.214 - - [17/May/2015:08:05:03 +0000] "GET /downloads/product_2 HTTP/1.1" 200 490 "-" "Go 1.1 package http"
5.83.131.103 - - [17/May/2015:08:05:57 +0000] "GET /downloads/product_1 HTTP/1.1" 404 346 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
50.57.209.92 - - [17/May/2015:08:05:39 +0000] "GET /downloads/product_2 HTTP/1.1" 404 337 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:52 +0000] "GET /downloads/product_1 HTTP/1.1" 404 331 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
54.64.16.235 - - [17/May/2015:08:05:13 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.20.1)"
93.180.71.3 - - [17/May/2015:08:05:28 +0000] "GET /downloads/product_1 HTTP/1.1" 404 336 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
202.143.95.26 - - [17/May/2015:08:05:55 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
202.143.95.26 - - [17/May/2015:08:05:58 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
202.143.95.26 - - [17/May/2015:08:05:01 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
80.91.33.133 - - [17/May/2015:08:05:14 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
91.239.186.133 - - [17/May/2015:08:05:03 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
173.203.139.108 - - [17/May/2015:08:05:35 +0000] "GET /downloads/product_1 HTTP/1.1" 404 328 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:39 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
87.233.156.242 - - [17/May/2015:08:05:37 +0000] "GET /downloads/product_2 HTTP/1.1" 404 318 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
62.75.198.179 - - [17/May/2015:08:05:33 +0000] "GET /downloads/product_2 HTTP/1.1" 404 340 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
50.57.209.92 - - [17/May/2015:08:05:16 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:53 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
93.190.71.150 - - [17/May/2015:08:05:34 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
46.4.66.76 - - [17/May/2015:08:05:38 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (1.0.1ubuntu2)"
80.91.33.133 - - [17/May/2015:08:05:09 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
91.234.194.89 - - [17/May/2015:08:05:58 +0000] "GET /downloads/product_2 HTTP/1.1" 404 340 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
217.168.17.5 - - [17/May/2015:08:05:07 +0000] "GET /downloads/product_1 HTTP/1.1" 404 341 "-" "Debian APT-HTTP/1.3 (0.8.10.3)"
46.4.83.163 - - [17/May/2015:08:05:23 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
50.57.209.92 - - [17/May/2015:08:05:19 +0000] "GET /downloads/product_1 HTTP/1.1" 404 335 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
200.6.73.40 - - [17/May/2015:08:05:46 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
91.121.161.213 - - [17/May/2015:08:05:28 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:08:05:52 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
188.138.60.101 - - [17/May/2015:08:05:22 +0000] "GET /downloads/product_2 HTTP/1.1" 404 337 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
144.76.151.58 - - [17/May/2015:08:05:54 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
134.119.20.172 - - [17/May/2015:09:05:28 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
80.91.33.133 - - [17/May/2015:09:05:26 +0000] "GET /downloads/product_1 HTTP/1.1" 404 337 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.17)"
80.91.33.133 - - [17/May/2015:09:05:55 +0000] "GET /downloads/product_1 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
5.83.131.103 - - [17/May/2015:09:05:08 +0000] "GET /downloads/product_1 HTTP/1.1" 404 324 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
93.180.71.3 - - [17/May/2015:09:05:18 +0000] "GET /downloads/product_1 HTTP/1.1" 404 341 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.21)"
80.91.33.133 - - [17/May/2015:09:05:05 +0000] "GET /downloads/product_1 HTTP/1.1" 404 340 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.16)"
50.57.209.92 - - [17/May/2015:09:05:25 +0000] "GET /downloads/product_1 HTTP/1.1" 404 332 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
5.83.131.103 - - [17/May/2015:09:05:18 +0000] "GET /downloads/product_1 HTTP/1.1" 404 345 "-" "Debian APT-HTTP/1.3 (0.8.16~exp12ubuntu10.22)"
62.75.167.106 - - [17/May/2015:09:05:56 +0000] "GET /downloads/product_2 HTTP/1.1" 304 0 "-" "Debian APT-HTTP/1.3 (0.9.7.9)"
    `}
    </CodeBlock>
  </Wrapper>
)
codeBlock.story = {
  parameters: {
    notes: { markdown },
    jest:  ['CodeBlock.test.jsx'],
  },
}