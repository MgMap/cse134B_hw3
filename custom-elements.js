// Hello World Custom Element - logs to console only, does not modify DOM
class HelloWorld extends HTMLElement {
    connectedCallback() {
        console.log('Hello world! This is a custom HTML element.');
    }
}

// Register the custom element
customElements.define('hello-world', HelloWorld);
