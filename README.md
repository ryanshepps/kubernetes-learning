# Kubernetes Learning

## Requirements

[`kubectl`](https://kubernetes.io/docs/tasks/tools/) v1.28.2 \
[`minikube`](https://minikube.sigs.k8s.io/docs/start/) v1.31.2

## Running

(I hope to find a way to make this simpler.)

Start Minikube

```
minikube start
```

Connect local docker to minikube docker

```
eval $(minikube docker-env)
```

Build docker images. These will automatically be added to the minikube docker registry because of the `eval` command we ran earlier.

```
cd backend && ./scripts/buildDocker.sh && cd .. \
cd frontend && ./scripts/buildDocker.sh && cd .. 
```

Create namespaces to appropriately separate resources
```
kubectl apply -f kubernetes/app \
kubectl apply -f kubernetes/metrics
```

Deploy pods in Minikube that have containers that use the images we just built.

```
kubectl apply -f kubernetes/app/deployments \
kubectl apply -f kubernetes/metrics/deployments
```

Create services for each deployment so that traffic can be routed to the pods we just created.

```
kubectl apply -f kubernetes/app/services \ 
kubectl apply -f kubernetes/metrics/services
```

Add externalized configurations as config maps so that you can change the config without having to redeploy.

```
kubectl apply -f kubernetes/metrics/configmap
```

Add the appropriate authorization for Prometheus to grab metrics.
```
kubectl apply -f kubernetes/metrics/clusteroles
```

To access the frontend, run the following command and access the external IP via a web browser.

```
minikube service list
```