# Kubernetes Learning

## Requirements

[`kubectl`](https://kubernetes.io/docs/tasks/tools/) v1.28.2 \
[`minikube`](https://minikube.sigs.k8s.io/docs/start/) v1.31.2

## Running

Start Minikube

```
minikube start
```

Connect current session to minikube registry

```
eval $(minikube docker-env)
```

Build docker images. These will automatically be added to the minikube docker registry because of the `eval` command we ran earlier.

```
cd backend && ./scripts/buildDocker.sh && cd .. \
cd frontend && ./scripts/buildDocker.sh && cd .. 
```

Create all namespaces so that resources can be added to them

```
kubectl apply -f kubernetes/app -f kubernetes/metrics
```

Create all resources

```
kubectl apply -R -f kubernetes/
```

Open frontend service to external traffic

```
minikube tunnel
```

To access the frontend, run the following command and access the external IP via a web browser.
```
minikube service list
```