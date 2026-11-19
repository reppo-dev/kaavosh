import type * as React from "react";
import type { VisualKind } from "@/data/schema";
import { HttpRequestExplainer } from "./HttpRequest";
import { EventLoopExplainer } from "./EventLoop";
import { ReactRenderExplainer } from "./ReactRender";
import { DomRenderExplainer } from "./DomRender";
import { GitFlowExplainer } from "./GitFlow";
import { DockerContainersExplainer } from "./DockerContainers";
import { AuthJwtExplainer } from "./AuthJwt";
import { SqlJoinExplainer } from "./SqlJoin";
import { EncryptionExplainer } from "./Encryption";
import { MlTrainingExplainer } from "./MlTraining";
import { CiCdPipelineExplainer } from "./CiCdPipeline";
import { MobileLifecycleExplainer } from "./MobileLifecycle";
import { BinarySearchExplainer } from "./BinarySearch";
import { SortingExplainer } from "./Sorting";
import { StackQueueExplainer } from "./StackQueue";
import { HashTableExplainer } from "./HashTable";
import { LinkedListExplainer } from "./LinkedList";
import { GraphTraversalExplainer } from "./GraphTraversal";
import { MemoizationExplainer } from "./Memoization";
import { TrieExplainer } from "./Trie";
import { StarMethodExplainer } from "./StarMethod";
import { JsxFlowExplainer } from "./JsxFlow";
import { HooksFlowExplainer } from "./HooksFlow";
import { ReduxFlowExplainer } from "./ReduxFlow";
import { PromiseAsyncExplainer } from "./PromiseAsync";
import { ScopeClosureExplainer } from "./ScopeClosure";
import { CssCascadeExplainer } from "./CssCascade";
import { CacheFlowExplainer } from "./CacheFlow";
import { LoadBalanceExplainer } from "./LoadBalance";
import { K8sClusterExplainer } from "./K8sCluster";
import { LlmFlowExplainer } from "./LlmFlow";
import { WidgetTreeExplainer } from "./WidgetTree";
import { HeapSiftExplainer } from "./HeapSift";
import { SqlQueryExplainer } from "./SqlQuery";
import { ArrayOpsExplainer } from "./ArrayOps";

export const explainerRegistry: Record<VisualKind, React.ComponentType | null> = {
  "http-request": HttpRequestExplainer,
  "event-loop": EventLoopExplainer,
  "react-render": ReactRenderExplainer,
  "dom-render": DomRenderExplainer,
  "git-flow": GitFlowExplainer,
  "docker-containers": DockerContainersExplainer,
  "auth-jwt": AuthJwtExplainer,
  "sql-join": SqlJoinExplainer,
  encryption: EncryptionExplainer,
  "ml-training": MlTrainingExplainer,
  "ci-cd-pipeline": CiCdPipelineExplainer,
  "mobile-lifecycle": MobileLifecycleExplainer,
  "binary-search": BinarySearchExplainer,
  sorting: SortingExplainer,
  "stack-queue": StackQueueExplainer,
  "hash-table": HashTableExplainer,
  "linked-list": LinkedListExplainer,
  "graph-traversal": GraphTraversalExplainer,
  "memoization-dp": MemoizationExplainer,
  trie: TrieExplainer,
  "star-method": StarMethodExplainer,
  "jsx-flow": JsxFlowExplainer,
  "hooks-flow": HooksFlowExplainer,
  "redux-flow": ReduxFlowExplainer,
  "promise-async": PromiseAsyncExplainer,
  "scope-closure": ScopeClosureExplainer,
  "css-cascade": CssCascadeExplainer,
  "cache-flow": CacheFlowExplainer,
  "load-balance": LoadBalanceExplainer,
  "k8s-cluster": K8sClusterExplainer,
  "llm-flow": LlmFlowExplainer,
  "widget-tree": WidgetTreeExplainer,
  "sql-query": SqlQueryExplainer,
  "heap-sift": HeapSiftExplainer,
  "array-ops": ArrayOpsExplainer,
  none: null,
};

/** Renders the explainer for a VisualKind, or nothing. */
export function Explainer({ kind }: { kind: VisualKind }) {
  const Cmp = explainerRegistry[kind];
  return Cmp ? <Cmp /> : null;
}
