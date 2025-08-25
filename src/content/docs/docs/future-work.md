---
title: "Future Work"
order: 6
---

## The OTel Collector and OBI

Many of our design decisions were impacted by the current state of actively evolving tooling. As they mature, including these tools would provide significant benefit to Vispyr’s design:

- OpenTelemetry’s eBPF Instrumentation, OBI, is currently under development. Availability of OTLP-compatible eBPF instrumentation tooling would simplify the deployment of the Vispyr Agent and expand Vispyr’s support to more languages.
- The OpenTelemetry Collector is actively developing support for the profiles signal. Once mature, this would allow us to move toward a vendor-agnostic pipeline that supports all telemetry signals.
- Support for logs in the OpenTelemetry JavaScript SDK is still under active development. Inclusion of logs would expand Vispyr’s coverage to all four telemetry signals and make it easier for users to monitor their applications in one location.

As these technologies develop and stable versions are released, we plan to incorporate all into Vispyr to further enhance its capabilities.

## Expanding Language Support

Because system metrics are scraped separately from an application, and both traces and profiles are generated from an isolated instrumentation script, we plan to expand Vispyr’s support to include a multitude of languages. Specifically, the OpenTelemetry and Pyroscope SDKs currently have stable integration with Python, Ruby, Go, Java, .NET, and Rust.

## Horizontal Scaling

In order to enable Vispyr to accommodate larger projects, scaling considerations will need to be addressed. While it is fully possible to horizontally scale the various components of the observability stack, scaling is not as simple as adding a load balancer and scaling rules in front of the collector. Scaling needs to take into account stateful components within the collector (such as spanmetrics calculated from incoming spans and traces), scaling features built into the collector (such as Alloy’s clustering mode), and configuring scaling for data stores that are embedded within backend components (e.g., Pyroscope and Prometheus are applications that contain an internal database).

## Profiles UI Interactions

With the substantial data provided by Pyroscope’s profiler, profiles can become overwhelming to parse. To further enhance a user’s experience with Vispyr’s Observability dashboard, we plan to augment profiles displayed in flamegraph views with the following features:

1. Allow for noisy, package-specific stack frames to be filtered from each profile (i.e., `node:internal`, `node_modules`)
2. Modify the stack frame descriptions to be more meaningful
3. Incorporate stack frame tagging via metadata to more easily group similar files or functions
