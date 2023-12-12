# Load testing

## Requirements

[`k6`](https://k6.io/docs/get-started/installation/) v0.47.0

## Running

Change the IP in `loadtest/grafana/k6script.js` to the IP of the frontend. You can find the ip by running:

```
minikube service list
```

If no external IP is listed:

```
minikube tunnel
```

Run the following to start the load test

```
k6 run loadtest/grafana/k6script.js
```
