<quiz>
  <question>
    <p>Which of the following best describes HTTP?</p>
    <answer correct>A protocol for transferring hypertext</answer>
    <answer>A markup language for structuring webpages</answer>
    <answer>A hyperlink to a webpage on the internet</answer>
    <answer>A hotmail hosting server</answer>
    <explanation>HTTP is a hypertext transfer protocol.</explanation>
  </question>
  <weight>4</weight>
</quiz>

<quiz>
  <question>
    <p>Which of the following HTTP requests can be used to create a new resource?</p>
    <answer>GET</answer>
    <answer>PUT</answer>
    <answer correct>POST</answer>
    <answer>PATCH</answer>
    <explanation>POST is used to create resources. GET will read a resource while PUT/PATCH will modify a resource.</explanation>
  </question>
  <weight>4</weight>
</quiz>


<quiz>
  <question multiple>
    <p>Which of the following are components of the _request line_ in a HTTP request?</p>
    <answer correct>An HTTP method</answer>
    <answer correct>The URI path</answer>
    <answer correct>The HTTP version</answer>
    <answer>The HTTP headers</answer>
    <explanation>The header is separate from the request line in a HTTP request.</explanation>
  </question>
  <weight>4</weight>
</quiz>

<quiz>
  <question multiple>
    <p>Which of the following are valid HTTP "verbs" (or "methods")?</p>
    <answer correct>GET</answer>
    <answer correct>PUT</answer>
    <answer>SET</answer>
    <answer>UPDATE</answer>
    <explanation>The GET and PUT verbs are defined in [RFC2616](https://tools.ietf.org/html/rfc2616), the specification for HTTP/1.1.</explanation>
  </question>
  <weight>4</weight>
</quiz>


<quiz>
  <question>
    <p>What is the meaning of HTTP status code 500?</p>
    <answer correct>INTERNAL SERVER ERROR</answer>
    <answer>BAD REQUEST</answer>
    <answer>OK</answer>
    <answer>NOT FOUND</answer>
    <explanation>It is INTERNAL SERVER ERROR.</explanation>
  </question>
  <weight>4</weight>
</quiz>

<quiz>
  <question>
    <p>What is the meaning of the HTTP status code 400</p>
    <answer>I'M A TEAPOT</answer>
    <answer>UNAUTHORIZED</answer>
    <answer correct>BAD REQUEST</answer>
    <answer>FORBIDDEN</answer>
    <explanation>It is defined as BAD REQUEST.</explanation>
  </question>
  <weight>4</weight>
</quiz>

<quiz>
  <question>
    <p>What does the range of HTTP status codes from 300 - 399 indicate?</p>
    <answer>Success</answer>
    <answer>Client error</answer>
    <answer correct>Redirection</answer>
    <answer>Informational</answer>
    <explanation>It is the range that indicates a redirection.</explanation>
  </question>
  <weight>4</weight>
</quiz>

<quiz>
  <question>
    <p>What does the range of HTTP status codes from 200 - 299 indicate?</p>
    <answer correct>Success</answer>
    <answer>Client error</answer>
    <answer>Redirection</answer>
    <answer>Informational</answer>
    <explanation>It is the range that indicates successful responses.</explanation>
  </question>
  <weight>4</weight>
</quiz>

<quiz>
  <question>
    <p>How would you tell the server that the body in an HTTP request will be in the JSON format?</p>
    <answer correct>Include `Content-Type: application/json` in the request header</answer>
    <answer>Append `.json` to the end of the URI</answer>
    <answer>Use the JSON HTTP method</answer>
    <answer>The server will automatically recognize the body type</answer>
    <explanation>"Content-Type: application/json" in the request header is the proper way to specify this.</explanation>
  </question>
  <weight>4</weight>
</quiz>
