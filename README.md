```
pnpm install
pnpm dev
```

```
import { Draft2019 } from "json-schema-library";
         ^^^^^^^^^
SyntaxError: The requested module 'json-schema-library' does not provide an export named 'Draft2019'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:134:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:217:5)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)

```
