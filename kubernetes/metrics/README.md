## Metrics

To get metrics up and running, run the following commands:

Clone the following Kubernetes resources

```
git clone https://github.com/devopscube/kube-state-metrics-configs.git
```

These resources will publish metrics in a desirable way so they can be captured and queried.

Create the resources in the metrics cluster

```
kubectl apply -f kube-state-metrics-configs/
```

Run the following to find the IP of the Prometheus frontend

```
minikube service list
```

If no external IP shows up for Prometheus

```
minikube tunnel
```