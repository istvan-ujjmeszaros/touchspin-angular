---
"@touchspin/angular": patch
---

Make renderer packages optional peer dependencies so consuming apps only pull the renderer(s) they use. This removes the transitive Bootstrap dependency when using the vanilla renderer. No API changes; reinstall after upgrading.
